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

export default function Template1({project}) {
    const [sections, setSections] = useState(project.sections);

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

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <SectionsContext.Provider value={{sections, setSections}}>
                <main>
                    <div className="bg-slate-100 w-screen min-h-screen h-full dark:bg-slate-700">
                        <PreviewControlNav/>
                        <LeftContentEditor/>
                        <div className="ml-96 mt-20">
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
            </SectionsContext.Provider>
        </DragDropContext>
    )
}

function Template1Site() {
    const {sections, _} = useContext(SectionsContext);

    return (
        <main className="w-full relative">
            {sections.map((section, sectionInd) => (
                <Draggable key={section.id} draggableId={`site-block-${section.id}`} index={sectionInd}>
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <Section section={section}/>
                        </div>
                    )}
                </Draggable>
            ))}
        </main>
    )
}