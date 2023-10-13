// Next imports
import Link from "next/link";
// Next, React imports
import { useContext } from "react";

// Local imports
import { ActiveTabContext, ActiveContentContext, SectionsContext } from "../../site";
import { convertToURL } from "@/helpers/helpers";

export function EditableTestimonial1({ section, sectionInd }) {
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
                    <div className="mx-auto flex-col flex max-w-3xl items-center text-center">
                        <h2 className="font-bold text-3xl md:text-5xl mb-8 md:mb-12 lg:mb-16">{section.heading}</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch mb-5 md:mb-6 lg:mb-8">
                        {section.reviews.map(review => (
                        <div key={review.id} className="grid-cols-1 flex flex-col border border-solid border-[#cdcdcd] bg-white rounded-md p-8 md:p-10">
                            <div className="flex flex-row">
                            {[...Array(review.rating)].map((_, i) => (
                                <i key={i} className="fa-solid fa-star text-orange-500"></i>
                            ))}
                            </div>
                            <div className="flex flex-col gap-6 justify-between mt-6 flex-grow">
                                <div className="text-[#636262] flex-grow">&quot;{review.review}&quot;</div>
                                <div className="flex-row flex justify-between">
                                    <div className="flex-col flex items-start">
                                        <h6 className="text-base font-bold">{review.reviewerName}</h6>
                                        <p className="text-[#636262] text-sm sm:text-sm">{review.reviewerJob}</p>
                                    </div>
                                    {review.reviewUrl ? <Link href={convertToURL(review.reviewUrl)} target="_blank" className="link">See review</Link> : null}
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}