// Next imports
import Link from "next/link"

// Local imports
import { convertToURL } from "@/helpers/helpers"

export function Header1({ section }) {
    return (
        <section style={{backgroundImage: `url(${section.backgroundImage})`}} className="w-full min-w-[450px] aspect-video flex flex-row bg-black bg-cover">
            <div style={{backgroundImage: `url(${section.avatar})`}} className="w-5/12 h-full brightness-75 bg-cover"></div>
            <div className="w-7/12 prose max-w-none p-0 flex flex-col justify-center">
                <div className="w-11/12 md:w-10/12 mx-auto">
                    <h3 className="text-md lg:text-xl mt-0 lg:mt-12">{section.heading}</h3>
                    <h1 className="text-xl lg:text-3xl xl:text-4xl">{section.slogan}</h1>
                    <div>
                    <div>
                        {section.actionBtns.map(actionBtn => <Link key={actionBtn.id} href={convertToURL(actionBtn.href)} className={`btn btn-sm ${actionBtn.color} lg:btn lg:btn-${actionBtn.color} mr-2`}>{actionBtn.text}</Link>)}
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}