"use client";

import React, { useState } from "react";
import Slider from "@/components/ui/Slider";
import Link from "next/link"

export default function Examples() {
    const slides1 = [
        {
            img: '/img/ckiki_aboutme.png'
        },
        {
            img: '/img/ckiki_skills.png'
        },
        {
            img: '/img/ckiki_experience.png'
        },
        {
            img: '/img/ckiki_services.png'
        },
        {
            img: '/img/ckiki_projects.png'
        },
        {
            img: '/img/ckiki_testimonials.png'
        },
        {
            img: '/img/ckiki_references.png'
        },
        {
            img: '/img/ckiki_getintouch.png'
        },
    ];

    const slides2 = [
        {
            img: '/img/header-bg.jpg'
        },
        {
            img: '/img/pricing-bg.jpg'
        },
    ];

    const slides3 = [
        {
            img: '/img/header-bg.jpg'
        },
        {
            img: '/img/pricing-bg.jpg'
        },
    ];

    return (
        <div>
            <div className="mb-10">
                <div className="flex justify-center mt-12 mb-[-20px]">
                    <h1 className="text-3xl">Crispian Kiki - Software Developer</h1>
                    <Link href="https://www.eport.site/ckiki" className="py-4 px-[2.5rem] rounded-16 bg-blue-500 hover:bg-blue-600 hover:shadow-none shadow-blue-btn text-xl decoration-black tracking-widest font-semibold duration-500 no-underline ml-5">Pricing</Link>
                </div>
                <Slider slides={slides1}></Slider>
            </div>
            
            <div className="mb-10">
                <div className="flex justify-center mt-12 mb-[-20px]">
                    <h1 className="text-3xl">Crispian Kiki - Software Developer</h1>
                    <button className="btn btn-active btn-primary ml-5">Visit Site</button>
                </div>
                <Slider slides={slides2}></Slider>
            </div>

            <div className="mb-20">
                <div className="flex justify-center mt-12 mb-[-20px]">
                    <h1 className="text-3xl">Crispian Kiki - Software Developer</h1>
                    <button className="btn btn-active btn-primary ml-5">Visit Site</button>
                </div>
                <Slider slides={slides3}></Slider>
            </div>
        </div>
    )
}