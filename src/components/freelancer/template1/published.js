// Local imports
import { Section } from "./Section";

export default function PublishedTemplate1({project}) {
    const publish = true;
    const isNavbarUsed = project.sections.some(section => section.sectionType === "navbar");
    return (
        <main className={`w-full relative mb-[-400px] xs:mb-[-340px] ${isNavbarUsed ? "mt-1" : "mt-[-65px]"}`}>
            {project.sections.map(section => <div key={section.id} id={section.id} style={section.sectionType !== "navbar" ? {zoom: "75%"} : {}}><Section section={section} publish={publish} ownerEmail={project.ownerEmail}/></div>)}
        </main>
    )
}