// React, Next import
import { useContext } from "react"
import Image from "next/image";

// Local imports
import { ActiveContentContext, ActiveTabContext, SectionsContext } from "../../site";
import { badgeColorOptions } from "@/data/colorOptions";
import AboutMeTabsShowcase from "../../AboutMeTabsShowcase";

export function EditableAboutMe1({ section, sectionInd }) {
    const { _activeTab, setActiveTab } = useContext(ActiveTabContext);
    const { activeSectionInd, setActiveSectionInd } = useContext(ActiveContentContext);
    const { _sections, _setSections, deleteSection, _saveSite } = useContext(SectionsContext);

    const openContentTabEditor = () => {
        setActiveTab("content");
        setActiveSectionInd(sectionInd);
    }

    const delButton = (e) => {
        if (e.key === "Delete") {
            document.getElementById(`delete_modal_${section.id}`).showModal()
        }
    }

    return (
        <section className="group">
            <button className="btn z-40 bg-blue-700 border-none hover:bg-blue-900 mt-[-30px] absolute right-0 mr-7 hidden group-hover:block" onClick={()=>document.getElementById(`delete_modal_${section.id}`).showModal()}><i className="fa-solid fa-trash text-lg text-white p-0"></i></button>
            <dialog id={`delete_modal_${section.id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete Section!</h3>
                    <p className="py-4">Are you sure you want to delete this {section.sectionType} section?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn mr-4 bg-blue-700 hover:bg-blue-900 duration-200 text-white" onClick={() => deleteSection(section)}>Yes</button>
                            <button className="btn bg-red-700 hover:bg-red-900 duration-200 text-white">No</button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div className={`block border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} group-hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
                <div className="px-5 md:px-10">
                    <div className="mx-auto w-full max-w-[1400px]">
                        <div className="py-12 md:py-16 lg:py-20">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-5">
                                <div className="relative min-h-[400px] w-7/12 lg:w-3/4 overflow-hidden rounded-2xl aspect-[3/4]">
                                    <Image 
                                        src={section.avatar.src}
                                        fill
                                        alt="Header avatar"
                                        style={{ transform: section.avatar.style.transform}}
                                        className={`absolute left-0 top-0 origin-top-left w-full h-full`}/>
                                </div>
                                <div className="flex-col flex items-start gap-2">
                                    <div className="">
                                        <div className="flex-col flex items-start">
                                            <div className="flex-col flex items-start gap-2">
                                                {section.status.text ? <div className={`flex grid-cols-2 items-center px-3 py-1 rounded-md ${badgeColorOptions[section.status.color]}`}>
                                                    <div className={`h-2 w-2 min-w-[8px] ${section.status.color === 'slate' ? 'bg-black' : 'bg-white'} rounded-full`}></div>
                                                    <div className="text-sm sm:text-sm ml-2">{section.status.text}</div>
                                                </div> : null}
                                                <p className="flex-col text-slate-600 text-sm sm:text-xl">{section.job}</p>
                                                <h1 className="font-bold text-4xl md:text-6xl mb-5 md:mb-6 lg:mb-8">{section.name}</h1>
                                                <div className="flex-col text-slate-600 text-sm sm:text-xl text-justify" dangerouslySetInnerHTML={{ __html: section.description }}></div>
                                            </div>
                                            <AboutMeTabsShowcase section={section}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function EditableAboutMe2({ section, sectionInd }) {
    const { _activeTab, setActiveTab } = useContext(ActiveTabContext);
    const { activeSectionInd, setActiveSectionInd } = useContext(ActiveContentContext);
    const { _sections, _setSections, deleteSection, _saveSite } = useContext(SectionsContext);

    const openContentTabEditor = () => {
        setActiveTab("content");
        setActiveSectionInd(sectionInd);
    }

    return (
        <section className="group">
            <button className="btn z-40 bg-blue-700 border-none hover:bg-blue-900 mt-[-30px] absolute right-0 mr-7 hidden group-hover:block" onClick={()=>document.getElementById(`delete_modal_${section.id}`).showModal()}><i className="fa-solid fa-trash text-lg text-white p-0"></i></button>
            <dialog id={`delete_modal_${section.id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete Section!</h3>
                    <p className="py-4">Are you sure you want to delete this {section.sectionType} section?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn mr-4 bg-blue-700 hover:bg-blue-900 duration-200 text-white" onClick={() => deleteSection(section)}>Yes</button>
                            <button className="btn bg-red-700 hover:bg-red-900 duration-200 text-white">No</button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div className={`border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} group-hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
                <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                    <div className="flex flex-col items-center justify-center">
                        <div className="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16">
                            <h2 className="text-5xl md:text-7xl font-bold">{section.name}</h2>
                            <p className="mx-auto mt-4 max-w-[528px] text-slate-700 text-2xl max-[479px]:text-xl">{section.job}</p>
                        </div>
                        <div className="mb-8 grid w-10/12 grid-cols-1 md:mb-12 md:grid-cols-3 md:gap-4 lg:mb-16 items-center">
                            <div href="#" className="relative mb-12 flex h-[1000px] lg:h-[1200px] max-w-full grid-cols-1 flex-col gap-4 overflow-hidden rounded-xl border border-solid border-black bg-white text-black [box-shadow:rgb(0,_0,_0)_9px_9px] [grid-area:1/1/2/2] md:[grid-area:1/1/2/4]">
                                <div className="absolute bottom-0 left-0 right-0 top-auto z-20 flex w-full max-w-[800px] flex-col items-start justify-start rounded-xl bg-white p-6 md:bottom-2 md:left-2">
                                    {section.status.text ? <div className={`flex grid-cols-2 items-center px-3 py-1 rounded-md ${badgeColorOptions[section.status.color]}`}>
                                        <div className={`h-2 w-2 min-w-[8px] ${section.status.color === 'slate' ? 'bg-black' : 'bg-white'} rounded-full`}></div>
                                        <div className="text-sm sm:text-sm ml-2">{section.status.text}</div>
                                    </div> : null}
                                    <div className="flex-col text-slate-600 text-sm sm:text-xl text-justify mt-5" dangerouslySetInnerHTML={{ __html: section.description }}></div>
                                    <AboutMeTabsShowcase section={section}/>
                                </div>
                                <div className="relative w-full h-full overflow-hidden text-center">
                                    <Image 
                                    src={section.avatar.src}
                                    fill
                                    alt="Header avatar"
                                    style={{ transform: section.avatar.style.transform}}
                                    className={`absolute left-0 top-0 origin-top-left`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}