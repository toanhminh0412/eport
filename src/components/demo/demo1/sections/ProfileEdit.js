'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function ProfileEdit({content, profileRef}) {
    const [profile, _] = useState(content);
    const [profilePicFile, setProfilePicFile] = useState(null);
    const [profilePicPreview, setProfilePicPreview] = useState(null);

    const [cvURL, setCvURL] = useState(content.cvURL);
    const [cvMsg, setCvMsg] = useState('');

    const cvRef = useRef();

    // Preview profile picture
    useEffect(() => {
        let fileReader = false;
        if (profilePicFile) {
          fileReader = new FileReader();
          fileReader.onload = (e) => {
            const { result } = e.target;
            if (result) {
              setProfilePicPreview(result);
            }
          }
          fileReader.readAsDataURL(profilePicFile);
        }
        return () => {
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        }
    }, [profilePicFile]);

    // Upload new profile picture for review or change
    const uploadProfilePic = e => {
        setProfilePicFile(e.target.files[0]);
    }

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
                    <div>Profile picture:</div>
                    <Image 
                    src={profilePicPreview ? profilePicPreview : profile.profilePic} 
                    alt="Profile picture" 
                    width={250} 
                    height={250} 
                    style={{objectFit: "contain"}}/>
                    <input ref={el => (profileRef.current[6] = el)} type="file" accept="image/*" className="file-input file-input-bordered file-input-sm file-input-primary w-full max-w-xs" onChange={uploadProfilePic}/>
                    <label className="label text-xs">
                        <span><strong>Hint: </strong>Upload a new picture will <strong>immediately</strong> replace the current picture</span>
                    </label>
                    <div className="flex flex-row gap-3 flex-wrap mt-4">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Full name:</span>
                            </label>
                            <input ref={el => (profileRef.current[0] = el)} type="text" placeholder="Your full name" className="input border-black w-full" defaultValue={profile.fullName} />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Job:</span>
                            </label>
                            <input ref={el => (profileRef.current[1] = el)} type="text" placeholder="Your job title" className="input border-black w-full" defaultValue={profile.job} />
                        </div>
                    </div>
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
                </div>
            </div>
        </div>
    )
}