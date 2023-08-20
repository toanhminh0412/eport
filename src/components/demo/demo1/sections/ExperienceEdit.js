'use client';

import { useState, useContext } from "react";
import { SiteContext } from "../../../layout/ContentEditor";
import TextEditor from "@/components/ui/TextEditor";

import { nanoid } from "nanoid";

export default function ExperienceEdit({
    content, 
    experienceRef,
    index, 
    moveUp, 
    moveDown
}) {
    const site = useContext(SiteContext);
    /***  Experience section ***/
    const [experience, _] = useState(content);
    const [experienceList, setExperienceList] = useState(content.experiences.map(exp => ({id: nanoid(), ...exp})));
    
    // Remove an experience from Experience section
    const removeExperience = index => {
        setExperienceList(prevExperienceList => prevExperienceList.filter((_, prevIndex) => prevIndex !== index));
        experienceRef.current['experiences'].splice(index, 1);
    }

    return (
        <div 
        ref={el => (experienceRef.current['index'] = el)}
        className="collapse collapse-arrow border border-slate-300"
        data-index={index}>
            <input type="checkbox" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium bg-white shadow-lg">
                {experience.heading}
            </div>

            {/* Move up/down buttons */}
            <div className="ms-4 z-10 absolute right-12 top-4">
                <div className="text-xl">
                    {index !== 1 ? <i className="fa-solid fa-arrow-up me-2 text-slate-300 hover:text-slate-700 active:text-slate-700 duration-200" onClick={() => moveUp(index)}></i> : null}
                    {index !== site.sections.length - 2 ? <i className="fa-solid fa-arrow-down text-slate-300 hover:text-slate-700 active:text-slate-700 duration-200" onClick={() => moveDown(index)}></i>: null}
                </div>
            </div>

            {/* Content */}
            <div className="collapse-content bg-white">
                <div className="p-3 md:p-6">
                    <div className="form-control w-full max-w-lg">
                        {/* Section visibility */}
                        <label className="label">
                            <span className="label-text">Hide section:</span>
                        </label>
                        <input
                        ref={el => (experienceRef.current['hidden'] = el)}
                        type="checkbox" 
                        className="toggle" 
                        defaultChecked={experience.hidden}/>

                        {/* Heading */}
                        <label className="label text-xs">
                            <span><strong>Hint: </strong>Turn this on if you want this section to <strong>not be visible</strong> on your page.</span>
                        </label>
                        <label className="label">
                            <span className="label-text">Section heading  (recommend &apos;Experiences&apos;):</span>
                        </label>
                        <input ref={el => (experienceRef.current['heading'] = el)} type="text" placeholder="Section heading (recommend 'Experience')" className="input border-black w-full" defaultValue={experience.heading} />
                    </div>
                    <div className="font-semibold mt-8">Experience list:</div>
                    <div className="form-control max-w-lg">
                        {experienceList.map((exp, index) => (
                        <div key={exp.id} className={`${index === 0 ? '' : 'mt-8'} w-full`}>
                            <label className="label">
                                <span className="label-text">Job title:</span>
                                <span className="text-md text-slate-300 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => removeExperience(index)}><i className="fa-solid fa-trash me-2"></i>Remove experience</span>
                            </label>
                            <input 
                            ref={el => {experienceRef.current['experiences'][index] = experienceRef.current['experiences'][index] ? experienceRef.current['experiences'][index] : {}; experienceRef.current['experiences'][index]['jobTitle'] = el}}
                            type="text" 
                            placeholder="Your job title" 
                            className="input border-black w-full" 
                            defaultValue={exp.jobTitle} />
                            <label className="label">
                                <span className="label-text">Company:</span>
                            </label>
                            <input 
                            ref={el => {experienceRef.current['experiences'][index] = experienceRef.current['experiences'][index] ? experienceRef.current['experiences'][index] : {}; experienceRef.current['experiences'][index]['company'] = el}}
                            type="text" 
                            placeholder="Company name" 
                            className="input border-black w-full" 
                            defaultValue={exp.company} />
                            <label className="label">
                                <span className="label-text">Start year / End year:</span>
                            </label>
                            <div className="join max-w-xl w-full">
                                <input ref={el => {experienceRef.current['experiences'][index] = experienceRef.current['experiences'][index] ? experienceRef.current['experiences'][index] : {}; experienceRef.current['experiences'][index]['startYear'] = el}} type="number" placeholder="Start year" className="input border-black w-full join-item" defaultValue={exp.startYear} />
                                <input ref={el => {experienceRef.current['experiences'][index] = experienceRef.current['experiences'][index] ? experienceRef.current['experiences'][index] : {}; experienceRef.current['experiences'][index]['endYear'] = el}} type="number" placeholder="End year" className="input border-black w-full join-item" defaultValue={exp.endYear} />
                            </div>
                            <label className="label text-xs">
                                <span><strong>Hint: </strong>Leave the end year <strong>blank</strong> or <strong>0</strong> if you are still working at the company</span>
                            </label>
                            <label className="label">
                                <span className="label-text">Description:</span>
                            </label>
                            <TextEditor 
                            paramRef={el => {experienceRef.current['experiences'][index] = experienceRef.current['experiences'][index] ? experienceRef.current['experiences'][index] : {}; experienceRef.current['experiences'][index]['description'] = el}}
                            defaultValue={exp.description}/>
                        </div>
                        ))}
                        <div className="text-md text-slate-300 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => {setExperienceList([...experienceList, {id: nanoid(), jobTitle: 'Some position', company: 'Company A', startYear: 2020, endYear: 2023, description: 'I was in charge of meeting with clients, gathering user requirements for our products, etc'}])}}><i className="fa-solid fa-plus me-2"></i>Add experience</div>
                    </div>
                </div>
            </div>
        </div>
    )
}