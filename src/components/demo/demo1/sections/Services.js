export default function Services({content}) {
    return (
        <section className="prose max-w-none w-11/12 mx-auto shadow-md rounded-lg p-8 my-4 border border-slate-300 bg-white text-justify">
            <h1>{content.heading}</h1>
            <div className="flex flex-row flex-wrap justify-center gap-3">
                {content.services.map((service, index) => (
                    <div key={index} className="card w-80 xs:w-96 border border-slate-300 shadow-lg text-center">
                        <div className="card-body">
                            <h3 className="my-0">{service.title}</h3>
                            <h2 className="mb-2">{service.price}</h2>
                            <article dangerouslySetInnerHTML={{ __html: service.description }}></article>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}