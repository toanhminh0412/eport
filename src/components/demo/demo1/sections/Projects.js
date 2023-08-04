import ProjectShowcase from "../ProjectShowcase"

export default function Projects({content}) {
    return (
        <section className="prose mb-12">
            <h1>{content.heading}</h1>
            <ProjectShowcase projects={content.projects}/>
        </section>
    )
}