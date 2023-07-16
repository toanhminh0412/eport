'use client';

import Image from "next/image";
import { useState } from "react";

export default function ProjectShowcase({categories, projects}) {
    const [activeCategory, setActiveCategory] = useState(0);
    
    return (
        <div className="text-center">
            {projects.map((project, index) => (
            <dialog key={index} id={`project-${index}`} className="modal text-start">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <div className="carousel h-60 rounded-box shadow-lg border border-slate-300 not-prose">
                        {project.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="carousel-item">
                            <img src={image} alt="Project image" className="h-full" />
                        </div> 
                        ))}
                    </div>
                    <p className="py-4">{project.description}</p>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            ))}

            <div className="join">
                {categories.map((cat, index) => (
                    <input key={index} className="join-item btn btn-sm md:btn" type="radio" name="options" aria-label={cat} defaultChecked={index===0} onClick={() => {if (activeCategory !== index) {setActiveCategory(() => index)}}}/>
                ))}
            </div>
            <h4>Click on the project to view them</h4>
            <div className="grid grid-cols-2 gap-4 not-prose mt-10">
                {projects.map((project, index) => (
                    <div key={index} className={`relative w-full aspect-video duration-500 ${project.categories.includes(activeCategory) ? '' : 'hidden'}`}>
                        <div className="absolute top-0 left-0 w-full h-full bg-black z-10 opacity-10 hover:opacity-50 transition-opacity rounded-box" onClick={() => {document.getElementById(`project-${index}`).showModal();}}></div>
                        <Image alt="project pic" src={project.images[0]} fill className="rounded-box"/>
                    </div>
                ))}
            </div>
        </div>
    )
}