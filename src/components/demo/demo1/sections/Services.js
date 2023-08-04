export default function Services({content}) {
    return (
        <section className="prose mb-12">
            <h1>{content.heading}</h1>
            <div className="block sm:grid md:block lg:grid grid-cols-2 gap-4">
                {content.services.map((service, index) => (
                    <div key={index} className="mt-2 sm:mt-0 md:mt-2 lg:mt-0">
                        <i className={`${service.icon} text-4xl border-2 p-5 rounded-full text-blue-500 hover:text-white hover:bg-blue-500 duration-500 border-blue-500`}></i>
                        <h3>{service.title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: service.description }}></div>
                    </div>
                ))}
            </div>
        </section>
    )
}