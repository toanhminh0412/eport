import ProjectShowcase from "../ProjectShowcase"

export default function Projects({content}) {
    return (
        <section className="prose mt-12">
            <h1>{content.heading}</h1>
            <ProjectShowcase categories={content.categories} projects={content.projects}/>
        </section>
    )
}