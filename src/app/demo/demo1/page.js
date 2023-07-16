import Image from "next/image"
import Link from "next/link";
import UpperNav from "@/components/UpperNav"
import { checkEmailVerificationAction, checkLoggedInAction } from "@/actions/server/actions";
import ProjectShowcase from "./components/ProjectShowcase";
import TestimonialShowcase from "./components/TestimonialShowcase";

export default function Demo1() {
    checkLoggedInAction();
    const user = checkEmailVerificationAction();

    // Experiences
    const experience = [
        {
            jobTitle: 'Web designer',
            company: 'Soft Company',
            startYear: 2020,
            endYear: 2023,
            description: 'Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam'
        },
        {
            jobTitle: 'Web designer',
            company: 'Soft Company',
            startYear: 2020,
            endYear: 2023,
            description: 'Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam'
        },
        {
            jobTitle: 'Web designer',
            company: 'Soft Company',
            startYear: 2020,
            endYear: 2023,
            description: 'Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam'
        }
    ]

    // Services
    const services = [
        {
            icon: 'fa-solid fa-laptop',
            title: 'Web design',
            description: 'Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore'
        },
        {
            icon: 'fa-solid fa-laptop',
            title: 'Web design',
            description: 'Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore'
        },
        {
            icon: 'fa-solid fa-laptop',
            title: 'Web design',
            description: 'Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore'
        },
        {
            icon: 'fa-solid fa-laptop',
            title: 'Web design',
            description: 'Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore'
        },
        {
            icon: 'fa-solid fa-laptop',
            title: 'Web design',
            description: 'Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore'
        },
        {
            icon: 'fa-solid fa-laptop',
            title: 'Web design',
            description: 'Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore'
        }
    ]

    // Projects
    const categories = ["All", "Design", "Development"];
    const projects = [
        {
            images: ['https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-1.jpg?alt=media&token=ede526bb-b5e2-4648-a8ab-b683e181b46a', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-4.jpg?alt=media&token=7f8dbb12-04f4-45db-9a17-9e175c9bf33e', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-2.jpg?alt=media&token=bf0a6327-f60a-492d-bf4c-60304fb13bb5', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-3.jpg?alt=media&token=193fbd36-9f41-4441-b515-86353e1b5289'],
            title: 'Web application 1',
            description: 'Donec laoreet, ligula ut ultrices rhoncus, metus leo dictum nisi, ut viverra ex odio vel mauris. Sed laoreet laoreet risus ut convallis. Donec nec facilisis augue, at rhoncus est. Aliquam eros justo, pulvinar eu tortor a, cursus auctor felis. In tincidunt mauris sollicitudin auctor pretium. Aenean auctor neque non arcu facilisis, a pulvinar turpis iaculis. Duis vel vulputate neque.',
            categories: [0, 1]
        },
        {
            images: ['https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-2.jpg?alt=media&token=bf0a6327-f60a-492d-bf4c-60304fb13bb5', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-1.jpg?alt=media&token=ede526bb-b5e2-4648-a8ab-b683e181b46a', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-3.jpg?alt=media&token=193fbd36-9f41-4441-b515-86353e1b5289', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-4.jpg?alt=media&token=7f8dbb12-04f4-45db-9a17-9e175c9bf33e'],
            title: 'Web application 2',
            description: 'Donec laoreet, ligula ut ultrices rhoncus, metus leo dictum nisi, ut viverra ex odio vel mauris. Sed laoreet laoreet risus ut convallis. Donec nec facilisis augue, at rhoncus est. Aliquam eros justo, pulvinar eu tortor a, cursus auctor felis. In tincidunt mauris sollicitudin auctor pretium. Aenean auctor neque non arcu facilisis, a pulvinar turpis iaculis. Duis vel vulputate neque.',
            categories: [0, 1]
        },
        {
            images: ['https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-3.jpg?alt=media&token=193fbd36-9f41-4441-b515-86353e1b5289', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-1.jpg?alt=media&token=ede526bb-b5e2-4648-a8ab-b683e181b46a', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-2.jpg?alt=media&token=bf0a6327-f60a-492d-bf4c-60304fb13bb5', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-4.jpg?alt=media&token=7f8dbb12-04f4-45db-9a17-9e175c9bf33e'],
            title: 'Web application 3',
            description: 'Donec laoreet, ligula ut ultrices rhoncus, metus leo dictum nisi, ut viverra ex odio vel mauris. Sed laoreet laoreet risus ut convallis. Donec nec facilisis augue, at rhoncus est. Aliquam eros justo, pulvinar eu tortor a, cursus auctor felis. In tincidunt mauris sollicitudin auctor pretium. Aenean auctor neque non arcu facilisis, a pulvinar turpis iaculis. Duis vel vulputate neque.',
            categories: [0, 2]
        },
        {
            images: ['https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-4.jpg?alt=media&token=7f8dbb12-04f4-45db-9a17-9e175c9bf33e', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-1.jpg?alt=media&token=ede526bb-b5e2-4648-a8ab-b683e181b46a', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-2.jpg?alt=media&token=bf0a6327-f60a-492d-bf4c-60304fb13bb5', 'https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fportfolio-new-3.jpg?alt=media&token=193fbd36-9f41-4441-b515-86353e1b5289'],
            title: 'Web application 4',
            description: 'Donec laoreet, ligula ut ultrices rhoncus, metus leo dictum nisi, ut viverra ex odio vel mauris. Sed laoreet laoreet risus ut convallis. Donec nec facilisis augue, at rhoncus est. Aliquam eros justo, pulvinar eu tortor a, cursus auctor felis. In tincidunt mauris sollicitudin auctor pretium. Aenean auctor neque non arcu facilisis, a pulvinar turpis iaculis. Duis vel vulputate neque.',
            categories: [0, 2]
        }
    ]

    // Testimonials
    const testimonials = [
        {
            name: 'Catherine Oliver',
            job: 'Lawyer',
            content: 'Integer sollicitudin fringilla tellus, id viverra urna dignissim suscipit. Praesent ut leo at lectus tincidunt aliquam. Curabitur non enim sed est lacinia congue. Nunc ante ex, convallis quis metus id, euismod consectetur mi. Aliquam erat volutpat. Aenean sit amet eros eu erat imperdiet ultricies. Mauris a blandit urna.'
        },
        {
            name: 'Louella Kim',
            job: 'Marketing manager',
            content: 'Donec laoreet, ligula ut ultrices rhoncus, metus leo dictum nisi, ut viverra ex odio vel mauris. Sed laoreet laoreet risus ut convallis. Donec nec facilisis augue, at rhoncus est. Aliquam eros justo, pulvinar eu tortor a, cursus auctor felis. In tincidunt mauris sollicitudin auctor pretium. Aenean auctor neque non arcu facilisis, a pulvinar turpis iaculis. Duis vel vulputate neque.'
        },
        {
            name: 'Catherine Oliver',
            job: 'Lawyer',
            content: 'Integer sollicitudin fringilla tellus, id viverra urna dignissim suscipit. Praesent ut leo at lectus tincidunt aliquam. Curabitur non enim sed est lacinia congue. Nunc ante ex, convallis quis metus id, euismod consectetur mi. Aliquam erat volutpat. Aenean sit amet eros eu erat imperdiet ultricies. Mauris a blandit urna.'
        },
        {
            name: 'Louella Kim',
            job: 'Marketing manager',
            content: 'Donec laoreet, ligula ut ultrices rhoncus, metus leo dictum nisi, ut viverra ex odio vel mauris. Sed laoreet laoreet risus ut convallis. Donec nec facilisis augue, at rhoncus est. Aliquam eros justo, pulvinar eu tortor a, cursus auctor felis. In tincidunt mauris sollicitudin auctor pretium. Aenean auctor neque non arcu facilisis, a pulvinar turpis iaculis. Duis vel vulputate neque.'
        }
    ]

    return (
        <main className="bg-slate-100 w-screen h-full pb-10">
            <UpperNav/>
            <div className="inset-x-0 w-11/12 mx-auto flex flex-row min-h-screen gap-x-3 flex-wrap md:flex-nowrap">
                <div className="card h-[90vh] w-full md:w-[40%] lg:w-1/3 bg-white mt-[2vh]">
                    <div className="card-body p-8 text-center">
                        <figure className="relative w-10/12 max-w-sm aspect-square mx-auto mt-4 rounded"><Image src="https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fprofile-new.jpg?alt=media&token=47be1e13-26e6-4416-afa5-205f1d5635b7" alt="Profile picture" fill style={{objectFit: "contain"}}/></figure>
                        <h1 className="font-bold text-4xl mt-4">John Doe</h1>
                        <div className="text-2xl font-normal text-slate-500">Web developer</div>
                        <div className="flex w-10/12 mx-auto mt-auto">
                            <div className="w-5/12 text-center">Download CV</div>
                            <div className="w-2/12 text-center text-slate-200">|</div>
                            <div className="w-5/12 text-center">Download CV</div>
                        </div>
                    </div>
                </div>
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
                        {experience.map((exp, index) => (
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
                            {services.map((service, index) => (
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
                        <ProjectShowcase categories={categories} projects={projects}/>
                    </section>

                    {/* Testimonials */}
                    <section className="prose mt-20">
                        <h1>Testimonials</h1>
                        <TestimonialShowcase testimonials={testimonials} />
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