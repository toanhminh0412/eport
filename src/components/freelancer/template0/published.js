import Footer from "@/components/layout/Footer"
import { Section } from "./Section"

export default function PublishedTemplate0({project}) {
    const isNavarUsed = project.sections.some(section => section.sectionType === "navbar");
    const publish = true;
    return (
        <main>
            <div className={`w-full relative ${isNavarUsed ? "pt-[72px]" : ""}`}>
                {project.sections.map(section => <Section key={section.id} section={section} publish={publish}/>)}
            </div>
        </main>
    )
}