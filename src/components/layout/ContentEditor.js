'use client';

import { useState, createContext, useEffect } from "react";
import SectionEdit from "../demo/demo1/SectionEdit";

export const SiteContext = createContext();

export default function ContentEditor({content, profileRef, aboutMeRef, skillsRef, experienceRef, servicesRef, projectsRef, testimonialsRef, referencesRef, footerRef, themeRef}) {
    const [site, setSite] = useState(content);
    
    // Move a section up
    const moveUp = index => {
        if (index === 1) return;
        const newSite = {...site};
        const temp = newSite.sections[index];
        newSite.sections[index] = newSite.sections[index-1];
        newSite.sections[index-1] = temp;
        setSite(newSite);
    }
    
    // Move a section down
    const moveDown = index => {
        if (index === site.sections.length - 2) return;
        const newSite = {...site};
        const temp = newSite.sections[index];
        newSite.sections[index] = newSite.sections[index+1];
        newSite.sections[index+1] = temp;
        setSite(newSite);
    }

    return (
        <SiteContext.Provider value={site}>
            <div className="min-h-screen dark:bg-slate-700">
                <div className="px-2 md:px-20 py-10 prose max-w-none pb-40 md:pb-20">
                    <h1 className="dark:text-white">Site editor</h1>
                    <div className="">
                        <label className="label">
                            <span className="label-text text-lg dark:text-slate-200">Choose your theme:</span>
                        </label>
                        <select
                        ref={el => {themeRef.current = el}}
                        className="select select-accent w-full max-w-xs mb-10 dark:bg-slate-950 dark:text-slate-200" 
                        defaultValue={content.theme}>
                        <option disabled>Choose between lightmode and darkmode? </option>
                        <option value="dark">Dark mode</option>
                        <option value="light">Light mode</option>
                        </select>
                    </div>
                    {site.sections.map((section, index) => (
                    <SectionEdit 
                    key={`${section.heading}-${index}`}
                    content={section}
                    profileRef={profileRef}
                    aboutMeRef={aboutMeRef}
                    skillsRef={skillsRef}
                    experienceRef={experienceRef}
                    servicesRef={servicesRef}
                    projectsRef={projectsRef}
                    testimonialsRef={testimonialsRef}
                    referencesRef={referencesRef}
                    footerRef={footerRef}
                    index={index}
                    moveUp={moveUp}
                    moveDown={moveDown}
                    />
                    ))}
                </div>
            </div>
        </SiteContext.Provider>
    )
}