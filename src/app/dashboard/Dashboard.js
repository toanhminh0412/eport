"use client";

// React, Next imports
import { useEffect, useState } from "react";
import Link from "next/link";

// Local imports
import TemplateSelector from "./TemplateSelector";
import { Template0Thumbnail } from "@/components/eresume/thumbnails";


export default function Dashboard() {
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        // Get all projects for the currenly logged in user
        const getProjects = async() => {
            const response = await fetch('/api/user/get_projects');
            const data = await response.json();
            console.log(data);
            setProjects(data.projects);
        }

        getProjects();
    }, [])

    if (projects === null) {
        return (
            <main className="prose bg-slate-100 w-screen min-h-screen pt-24 pb-32 px-8 lg:px-20 max-w-none">
                <h1>
                    Loading projects
                    <span className="loading loading-dots loading-lg ml-2 mb-[-15px]"></span>
                </h1>
            </main>
        )
    }

    return (
        <main className="prose bg-slate-100 w-screen min-h-screen pt-24 pb-32 px-8 lg:px-20 max-w-none">
            {/* Render create new project modal */}
            <dialog id="create_new_project_modal" className="modal not-prose">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-xl text-center">Select a template</h3>
                    <div className="mt-3">
                        <TemplateSelector/>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            
            <h1 className="flex flex-row justify-between">Projects<button className="btn bg-blue-700 hover:bg-blue-900 duration-200 text-white" onClick={() => document.getElementById('create_new_project_modal').showModal()}>&#43; Create new project</button></h1>
            {/* Render all current projects */}
            {projects.length !== 0 ? 
                <div className="flex flex-row flex-wrap gap-6">
                    {projects.map(project => (
                    <div key={project.id} className="card w-96 bg-base-100 shadow-xl">
                        <Template0Thumbnail content={project.content.sections[0]} theme={project.content.theme}/>
                        <div className="card-body not-prose">
                            <h2 className="card-title">{project.content.sections[0].fullName} - {project.content.sections[0].job}</h2>
                            <p><strong>{project.type === 'eresume' ? "E-resume" : ""}</strong> | 
                                {project.content.published ? <span className="text-green-500"> Published <i className="fa-solid fa-check"></i></span> : <span className="text-red-500"> Not published <i className="fa-solid fa-xmark"></i></span>}
                            </p>
                            <div className="card-actions justify-end mt-3">
                                {project.content.published ? <Link href={`${project.type}/${project.content.domain}`} target="_blank" className="btn bg-orange-600 hover:bg-orange-800 duration-200 text-white">Visit site</Link> : null}
                                <Link href={`/dashboard/${project.type}?projectId=${project.id}`} className="btn bg-blue-700 hover:bg-blue-900 duration-200 text-white">Open project</Link>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            
            // Render text if there are no projects
            : <p className="text-center mt-40">
                You don&apos;t have any project. <span className="link text-blue-500" onClick={() => document.getElementById('create_new_project_modal').showModal()}>Start one</span> right now!
            </p>}
        </main>
    )
}