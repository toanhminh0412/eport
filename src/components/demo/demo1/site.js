'use client';

import Image from "next/image"
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

import { storage } from "../../../../public/libs/firebase";
import UpperNav from "@/components/UpperNav"
import ControlNav from "../ControlNav";
import { ErrorToast, SuccessToast } from "../MessageToast";
import ProjectShowcase from "./ProjectShowcase";
import TestimonialShowcase from "./TestimonialShowcase";
import Profile from "./sections/Profile";
import FilesModal from "../FilesModal";

import { deleteObject, getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import secureLocalStorage from "react-secure-storage";
import AboutMe from "./sections/AboutMe";


export default function Demo1({content}) {
    const [site, setSite] = useState(content);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [selectedImageId, setSelectedImageId] = useState(null);
    const [activeImages, setActiveImages] = useState([]);

    // Keep track of new values for each section
    const profileRef = useRef();
    const aboutMeRef = useRef();

    // Loading states
    const [savingState, setSavingState] = useState(false);

    // Messages
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        let curActiveImages = [site.sections[0].profilePic]
        site.sections[5].projects.forEach(project => {
            project.images.forEach(image => {
                if (!curActiveImages.includes(image)) {
                    curActiveImages.push(image);
                }
            })
        })
        setActiveImages(curActiveImages);

        const getFileURLs = async () => {
            // Get all file URLS that users have uploaded to the server
            const userId = secureLocalStorage.getItem('eport-uid');
            let serverFileURLs = [];
            const filesRef = ref(storage, `users/${userId}/images`);

            const files = await listAll(filesRef);
            files.items.forEach(async (itemRef, index) => {
                // All the items under listRef.
                const itemURL = await getDownloadURL(itemRef);
                serverFileURLs.push(itemURL);
                if (serverFileURLs.length === files.items.length) {
                    setUploadedFiles(serverFileURLs);
                }
            });   
        }

        getFileURLs();
    }, [])

    // Set currently selected image for editing
    const selectImage = imageId => {
        setSelectedImageId(imageId);
    }

    // Upload files to user's individual storage
    const uploadFiles = async (newFiles, callBack) => {
        const userId = secureLocalStorage.getItem('eport-uid');
        let newFileURLs = [];
        for (const file of newFiles) {
            const storageRef = ref(storage, `users/${userId}/images/${file.name}-${new Date().getTime()}`); 
            const fileSnapshot = await uploadBytes(storageRef, file);
            const fileURL = await getDownloadURL(fileSnapshot.ref);
            newFileURLs.push(fileURL);
        }
        setUploadedFiles(prevFiles => ([...prevFiles, ...newFileURLs]));
        callBack();
    }

    // Delete files from user's individual storage
    const deleteFiles = async (files, callBack) => {
        const userId = secureLocalStorage.getItem('eport-uid');
        for (const file of files) {
            const storageRef = ref(storage, file);
            await deleteObject(storageRef);
        }
        setUploadedFiles(prevFiles => {
            let newFiles = [];
            for (const prevFile of prevFiles) {
                if (!files.includes(prevFile)) {
                    newFiles.push(prevFile);
                }
            }
            return newFiles;
        })
        callBack();
    }

    // Save site edited information
    const saveSite = () => {
        setSavingState(true);
        // Flash "Site saved successfully" if no changes were made
        if (!(profileRef.current || aboutMeRef.current)) {
            setSuccessMsg("Site saved successfully");
            setSavingState(false);
            setTimeout(() => {
                setSuccessMsg('');
            }, 5000)
        // Otherwise make a fetch request to update site on Firestore
        } else {
            const newSite = {
                ...site,
                sections: [
                    profileRef.current ? profileRef.current : site.sections[0],
                    aboutMeRef.current ? aboutMeRef.current : site.sections[1],
                    ...site.sections.slice(2)
                ]
            }
            const siteId = window.location.pathname.split('/').at(-1);
            fetch(`/api/save_site/${siteId}`, {
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
            .then(response => response.json())
            .then(data => {
                // Site saved successfully
                if (data.status === 200) {
                    setSuccessMsg(data.message);
                    setTimeout(() => {
                        setSuccessMsg('');
                    }, 5000)
                // Failed to save site
                } else {
                    setErrorMsg(`${data.status}: ${data.message}`);
                    setTimeout(() => {
                        setErrorMsg('');
                    }, 5000);
                }
                setSavingState(false);
            })
            .catch(error => {
                setErrorMsg(error);
                setTimeout(() => {
                    setErrorMsg('');
                }, 5000)
                setSavingState(false);
            })
        }
    }

    return (
        <main className="bg-slate-100 w-screen h-full pb-10 pt-24">
            <UpperNav/>
            <ControlNav saveSite={saveSite} savingState={savingState}/>
            <div className="inset-x-0 w-11/12 mx-auto flex flex-row min-h-screen gap-x-3 flex-wrap md:flex-nowrap">
                {successMsg ? <SuccessToast message={successMsg}/> : null}
                {errorMsg ? <ErrorToast message={errorMsg}/> : null}
                <FilesModal files={uploadedFiles} selectedImageId={selectedImageId} activeImages={activeImages} uploadFiles={(newFiles, callBack) => {uploadFiles(newFiles, callBack)}} deleteFiles={(files, callBack) => {deleteFiles(files, callBack)}}/>
                <Profile content={site.sections[0]} profileRef={profileRef} selectImage={imageId => selectImage(imageId)}/>
                <div className="card min-h-screen w-full md:w-[60%] lg:w-2/3 bg-white mt-[2vh]">
                    <div className="p-8">
                    <AboutMe content={site.sections[1]} aboutMeRef={aboutMeRef}/>

                    {/* Skills */}
                    <section className="prose mt-12">
                        <h1>Skills</h1>
                        <div className="flex flex-row flex-wrap lg:flex-nowrap gap-x-6 text-md">
                            <div className="w-full lg:w-1/2">
                                <div className="my-1">
                                    <div className="flex flex-row justify-between"><span>HTML</span><span className="ms-auto">95%</span></div>
                                    <progress className="progress progress-primary w-full" value="95" max="100"></progress>
                                </div>
                                <div className="my-1">
                                    <div className="flex flex-row justify-between"><span>CSS</span><span className="ms-auto">80%</span></div>
                                    <progress className="progress progress-error w-full" value="80" max="100"></progress>
                                </div>
                                <div className="my-1">
                                    <div className="flex flex-row justify-between"><span>JavaScript</span><span className="ms-auto">90%</span></div>
                                    <progress className="progress progress-warning w-full" value="90" max="100"></progress>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="my-1">
                                    <div className="flex flex-row justify-between"><span>jQuery</span><span className="ms-auto">100%</span></div>
                                    <progress className="progress progress-success w-full" value="100" max="100"></progress>
                                </div>
                                <div className="my-1">
                                    <div className="flex flex-row justify-between"><span>Bootstrap</span><span className="ms-auto">85%</span></div>
                                    <progress className="progress progress-info w-full" value="85" max="100"></progress>
                                </div>
                                <div className="my-1">
                                    <div className="flex flex-row justify-between"><span>React</span><span className="ms-auto">90%</span></div>
                                    <progress className="progress w-full" value="90" max="100"></progress>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="prose mt-12">
                        <h1>Experience</h1>
                        {site.sections[3].experiences.map((exp, index) => (
                            <article key={index}>
                                <h3>{exp.jobTitle}</h3>
                                <div className="font-light text-slate-500">{exp.company} | {exp.startYear} - {exp.endYear}</div>
                                <div className="mt-2">{exp.description}</div>
                            </article>
                        ))}
                    </section>

                    {/* Services */}
                    <section className="prose mt-12">
                        <h1>Services</h1>
                        <div className="block sm:grid md:block lg:grid grid-cols-2 grid-rows-2 gap-4">
                            {site.sections[4].services.map((service, index) => (
                                <div key={index} className="text-center mt-2 sm:mt-0 md:mt-2 lg:mt-0">
                                    <i className={`${service.icon} text-4xl border-2 p-5 rounded-full text-blue-500 hover:text-white hover:bg-blue-500 duration-500 border-blue-500`}></i>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

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