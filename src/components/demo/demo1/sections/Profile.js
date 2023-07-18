'use client';
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { convertToURL } from "@/helpers/helpers";

export default function Profile({content, profileRef, selectImage}) {
    const [section, setSection] = useState(content);
    const [editMode, setEditMode] = useState(false);

    // Keep track of edited fields
    const profilePicture = useRef();
    const nameInput = useRef();
    const jobInput = useRef();
    const link1TextInput = useRef();
    const link1URLInput = useRef();
    const link2TextInput = useRef();
    const link2URLInput = useRef();

    // Save edited fields
    const saveFields = () => {
        setSection(prevSection => {
            const newSection = {
                id: 0,
                profilePic: profilePicture.current.src.startsWith('https') ? profilePicture.current.src : prevSection.profilePic,   // if start with https, means the picture is changed
                fullName: nameInput.current.value,
                job: jobInput.current.value,
                link1: [link1TextInput.current.value, link1URLInput.current.value],
                link2: [link2TextInput.current.value, link2URLInput.current.value],
            }
            profileRef.current = newSection;
            return newSection;
        })
        setEditMode(false);
    }

    if (!content) {
        return <div></div>;
    }

    if (editMode) {
        return (
            <div className="card h-fit w-full md:w-[40%] lg:w-1/3 bg-white mt-[2vh]">
                <div className="flex flex-row absolute top-4 right-4">
                    <button className="btn btn-sm btn-primary w-fit" onClick={saveFields}>Save</button>
                    <button className="btn btn-sm btn-error ms-2 w-fit" onClick={() => {setEditMode(false);}}>Cancel</button>
                </div>
                <div className="card-body p-8 text-center mt-2">
                    <figure className="relative w-10/12 max-w-sm aspect-square mx-auto mt-4 rounded">
                        {/* <div className="absolute top-0 left-0 h-full w-full z-10 bg-black opacity-0 transition-opacity hover:opacity-50 object-contain"></div> */}
                        <Image 
                        ref={profilePicture}
                        id="profilePicture"
                        src={section.profilePic} 
                        alt="Profile picture" 
                        fill 
                        style={{objectFit: "contain"}} 
                        className="hover:opacity-50 transition-opacity" 
                        onClick={() => {selectImage('profilePicture'); window.filesModal.showModal();}}/>
                    </figure>
                    <div>Click on the image to replace with a new image</div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Full name:</span>
                        </label>
                        <input ref={nameInput} type="text" placeholder="Your full name" className="input input-sm border-black w-full max-w-xs" defaultValue={section.fullName} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Job:</span>
                        </label>
                        <input ref={jobInput} type="text" placeholder="Your job title" className="input input-sm border-black w-full max-w-xs" defaultValue={section.job} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Link 1 text:</span>
                        </label>
                        <input ref={link1TextInput} type="text" placeholder="Title of link 1" className="input input-sm border-black w-full max-w-xs" defaultValue={section.link1[0]} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Link 1 URL:</span>
                        </label>
                        <input ref={link1URLInput} type="url" placeholder="Where does link 1 lead to?" className="input input-sm border-black w-full max-w-xs" defaultValue={section.link1[1]} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Link 2 text:</span>
                        </label>
                        <input ref={link2TextInput} type="text" placeholder="Title of link 2" className="input input-sm border-black w-full max-w-xs" defaultValue={section.link2[0]} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Link 2 URL:</span>
                        </label>
                        <input ref={link2URLInput} type="url" placeholder="Where does link 2 lead to?" className="input input-sm border-black w-full max-w-xs" defaultValue={section.link2[1]} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="card h-[90vh] w-full md:w-[40%] lg:w-1/3 bg-white mt-[2vh]">
            <i className="fa-solid fa-pen absolute top-4 right-4 text-slate-300 hover:text-slate-700 duration-300 text-xl" onClick={() => {setEditMode(true);}}></i>
            <div className="card-body p-8 text-center">
                <figure className="relative w-10/12 max-w-sm aspect-square mx-auto mt-4 rounded">
                    <Image src={section.profilePic} alt="Profile picture" fill style={{objectFit: "contain"}}/>
                </figure>
                <h1 className="font-bold text-4xl mt-4">{section.fullName}</h1>
                <div className="text-2xl font-normal text-slate-500">{section.job}</div>
                <div className="flex w-10/12 mx-auto mt-auto">
                    <Link href={convertToURL(section.link1[1])} target="_blank" className="w-5/12 text-center link link-primary">{section.link1[0]}</Link>
                    <div className="w-2/12 text-center text-slate-200">|</div>
                    <Link href={convertToURL(section.link2[1])} target="_blank" className="w-5/12 text-center link link-primary">{section.link2[0]}</Link>
                </div>
            </div>
        </div>
    )
}