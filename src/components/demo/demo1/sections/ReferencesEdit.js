'use client';

import { useState, useContext } from "react";
import { SiteContext } from "../../../layout/ContentEditor";
import { isLoggedInContext } from "../site";

import { nanoid } from "nanoid";

export default function ReferencesEdit({
    content, 
    referencesRef, 
    index, 
    moveUp, 
    moveDown
}) {
    const site = useContext(SiteContext);
    const isLoggedIn = useContext(isLoggedInContext);
    const [references, _] = useState(content);
    const [referencesList, setReferencesList] = useState(content.references.map(reference => ({id: nanoid(), ...reference})));

    // Remove a reference
    const removeReference = index => {
        setReferencesList(prevReferencesList => prevReferencesList.filter((_, prevIndex) => prevIndex !== index));
        referencesRef.current['references'].splice(index, 1);
    }

    return (
        <div 
        ref={el => {(referencesRef.current['index'] = el)}} 
        className="collapse collapse-arrow border border-slate-300 dark:border-slate-600" 
        data-index={index}>
            <input type="checkbox" name="my-accordion-2" /> 
            <div className="collapse-title text-xl dark:text-slate-200 font-medium bg-white dark:bg-slate-950 shadow-lg">
                {references.heading}
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
                            ref={el => (referencesRef.current['hidden'] = el)}
                            type="checkbox" 
                            className="toggle" 
                            defaultChecked={references.hidden}/>
                            <label className="label text-xs dark:text-slate-200">
                                <span><strong className="dark:text-slate-100">Hint: </strong>Turn this on if you want this section to <strong className="dark:text-slate-100">not be visible</strong> on your page.</span>
                            </label>

                            {/* Heading */}
                            <label className="label">
                                <span className="label-text dark:text-slate-200">Section heading  (recommend &apos;References&apos;):</span>
                            </label>
                            <input ref={el => (referencesRef.current['heading'] = el)} type="text" placeholder="Section heading (recommend 'References')" className="input border-black dark:border-blue-400 dark:bg-slate-700 dark:text-slate-200 w-full" defaultValue={references.heading} />
                        
                            {/* References */}
                            <div className="font-semibold mt-8 dark:text-slate-200">Reference list:</div>
                            <div className="form-control">
                                {referencesList.map((reference, refIndex) => (
                                <div key={reference.id} className={`${refIndex === 0 ? '' : 'mt-12'} w-full`}>
                                    {/* Name */}
                                    <label className="label max-w-lg">
                                        <span className="label-text dark:text-slate-200">Referrer&apos;s name:</span>
                                        <span className="text-md text-slate-400 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => removeReference(refIndex)}><i className="fa-solid fa-trash me-2"></i>Remove reference</span>
                                    </label>
                                    <input 
                                    ref={el => {referencesRef.current['references'][refIndex] = referencesRef.current['references'][refIndex] ? referencesRef.current['references'][refIndex] : {}; referencesRef.current['references'][refIndex]['name'] = el}}
                                    type="text" 
                                    placeholder="e.g. Catherine Oliver" 
                                    className="input border-black dark:border-blue-400 dark:bg-slate-700 dark:text-slate-200 w-full max-w-lg" 
                                    defaultValue={reference.name} />

                                    {/* Relationship */}
                                    <label className="label max-w-lg mt-2">
                                        <span className="label-text dark:text-slate-200">Referrer&apos;s relationship:</span>
                                    </label>
                                    <input 
                                    ref={el => {referencesRef.current['references'][refIndex] = referencesRef.current['references'][refIndex] ? referencesRef.current['references'][refIndex] : {}; referencesRef.current['references'][refIndex]['relationship'] = el}}
                                    type="text" 
                                    placeholder="e.g. Manager at company A" 
                                    className="input border-black dark:border-blue-400 dark:bg-slate-700 dark:text-slate-200 w-full max-w-lg" 
                                    defaultValue={reference.relationship} />

                                    {/* Phone */}
                                    <label className="label max-w-lg">
                                        <span className="label-text dark:text-slate-200">Referrer&apos;s phone:</span>
                                    </label>
                                    <input 
                                    ref={el => {referencesRef.current['references'][refIndex] = referencesRef.current['references'][refIndex] ? referencesRef.current['references'][refIndex] : {}; referencesRef.current['references'][refIndex]['phone'] = el}}
                                    type="number" 
                                    placeholder="e.g. 123456789" 
                                    className="input border-black dark:border-blue-400 dark:bg-slate-700 dark:text-slate-200 w-full max-w-lg" 
                                    defaultValue={reference.phone} />
                                    
                                    {/* Email */}
                                    <label className="label max-w-lg">
                                        <span className="label-text dark:text-slate-200">Referrer&apos;s email:</span>
                                    </label>
                                    <input 
                                    ref={el => {referencesRef.current['references'][refIndex] = referencesRef.current['references'][refIndex] ? referencesRef.current['references'][refIndex] : {}; referencesRef.current['references'][refIndex]['email'] = el}}
                                    type="email" 
                                    placeholder="e.g. coliver@example.org" 
                                    className="input border-black dark:border-blue-400 dark:bg-slate-700 dark:text-slate-200 w-full max-w-lg" 
                                    defaultValue={reference.email} />

                                    {/* LinkedIn */}
                                    <label className="label max-w-lg">
                                        <span className="label-text dark:text-slate-200">Referrer&apos;s LinkedIn:</span>
                                    </label>
                                    <input 
                                    ref={el => {referencesRef.current['references'][refIndex] = referencesRef.current['references'][refIndex] ? referencesRef.current['references'][refIndex] : {}; referencesRef.current['references'][refIndex]['linkedin'] = el}}
                                    type="url" 
                                    placeholder="e.g. LinkedIn URL" 
                                    className="input border-black dark:border-blue-400 dark:bg-slate-700 dark:text-slate-200 w-full max-w-lg" 
                                    defaultValue={reference.linkedin} />
                                </div>
                                ))}

                                {/* Ask user login to add more field */}
                                {isLoggedIn ?
                                    <div className="text-md text-slate-400 hover:text-slate-700 duration-300 mt-6 cursor-default w-fit" onClick={() => {setReferencesList([...referencesList, {id: nanoid(), name: 'Person name', relationship: 'Relationship with you', phone: 123456789, email: 'person@example.org', linkedin: 'https://linkedin.com'}])}}><i className="fa-solid fa-plus me-2"></i>Add reference</div>
                                :
                                    <div className="text-md text-slate-400 hover:text-slate-700 duration-300 mt-6 cursor-default w-fit" onClick={() => window.ask_login_modal.showModal()}><i className="fa-solid fa-plus me-2"></i>Add reference</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}