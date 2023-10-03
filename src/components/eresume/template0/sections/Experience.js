export default function Experience({content}) {
    return (
        <section className="prose max-w-none w-11/12 mx-auto shadow-md rounded-lg p-8 my-4 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-justify">
            <h1 className="dark:text-white">{content.heading}</h1>
            {content.experiences.map((exp, index) => (
                <article key={index}>
                    <h3 className="dark:text-slate-200">{exp.jobTitle}</h3>
                    <div className="font-light text-slate-500 dark:text-slate-400">{exp.company} | {exp.startYear} - {exp.endYear && exp.endYear != 0 ? exp.endYear : 'Present'}</div>
                    <div className="dark:text-slate-200" dangerouslySetInnerHTML={{ __html: exp.description }}></div>
                </article>
            ))}
        </section>
    )
}