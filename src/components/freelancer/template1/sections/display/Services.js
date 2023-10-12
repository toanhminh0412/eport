// Next imports
import Link from "next/link"

// Local imports
import { convertToURL } from "@/helpers/helpers"
import { btnColorOptions } from "@/data/colorOptions"

export function Service1({ section }) {
    return (
        <section className="prose max-w-none bg-white py-16 px-8 text-center">
                <h1 className="mb-4">{section.heading}</h1>
                <h4 className="mt-0 mb-8">{section.tagline}</h4>
                <div className="flex flex-row flex-wrap gap-4 justify-center">
                    {section.services.map(service => (
                    <div key={service.id} className="card w-96 bg-base-100 shadow-xl border border-slate-200">
                        <div className="card-body">
                            <h4 className="card-title w-fit mx-auto">{service.name}</h4>
                            <h1 className="my-4">{service.price}</h1>
                            <Link href={convertToURL(service.actionBtn.href)} className={`btn btn-lg btn-wide mx-auto ${btnColorOptions[service.actionBtn.color]}`}>{service.actionBtn.text}</Link>
                            <ul className="text-left list-none mt-2">
                                {service.pros.map(pro => (
                                <li key={pro.id}><i className="fa-solid fa-check text-green-500 text-xl mr-2"></i>{pro.text}</li>
                                ))}
                                {service.cons.map(con => (
                                <li key={con.id}><i className="fa-solid fa-xmark text-red-500 text-xl mr-2"></i>{con.text}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
    )
}