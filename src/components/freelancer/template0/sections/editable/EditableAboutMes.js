"use client";

// React, Next import
import { useState, useContext } from "react"
import Image from "next/image";

// Local imports
import { ActiveContentContext, ActiveTabContext, SectionsContext } from "../../site";
import { badgeColorOptions } from "@/data/colorOptions";

export function EditableAboutMe1({ section, sectionInd }) {
    const { _activeTab, setActiveTab } = useContext(ActiveTabContext);
    const { activeSectionInd, setActiveSectionInd } = useContext(ActiveContentContext);
    const { _sections, _setSections, deleteSection } = useContext(SectionsContext);
    const [activeTabAboutMe, setActiveTabAboutMe] = useState(0);

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
            <button className="btn bg-blue-700 border-none z-40 absolute hover:bg-blue-900 top-[-35px] right-0 mr-7 hidden group-hover:block" onClick={()=>document.getElementById(`delete_modal_${section.id}`).showModal()}><i className="fa-solid fa-trash text-lg text-white"></i></button>
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
                                <div className="min-h-[400px] overflow-hidden">
                                    <Image src={section.avatar} alt="Avatar" width={400} height={800} className="rounded-2xl sm:ml-16" style={{objectFit: "contain"}}/>
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
                                                <p className="flex-col text-slate-600 text-sm sm:text-xl text-justify" dangerouslySetInnerHTML={{ __html: section.description }}></p>
                                            </div>
                                            <div className="tabs mt-7">
                                                <div className={`tab tab-bordered text-sm sm:text-lg lg:text-xl mr-10 mb-6 font-bold no-underline text-orange-500 ${activeTabAboutMe === 0 ? "tab-active" : ""}`} onClick={() => setActiveTabAboutMe(0)}>{section.tab[0].tabHeading}</div> 
                                                <div className={`tab tab-bordered text-sm sm:text-lg lg:text-xl mr-10 mb-6 font-bold no-underline text-orange-500 ${activeTabAboutMe === 1 ? "tab-active" : ""}`} onClick={() => setActiveTabAboutMe(1)}>{section.tab[1].tabHeading}</div> 
                                                <div className={`tab tab-bordered text-sm sm:text-lg lg:text-xl mr-10 mb-6 font-bold no-underline text-orange-500 ${activeTabAboutMe === 2 ? "tab-active" : ""}`} onClick={() => setActiveTabAboutMe(2)}>{section.tab[2].tabHeading}</div>
                                            </div>

                                            <div className={`${activeTabAboutMe !== 0 ? "hidden" : ""}`}>
                                                <ul>
                                                    {section.tab[0].tabContent.map((tab, index) => <li key={index} className="my-4 text-sm sm:text-xl"><span className="text-orange-500">{tab.key}: </span>{tab.value}</li>)}
                                                </ul>
                                            </div>

                                            <div className={`${activeTabAboutMe !== 1 ? "hidden" : ""}`}>
                                                <ul>
                                                    {section.tab[1].tabContent.map((tab, index) => <li key={index} className="my-4 text-sm sm:text-xl"><span className="text-orange-500">{tab.key}: </span>{tab.value}</li>)}
                                                </ul>
                                            </div>

                                            <div className={`${activeTabAboutMe !== 2 ? "hidden" : ""}`}>
                                                <ul>
                                                    {section.tab[2].tabContent.map((tab, index) => <li key={index} className="my-4 text-sm sm:text-xl"><span className="text-orange-500">{tab.key}: </span>{tab.value}</li>)}
                                                </ul>
                                            </div>
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