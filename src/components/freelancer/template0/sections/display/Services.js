// Local imports
import ServiceShowcase from "../../ServiceShowcase"

export function Services1({ section }) {
    return (
        <section className="">
            <div className="mx-auto w-full max-w-[1400px] px-5 py-40">
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