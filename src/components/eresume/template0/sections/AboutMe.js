export default function AboutMe({content}) {
    const section = content;

    return (
        <section className="prose max-w-none w-11/12 mx-auto shadow-md rounded-lg p-8 my-4 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 dark:text-slate-200 text-justify">
            <h1 className="dark:text-white">{section.heading}</h1>
            <article dangerouslySetInnerHTML={{ __html: section.bio }}></article>
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 text-md">
                {section.extraInfo.map((info, index) => (
                <div key={index} className="my-1"><strong className="mr-2 text-blue-500 dark:text-blue-400">{info.key}:</strong>{info.value}</div>
                ))}
            </div>
        </section>
    )
}