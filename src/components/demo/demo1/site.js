'use client';

import { useRef, useState } from "react";

import UpperNav from "@/components/UpperNav"
import ControlNav from "../ControlNav";
import { ErrorToast, SuccessToast } from "../MessageToast";
import Profile from "./sections/Profile";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import ContentEditor from "../ContentEditor";
import { storage } from "../../../../public/libs/firebase";

import secureLocalStorage from "react-secure-storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Experience from "./sections/Experience";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import { compressImageSize } from "@/helpers/files";

export default function Demo1({content, siteId}) {
    const [site, setSite] = useState(content);
    const [successMsg, setSuccessMsg] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const profileRef = useRef([]);
    const aboutMeRef = useRef([]);
    const skillsRef = useRef({'skills': []});
    const experienceRef = useRef({'experiences': []});
    const servicesRef = useRef({'services': []});
    const projectsRef = useRef({'categories': [], 'projects': []});
    const testimonialsRef = useRef({'testimonials': []});
    const footerRef = useRef({'socials': []});

    // Toggle edit mode
    const toggleEditMode = () => {
        setEditMode(prevEditMode => !prevEditMode);
    }

    // Save new site
    const saveSite = async() => {
        // Upload new profile picture if it's replaced
        let newProfilePicURL = '';
        if (profileRef.current[6].files.length > 0) {
            let file = profileRef.current[6].files[0];
            file = await compressImageSize(file, 0.4);
            const userId = secureLocalStorage.getItem('eport-uid');
            const profilePicRef = ref(storage, `users/${userId}/images/profilePic.jpg`);
            const profilePicSnap = await uploadBytes(profilePicRef, file);
            newProfilePicURL = await getDownloadURL(profilePicSnap.ref);
        }

        // Update profile section
        const newProfile = {
            id: 0,
            profilePic: newProfilePicURL ? newProfilePicURL : site.sections[0].profilePic,
            fullName: profileRef.current[0].value,
            job: profileRef.current[1].value,
            link1: [profileRef.current[2].value, profileRef.current[3].value],
            link2: [profileRef.current[4].value, profileRef.current[5].value]
        }

        // Update about me section
        const newExtraInfo = [];
        for (let i = 2; i < aboutMeRef.current.length; i++) {
            if(aboutMeRef.current[i]) {
                const key = aboutMeRef.current[i].value;
                const value = aboutMeRef.current[++i].value;
                if (key && value) {
                    newExtraInfo.push({
                        key: key,
                        value: value
                    });
                }
            }
        }

        const newAboutMe = {
            id: 1,
            heading: aboutMeRef.current[0].value,
            bio: aboutMeRef.current[1].getContent(),
            extraInfo: newExtraInfo
        }

        // Update skills section
        let newSkillsList = [];
        for (let i = 0; i < skillsRef.current.skills.length; i++) {
            if (skillsRef.current.skills[i]) {
                const key = skillsRef.current.skills[i].value;
                const value = skillsRef.current.skills[++i].value;
                if (key && value) {
                    newSkillsList.push({
                        key: key,
                        value: value
                    });
                }
            }
        }

        const newSkills = {
            id: 2,
            heading: skillsRef.current.heading.value,
            skills: newSkillsList
        }
        
        // Update experience section
        let newExperienceList = [];
        for (let i = 0; i < experienceRef.current.experiences.length; i++) {
            if (experienceRef.current.experiences[i] && experienceRef.current.experiences[i].jobTitle) {
                const experienceObj = experienceRef.current.experiences[i];
                const newExperience = {
                    jobTitle: experienceObj.jobTitle.value,
                    company: experienceObj.company.value,
                    startYear: experienceObj.startYear.value,
                    endYear: experienceObj.endYear.value,
                    description: experienceObj.description.getContent()
                }
                newExperienceList.push(newExperience);
            }
        }

        const newExperience = {
            id: 3,
            heading: experienceRef.current.heading.value,
            experiences: newExperienceList
        }

        // Update services section
        let newServicesList = [];
        for (let i = 0; i < servicesRef.current.services.length; i++) {
            if (servicesRef.current.services[i] && servicesRef.current.services[i].title) {
                const serviceObj = servicesRef.current.services[i];
                const newService = {
                    title: serviceObj.title.value,
                    icon: serviceObj.icon.dataset.icon,
                    description: serviceObj.description.getContent()
                }
                newServicesList.push(newService);
            }
        }

        const newServices = {
            id: 4,
            heading: servicesRef.current.heading.value,
            services: newServicesList
        }

        // Update projects section 
        // Upload new project images
        for (let i = 0; i < projectsRef.current.projects.length; i++) {
            if (projectsRef.current.projects[i] && projectsRef.current.projects[i].title) {
                const projectObj = projectsRef.current.projects[i];
                if (projectObj.images.length > 0) {
                    const userId = secureLocalStorage.getItem('eport-uid');
                    for (let j = 0; j < projectObj.images.length; j++) {
                        if (projectObj.images[j]) {
                            const fileSrc = projectObj.images[j].src;
                            if (!fileSrc.includes('firebasestorage.googleapis.com')) {
                                let newFile = await fetch(fileSrc).then(r => r.blob());
                                newFile = await compressImageSize(newFile, 0.4);
                                const projectImagesRef = ref(storage, `users/${userId}/images/projects/image-${new Date().valueOf()}`);
                                const projectImageSnap = await uploadBytes(projectImagesRef, newFile);
                                const projectImageURL = await getDownloadURL(projectImageSnap.ref);
                                projectObj.images[j].dataset.src = projectImageURL;
                            }
                        }
                    }
                }
            }
        }
        
        let newProjectsList = [];
        for (let i = 0; i < projectsRef.current.projects.length; i++) {
            if (projectsRef.current.projects[i] && projectsRef.current.projects[i].title) {
                const projectObj = projectsRef.current.projects[i];

                const newProject = {
                    title: projectObj.title.value,
                    description: projectObj.description.getContent(),
                    images: projectObj.images.map(image => image ? image.dataset.src : null).filter(image => image !== null),
                    tags: projectObj.tags.value.split(',').filter(tag => tag !== '')
                }
                newProjectsList.push(newProject);
            }
        }

        const newProjects = {
            id: 5,
            heading: projectsRef.current.heading.value,
            projects: newProjectsList
        }

        // Update testimonials section
        let newTestimonialsList = [];
        for (let i = 0; i < testimonialsRef.current.testimonials.length; i++) {
            if (testimonialsRef.current.testimonials[i] && testimonialsRef.current.testimonials[i].name) {
                const testimonialObj = testimonialsRef.current.testimonials[i];
                const newTestimonial = {
                    name: testimonialObj.name.value,
                    job: testimonialObj.job.value,
                    content: testimonialObj.content.value
                }
                newTestimonialsList.push(newTestimonial);
            }
        }

        const newTestimonials = {
            id: 6,
            heading: testimonialsRef.current.heading.value,
            testimonials: newTestimonialsList
        }

        // Update footer section
        let newSocials = [];
        for (let i = 0; i < footerRef.current.socials.length; i++) {
            if (footerRef.current.socials[i] && footerRef.current.socials[i].key) {
                const socialObj = footerRef.current.socials[i];
                const newSocial = {
                    key: socialObj.key.value,
                    value: socialObj.value.value
                }
                newSocials.push(newSocial);
            }
        }

        const newFooter = {
            id: 7,
            heading: footerRef.current.heading.value,
            socials: newSocials
        }

        // Update site
        const newSite = {
            ...site,
            sections: [newProfile, newAboutMe, newSkills, newExperience, newServices, newProjects, newTestimonials, newFooter]
        }
        console.log(newSite);
        
        // Save new site to database
        const response = await fetch(`/api/save_site/${siteId}`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                site: newSite
            })
        })
        const data = await response.json();
        console.log(data);
        if (data.status === 200) {
            toggleEditMode();
            setSite(newSite);
            setSuccessMsg(data.message);
            setTimeout(() => {
                setSuccessMsg('');
            }, 5000);
        } else {
            setErrorMsg(data.message);
            setTimeout(() => {
                setErrorMsg('');
            }, 5000);
        }
    };
    
    if (editMode) {
        return (
            <main className="bg-slate-100 w-screen h-full pb-10 pt-24">
                <UpperNav/>
                <ControlNav setEditMode={(bool) => {setEditMode(bool)}} saveSiteFunc={saveSite}/>
                <ContentEditor 
                content={site} 
                profileRef={profileRef} 
                aboutMeRef={aboutMeRef} 
                skillsRef={skillsRef} 
                experienceRef={experienceRef}
                servicesRef={servicesRef}
                projectsRef={projectsRef}
                testimonialsRef={testimonialsRef}
                footerRef={footerRef}/>
            </main>
        )
    }

    return (
        <main className="bg-slate-100 w-screen h-full pb-10 pt-24">
            <UpperNav/>
            <ControlNav setEditMode={(bool) => {setEditMode(bool)}} saveSiteFunc={saveSite}/>
            <div className="inset-x-0 w-11/12 mx-auto flex flex-row min-h-screen gap-x-3 flex-wrap md:flex-nowrap">
                {successMsg ? <SuccessToast message={successMsg}/> : null}
                {errorMsg ? <ErrorToast message={errorMsg}/> : null}
                <Profile content={site.sections[0]}/>
                <div className="card min-h-screen w-full md:w-[60%] lg:w-2/3 bg-white mt-[2vh]">
                    <div className="p-8">
                    <AboutMe content={site.sections[1]}/>
                    <Skills content={site.sections[2]}/>
                    <Experience content={site.sections[3]}/>

                    {/* Services */}
                    <Services content={site.sections[4]}/>

                    {/* Projects */}
                    <Projects content={site.sections[5]}/>

                    {/* Testimonials */}
                    <Testimonials content={site.sections[6]} />
                    </div>
                
                {/* Contact me */}
                <Footer content={site.sections[7]}/>
                </div>
            </div>
        </main>
    )
}