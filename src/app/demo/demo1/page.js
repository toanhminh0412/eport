import Image from "next/image"
import UpperNav from "@/components/UpperNav"

export default function Demo1() {
    return (
        <main className="bg-slate-100 w-screen h-full">
            <UpperNav/>
            <div className="inset-x-0 w-11/12 mx-auto flex flex-row min-h-screen gap-x-3 flex-wrap md:flex-nowrap">
                <div className="card h-[90vh] w-full md:w-[40%] lg:w-1/3 bg-white mt-[2vh]">
                    <div className="card-body p-8 text-center">
                        <figure className="relative w-10/12 max-w-sm aspect-square mx-auto mt-4 rounded"><Image src="/demo1/img/profile.jpg" alt="Shoes" fill/></figure>
                        <h1 className="font-bold text-4xl mt-4">John Doe</h1>
                        <div className="text-2xl font-normal text-slate-500">Web developer</div>
                        <div className="flex w-10/12 mx-auto mt-auto">
                            <div className="w-5/12 text-center">Download CV</div>
                            <div className="w-2/12 text-center text-slate-200">|</div>
                            <div className="w-5/12 text-center">Download CV</div>
                        </div>
                    </div>
                </div>
                <div className="card min-h-screen w-full md:w-[60%] lg:w-2/3 bg-white mt-[2vh] p-8">
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
                </div>
            </div>
        </main>
    )
}