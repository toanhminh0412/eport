import Slider from "@/components/ui/Slider";
import Link from "next/link"

export default function ExamplesPremium() {
    const slides1 = [
        {
            img: '/img/ckiki_profile.png'
        },
        {
            img: '/img/ckiki_aboutme.png'
        },
        {
            img: '/img/ckiki_skills.png'
        },
        {
            img: '/img/ckiki_experience.png'
        },
        {
            img: '/img/ckiki_services.png'
        },
        {
            img: '/img/ckiki_projects.png'
        },
        {
            img: '/img/ckiki_testimonials.png'
        },
        {
            img: '/img/ckiki_references.png'
        },
        {
            img: '/img/ckiki_getintouch.png'
        },
    ];

    const slides2 = [
        {
            img: '/img/stiffany_profile.png'
        },
        {
            img: '/img/stiffany_aboutme.png'
        },
        {
            img: '/img/stiffany_skills.png'
        },
        {
            img: '/img/stiffany_experience.png'
        },
        {
            img: '/img/stiffany_services.png'
        },
        {
            img: '/img/stiffany_projects.png'
        },
        {
            img: '/img/stiffany_testimonials.png'
        },
        {
            img: '/img/stiffany_references.png'
        },
        {
            img: '/img/stiffany_getintouch.png'
        },
    ];

    const slides3 = [
        {
            img: '/img/mmiles_profile.png'
        },
        {
            img: '/img/mmiles_aboutme.png'
        },
        {
            img: '/img/mmiles_experience.png'
        },
        {
            img: '/img/mmiles_services.png'
        },
        {
            img: '/img/mmiles_projects.png'
        },
        {
            img: '/img/mmiles_testimonials.png'
        },
        {
            img: '/img/mmiles_references.png'
        },
        {
            img: '/img/mmiles_getintouch.png'
        },
    ];

    return (
        <div>
            <div className="mb-20">
                <div className="flex justify-center mt-12">
                    <h1 className="text-3xl">Crispian Kiki - Software Developer</h1>
                    <Link href='https://www.eport.site/ckiki' target="_blank" className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white ml-5 mt-[-3px]">Visit Site</Link>
                </div>
                <Slider slides={slides1}></Slider>
            </div>
            
            <div className="mb-20">
                <div className="flex justify-center mt-12">
                    <h1 className="text-3xl">Sabryna Tiffany - Nurse</h1>
                    <Link href='https://www.eport.site/stiffany' target="_blank" className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white ml-5">Visit Site</Link>
                </div>
                <Slider slides={slides2}></Slider>
            </div>

            <div className="mb-20">
                <div className="flex justify-center mt-12">
                    <h1 className="text-3xl">Maxine Miles - Senior Chef</h1>
                    <Link href='https://www.eport.site/mmiles' target="_blank" className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white ml-5">Visit Site</Link>
                </div>
                <Slider slides={slides3}></Slider>
            </div>
        </div>
    )
}