'use client';

import { useState, } from "react";
import Image from "next/image";
import TextEditor from "@/components/TextEditor";

export default function ProjectsEdit({content, projectsRef}) {
    /*** Projects section ***/
    const [projects, setProjects] = useState(content);
    const [categories, setCategories] = useState(content.categories);
    const [projectCategories, setProjectCategories] = useState(content.categories);
    const [projectsList, setProjectsList] = useState(content.projects);
    
    const [categoriesEditState, setCategoriesEditState] = useState(false);

    // Remove a category from Categories section
    const removeCategory = index => {
        setCategories(prevCategories => prevCategories.filter((_, prevIndex) => prevIndex !== index));
        // projectsRef.current['categories'].splice(index, 1);
    }

    // Save edited categories
    const saveCategories = () => {
        setProjectCategories(categories);
        projectsRef.current['categories'].filter(categoryInput => categories.includes(categoryInput.value));
    }

    // Upload a new project image for preview
    const uploadProjectImage = (e, index) => {
        const file = e.target.files[0];
        console.log(URL.createObjectURL(file));
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
        <div className="collapse collapse-arrow border border-slate-300">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium bg-white shadow-lg">
                {projects.heading}
            </div>
            <div className="collapse-content bg-white">
                <div className="p-3 md:p-6">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Section heading  (recommend &apos;Projects&apos;):</span>
                        </label>
                        <input ref={el => (projectsRef.current['heading'] = el)} type="text" placeholder="Section heading (recommend 'Projects')" className="input border-black w-full" defaultValue={projects.heading} />
                    </div>
                    <div className="form-control max-w-lg mt-4">
                        <label className="label">
                            <span className="label-text">Categories:</span>
                            {!categoriesEditState ? 
                            (<span className="text-md text-slate-400 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => {setCategoriesEditState(true)}}><i className="fa-solid fa-pen me-2"></i>Edit categories</span>)
                            :
                            (<span className="text-md text-slate-400 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => {setCategoriesEditState(false); saveCategories()}}><i className="fa-solid fa-check me-2"></i>Save categories</span>)}
                        </label>
                        {categories.map((category, index) => (
                        categoriesEditState ? 
                            (<div key={`${category}-${index}-edit`} className="flex flex-row">
                                <input 
                                ref={el => {projectsRef.current['categories'][index] = projectsRef.current['categories'][index] ? projectsRef.current['categories'][index] : el;}}
                                type="text" 
                                placeholder="e.g. Web design" 
                                className="input border-black my-1 w-60" 
                                defaultValue={category} />
                                <i className="fa-solid fa-trash text-md text-slate-400 hover:text-slate-700 duration-300 cursor-default my-auto ms-2" onClick={() => removeCategory(index)}></i>
                            </div>):
                            (<li key={`${category}-${index}`} className="m-0">{category}</li>)
                        ))}
                        {categoriesEditState ? 
                        (<div className="text-md text-slate-400 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => {setCategories([...categories, 'New category'])}}><i className="fa-solid fa-plus me-2"></i>Add category</div>) : null}
                    </div>
                    <div className="font-semibold mt-8">Project list:</div>
                    <div className="form-control">
                        {projectsList.map((project, projIndex) => (
                        <div key={`${project.title}-${projIndex}`} className={`${projIndex === 0 ? '' : 'mt-12'} w-full`}>
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

                            <label className="label mt-2 max-w-lg">
                                <span className="label-text">Project categories:</span>
                            </label>
                            <select 
                            ref={el => {projectsRef.current['projects'][projIndex] = projectsRef.current['projects'][projIndex] ? projectsRef.current['projects'][projIndex] : {}; projectsRef.current['projects'][projIndex]['categories'] = el}}
                            className="select border-black w-full max-w-lg" 
                            multiple>
                                {projectCategories.map((category, index) => (
                                <option key={`${category}-${index}`} value={index} selected={project.categories.includes(index)}>{category}</option>
                                ))}
                            </select>

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
                                    src={image} 
                                    alt="Project image" 
                                    width={300} 
                                    height={200} 
                                    style={{objectFit: "cover"}} 
                                    className="w-[300px] h-[200px]"/>
                                </div>
                                ))}
                                <div className="w-[300px] h-[200px] bg-slate-200 hover:bg-slate-400 duration-300 text-center flex flex-col justify-center relative">
                                    <p className="text-center"><i className="fa-solid fa-plus text-black text-2xl me-2 my-auto"></i><span className="text-xl">Add image</span></p>
                                    <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0" onChange={(e) => {uploadProjectImage(e, projIndex)}}/>
                                </div>
                            </div>

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
                        <div className="text-md text-slate-400 hover:text-slate-700 duration-300 mt-6 cursor-default w-fit" onClick={() => {setProjectsList([...projectsList, {title: 'Project name', categories: [0], images: [], description: 'Provide a short description for your project here.'}])}}><i className="fa-solid fa-plus me-2"></i>Add project</div>
                    </div>
                </div>
            </div>
        </div>
    )
}