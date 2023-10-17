"use client";

// Next imports
import { useState } from "react";
import Image from "next/image";

// Local imports
import { btnColorOptions } from "@/data/colorOptions";

export default function TestimonialShowcase({section}) {
    const [viewMore, setViewMore] = useState(true);

    const toggleViewMoreButton = () => {
        setViewMore(false);
    }

    const toggleViewLessButton = () => {
        setViewMore(true);
    }
    return (
        <div>
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
    )
}