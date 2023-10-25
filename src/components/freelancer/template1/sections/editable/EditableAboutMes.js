// Next, React imports
import { useContext } from "react";
import Image from "next/image";

// Local imports
import { ActiveTabContext, ActiveContentContext, SectionsContext } from "../../site";
import { badgeColorOptions } from "@/data/colorOptions";

export function EditableAboutMe1({ section, sectionInd }) {
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
            <section className={`block bg-white box-border border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
                <div className="py-12 md:py-16 lg:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
                        <div className="flex-col flex items-start gap-2">
                            <div className="">
                            <div className="flex-col flex items-start">
                                <div className="flex-col flex items-start gap-2">
                                {section.status.text ? <div className={`flex grid-cols-2 items-center px-3 py-1 rounded-md ${badgeColorOptions[section.status.color]}`}>
                                    <div className={`h-2 w-2 min-w-[8px] ${section.status.color === 'slate' ? 'bg-black' : 'bg-white'} rounded-full`}>
                                    </div>
                                    <div className="text-sm sm:text-sm ml-2">{section.status.text}</div>
                                </div> : null}
                                <h1 className="font-bold text-4xl md:text-6xl mb-5 md:mb-6 lg:mb-8">{section.heading}</h1>
                                <div className="flex-col text-[#808080] font-light text-sm sm:text-lg" dangerouslySetInnerHTML={{ __html: section.bio }}></div>
                                </div>
                                <div className="mb-8 mt-8 h-px w-full bg-black">
                                </div>
                                <div className="flex-row flex flex-wrap gap-3">
                                    {section.extraInfo.map(info => (
                                    <p key={info.id} className="flex-col text-[#808080] max-[479px]:text-sm">
                                        <strong>{info.name}: </strong> {info.value}
                                    </p>
                                    ))}
                                </div>
                                <div className="flex items-center justify-start gap-4 flex-wrap mb-6 md:mb-10 lg:mb-12"></div>
                            </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="max-w-[500px] aspect-square mx-auto relative">
                                <Image src={section.avatar} fill alt="About me avatar image" className="object-contain rounded-2xl"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export function EditableAboutMe2({ section, sectionInd }) {
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
            <section className={`block bg-white box-border border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
                {/* Container */}
                <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                        <div className="w-full max-w-xl aspect-square relative">
                            <Image src={section.avatar} fill alt="About me avatar image" className="object-contain rounded-2xl"/>
                        </div>
                        <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20">
                            {section.status.text ? <div className={`flex grid-cols-2 items-center px-3 py-1 rounded-md ${badgeColorOptions[section.status.color]} w-fit`}>
                                <div className={`h-2 w-2 min-w-[8px] ${section.status.color === 'slate' ? 'bg-black' : 'bg-white'} rounded-full`}>
                                </div>
                                <div className="text-sm sm:text-sm ml-2">{section.status.text}</div>
                            </div> : null}
                            <h2 className="text-3xl font-bold md:text-5xl">{section.heading}</h2>
                            <div className="text-sm text-[#808080] sm:text-base" dangerouslySetInnerHTML={{ __html: section.bio }}></div>
                            <div className="flex-row flex flex-wrap gap-3">
                                {section.extraInfo.map(info => (
                                <p key={info.id} className="flex-col text-[#808080] max-[479px]:text-sm">
                                    <strong>{info.name}: </strong> {info.value}
                                </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}