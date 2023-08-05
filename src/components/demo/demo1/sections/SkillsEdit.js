'use client';

import { useState } from "react";

export default function SkillsEdit({
    content, 
    skillsRef, 
    index, 
    moveUp, 
    moveDown
}) {
    const [skills, _] = useState(content);
    const [skillsList, setSkillsList] = useState(content.skills);
    
    // Remove a skill from Skills section
    const removeSkill = index => {
        setSkillsList(prevSkillsList => prevSkillsList.filter((_, prevIndex) => prevIndex !== index));
        skillsRef.current['skills'].splice(2*index, 2);
    }

    return (
        <div 
        ref={el => (skillsRef.current['index'] = el)}
        className="collapse collapse-arrow border border-slate-300"
        data-index={index}>
            <input type="checkbox" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium bg-white shadow-lg">
                {skills.heading}
            </div>

            {/* Move up/down buttons */}
            <div className="ms-4 z-10 absolute right-12 top-4">
                <div className="text-xl">
                    {index !== 1 ? <i className="fa-solid fa-arrow-up me-2 text-slate-300 hover:text-slate-700 active:text-slate-700 duration-200" onClick={() => moveUp(index)}></i> : null}
                    {index !== 6 ? <i className="fa-solid fa-arrow-down text-slate-300 hover:text-slate-700 active:text-slate-700 duration-200" onClick={() => moveDown(index)}></i>: null}
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
                        ref={el => (skillsRef.current['hidden'] = el)}
                        type="checkbox" 
                        className="toggle" 
                        defaultChecked={skills.hidden}/>
                        <label className="label text-xs">
                            <span><strong>Hint: </strong>Turn this on if you want this section to <strong>not be visible</strong> on your page.</span>
                        </label>

                        {/* Section heading */}
                        <label className="label">
                            <span className="label-text">Section heading  (recommend &apos;Skills&apos;):</span>
                        </label>
                        <input ref={el => (skillsRef.current['heading'] = el)} type="text" placeholder="Section heading (recommend 'Skills')" className="input border-black w-full" defaultValue={skills.heading} />
                    </div>

                    {/* Skills */}
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