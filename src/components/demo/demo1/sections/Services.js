export default function Services({content}) {
    return (
        <section className="prose max-w-none w-11/12 mx-auto shadow-md rounded-lg p-8 my-4 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-justify">
            <h1 className="dark:text-white">{content.heading}</h1>
            <div className="flex flex-row flex-wrap justify-center gap-3">
                {content.services.map((service, index) => (
                    <div key={index} className="card w-80 xs:w-96 border border-slate-300 dark:border-blue-400 shadow-lg text-center">
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