"use client";

import React, { useState } from "react";

export default function Slider({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        console.log(currentIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div>
            <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
                <div style={{ backgroundImage: `url(${slides[currentIndex].img})`}} className={`w-full h-full rounded-2xl duration-500 bg-center bg-contain bg-no-repeat`}></div>

                <div className="absolute top-[50%] left-5 cursor-pointer"><i className="fa-solid fa-circle-arrow-left text-3xl text-slate-400" onClick={prevSlide}></i></div>

                <div className="absolute top-[50%] right-5 cursor-pointer"><i className="fa-solid fa-circle-arrow-right text-3xl text-slate-400" onClick={nextSlide}></i></div>

                <div className="flex top-4 justify-center py-2">
                    {slides.map((_, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`text-xs cursor-pointer m-3 ${slideIndex === currentIndex ? 'text-black' : 'text-slate-400'}`}><i className="fa-solid fa-circle"></i></div>
                    ))}
                </div>
            </div>
        </div>
    )
}