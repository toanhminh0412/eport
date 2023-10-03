import TestimonialShowcase from "../TestimonialShowcase"

export default function Testimonials({content}) {
    return (
        <section className="prose max-w-none w-11/12 mx-auto shadow-md rounded-lg p-8 my-4 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-justify">
            <h1 className="dark:text-white">{content.heading}</h1>
            <TestimonialShowcase testimonials={content.testimonials} />
        </section>
    )
}