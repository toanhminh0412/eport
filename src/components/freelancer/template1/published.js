import { Section } from "./Section";

export default function PublishedTemplate1({project}) {
    const publish = true;
    return (
        <main>
            <div className={`w-full relative`}>
                {project.sections.map(section => <Section key={section.id} section={section} publish={publish}/>)}
            </div>
        </main>
    )
}