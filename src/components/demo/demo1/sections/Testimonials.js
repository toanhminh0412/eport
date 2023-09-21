import TestimonialShowcase from "../TestimonialShowcase"

export default function Testimonials({content}) {
    return (
        <section className="prose max-w-none w-11/12 mx-auto shadow-md rounded-lg p-8 my-4 border border-slate-300 bg-white text-justify">
            <h1>{content.heading}</h1>
            <TestimonialShowcase testimonials={content.testimonials} />
        </section>
    )
}