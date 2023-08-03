'use client';

import { useState } from "react";

export default function SkillsEdit({content, skillsRef}) {
    const [skills, _] = useState(content);
    const [skillsList, setSkillsList] = useState(content.skills);
    
    // Remove a skill from Skills section
    const removeSkill = index => {
        setSkillsList(prevSkillsList => prevSkillsList.filter((_, prevIndex) => prevIndex !== index));
        skillsRef.current['skills'].splice(2*index, 2);
    }

    return (
        <div className="collapse collapse-arrow border border-slate-300">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium bg-white shadow-lg">
                {skills.heading}
            </div>
            <div className="collapse-content bg-white">
                <div className="p-3 md:p-6">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Section heading  (recommend &apos;Skills&apos;):</span>
                        </label>
                        <input ref={el => (skillsRef.current['heading'] = el)} type="text" placeholder="Section heading (recommend 'Skills')" className="input border-black w-full" defaultValue={skills.heading} />
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
                        <div className="text-md text-slate-300 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => {setSkillsList([...skillsList, {key: 'Blank skill', value: 50}])}}><i className="fa-solid fa-plus me-2"></i>Add skill</div>
                    </div>
                </div>
            </div>
        </div>
    )
}