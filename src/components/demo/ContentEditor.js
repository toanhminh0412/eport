'use client';

import { useState } from "react";
import SectionEdit from "./demo1/SectionEdit";

export default function ContentEditor({content, profileRef, aboutMeRef, skillsRef, experienceRef, servicesRef, projectsRef, testimonialsRef, footerRef}) {
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
        if (index === 6) return;
        const newSite = {...site};
        const temp = newSite.sections[index];
        newSite.sections[index] = newSite.sections[index+1];
        newSite.sections[index+1] = temp;
        setSite(newSite);
    }

    return (
        <div className="min-h-screen">
            <div className="px-2 md:px-20 py-10 prose max-w-none">
                <h1>Site editor</h1>
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
                footerRef={footerRef}
                index={index}
                moveUp={moveUp}
                moveDown={moveDown}
                />
                ))}
            </div>
        </div>
    )
}