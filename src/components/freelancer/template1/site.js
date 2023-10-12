"use client";

// Next, React imports
import { createContext, useState, useContext } from "react"

// Local imports
import { getSectionInitialData } from "./helper";
import PreviewControlNav from "./PreviewControlNav";
import LeftContentEditor from "./LeftContentEditor";
import { Section, EditableSection } from "./Section";

// Third party imports
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { nanoid } from "nanoid";


export const SectionsContext = createContext();
export const EditModeContext = createContext();
export const ActiveTabContext = createContext();
export const ActiveContentContext = createContext();

export default function Template1({project}) {
    const [sections, setSections] = useState(project.sections);
    const [editMode, setEditMode] = useState(true);
    const [activeTab, setActiveTab] = useState("sections");
    const [activeSectionInd, setActiveSectionInd] = useState(-1);

    const onDragEnd = (result) => {
        if (!result.destination) return;

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

    if (editMode) {
        return (
            <>
                {/* Section delete modal */}
                {activeSectionInd !== -1 ? <dialog id="delete_modal" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Delete Section!</h3>
                        <p className="py-4">Are you sure you want to delete this {sections[activeSectionInd].sectionType} section?</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                <button className="btn mr-4 bg-blue-700 hover:bg-blue-900 duration-200 text-white" onClick={() => deleteSection(sections[activeSectionInd])}>Yes</button>
                                <button className="btn mr-[-50px] bg-red-700 hover:bg-red-900 duration-200 text-white">No</button>
                            </form>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </div>
                    </div>
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
                        <SectionsContext.Provider value={{sections, setSections, deleteSection}}>
                            <EditModeContext.Provider value={{ editMode, setEditMode }}>
                                <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
                                    <ActiveContentContext.Provider value={{ activeSectionInd, setActiveSectionInd }}>
                                        <main>
                                            <div className="bg-slate-100 w-screen min-h-screen h-full dark:bg-slate-700">
                                                <PreviewControlNav/>
                                                <LeftContentEditor/>
                                                <div className="ml-72 lg:ml-96 mt-20">
                                                    <Droppable droppableId="site-blocks">
                                                        {(provided) => (
                                                            <div ref={provided.innerRef} {...provided.droppableProps} className="h-fit pb-[400px]">
                                                                <Template1Site/>
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
        <SectionsContext.Provider value={{sections, setSections, deleteSection}}>
            <EditModeContext.Provider value={{ editMode, setEditMode }}>
                <main>
                    <div className="bg-slate-100 w-screen min-h-screen h-full dark:bg-slate-700">
                        <PreviewControlNav editMode={editMode} setEditMode={setEditMode}/>
                        <div className="mt-20">
                            <Template1Site/>
                        </div>
                    </div>
                </main>
            </EditModeContext.Provider>
        </SectionsContext.Provider>
    )
}

function Template1Site() {
    const {sections, _setSections, _deleteSection} = useContext(SectionsContext);
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

    return (
        <div className="w-full relative">
            {sections.map(section => <Section key={section.id} section={section}/>)}
        </div>
    )
}