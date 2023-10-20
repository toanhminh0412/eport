// Next imports
import Link from "next/link"
import { useContext } from "react"

// Local imports
import { socialIcons, socialIconsStyle } from "@/data/social-icons"
import { ActiveContentContext, ActiveTabContext, SectionsContext } from "../../site"
import { btnColorOptions } from "@/data/colorOptions"
import { convertToURL } from "@/helpers/helpers"
import { ContactForm1 } from "../display/ContactForm"

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

                            <ContactForm1 section={section}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}