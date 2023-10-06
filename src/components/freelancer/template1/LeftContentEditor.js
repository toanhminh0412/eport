"use client";

// Next, React imports
import { useState, useContext } from "react";
import Image from "next/image";

// Local imports
import sectionsData from "./sectionsData";
import { SectionsContext } from "./site";

// Third party imports
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { nanoid } from "nanoid";

export default function LeftContentEditor() {
    const [activeTab, setActiveTab] = useState("sections");

    return (
        <div className="fixed z-40 top-36 left-0 bg-neutral w-96 min-h-screen border-t border-gray-600">
            <div>
                <div className="prose border-b border-gray-600 p-2 m-0">
                    <h3 className="text-white m-0">Content Editor</h3>
                </div>
                <ul className="tabs border-b border-gray-600 p-2">
                    <li className={`tab hover:font-bold duration-200 ${activeTab === "sections" ? "font-semibold text-white" : "text-slate-300"}`} onClick={() => setActiveTab("sections")}>Sections</li> 
                    <li className={`tab hover:font-bold duration-200 ${activeTab === "content" ? "font-semibold text-white" : "text-slate-300"}`} onClick={() => setActiveTab("content")}>Content</li> 
                </ul>
                <SectionsTab/>
            </div>
        </div>
    )
}

function SectionsTab() {
    const { sections, setSections } = useContext(SectionsContext);

    return (
        // <DragDropContext onDragEnd={() => console.log('Drag from sections edit bar')}>
            <div>
                {Object.entries(sectionsData).map(([sectionName, sectionList]) => (
                    <div key={sectionName} className="collapse collapse-arrow bg-slate-950 text-white rounded-sm border-b border-gray-600">
                        <input type="checkbox" name="section-accordion" /> 
                        <div className="collapse-title text-md font-medium">
                            {sectionName}
                        </div>
                        
                        <div className="collapse-content">
                            <Droppable droppableId="build-blocks">
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.droppableProps}>
                                        {sectionList.map((section, sectionInd) => {console.log(sectionInd); return (
                                            <Draggable key={`build-block-${section.sectionId}`} draggableId={`build-block-${section.sectionId}`} index={sectionInd}>
                                                {(provided) => (
                                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        <div key={section.sectionId} onClick={() => setSections([...sections, {...section, id:nanoid()}])}>
                                                            <Image 
                                                                width={200} 
                                                                height={150} 
                                                                src={section.thumbnail}
                                                                alt={section.description}
                                                                className="w-full h-auto border-2 border-black hover:border-white"/>
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        )})}
                                        {provided.placeholder}
                                    </div>
                                )}    
                            </Droppable>
                        </div>
                    </div>
                ))}
            </div>
        // </DragDropContext>
    )
}