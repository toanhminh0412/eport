// Next imports
import Link from "next/link"
import Image from "next/image"

// Local imports
import { btnColorOptions } from "@/data/colorOptions"
import { convertToURL } from "@/helpers/helpers"

export function Header1({ section }) {
    return (
        <section style={{backgroundImage: `url(${section.backgroundImage})`}} className="w-full min-w-[450px] aspect-video flex flex-row bg-black bg-cover">
            <div className="relative w-5/12 h-full brightness-75 overflow-hidden">
                <Image 
                    src={section.avatar.src}
                    fill
                    alt="Header avatar"
                    style={{ transform: section.avatar.style.transform}}
                    className={`absolute left-0 top-0 origin-top-left w-full h-full`}/>
            </div>
            <div className="w-7/12 prose max-w-none p-0 flex flex-col justify-center">
                <div className="w-11/12 md:w-10/12 mx-auto">
                    <h3 className="text-md lg:text-xl mt-0 lg:mt-12">{section.heading}</h3>
                    <h1 className="text-xl lg:text-3xl xl:text-4xl">{section.slogan}</h1>
                    <div>
                        <div>
                            {section.actionBtns.map(actionBtn => actionBtn.isExternal ? <Link href={actionBtn.externalHref ? convertToURL(actionBtn.externalHref) : "#"} className={`btn ${btnColorOptions[actionBtn.color]} mr-2`} target="_blank">{actionBtn.text}</Link> : <Link href={actionBtn.internalHref ? actionBtn.internalHref : "#"} className={`btn ${btnColorOptions[actionBtn.color]} mr-2`} scroll={false}>{actionBtn.text}</Link>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}