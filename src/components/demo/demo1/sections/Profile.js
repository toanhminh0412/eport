import Image from "next/image";
import Link from "next/link";

export default function Profile({content}) {
    const section = content;

    return (
        <div className="card h-fit w-full md:w-[40%] lg:w-1/3 bg-white mt-[2vh]">
            <div className="card-body p-8 text-center">
                <Image 
                src={section.profilePic} 
                alt="Profile picture" 
                width={250} 
                height={250} 
                style={{objectFit: "contain"}}
                className="mx-auto"/>
                <h1 className="font-bold text-4xl mt-4">{section.fullName}</h1>
                <div className="text-2xl font-normal text-slate-500">{section.job}</div>
                <Link
                    href={section.cvURL} 
                    className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white mt-8 w-full max-w-xs mx-auto" 
                    download
                    target="_blank"
                    prefetch={false}>View CV</Link>
            </div>
        </div>
    )
}