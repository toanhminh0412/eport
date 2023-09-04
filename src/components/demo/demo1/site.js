'use client';

import { useRef, useState } from "react";

import ControlNav from "../../layout/ControlNav";
import { ErrorToast, SuccessToast } from "../../ui/MessageToast";
import ContentEditor from "../../layout/ContentEditor";
import { storage } from "../../../../public/libs/firebase";

import secureLocalStorage from "react-secure-storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Footer from "./sections/Footer";
import { compressImageSize } from "@/helpers/files";
import PublishModal from "../../ui/PublishModal";
import Section from "./Section";

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
    const referencesRef = useRef({'references': []})
    const footerRef = useRef({'socials': []});

    // Toggle edit mode
    const toggleEditMode = () => {
        setEditMode(prevEditMode => !prevEditMode);
    }

    // Show message toast
    const showMessageToast = (message, success=true) => {
        if (success) {
            setSuccessMsg(message);
            setTimeout(() => {
                setSuccessMsg('');
            }, 5000);
        } else {
            setErrorMsg(message);
            setTimeout(() => {
                setErrorMsg('');
            }, 5000);
        }
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

        // Upload new CV if it's replaced
        let newCVURL = profileRef.current[2].dataset.cvurl;
        if (newCVURL && !newCVURL.includes('firebasestorage.googleapis.com')) {
            let file = await fetch(newCVURL).then(r => r.blob());
            const userId = secureLocalStorage.getItem('eport-uid');
            const cvRef = ref(storage, `users/${userId}/cv.pdf`);
            const cvSnap = await uploadBytes(cvRef, file);
            newCVURL = await getDownloadURL(cvSnap.ref);
        }

        // Update profile section
        const newProfile = {
            id: 0,
            profilePic: newProfilePicURL ? newProfilePicURL : site.sections[0].profilePic,
            fullName: profileRef.current[0].value,
            job: profileRef.current[1].value,
            cvURL: newCVURL
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
            hidden: aboutMeRef.current['hidden'].checked,
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
            hidden: skillsRef.current['hidden'].checked,
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
            hidden: experienceRef.current['hidden'].checked,
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
            hidden: servicesRef.current['hidden'].checked,
            services: newServicesList
        }

        // Update projects section 
        // Upload new project images
        for (let i = 0; i < projectsRef.current.projects.length; i++) {
            if (projectsRef.current.projects[i] && projectsRef.current.projects[i].title) {
                const projectObj = projectsRef.current.projects[i];
                if (projectObj.images && projectObj.images.length > 0) {
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
                    images: projectObj.images ? projectObj.images.map(image => image ? image.dataset.src : null).filter(image => image !== null) : [],
                    tags: projectObj.tags.value.split(',').filter(tag => tag !== '')
                }
                newProjectsList.push(newProject);
            }
        }

        const newProjects = {
            id: 5,
            heading: projectsRef.current.heading.value,
            hidden: projectsRef.current['hidden'].checked,
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
            hidden: testimonialsRef.current['hidden'].checked,
            testimonials: newTestimonialsList
        }

        // Update refrerences section
        let newReferencesList = [];
        for (let i = 0; i < referencesRef.current.references.length; i++) {
            if (referencesRef.current.references[i] && referencesRef.current.references[i].name) {
                const referenceObj = referencesRef.current.references[i];
                const newReference = {
                    name: referenceObj.name.value,
                    relationship: referenceObj.relationship.value,
                    phone: referenceObj.phone.value,
                    email: referenceObj.email.value,
                    linkedin: referenceObj.linkedin.value
                }
                newReferencesList.push(newReference);
            }
        }

        const newReferences = {
            id: 8,
            heading: referencesRef.current.heading.value,
            hidden: referencesRef.current['hidden'].checked,
            references: newReferencesList
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

        // New sections
        const sectionsNum = site.sections.length;
        let newSections = Array(sectionsNum).fill(null);
        newSections[0] = newProfile;
        newSections[sectionsNum - 1] = newFooter;
        newSections[aboutMeRef.current.index.dataset.index] = newAboutMe;
        newSections[skillsRef.current.index.dataset.index] = newSkills;
        newSections[experienceRef.current.index.dataset.index] = newExperience;
        newSections[servicesRef.current.index.dataset.index] = newServices;
        newSections[projectsRef.current.index.dataset.index] = newProjects;
        newSections[testimonialsRef.current.index.dataset.index] = newTestimonials;
        newSections[referencesRef.current.index.dataset.index] = newReferences;

        // Update site
        const newSite = {
            ...site,
            sections: newSections
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
            showMessageToast(data.message, true);
        } else {
            showMessageToast(data.message, false);
        }
    };
    
    if (editMode) {
        return (
            <main className="bg-slate-100 w-screen h-full pb-10 pt-24">
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
                referencesRef={referencesRef}
                footerRef={footerRef}/>
            </main>
        )
    }

    return (
        <main className="bg-slate-100 w-screen h-full pb-10 pt-24 mb-32">
            <ControlNav setEditMode={(bool) => {setEditMode(bool)}} saveSiteFunc={saveSite}/>
            <PublishModal site={site} showMessageToast={showMessageToast}/>
            <div className="inset-x-0 w-11/12 mx-auto flex flex-row min-h-screen gap-x-3 flex-wrap md:flex-nowrap break-words">
                {successMsg ? <SuccessToast message={successMsg}/> : null}
                {errorMsg ? <ErrorToast message={errorMsg}/> : null}
                <Section content={site.sections[0]}/>
                <div className="card h-fit w-full md:w-[60%] lg:w-2/3 bg-white mt-[2vh]">
                    <div className="p-8">
                        {site.sections.slice(1, site.sections.length-1).map((section, index) => <Section key={`${section.heading}-${index}`} content={section}/>)}
                    </div>
                
                {/* Contact me */}
                <Footer content={site.sections[site.sections.length-1]}/>
                </div>
            </div>
        </main>
    )
}