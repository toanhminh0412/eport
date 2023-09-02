'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProfileEdit({content, profileRef}) {
    const [profile, _] = useState(content);
    const [profilePicFile, setProfilePicFile] = useState(null);
    const [profilePicPreview, setProfilePicPreview] = useState(null);

    const [newCV, setNewCV] = useState(null);
    const [newCVURL, setNewCVURL] = useState('');

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
            setNewCV(e.target.files[0]);
            if (newCVURL) URL.revokeObjectURL(newCVURL);
            const cvURL = URL.createObjectURL(e.target.files[0]);
            setNewCVURL(cvURL);
        }
        
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
                        <div className="mt-4">
                            {newCV ? 
                            <div>CV: <Link href={newCVURL} download target="_blank" prefetch={false}>{newCV.name}</Link></div> 
                            : 
                            <div>CV: <Link href={profile.cvURL} download target="_blank" prefetch={false}>cv.pdf</Link></div>}
                            <div className="btn bg-blue-500 hover:bg-blue-700 text-white duration-200 mt-2 relative">
                                Upload CV
                                <input 
                                    ref={el => (profileRef.current[2] = el)}
                                    type="file" 
                                    className="absolute top-0 left-0 w-full h-full opacity-0" 
                                    accept=".pdf, .doc, .docx" 
                                    onChange={uploadCV}/>
                            </div>
                        </div>
                        {/* <div className="flex flex-row flex-wrap gap-x-3">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Link 1 text:</span>
                                </label>
                                <input ref={el => (profileRef.current[2] = el)} type="text" placeholder="Title of link 1" className="input border-black w-full" defaultValue={profile.link1[0]} />
                                <label className="label text-xs">
                                    <span><strong>Hint: </strong>Describe the link you want users to click on (e.g. social media)</span>
                                </label>
                            </div>
                        
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Link 1 URL:</span>
                                </label>
                                <input ref={el => (profileRef.current[3] = el)} type="url" placeholder="URL of link 1" className="input border-black w-full" defaultValue={profile.link1[1]} />
                                <label className="label text-xs">
                                    <span><strong>Hint: </strong>The actual URL you want user to visit (e.g. facebook.com)</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap gap-x-3">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Link 2 text:</span>
                                </label>
                                <input ref={el => (profileRef.current[4] = el)} type="text" placeholder="Title of link 2" className="input border-black w-full" defaultValue={profile.link2[0]} />
                                <label className="label text-xs">
                                    <span><strong>Hint: </strong>Describe the link you want users to click on (e.g. social media)</span>
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Link 2 URL:</span>
                                </label>
                                <input ref={el => (profileRef.current[5] = el)} type="url" placeholder="URL of link 2" className="input border-black w-full" defaultValue={profile.link2[1]} />
                                <label className="label text-xs">
                                    <span><strong>Hint: </strong>The actual URL you want user to visit (e.g. facebook.com)</span>
                                </label>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}