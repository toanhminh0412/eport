'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { storage } from "../../../public/libs/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import secureLocalStorage from "react-secure-storage";

export default function ContentEditor({content, profileRef, aboutMeRef, skillsRef}) {
    const [site, setSite] = useState(content);
    
    /*** Profile section ***/ 
    const [profile, setProfile] = useState(content.sections[0]);
    const [profilePicFile, setProfilePicFile] = useState(null);
    const [profilePicPreview, setProfilePicPreview] = useState(null);

    /*** About me section ***/
    const [aboutMe, setAboutMe] = useState(content.sections[1]);
    const [extraInfo, setExtraInfo] = useState(content.sections[1].extraInfo);

    /*** Skills section ***/
    const [skills, setSkills] = useState(content.sections[2]);
    const [skillsList, setSkillsList] = useState(content.sections[2].skills);

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

    // Remove extra info item
    const removeExtraInfo = index => {
        setExtraInfo(prevExtraInfo => prevExtraInfo.filter((_, prevIndex) => prevIndex !== index));
        aboutMeRef.current.splice(2 + 2*index, 2);
    }

    const removeSkill = index => {
        setSkillsList(prevSkillsList => prevSkillsList.filter((_, prevIndex) => prevIndex !== index));
        skillsRef.current['skills'].splice(2*index, 2);
    }

    return (
        <div className="min-h-screen">
            <div className="px-20 py-10 prose max-w-none">
                <h1>Site editor</h1>
                <div className="collapse collapse-arrow border border-slate-300">
                    <input type="radio" name="my-accordion-2" defaultChecked /> 
                    <div className="collapse-title text-xl font-medium bg-white shadow-lg">
                        Basic profile
                    </div>
                    <div className="collapse-content bg-white">
                        <div className="py-3">
                            <div>Profile picture:</div>
                            <Image 
                            src={profilePicPreview ? profilePicPreview : profile.profilePic} 
                            alt="Profile picture" 
                            width={250} 
                            height={250} 
                            style={{objectFit: "contain"}}/>
                            <input ref={el => (profileRef.current[6] = el)} type="file" className="file-input file-input-bordered file-input-sm file-input-primary w-full max-w-xs" onChange={uploadProfilePic}/>
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
                                <div className="flex flex-row flex-wrap gap-x-3">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-slate-300">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium bg-white shadow-lg">
                        {aboutMe.heading}
                    </div>
                    <div className="collapse-content bg-white">
                        <div className="py-3">
                            <div className="flex flex-row gap-3 flex-wrap mt-4">
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Section heading  (recommend 'About me'):</span>
                                    </label>
                                    <input ref={el => (aboutMeRef.current[0] = el)} type="text" placeholder="Section heading (recommend 'About me')" className="input border-black w-full" defaultValue={aboutMe.heading} />
                                </div>
                                <div className="form-control w-full max-w-2xl">
                                    <label className="label">
                                        <span className="label-text">Bio:</span>
                                    </label>
                                    <textarea ref={el => (aboutMeRef.current[1] = el)} type="text" rows="5" placeholder="Your bio" className="textarea border-black w-full" defaultValue={aboutMe.bio} />
                                </div>
                                <div className="form-control mt-2">
                                    <label className="label">
                                        <span className="label-text">Extra information (e.g. age, hobbies, etc):</span>
                                    </label>
                                    {extraInfo.map((info, index) => (
                                    <div key={info.key !== 'Info name' ? info.key : index} className="mt-2">
                                        <label className="label">
                                            <span className="label-text">Info name/value:</span>
                                        </label>
                                        <div className="flex flex-row gap-x-2">
                                            <div className="join max-w-xl w-full">
                                                <input ref={el => (aboutMeRef.current[2 + 2*index] = el)} type="text" placeholder="Info name" className="input border-black w-full join-item" defaultValue={info.key} />
                                                <input ref={el => (aboutMeRef.current[2 + 2*index + 1] = el)} type="text" placeholder="Info value" className="input border-black w-full join-item" defaultValue={info.value} />
                                            </div>
                                            <i className="fa-solid fa-trash text-xl text-slate-300 hover:text-slate-700 duration-300 cursor-default my-auto ms-2" onClick={() => removeExtraInfo(index)}></i>
                                        </div>
                                    </div>
                                    ))}
                                    <div className="text-md text-slate-300 hover:text-slate-700 duration-300 mt-2 cursor-default" onClick={() => {setExtraInfo([...extraInfo, {key: 'Info name', value: 'Info value'}])}}><i className="fa-solid fa-plus me-2"></i>Add info</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-arrow border border-slate-300">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium bg-white shadow-lg">
                        {skills.heading}
                    </div>
                    <div className="collapse-content bg-white">
                        <div className="py-3">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Section heading  (recommend 'Skills'):</span>
                                </label>
                                <input ref={el => (skillsRef.current['heading'] = el)} type="text" placeholder="Section heading (recommend 'About me')" className="input border-black w-full" defaultValue={skills.heading} />
                            </div>
                            <div className="form-control mt-2 max-w-lg">
                                {skillsList.map((skill, index) => (
                                <div key={skill.key !== 'Blank skill' ? skill.key : index} className="mt-2 w-full">
                                    <label className="label">
                                        <span className="label-text">Skill name/value (between 0 and 100):</span>
                                    </label>
                                    <div className="flex flex-row gap-x-2">
                                        <div className="join max-w-xl w-full">
                                            <input ref={el => (skillsRef.current['skills'][2*index] = el)} type="text" placeholder="Skill name" className="input border-black w-full join-item" defaultValue={skill.key} />
                                            <input ref={el => (skillsRef.current['skills'][2*index + 1] = el)} type="number" min={0} max={100} placeholder="Skill value" className="input border-black w-full join-item" defaultValue={skill.value} />
                                        </div>
                                        <i className="fa-solid fa-trash text-xl text-slate-300 hover:text-slate-700 duration-300 cursor-default my-auto ms-2" onClick={() => removeSkill(index)}></i>
                                    </div>
                                </div>
                                ))}
                                <div className="text-md text-slate-300 hover:text-slate-700 duration-300 mt-2 cursor-default" onClick={() => {setSkillsList([...skillsList, {key: 'Blank skill', value: 50}])}}><i className="fa-solid fa-plus me-2"></i>Add skill</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}