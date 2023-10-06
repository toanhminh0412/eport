"use client";

// Next, React imports
import { createContext, useState, useContext } from "react"

// Local imports
import { getSectionInitialData } from "./helper";
import PreviewControlNav from "@/components/layout/PreviewControlNav"
import LeftContentEditor from "./LeftContentEditor"
import Section from "./Section";

// Third party imports
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { nanoid } from "nanoid";


export const SectionsContext = createContext();
export const EditModeContext = createContext();

export default function Template1({project}) {
    const [sections, setSections] = useState(project.sections);
    const [editMode, setEditMode] = useState(true);

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

    if (editMode) {
        return (
            <DragDropContext onDragEnd={onDragEnd}>
                <SectionsContext.Provider value={{sections, setSections}}>
                    <EditModeContext.Provider value={{ editMode, setEditMode }}>
                        <main>
                            <div className="bg-slate-100 w-screen min-h-screen h-full dark:bg-slate-700">
                                <PreviewControlNav/>
                                <LeftContentEditor/>
                                <div className="ml-72 lg:ml-96 mt-20">
                                    <Droppable droppableId="site-blocks">
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                                <Template1Site/>
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </div>
                            </div>
                        </main>
                    </EditModeContext.Provider>
                </SectionsContext.Provider>
            </DragDropContext>
        )
    }

    return (
        <SectionsContext.Provider value={{sections, setSections}}>
            <EditModeContext.Provider value={{ editMode, setEditMode }}>
                <main>
                    <div className="bg-slate-100 w-screen min-h-screen h-full dark:bg-slate-700">
                        <PreviewControlNav/>
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
    const {sections, _setSections} = useContext(SectionsContext);
    const {editMode, _setEditMode} = useContext(EditModeContext);

    if (editMode) {
        return (
            <div className="w-full relative">
                {sections.map((section, sectionInd) => (
                    <Draggable key={section.id} draggableId={`site-block-${section.id}`} index={sectionInd}>
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                <Section section={section}/>
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