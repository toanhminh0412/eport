export default function AboutMe({content}) {
    const section = content;

    return (
        <section className="prose mb-12">
            <h1>{section.heading}</h1>
            <div dangerouslySetInnerHTML={{ __html: section.bio }}></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 text-md">
                {section.extraInfo.map((info, index) => (
                <div key={index} className="my-1"><strong className="mr-2 text-blue-500">{info.key}:</strong>{info.value}</div>
                ))}
            </div>
        </section>
    )
}