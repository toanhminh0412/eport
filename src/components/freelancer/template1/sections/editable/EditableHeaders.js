// Next imports
import Link from "next/link";
import { useContext } from "react";

// Local imports
import { ActiveTabContext, ActiveContentContext, SectionsContext } from "../../site";
import { btnColorOptions } from "@/data/colorOptions";
import { convertToURL } from "@/helpers/helpers";


export function EditableHeader1({ section, sectionInd }) {
    const { _activeTab, setActiveTab } = useContext(ActiveTabContext);
    const { activeSectionInd, setActiveSectionInd } = useContext(ActiveContentContext);
    const { _sections, _setSections, deleteSection } = useContext(SectionsContext);

    const openContentTabEditor = () => {
        setActiveTab("content");
        setActiveSectionInd(sectionInd);
    }

    return (
        <div className="group relative">
            <button className="btn bg-blue-700 border-none z-40 absolute hover:bg-blue-900 top-[-35px] right-0 mr-7 hidden group-hover:block" onClick={()=>document.getElementById('delete_modal_header1').showModal()}><i className="fa-solid fa-trash text-lg text-white"></i></button>
            <dialog id="delete_modal_header1" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete Section!</h3>
                    <p className="py-4">Are you sure you want to delete this {section.sectionType} section?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn mr-4 bg-blue-700 hover:bg-blue-900 duration-200 text-white" onClick={() => deleteSection(section)}>Yes</button>
                            <button className="btn mr-[-50px] bg-red-700 hover:bg-red-900 duration-200 text-white">No</button>
                        </form>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <section style={{backgroundImage: `url(${section.backgroundImage})`}} className={`w-full min-w-[450px] aspect-video flex flex-row bg-black bg-cover box-border border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
                <div style={{backgroundImage: `url(${section.avatar})`}} className={`w-5/12 h-full brightness-75 bg-cover`}></div>
                <div className="w-7/12 prose max-w-none p-0 flex flex-col justify-center">
                    <div className="w-11/12 md:w-10/12 mx-auto">
                        <h3 className="text-md lg:text-xl mt-0 lg:mt-12">{section.heading}</h3>
                        <h1 className="text-xl lg:text-3xl xl:text-4xl">{section.slogan}</h1>
                        <div>
                            {section.actionBtns.map(actionBtn => <Link key={actionBtn.id} href={convertToURL(actionBtn.href)} className={`btn ${btnColorOptions[actionBtn.color]} mr-2`}>{actionBtn.text}</Link>)}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}