export default function Experience({content}) {
    return (
        <section className="prose mb-12">
            <h1>{content.heading}</h1>
            {content.experiences.map((exp, index) => (
                <article key={index}>
                    <h3>{exp.jobTitle}</h3>
                    <div className="font-light text-slate-500">{exp.company} | {exp.startYear} - {exp.endYear && exp.endYear != 0 ? exp.endYear : 'Present'}</div>
                    <div dangerouslySetInnerHTML={{ __html: exp.description }}></div>
                </article>
            ))}
        </section>
    )
}