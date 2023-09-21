import Image from "next/image";
import Link from "next/link";

export default function Profile({content}) {
    const section = content;

    return (
        <div className="w-11/12 mx-auto shadow-md">
            <div className="hero h-40 xs:h-60 lg:h-80 relative rounded-t-lg" style={{backgroundImage: `url(${section.coverPhoto ? section.coverPhoto : "/img/header-bg.jpg"})`}}>
                <div className="hero-overlay bg-opacity-80 rounded-t-lg"></div>
                <Image 
                    src={section.profilePic} 
                    alt="Profile picture" 
                    width={200} 
                    height={200} 
                    style={{objectFit: "contain"}}
                    className="w-[150px] h-[150px] xs:w-[200px] xs:h-[200px] absolute bottom-[-40px] xs:bottom-[-50px] left-0 right-0 mx-auto flex flex-row z-20"/>
            </div>
            <div className="prose bg-white pt-16 pb-5 shadow-md max-w-none text-center rounded-b-lg">
                <h1 className="mb-0">{section.fullName}</h1>
                <h2 className="mb-0 mt-2 text-slate-700">{section.job}</h2>
                {section.cvURL ? 
                <Link
                    href={section.cvURL} 
                    className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white mt-4 w-full max-w-xs mx-auto" 
                    target="_blank"
                    prefetch={false}>View CV</Link> : null}
            </div>
        </div>
    )
}