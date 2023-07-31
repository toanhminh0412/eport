import ProjectShowcase from "../ProjectShowcase"

export default function Projects({categories, projects}) {
    return (
        <section className="prose mt-12">
            <h1>Projects</h1>
            <ProjectShowcase categories={categories} projects={projects}/>
        </section>
    )
}