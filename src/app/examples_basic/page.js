import Slider from "@/components/ui/Slider";
import Link from "next/link"

export const metadata = {
    title: 'Basic examples',
    description: 'Below are the beatiful, clean and simple websites that you can build with Eport basic tier. It includes your basic profile, an about me, experience, references and a get in touch section. The great thing is that you only need to spend 5 minutes to build it.',
    alternates: {
        canonical: 'https://eport.site/examples_basic',
    }
}

export default function ExamplesBasic() {
    const slides1 = ['/img/jglanville_profile.png', '/img/jglanville_aboutme.png',
                     '/img/jglanville_experience.png', '/img/jglanville_references.png',
                     '/img/jglanville_getintouch.png'];

    const slides2 = ['/img/ttory_profile.png', '/img/ttory_aboutme.png',
                    '/img/ttory_experience.png', '/img/ttory_references.png',
                    '/img/ttory_getintouch.png']

    const slides3 = ['/img/lrilla_profile.png', '/img/lrilla_aboutme.png',
                    '/img/lrilla_experience.png', '/img/lrilla_references.png',
                    '/img/lrilla_getintouch.png']

    return (
        <main className="px-2 sm:px-10">
            <div className="mb-10 sm:mb-20">
                <div className="flex justify-center mt-12">
                    <h1 className="text-lg sm:text-3xl">Jolie Glanville - Web Designer</h1>
                    <Link href='https://www.eport.site/jglanville' target="_blank" className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white ml-5 mt-[-3px]">Visit Site</Link>
                </div>
                <Slider slides={slides1}></Slider>   
            </div>
            
            <div className="mb-10 sm:mb-20">
                <div className="flex justify-center mt-12">
                    <h1 className="text-lg sm:text-3xl">Thane Tory - Information Security Analyst</h1>
                    <Link href='https://www.eport.site/ttory' target="_blank" className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white ml-5">Visit Site</Link>
                </div>
                <Slider slides={slides2}></Slider>
            </div>

            <div className="mb-20">
                <div className="flex justify-center mt-12">
                    <h1 className="text-lg sm:text-3xl">Lucille Rilla - Lawyer</h1>
                    <Link href='https://www.eport.site/lrilla' target="_blank" className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white ml-5">Visit Site</Link>
                </div>
                <Slider slides={slides3}></Slider>
            </div>
        </main>
    )
}