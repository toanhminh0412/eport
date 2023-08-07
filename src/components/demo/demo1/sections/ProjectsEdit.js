'use client';

import Image from "next/image";
import { useState, useContext } from "react";
import { SiteContext } from "../../ContentEditor";
import TextEditor from "@/components/TextEditor";

import { nanoid } from "nanoid";

export default function ProjectsEdit({
    content, 
    projectsRef,
    index, 
    moveUp, 
    moveDown
}) {
    const site = useContext(SiteContext);
    const [projects, _] = useState(content);
    const [projectsList, setProjectsList] = useState(content.projects.map(proj => ({id: nanoid(), ...proj})));

    // Remove a tag
    const removeTag = e => {
        const projIndex = e.target.dataset.projectIndex;
        const tag = e.target.dataset.tag;
        e.target.closest('.project-tag').remove();
        document.getElementById(`project-${projIndex}-tags-input`).value = document.getElementById(`project-${projIndex}-tags-input`).value.replace(tag, '');
    }

    // Add a new tag
    const addTag = e => {
        e.preventDefault();
        const tagInput = e.target.querySelector('input');
        const newTag = tagInput.value;
        const projIndex = e.target.dataset.projectIndex;
        const tagContainer = document.getElementById(`project-${projIndex}-tags`);
        tagContainer
            .insertAdjacentHTML('beforeend', 
            `<div class="project-tag py-1 px-2 rounded-xl bg-slate-100 shadow-lg cursor-default">
                ${newTag}
                <span class="ms-2 text-slate-700 hover:text-black hover:font-semibold" data-project-index="${projIndex}" data-tag="${newTag}">✕</span>
            </div>`);
        tagInput.value = '';
        document.getElementById(`project-${projIndex}-tags-input`).value += `,${newTag}`;
        tagContainer.querySelector(`span[data-tag="${newTag}"]`).addEventListener('click', removeTag);
    }

    // Upload a new project image for preview
    const uploadProjectImage = (e, index) => {
        const file = e.target.files[0];
        setProjectsList((prevProjectsList) => {
            return prevProjectsList.map((project, prevIndex) => {
                if (prevIndex === index) {
                    return {
                        ...project,
                        images: [...project.images, URL.createObjectURL(file)]
                    }
                }
                return project;  
            })
        })
    }

    // Remove a project image
    const removeProjectImage = (e, projIndex, imgIndex) => {
        setProjectsList((prevProjectsList) => {
            return prevProjectsList.map((project, prevIndex) => {
                if (prevIndex === projIndex) {
                    return {
                        ...project,
                        images: project.images.filter((_, index) => index !== imgIndex)
                    }
                }
                return project;  
            })
        })
        projectsRef.current['projects'][projIndex]['images'].splice(imgIndex, 1);
    }

    // Remove a project
    const removeProject = index => {
        setProjectsList(prevProjectsList => prevProjectsList.filter((_, prevIndex) => prevIndex !== index));
        projectsRef.current['projects'].splice(index, 1);
    }

    return (
        <div 
        ref={el => (projectsRef.current['index'] = el)}
        className="collapse collapse-arrow border border-slate-300"
        data-index={index}>
            <input type="checkbox" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium bg-white shadow-lg">
                {projects.heading}
            </div>

            {/* Move up/down buttons */}
            <div className="ms-4 z-10 absolute right-12 top-4">
                <div className="text-xl">
                    {index !== 1 ? <i className="fa-solid fa-arrow-up me-2 text-slate-300 hover:text-slate-700 active:text-slate-700 duration-200" onClick={() => moveUp(index)}></i> : null}
                    {index !== site.sections.length - 2 ? <i className="fa-solid fa-arrow-down text-slate-300 hover:text-slate-700 active:text-slate-700 duration-200" onClick={() => moveDown(index)}></i>: null}
                </div>
            </div>

            {/* Content */}
            <div className="collapse-content bg-white">
                <div className="p-3 md:p-6">
                    <div className="form-control w-full max-w-lg">
                        {/* Section visibility */}
                        <label className="label">
                            <span className="label-text">Hide section:</span>
                        </label>
                        <input
                        ref={el => (projectsRef.current['hidden'] = el)}
                        type="checkbox" 
                        className="toggle" 
                        defaultChecked={projects.hidden}/>
                        <label className="label text-xs">
                            <span><strong>Hint: </strong>Turn this on if you want this section to <strong>not be visible</strong> on your page.</span>
                        </label>
                        
                        {/* Section heading */}
                        <label className="label">
                            <span className="label-text">Section heading  (recommend &apos;Projects&apos;):</span>
                        </label>
                        <input ref={el => (projectsRef.current['heading'] = el)} type="text" placeholder="Section heading (recommend 'Projects')" className="input border-black w-full" defaultValue={projects.heading} />
                    </div>

                    {/* Projects */}
                    <div className="font-semibold mt-8">Project list:</div>
                    <div className="form-control">
                        {projectsList.map((project, projIndex) => (
                        <div key={project.id} className={`${projIndex === 0 ? '' : 'mt-12'} w-full`}>
                            {/* Title */}
                            <label className="label max-w-lg">
                                <span className="label-text">Project title:</span>
                                <span className="text-md text-slate-400 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => removeProject(projIndex)}><i className="fa-solid fa-trash me-2"></i>Remove project</span>
                            </label>
                            <input 
                            ref={el => {projectsRef.current['projects'][projIndex] = projectsRef.current['projects'][projIndex] ? projectsRef.current['projects'][projIndex] : {}; projectsRef.current['projects'][projIndex]['title'] = el}}
                            type="text" 
                            placeholder="e.g. Paint company website" 
                            className="input border-black w-full max-w-lg" 
                            defaultValue={project.title} />
                            
                            {/* Tags */}
                            <label className="label mt-2 max-w-lg">
                                <span className="label-text">Project tags:</span>
                            </label>
                            <form className="join max-w-lg" data-project-index={projIndex} onSubmit={addTag}>
                                <input 
                                className="input border-black join-item w-40 xs:w-auto" 
                                placeholder="Enter a tag"
                                required/>
                                <button className="btn btn-primary join-item">Add tag</button>
                            </form>
                            <input 
                            ref={el => {projectsRef.current['projects'][projIndex] = projectsRef.current['projects'][projIndex] ? projectsRef.current['projects'][projIndex] : {}; projectsRef.current['projects'][projIndex]['tags'] = el}}
                            id={`project-${projIndex}-tags-input`}
                            type="text"
                            className="hidden"
                            defaultValue={project.tags.join(',')}/>
                            <div id={`project-${projIndex}-tags`} className="flex flex-row flex-wrap gap-3 mt-3">
                                {project.tags.map((tag, index) => (
                                <div key={`${tag}-${index}`} className="project-tag py-1 px-2 rounded-xl bg-slate-100 shadow-lg cursor-default">
                                    {tag}
                                    <span className="ms-2 text-slate-700 hover:text-black hover:font-semibold" data-project-index={projIndex} data-tag={tag} onClick={removeTag}>✕</span>
                                </div>  
                                ))}
                            </div>
                            
                            {/* Images */}
                            <label className="label mt-2">
                                <span className="label-text">Project images:</span>
                            </label>
                            <div className="flex flex-row flex-wrap gap-6 not-prose">
                                {project.images.map((image, index) => (
                                <div key={`${image}-${index}`} className="relative border border-slate-300">
                                    <i className="fa-solid fa-xmark p-2 bg-white hover:bg-slate-400 duration-300 text-black rounded-full absolute top-[-10px] right-[-10px] border border-slate-600" onClick={e => {removeProjectImage(e, projIndex, index)}}></i>
                                    <Image 
                                    ref={
                                        el => {
                                            projectsRef.current['projects'][projIndex] = projectsRef.current['projects'][projIndex] ? projectsRef.current['projects'][projIndex] : {};
                                            projectsRef.current['projects'][projIndex]['images'] = projectsRef.current['projects'][projIndex]['images'] ? projectsRef.current['projects'][projIndex]['images'] : [];
                                            projectsRef.current['projects'][projIndex]['images'][index] = el;
                                        }
                                    }
                                    data-src={image}
                                    src={image} 
                                    alt="Project image" 
                                    width={300}
                                    height={200} 
                                    style={{objectFit: "cover"}} 
                                    className="w-[250px] xs:w-[300px] h-[200px]"/>
                                </div>
                                ))}
                                <div className="w-[250px] xs:w-[300px] h-[200px] bg-slate-200 hover:bg-slate-400 duration-300 text-center flex flex-col justify-center relative">
                                    <div className="text-center"><i className="fa-solid fa-plus text-black text-2xl me-2 my-auto"></i><span className="text-xl">Add image</span></div>
                                    <input type="file" accept="image/*" className="absolute top-0 left-0 w-full h-full opacity-0" onChange={(e) => {uploadProjectImage(e, projIndex)}}/>
                                </div>
                            </div>
                            
                            {/* Description */}
                            <label className="label mt-2">
                                <span className="label-text">Project description:</span>
                            </label>
                            <TextEditor 
                            paramRef={el => {projectsRef.current['projects'][projIndex] = projectsRef.current['projects'][projIndex] ? projectsRef.current['projects'][projIndex] : {}; projectsRef.current['projects'][projIndex]['description'] = el}}
                            defaultValue={project.description}
                            placeholder="e.g. I built a 6-sections professional landing page with HTML, CSS and JavaScript."
                            />
                        </div>
                        ))}
                        <div className="text-md text-slate-400 hover:text-slate-700 duration-300 mt-6 cursor-default w-fit" onClick={() => {setProjectsList([...projectsList, {id: nanoid(), title: 'Project name', tags: ['Tag 1', 'Tag 2'], images: [], description: 'Provide a short description for your project here.'}])}}><i className="fa-solid fa-plus me-2"></i>Add project</div>
                    </div>
                </div>
            </div>
        </div>
    )
}