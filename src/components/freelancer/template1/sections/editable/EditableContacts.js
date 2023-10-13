// Next, React imports
import { useContext } from "react";

// Local imports
import { ActiveTabContext, ActiveContentContext, SectionsContext } from "../../site";
import { btnColorOptions } from "@/data/colorOptions"


export function EditableContact1({ section, sectionInd }) {
    const { _activeTab, setActiveTab } = useContext(ActiveTabContext);
    const { activeSectionInd, setActiveSectionInd } = useContext(ActiveContentContext);
    const { _sections, _setSections, deleteSection } = useContext(SectionsContext);

    const openContentTabEditor = () => {
        setActiveTab("content");
        setActiveSectionInd(sectionInd);
    }

    return (
        <div className="group relative">
            <button className="btn bg-blue-700 border-none z-40 absolute hover:bg-blue-900 top-[-35px] right-0 mr-7 hidden group-hover:block" onClick={()=>document.getElementById('delete_modal_contact1').showModal()}><i className="fa-solid fa-trash text-lg text-white"></i></button>
            <dialog id="delete_modal_contact1" className="modal modal-bottom sm:modal-middle">
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
            <section className={`block bg-white box-border border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
                <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
                    <div className="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
                        <div className="max-[991px]:max-w-[720px]">
                            <h2 className="font-bold mb-2 text-3xl md:text-5xl">{section.heading}</h2>
                            <div className="ml-0 mr-0 mt-4 max-w-[528px] mb-5 md:mb-6 lg:mb-8 pb-4">
                                <p className="text-[#636262] max-[479px]:text-sm">{section.description}</p>
                            </div>
                        </div>
                        <div className="mx-auto max-w-[608px] bg-[#f2f2f7] px-8 max-[991px]:ml-0 max-[991px]:mr-0 pt-[2em] pb-8">
                            <div className="text-center">
                                <h3 className="font-bold text-2xl md:text-3xl">{section.formHeading}</h3>
                                <div className="mx-auto mt-4 max-w-[480px] mb-5 md:mb-6 lg:mb-8">
                                    <div className="text-[#636262] text-sm sm:text-sm">{section.formTagline}</div>
                                </div>
                                <div className="mx-auto w-full max-w-[400px]">
                                    <div className="mx-auto max-w-[400px] text-left mb-4">
                                        <form name="wf-form-password" method="get">
                                            <div className="relative">
                                                <label htmlFor="name" className="mb-1 font-medium">Name</label>
                                                <input type="text" className="m-0 mb-4 block w-full border border-solid border-black align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6 pl-4" maxLength="256" name="name" placeholder="Your name" required/>
                                            </div>
                                            <div className="relative mb-2">
                                                <label htmlFor="email" className="mb-1 font-medium">Email Address</label>
                                                <input type="email" className="m-0 mb-4 block w-full border border-solid border-black align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6 pl-4" maxLength="256" name="email" placeholder="Your email" required/>
                                            </div>
                                            <div className="relative mb-5 md:mb-6 lg:mb-8">
                                                <label htmlFor="details" className="mb-1 font-medium">Details</label>
                                                <textarea placeholder="Let me know how I can help" maxLength="5000" name="details" className="m-0 block h-auto min-h-[128px] w-full overflow-auto border border-solid border-black bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm mb-2.5 px-3 py-2 rounded-md pl-4" required></textarea>
                                            </div>
                                            <input type="submit" value={section.formBtn.text} className={`${section.formBtn && section.formBtn.color ? btnColorOptions[section.formBtn.color] : btnColorOptions['orange']} m-0 inline-block w-full cursor-pointer items-center px-6 py-3 text-center font-semibold`}/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}