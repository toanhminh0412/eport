'use client';

import Slider from "./Slider";
import React, { useState } from "react";

export function ProjectModal({project, index}) {
    const [showMore, setShowMore] = useState(false);

    const toggleCloseButton = () => {
        setShowMore(false);
    };

    return (
        <dialog id={`project-${index}`} className="modal text-start prose">
            <form method="dialog" className="modal-box w-11/12 max-w-7xl overflow-auto">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={toggleCloseButton}>✕</button>
                <div className="lg:flex lg:flex-row lg:gap-3">
                    <div className="w-full lg:w-1/2">
                    {project.images.length > 0 ?
                        <Slider slides={project.images}></Slider>
                    : null}
                    </div>
                    <div className="w-full lg:w-1/2 text-justify lg:max-h-96 lg:pb-6 lg:overflow-auto mb-6">
                        <h2 className="mt-2 lg:mt-0">{project.title}</h2>
                        <article dangerouslySetInnerHTML={{ __html: project.description }}></article>
                        <div className="flex flex-row flex-wrap gap-3 mt-5">
                            {project.tags.map((tag, tagIndex) => (
                            <div key={`${tag}-${tagIndex}`} className="py-1 px-2 rounded-xl bg-slate-100 hover:bg-slate-400 duration-300 shadow-lg cursor-default">
                                {tag}
                            </div>  
                            ))}
                        </div>
                    </div>
                </div>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button onClick={toggleCloseButton}>close</button>
            </form>
        </dialog>
    )
}