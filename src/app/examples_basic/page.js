import Slider from "@/components/ui/Slider";
import Link from "next/link"

export default function ExamplesPremium() {
    const slides1 = [
        {
            img: '/img/jglanville_profile.png'
        },
        {
            img: '/img/jglanville_aboutme.png'
        },
        {
            img: '/img/jglanville_experience.png'
        },
        {
            img: '/img/jglanville_references.png'
        },
        {
            img: '/img/jglanville_getintouch.png'
        },
    ];

    const slides2 = [
        {
            img: '/img/ttory_profile.png'
        },
        {
            img: '/img/ttory_aboutme.png'
        },
        {
            img: '/img/ttory_experience.png'
        },
        {
            img: '/img/ttory_references.png'
        },
        {
            img: '/img/ttory_getintouch.png'
        },
    ];

    const slides3 = [
        {
            img: '/img/lrilla_profile.png'
        },
        {
            img: '/img/lrilla_aboutme.png'
        },
        {
            img: '/img/lrilla_experience.png'
        },
        {
            img: '/img/lrilla_references.png'
        },
        {
            img: '/img/lrilla_getintouch.png'
        },
    ];

    return (
        <div>
            <div className="mb-20">
                <div className="flex justify-center mt-12">
                    <h1 className="text-3xl">Jolie Glanville - Web Designer</h1>
                    <Link href='https://www.eport.site/jglanville' target="_blank" className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white ml-5 mt-[-3px]">Visit Site</Link>
                </div>
                <Slider slides={slides1}></Slider>
            </div>
            
            <div className="mb-20">
                <div className="flex justify-center mt-12">
                    <h1 className="text-3xl">Thane Tory - Information Security Analyst</h1>
                    <Link href='https://www.eport.site/ttory' target="_blank" className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white ml-5">Visit Site</Link>
                </div>
                <Slider slides={slides2}></Slider>
            </div>

            <div className="mb-20">
                <div className="flex justify-center mt-12">
                    <h1 className="text-3xl">Lucille Rilla - Lawyer</h1>
                    <Link href='https://www.eport.site/lrilla' target="_blank" className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white ml-5">Visit Site</Link>
                </div>
                <Slider slides={slides3}></Slider>
            </div>
        </div>
    )
}