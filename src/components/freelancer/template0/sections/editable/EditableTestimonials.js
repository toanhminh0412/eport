// Next imports
import { useContext } from "react"

// Local imports
import { ActiveContentContext, ActiveTabContext, SectionsContext } from "../../site"
import { Testimonial1Showcase, Testimonial2Showcase } from "../../TestimonialShowcase";

export function EditableTestimonial1({ section, sectionInd }) {
    const {_activeTab, setActiveTab } = useContext(ActiveTabContext);
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
            <div className={`relative block border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} group-hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
                <div className="py-40">
                    <div className="px-5 md:px-10">
                        <div className="mx-auto w-full max-w-[1400px]">
                            <div className="mx-auto w-full max-w-3xl">
                                <div className="text-center">
                                    <h2 className="font-semibold text-3xl md:text-5xl">{section.heading}</h2>
                                    <div className="mx-auto mt-4 max-w-[528px] mb-8 md:mb-12 lg:mb-16">
                                        <p className="text-slate-700 text-xl max-[479px]:text-lg">{section.description}</p>
                                    </div>
                                </div>
                            </div>
                            <Testimonial1Showcase section={section}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function EditableTestimonial2({ section, sectionInd }) {
    const {_activeTab, setActiveTab } = useContext(ActiveTabContext);
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
            <div className={`border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} group-hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
                <div class="py-40 mx-auto w-full max-w-[1400px] px-5 md:px-10">
                    <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
                        <div class="max-[991px]:max-w-[720px]">
                            <h2 class="font-bold text-3xl md:text-5xl mb-5 md:mb-6 lg:mb-4 pb-8">{section.heading}</h2>
                            <div className="mx-auto mt-4">
                                <p className="text-slate-700 text-xl max-[479px]:text-lg">{section.description}</p>
                            </div>
                        </div>
                        <Testimonial2Showcase section={section}/>
                    </div>
                </div>
            </div>
        </section>
    )
}