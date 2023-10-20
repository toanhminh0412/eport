// Next imports
import Link from "next/link"

// Local imports
import { socialIcons, socialIconsStyle } from "@/data/social-icons"
import { btnColorOptions } from "@/data/colorOptions"
import { convertToURL } from "@/helpers/helpers"
import { ContactForm1 } from "./ContactForm"

export function Contact1({ section, publish=false, ownerEmail=null }) {
    return ( 
        <section className="prose max-w-none px-5 md:px-10">
            <div className="mx-auto w-full max-w-[1400px]">
                <div className="pt-40 pb-12">
                    <div className="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
                        <div className="flex flex-col items-start max-[991px]:max-w-[720px]">
                            <h2 className="font-bold mb-2 text-3xl md:text-5xl">{section.slogan}</h2>
                            <div className="ml-0 mr-0 mt-4 max-w-[528px] pb-4 mb-5 md:mb-6 lg:mb-8">
                                {section.contactInfo.map(contact =>
                                    <div key={contact.id} className="text-lg sm:text-2xl mt-5"><i className={`${contact.icon} text-orange-500 mr-3`}></i>{contact.content}</div>
                                )}
                                <div className="mt-10">
                                    {section.socials.map(socialBtn => <Link key={socialBtn.id} href={convertToURL(socialBtn.href)} target="_blank" className={`${socialIconsStyle[socialBtn.social]} inline-flex justify-center items-center w-12 h-12 md:w-16 md:h-16 bg-transparent rounded-full border-2 border-solid mr-6 mb-6 md:mb-12 ml-0 text-2xl md:text-4xl no-underline`}><i className={`${socialIcons[socialBtn.social]}`}></i></Link>)}
                                </div>
                            </div>
                        </div>
                        <ContactForm1 section={section} publish={publish} ownerEmail={ownerEmail} />
                    </div>
                </div>
            </div>
        </section>
    )
}