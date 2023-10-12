// Next imports
import Link from "next/link"
import Image from "next/image"
import { useContext } from "react";

// Local imports
import { ActiveContentContext, ActiveTabContext, SectionsContext } from "../../site";
import { btnColorOptions } from "@/data/colorOptions";
import socialIcons from "@/data/social-icons";
import socialIconsStyle from "@/data/social-icons-style";

export function EditableHeader1({ section, sectionInd }) {
    const { _activeTab, setActiveTab } = useContext(ActiveTabContext);
    const { activeSectionInd, setActiveSectionInd } = useContext(ActiveContentContext);
    const { _sections, _setSections, deleteSection } = useContext(SectionsContext);

    const openContentTabEditor = () => {
        setActiveTab("content");
        setActiveSectionInd(sectionInd);
    }

    return (
        <section className="group">
            <button className="btn z-40 bg-blue-700 border-none hover:bg-blue-900 mt-[-30px] absolute right-0 mr-7 hidden group-hover:block" onClick={()=>document.getElementById('delete_modal_header1').showModal()}><i className="fa-solid fa-trash text-lg text-white p-0"></i></button>
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
            <div className={`prose max-w-none bg-no-repeat bg-cover bg-center border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} group-hover:border-blue-700 duration-200`} style={{backgroundImage: `url(${section.backgroundImage})`}} onClick={openContentTabEditor}>
                <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
                    <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
                    <div className="max-w-[720px] lg:max-w-lg">
                        <h2 className="mb-4 text-3xl font-bold md:text-5xl text-orange-400">{section.heading}</h2>
                        <h3 className="text-2xl md:text-4xl mb-3">{section.slogan}</h3>
                        <div className="mb-6 max-w-[480px] md:mb-10 lg:mb-12">
                            <p className="text-slate-700">{section.description}</p>
                        </div>
                        <div className="">
                            {/* <Link href="#" target="_blank" className="inline-flex justify-center items-center w-12 h-12 md:w-16 md:h-16 bg-transparent rounded-full text-blue-500 border-2 border-blue-500 border-solid mr-6 mb-6 md:mb-12 ml-0 text-2xl md:text-4xl no-underline duration-200 hover:bg-blue-500 hover:text-white hover:shadow-blue-500"><i className="fa-brands fa-facebook"></i></Link>
                            <Link href="#" target="_blank" className="inline-flex justify-center items-center w-12 h-12 md:w-16 md:h-16 bg-transparent rounded-full text-pink-400 border-2 border-pink-400 border-solid mr-6 mb-6 md:mb-12 ml-0 text-2xl md:text-4xl no-underline duration-200 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white hover:shadow-pink-500"><i className="fa-brands fa-instagram"></i></Link>
                            <Link href="#" target="_blank" className="inline-flex justify-center items-center w-12 h-12 md:w-16 md:h-16 bg-transparent rounded-full text-sky-500 border-2 border-sky-500 border-solid mr-6 mb-6 md:mb-12 ml-0 text-2xl md:text-4xl no-underline duration-200 hover:bg-sky-500 hover:text-white hover:shadow-sky-500"><i className="fa-brands fa-twitter"></i></Link> */}
                            {section.socials.map(socialBtn => <Link key={socialBtn.id} href={socialBtn.href} target="_blank" className={`${socialIconsStyle[socialBtn.social]}`}><i className={`${socialIcons[socialBtn.social]}`}></i></Link>)}
                        </div>
                        <div>
                            {section.actionBtns.map(actionBtn => <Link key={actionBtn.id} href={actionBtn.href} className={`inline-block py-3 px-4 md:py-4 md:px-[2.5rem] rounded-16 ${btnColorOptions[actionBtn.color]} text-lg md:text-xl decoration-black tracking-widest font-semibold no-underline mt-2 md:mt-4 mr-4`}>{actionBtn.text}</Link>)}
                        </div>
                    </div>
                    <div className="min-h-[400px]">
                        <Image src={section.avatar} alt="Avatar" className="mx-auto inline-block rounded-full" width={400} height={800} style={{objectFit: "contain"}}/>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}