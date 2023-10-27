// Next imports
import Link from "next/link"

// Local imports
import { socialIcons, socialIconsStyle } from "@/data/social-icons"
import { convertToURL } from "@/helpers/helpers"
import { ContactForm1 } from "./ContactForm"

export function Contact1({ section, publish=false, ownerEmail=null }) {
    return ( 
        <section className="prose relative max-w-none px-5 md:px-10">
            {/* This div allows scrolling to this section put the section in the middle of the page */}
            <div id={section.id} className="absolute top-[-250px]"></div>
            <div className="mx-auto w-full max-w-[1400px]">
                <div className="pt-20 pb-12">
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

export function Contact2({ section }) {
    return (
        <section className="relative">
            {/* This div allows scrolling to this section put the section in the middle of the page */}
            <div id={section.id} className="absolute top-[-250px]"></div>
            <div className="mx-auto w-full max-w-[1400px] px-5 py-40 md:px-10">
                <div className="flex flex-row justify-between max-[767px]:flex-col max-[767px]:items-start">
                    <div className="w-full max-w-[560px] max-[991px]:mr-4 max-[991px]:flex-initial max-[767px]:mr-0">
                        <h2 className="text-3xl font-semibold text-black md:text-5xl">{section.slogan}</h2>
                        <p className="text-base md:text-lg mt-5">{section.description}</p>
                        <div className="mt-10">
                            {section.socials.map(socialBtn => <Link key={socialBtn.id} href={convertToURL(socialBtn.href)} target="_blank" className={`${socialIconsStyle[socialBtn.social]} inline-flex justify-center items-center w-12 h-12 md:w-16 md:h-16 bg-transparent rounded-full border-2 border-solid mr-6 mb-6 md:mb-12 ml-0 text-2xl md:text-4xl no-underline`}><i className={`${socialIcons[socialBtn.social]}`}></i></Link>)}
                        </div>
                    </div>
                    <div className="max-[991px]:ml-4 max-[991px]:flex-none max-[767px]:ml-0 max-[767px]:mt-8">
                        {section.contactInfo.map(contact =>
                            <div key={contact.id} className="mb-4 flex max-w-[272px] items-start justify-start">
                                <div className="text-lg sm:text-2xl mt-5"><i className={`${contact.icon} text-orange-500 mr-3`}></i>{contact.content}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}