'use client';

// Next, React imports
import Link from "next/link";
import { useState, useRef, useContext } from "react";

// Local imports
import { isLoggedInContext } from "../site";
import ImageUploadPreviewer from "@/components/ui/ImageUploadPreviewer";

export default function ProfileEdit({content, profileRef}) {
    const [profile, _] = useState(content);

    const [cvURL, setCvURL] = useState(content.cvURL);
    const [cvMsg, setCvMsg] = useState('');

    const cvRef = useRef();
    const isLoggedIn = useContext(isLoggedInContext);

    // Upload new CV for review or change
    const uploadCV = e => {
        if (e.target.files.length > 0){
            if (cvURL && !cvURL.includes('firebasestorage.googleapis.com')) URL.revokeObjectURL(cvURL);
            const newCvURL = URL.createObjectURL(e.target.files[0]);
            setCvURL(newCvURL);
            setCvMsg('New CV uploaded. Click "Save" to save changes.');
        }
        
    }

    // Remove current CV
    const removeCV = () => {
        setCvURL('');
        setCvMsg('CV removed. Click "Save" to save changes.');
        cvRef.current.value = '';
    }

    return (
        <div className="collapse collapse-arrow border border-slate-300">
            <input type="checkbox" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium bg-white shadow-lg">
                Basic profile
            </div>
            <div className="collapse-content bg-white">
                <div className="p-3 md:p-6">
                    {/* Profile picture */}
                    <ImageUploadPreviewer
                        imageRef={el => (profileRef.current[6] = el)}
                        demo={!isLoggedIn}
                        label="Profile picture:"
                        defaultImageSrc={profile.profilePic}/>

                    {/* Cover photo */}
                    <ImageUploadPreviewer
                        imageRef={el => (profileRef.current[3] = el)}
                        demo={!isLoggedIn}
                        label="Cover photo:"
                        defaultImageSrc={profile.coverPhoto ? profile.coverPhoto : "/img/header-bg.jpg"}/>

                    <div className="flex flex-row gap-3 flex-wrap mt-4">
                        {/* Full name */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Full name:</span>
                            </label>
                            <input ref={el => (profileRef.current[0] = el)} type="text" placeholder="Your full name" className="input border-black w-full" defaultValue={profile.fullName} />
                        </div>

                        {/* Job */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Job:</span>
                            </label>
                            <input ref={el => (profileRef.current[1] = el)} type="text" placeholder="Your job title" className="input border-black w-full" defaultValue={profile.job} />
                        </div>
                    </div>

                    {/* CV */}
                    {isLoggedIn ?
                        <div className="mt-6">
                            {cvMsg ? <div className="alert alert-success w-fit">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{cvMsg}</span>
                            </div>: null}
                            <div>CV: {cvURL ? <Link href={cvURL} target="_blank" prefetch={false}>cv.pdf</Link> : "No CV uploaded"} {cvURL ? <span className="link ml-3 text-sm" onClick={removeCV}>Remove</span> : null}</div> 
                            
                            {/* This hidden div stores current CV URL as an attribute */}
                            <div 
                                ref={el => (profileRef.current[2] = el)}
                                className="hidden" data-cvurl={cvURL}></div>
                            
                            <div className="btn bg-blue-500 hover:bg-blue-700 text-white duration-200 mt-2 relative">
                                Upload CV
                                <input 
                                    ref={cvRef}
                                    type="file" 
                                    className="absolute top-0 left-0 w-full h-full opacity-0" 
                                    accept=".pdf, .doc, .docx" 
                                    onChange={uploadCV}/>
                            </div>
                        </div>
                    :
                        <div className="mt-6">
                            <div className="btn bg-blue-500 hover:bg-blue-700 text-white duration-200 mt-2 relative" onClick={() => window.ask_login_modal.showModal()}>Upload CV</div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}