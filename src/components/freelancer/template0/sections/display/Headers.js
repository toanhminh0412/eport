// Next imports
import Link from "next/link"
import Image from "next/image"

// Local imports
import socialIconsStyle from "@/data/social-icons-style"
import socialIcons from "@/data/social-icons"
import { btnColorOptions } from "@/data/colorOptions"

export function Header1({ section }) {
    return (
        <section className="prose max-w-none bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${section.backgroundImage})`}}>
            <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
                <div className="max-w-[720px] lg:max-w-lg">
                    <h2 className="mb-4 text-3xl font-bold md:text-5xl text-orange-400">{section.heading}</h2>
                    <h3 className="text-2xl md:text-4xl mb-3">{section.slogan}</h3>
                    <div className="mb-6 max-w-[480px] md:mb-10 lg:mb-12">
                        <p className="text-slate-700">{section.description}</p>
                    </div>
                    <div>
                        {section.socials.map(socialBtn => <Link key={socialBtn.id} href={socialBtn.href} target="_blank" className={`${socialIconsStyle[socialBtn.social]}`}><i className={`${socialIcons[socialBtn.social]}`}></i></Link>)}
                    </div>
                    <div>
                        {section.actionBtns.map(actionBtn => <Link key={actionBtn.id} href={actionBtn.href} className={`inline-block py-3 px-4 md:py-4 md:px-[2.5rem] rounded-16 ${btnColorOptions[actionBtn.color]} text-lg md:text-xl font-semibold no-underline mt-2 md:mt-4 mr-4`}>{actionBtn.text}</Link>)}
                    </div>
                </div>
                <div className="min-h-[400px]">
                    <Image src={section.avatar} alt="Avatar" className="mx-auto inline-block rounded-full" width={400} height={800} style={{objectFit: "contain"}}/>
                </div>
                </div>
            </div>
        </section>
    )
}