"use client";

// Next, React imports
import { createContext, useState, useContext } from "react"

// Local imports
import { getSectionInitialData } from "./helper";
import PreviewControlNav from "./PreviewControlNav";
import LeftContentEditor from "./LeftContentEditor";
import { Section, EditableSection } from "./Section";
import { SuccessToast, ErrorToast } from "@/components/ui/MessageToast";

// Third party imports
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { nanoid } from "nanoid";
import { compressImageSize } from "@/helpers/files";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../../../../public/libs/firebase";


export const SectionsContext = createContext();
export const EditModeContext = createContext();
export const ActiveTabContext = createContext();
export const ActiveContentContext = createContext();

export default function Template0({project, projectId}) {
    const [sections, setSections] = useState(project.sections ? project.sections : []);
    const [editMode, setEditMode] = useState(true);
    const [activeTab, setActiveTab] = useState("sections");
    const [activeSectionInd, setActiveSectionInd] = useState(-1);
    const [successMsg, setSuccessMsg] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const onDragEnd = (result) => {
        if (!result.destination) return;

        console.log(result);

        if (result.draggableId.includes("site-block")) {
            const reorderedSections = Array.from(sections);
            const [reorderedSection] = reorderedSections.splice(result.source.index, 1);
            reorderedSections.splice(result.destination.index, 0, reorderedSection);

            setSections(reorderedSections);
        } else if (result.draggableId.includes("build-block")) {
            const sectionId = result.draggableId.split("-")[2];
            const section = getSectionInitialData(sectionId);
            let reorderedSections = Array.from(sections);
            reorderedSections.splice(result.destination.index, 0, {...section, id: nanoid()});
            setSections(reorderedSections);
        }
        
    }

    const deleteSection = (section) =>  {
        const deleletedSectionId = section.id;
        const newSections = sections.filter((section) => section.id !== deleletedSectionId);
        setActiveSectionInd(-1);
        setSections(newSections);
    }

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

    const saveSite = async() => {
        for (let i = 0; i < sections.length; i++) {
            // Upload header1 and aboutme1 avatar
            if (sections[i].sectionId === "header1") {
                let newAvatarURL = '';
                const fileSrc = sections[i].avatar.src
                if (!fileSrc.includes('firebasestorage.googleapis.com')) {
                    let newFile = await fetch(fileSrc).then(r => r.blob());
                    newFile = await compressImageSize(newFile, 0.4);
                    const avatarRef = ref(storage, `projects/${projectId}/image-${new Date().valueOf()}.jpg`);
                    const avatarSnap = await uploadBytes(avatarRef, newFile);
                    newAvatarURL = await getDownloadURL(avatarSnap.ref);

                    const newSections = [...sections];
                    newSections[i].avatar.src = newAvatarURL;
                    setSections(newSections);
                }
            }

            // Upload header1 background image
            if (sections[i].sectionId === "header1") {
                let newBackgroundImgURL = '';
                const fileSrc = sections[i].backgroundImage
                if (!fileSrc.includes('firebasestorage.googleapis.com')) {
                    let newFile = await fetch(fileSrc).then(r => r.blob());
                    newFile = await compressImageSize(newFile, 0.4);
                    const backgroundImgRef = ref(storage, `projects/${projectId}/image-${new Date().valueOf()}.jpg`);
                    const backgroundImgSnap = await uploadBytes(backgroundImgRef, newFile);
                    newBackgroundImgURL = await getDownloadURL(backgroundImgSnap.ref);

                    const newSections = [...sections];
                    newSections[i].backgroundImage = newBackgroundImgURL;
                    setSections(newSections);
                }       
            }

            if (sections[i].sectionId === "aboutme1") {
                let newAvatarURL = '';
                const fileSrc = sections[i].avatar.src
                if (!fileSrc.includes('firebasestorage.googleapis.com')) {
                    let newFile = await fetch(fileSrc).then(r => r.blob());
                    newFile = await compressImageSize(newFile, 0.4);
                    const avatarRef = ref(storage, `projects/${projectId}/image-${new Date().valueOf()}.jpg`);
                    const avatarSnap = await uploadBytes(avatarRef, newFile);
                    newAvatarURL = await getDownloadURL(avatarSnap.ref);

                    const newSections = [...sections];
                    newSections[i].avatar.src = newAvatarURL;
                    setSections(newSections);
                }
            }

            if (sections[i].sectionId === "portfolio1") {
                for (let j = 0; j < sections[i].portfolios.length; j++) {
                    for (let k = 0; k < sections[i].portfolios[j].images.length; k++) {
                        let newPortfolioImgURL = '';
                        const fileSrc = sections[i].portfolios[j].images[k].src;
                        if (!fileSrc.includes('firebasestorage.googleapis.com')) {
                            let newFile = await fetch(fileSrc).then(r => r.blob());
                            newFile = await compressImageSize(newFile, 0.4);
                            const portfolioImgRef = ref(storage, `projects/${projectId}/image-${new Date().valueOf()}.jpg`);
                            const portfolioImgSnap = await uploadBytes(portfolioImgRef, newFile);
                            newPortfolioImgURL = await getDownloadURL(portfolioImgSnap.ref);

                            const newSections = [...sections];
                            newSections[i].portfolios[j].images[k].src = newPortfolioImgURL;
                            setSections(newSections);
                        }
                    }
                }
            }

            if (sections[i].sectionId === "testimonial1") {
                for (let j = 0; j < sections[i].testimonials.length; j++) {
                    let newTestimonialImgURL = '';
                    const fileSrc = sections[i].testimonials[j].image;
                    if (!fileSrc.includes('firebasestorage.googleapis.com')) {
                        let newFile = await fetch(fileSrc).then(r => r.blob());
                        newFile = await compressImageSize(newFile, 0.4);
                        const testimonialImgRef = ref(storage, `projects/${projectId}/image-${new Date().valueOf()}.jpg`);
                        const testimonialImgSnap = await uploadBytes(testimonialImgRef, newFile);
                        newTestimonialImgURL = await getDownloadURL(testimonialImgSnap.ref);

                        const newSections = [...sections];
                        newSections[i].testimonials[j].image = newTestimonialImgURL;
                        setSections(newSections);
                    }
                }
            }
        }

        const newProject = {
            ...project,
            sections: sections
        }

        console.log(newProject)

        // Save new sections to database
        const response = await fetch(`/api/freelancer/update?projectId=${projectId}`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                project: newProject
            })
        })
        const data = await response.json();
        console.log(data);
        if (data.status === 200) {
            showMessageToast(data.message, true);
        } else {
            showMessageToast(data.message, false);
        }
    }

    if (editMode) {
        return (
            <>
                {/* Section delete modal */}
                {activeSectionInd !== -1 ? <dialog id="delete_modal" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Delete Section!</h3>
                        <p className="py-4">Are you sure you want to delete this {sections[activeSectionInd].sectionType}?</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                <button className="btn mr-4 bg-blue-700 hover:bg-blue-900 duration-200 text-white" onClick={() => deleteSection(sections[activeSectionInd])}>Yes</button>
                                <button className="btn bg-red-700 hover:bg-red-900 duration-200 text-white">No</button>
                            </form>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog> : null}
                <div className="sm:hidden flex flex-col justify-center h-[80vh]">
                    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                        <div className="card-body">
                            <h2 className="card-title">Screen too small</h2>
                            <p>Your browser resolution is too small to use the site editor. Please use a larger device.</p>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:block">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <SectionsContext.Provider value={{sections, setSections, deleteSection, saveSite}}>
                            <EditModeContext.Provider value={{ editMode, setEditMode }}>
                                <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
                                    <ActiveContentContext.Provider value ={{ activeSectionInd, setActiveSectionInd }}>
                                        <main>
                                            <div className="bg-slate-100 w-screen min-h-screen h-full dark:bg-slate-700">
                                                <PreviewControlNav/>
                                                <LeftContentEditor/>
                                                <div className="mt-20">
                                                    {successMsg ? <SuccessToast message={successMsg}/>  : null}
                                                    {errorMsg ? <ErrorToast message={errorMsg}/>  : null}
                                                </div>
                                                <div className="ml-72 lg:ml-96 mt-20">
                                                    <Droppable droppableId="site-blocks">
                                                        {(provided) => (
                                                            <div ref={provided.innerRef} {...provided.droppableProps} className="h-fit pb-[400px]">
                                                                <Template0Site/>
                                                                {provided.placeholder}
                                                            </div>
                                                        )}
                                                    </Droppable>
                                                </div>
                                            </div>
                                        </main>
                                    </ActiveContentContext.Provider>
                                </ActiveTabContext.Provider>
                            </EditModeContext.Provider>
                        </SectionsContext.Provider>
                    </DragDropContext>
                </div>
            </>
        )
    }

    return (
        <SectionsContext.Provider value={{sections, setSections, deleteSection, saveSite}}>
            <EditModeContext.Provider value={{ editMode, setEditMode }}>
                <main>
                    <div className="bg-slate-100 w-screen min-h-screen h-full dark:bg-slate-700">
                        <PreviewControlNav editMode={editMode} setEditMode={setEditMode}/>
                        <div className="mt-20">
                            {successMsg ? <SuccessToast message={successMsg}/>  : null}
                            {errorMsg ? <ErrorToast message={errorMsg}/>  : null}
                            <Template0Site/>
                        </div>
                    </div>
                </main>
            </EditModeContext.Provider>
        </SectionsContext.Provider>
    )
}

function Template0Site() {
    const {sections, _setSections, _deleteSection, _saveSite} = useContext(SectionsContext);
    const {editMode, _setEditMode} = useContext(EditModeContext);

    if (editMode) {
        return (
            <div style={{zoom: "75%"}} className="w-full relative">
                {sections.map((section, sectionInd) => (
                    <Draggable key={section.id} draggableId={`site-block-${section.id}`} index={sectionInd}>
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                <EditableSection section={section} sectionInd={sectionInd}/>
                            </div>
                        )}
                    </Draggable>
                ))}
            </div>
        )
    }

    const isNavarUsed = sections.some(section => section.sectionType === "navbar");

    return (
        <div className={`w-full relative ${isNavarUsed ? "pt-16" : ""}`}>
            {sections.map(section => <Section key={section.id} section={section}/>)}
        </div>
    )
}