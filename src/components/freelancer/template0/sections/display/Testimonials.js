// Local imports
import TestimonialShowcase from "../../TestimonialShowcase";

export function Testimonials1({ section }) {
    return (
        <section className="relative block">
            <div className="py-16 md:py-24 lg:py-32">
                <div className="px-5 md:px-10">
                    <div className="mx-auto w-full max-w-7xl">
                        <div className="mx-auto w-full max-w-3xl">
                            <div className="text-center">
                                <h2 className="font-semibold text-3xl md:text-5xl">What <span className="bg-contain bg-center bg-no-repeat text-orange-500">our clients</span> are saying</h2>
                                <div className="mx-auto mt-4 max-w-[528px] mb-8 md:mb-12 lg:mb-16">
                                    <p className="text-slate-700 text-lg">{section.description}</p>
                                </div>
                            </div>
                        </div>
                        <TestimonialShowcase section={section}/>
                    </div>
                </div>
            </div>
        </section>
    )
}