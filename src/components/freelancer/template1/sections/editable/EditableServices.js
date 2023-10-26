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
        <div className="group relative" style={{zoom: "60%"}}>
            <button className="btn bg-blue-700 border-none z-40 absolute hover:bg-blue-900 top-[-35px] right-0 mr-7 hidden group-hover:block" onClick={()=>document.getElementById(`delete_modal_${section.id}`).showModal()}><i className="fa-solid fa-trash text-lg text-white"></i></button>
            <dialog id={`delete_modal_${section.id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete Section!</h3>
                    <p className="py-4">Are you sure you want to delete this {section.sectionType} section?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn mr-4 bg-blue-700 hover:bg-blue-900 duration-200 text-white" onClick={() => deleteSection(section)}>Yes</button>
                            <button className="btn bg-red-700 hover:bg-red-900 duration-200 text-white">No</button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <section className={`prose max-w-none bg-white py-16 px-8 text-center box-border border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
                <h1 className="mb-4">{section.heading}</h1>
                <h4 className="mt-0 mb-8">{section.tagline}</h4>
                <div className="flex flex-row flex-wrap gap-4 justify-center">
                    {section.services.map(service => (
                    <div key={service.id} className={`card w-96 bg-base-100 shadow-xl border ${service.recommended ? "border-orange-500" : "border-slate-200"}`}>
                        {service.recommended ? <h4 className="text-orange-500 absolute top-2 inset-x-0 mx-auto"><i className="fa-solid fa-star mr-2"></i>Recommended</h4> : null}
                        <div className="card-body">
                            <h4 className="card-title w-fit mx-auto">{service.name}</h4>
                            <h1 className="my-4">{service.price}</h1>
                            {service.actionBtn.isExternal ? <Link href={service.actionBtn.externalHref ? convertToURL(service.actionBtn.externalHref) : "#"} className={`btn btn-lg btn-wide mx-auto ${btnColorOptions[service.actionBtn.color]}`} target="_blank">{service.actionBtn.text}</Link> : <Link href={service.actionBtn.internalHref ? service.actionBtn.internalHref : "#"} className={`btn btn-lg btn-wide mx-auto ${btnColorOptions[service.actionBtn.color]}`} scroll={false}>{service.actionBtn.text}</Link>}
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

export function EditableService2({ section, sectionInd }) {
    const { _activeTab, setActiveTab } = useContext(ActiveTabContext);
    const { activeSectionInd, setActiveSectionInd } = useContext(ActiveContentContext);
    const { _sections, _setSections, deleteSection } = useContext(SectionsContext);

    const openContentTabEditor = () => {
        setActiveTab("content");
        setActiveSectionInd(sectionInd);
    }

    return (
        <div className="group relative" style={{zoom: "60%"}}>
            <button className="btn bg-blue-700 border-none z-40 absolute hover:bg-blue-900 top-[-35px] right-0 mr-7 hidden group-hover:block" onClick={()=>document.getElementById(`delete_modal_${section.id}`).showModal()}><i className="fa-solid fa-trash text-lg text-white"></i></button>
            <dialog id={`delete_modal_${section.id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete Section!</h3>
                    <p className="py-4">Are you sure you want to delete this {section.sectionType} section?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn mr-4 bg-blue-700 hover:bg-blue-900 duration-200 text-white" onClick={() => deleteSection(section)}>Yes</button>
                            <button className="btn bg-red-700 hover:bg-red-900 duration-200 text-white">No</button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <section className={`prose max-w-none bg-white py-4 px-8 text-center box-border border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
                {/* Pricing Container */}
                <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10">
                    {/* Pricing Title  */}
                    <h2 className="text-center text-3xl font-bold md:text-5xl">{section.heading}</h2>
                    <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-[#636262] md:mb-12 lg:mb-16">{section.tagline}</p>
                    {/* Pricing Content  */}
                    <ul className="flex flex-row flex-wrap justify-center w-full gap-8">
                        {section.services.map(service => (
                        <li key={service.id} className={`flex min-w-[300px] md:min-w-[400px] max-w-md flex-col items-start justify-self-center border border-solid border-[#dfdfdf] p-8 ${service.recommended ? "bg-slate-200" : ""}`}>
                            <div className={`mb-4 rounded-md ${service.recommended ? "bg-blue-300" : "bg-[#f2f2f7]"} px-8 py-4 not-prose mx-auto`}>
                                <h2 className="text-lg font-bold">{service.name}</h2>
                            </div>
                            <h2 className="mt-4 text-5xl mx-auto">{service.price}</h2>
                            {service.actionBtn.isExternal ? 
                            <Link href={service.actionBtn.externalHref ? convertToURL(service.actionBtn.externalHref) : "#"} target="_blank" className={`${btnColorOptions[service.actionBtn.color]} no-underline text-lg mb-5 flex w-10/12 mx-auto grid-cols-2 flex-row items-center justify-center border-2 border-solid border-black px-8 py-4 text-center font-semibold text-black transition [box-shadow:rgb(0,_0,_0)_-8px_8px] hover:[box-shadow:rgb(0,_0,_0)_0px_0px] md:mb-6 lg:mb-8`}>
                                <div className="mr-6 font-bold whitespace-nowrap">Get Started</div>
                                <div className="h-4 w-4">
                                    <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                                    <title>Arrow Right</title>
                                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                                    </svg>
                                </div>
                            </Link>
                            :
                            <Link href={service.actionBtn.internalHref ? service.actionBtn.internalHref : "#"} className={`${btnColorOptions[service.actionBtn.color]} no-underline text-lg mb-5 flex w-10/12 mx-auto grid-cols-2 flex-row items-center justify-center border-2 border-solid border-black px-8 py-4 text-center font-semibold text-black transition [box-shadow:rgb(0,_0,_0)_-8px_8px] hover:[box-shadow:rgb(0,_0,_0)_0px_0px] md:mb-6 lg:mb-8`}>
                                <div className="mr-6 font-bold whitespace-nowrap">Get Started</div>
                                <div className="h-4 w-4">
                                    <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                                    <title>Arrow Right</title>
                                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                                    </svg>
                                </div>
                            </Link>}
                            <ul className="text-left list-none mt-2">
                                {service.pros.map(pro => (
                                <li key={pro.id}><i className="fa-solid fa-check text-green-500 text-xl mr-2"></i>{pro.text}</li>
                                ))}
                                {service.cons.map(con => (
                                <li key={con.id}><i className="fa-solid fa-xmark text-red-500 text-xl mr-2"></i>{con.text}</li>
                                ))}
                            </ul>
                        </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}