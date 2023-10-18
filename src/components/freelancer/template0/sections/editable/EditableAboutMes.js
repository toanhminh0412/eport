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
                    <div className="mx-auto w-full max-w-7xl">
                        <div className="py-12 md:py-16 lg:py-20">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-5">
                                <div className="relative min-h-[400px] w-3/4 overflow-hidden rounded-2xl aspect-[3/4]">
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