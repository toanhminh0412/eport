import TestimonialShowcase from "../TestimonialShowcase"

export default function Testimonials({content}) {
    return (
        <section className="prose mb-12">
            <h1>{content.heading}</h1>
            <TestimonialShowcase testimonials={content.testimonials} />
        </section>
    )
}