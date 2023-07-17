'use client';

import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import UpperNav from "@/components/UpperNav"
import ProjectShowcase from "./ProjectShowcase";
import TestimonialShowcase from "./TestimonialShowcase";
import Profile from "./sections/Profile";

export default function Demo1({content}) {
    const [site, setSite] = useState(content);

    return (
        <main className="bg-slate-100 w-screen h-full pb-10">
            <UpperNav/>
            <div className="inset-x-0 w-11/12 mx-auto flex flex-row min-h-screen gap-x-3 flex-wrap md:flex-nowrap">
                <Profile content={site.sections[0]}/>
                <div className="card min-h-screen w-full md:w-[60%] lg:w-2/3 bg-white mt-[2vh]">
                    <div className="p-8">
                    {/* About me */}
                    <section className="prose">
                        <h1>About me</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam convallis sapien sit amet pulvinar. Morbi a elit in velit eleifend malesuada et eget libero. Nulla suscipit congue purus, quis tristique tortor euismod ut. Sed ullamcorper magna id tristique facilisis. Fusce consequat metus vitae augue sagittis ultricies. Nullam varius posuere dapibus. Nullam luctus, sapien nec fermentum cursus, elit dolor vestibulum leo, et elementum enim neque vitae ligula. In at elit pellentesque, laoreet nibh eu, sagittis elit. Donec sit amet ultrices tortor, ut pharetra leo. Donec pretium nisi a mi sollicitudin, vitae consectetur sem rutrum.</p>
                        <div className="flex flex-row flex-wrap lg:flex-nowrap text-md">
                            <div className="w-full lg:w-1/2">
                                <div className="my-1"><strong className="mr-2 text-blue-500">Name:</strong>John Doe</div>
                                <div className="my-1"><strong className="mr-2 text-blue-500">Age:</strong>24</div>
                                <div className="my-1"><strong className="mr-2 text-blue-500">Email:</strong>jdoe@example.org</div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="my-1"><strong className="mr-2 text-blue-500">Degree:</strong>Master in Computer Science</div>
                                <div className="my-1"><strong className="mr-2 text-blue-500">Experience:</strong>3 years</div>
                                <div className="my-1"><strong className="mr-2 text-blue-500">Hobbies:</strong>Soccer, Video game</div>
                            </div>
                        </div>
                    </section>

                    {/* Skills */}
                    <section className="prose mt-12">
                        <h1>Skills</h1>
                        <div className="flex flex-row flex-wrap lg:flex-nowrap gap-x-6 text-md">
                            <div className="w-full lg:w-1/2">
                                <div className="my-1">
                                    <div className="flex flex-row justify-between"><span>HTML</span><span className="ms-auto">95%</span></div>
                                    <progress className="progress progress-primary w-full" value="95" max="100"></progress>
                                </div>
                                <div className="my-1">
                                    <div className="flex flex-row justify-between"><span>CSS</span><span className="ms-auto">80%</span></div>
                                    <progress className="progress progress-error w-full" value="80" max="100"></progress>
                                </div>
                                <div className="my-1">
                                    <div className="flex flex-row justify-between"><span>JavaScript</span><span className="ms-auto">90%</span></div>
                                    <progress className="progress progress-warning w-full" value="90" max="100"></progress>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="my-1">
                                    <div className="flex flex-row justify-between"><span>jQuery</span><span className="ms-auto">100%</span></div>
                                    <progress className="progress progress-success w-full" value="100" max="100"></progress>
                                </div>
                                <div className="my-1">
                                    <div className="flex flex-row justify-between"><span>Bootstrap</span><span className="ms-auto">85%</span></div>
                                    <progress className="progress progress-info w-full" value="85" max="100"></progress>
                                </div>
                                <div className="my-1">
                                    <div className="flex flex-row justify-between"><span>React</span><span className="ms-auto">90%</span></div>
                                    <progress className="progress w-full" value="90" max="100"></progress>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="prose mt-12">
                        <h1>Experience</h1>
                        {site.sections[3].experiences.map((exp, index) => (
                            <article key={index}>
                                <h3>{exp.jobTitle}</h3>
                                <div className="font-light text-slate-500">{exp.company} | {exp.startYear} - {exp.endYear}</div>
                                <div className="mt-2">{exp.description}</div>
                            </article>
                        ))}
                    </section>

                    {/* Services */}
                    <section className="prose mt-12">
                        <h1>Services</h1>
                        <div className="block sm:grid md:block lg:grid grid-cols-2 grid-rows-2 gap-4">
                            {site.sections[4].services.map((service, index) => (
                                <div key={index} className="text-center mt-2 sm:mt-0 md:mt-2 lg:mt-0">
                                    <i className={`${service.icon} text-4xl border-2 p-5 rounded-full text-blue-500 hover:text-white hover:bg-blue-500 duration-500 border-blue-500`}></i>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Projects */}
                    <section className="prose mt-12">
                        <h1>Projects</h1>
                        <ProjectShowcase categories={site.sections[5].categories} projects={site.sections[5].projects}/>
                    </section>

                    {/* Testimonials */}
                    <section className="prose mt-20">
                        <h1>Testimonials</h1>
                        <TestimonialShowcase testimonials={site.sections[6].testimonials} />
                    </section>
                    </div>
                
                {/* Contact me */}
                <section className="mt-12 bg-slate-900 w-full p-8 rounded-b-lg text-white">
                    <div className="prose text-white max-w-none">
                        <h1 className="text-white">Get in touch</h1>
                        <p className="flex flex-row flex-wrap gap-x-4 justify-center w-full text-4xl">
                            <Link href="#" target="_blank"><i className="fa-solid fa-envelope text-blue-200 hover:text-blue-500 duration-300"></i></Link>
                            <Link href="#" target="_blank"><i className="fa-brands fa-facebook text-blue-200 hover:text-blue-500 duration-300"></i></Link>
                            <Link href="#" target="_blank"><i className="fa-brands fa-instagram text-blue-200 hover:text-blue-500 duration-300"></i></Link>
                            <Link href="#" target="_blank"><i className="fa-brands fa-linkedin text-blue-200 hover:text-blue-500 duration-300"></i></Link>
                            <Link href="#" target="_blank"><i className="fa-brands fa-github text-blue-200 hover:text-blue-500 duration-300"></i></Link>
                        </p>
                        <div className="text-center font-light">&copy; All rights reserved | Eport</div>
                    </div>
                </section>
                </div>
            </div>
        </main>
    )
}