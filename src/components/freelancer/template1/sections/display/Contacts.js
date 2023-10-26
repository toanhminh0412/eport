// Local imports
import { ContactForm1, ContactForm2 } from "./ContactForm"


export function Contact1({ section, publish, ownerEmail }) {
    return (
        <section className="block bg-white">
            <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
                <div className="grid items-center max-[991px]:justify-items-center grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
                    <div className="max-[991px]:max-w-[720px]">
                        <h2 className="font-bold mb-2 text-3xl md:text-5xl">{section.heading}</h2>
                        <div className="ml-0 mr-0 mt-4 max-w-[528px] mb-5 md:mb-6 lg:mb-8 pb-4">
                            <p className="text-[#636262] max-[479px]:text-sm">{section.description}</p>
                        </div>
                    </div>
                    <ContactForm1 section={section} publish={publish} ownerEmail={ownerEmail}/>
                </div>
            </div>
        </section>
    )
}

export function Contact2({ section, publish, ownerEmail }) {
    return (
        <section className="block bg-white relative">
            {/* Container */}
            <div className="py-16 md:py-24 lg:py-32">
                {/* Component */}
                <div className="mx-auto w-full max-w-3xl px-5 md:px-10">
                    {/* Heading Div */}
                    <h2 className="text-3xl font-semibold md:text-5xl text-center">{section.heading}</h2>
                    <p className="mx-auto mb-8 mt-4 max-w-[528px] text-[#636262] md:mb-12 lg:mb-16 text-center">{section.description}</p>
                    {/* Form */}
                    <ContactForm2 section={section} publish={publish} ownerEmail={ownerEmail}/>
                </div>
            </div>
        </section>
    )
}