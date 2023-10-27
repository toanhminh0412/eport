// Local imports
import ServiceShowcase from "../../ServiceShowcase"

export function Services1({ section }) {
    return (
        <section className="relative">
            {/* This div allows scrolling to this section put the section in the middle of the page */}
            <div id={section.id} className="absolute top-[-250px]"></div>
            <div className="mx-auto w-full max-w-[1400px] px-5 py-20">
                <div className="flex flex-col items-center">
                    <div className="mb-8 md:mb-12 lg:mb-16">
                        <div className="w-full max-w-[800px] text-center">
                            <h2 className="font-bold text-5xl md:text-7xl mb-10">{section.heading}</h2>
                            <div className="mx-auto w-full max-w-lg mb-16">
                                <p className="tracking-[0.2px] text-slate-700 text-xl max-[479px]:text-lg">{section.description}</p>
                            </div>
                            <ServiceShowcase section={section}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function Services2({ section }) {
    return (
        <section className="relative">
            {/* This div allows scrolling to this section put the section in the middle of the page */}
            <div id={section.id} className="absolute top-[-250px]"></div>
            <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-20">
                <div className="mx-auto w-full max-w-3xl text-center">
                    <h2 className="text-5xl md:text-7xl font-semibold">{section.heading}</h2>
                    <div className="mx-auto mb-8 mt-5 max-w-[528px] md:mb-12 lg:mb-16">
                        <p className="text-slate-700 text-lg max-[479px]:text-base">{section.description}</p>
                    </div>
                </div>

                <div className={`grid grid-cols-1 gap-6 sm:gap-8 ${section.services.length >= 6 ? "lg:grid-cols-3 md:grid-cols-2" : "lg:grid-cols-2"} lg:gap-12`}>
                    {section.services.map(service => (
                        <div key={service.id} className="relative mb-8 flex flex-col rounded-2xl border border-solid border-black p-8 [box-shadow:rgb(0,_0,_0)_9px_9px] lg:mb-4">
                            <div className="absolute -top-8 bottom-auto left-auto right-4 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-solid border-[#9b9b9b] bg-white [box-shadow:rgb(0,_0,_0)_0px_5px] lg:right-8">
                                <div><i className={`${service.icon} text-black text-2xl`}></i></div>
                            </div>
                            <p className="mb-5 text-2xl font-bold">{service.title}</p>
                            <h2 className="mb-5 text-xl font-semibold">{service.price}</h2>
                            <article className="text-lg" dangerouslySetInnerHTML={{ __html: service.content }}></article>
                        </div>
                    ))}      
                </div>
            </div>
        </section>
    )
}