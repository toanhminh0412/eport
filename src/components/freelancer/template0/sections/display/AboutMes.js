"use client";

// React, Next import
import { useState } from "react"
import Image from "next/image";

export function AboutMe1({ section }) {
    const [activeTabAboutMe, setActiveTabAboutMe] = useState(0);

    return (
        <section className="block">
            <div className="px-5 md:px-10">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="py-12 md:py-16 lg:py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-5">
                            <div className="min-h-[400px] overflow-hidden">
                                <Image src={section.avatar} alt="Avatar" width={400} height={800} className="rounded-2xl sm:ml-16" style={{objectFit: "contain"}}/>
                            </div>
                            <div className="flex-col flex items-start gap-2">
                                <div className="">
                                    <div className="flex-col flex items-start">
                                        <div className="flex-col flex items-start gap-2">
                                            <div className="flex grid-cols-2 items-center bg-slate-300 px-3 py-1 rounded-md">
                                                <div className="h-2 w-2 min-w-[8px] bg-black rounded-full mr-2"></div>
                                                <div className="text-sm sm:text-sm">{section.tag}</div>
                                            </div>
                                            <p className="flex-col text-slate-600 text-sm sm:text-xl">{section.job}</p>
                                            <h1 className="font-bold text-4xl md:text-6xl mb-5 md:mb-6 lg:mb-8">{section.name}</h1>
                                            <p className="flex-col text-slate-600 text-sm sm:text-xl text-justify">{section.description}</p>
                                        </div>
                                        <div className="tabs mt-7">
                                            <div className={`tab tab-bordered text-sm sm:text-lg lg:text-xl mr-10 mb-6 font-bold no-underline text-orange-500 ${activeTabAboutMe === 0 ? "tab-active" : ""}`} onClick={() => setActiveTabAboutMe(0)}>{section.tab[0].tabHeading}</div> 
                                            <div className={`tab tab-bordered text-sm sm:text-lg lg:text-xl mr-10 mb-6 font-bold no-underline text-orange-500 ${activeTabAboutMe === 1 ? "tab-active" : ""}`} onClick={() => setActiveTabAboutMe(1)}>{section.tab[1].tabHeading}</div> 
                                            <div className={`tab tab-bordered text-sm sm:text-lg lg:text-xl mr-10 mb-6 font-bold no-underline text-orange-500 ${activeTabAboutMe === 2 ? "tab-active" : ""}`} onClick={() => setActiveTabAboutMe(2)}>{section.tab[2].tabHeading}</div>
                                        </div>

                                        <div className={`${activeTabAboutMe !== 0 ? "hidden" : ""}`}>
                                            <ul>
                                                {section.tab[0].tabContent.map((tab, index) => <li key={index} className="my-4 text-sm sm:text-xl"><span className="text-orange-500">{tab.key}: </span>{tab.value}</li>)}
                                            </ul>
                                        </div>

                                        <div className={`${activeTabAboutMe !== 1 ? "hidden" : ""}`}>
                                            <ul>
                                                {section.tab[1].tabContent.map((tab, index) => <li key={index} className="my-4 text-sm sm:text-xl"><span className="text-orange-500">{tab.key}: </span>{tab.value}</li>)}
                                            </ul>
                                        </div>

                                        <div className={`${activeTabAboutMe !== 2 ? "hidden" : ""}`}>
                                            <ul>
                                                {section.tab[2].tabContent.map((tab, index) => <li key={index} className="my-4 text-sm sm:text-xl"><span className="text-orange-500">{tab.key}: </span>{tab.value}</li>)}
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