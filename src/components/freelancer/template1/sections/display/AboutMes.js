// Local imports
import { badgeColorOptions } from "@/data/colorOptions"

export function AboutMe1({ section }) {
    return (
        <section className="block bg-white">
            <div className="py-12 md:py-16 lg:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
                    <div className="flex-col flex items-start gap-2">
                        <div className="">
                        <div className="flex-col flex items-start">
                            <div className="flex-col flex items-start gap-2">
                            {section.status.text ? <div className={`flex grid-cols-2 items-center px-3 py-1 rounded-md ${badgeColorOptions[section.status.color]}`}>
                                <div className={`h-2 w-2 min-w-[8px] ${section.status.color === 'slate' ? 'bg-black' : 'bg-white'} rounded-full`}>
                                </div>
                                <div className="text-sm sm:text-sm ml-2">{section.status.text}</div>
                            </div> : null}
                            <h1 className="font-bold text-4xl md:text-6xl mb-5 md:mb-6 lg:mb-8">{section.heading}</h1>
                            <p className="flex-col text-[#808080] font-light text-sm sm:text-lg" dangerouslySetInnerHTML={{ __html: section.bio }}></p>
                            </div>
                            <div className="mb-8 mt-8 h-px w-full bg-black">
                            </div>
                            <div className="flex-row flex flex-wrap gap-3">
                                {section.extraInfo.map(info => (
                                <p key={info.id} className="flex-col text-[#808080] max-[479px]:text-sm">
                                    <strong>{info.name}: </strong> {info.value}
                                </p>
                                ))}
                            </div>
                            <div className="flex items-center justify-start gap-4 flex-wrap mb-6 md:mb-10 lg:mb-12"></div>
                        </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div style={{backgroundImage: `url(${section.avatar})`}} className="max-w-[300px] aspect-square mx-auto overflow-hidden bg-cover bg-center rounded-md"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}