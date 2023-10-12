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
export const DeleteSectionContext = createContext();
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
                        <SectionsContext.Provider value={{sections, setSections}}>
                            <EditModeContext.Provider value={{ editMode, setEditMode }}>
                                <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
                                    <DeleteSectionContext.Provider value={{deleteSection}}>
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
                                    </DeleteSectionContext.Provider>
                                </ActiveTabContext.Provider>
                            </EditModeContext.Provider>
                        </SectionsContext.Provider>
                    </DragDropContext>
                </div>
            </>
        )
    }

    return (
        <SectionsContext.Provider value={{sections, setSections}}>
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
    const {sections, setSections} = useContext(SectionsContext);
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