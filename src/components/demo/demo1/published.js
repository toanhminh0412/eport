import { cookies } from "next/headers";

import UpperNav from "@/components/UpperNav"
import Profile from "./sections/Profile";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";;
import Experience from "./sections/Experience";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

export default function PublishedDemo1({site}) {
    const cookieStore = cookies();
    const isLoggedIn = cookieStore.get('eport-uid') ? true : false;

    return (
        <main className="bg-slate-100 w-screen h-full pb-10 pt-24">
            <UpperNav isLoggedIn={isLoggedIn}/>
            <div className="inset-x-0 w-11/12 mx-auto flex flex-row min-h-screen gap-x-3 flex-wrap md:flex-nowrap">
                <Profile content={site.sections[0]}/>
                <div className="card min-h-screen w-full md:w-[60%] lg:w-2/3 bg-white mt-[2vh]">
                    <div className="p-8">
                        <AboutMe content={site.sections[1]}/>
                        <Skills content={site.sections[2]}/>
                        <Experience content={site.sections[3]}/>

                        {/* Services */}
                        <Services content={site.sections[4]}/>

                        {/* Projects */}
                        <Projects content={site.sections[5]}/>

                        {/* Testimonials */}
                        <Testimonials content={site.sections[6]} />
                    </div>
                
                {/* Contact me */}
                <Footer content={site.sections[7]}/>
                </div>
            </div>
        </main>
    )
}