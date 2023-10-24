// React, Next import
import Image from "next/image";

// Local imports
import { badgeColorOptions } from "@/data/colorOptions";
import AboutMeTabsShowcase from "../../AboutMeTabsShowcase";

export function AboutMe1({ section }) {

    return (
        <section className="block">
            <div className="px-5 md:px-10">
                <div className="mx-auto w-full max-w-[1400px]">
                    <div className="py-40">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-5">
                            <div className="relative min-h-[400px] w-7/12 lg:w-3/4 overflow-hidden rounded-2xl aspect-[3/4]">
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
                                            <div className="flex-col text-slate-600 text-sm sm:text-xl text-justify" dangerouslySetInnerHTML={{ __html: section.description }}></div>
                                        </div>
                                        <AboutMeTabsShowcase section={section}/>
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

export function AboutMe2({ section }) {
    return (
        <section>
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                <div className="flex flex-col items-center justify-center">
                    <div className="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16">
                        <h2 className="text-5xl md:text-7xl font-bold">{section.name}</h2>
                        <p className="mx-auto mt-4 max-w-[528px] text-slate-700 text-2xl max-[479px]:text-xl">{section.job}</p>
                    </div>
                    <div className="mb-8 grid w-10/12 grid-cols-1 md:mb-12 md:grid-cols-3 md:gap-4 lg:mb-16 items-center">
                        <div href="#" className="relative mb-12 flex h-[1000px] lg:h-[1200px] max-w-full grid-cols-1 flex-col gap-4 overflow-hidden rounded-xl border border-solid border-black bg-white text-black [box-shadow:rgb(0,_0,_0)_9px_9px] [grid-area:1/1/2/2] md:[grid-area:1/1/2/4]">
                            <div className="absolute bottom-0 left-0 right-0 top-auto z-20 flex w-full max-w-[800px] flex-col items-start justify-start rounded-xl bg-white p-6 md:bottom-2 md:left-2">
                                {section.status.text ? <div className={`flex grid-cols-2 items-center px-3 py-1 rounded-md ${badgeColorOptions[section.status.color]}`}>
                                    <div className={`h-2 w-2 min-w-[8px] ${section.status.color === 'slate' ? 'bg-black' : 'bg-white'} rounded-full`}></div>
                                    <div className="text-sm sm:text-sm ml-2">{section.status.text}</div>
                                </div> : null}
                                <div className="flex-col text-slate-600 text-sm sm:text-xl text-justify mt-5" dangerouslySetInnerHTML={{ __html: section.description }}></div>
                                <AboutMeTabsShowcase section={section}/>
                            </div>
                            <div className="relative w-full h-full overflow-hidden text-center">
                                <Image 
                                src={section.avatar.src}
                                fill
                                alt="Header avatar"
                                style={{ transform: section.avatar.style.transform}}
                                className={`absolute left-0 top-0 origin-top-left`}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}