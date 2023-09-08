import PlansDisplay from "@/components/ui/plans_display/PlansDisplay"
import Link from "next/link"

export default function Features() {
    return (
        <div className="prose max-w-none scroll-smooth">
            <div className="hero h-220 bg-[url('/img/header-bg.jpg')]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-4xl md:text-6xl font-bold text-white">What is Eport?</h1>
                        <p className="mb-5 text-lg md:text-2xl"><strong className="text-blue-500">Eport</strong> is an easy website builder for job seekers who need to build a website as quickly and easily as possible to show their works and information.</p>
                        <Link href="#pricing" className="inline-block py-4 px-[2.5rem] rounded-16 bg-blue-500 hover:bg-blue-600 hover:shadow-none shadow-blue-btn text-xl decoration-black tracking-widest font-semibold duration-500 no-underline mt-4">Pricing</Link>
                    </div>
                </div>
            </div>

            <div className="py-3">
                <h1 className="mt-12 text-2xl md:text-4xl text-center">Why Choose Us</h1>
                <div className="flex flex-row flex-wrap justify-center gap-4 text-lg px-4 mt-12">
                    <div>
                        <div className="flex flex-col items-center p-2 mb-2 sm:w-72 lg:w-96">
                            <div>
                                <div className="inline-flex justify-center items-center text-black"><i className="fa-regular fa-money-bill-1 text-5xl md:text-6xl"></i></div>
                            </div>
                            <h2 className="text-black mt-6 text-center text-lg md:text-xl font-normal"><strong>Cheapest</strong> way to build a website</h2>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-center p-2 mb-2 sm:w-72 lg:w-96">
                            <div>
                                <div className="inline-flex justify-center items-center text-black"><i className="fa-solid fa-user-tie text-5xl md:text-6xl"></i></div>
                            </div>
                            <h2 className="text-black mt-6 text-center text-lg md:text-xl font-normal"><strong>Professional</strong> website with ease</h2>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-center p-2 mb-2 sm:w-72 lg:w-96">
                            <div>
                                <div className="inline-flex justify-center items-center text-black"><i className="fa-solid fa-thumbs-up text-5xl md:text-6xl"></i></div>
                            </div>
                            <h2 className="text-black mt-6 text-center text-lg md:text-xl font-normal"><strong>Impress</strong> employers</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full flex flex-col justify-center bg-blue-100 pb-40 md:pb-12" id="pricing">
                <h1 className="mt-12 text-3xl md:text-5xl text-center text-black">Pricing</h1>
                <PlansDisplay mode="showcase"/>
            </div>
        </div>
    )
}