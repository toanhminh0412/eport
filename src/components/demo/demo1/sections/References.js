import { convertToURL } from "@/helpers/helpers";
import Link from "next/link";

export default function References({content}) {
    const section = content

    return (
        <section className="prose max-w-none w-11/12 mx-auto shadow-md rounded-lg p-8 my-4 border border-slate-300 bg-white text-justify">
            <h1>{section.heading}</h1>
            {section.references.map((reference, index) => (
            <div key={`${reference.name}-${index}`} className="mb-6">
                <div className="text-xl font-bold mb-2">{reference.name} - <span className="text-lg font-normal">{reference.relationship}</span></div>
                {reference.phone ? <div><strong className="mr-2 text-blue-500">Phone: </strong>{reference.phone}</div> : null}
                {reference.email ? <div><strong className="mr-2 text-blue-500">Email: </strong>{reference.email}</div> : null}
                {reference.linkedin ? <div><strong className="mr-2 text-blue-500">LinkedIn: </strong><Link href={convertToURL(reference.linkedin)} target="_blank">{reference.linkedin}</Link></div> : null}
            </div>
            ))}
        </section>
    )
}