"use client";

// Next, React imports
import { createContext, useState, useContext, useEffect } from "react"

// Local imports
import { getSectionInitialData } from "./helper";
import PreviewControlNav from "./PreviewControlNav";
import LeftContentEditor from "./LeftContentEditor";
import { Section, EditableSection } from "./Section";
import { SuccessToast, ErrorToast } from "@/components/ui/MessageToast";
import PublishModal from "@/components/ui/PublishModal";
import { compressImageSize } from "@/helpers/files";
import { storage } from "../../../../public/libs/firebase";

// Third party imports
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { nanoid } from "nanoid";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";


export const SectionsContext = createContext();
export const EditModeContext = createContext();
export const ActiveTabContext = createContext();
export const ActiveContentContext = createContext();
export const ProjectContext = createContext();

export default function Template0({project, projectId}) {
    const [projectTemplate0, setProjectTemplate0] = useState(project);
    const [sections, setSections] = useState(project.sections ? project.sections : []);
    const [editMode, setEditMode] = useState(true);
    const [activeTab, setActiveTab] = useState("sections");
    const [activeSectionInd, setActiveSectionInd] = useState(-1);
    const [successMsg, setSuccessMsg] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [isEqual, setIsEqual] = useState(false);
    const [message, setMessage] = useState('Click "Publish" to publish your site!');
    const [msgLoading, setMsgLoading] = useState(false);
    const [publishedSite, setPublishedSite] = useState(null);

    const onDragEnd = (result) => {
        if (!result.destination) return;

        console.log(result);

        if (result.draggableId.includes("site-block")) {
            // Can't move navbar section
            if ((result.source.index === 0 || result.destination.index === 0) && sections[0].sectionType === "navbar") return;
            const reorderedSections = Array.from(sections);
            const [reorderedSection] = reorderedSections.splice(result.source.index, 1);
            reorderedSections.splice(result.destination.index, 0, reorderedSection);

            setSections(reorderedSections);
        } else if (result.draggableId.includes("build-block")) {
            const sectionId = result.draggableId.split("-")[2];
            const section = getSectionInitialData(sectionId);
            let reorderedSections = Array.from(sections);
            // Can't move navbar section
            if (section.sectionType === "navbar") {
                const isNavbarUsed = sections.some(section => section.sectionType === "navbar");
                if (!isNavbarUsed) {
                    reorderedSections.splice(0, 0, {...section, id: nanoid()});
                }
            } else {
                reorderedSections.splice(result.destination.index, 0, {...section, id: nanoid()});
            }
            setSections(reorderedSections);
        }
        
    }

    const deleteSection = (section) =>  {
        const deleletedSectionId = section.id;
        const newSections = sections.filter((section) => section.id !== deleletedSectionId);
        setActiveSectionInd(-1);
        setSections(newSections);
    }

    // Show a message on project edit page for 5 seconds after taking an action
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

    // Compare current project and published project
    useEffect(() => {
        async function compareSites() {
            setMsgLoading(true);
            const response = await fetch(`/api/freelancer/compare?projectId=${projectId}`);
            const data = await response.json();
            
            if (data.status === 200 && data.isEqual === false) {
                setIsEqual(data.isEqual);
                setMessage('Your published site is not up-to-date!');
                setMsgLoading(false)
            } else if (data.status === 200 && data.isEqual === true) {
                setIsEqual(data.isEqual);
                setMessage('Your published site is up-to-date!');
                setMsgLoading(false);
            } else if (data.status === 404) {
                setIsEqual(data.isEqual);
                setMessage('Click "Publish" to publish your site!');
                setMsgLoading(false);
            }
            setPublishedSite(data.publishedProject);
        }

        compareSites();
    }, [projectTemplate0]);

    // Set message when publish site
    const setPublishMessage = () => {
        setIsEqual(true);
        setMessage('Your published site is up-to-date');
    }

    // Save site to database
    const saveSite = async() => {
        for (let i = 0; i < sections.length; i++) {
            // Upload navbar logo
            if (sections[i].sectionType === "navbar") {
                let newLogoURL = '';
                const fileSrc = sections[i].logo
                if (!fileSrc.includes('firebasestorage.googleapis.com')) {
                    let newFile = await fetch(fileSrc).then(r => r.blob());
                    newFile = await compressImageSize(newFile, 0.4);
                    const logoRef = ref(storage, `projects/${projectId}/image-${new Date().valueOf()}.jpg`);
                    const logoSnap = await uploadBytes(logoRef, newFile);
                    newLogoURL = await getDownloadURL(logoSnap.ref);

                    const newSections = [...sections];
                    newSections[i].logo = newLogoURL;
                    setSections(newSections);
                }
            }

            // Upload header1 and aboutme1 avatar
            if (sections[i].sectionType === "header") {
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
            if (sections[i].sectionType === "header") {
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

            if (sections[i].sectionType === "aboutme") {
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

            if (sections[i].sectionType === "portfolio") {
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
        }

        const newProject = {
            ...project,
            sections: sections,
            lastEdited: new Date()
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
            setProjectTemplate0(newProject);
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
                <div className="md:hidden flex flex-col justify-center h-[80vh]">
                    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                        <div className="card-body">
                            <h2 className="card-title">Screen too small</h2>
                            <p>Your browser resolution is too small to use the site editor. Please use a larger device.</p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <SectionsContext.Provider value={{sections, setSections, deleteSection, saveSite}}>
                            <EditModeContext.Provider value={{ editMode, setEditMode, isEqual, message, msgLoading }}>
                                <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
                                    <ActiveContentContext.Provider value ={{ activeSectionInd, setActiveSectionInd }}>
                                        <ProjectContext.Provider value={setProjectTemplate0}>
                                            <main>
                                                <div className="bg-slate-100 w-screen min-h-screen h-full dark:bg-slate-700">
                                                    <PreviewControlNav projectDomain={projectTemplate0.domain} type='freelancer'/>
                                                    <LeftContentEditor/>
                                                    <PublishModal
                                                        site={projectTemplate0}
                                                        projectId={projectId}
                                                        showMessageToast={showMessageToast}
                                                        setPublishMessage={setPublishMessage}
                                                        publishedSite={publishedSite}
                                                        projectType="freelancer"/>
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
                                                                    <div className="text-center py-10">
                                                                        <button className="btn btn-sm bg-blue-700 border-none hover:bg-blue-900 text-white text-xs" onClick={() => setActiveTab("sections")}>Add Sections</button>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Droppable>
                                                    </div>
                                                </div>
                                            </main>
                                        </ProjectContext.Provider>
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
            <EditModeContext.Provider value={{ editMode, setEditMode, isEqual, message, msgLoading }}>
                <ProjectContext.Provider value={setProjectTemplate0}>
                    <main>
                        <div className="bg-slate-100 w-screen min-h-screen h-full dark:bg-slate-700">
                            <PreviewControlNav projectDomain={projectTemplate0.domain} type='freelancer'/>
                            <PublishModal
                                site={projectTemplate0}
                                projectId={projectId}
                                showMessageToast={showMessageToast}
                                setPublishMessage={setPublishMessage}
                                publishedSite={publishedSite}
                                projectType="freelancer"/>
                            <div className="mt-20">
                                {successMsg ? <SuccessToast message={successMsg}/>  : null}
                                {errorMsg ? <ErrorToast message={errorMsg}/>  : null}
                                <Template0Site/>
                            </div>
                        </div>
                    </main>
                </ProjectContext.Provider>
            </EditModeContext.Provider>
        </SectionsContext.Provider>
    )
}

function Template0Site() {
    const {sections, _setSections, _deleteSection, _saveSite} = useContext(SectionsContext);
    const {editMode, _setEditMode, _isEqual, _message, _msgLoading} = useContext(EditModeContext);

    if (editMode) {
        return (
            <div className="w-full relative">
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

    const isNavbarUsed = sections.some(section => section.sectionType === "navbar");

    return (
        <div className={`w-full relative ${isNavbarUsed ? "pt-[72px]" : ""}`}>
            {sections.map(section => <div key={section.id} style={section.sectionType !== "navbar" ? {zoom: "75%"} : {}}><Section section={section}/></div>)}
        </div>
    )
}