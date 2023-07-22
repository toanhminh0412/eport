'use client';

import Link from "next/link";
import { useRef, useState, useEffect } from "react";

import UpperNav from "@/components/UpperNav"
import ControlNav from "../ControlNav";
import { ErrorToast, SuccessToast } from "../MessageToast";
import ProjectShowcase from "./ProjectShowcase";
import TestimonialShowcase from "./TestimonialShowcase";
import Profile from "./sections/Profile";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import ContentEditor from "../ContentEditor";
import { storage } from "../../../../public/libs/firebase";

import secureLocalStorage from "react-secure-storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Experience from "./sections/Experience";
import Services from "./sections/Services";

export default function Demo1({content}) {
    const [site, setSite] = useState(content);
    const [successMsg, setSuccessMsg] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const profileRef = useRef([]);
    const aboutMeRef = useRef([]);
    const skillsRef = useRef({'skills': []});
    const experienceRef = useRef({'experiences': []});
    const servicesRef = useRef({'services': []});

    // Toggle edit mode
    const toggleEditMode = () => {
        setEditMode(prevEditMode => !prevEditMode);
    }

    // Save new site
    const saveSite = async() => {
        // Upload new profile picture if it's replaced
        let newProfilePicURL = '';
        if (profileRef.current[6].files.length > 0) {
            const file = profileRef.current[6].files[0];
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
            bio: aboutMeRef.current[1].value,
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
        console.log(servicesRef.current);
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

        console.log(newServices);

        // Update site
        const newSite = {
            ...site,
            sections: [newProfile, newAboutMe, newSkills, newExperience, newServices, ...site.sections.slice(5)]
        }
        const siteId = window.location.pathname.split('/').at(-1);
        
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
                servicesRef={servicesRef}/>
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
                    <section className="prose mt-12">
                        <h1>Projects</h1>
                        <ProjectShowcase categories={site.sections[5].categories} projects={site.sections[5].projects}/>
                    </section>

                    {/* Testimonials */}
                    <section className="prose mt-20">
                        <h1>Testimonials</h1>
                        <TestimonialShowcase testimonials={site.sections[6].testimonials} />
                    </section>
                    </div>
                
                {/* Contact me */}
                <section className="mt-12 bg-slate-900 w-full p-8 rounded-b-lg text-white">
                    <div className="prose text-white max-w-none">
                        <h1 className="text-white">Get in touch</h1>
                        <p className="flex flex-row flex-wrap gap-x-4 justify-center w-full text-4xl">
                            <Link href="#" target="_blank"><i className="fa-solid fa-envelope text-blue-200 hover:text-blue-500 duration-300"></i></Link>
                            <Link href="#" target="_blank"><i className="fa-brands fa-facebook text-blue-200 hover:text-blue-500 duration-300"></i></Link>
                            <Link href="#" target="_blank"><i className="fa-brands fa-instagram text-blue-200 hover:text-blue-500 duration-300"></i></Link>
                            <Link href="#" target="_blank"><i className="fa-brands fa-linkedin text-blue-200 hover:text-blue-500 duration-300"></i></Link>
                            <Link href="#" target="_blank"><i className="fa-brands fa-github text-blue-200 hover:text-blue-500 duration-300"></i></Link>
                        </p>
                        <div className="text-center font-light">&copy; All rights reserved | Eport</div>
                    </div>
                </section>
                </div>
            </div>
        </main>
    )
}