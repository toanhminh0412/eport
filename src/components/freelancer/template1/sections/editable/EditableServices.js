// Next, React imports
import Link from "next/link"
import { useContext } from "react";

// Local imports
import { ActiveTabContext, ActiveContentContext, SectionsContext } from "../../site";
import { convertToURL } from "@/helpers/helpers";
import { btnColorOptions } from "@/data/colorOptions";

export function EditableService1({ section, sectionInd }) {
    const { _activeTab, setActiveTab } = useContext(ActiveTabContext);
    const { activeSectionInd, setActiveSectionInd } = useContext(ActiveContentContext);
    const { _sections, _setSections, deleteSection } = useContext(SectionsContext);

    const openContentTabEditor = () => {
        setActiveTab("content");
        setActiveSectionInd(sectionInd);
    }

    return (
        <div className="group relative">
            <button className="btn bg-blue-700 border-none z-40 absolute hover:bg-blue-900 top-[-35px] right-0 mr-7 hidden group-hover:block" onClick={()=>document.getElementById('delete_modal_service1').showModal()}><i className="fa-solid fa-trash text-lg text-white"></i></button>
            <dialog id="delete_modal_service1" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete Section!</h3>
                    <p className="py-4">Are you sure you want to delete this {section.sectionType} section?</p>
                    <div className="modal-action">
                        <form method="dialog">
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
            <section className={`prose max-w-none bg-white py-16 px-8 text-center box-border border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
                <h1 className="mb-4">{section.heading}</h1>
                <h4 className="mt-0 mb-8">{section.tagline}</h4>
                <div className="flex flex-row flex-wrap gap-4 justify-center">
                    {section.services.map(service => (
                    <div key={service.id} className="card w-96 bg-base-100 shadow-xl border border-slate-200">
                        <div className="card-body">
                            <h4 className="card-title w-fit mx-auto">{service.name}</h4>
                            <h1 className="my-4">{service.price}</h1>
                            <Link href={convertToURL(service.actionBtn.href)} className={`btn btn-lg btn-wide mx-auto ${btnColorOptions[service.actionBtn.color]}`}>{service.actionBtn.text}</Link>
                            <ul className="text-left list-none mt-2">
                                {service.pros.map(pro => (
                                <li key={pro.id}><i className="fa-solid fa-check text-green-500 text-xl mr-2"></i>{pro.text}</li>
                                ))}
                                {service.cons.map(con => (
                                <li key={con.id}><i className="fa-solid fa-xmark text-red-500 text-xl mr-2"></i>{con.text}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </div>
    )
}