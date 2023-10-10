// Next imports
import Link from "next/link";
import { useContext } from "react";

// Local imports
import { ActiveTabContext, ActiveContentContext } from "../../site";
import { btnColorOptions } from "@/data/colorOptions";


export function EditableHeader1({ section, sectionInd }) {
    const { _activeTab, setActiveTab } = useContext(ActiveTabContext);
    const { activeSectionInd, setActiveSectionInd } = useContext(ActiveContentContext);

    const openContentTabEditor = () => {
        setActiveTab("content");
        setActiveSectionInd(sectionInd);
    }

    return (
        <section style={{backgroundImage: `url(${section.backgroundImage})`}} className={`w-full min-w-[450px] aspect-video flex flex-row bg-black bg-cover box-border border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
            <div style={{backgroundImage: `url(${section.avatar})`}} className={`w-5/12 h-full brightness-75 bg-cover`}></div>
            <div className="w-7/12 prose max-w-none p-0 flex flex-col justify-center">
                <div className="w-11/12 md:w-10/12 mx-auto">
                    <h3 className="text-md lg:text-xl mt-0 lg:mt-12">{section.heading}</h3>
                    <h1 className="text-xl lg:text-3xl xl:text-4xl">{section.slogan}</h1>
                    <div>
                        {section.actionBtns.map(actionBtn => <Link key={actionBtn.id} href={actionBtn.href} className={`btn ${btnColorOptions[actionBtn.color]} mr-2`}>{actionBtn.text}</Link>)}
                    </div>
                </div>
            </div>
        </section>
    )
}