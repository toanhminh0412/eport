// Next imports
import Image from "next/image"

// Local imports
import { ProjectModal } from "@/components/ui/ProjectModal"

export default function Projects({content}) {
    return (
        <section className="prose max-w-none w-11/12 mx-auto shadow-md rounded-lg p-2 pt-4 xs:p-8 my-4 border border-slate-300 bg-white">
            <h1>{content.heading}</h1>
            <div>
                {content.projects.map((project, projIndex) => (
                <div key={`${project.title}-${projIndex}`}>
                    {/* Render project modals */}
                    <ProjectModal project={project} index={projIndex}/>

                    {/* Render initial project displays */}
                    <div className={`p-3 ${projIndex === 0 ? "pb-12" : "py-12"} border-b border-slate-300 lg:flex ${projIndex % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6`}>
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
                            <h2 className="lg:mt-0">{project.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: project.description.length > 500 ? project.description.slice(0, 500).concat(" ...") : project.description }}></div>
                            <div className="flex flex-row flex-wrap gap-3">
                                {project.tags.map((tag, tagIndex) => (
                                <div key={`${tag}-${tagIndex}`} className="py-1 px-2 rounded-xl bg-slate-100 hover:bg-slate-400 duration-300 shadow-lg cursor-default">
                                    {tag}
                                </div>  
                                ))}
                            </div>
                            <button 
                                className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white mt-6"
                                onClick={() => {document.getElementById(`project-${projIndex}`).showModal()}}>See more</button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}