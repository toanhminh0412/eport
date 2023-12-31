"use client";

// Next imports
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';

// Local imports
import { btnColorOptions } from "@/data/colorOptions";

// Third party imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export function PortfolioModal({portfolio, portfolioInd}) {
    return (
        <div>
            <button className={`inline-block py-3 px-3 rounded-lg ${btnColorOptions[portfolio.actionBtns[0].color]} text-lg font-semibold no-underline mt-4 cursor-pointer`} onClick={() => {document.getElementById(`portfolio-${portfolioInd}`).showModal()}}>{portfolio.actionBtns[0].text}</button>
            <dialog id={`portfolio-${portfolioInd}`} className="modal text-start prose">
                <form method="dialog" className="modal-box w-11/12 max-w-7xl overflow-auto">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <div className="lg:flex lg:flex-row lg:gap-3">
                        {portfolio.images.length > 0 ?
                            <div className="w-full lg:w-1/2">
                                    <SwiperGallery portfolio={portfolio}/>  
                            </div>
                        : null}
                        <div className={`w-full ${portfolio.images.length > 0 ? "lg:w-1/2" : ""} text-justify lg:max-h-[500px] lg:pb-6 lg:overflow-auto mb-6`}>
                            <h2 className="mt-2 lg:mt-0">{portfolio.title}</h2>
                            <article dangerouslySetInnerHTML={{ __html: portfolio.description }}></article>
                            <div className="flex flex-row flex-wrap gap-3 mt-5">
                                {portfolio.tags.map((tag, tagIndex) => (
                                <div key={`${tag}-${tagIndex}`} className="py-1 px-2 rounded-xl bg-slate-100 hover:bg-slate-400 duration-300 shadow-lg cursor-default">
                                    {tag}
                                </div>  
                                ))}
                            </div>
                        </div>
                    </div>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export function SwiperGallery({ portfolio }) {
    return (
        <div>
            <Swiper
                navigation={true}
                pagination={{
                    type: 'fraction',
                  }}
                modules={[Navigation, Pagination]}
                className="max-w-[500px] max-h-[500px] p-[25px]">
                    {portfolio.images.map(image => (
                        <SwiperSlide key={image.id} className="bg-center">
                            <Image src={image.src} alt="" width={500} height={500} className="block w-full h-full" style={{objectFit: "contain"}}/>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    )
}