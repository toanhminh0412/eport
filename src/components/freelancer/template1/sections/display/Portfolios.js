// Next imports
import Image from "next/image"
import Link from "next/link"

// Local imports
import { convertToURL } from "@/helpers/helpers"
import PortfolioShowcase from "../../PortfolioShowcase"

export function Portfolio1({ section }) {
    return (
        <section className="block bg-white">
            <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
                <div className="">
                <div className="text-center">
                    <h2 className="font-bold text-3xl md:text-5xl">{section.heading}</h2>
                    <div className="mx-auto mt-4 max-w-[528px] mb-8 md:mb-12 lg:mb-16">
                    <p className="text-[#636262] max-[479px]:text-sm">{section.tagline}</p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-[1040px] w-fit grid-cols-1 md:grid-cols-2 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch">
                    {section.projects.map((project) => (
                    <div key={project.id}>
                        {/* Project modal */}
                        <input type="checkbox" id={`project_modal_${project.id}`} className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box w-10/12 max-w-3xl">
                                <label htmlFor={`project_modal_${project.id}`} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">x</label>
                                <h3 className="font-bold text-lg">{project.name}</h3>
                                {project.images.length > 0 ? <div className="my-4">
                                <PortfolioShowcase project={project}/>
                                </div> : null}
                                <div className="py-4" dangerouslySetInnerHTML={{__html: project.description}}></div>
                                {project.projectUrl.href ? <div className="modal-action">
                                    <Link href={convertToURL(project.projectUrl.href)} target="_blank" className="btn bg-blue-700 hover:bg-blue-900 duration-200 text-white">{project.projectUrl.text}</Link>
                                </div> : null}
                            </div>
                            <label className="modal-backdrop" htmlFor={`project_modal_${project.id}`}>Close</label>
                        </div>

                        {/* Project container */}
                        <label htmlFor={`project_modal_${project.id}`} className="relative flex max-w-full flex-col items-center justify-center text-black h-64 w-96 lg:w-128 box-border border-2 border-transparent hover:border-blue-500 duration-200">
                            <Image width={200} height={200} src={project.images.length > 0 ? project.images[0].src : "https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a942fd2e6cfa2_Rectangle%201%20(2).svg"} alt="" className="inline-block h-full w-full object-cover brightness-75"/>
                            <div className="absolute flex flex-col items-center justify-center bg-white px-8 py-4 text-center rounded-sm">
                                <p className="font-medium text-sm sm:text-xl">{project.name}</p>
                                <p className="max-[479px]:text-sm mt-2 font-light">{project.company}</p>
                            </div>
                        </label>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    )
}

export function Portfolio2({ section }) {
    return (
        <section className="block bg-white prose w-full max-w-none p-8 md:p-16">
            <h1 className="mb-4">{section.heading}</h1>
            <p className="mt-0">{section.tagline}</p>
            <div className="flex flex-col gap-6">
                {section.projects.map(project => (
                <div key={project.id} className="w-full shadow-xl border border-slate-300 rounded-2xl flex flex-col md:flex-row gap-8 p-4">
                    {project.images.length > 0 ? 
                    <div className="w-full md:w-1/2 aspect-video not-prose">
                        <PortfolioShowcase project={project}/>
                    </div> : null}
                    <div className="grow">
                        <h2 className="mb-0 mt-2">{project.name}</h2>
                        <h3 className="mb-0 mt-2">{project.company}</h3>
                        <div className="text-base font-light text-slate-500" dangerouslySetInnerHTML={{__html: project.description}}></div>
                        <Link href={project.projectUrl.href ? convertToURL(project.projectUrl.href) : "#"} target="_blank" className="btn bg-blue-700 hover:bg-blue-900 duration-100 text-white w-fit">{project.projectUrl.text}</Link>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}