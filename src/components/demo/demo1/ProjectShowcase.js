'use client';

import Image from "next/image";
import { useState } from "react";

export default function ProjectShowcase({projects}) {
    const [activeTags, setActiveTags] = useState([]);

    const tags = new Set();
    projects.forEach(project => project.tags.forEach(tag => tags.add(tag)));

    // Activate or deactivate a tag
    const toggleTag = (tag) => {
        if (activeTags.includes(tag)) {
            setActiveTags(activeTags.filter(t => t !== tag));
        } else {
            setActiveTags([...activeTags, tag]);
        }
    }

    // Filter projects based on active tags
    const haveActiveTags = (project) => {
        if (activeTags.length === 0) {
            return true;
        };
        for (let i = 0; i < project.tags.length; i++) {
            if (activeTags.includes(project.tags[i])) {
                return true;
            }
        }
        return false;
    }
    
    return (
        <div className="text-center">
            {projects.map((project, index) => (
            <dialog key={index} id={`project-${index}`} className="modal text-start">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg mt-0">{project.title}</h3>
                    {project.images.length > 0 ? <div className="text-center">
                        <div className="carousel h-60 rounded-box shadow-lg border border-slate-300 not-prose">
                            {project.images.map((image, imgIndex) => (
                            <div key={imgIndex} className="carousel-item">
                                <img src={image} alt="Project image" className="h-full" />
                            </div> 
                            ))}
                        </div>
                    </div> : null}
                    {project.images.length > 0 ? 
                    <div className="py-4" dangerouslySetInnerHTML={{ __html: project.description }}></div>
                    : <div className="pb-4" dangerouslySetInnerHTML={{ __html: project.description }}></div>}
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            ))}

            <div className="flex flex-row flex-wrap gap-3">
                {Array.from(tags).map((tag, index) => (
                <div key={`${tag}-${index}`} className={`py-1 px-2 rounded-xl ${activeTags.includes(tag) ? 'bg-slate-300 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-400'} duration-300 shadow-lg cursor-default`} onClick={() => {toggleTag(tag)}}>
                    {tag}
                </div>  
                ))}
            </div>
            <h4>Click on each project to view the details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mt-10">
                {projects.map((project, index) => (
                    <div key={index} className={`relative w-full aspect-video duration-500 ${haveActiveTags(project) ? '' : 'hidden'}`}>
                        <div className="absolute top-0 left-0 w-full h-full bg-black z-10 opacity-10 hover:opacity-50 transition-opacity rounded-box" onClick={() => {document.getElementById(`project-${index}`).showModal();}}></div>
                        {project.images.length > 0 ? 
                        <Image alt="project pic" src={project.images[0]} fill className="rounded-md" style={{objectFit: 'cover'}}/> 
                        : 
                        <div className="h-full flex flex-col justify-center">
                            <div className="font-semibold">{project.title}</div>
                        </div>}
                    </div>
                ))}
            </div>
        </div>
    )
}