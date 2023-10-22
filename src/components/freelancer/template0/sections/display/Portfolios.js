// Next imports
import Image from "next/image"
import Link from "next/link"

// Local imports
import { btnColorOptions } from "@/data/colorOptions"
import { convertToURL } from "@/helpers/helpers";
import { PortfolioModal } from "@/components/ui/PortfolioModal";

export function Portfolio1({ section }) {
    return ( 
        <section className="block">
            <div className="px-5 md:px-10">
                <div className="mx-auto w-full max-w-[1400px]">
                    <div className="py-40">
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