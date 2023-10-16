"use client";

// React, Next import
import { useState } from "react"
import Image from "next/image";

// Local imports
import { badgeColorOptions } from "@/data/colorOptions";

export function AboutMe1({ section }) {
    const [activeTabAboutMe, setActiveTabAboutMe] = useState(0);

    return (
        <section className="block">
            <div className="px-5 md:px-10">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="py-12 md:py-16 lg:py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-5">
                            <div className="relative min-h-[400px] w-3/4 overflow-hidden rounded-2xl aspect-[3/4]">
                                <Image 
                                    src={section.avatar.src}
                                    fill
                                    alt="Header avatar"
                                    style={{ transform: section.avatar.style.transform}}
                                    className={`absolute left-0 top-0 origin-top-left w-full h-full`}/>
                            </div>
                            <div className="flex-col flex items-start gap-2">
                                <div className="">
                                    <div className="flex-col flex items-start">
                                        <div className="flex-col flex items-start gap-2">
                                            {section.status.text ? <div className={`flex grid-cols-2 items-center px-3 py-1 rounded-md ${badgeColorOptions[section.status.color]}`}>
                                                <div className={`h-2 w-2 min-w-[8px] ${section.status.color === 'slate' ? 'bg-black' : 'bg-white'} rounded-full`}></div>
                                                <div className="text-sm sm:text-sm ml-2">{section.status.text}</div>
                                            </div> : null}
                                            <p className="flex-col text-slate-600 text-sm sm:text-xl">{section.job}</p>
                                            <h1 className="font-bold text-4xl md:text-6xl mb-5 md:mb-6 lg:mb-8">{section.name}</h1>
                                            <p className="flex-col text-slate-600 text-sm sm:text-xl text-justify" dangerouslySetInnerHTML={{ __html: section.description }}></p>
                                        </div>
                                        <div className="tabs mt-7">
                                            {section.tabs.map((tab, tabInd) => (
                                                <div key={tab.id} className={`tab tab-bordered text-sm sm:text-lg lg:text-xl mr-10 mb-6 font-bold no-underline text-orange-500 ${activeTabAboutMe === tabInd ? "tab-active" : ""}`} onClick={() => setActiveTabAboutMe(tabInd)}>{tab.tabHeading}</div> 
                                            ))}
                                        </div>

                                        {section.tabs.map((tab, tabInd) => 
                                            <div key={tab.id} className={`${activeTabAboutMe !== tabInd ? "hidden" : ""}`}>
                                                <ul>
                                                    {tab.tabContent.map(tabContent => <li key={tabContent.id} className="my-4 text-sm sm:text-xl"><span className="text-orange-500">{tabContent.key}: </span>{tabContent.value}</li>)}
                                                </ul>
                                            </div>
                                        )}
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