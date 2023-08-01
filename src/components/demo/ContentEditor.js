import ProfileEdit from "./demo1/sections/ProfileEdit";
import ProjectsEdit from "./demo1/sections/ProjectsEdit";
import AboutMeEdit from "./demo1/sections/AboutMeEdit";
import SkillsEdit from "./demo1/sections/SkillsEdit";
import ExperienceEdit from "./demo1/sections/ExperienceEdit";
import ServicesEdit from "./demo1/sections/ServicesEdit";

export default function ContentEditor({content, profileRef, aboutMeRef, skillsRef, experienceRef, servicesRef, projectsRef}) {
    return (
        <div className="min-h-screen">
            <div className="px-2 md:px-20 py-10 prose max-w-none">
                <h1>Site editor</h1>
                
                {/* Basic profile */}
                <ProfileEdit content={content.sections[0]} profileRef={profileRef}/>

                {/* About me */}
                <AboutMeEdit content={content.sections[1]} aboutMeRef={aboutMeRef}/>

                {/* Skills */}
                <SkillsEdit content={content.sections[2]} skillsRef={skillsRef}/>

                {/* Experience */}
                <ExperienceEdit content={content.sections[3]} experienceRef={experienceRef}/>

                {/* Services */}
                <ServicesEdit content={content.sections[4]} servicesRef={servicesRef} />

                {/* Projects */}
                <ProjectsEdit content={content.sections[5]} projectsRef={projectsRef} />

            </div>
        </div>
    )
}