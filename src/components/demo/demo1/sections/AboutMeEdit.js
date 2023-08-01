'use client';

import { useState } from "react";

export default function AboutMeEdit({content, aboutMeRef}) {
    const [aboutMe, _] = useState(content);
    const [extraInfo, setExtraInfo] = useState(content.extraInfo);

    // Remove extra info item
    const removeExtraInfo = index => {
        setExtraInfo(prevExtraInfo => prevExtraInfo.filter((_, prevIndex) => prevIndex !== index));
        aboutMeRef.current.splice(2 + 2*index, 2);
    }

    return (
        <div className="collapse collapse-arrow border border-slate-300">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium bg-white shadow-lg">
                {aboutMe.heading}
            </div>
            <div className="collapse-content bg-white">
                <div className="p-3 md:p-6">
                    <div className="mt-4">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Section heading  (recommend &apos;About me&apos;):</span>
                            </label>
                            <input ref={el => (aboutMeRef.current[0] = el)} type="text" placeholder="Section heading (recommend 'About me')" className="input border-black w-full" defaultValue={aboutMe.heading} />
                        </div>
                        <div className="form-control w-full max-w-2xl mt-4">
                            <label className="label">
                                <span className="label-text">Bio:</span>
                            </label>
                            <textarea ref={el => (aboutMeRef.current[1] = el)} type="text" rows="5" placeholder="Your bio" className="textarea border-black w-full" defaultValue={aboutMe.bio} />
                        </div>
                        <div className="form-control mt-4">
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
                            <div className="text-md text-slate-300 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => {setExtraInfo([...extraInfo, {key: 'Info name', value: 'Info value'}])}}><i className="fa-solid fa-plus me-2"></i>Add info</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}