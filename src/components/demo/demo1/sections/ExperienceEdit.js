'use client';

import { useState } from "react";
import TextEditor from "@/components/TextEditor";

export default function ExperienceEdit({content, experienceRef}) {
    /***  Experience section ***/
    const [experience, _] = useState(content);
    const [experienceList, setExperienceList] = useState(content.experiences);
    
    // Remove an experience from Experience section
    const removeExperience = index => {
        setExperienceList(prevExperienceList => prevExperienceList.filter((_, prevIndex) => prevIndex !== index));
        experienceRef.current['experiences'].splice(index, 1);
    }

    return (
        <div className="collapse collapse-arrow border border-slate-300">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium bg-white shadow-lg">
                {experience.heading}
            </div>
            <div className="collapse-content bg-white">
                <div className="p-3 md:p-6">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Section heading  (recommend &apos;Experiences&apos;):</span>
                        </label>
                        <input ref={el => (experienceRef.current['heading'] = el)} type="text" placeholder="Section heading (recommend 'Experience')" className="input border-black w-full" defaultValue={experience.heading} />
                    </div>
                    <div className="font-semibold mt-8">Experience list:</div>
                    <div className="form-control max-w-lg">
                        {experienceList.map((exp, index) => (
                        <div key={`${exp.jobTitle}-${exp.startYear}-${exp.endYear}-${index}`} className={`${index === 0 ? '' : 'mt-8'} w-full`}>
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
                        <div className="text-md text-slate-300 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => {setExperienceList([...experienceList, {jobTitle: 'Some position', company: 'Company A', startYear: 2020, endYear: 2023, description: 'I was in charge of meeting with clients, gathering user requirements for our products, etc'}])}}><i className="fa-solid fa-plus me-2"></i>Add experience</div>
                    </div>
                </div>
            </div>
        </div>
    )
}