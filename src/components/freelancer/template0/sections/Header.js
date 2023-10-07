import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <section className="prose max-w-none bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${'/img/white_bg.png'})`}}>
            <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
                <div className="max-w-[720px] lg:max-w-lg">
                    <h2 className="mb-4 text-3xl font-bold md:text-5xl text-orange-400">Best caption here</h2>
                    <h3 className="text-2xl md:text-4xl mb-3">Build your website really fast with Eport. No code needed!</h3>
                    <div className="mb-6 max-w-[480px] md:mb-10 lg:mb-12">
                        <p className="text-slate-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="">
                        <Link href="facebook.com" target="_blank" className="inline-flex justify-center items-center w-12 h-12 md:w-16 md:h-16 bg-transparent rounded-full text-blue-500 border-2 border-blue-500 border-solid mr-6 mb-6 md:mb-12 ml-0 text-2xl md:text-4xl no-underline duration-200 hover:bg-blue-500 hover:text-white hover:shadow-blue-500"><i className="fa-brands fa-facebook"></i></Link>
                        <Link href="instagram.com" target="_blank" className="inline-flex justify-center items-center w-12 h-12 md:w-16 md:h-16 bg-transparent rounded-full text-pink-400 border-2 border-pink-400 border-solid mr-6 mb-6 md:mb-12 ml-0 text-2xl md:text-4xl no-underline duration-200 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white hover:shadow-pink-500"><i className="fa-brands fa-instagram"></i></Link>
                        <Link href="twitter.com" target="_blank" className="inline-flex justify-center items-center w-12 h-12 md:w-16 md:h-16 bg-transparent rounded-full text-sky-500 border-2 border-sky-500 border-solid mr-6 mb-6 md:mb-12 ml-0 text-2xl md:text-4xl no-underline duration-200 hover:bg-sky-500 hover:text-white hover:shadow-sky-500"><i className="fa-brands fa-twitter"></i></Link>
                    </div>
                    <Link href="#" className="inline-block py-3 px-4 md:py-4 md:px-[2.5rem] rounded-16 bg-orange-500 hover:bg-orange-600 hover:shadow-none shadow-orange-btn text-lg md:text-xl decoration-black tracking-widest font-semibold duration-500 no-underline mt-2 md:mt-4 mr-4">Contact</Link>
                </div>
                <div className="min-h-[400px]">
                    <Image src="/img/ava.jpg" alt="" className="mx-auto inline-block rounded-full" width={400} height={800} style={{objectFit: "contain"}}/>
                </div>
                </div>
            </div>
        </section>
    )
}