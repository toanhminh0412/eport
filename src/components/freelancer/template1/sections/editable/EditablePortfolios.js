// Next imports
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react";

// Local imports
import { ActiveTabContext, ActiveContentContext, SectionsContext } from "../../site";
import { convertToURL } from "@/helpers/helpers"
import { Swiper, SwiperSlide } from 'swiper/react';

// Third party imports
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export function EditablePortfolio1({ section, sectionInd }) {
    const { _activeTab, setActiveTab } = useContext(ActiveTabContext);
    const { activeSectionInd, setActiveSectionInd } = useContext(ActiveContentContext);
    const { _sections, _setSections, deleteSection } = useContext(SectionsContext);

    const openContentTabEditor = () => {
        setActiveTab("content");
        setActiveSectionInd(sectionInd);
    }

    return (
        <div className="group relative">
            <button className="btn bg-blue-700 border-none z-40 absolute hover:bg-blue-900 top-[-35px] right-0 mr-7 hidden group-hover:block" onClick={()=>document.getElementById(`delete_modal_${section.id}`).showModal()}><i className="fa-solid fa-trash text-lg text-white"></i></button>
            <dialog id={`delete_modal_${section.id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete Section!</h3>
                    <p className="py-4">Are you sure you want to delete this {section.sectionType} section?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn mr-4 bg-blue-700 hover:bg-blue-900 duration-200 text-white" onClick={() => deleteSection(section)}>Yes</button>
                            <button className="btn mr-[-50px] bg-red-700 hover:bg-red-900 duration-200 text-white">No</button>
                        </form>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <section className={`block bg-white box-border border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
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
                            <div className="modal ml-96 lg:ml-[32rem] mt-48 p-0 modal-middle">
                                <div className="modal-box w-10/12 max-w-3xl mr-96 mb-40">
                                    <label htmlFor={`project_modal_${project.id}`} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">x</label>
                                    <h3 className="font-bold text-lg">{project.name}</h3>
                                    {project.images.length > 0 ? <div className="my-4">
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        pagination={{ clickable: true }}
                                        navigation
                                        spaceBetween={50}>
                                        {project.images.map(image => <SwiperSlide key={image.id}><Image width={200} height={200} src={image.src} alt="" className="h-full w-full object-contain brightness-75"/></SwiperSlide>)}
                                    </Swiper>
                                    </div> : null}
                                    <p className="py-4" dangerouslySetInnerHTML={{__html: project.description}}></p>
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
        </div>
    )
}