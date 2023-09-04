'use client';

import Slider from "./Slider";
import React, { useState } from "react";

export function ProjectModal({project, index}) {
    const [showMore, setShowMe] = useState(false);

    const toggleCloseButton = () => {
        setShowMe(false);
    };

    return (
        <dialog id={`project-${index}`} className="modal text-start">
            <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={toggleCloseButton}>✕</button>
                <h3 className="font-bold text-lg mt-0">{project.title}</h3>
                {project.images.length > 0 ?
                    <Slider slides={project.images}></Slider>
                : null}

                {project.images.length > 0 ? 
                    <div> {showMore ? <div className="py-4" dangerouslySetInnerHTML={{ __html: project.description }}></div>
                    : <div className="py-4" dangerouslySetInnerHTML={{ __html: project.description.slice(0, 500).concat(" ...") }}></div>}
                    </div>
                :   <div>{showMore ? <div className="pb-4" dangerouslySetInnerHTML={{ __html: project.description }}></div>
                    : <div className="pb-4" dangerouslySetInnerHTML={{ __html: project.description.slice(0, 500).concat(" ...") }}></div>}
                </div>}
                {project.description.length >= 500 ?
                    <div className="btn" onClick={() => setShowMe(!showMore)}>
                        {showMore ? "Show less" : "Show more"}
                    </div>
                : null}
            </form>
            <form method="dialog" className="modal-backdrop">
                <button onClick={toggleCloseButton}>close</button>
            </form>
        </dialog>
    )
}