import Link from "next/link";
import socialIcons from "../../../../data/social-icons";

export default function Footer({content}) {
    return (
        <section className="mt-12 bg-slate-900 w-full p-8 rounded-b-lg text-white">
            <div className="prose text-white max-w-none">
                <h1 className="text-white">{content.heading}</h1>
                <div className="flex flex-row flex-wrap gap-4 justify-center w-full text-2xl md:text-4xl">
                    {content.socials.map((social, index) => social.key === 'gmail' ? 
                    <Link key={`${social.key}-${index}`} href={`mailto:${social.value}`} target="_blank"><i className={`${socialIcons[social.key]} text-blue-200 hover:text-blue-500 duration-300`}></i></Link>
                    :<Link key={`${social.key}-${index}`} href={social.value.includes('https://') ? social.value : `https://${social.value}`} target="_blank"><i className={`${socialIcons[social.key]} text-blue-200 hover:text-blue-500 duration-300`}></i></Link>)}
                </div>
                <div className="text-center font-light">&copy; All rights reserved | Eport</div>
            </div>
        </section>
    )
}