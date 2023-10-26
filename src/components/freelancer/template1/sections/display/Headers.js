// Next imports
import Link from "next/link"
import Image from "next/image"

// Local imports
import { btnColorOptions, badgeColorOptions } from "@/data/colorOptions"
import { convertToURL } from "@/helpers/helpers"

export function Header1({ section }) {
    return (
        <section style={{backgroundImage: `url(${section.backgroundImage})`}} className="w-full aspect-video flex flex-col min-[470px]:flex-row gap-4 min-[470px]:gap-0 pb-12 min-[470px]:py-0 bg-black bg-cover">
            <div className="relative w-full min-[470px]:w-5/12 aspect-[9/16] mx-auto min-[470px]:h-full brightness-75 overflow-hidden">
                <Image 
                    src={section.avatar.src}
                    fill
                    alt="Header avatar"
                    style={{ transform: section.avatar.style.transform}}
                    className={`absolute left-0 top-0 origin-top-left min-[470px]:w-full min-[470px]:h-full min-[470px]:object-contain`}/>
            </div>
            <div className="w-full min-[470px]:w-7/12 prose max-w-none p-0 flex flex-col justify-center">
                <div className="w-11/12 md:w-10/12 mx-auto">
                    <h3 className="text-md lg:text-xl mt-0 lg:mt-12">{section.heading}</h3>
                    <h1 className="text-xl lg:text-3xl xl:text-4xl">{section.slogan}</h1>
                    <div>
                        <div>
                            {section.actionBtns.map(actionBtn => actionBtn.isExternal ? <Link key={actionBtn.id} href={actionBtn.externalHref ? convertToURL(actionBtn.externalHref) : "#"} className={`btn ${btnColorOptions[actionBtn.color]} mr-2`} target="_blank">{actionBtn.text}</Link> : <Link key={actionBtn.id} href={actionBtn.internalHref ? actionBtn.internalHref : "#"} className={`btn ${btnColorOptions[actionBtn.color]} mr-2`} scroll={false}>{actionBtn.text}</Link>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function Header2({ section }) {
    return (
        <header style={{backgroundImage: `url(${section.backgroundImage})`}} className="w-full flex flex-row bg-cover">
            {/* Hero Container */}
            <div className="mx-auto w-full max-w-screen-2xl px-5 py-16 md:px-10 md:py-24 lg:py-32 flex flex-col md:flex-row gap-8">
            {/* Component */}
                {/* Hero Content */}
                <div className="flex w-full md:w-1/2 flex-col justify-center p-3">
                    {/* Hero Title */}
                    <h1 className="mb-6 lg:mb-12 text-2xl font-bold md:text-3xl"> {section.heading} </h1>
                    <p className="mb-6 text-3xl md:text-5xl text-[#636262] md:mb-10 lg:mb-12"> {section.slogan} </p>
                    {/* Hero Button */}
                    <div className="flex flex-row flex-wrap gap-6">
                        {section.actionBtns.map(actionBtn => actionBtn.isExternal ? (
                        <Link key={actionBtn.id} href={actionBtn.externalHref ? convertToURL(actionBtn.externalHref) : "#"} target="_blank" className={`flex flex-row ${badgeColorOptions[actionBtn.color]} px-8 py-4 font-semibold transition shadow-xl shadow-slate-500 hover:shadow-none`}>
                            <p className="mr-6 font-bold">{actionBtn.text}</p>
                            <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-none">
                            <title>Arrow Right</title>
                            <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                            </svg>
                        </Link>
                        ) : (
                        <Link key={actionBtn.id} href={actionBtn.internalHref ? actionBtn.internalHref : "#"} className={`flex flex-row ${badgeColorOptions[actionBtn.color]} px-8 py-4 font-semibold transition shadow-xl shadow-slate-500 hover:shadow-none`}>
                            <p className="mr-6 font-bold">{actionBtn.text}</p>
                            <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-none">
                            <title>Arrow Right</title>
                            <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                            </svg>
                        </Link>
                        ))}
                    </div>
                </div>
                {/* Hero Image */}
                <div className="w-full md:w-1/2">
                    <div className="w-10/12 max-w-[640px] aspect-[3/4] max-h-full relative overflow-hidden">
                        <Image 
                            fill 
                            src={section.avatar.src} 
                            alt="" 
                            style={{ transform: section.avatar.style.transform}}
                            className={`absolute left-0 top-0 origin-top-left w-full h-full`}/>
                    </div>
                </div>
            </div>
        </header>
    )
}