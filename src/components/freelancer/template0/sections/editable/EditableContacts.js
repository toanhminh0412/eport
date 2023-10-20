// Next imports
import Link from "next/link"
import { useContext } from "react"

// Local imports
import { socialIcons, socialIconsStyle } from "@/data/social-icons"
import { ActiveContentContext, ActiveTabContext, SectionsContext } from "../../site"
import { btnColorOptions } from "@/data/colorOptions"
import { convertToURL } from "@/helpers/helpers"

export function EditableContact1({ section, sectionInd }) {
    const {_activeTab, setActiveTab } = useContext(ActiveTabContext);
    const { activeSectionInd, setActiveSectionInd } = useContext(ActiveContentContext);
    const { _sections, _setSections, deleteSection, _saveSite } = useContext(SectionsContext);

    const openContentTabEditor = () => {
        setActiveTab("content");
        setActiveSectionInd(sectionInd);
    }

    return ( 
        <section className="group">
            <button className="btn z-40 bg-blue-700 border-none hover:bg-blue-900 mt-[-30px] absolute right-0 mr-7 hidden group-hover:block" onClick={()=>document.getElementById(`delete_modal_${section.id}`).showModal()}><i className="fa-solid fa-trash text-lg text-white p-0"></i></button>
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
            <div className={`prose max-w-none px-5 md:px-10 border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} group-hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
                <div className="mx-auto w-full max-w-[1400px]">
                    <div className="py-16 md:py-24 lg:py-32">
                        <div className="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
                            <div className="flex flex-col items-start max-[991px]:max-w-[720px]">
                                <h2 className="font-bold mb-2 text-3xl md:text-5xl">{section.slogan}</h2>
                                <div className="ml-0 mr-0 mt-4 max-w-[528px] pb-4 mb-5 md:mb-6 lg:mb-8">
                                    {section.contactInfo.map(contact =>
                                        <div key={contact.id} className="text-lg sm:text-2xl mt-5"><i className={`${contact.icon} text-orange-500 mr-3`}></i>{contact.content}</div>
                                    )}
                                    <div className="mt-10">
                                        {section.socials.map(socialBtn => <Link key={socialBtn.id} href={convertToURL(socialBtn.href)} target="_blank" className={`${socialIconsStyle[socialBtn.social]} inline-flex justify-center items-center w-12 h-12 md:w-16 md:h-16 bg-transparent rounded-full border-2 border-solid mr-6 mb-6 md:mb-12 ml-0 text-2xl md:text-4xl no-underline`}><i className={`${socialIcons[socialBtn.social]}`}></i></Link>)}
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto min-w-[450px] max-w-[608px] bg-slate-200 px-8 max-[991px]:ml-0 max-[991px]:mr-0 pt-[2em] pb-8">
                                <div className="text-center">
                                    <h1 className="font-bold text-3xl md:text-5xl">Contact <span className="text-orange-500">Us</span></h1>
                                    <div className="mx-auto mt-4 max-w-[480px] mb-5 md:mb-6 lg:mb-8">
                                        <div className="text-slate-700 text-lg max-[479px]:text-md">{section.description}</div>
                                    </div>
                                    <div className="mx-auto w-full max-w-[400px]">
                                        <div className="mx-auto max-w-[400px] text-left mb-4">
                                            <form name="wf-form-password" method="get" disabled>
                                                <div className="relative">
                                                    <label className="mb-1 font-medium">Your Name</label>
                                                    <input type="text" className="m-0 mb-4 block w-full bg-white align-middle text-black text-sm px-3 h-9 py-6 pl-4" maxLength="256" name="name-2" placeholder="" required=""/>
                                                </div>
                                                <div className="relative mb-2">
                                                    <label className="mb-1 font-medium">Email Address</label>
                                                    <input type="email" className="m-0 mb-4 block w-full bg-white align-middle text-black text-sm px-3 h-9 py-6 pl-4" maxLength="256" name="name-2" placeholder="" required=""/>
                                                </div>
                                                <div className="relative mb-2">
                                                    <label className="mb-1 font-medium">Subject</label>
                                                    <input type="email" className="m-0 mb-4 block w-full bg-white align-middle text-black text-sm px-3 h-9 py-6 pl-4" maxLength="256" name="name-2" placeholder="" required=""/>
                                                </div>
                                                <div className="relative mb-5 md:mb-6 lg:mb-8">
                                                    <label className="mb-1 font-medium">Message</label>
                                                    <textarea placeholder="" maxLength="5000" name="field" className="m-0 block h-auto min-h-[128px] w-full overflow-auto bg-white align-middle text-black text-sm mb-2.5 px-3 py-2 pl-4"/>
                                                </div>
                                                <button className={`m-0 inline-block w-full cursor-pointer ${btnColorOptions[section.actionBtn.color]} px-6 py-4 text-center font-semibold`}>{section.actionBtn.text}</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}