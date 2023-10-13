'use client';

// Next imports
import Image from "next/image"
import { useContext, useState } from "react"

// Local imports
import { ActiveContentContext, ActiveTabContext, SectionsContext } from "../../site"
import { btnColorOptions } from "@/data/colorOptions";

export function EditableTestimonial1({ section, sectionInd }) {
    const {_activeTab, setActiveTab } = useContext(ActiveTabContext);
    const { activeSectionInd, setActiveSectionInd } = useContext(ActiveContentContext);
    const { _sections, _setSections, deleteSection } = useContext(SectionsContext);
    const [viewMore, setViewMore] = useState(true);

    const openContentTabEditor = () => {
        setActiveTab("content");
        setActiveSectionInd(sectionInd);
    }

    const toggleViewMoreButton = () => {
        setViewMore(false);
    }

    const toggleViewLessButton = () => {
        setViewMore(true);
    }

    return (
        <section className="group">
            <button className="btn z-40 bg-blue-700 border-none hover:bg-blue-900 mt-[-30px] absolute right-0 mr-7 hidden group-hover:block" onClick={()=>document.getElementById(`delete_modal_${section.id}`).showModal()}><i className="fa-solid fa-trash text-lg text-white p-0"></i></button>
            <dialog id={`delete_modal_${section.id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete Section!</h3>
                    <p className="py-4">Are you sure you want to delete this {section.sectionType} section?</p>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <form className="dialog">
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
                <div className="py-16 md:py-24 lg:py-32">
                    <div className="px-5 md:px-10">
                        <div className="mx-auto w-full max-w-7xl">
                            <div className="mx-auto w-full max-w-3xl">
                                <div className="text-center">
                                    <h2 className="font-semibold text-3xl md:text-5xl">What <span className="bg-contain bg-center bg-no-repeat text-orange-500">our clients</span> are saying</h2>
                                    <div className="mx-auto mt-4 max-w-[528px] mb-8 md:mb-12 lg:mb-16">
                                        <p className="text-slate-700 text-lg">{section.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-8 lg:gap-12 justify-items-center sm:justify-items-stretch mb-8 md:mb-12 lg:mb-16">
                                {viewMore ?
                                    <>
                                        {section.testimonials.slice(0, 3).map(testimonial => (
                                            <div key={testimonial.id} className="relative grid-cols-1 grid flex-col justify-around gap-6 border border-solid border-black bg-white px-6 py-8 [box-shadow:rgb(0,_0,_0)_9px_9px]  max-[767px]:p-8 rounded-2xl mb-8 lg:mb-4">
                                                <div className="flex">
                                                    {[...Array(testimonial.ratingStars)].map((_, i) =>
                                                        <div key={i} className="inline-block text-yellow-400 max-w-full flex-none mr-1 w-4 text-lg"><i className="fa-solid fa-star"></i></div>
                                                    )}
                                                    {[...Array(5 - testimonial.ratingStars)].map((_, i) =>
                                                        <div key={i} className="inline-block text-slate-300 max-w-full flex-none mr-1 w-4 text-lg"><i className="fa-solid fa-star"></i></div>
                                                    )}
                                                </div>
                                                <div className="text-slate-700" dangerouslySetInnerHTML={{ __html: testimonial.content}}></div>
                                                <div className="flex-row flex items-start">
                                                    <Image src={testimonial.image} alt="" className="inline-block h-16 w-16 max-w-full object-cover rounded-full mr-4" width={50} height={50}/>
                                                    <div className="flex-col flex items-start">
                                                        <h6 className="text-base font-semibold">{testimonial.name}</h6>
                                                        <p className="text-sm text-slate-700">{testimonial.job}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                :
                                    <>
                                        {section.testimonials.map(testimonial => (
                                            <div key={testimonial.id} className="relative grid-cols-1 grid flex-col justify-around gap-6 border border-solid border-black bg-white px-6 py-8 [box-shadow:rgb(0,_0,_0)_9px_9px]  max-[767px]:p-8 rounded-2xl mb-8 lg:mb-4">
                                                <div className="flex">
                                                    {[...Array(testimonial.ratingStars)].map((_, i) =>
                                                        <div key={i} className="inline-block text-yellow-400 max-w-full flex-none mr-1 w-4 text-lg"><i className="fa-solid fa-star"></i></div>
                                                    )}
                                                    {[...Array(5 - testimonial.ratingStars)].map((_, i) =>
                                                        <div key={i} className="inline-block text-slate-300 max-w-full flex-none mr-1 w-4 text-lg"><i className="fa-solid fa-star"></i></div>
                                                    )}
                                                </div>
                                                <div className="text-slate-700" dangerouslySetInnerHTML={{ __html: testimonial.content}}></div>
                                                <div className="flex-row flex items-start">
                                                    <Image src={testimonial.image} alt="" className="inline-block h-16 w-16 max-w-full object-cover rounded-full mr-4" width={50} height={50}/>
                                                    <div className="flex-col flex items-start">
                                                        <h6 className="text-base font-semibold">{testimonial.name}</h6>
                                                        <p className="text-sm text-slate-700">{testimonial.job}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                }
                            </div>
                            {section.testimonials.length > 3 ?
                                <div className="flex-col flex items-center justify-center">
                                    {viewMore ?
                                        <div className={`cursor-pointer ${btnColorOptions[section.actionBtn.color]} py-4 text-center font-semibold no-underline px-8 rounded-xl`} onClick={toggleViewMoreButton}>View More</div>
                                    :
                                        <div className={`cursor-pointer ${btnColorOptions[section.actionBtn.color]} py-4 text-center font-semibold no-underline px-8 rounded-xl`} onClick={toggleViewLessButton}>View Less</div>
                                    }
                                </div>
                            : null}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}