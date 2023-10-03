"use client";

// React, Next imports
import { useState } from "react";
import Image from "next/image";

export default function TemplateSelector() {
    const [activeTab, setActiveTab] = useState(0);

    // Create a new project with selected template
    const createNewProject = async (type, templateId) => {
        const response = await fetch(`/api/${type}/create?templateId=${templateId}`);
        const data = await response.json();
        console.log(data);
        if (data.status === 201) {
            window.location.href = `/dashboard/${type}?projectId=${data.projectId}`;
        } else {
            alert("Failed to create a new project. Please try again.");
        }
    }

    return (
        <div>
            <div className="tabs w-fit mx-auto">
                <div className={`tab tab-bordered ${activeTab === 0 ? "tab-active" : ""}`} onClick={() => setActiveTab(0)}>Freelancer</div> 
                <div className={`tab tab-bordered ${activeTab === 1 ? "tab-active" : ""}`} onClick={() => setActiveTab(1)}>E-resume</div> 
            </div>

            {/* Freelancer templates */}
            <div className={`flex flex-row flex-wrap gap-6 justify-center mt-8 ${activeTab !== 0 ? "hidden" : ""}`}>
                <div className="relative w-96 aspect-video">
                    {/* Template overlay */}
                    <div className="absolute w-full h-full top-0 left-0 rounded-lg bg-transparent opacity-0 hover:opacity-100 duration-200 z-10">
                        <div className="w-full h-full top-0 left-0 rounded-lg bg-black opacity-50 duration-200"></div>
                        <button className="absolute inset-0 mx-auto my-auto btn border-none w-fit bg-blue-500 hover:bg-blue-700 duration-200 text-white">Start project</button>
                    </div>
                    
                    {/* Template image */}
                    <Image src="/img/freelancer-template1.png" 
                        fill 
                        className="rounded-lg"
                        alt="Freelancer template 1"/>
                </div>
            </div>

            {/* E-resume templates */}
            <div className={`flex flex-row flex-wrap gap-6 justify-center mt-8 ${activeTab !== 1 ? "hidden" : ""}`}>
                {/* type = "eresume", templateId = 0 */}
                <div className="relative w-96 aspect-video">
                    {/* Template overlay */}
                    <div className="absolute w-full h-full top-0 left-0 rounded-lg bg-transparent opacity-0 hover:opacity-100 duration-200 z-10">
                        <div className="w-full h-full top-0 left-0 rounded-lg bg-black opacity-50 duration-200"></div>
                        <button 
                            className="absolute inset-0 mx-auto my-auto btn border-none w-fit bg-blue-500 hover:bg-blue-700 duration-200 text-white"
                            onClick={() => createNewProject("eresume", 0)}
                            >Start project</button>
                    </div>
                    
                    {/* Template image */}
                    <Image src="/img/eresume-template0.png" 
                        fill 
                        className="rounded-lg"
                        alt="E-resume template 1"/>
                </div>
            </div>            
        </div>
    )
}