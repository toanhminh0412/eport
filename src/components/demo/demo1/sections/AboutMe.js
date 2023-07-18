'use client';
import { useState, useRef } from "react";

export default function AboutMe({content, aboutMeRef}) {
    const [section, setSection] = useState(content);
    const [editMode, setEditMode] = useState(false);
    const [extraInfo, setExtraInfo] = useState(content.extraInfo);

    const headingInput = useRef();
    const bioInput = useRef();

    const saveFields = () => {
        let newExtraInfo = [];
        const keyInputs = document.getElementsByClassName('extra-info-key');
        const valueInputs = document.getElementsByClassName('extra-info-value');
        for (let index = 0; index < keyInputs.length; index++)
        {
            const input = keyInputs[index];
            newExtraInfo.push({key: input.value, value: valueInputs[index].value});
        } 

        setExtraInfo(newExtraInfo);
        setSection(() => {
            const newSection = {
                id: 1,
                heading: headingInput.current.value,
                bio: bioInput.current.value,
                extraInfo: newExtraInfo
            }
            aboutMeRef.current = newSection;
            return newSection;
        })
        setEditMode(false);
    }

    const deleteExtraInfo = index => {
        setExtraInfo(prevExtraInfo => {
            const newInfo = prevExtraInfo.filter((_, prevIndex) => prevIndex !== index);
            return newInfo;
        });
    }

    if (editMode) {
        return (
            <section className="prose">
                <div className="flex flex-row absolute top-4 right-4">
                    <button className="btn btn-sm btn-primary w-fit" onClick={saveFields}>Save</button>
                    <button className="btn btn-sm btn-error ms-2 w-fit" onClick={() => {setEditMode(false);}}>Cancel</button>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Section heading:</span>
                    </label>
                    <input ref={headingInput} type="text" placeholder="Heading (e.g. About me)" className="input input-lg border-black w-full" defaultValue={section.heading} />
                </div>
                <div className="form-control w-full mt-3">
                    <label className="label">
                        <span className="label-text">Section bio:</span>
                    </label>
                    <textarea ref={bioInput} className="textarea border-black w-full" rows={6} placeholder="Section bio" defaultValue={section.bio}></textarea>
                </div>
                <label className="label mt-3">
                    <span className="label-text">Extra information:</span>
                </label>
                <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-2 text-md">
                    {extraInfo.map((info, index) => (
                    <div key={info.key !== '' ? info.key : index} className="join">
                        <input className="input border-black input-sm join-item w-32 extra-info-key" placeholder="Info title" defaultValue={info.key}/>
                        <input className="input border-black input-sm join-item w-40 extra-info-value" placeholder="Info value" defaultValue={info.value}/>
                        <i className="fa-solid fa-trash text-slate-300 duration-300 hover:text-black my-auto ms-2 join-item" onClick={() => {deleteExtraInfo(index)}}></i>
                    </div>
                    ))}
                    <div className="text-slate-500 duration-300 hover:text-black text-sm cursor-default my-auto" onClick={() => {setExtraInfo(prevExtraInfo => [...prevExtraInfo, {key: '', value: ''}])}}>+ Add field</div>
                </div>
            </section>
        )
    }

    return (
        <section className="prose">
            <i className="fa-solid fa-pen absolute top-8 right-8 text-slate-300 hover:text-slate-700 duration-300 text-xl" onClick={() => {setEditMode(true); setExtraInfo(section.extraInfo)}}></i>
            <h1>{section.heading}</h1>
            <p>{section.bio}</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 text-md">
                {section.extraInfo.map((info, index) => (
                <div key={index} className="my-1"><strong className="mr-2 text-blue-500">{info.key}:</strong>{info.value}</div>
                ))}
            </div>
        </section>
    )
}