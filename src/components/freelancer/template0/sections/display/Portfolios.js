// Next imports
import Image from "next/image"
import Link from "next/link"

// Local imports
import { btnColorOptions } from "@/data/colorOptions"
import { convertToURL } from "@/helpers/helpers";
import { PortfolioModal } from "@/components/ui/PortfolioModal";

export function Portfolio1({ section }) {
    return ( 
        <section className="block relative">
            {/* This div allows scrolling to this section put the section in the middle of the page */}
            <div id={section.id} className="absolute top-[-250px]"></div>
            <div className="px-5 md:px-10">
                <div className="mx-auto w-full max-w-[1400px]">
                    <div className="py-20">
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
                                        <div className="relative flex h-[480px] max-w-full flex-col items-center justify-center object-cover text-black">
                                            {portfolio.images.length > 0 ?
                                                <Image src={portfolio.images[0].src} alt="Portfolio background image" className="inline-block h-full w-full max-w-full object-cover brightness-50 rounded-md" width={500} height={400}/>
                                            :
                                                <div className="bg-slate-800 w-full h-full rounded-md"></div>
                                            }
                                            <div className="prose absolute flex flex-col items-center justify-center px-8 py-4 text-center rounded-sm">
                                                <p className="font-medium text-3xl sm:text-5xl text-white mb-20">{portfolio.title}</p>
                                                <div className="flex flex-row gap-4">
                                                    <PortfolioModal portfolio={portfolio} portfolioInd={portfolioInd}/>
                                                    {portfolio.actionBtns[1].text && portfolio.actionBtns[1].href ? <Link href={convertToURL(portfolio.actionBtns[1].href)} target="_blank" className={`inline-block py-3 px-3 rounded-lg ${btnColorOptions[portfolio.actionBtns[1].color]} text-lg font-semibold no-underline mt-4 mr-4 cursor-pointer`}>{portfolio.actionBtns[1].text}</Link> : null}
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

export function Portfolio2({ section }) {
    return (
        <section className="relative">
            {/* This div allows scrolling to this section put the section in the middle of the page */}
            <div id={section.id} className="absolute top-[-250px]"></div>
            <div className="py-20 mx-auto w-full max-w-[1400px] px-5 md:px-10">
                <div className="flex-col flex items-stretch gap-20">
                    <div className="flex-col flex gap-5 text-center">
                        <h2 className="font-bold text-5xl md:text-7xl">{section.heading}</h2>
                        <p className="text-xl max-[479px]:text-lg">{section.sectionDescription}</p>
                    </div>
                    <div>
                        <div className="[column-count:2] max-[991px]:gap-x-8 max-[767px]:[column-count:1] grid-cols-1 md:grid-cols-2">
                            {section.portfolios.map((portfolio, portfolioInd) => 
                                <div key={portfolio.id} className="inline-block border border-solid border-slate-300 shadow-md mb-12 md:mb-8 lg:mb-10">
                                    <div className="flex-col flex h-full text-black">
                                        <div className="w-full">
                                            <Image src={portfolio.images[0].src} alt="" className="inline-block w-full" width={500} height={500}/>
                                        </div>
                                        <div className="py-8 px-5 sm:px-6">
                                            <div className="flex-col flex gap-3">
                                                <h5 className="text-xl font-bold">{portfolio.title}</h5>
                                                <div className="flex-col text-slate-500" dangerouslySetInnerHTML={{ __html: portfolio.description }}></div>
                                            </div>
                                            <div className="mt-6 flex-wrap flex gap-2 mb-5 md:mb-6 lg:mb-8">
                                                {portfolio.tags.map((tag, tagIndex) =>
                                                    <div key={`${tag}-${tagIndex}`} className="bg-gray-300 p-2 text-sm font-semibold uppercase text-slate-600 rounded-sm">
                                                        {tag}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-wrap flex float-right gap-3">
                                                <PortfolioModal portfolio={portfolio} portfolioInd={portfolioInd}/>
                                                {portfolio.actionBtns[1].text && portfolio.actionBtns[1].href ? <Link href={convertToURL(portfolio.actionBtns[1].href)} target="_blank" className={`py-3 px-3 rounded-lg text-lg font-semibold no-underline mt-4 cursor-pointer ${btnColorOptions[portfolio.actionBtns[1].color]}`}>{portfolio.actionBtns[1].text}<span className="text-lg ml-2"><i className="fa-solid fa-arrow-up-right-from-square"></i></span></Link> : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}