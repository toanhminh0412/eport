import Slider from "@/components/ui/Slider";
import Link from "next/link";

export const metadata = {
    title: 'Premium examples',
    description: "Below are the modern, professional and detailed websites that you can build with Eport premium tier. It includes your profile, an about me, skills, experience, services, projects, testimonials, references and a get in touch section. This will help you stand out from the crowd and impress any employer. The great thing is that you only need to spend 10 minutes to build it.",
    alternates: {
        canonical: 'https://eport.site/examples_premium',
    }
}

export default function ExamplesPremium() {
    const slides1 = ['/img/ckiki_profile.png', '/img/ckiki_aboutme.png',
                    '/img/ckiki_skills.png', '/img/ckiki_experience.png',
                    '/img/ckiki_services.png', '/img/ckiki_projects.png',
                    '/img/ckiki_testimonials.png', '/img/ckiki_references.png',
                    '/img/ckiki_getintouch.png']

    const slides2 = ['/img/stiffany_profile.png', '/img/stiffany_aboutme.png',
                    '/img/stiffany_skills.png', '/img/stiffany_experience.png',
                    '/img/stiffany_services.png', '/img/stiffany_projects.png',
                    '/img/stiffany_testimonials.png', '/img/stiffany_references.png',
                    '/img/stiffany_getintouch.png']

    const slides3 = ['/img/mmiles_profile.png', '/img/mmiles_aboutme.png',
                    '/img/mmiles_experience.png', '/img/mmiles_services.png',
                    '/img/mmiles_projects_1.png', '/img/mmiles_projects_2.png',
                    '/img/mmiles_testimonials.png', '/img/mmiles_references.png',
                    '/img/mmiles_getintouch.png']

    return (
        <main className="px-2 sm:px-10">
            <div className="mb-10 sm:mb-20">
                <div className="flex justify-center mt-12">
                    <h1 className="text-lg sm:text-3xl">Crispian Kiki - Software Developer</h1>
                    <Link href='https://www.eport.site/ckiki' target="_blank" className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white ml-5 mt-[-3px]">Visit Site</Link>
                </div>
                <Slider slides={slides1}></Slider>
            </div>
            
            <div className="mb-10 sm:mb-20">
                <div className="flex justify-center mt-12">
                    <h1 className="text-lg sm:text-3xl">Sabryna Tiffany - Nurse</h1>
                    <Link href='https://www.eport.site/stiffany' target="_blank" className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white ml-5">Visit Site</Link>
                </div>
                <Slider slides={slides2}></Slider>
            </div>

            <div className="mb-20">
                <div className="flex justify-center mt-12">
                    <h1 className="text-lg sm:text-3xl">Maxine Miles - Senior Chef</h1>
                    <Link href='https://www.eport.site/mmiles' target="_blank" className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white ml-5">Visit Site</Link>
                </div>
                <Slider slides={slides3}></Slider>
            </div>
        </main>
    )
}