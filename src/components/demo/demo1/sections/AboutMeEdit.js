'use client';

import TextEditor from "@/components/ui/TextEditor";
import { useState, useContext } from "react";
import { SiteContext } from "../../../layout/ContentEditor";
import { isLoggedInContext } from "../site";

import { nanoid } from "nanoid";

export default function AboutMeEdit({
    content, 
    aboutMeRef, 
    index, 
    moveUp, 
    moveDown
}) {
    const site = useContext(SiteContext);
    const isLoggedIn = useContext(isLoggedInContext);
    const [aboutMe, _] = useState(content);
    const [extraInfo, setExtraInfo] = useState(content.extraInfo.map(info => ({id: nanoid(), ...info})));
    // Remove extra info item
    const removeExtraInfo = index => {
        setExtraInfo(prevExtraInfo => prevExtraInfo.filter((_, prevIndex) => prevIndex !== index));
        aboutMeRef.current.splice(2 + 2*index, 2);
    }

    return (
        <div 
        ref={el => {(aboutMeRef.current['index'] = el)}} 
        className="collapse collapse-arrow border border-slate-300 dark:border-slate-600" 
        data-index={index}>
            <input type="checkbox" name="my-accordion-2" /> 
            <div className="collapse-title text-xl dark:text-slate-200 font-medium bg-white dark:bg-slate-950 shadow-lg">
                {aboutMe.heading}
            </div>

            {/* Move up/down buttons */}
            <div className="ms-4 z-10 absolute right-12 top-4">
                <div className="text-xl">
                    {index !== 1 ? <i className="fa-solid fa-arrow-up me-2 text-slate-300 hover:text-slate-700 active:text-slate-700 duration-200" onClick={() => moveUp(index)}></i> : null}
                    {index !== site.sections.length - 2 ? <i className="fa-solid fa-arrow-down text-slate-300 hover:text-slate-700 active:text-slate-700 duration-200" onClick={() => moveDown(index)}></i>: null}
                </div>
            </div>

            {/* Content */}
            <div className="collapse-content bg-white dark:bg-slate-900">
                <div className="p-3 md:p-6">
                    <div className="mt-4">
                        <div className="form-control w-full max-w-lg">
                            {/* Section visibility */}
                            <label className="label">
                                <span className="label-text dark:text-slate-200">Hide section:</span>
                            </label>
                            <input
                            ref={el => (aboutMeRef.current['hidden'] = el)}
                            type="checkbox" 
                            className="toggle" 
                            defaultChecked={aboutMe.hidden}/>
                            <label className="label text-xs dark:text-slate-200">
                                <span><strong className="dark:text-slate-100">Hint: </strong>Turn this on if you want this section to <strong className="dark:text-slate-100">not be visible</strong> on your page.</span>
                            </label>
                            

                            {/* Heading */}
                            <label className="label">
                                <span className="label-text dark:text-slate-200">Section heading  (recommend &apos;About me&apos;):</span>
                            </label>
                            <input ref={el => (aboutMeRef.current[0] = el)} type="text" placeholder="Section heading (recommend 'About me')" className="input border-black dark:border-blue-400 w-full dark:bg-slate-700 dark:text-slate-200" defaultValue={aboutMe.heading} />
                        </div>

                        {/* Bio */}
                        <div className="form-control w-full max-w-2xl mt-4">
                            <label className="label">
                                <span className="label-text dark:text-slate-200">Bio:</span>
                            </label>
                            {/* <textarea ref={el => (aboutMeRef.current[1] = el)} type="text" rows="5" placeholder="Your bio" className="textarea border-black w-full" defaultValue={aboutMe.bio} /> */}
                            <TextEditor
                            paramRef={el => (aboutMeRef.current[1] = el)}
                            placeholder="Your bio"
                            defaultValue={aboutMe.bio}
                            theme={site.theme}
                            />
                        </div>

                        {/* Extra information */}
                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text dark:text-slate-200">Extra information (e.g. age, hobbies, etc):</span>
                            </label>
                            {extraInfo.map((info, index) => (
                            <div key={info.id} className="mt-2">
                                <label className="label">
                                    <span className="label-text dark:text-slate-200">Info name/value:</span>
                                </label>
                                <div className="flex flex-row gap-x-2">
                                    <div className="join max-w-xl w-full">
                                        <input ref={el => (aboutMeRef.current[2 + 2*index] = el)} type="text" placeholder="Info name" className="input border-black dark:border-blue-400 dark:bg-slate-700 dark:text-slate-200 w-full join-item" defaultValue={info.key} />
                                        <input ref={el => (aboutMeRef.current[2 + 2*index + 1] = el)} type="text" placeholder="Info value" className="input border-black dark:border-blue-400 dark:bg-slate-700 dark:text-slate-200 w-full join-item" defaultValue={info.value} />
                                    </div>
                                    <i className="fa-solid fa-trash text-xl text-slate-300 hover:text-slate-700 duration-300 cursor-default my-auto ms-2" onClick={() => removeExtraInfo(index)}></i>
                                </div>
                            </div>
                            ))}
                            
                            {/* Ask user login to add more field */}
                            {isLoggedIn ?
                                <div className="text-md text-slate-300 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => {setExtraInfo([...extraInfo, {id: nanoid(), key: 'Info name', value: 'Info value'}])}}><i className="fa-solid fa-plus me-2"></i>Add info</div>
                            :
                                <div className="text-md text-slate-300 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => window.ask_login_modal.showModal()}><i className="fa-solid fa-plus me-2"></i>Add info</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}