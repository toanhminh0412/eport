// Next imports
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"

// Local imports
import { ActiveContentContext, ActiveTabContext, SectionsContext } from "../../site"
import { btnColorOptions } from "@/data/colorOptions"
import { convertToURL } from "@/helpers/helpers"
import { PortfolioModal } from "@/components/ui/PortfolioModal";

export function EditablePortfolio1({ section, sectionInd }) {
    const { _activeTab, setActiveTab } = useContext(ActiveTabContext);
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
            <div className={`block border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} group-hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
                <div className="px-5 md:px-10">
                    <div className="mx-auto w-full max-w-7xl">
                        <div className="py-16 md:py-24 lg:py-32">
                            <div className="">
                                <div className="text-center">
                                    <h2 className="font-bold text-5xl md:text-7xl mb-10">{section.heading}</h2>
                                    <div className="mx-auto mt-4 max-w-[528px] mb-8 md:mb-12 lg:mb-16">
                                        <p className="text-slate-700 text-xl max-[479px]:text-lg">{section.sectionDescription}</p>
                                    </div>
                                </div>
                                <div className="mx-auto grid max-w-[1240px] grid-cols-1 md:grid-cols-2 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch bg-slate-300 p-10 lg:p-20 rounded-md">
                                    {section.portfolios.map((portfolio, portfolioInd) => 
                                        <div key={portfolio.id} className="relative flex h-[480px] max-w-full flex-col items-center justify-center object-cover text-black">
                                            <PortfolioModal portfolio={portfolio} portfolioInd={portfolioInd}/>
                                            <Image src={portfolio.images[0].src} alt="Portfolio background image" className="inline-block h-full w-full max-w-full object-cover brightness-50 rounded-md" width={500} height={400}/>
                                            <div className="prose absolute flex flex-col items-center justify-center px-8 py-4 text-center rounded-sm">
                                                <p className="font-medium text-3xl sm:text-5xl text-white mb-20">{portfolio.title}</p>
                                                <div className="flex flex-row gap-4">
                                                    <button className={`inline-block py-3 px-3 rounded-lg ${btnColorOptions[portfolio.actionBtns[0].color]} text-lg font-semibold no-underline mt-4 cursor-pointer`} onClick={() => {document.getElementById(`portfolio-${portfolioInd}`).showModal()}}>{portfolio.actionBtns[0].text}</button>
                                                    {portfolio.actionBtns[1].text && portfolio.actionBtns[1].href ? <Link href={convertToURL(portfolio.actionBtns[1].href)} target="_blank" className={`inline-block py-3 px-3 rounded-lg ${btnColorOptions[portfolio.actionBtns[1].color]} text-lg font-semibold no-underline mt-4 mr-4 cursor-pointer`}>{portfolio.actionBtns[1].text}</Link> : null}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}