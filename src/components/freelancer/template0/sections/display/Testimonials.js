'use client';

// Next imports
import Image from "next/image"
import { useState } from "react";

// Local imports
import { btnColorOptions } from "@/data/colorOptions";

export function Testimonials1({ section }) {
    const [viewMore, setViewMore] = useState(true);

    const toggleViewMoreButton = () => {
        setViewMore(false);
    }

    const toggleViewLessButton = () => {
        setViewMore(true);
    }

    return (
        <section className="relative block">
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
                                                <Image src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="inline-block max-w-full flex-none mr-1 w-3.5" width={10} height={10}/>
                                                <Image src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="inline-block max-w-full flex-none mr-1 w-3.5" width={10} height={10}/>
                                                <Image src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="inline-block max-w-full flex-none mr-1 w-3.5" width={10} height={10}/>
                                                <Image src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="inline-block max-w-full flex-none mr-1 w-3.5" width={10} height={10}/>
                                                <Image src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="inline-block max-w-full flex-none mr-1 w-3.5" width={10} height={10}/>
                                            </div>
                                            <div className="text-slate-700"><span>&quot;</span>{testimonial.content}<span>&quot;</span></div>
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
                                                <Image src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="inline-block max-w-full flex-none mr-1 w-3.5" width={10} height={10}/>
                                                <Image src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="inline-block max-w-full flex-none mr-1 w-3.5" width={10} height={10}/>
                                                <Image src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="inline-block max-w-full flex-none mr-1 w-3.5" width={10} height={10}/>
                                                <Image src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="inline-block max-w-full flex-none mr-1 w-3.5" width={10} height={10}/>
                                                <Image src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="inline-block max-w-full flex-none mr-1 w-3.5" width={10} height={10}/>
                                            </div>
                                            <div className="text-slate-700"><span>&quot;</span>{testimonial.content}<span>&quot;</span></div>
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
        </section>
    )
}