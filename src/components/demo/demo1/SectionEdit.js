import ProfileEdit from "./sections/ProfileEdit";
import AboutMeEdit from "./sections/AboutMeEdit";
import SkillsEdit from "./sections/SkillsEdit";
import ExperienceEdit from "./sections/ExperienceEdit";
import ServicesEdit from "./sections/ServicesEdit";
import ProjectsEdit from "./sections/ProjectsEdit";
import TestimonialsEdit from "./sections/TestimonialsEdit";
import FooterEdit from "./sections/FooterEdit";
import ReferencesEdit from "./sections/ReferencesEdit";
import { useContext } from "react";
import { planContext } from "./site";

// import { cookies } from "next/headers";

// Render a single edit section based on id
export default function SectionEdit({
    content,
    profileRef,
    aboutMeRef,
    skillsRef,
    experienceRef,
    servicesRef,
    projectsRef,
    testimonialsRef,
    referencesRef,
    footerRef,
    index,
    moveUp,
    moveDown
}) {
    const sectionId = content.id;
    const userPlan = useContext(planContext);
    
    // const cookieStore = cookies();
    // const plan = cookieStore.get('eport-plan') ? cookieStore.get('eport-plan').value : 'basic';
    switch (sectionId) {
        case 0:
            return <ProfileEdit content={content} profileRef={profileRef} />
        case 1:
            return <AboutMeEdit content={content} aboutMeRef={aboutMeRef} index={index} moveUp={moveUp} moveDown={moveDown}/>
        case 2:
            if (userPlan === "basic") {
                return null;
            } else {
                return <SkillsEdit content={content} skillsRef={skillsRef} index={index} moveUp={moveUp} moveDown={moveDown}/>
            }
        case 3:
            return <ExperienceEdit content={content} experienceRef={experienceRef} index={index} moveUp={moveUp} moveDown={moveDown}/>
        case 4:
            if (userPlan === "basic") {
                return null;
            } else {
                return <ServicesEdit content={content} servicesRef={servicesRef} index={index} moveUp={moveUp} moveDown={moveDown}/>
            }
        case 5:
            if (userPlan === "basic") {
                return null;
            } else {
                return <ProjectsEdit content={content} projectsRef={projectsRef} index={index} moveUp={moveUp} moveDown={moveDown}/>
            }
        case 6:
            if (userPlan === "basic") {
                return null;
            } else {
                return <TestimonialsEdit content={content} testimonialsRef={testimonialsRef} index={index} moveUp={moveUp} moveDown={moveDown}/>
            }
        case 7:
            return <FooterEdit content={content} footerRef={footerRef} />
        case 8:
            return <ReferencesEdit content={content} referencesRef={referencesRef} index={index} moveUp={moveUp} moveDown={moveDown}/>
        default:
            return null;
    }
}