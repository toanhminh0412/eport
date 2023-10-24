// Local imports
import { Testimonial1Showcase, Testimonial2Showcase } from "../../TestimonialShowcase";

export function Testimonials1({ section }) {
    return (
        <section className="relative block">
            <div className="py-40">
                <div className="px-5 md:px-10">
                    <div className="mx-auto w-full max-w-[1400px]">
                        <div className="mx-auto w-full max-w-3xl">
                            <div className="text-center">
                                <h2 className="font-semibold text-3xl md:text-5xl">{section.heading}</h2>
                                <div className="mx-auto mt-4 max-w-[528px] mb-8 md:mb-12 lg:mb-16">
                                    <p className="text-slate-700 text-xl max-[479px]:text-lg">{section.description}</p>
                                </div>
                            </div>
                        </div>
                        <Testimonial1Showcase section={section}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function Testimonials2({ section }) {
    return (
        <section>
            <div class="py-40 mx-auto w-full max-w-[1400px] px-5 md:px-10">
                <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
                    <div class="max-[991px]:max-w-[720px]">
                        <h2 class="font-bold text-3xl md:text-5xl mb-5 md:mb-6 lg:mb-4 pb-8">{section.heading}</h2>
                        <div className="mx-auto mt-4">
                            <p className="text-slate-700 text-xl max-[479px]:text-lg">{section.description}</p>
                        </div>
                    </div>
                    <Testimonial2Showcase section={section}/>
                </div>
            </div>
        </section>
    )
}