// Next imports
import Image from "next/image";


export function Template0Thumbnail({content, theme}) {
    const section = content;
    
    return (
        <div className={theme === "dark" ? "dark" : null}>
            <div className="w-full aspect-video">
                <div className="hero h-24 relative rounded-t-lg not-prose" style={{backgroundImage: `url(${section.coverPhoto ? section.coverPhoto : "/img/header-bg.jpg"})`}}>
                    <div className="hero-overlay bg-opacity-80 rounded-t-lg"></div>
                    <Image 
                        src={section.profilePic} 
                        alt={`${section.fullName}'s profile picture`}
                        width={100} 
                        height={100} 
                        style={{objectFit: "contain"}}
                        className="w-[100px] h-[100px] absolute bottom-[-40px] left-0 right-0 mx-auto flex flex-row z-20"/>
                </div>
                <div className="prose bg-slate-100 dark:bg-slate-900 pt-12 pb-5 shadow-md max-w-none text-center rounded-b-lg">
                    <h1 className="mb-0 dark:text-slate-200 text-xl">{section.fullName}</h1>
                    <h2 className="mb-0 mt-2 text-slate-700 dark:text-slate-200 text-lg">{section.job}</h2>
                </div>
            </div>
        </div>
    )
}