export default function Services({content}) {
    return (
        <section className="prose max-w-none w-11/12 mx-auto shadow-md rounded-lg p-8 my-4 border border-slate-300 bg-white text-justify">
            <h1>{content.heading}</h1>
            <div className="flex flex-row flex-wrap justify-center gap-3">
                {content.services.map((service, index) => (
                    <div key={index} className="card w-80 xs:w-96 border border-slate-300 shadow-lg text-center">
                        <div className="card-body">
                            <h3 className="my-0">{service.title}</h3>
                            {/* <i className={`${service.icon} text-4xl border-2 p-5 rounded-full text-blue-500 hover:text-white hover:bg-blue-500 duration-500 border-blue-500`}></i> */}
                            <h1 className="mb-2">{service.price}</h1>
                            <div dangerouslySetInnerHTML={{ __html: service.description }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}