// Next imports
import Image from "next/image";

// Local imports
import { socialIconsStyle, socialIcons } from "@/data/social-icons";
import { btnColorOptions } from "@/data/colorOptions";
import { badgeColorOptions } from "@/data/colorOptions";

export function FreelancerThumbnail({ content, templateId }) {
    const headerSection = content.sections.filter((section) => section.sectionType === "header")[0];
    
    // Template 0 thumbnail
    if (templateId === 0) {
        if (headerSection === undefined) {
            return (
                <div className="w-full aspect-video">
                    <div className="prose max-w-none bg-no-repeat bg-cover bg-center rounded-lg h-60 shadow-md" style={{backgroundImage: `url("/img/freelancer-template0-header1-white-bg.png")`}}>
                        <div className="mx-auto w-full px-4">
                            <div className="grid grid-cols-2 items-center gap-2">
                                <div className="">
                                    <h2 className="text-sm font-bold text-orange-400">Eport Website</h2>
                                    <h3 className="text-xs">Build your website really fast with Eport. No code needed!</h3>
                                    <div className="">
                                        <p className="text-slate-700 text-[7px]">Eport is a versatile online platform that allows individuals, businesses, and organizations to create, customize, and publish websites without the need for advanced technical knowledge or coding skills.</p>
                                    </div>
                                    <div>
                                        <div className={`inline-flex justify-center items-center w-4 h-4 bg-transparent rounded-full border-[1px] border-solid mr-2 mb-1 text-[8px] no-underline text-blue-500 border-blue-500 duration-200 hover:bg-blue-500 hover:text-white hover:shadow-blue-500`}><i className="fa-brands fa-facebook"></i></div>
                                        <div className={`inline-flex justify-center items-center w-4 h-4 bg-transparent rounded-full border-[1px] border-solid mr-2 mb-1 text-[8px] no-underline text-pink-400 border-pink-400 duration-200 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white hover:shadow-pink-500`}><i className="fa-brands fa-instagram"></i></div>
                                        <div className={`inline-flex justify-center items-center w-4 h-4 bg-transparent rounded-full border-[1px] border-solid mr-2 mb-1 text-[8px] no-underline text-sky-500 border-sky-500 duration-200 hover:bg-sky-500 hover:text-white hover:shadow-sky-500`}><i className="fa-brands fa-twitter"></i></div>
                                    </div>
                                    <div>
                                        <div className={`inline py-1 px-2 rounded-16 border-none bg-orange-500 hover:bg-orange-600 duration-200 text-white text-[8px] font-semibold no-underline mr-2 cursor-pointer`}>Contact</div>
                                    </div>
                                </div>
                                <div className="relative w-3/4 overflow-hidden rounded-full aspect-[3/4] not-prose">
                                    <Image 
                                    src="/img/freelancer-template0-aboutme1-avatar.jpg"
                                    fill
                                    alt="Header avatar"
                                    className={`absolute left-0 top-0 origin-top-left w-full h-full`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            if (headerSection.sectionId === "header1") {
                return (
                    <div className="w-full aspect-video">
                        <div className="prose max-w-none bg-no-repeat bg-cover bg-center rounded-lg h-60 shadow-md" style={{backgroundImage: `url(${headerSection.backgroundImage})`}}>
                            <div className="mx-auto w-full px-4">
                                <div className="grid grid-cols-2 items-center gap-2">
                                    <div className="">
                                        <h2 className="text-sm font-bold text-orange-400">{headerSection.heading}</h2>
                                        <h3 className="text-xs">{headerSection.slogan}</h3>
                                        <div className="">
                                            <p className="text-slate-700 text-[7px]">{headerSection.description}</p>
                                        </div>
                                        <div>
                                            {headerSection.socials.map(socialBtn => <div key={socialBtn.id} className={`${socialIconsStyle[socialBtn.social]} inline-flex justify-center items-center w-4 h-4 bg-transparent rounded-full border-[1px] border-solid mr-2 mb-1 text-[8px] no-underline`}><i className={`${socialIcons[socialBtn.social]}`}></i></div>)}
                                        </div>
                                        <div>
                                            {headerSection.actionBtns.map(actionBtn => <div key={actionBtn.id} className="inline-block mt-1"><div className={`py-1 px-2 rounded-16 ${btnColorOptions[actionBtn.color]} text-[8px] font-semibold no-underline mr-2 cursor-pointer`}>{actionBtn.text}</div></div>)}
                                        </div>
                                    </div>
                                    <div className="relative w-3/4 overflow-hidden rounded-full aspect-[3/4] not-prose">
                                        <Image 
                                        src={headerSection.avatar.src}
                                        fill
                                        alt="Header avatar"
                                        style={{ transform: headerSection.avatar.style.transform}}
                                        className={`absolute left-0 top-0 origin-top-left w-full h-full`}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (headerSection.sectionId  === "header2") {
                return (
                    <div className="w-full aspect-video">
                        <div className="text-gray-900 antialiased leading-normal tracking-wider rounded-lg h-60 shadow-md">
                            <div className="flex items-center flex-wrap mx-auto h-full">
                                <div className="w-full h-full rounded-lg shadow-2xl bg-slate-200">
                                    <div className="p-4 text-center">
                                        <div className="block rounded-full shadow-xl mx-auto -mt-6 h-16 w-16 bg-cover bg-center" style={{backgroundImage: `url(${headerSection.avatar.src})`}}></div>
                                        <h1 className="text-sm font-bold mt-1">{headerSection.heading}</h1>
                                        <div className="mx-auto w-4/5 border-b-2 border-orange-500 opacity-25 -my-1"></div>
                                        <h3 className="text-xs mb-3 mt-4 flex items-center justify-center lg:justify-start">{headerSection.slogan}</h3>
                                        <div className="text-[7px]">{headerSection.description}</div>
                                        <div>
                                            {headerSection.actionBtns.map(actionBtn => <div key={actionBtn.id} className="inline-block mt-1"><div className={`py-1 px-2 rounded-16 ${btnColorOptions[actionBtn.color]} text-[8px] font-semibold no-underline mr-2 cursor-pointer`}>{actionBtn.text}</div></div>)}
                                        </div>

                                        <div className="w-4/5 mx-auto items-center justify-between">
                                            {headerSection.socials.map(socialBtn => <div key={socialBtn.id} className={`${socialIconsStyle[socialBtn.social]} inline-flex justify-center items-center w-4 h-4 bg-transparent rounded-full border-[1px] border-solid mr-2 mb-1 text-[8px] no-underline`}><i className={`${socialIcons[socialBtn.social]}`}></i></div>)}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }

    // Tempalte 1 thumbnail
    } else if (templateId === 1) {
        if (headerSection === undefined) {
            return (
                <div className="w-full aspect-video">
                    <div style={{backgroundImage: `url("/img/freelancer-template1-header-bg.png")`}} className="w-full h-60 shadow-md aspect-video flex flex-row bg-black bg-cover rounded-lg">
                        <div className="relative w-5/12 h-full brightness-75 overflow-hidden not-prose rounded-l-lg">
                            <Image 
                                src="/img/freelancer-template1-header-avatar.jpg"
                                fill
                                alt="Header avatar"
                                className={`absolute left-0 top-0 origin-top-left w-full h-full`}/>
                        </div>
                        <div className="w-7/12 prose max-w-none p-0 flex flex-col justify-center">
                            <div className="w-10/12 mx-auto">
                                <h3 className="text-sm mt-0">John Doe - Photographer</h3>
                                <h1 className="text-xs">Need a quick photoshoot session? Let me help you!</h1>
                                <div>
                                    <div className={`btn btn-xs border-none bg-yellow-400 hover:bg-yellow-500 duration-200 text-black text-[8px] mr-1`}>Services</div>
                                    <div className={`btn btn-xs border-none bg-yellow-400 hover:bg-yellow-500 duration-200 text-black text-[8px] mr-1`}>Contact me</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            if (headerSection.sectionId  === "header1") {
                return (
                    <div className="w-full aspect-video">
                        <div style={{backgroundImage: `url(${headerSection.backgroundImage})`}} className="w-full h-60 shadow-md aspect-video flex flex-row bg-black bg-cover rounded-lg">
                            <div className="relative w-5/12 h-full brightness-75 overflow-hidden not-prose rounded-l-lg">
                                <Image 
                                    src={headerSection.avatar.src}
                                    fill
                                    alt="Header avatar"
                                    style={{ transform: headerSection.avatar.style.transform}}
                                    className={`absolute left-0 top-0 origin-top-left w-full h-full`}/>
                            </div>
                            <div className="w-7/12 prose max-w-none p-0 flex flex-col justify-center">
                                <div className="w-10/12 mx-auto">
                                    <h3 className="text-sm mt-0">{headerSection.heading}</h3>
                                    <h1 className="text-xs">{headerSection.slogan}</h1>
                                    <div>
                                        {headerSection.actionBtns.map(actionBtn => <div key={actionBtn.id} className={`btn btn-xs ${btnColorOptions[actionBtn.color]} text-[8px] mr-1`}>{actionBtn.text}</div>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else if (headerSection.sectionId === "header2") {
                return (
                    <div className="w-full aspect-video">
                        <div style={{backgroundImage: `url(${headerSection.backgroundImage})`}} className="w-full flex flex-row bg-cover rounded-lg h-60 shadow-md">
                            <div className="mx-auto w-full px-5 py-2 flex flex-row gap-3">
                                <div className="flex w-1/2 flex-col justify-center">
                                    <h1 className="text-sm font-bold"> {headerSection.heading} </h1>
                                    <p className="text-xs text-[#636262]"> {headerSection.slogan} </p>
                                    <div className="flex flex-row flex-wrap gap-2">
                                        {headerSection.actionBtns.map(actionBtn => 
                                            <div key={actionBtn.id} className={`flex flex-row ${badgeColorOptions[actionBtn.color]} px-1 font-semibold transition shadow-xl shadow-slate-500 h-5 hover:shadow-none`}>
                                                <p className="mr-2 font-bold text-[8px] my-0.5">{actionBtn.text}</p>
                                                <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 flex-none translate-y-[6px]">
                                                <title>Arrow Right</title>
                                                <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="w-10/12 aspect-[3/4] relative overflow-hidden">
                                        <Image 
                                            fill 
                                            src={headerSection.avatar.src} 
                                            alt="" 
                                            style={{ transform: headerSection.avatar.style.transform}}
                                            className={`absolute left-0 top-0 origin-top-left w-full h-full`}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
}