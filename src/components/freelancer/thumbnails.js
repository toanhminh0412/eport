// Next imports
import Image from "next/image";

// Local imports
import { socialIconsStyle, socialIcons } from "@/data/social-icons";
import { btnColorOptions } from "@/data/colorOptions";

export function FreelancerThumbnail({ content, templateId }) {
    const headerSection = content.sections.filter((section) => section.sectionType === "header")[0];
    

    if (templateId === 0) {
        return (
            <div className="w-full aspect-video">
                <div className="prose max-w-none bg-no-repeat bg-cover bg-center rounded-lg h-60 shadow-md" style={{backgroundImage: `url(${headerSection !== undefined ? headerSection.backgroundImage : "/img/freelancer-template0-header1-white-bg.png"})`}}>
                    <div className="mx-auto w-full px-4">
                        <div className="grid grid-cols-2 items-center gap-2">
                            <div className="">
                                <h2 className="text-sm font-bold text-orange-400">{`${headerSection !== undefined ? headerSection.heading : "Eport Website"}`}</h2>
                                <h3 className="text-xs">{`${headerSection !== undefined ? headerSection.slogan : "Build your website really fast with Eport. No code needed!"}`}</h3>
                                <div className="">
                                    <p className="text-slate-700 text-[7px]">{`${headerSection !== undefined ? headerSection.description : "Eport is a versatile online platform that allows individuals, businesses, and organizations to create, customize, and publish websites without the need for advanced technical knowledge or coding skills."}`}</p>
                                </div>
                                <div>
                                    {headerSection !== undefined ?
                                        <>
                                            {headerSection.socials.map(socialBtn => <div key={socialBtn.id} className={`${socialIconsStyle[socialBtn.social]} inline-flex justify-center items-center w-4 h-4 bg-transparent rounded-full border-[1px] border-solid mr-2 mb-1 text-[8px] no-underline`}><i className={`${socialIcons[socialBtn.social]}`}></i></div>)}
                                        </>
                                    :
                                        <>
                                            <div className={`inline-flex justify-center items-center w-4 h-4 bg-transparent rounded-full border-[1px] border-solid mr-2 mb-1 text-[8px] no-underline text-blue-500 border-blue-500 duration-200 hover:bg-blue-500 hover:text-white hover:shadow-blue-500`}><i className="fa-brands fa-facebook"></i></div>
                                            <div className={`inline-flex justify-center items-center w-4 h-4 bg-transparent rounded-full border-[1px] border-solid mr-2 mb-1 text-[8px] no-underline text-pink-400 border-pink-400 duration-200 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white hover:shadow-pink-500`}><i className="fa-brands fa-instagram"></i></div>
                                            <div className={`inline-flex justify-center items-center w-4 h-4 bg-transparent rounded-full border-[1px] border-solid mr-2 mb-1 text-[8px] no-underline text-sky-500 border-sky-500 duration-200 hover:bg-sky-500 hover:text-white hover:shadow-sky-500`}><i className="fa-brands fa-twitter"></i></div>
                                        </>
                                    }
                                </div>
                                <div>
                                    {headerSection !== undefined ?
                                        <>
                                            {headerSection.actionBtns.map(actionBtn => <div key={actionBtn.id} className="inline-block mt-1"><div className={`py-1 px-2 rounded-16 ${btnColorOptions[actionBtn.color]} text-[8px] font-semibold no-underline mr-2 cursor-pointer`}>{actionBtn.hrefLink.text}</div></div>)}
                                        </>
                                    :
                                        <div className={`inline py-1 px-2 rounded-16 border-none bg-orange-500 hover:bg-orange-600 duration-200 text-white text-[8px] font-semibold no-underline mr-2 cursor-pointer`}>Contact</div>
                                    }
                                    
                                </div>
                            </div>
                            <div className="relative w-3/4 overflow-hidden rounded-full aspect-[3/4] not-prose">
                                {headerSection !== undefined ?
                                    <Image 
                                    src={headerSection.avatar.src}
                                    fill
                                    alt="Header avatar"
                                    style={{ transform: headerSection.avatar.style.transform}}
                                    className={`absolute left-0 top-0 origin-top-left w-full h-full`}/>
                                :
                                    <Image 
                                    src="/img/freelancer-template0-aboutme1-avatar.jpg"
                                    fill
                                    alt="Header avatar"
                                    className={`absolute left-0 top-0 origin-top-left w-full h-full`}/>
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (templateId === 1) {
        return (
            <div className="w-full aspect-video">
                <div style={{backgroundImage: `url(${headerSection !== undefined ? headerSection.backgroundImage : "/img/freelancer-template1-header-bg.png"})`}} className="w-full h-60 shadow-md aspect-video flex flex-row bg-black bg-cover rounded-lg">
                    <div className="relative w-5/12 h-full brightness-75 overflow-hidden not-prose rounded-l-lg">
                        {headerSection !== undefined ?
                            <Image 
                                src={headerSection.avatar.src}
                                fill
                                alt="Header avatar"
                                style={{ transform: headerSection.avatar.style.transform}}
                                className={`absolute left-0 top-0 origin-top-left w-full h-full`}/>
                        :
                            <Image 
                                src="/img/freelancer-template1-header-avatar.jpg"
                                fill
                                alt="Header avatar"
                                className={`absolute left-0 top-0 origin-top-left w-full h-full`}/>
                        }

                    </div>
                    <div className="w-7/12 prose max-w-none p-0 flex flex-col justify-center">
                        <div className="w-10/12 mx-auto">
                            <h3 className="text-sm mt-0">{`${headerSection !== undefined ? headerSection.heading : "John Doe - Photographer"}`}</h3>
                            <h1 className="text-xs">{`${headerSection !== undefined ? headerSection.slogan : "Need a quick photoshoot session? Let me help you!"}`}</h1>
                            <div>
                                <div>
                                    {headerSection !== undefined ?
                                        <>
                                            {headerSection.actionBtns.map(actionBtn => <div key={actionBtn.id} className={`btn btn-xs ${btnColorOptions[actionBtn.color]} text-[8px] mr-1`}>{actionBtn.text}</div>)}
                                        </>
                                    :
                                        <>
                                            <div className={`btn btn-xs border-none bg-yellow-400 hover:bg-yellow-500 duration-200 text-black text-[8px] mr-1`}>Services</div>
                                            <div className={`btn btn-xs border-none bg-yellow-400 hover:bg-yellow-500 duration-200 text-black text-[8px] mr-1`}>Contact me</div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}