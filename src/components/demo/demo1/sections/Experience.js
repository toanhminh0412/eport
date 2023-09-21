export default function Experience({content}) {
    return (
        <section className="prose max-w-none w-11/12 mx-auto shadow-md rounded-lg p-8 my-4 border border-slate-300 bg-white text-justify">
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