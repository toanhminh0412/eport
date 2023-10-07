import Link from "next/link"

export default function Contact() {
    return ( 
        <section className="prose max-w-none px-5 md:px-10">
            <div className="mx-auto w-full max-w-7xl">
                <div className="py-16 md:py-24 lg:py-32">
                    <div className="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
                        <div className="flex flex-col items-start max-[991px]:max-w-[720px]">
                            <h2 className="font-bold mb-2 text-3xl md:text-5xl">Let's build something exciting together!</h2>
                            <div className="ml-0 mr-0 mt-4 max-w-[528px] pb-4 mb-5 md:mb-6 lg:mb-8">
                                <p className="text-lg sm:text-2xl"><i className="fa-solid fa-phone text-orange-500 mr-3"></i>1234567890</p>
                                <p className="text-lg sm:text-2xl"><i className="fa-solid fa-envelope text-orange-500 mr-3"></i>support@eport.site</p>
                                <div className="">
                                    <Link href="facebook.com" target="_blank" className="inline-flex justify-center items-center w-12 h-12 md:w-16 md:h-16 bg-transparent rounded-full text-blue-500 border-2 border-blue-500 border-solid mr-6 mb-6 md:mb-12 ml-0 text-2xl md:text-4xl no-underline duration-200 hover:bg-blue-500 hover:text-white hover:shadow-blue-500"><i className="fa-brands fa-facebook"></i></Link>
                                    <Link href="instagram.com" target="_blank" className="inline-flex justify-center items-center w-12 h-12 md:w-16 md:h-16 bg-transparent rounded-full text-pink-400 border-2 border-pink-400 border-solid mr-6 mb-6 md:mb-12 ml-0 text-2xl md:text-4xl no-underline duration-200 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 hover:text-white hover:shadow-pink-500"><i className="fa-brands fa-instagram"></i></Link>
                                    <Link href="twitter.com" target="_blank" className="inline-flex justify-center items-center w-12 h-12 md:w-16 md:h-16 bg-transparent rounded-full text-sky-500 border-2 border-sky-500 border-solid mr-6 mb-6 md:mb-12 ml-0 text-2xl md:text-4xl no-underline duration-200 hover:bg-sky-500 hover:text-white hover:shadow-sky-500"><i className="fa-brands fa-twitter"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto max-w-[608px] bg-slate-200 px-8 max-[991px]:ml-0 max-[991px]:mr-0 pt-[2em] pb-8">
                            <div className="text-center">
                                <h1 className="font-bold text-3xl md:text-5xl">Contact <span className="text-orange-500">Us</span></h1>
                                <div className="mx-auto mt-4 max-w-[480px] mb-5 md:mb-6 lg:mb-8">
                                    <div className="text-sm text-slate-700">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna</div>
                                </div>
                                <div className="mx-auto w-full max-w-[400px]">
                                    <div className="mx-auto max-w-[400px] text-left mb-4">
                                        <form name="wf-form-password" method="get">
                                            <div className="relative">
                                                <label className="mb-1 font-medium">Your Name</label>
                                                <input type="text" className="m-0 mb-4 block w-full bg-white align-middle text-black text-sm px-3 h-9 py-6 pl-4" maxLength="256" name="name-2" placeholder="" required=""/>
                                            </div>
                                            <div className="relative mb-2">
                                                <label className="mb-1 font-medium">Email Address</label>
                                                <input type="email" className="m-0 mb-4 block w-full bg-white align-middle text-black text-sm px-3 h-9 py-6 pl-4" maxLength="256" name="name-2" placeholder="" required=""/>
                                            </div>
                                            <div className="relative mb-2">
                                                <label className="mb-1 font-medium">Subject</label>
                                                <input type="email" className="m-0 mb-4 block w-full bg-white align-middle text-black text-sm px-3 h-9 py-6 pl-4" maxLength="256" name="name-2" placeholder="" required=""/>
                                            </div>
                                            <div className="relative mb-5 md:mb-6 lg:mb-8">
                                                <label className="mb-1 font-medium">Message</label>
                                                <textarea placeholder="" maxLength="5000" name="field" className="m-0 block h-auto min-h-[128px] w-full overflow-auto bg-white align-middle text-black text-sm mb-2.5 px-3 py-2 pl-4"/>
                                            </div>
                                            <input type="submit" defaultValue="Send Message" className="m-0 inline-block w-full cursor-pointer bg-orange-500 px-6 py-4 text-center font-semibold text-white transition [box-shadow:rgb(253,_186,_116)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"></input>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}