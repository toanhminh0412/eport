'use client';
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { convertToURL } from "@/helpers/helpers";

export default function Profile({content}) {
    const [section, _] = useState(content);

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
                {/* <div className="flex w-10/12 mx-auto mt-auto">
                    <Link href={convertToURL(section.link1[1])} target="_blank" className="w-5/12 text-center link link-primary">{section.link1[0]}</Link>
                    <div className="w-2/12 text-center text-slate-200">|</div>
                    <Link href={convertToURL(section.link2[1])} target="_blank" className="w-5/12 text-center link link-primary">{section.link2[0]}</Link>
                </div> */}
                <Link
                    href={section.cvURL} 
                    className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white mt-8 w-full max-w-xs mx-auto" 
                    download
                    target="_blank"
                    prefetch={false}>Download CV</Link>
            </div>
        </div>
    )
}