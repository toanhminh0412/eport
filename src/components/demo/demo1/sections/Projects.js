// Next imports
import Image from "next/image"

// Local imports
import { ProjectModal } from "@/components/ui/ProjectModal"
import ProjectModalButton from "./ProjectModalButton"

export default function Projects({content}) {
    return (
        <section className="prose max-w-none w-11/12 mx-auto shadow-md rounded-lg p-2 pt-4 xs:p-8 my-4 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900">
            <h1 className="dark:text-white">{content.heading}</h1>
            <div>
                {content.projects.map((project, projIndex) => (
                <div key={`${project.title}-${projIndex}`}>
                    {/* Render project modals */}
                    <ProjectModal project={project} index={projIndex}/>

                    {/* Render initial project displays */}
                    <div className={`p-3 ${projIndex === 0 ? "pb-12" : "py-12"} border-b border-slate-300 dark:border-blue-400 lg:flex ${projIndex % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6`}>
                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-video w-full h-fit not-prose">
                                <Image 
                                    alt="project pic" 
                                    src={project.images[0]} 
                                    fill 
                                    className="rounded-md" />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 text-justify">
                            <h2 className="lg:mt-0 dark:text-slate-200">{project.title}</h2>
                            <div className="dark:text-slate-200" dangerouslySetInnerHTML={{ __html: project.description.length > 500 ? project.description.slice(0, 500).concat(" ...") : project.description }}></div>
                            <div className="flex flex-row flex-wrap gap-3">
                                {project.tags.map((tag, tagIndex) => (
                                <div key={`${tag}-${tagIndex}`} className="py-1 px-2 rounded-xl bg-slate-100 dark:bg-slate-500 hover:bg-slate-400 dark:hover:bg-slate-700 dark:text-white duration-300 shadow-lg cursor-default">
                                    {tag}
                                </div>  
                                ))}
                            </div>

                            {/* Project modal button has to be client-rendered as it has an onClick event */}
                            <ProjectModalButton projIndex={projIndex}/>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}