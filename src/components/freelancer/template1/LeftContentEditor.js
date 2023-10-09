"use client";

// Next, React imports
import { useState, useContext } from "react";
import Image from "next/image";

// Local imports
import sectionsData from "./sectionsData";
import { SectionsContext, ActiveTabContext } from "./site";
import { getSectionInitialData } from "./helper";

// Third party imports
import { Droppable, Draggable } from "@hello-pangea/dnd";
import { nanoid } from "nanoid";

export default function LeftContentEditor() {
    const { activeTab, setActiveTab } = useContext(ActiveTabContext);

    return (
        <div className="fixed z-40 top-36 bottom-0 left-0 bg-white w-72 lg:w-96 border-t border-r border-gray-600 overflow-y-scroll">
            <div>
                <div className="prose border-b border-gray-600 p-4 m-0">
                    <h3 className="text-neutral m-0">Content Editor</h3>
                </div>
                <ul className="tabs border-b border-gray-600 p-2">
                    <li className={`tab hover:font-bold duration-200 ${activeTab === "sections" ? "font-semibold text-neutral" : "text-slate-700"}`} onClick={() => setActiveTab("sections")}>Sections</li> 
                    <li className={`tab hover:font-bold duration-200 ${activeTab === "content" ? "font-semibold text-neutral" : "text-slate-700"}`} onClick={() => setActiveTab("content")}>Content</li> 
                </ul>
                {activeTab === "sections" ? <SectionsTab/> : <ContentTab/>}
            </div>
        </div>
    )
}

function SectionsTab() {
    const { sections, setSections } = useContext(SectionsContext);

    return (
        <div>
            {Object.entries(sectionsData).map(([sectionName, sectionList]) => (
                <div key={sectionName} className="collapse collapse-arrow bg-slate-100 text-neutral rounded-sm border-b border-gray-600">
                    <input type="checkbox" name="section-accordion" /> 
                    <div className="collapse-title text-md font-medium">
                        {sectionName}
                    </div>
                    
                    <div className="collapse-content">
                        <Droppable droppableId="build-blocks">
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    {sectionList.map((section, sectionInd) => (
                                        <Draggable key={`build-block-${section.sectionId}`} draggableId={`build-block-${section.sectionId}`} index={sectionInd}>
                                            {(provided) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <div key={section.sectionId} onClick={() => setSections([...sections, {...getSectionInitialData(section.sectionId), id:nanoid()}])}>
                                                        <Image 
                                                            width={200} 
                                                            height={150} 
                                                            src={section.thumbnail}
                                                            alt={section.description}
                                                            className="w-full h-auto border-2 border-slate-500 hover:border-black"/>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}    
                        </Droppable>
                    </div>
                </div>
            ))}
        </div>
    )
}

function ContentTab() {
    return (
        <div>
            <h1>Content tab</h1>
        </div>
    )
}