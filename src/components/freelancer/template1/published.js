import { Section } from "./Section";

export default function PublishedTemplate1({project}) {
    const publish = true;
    const isNavbarUsed = project.sections.some(section => section.sectionType === "navbar");
    return (
        <main className={`w-full relative ${isNavbarUsed ? "mt-1" : "mt-[-65px]"}`}>
            {project.sections.map(section => <div key={section.id} id={section.id}><Section section={section} publish={publish}/></div>)}
        </main>
    )
}