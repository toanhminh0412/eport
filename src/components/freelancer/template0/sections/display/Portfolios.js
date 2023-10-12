// Next imports
import Image from "next/image"
import Link from "next/link"

// Local imports
import { ProjectModal } from "@/components/ui/ProjectModal"
import { btnColorOptions } from "@/data/colorOptions"

export function Portfolio1({ section }) {
    return ( 
        <section className="block">
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
                                    <div key={portfolio.id}>
                                        <ProjectModal project={portfolio} index={portfolioInd}/>
                                        <div className="relative flex h-[480px] max-w-full flex-col items-center justify-center object-cover text-black">
                                            <Image src={portfolio.images[0]} alt="Portfolio background image" className="inline-block h-full w-full max-w-full object-cover brightness-50 rounded-md" width={500} height={400}/>
                                            <div className="prose absolute flex flex-col items-center justify-center px-8 py-4 text-center rounded-sm">
                                                <p className="font-medium text-3xl sm:text-5xl text-white mb-20">{portfolio.title}</p>
                                                <div>
                                                    <button className={`inline-block py-3 px-3 rounded-lg ${btnColorOptions[portfolio.actionBtns[0].color]} text-lg font-semibold no-underline mt-4 mr-4 cursor-pointer`} onClick={() => {document.getElementById(`project-${portfolioInd}`).showModal()}}>{portfolio.actionBtns[0].text}</button>
                                                    <Link href={portfolio.actionBtns[1].href} className={`inline-block py-3 px-3 rounded-lg ${btnColorOptions[portfolio.actionBtns[1].color]} text-lg font-semibold no-underline mt-4 mr-4 cursor-pointer`}>{portfolio.actionBtns[1].text}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}