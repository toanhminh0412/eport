// Next imports
import Link from "next/link";
import Image from "next/image";

// Local imports
import TemplatesGallery from "./TemplatesGallery";

export const metadata = {
    title: 'Eport - Features',
    description: 'Eport is the easiest way for job seekers to build a website to show their works and information.',
    alternates: {
        canonical: 'https://eport.site/features',
    }
}

export default function Features() {
    return (  
        <section className="prose max-w-none">
            <div className="bg-sky-100">
                <div className="mx-auto w-full max-w-7xl pt-20 pb-16 px-5 md:px-10 md:pb-24 lg:pb-32">
                    <div className="grid grid-cols-1 items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
                        <div className="flex flex-col">
                            <h1 className="mb-6 text-4xl font-bold md:text-6xl "><span className="text-orange-500">Eport</span> Website</h1>
                            <p className="mb-6 max-w-lg text-base text-[#636262] md:mb-10 lg:mb-12">The cheapest way to unlock your creative potential and showcase your journey where your vision meets innovation, and your journey becomes your masterpiece!</p>
                            <div className="mb-4 flex items-center md:mb-10 lg:mb-8 not-prose">
                                <Link href="/" className="mr-6 rounded-md bg-black px-6 py-3 text-center font-semibold text-white lg:mr-8">Get Started</Link>
                            </div>
                            <div className="mb-4 flex items-center md:mb-10 lg:mb-8 not-prose">
                                <Link href="#eresume-demo-video" className="flex items-center justify-center rounded-md border border-solid border-black px-6 py-3 font-bold text-black mr-5">
                                    <i className="fa-solid fa-arrow-up-right-from-square text-xl mr-2"></i>
                                    <p className="text-sm text-black sm:text-base">Eresume Demo Video</p>
                                </Link>
                                <Link href="#freelancer-demo-video" className="flex items-center justify-center rounded-md border border-solid border-black px-6 py-3 font-bold text-black">
                                    <i className="fa-solid fa-arrow-up-right-from-square text-xl mr-2"></i>
                                    <p className="text-sm text-black sm:text-base">Freelancer Demo Video</p>
                                </Link>
                            </div>
                            <div className="flex items-center not-prose">
                                <p className="text-lg sm:text-xl">Follow Us</p>
                                <div className="ml-4 mr-4 w-16 [border-top:1px_solid_rgb(0,_0,_0)]"></div>
                                <div className="">
                                    {/* Facebook */}
                                    <Link href="https://www.facebook.com/eportsite" target="_blank" className="inline-block h-[60px] w-[60px] py-0.5 mb-3 float-left my-0 mx-1 bg-white rounded-full cursor-pointer shadow-lg overflow-hidden ease-out transition-all duration-300 group hover:w-[190px]">
                                        <div className="inline-block h-[60px] w-[60px] rounded-full box-border leading-[60px] text-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white"><i className="fa-brands fa-facebook-f text-2xl"></i></div>
                                        <span className="text-xl font-medium ml-3">Facebook</span>
                                    </Link>

                                    {/* Instagram */}
                                    <Link href="https://www.instagram.com/eportsite" target="_blank" className="inline-block h-[60px] w-[60px] py-0.5 mb-3 float-left my-0 mx-1 bg-white rounded-full cursor-pointer shadow-lg overflow-hidden ease-out transition-all duration-300 group hover:w-[190px]">
                                        <div className="inline-block h-[60px] w-[60px] rounded-full box-border leading-[60px] text-center text-pink-400 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 group-hover:text-white"><i className="fa-brands fa-instagram text-2xl"></i></div>
                                        <span className="text-xl font-medium ml-3">Instagram</span>
                                    </Link>

                                    {/* LinkedIn */}
                                    <Link href="https://www.linkedin.com/company/eport" target="_blank" className="inline-block h-[60px] w-[60px] py-0.5 mb-3 float-left my-0 mx-1 bg-white rounded-full cursor-pointer shadow-lg overflow-hidden ease-out transition-all duration-300 group hover:w-[190px]">
                                        <div className="inline-block h-[60px] w-[60px] rounded-full box-border leading-[60px] text-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white"><i className="fa-brands fa-linkedin-in text-2xl"></i></div>
                                        <span className="text-xl font-medium ml-3">LinkedIn</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Image src="/img/featuretest3.png" alt="" className="inline-block h-full w-full max-w-[640px]" width={1000} height={1000}/>
                    </div>
                </div>
            </div>
            
            {/* Eresume Demo Video */}
            <div id="eresume-demo-video" className="mx-auto w-full max-w-7xl px-5 md:px-10 py-10">
                <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold md:text-5xl">Demo Video - <span className="text-orange-500">Eresume</span></h2>
                <p className="mx-auto mb-5 -mt-4 max-w-lg text-center text-sm text-[#636262] md:text-base">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna</p>
                
                {/* Video */}
                <Image src="/img/freelancer-template0-header2-thumbnail.png" alt="" className="inline-block h-full w-full object-cover" width={500} height={400}/>
            </div>

            {/* Freelancer Demo Video */}
            <div id="freelancer-demo-video" className="mx-auto w-full max-w-7xl px-5 md:px-10 py-10">
                <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold md:text-5xl">Demo Video - <span className="text-orange-500">Freelancer</span></h2>
                <p className="mx-auto mb-5 -mt-4 max-w-lg text-center text-sm text-[#636262] md:text-base">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna</p>
                
                {/* Video */}
                <Image src="/img/freelancer-template0-header2-thumbnail.png" alt="" className="inline-block h-full w-full object-cover" width={500} height={400}/>
            </div>

            {/* Image Gallery */}
            <div className="bg-black">
                <div className="mx-auto max-w-7xl px-5 py-16 md:px-10">
                    <div className="mx-auto w-full max-w-3xl">
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold md:text-5xl text-white">Website Templates</h2>
                            <p className="mx-auto mb-8 mt-4 max-w-[528px] text-white md:mb-12 lg:mb-16">Simplify your web design journey with our templates at no cost.</p>
                        </div>
                    </div>

                    <div className="mx-auto">
                        <TemplatesGallery/>
                    </div>
                </div>
            </div>

            {/* Tutorials */}
            <div className="py-12 md:py-16 lg:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
                <div className="mx-auto flex-col flex max-w-7xl items-center text-center">
                    <h2 className="font-bold text-3xl md:text-5xl">Build a website with 4 easy steps!</h2>
                    <div className="mx-auto -mt-10 max-w-[528px]">
                        <p className="text-slate-700 max-[479px]:text-sm">Follow these steps to create a beautiful website of your own!</p>
                    </div>
                    <div className="mb-4 flex items-center md:mb-10 lg:mb-8 not-prose">
                        <Link href="/" className="mr-6 rounded-md bg-black px-6 py-3 text-center font-semibold text-white lg:mr-8">Get Started</Link>
                    </div>
                </div>
                <div className="mx-auto grid-cols-1 grid max-w-xl gap-6 not-prose">
                    <div className="flex-row flex items-center bg-slate-200 px-6 py-4 max-[767px]:max-w-[480px] rounded-sm">
                        <div className="mr-6 flex-col flex-none flex items-center justify-center bg-white rounded-sm h-14 w-14">
                            <p className="font-bold text-sm sm:text-xl">1</p>
                        </div>
                        <p className="max-[479px]:text-sm">Sign up to <strong>Eport</strong> and start your new project.</p>
                    </div>
                    <div className="flex-row flex items-center bg-slate-200 px-6 py-4 max-[767px]:max-w-[480px] rounded-sm">
                        <div className="mr-6 flex-col flex-none flex items-center justify-center bg-white rounded-sm h-14 w-14">
                            <p className="font-bold text-sm sm:text-xl">2</p>
                        </div>
                        <p className="max-[479px]:text-sm">Select a template that aligns with your brand, content, and the overall look and feel you want for your site.</p>
                    </div>
                    <div className="flex-row flex items-center bg-slate-200 px-6 py-4 max-[767px]:max-w-[480px] rounded-sm">
                        <div className="mr-6 flex-col flex-none flex items-center justify-center bg-white rounded-sm h-14 w-14">
                            <p className="font-bold text-sm sm:text-xl">3</p>
                        </div>
                        <p className="max-[479px]:text-sm">Customize various elements of your website.</p>
                    </div>
                    <div className="flex-row flex items-center bg-slate-200 px-6 py-4 max-[767px]:max-w-[480px] rounded-sm">
                        <div className="mr-6 flex-col flex-none flex items-center justify-center bg-white rounded-sm h-14 w-14">
                            <p className="font-bold text-sm sm:text-xl">4</p>
                        </div>
                        <p className="max-[479px]:text-sm">Publish your website to make it accessible to the public.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}