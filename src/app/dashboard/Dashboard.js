"use client";

// React, Next imports
import { useEffect, useState, useContext, createContext } from "react";
import Link from "next/link";

// Local imports
import TemplateSelector from "./TemplateSelector";
import { Template0Thumbnail } from "@/components/eresume/thumbnails";
import { FreelancerThumbnail } from "@/components/freelancer/thumbnails";
import { convertMilliseconds } from "@/helpers/helpers";

const ProjectsContext = createContext();

export default function Dashboard({ user }) {
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
        <ProjectsContext.Provider value={{projects, setProjects}}>
            <main className="prose bg-slate-100 w-screen min-w-[400px] min-h-screen pt-24 pb-32 px-8 lg:px-20 max-w-none">
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
                <h4 className="mb-4">Email quota: {user.emailQuota} remaining
                    <div className="tooltip" data-tip="Number of emails customers can send you using the form on your published websites. This number is renewed at the beginning of each month">
                        <label tabIndex={0} className="btn btn-circle btn-ghost btn-xs text-info">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </label>
                    </div></h4>
                {/* Render all current projects */}
                {projects.length !== 0 ? 
                    <ProjectSort projects={projects}/>
                
                // Render text if there are no projects
                : <p className="text-center mt-40">
                    You don&apos;t have any project. <span className="link text-blue-500" onClick={() => document.getElementById('create_new_project_modal').showModal()}>Start one</span> right now!
                </p>}
            </main>
        </ProjectsContext.Provider>
    )
}

// Sort projects by last edited time
function ProjectSort({projects}) {
    projects.sort((a, b) => 
        (a.content.lastEdited > b.content.lastEdited) ? -1 : (a.content.lastEdited < b.content.lastEdited) ? 1 : 0
    )

    return (
        <div className="flex flex-row flex-wrap gap-6">
            {projects.map(project => <ProjectCard key={project.id} project={project}/>)}
        </div>
    )
}

// Render project card
function ProjectCard({project}) {
    if (project.type === "eresume" && project.content.templateId === 0) {
        return (
            <div className="card w-96 bg-base-100 shadow-xl">
                <Template0Thumbnail content={project.content.sections[0]} theme={project.content.theme}/>
                <div className="card-body not-prose relative">
                    {/* Project dropdown menu */}
                    <ProjectMenuButton projectId={project.id}/>
                    <ProjectDeleteModal projectType={project.type} projectId={project.id}/>

                    {/* Project content */}
                    <h2 className="card-title pr-6">{project.content.sections[0].fullName} - {project.content.sections[0].job}</h2>
                    <div><strong>Project id: </strong><span className="font-light">{project.id}</span></div>
                    <p><strong>E-resume</strong> | 
                        {project.content.published ? <span className="text-green-500"> Published <i className="fa-solid fa-check"></i></span> : <span className="text-red-500"> Not published <i className="fa-solid fa-xmark"></i></span>}
                    </p>
                    {project.content.lastEdited ? <p><strong>Last edited: </strong>{convertMilliseconds(new Date().getTime() - new Date(project.content.lastEdited).getTime()) + " ago"}</p> : null}
                    <div className="card-actions justify-end mt-3">
                        {project.content.published ? <Link href={`${project.type}/${project.content.domain}`} target="_blank" className="btn bg-orange-600 hover:bg-orange-800 duration-200 text-white">Visit site</Link> : null}
                        <Link href={`/dashboard/${project.type}?projectId=${project.id}`} className="btn bg-blue-700 hover:bg-blue-900 duration-200 text-white">Open project</Link>
                    </div>
                </div>
            </div>
        )
    }

    if (project.type === "freelancer") {
        return (
            <div className="card w-96 bg-base-100 shadow-xl">
                <FreelancerThumbnail content={project.content} templateId={project.content.templateId}/>
                <div className="card-body not-prose relative">
                    {/* Project dropdown menu */}
                    <ProjectMenuButton projectId={project.id}/>
                    <ProjectDeleteModal projectType={project.type} projectId={project.id}/>

                    {/* Project content */}
                    <h2 className="card-title pr-6">Freelancer project</h2>
                    <div><strong>Project id: </strong><span className="font-light">{project.id}</span></div>
                    <p><strong>Freelancer</strong> | 
                        {project.content && project.content.published ? <span className="text-green-500"> Published <i className="fa-solid fa-check"></i></span> : <span className="text-red-500"> Not published <i className="fa-solid fa-xmark"></i></span>}
                    </p>
                    {project.content.lastEdited ? <p><strong>Last edited: </strong>{convertMilliseconds(new Date().getTime() - new Date(project.content.lastEdited).getTime()) + " ago"}</p> : null}
                    <div className="card-actions justify-end mt-3">
                        {project.content && project.content.published ? <Link href={`${project.type}/${project.content.domain}`} target="_blank" className="btn bg-orange-600 hover:bg-orange-800 duration-200 text-white">Visit site</Link> : null}
                        <Link href={`/dashboard/${project.type}?projectId=${project.id}`} className="btn bg-blue-700 hover:bg-blue-900 duration-200 text-white">Open project</Link>
                    </div>
                </div>
            </div>
        )
    }
}

function ProjectMenuButton({projectId}) {
    return (
        <div className="dropdown dropdown-end absolute top-6 right-4">
            <label tabIndex={0} className="btn btn-sm bg-slate-100 hover:bg-slate-200 shadow-lg px-2"><i className="fa-solid fa-ellipsis"></i></label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><span onClick={() => document.getElementById(`project_${projectId}_delete_modal`).showModal()}><i className="fa-regular fa-trash-can mr-2 text-red-500"></i>Delete project</span></li>
            </ul>
        </div>
    )
}

function ProjectDeleteModal({projectType, projectId}) {
    const {projects, setProjects} = useContext(ProjectsContext);
    const [loading, setLoading] = useState(false);

    // Delete project by id
    const deleteProject = async() => {
        setLoading(true);
        const response = await fetch(`/api/${projectType}/delete?projectId=${projectId}`);
        const data = await response.json();
        console.log(data);
        // Success
        if (data.status === 200) {
            console.log('Delete project successfully');
            let newProjects = projects.filter(project => project.id !== projectId);
            setProjects(newProjects);
        } 
        // Error
        else {
            console.log('Delete project error');
        }
    }

    return (
        <dialog id={`project_${projectId}_delete_modal`} className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Delete project</h3>
                <p className="py-4">Are you sure you want to delete project with id <strong className="break-normal">{projectId}</strong>?</p>
                <div className="modal-action">
                    {loading ? 
                    <button className="btn bg-blue-700 hover:bg-blue-900 duration-200 text-white">
                        <span className="loading loading-spinner"></span>
                        Deleting
                    </button>
                    :
                    <button className="btn bg-blue-700 hover:bg-blue-900 duration-200 text-white" onClick={deleteProject}>Yes</button>}
                    <form method="dialog">
                        <button className="btn bg-red-700 hover:bg-red-900 duration-200 text-white">No</button>
                    </form>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}