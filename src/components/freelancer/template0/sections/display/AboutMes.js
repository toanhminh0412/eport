"use client";

// React, Next import
import { useState } from "react"
import Image from "next/image";

export function AboutMe1() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <section className="block">
            <div className="px-5 md:px-10">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="py-12 md:py-16 lg:py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-5">
                            <div className="min-h-[400px] overflow-hidden">
                                <Image src="/img/freelancer-template0-aboutme1-avatar.jpg" alt="" width={400} height={800} className="rounded-2xl sm:ml-16" style={{objectFit: "contain"}}/>
                            </div>
                            <div className="flex-col flex items-start gap-2">
                                <div className="">
                                    <div className="flex-col flex items-start">
                                        <div className="flex-col flex items-start gap-2">
                                            <div className="flex grid-cols-2 items-center bg-slate-300 px-3 py-1 rounded-md">
                                                <div className="h-2 w-2 min-w-[8px] bg-black rounded-full mr-2"></div>
                                                <div className="text-sm sm:text-sm">Available for work</div>
                                            </div>
                                            <p className="flex-col text-slate-600 text-sm sm:text-xl">Software Developer</p>
                                            <h1 className="font-bold text-4xl md:text-6xl mb-5 md:mb-6 lg:mb-8">Eport Website</h1>
                                            <p className="flex-col text-slate-600 text-sm sm:text-xl text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                        <div className="tabs mt-7">
                                            <div className={`tab tab-bordered text-sm sm:text-lg lg:text-xl mr-10 mb-6 font-bold no-underline text-orange-500 ${activeTab === 0 ? "tab-active" : ""}`} onClick={() => setActiveTab(0)}>Basic Information</div> 
                                            <div className={`tab tab-bordered text-sm sm:text-lg lg:text-xl mr-10 mb-6 font-bold no-underline text-orange-500 ${activeTab === 1 ? "tab-active" : ""}`} onClick={() => setActiveTab(1)}>Education</div> 
                                            <div className={`tab tab-bordered text-sm sm:text-lg lg:text-xl mr-10 mb-6 font-bold no-underline text-orange-500 ${activeTab === 2 ? "tab-active" : ""}`} onClick={() => setActiveTab(2)}>Experiences</div>
                                        </div>

                                        <div className={`${activeTab !== 0 ? "hidden" : ""}`}>
                                            <ul>
                                                <li className="my-4 text-sm sm:text-xl"><span className="text-orange-500">Name: </span>Eport Website</li>
                                                <li className="my-4 text-sm sm:text-xl"><span className="text-orange-500">Jobs: </span>Website Builder</li>
                                                <li className="my-4 text-sm sm:text-xl"><span className="text-orange-500">Age: </span>22</li>
                                            </ul>
                                        </div>

                                        <div className={`${activeTab !== 1 ? "hidden" : ""}`}>
                                            <ul>
                                                <li className="my-4 text-sm sm:text-xl"><span className="text-orange-500">Graduated from: </span>University of Alberta</li>
                                                <li className="my-4 text-sm sm:text-xl"><span className="text-orange-500">Major: </span>Computer Science</li>
                                                <li className="my-4 text-sm sm:text-xl"><span className="text-orange-500">GPA: </span>4.0 / 4.0</li>
                                            </ul>
                                        </div>

                                        <div className={`${activeTab !== 2 ? "hidden" : ""}`}>
                                            <ul>
                                                <li className="my-4 text-sm sm:text-xl"><span className="text-orange-500">Company: </span>Eport</li>
                                                <li className="my-4 text-sm sm:text-xl"><span className="text-orange-500">Position: </span>Fullstack Developer</li>
                                                <li className="my-4 text-sm sm:text-xl"><span className="text-orange-500">From: </span>August, 2023</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}