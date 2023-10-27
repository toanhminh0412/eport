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
        <section className="group" style={{zoom: "60%"}}>
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
            <div className={`block relative border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} group-hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
                {/* This div allows scrolling to this section put the section in the middle of the page */}
                <div id={section.id} className="absolute top-[-250px]"></div>
                <div className="px-5 md:px-10">
                    <div className="mx-auto w-full max-w-[1400px]">
                        <div className="py-40">
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
        <section className="group" style={{zoom: "60%"}}>
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
            <div className={`relative border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} group-hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
                {/* This div allows scrolling to this section put the section in the middle of the page */}
                <div id={section.id} className="absolute top-[-250px]"></div>
                <div className="py-40 mx-auto w-full max-w-7xl px-5 md:px-10">
                    <div className="flex justify-center items-center flex-col gap-8 pb-24">
                        <div className="relative w-7/12 lg:w-3/4 max-w-[300px] overflow-hidden rounded-2xl aspect-[3/4]">
                            <Image 
                                src={section.avatar.src}
                                fill
                                alt="Header avatar"
                                style={{ transform: section.avatar.style.transform}}
                                className={`absolute left-0 top-0 origin-top-left w-full h-full`}/>
                        </div>

                        <div className="text-center">
                            <h2 className="text-5xl md:text-7xl font-bold mb-12 text-center mt-5">{section.name}</h2>
                            <h3 className="text-lg sm:text-2xl font-semibold my-5">{section.job}</h3>
                            <div className="text-base sm:text-lg mb-10" dangerouslySetInnerHTML={{ __html: section.description }}></div>
                        </div>
                        <div className={`grid grid-cols-1 gap-20 ${section.tabs.length === 3 ? "md:grid-cols-3" : section.tabs.length === 2 ? "md:grid-cols-2" : ""} md:gap-8 lg:gap-12`}>
                            {section.tabs.map(tab => (
                                <div key={tab.id} className="relative grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20">
                                    <div className="absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-orange-500 bg-white px-5 py-3 [box-shadow:rgb(0,_0,_0)_4px_4px]">
                                    <p className="text-base font-bold md:text-lg">{tab.tabHeading}</p>
                                    </div>
                                    <ul className="-mt-10">
                                        {tab.tabContent.map(tabContent => <li key={tabContent.id} className="my-4 text-base  sm:text-lg"><span className="text-orange-500 font-semibold">{tabContent.key}: </span>{tabContent.value}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}