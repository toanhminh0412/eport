// Next imports
import { useContext } from 'react';

// Local imports
import { ActiveContentContext, ActiveTabContext, SectionsContext } from '../../site';
import Service1Showcase from '../../ServiceShowcase';

export function EditableService1({ section, sectionInd}) {
    const {_activeTab, setActiveTab } = useContext(ActiveTabContext);
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
                <div className="mx-auto w-full max-w-[1400px] px-5 py-40">
                    <div className="flex flex-col items-center">
                        <div className="mb-8 md:mb-12 lg:mb-16">
                            <div className="w-full max-w-[800px] text-center">
                            <h2 className="font-bold text-5xl md:text-7xl mb-10">{section.heading}</h2>
                            <div className="mx-auto w-full max-w-lg mb-16">
                                <p className="tracking-[0.2px] text-slate-700 text-xl max-[479px]:text-lg">{section.description}</p>
                            </div>
                            <Service1Showcase section={section}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function EditableService2({ section, sectionInd }) {
    const {_activeTab, setActiveTab } = useContext(ActiveTabContext);
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
                <div className="mx-auto max-w-[1400px] px-5 py-40 md:px-10">
                    <div className="mx-auto w-full max-w-3xl text-center">
                        <h2 className="text-5xl md:text-7xl font-semibold">{section.heading}</h2>
                        <div className="mx-auto mb-8 mt-5 max-w-[528px] md:mb-12 lg:mb-16">
                            <p className="text-slate-700 text-lg max-[479px]:text-base">{section.description}</p>
                        </div>
                    </div>

                    <div className={`grid grid-cols-1 gap-6 sm:gap-8 ${section.services.length >= 6 ? "lg:grid-cols-3 md:grid-cols-2" : "lg:grid-cols-2"} lg:gap-12`}>
                        {section.services.map(service => (
                            <div key={service.id} className="relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(0,_0,_0)_9px_9px] lg:mb-4">
                                <div className="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
                                    <div><i className={`${service.icon} text-black text-2xl`}></i></div>
                                </div>
                                <p className="mb-5 text-2xl font-bold">{service.title}</p>
                                <h2 className="mb-5 text-xl font-semibold">{service.price}</h2>
                                <article className="text-lg" dangerouslySetInnerHTML={{ __html: service.content }}></article>
                            </div>
                        ))}      
                    </div>
                </div>
            </div>
        </section>
    )
}