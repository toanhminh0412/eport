'use client';
import { useState } from "react";

export default function AboutMeTabsShowcase({section}) {
    const [activeTabAboutMe, setActiveTabAboutMe] = useState(0);
    return (
        <div>
            <div className="tabs mt-7">
                {section.tabs.map((tab, tabInd) => (
                    <div key={tab.id} className={`tab tab-bordered text-sm sm:text-lg lg:text-xl mr-10 mb-6 font-bold no-underline text-orange-500 ${activeTabAboutMe === tabInd ? "tab-active" : ""}`} onClick={() => setActiveTabAboutMe(tabInd)}>{tab.tabHeading}</div> 
                ))}
            </div>
            
            {section.tabs.map((tab, tabInd) => 
                <div key={tab.id} className={`${activeTabAboutMe !== tabInd ? "hidden" : ""}`}>
                    <ul>
                        {tab.tabContent.map(tabContent => <li key={tabContent.id} className="my-4 text-sm sm:text-xl"><span className="text-orange-500">{tabContent.key}: </span>{tabContent.value}</li>)}
                    </ul>
                </div>
            )}
        </div>
    )
}