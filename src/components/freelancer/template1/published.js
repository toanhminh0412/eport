import { Section } from "./Section";

export default function PublishedTemplate1({project}) {
    const publish = true;
    return (
        <main>
            <div className={`w-full relative`}>
                {project.sections.map(section => <div key={section.id} id={section.id}><Section section={section} publish={publish}/></div>)}
            </div>
        </main>
    )
}