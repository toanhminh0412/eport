// Next imports
import Link from "next/link";
import { headers } from "next/headers";

export default function Footer({isLoggedIn = true}) {
    const headersList = headers();
    const activePath = headersList.get("x-invoke-path");

    // Don't show footer on dashboard pages
    if (activePath && activePath.includes("dashboard")) {
        return null;
    }

    return (
        <footer className="bg-gradient-to-r from-cyan-500 to-blue-500 box-border absolute bottom-0 w-full h-fit pt-2">
            <div className="max-w-screen-xl m-auto">
                <div className="flex flex-wrap">
                    <div className="w-1/3 px-4 py-0 mt-8">
                        <h3 className="text-xl text-white relative before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:bg-red-500 before:h-[2px] before:box-border before:w-[50px]">About</h3>
                        <ul className="list-none px-0 py-8">
                            <li className="mb-2"><Link href="/features" className="text-lg text-slate-200 no-underline block duration-300 hover:pl-[10px] hover:text-white">Our Feature</Link></li>
                            <li className="mb-2"><Link href="/features#pricing" className="text-lg text-slate-200 no-underline block duration-300 hover:pl-[10px] hover:text-white">Pricing</Link></li>
                        </ul>
                    </div>
                    
                    {isLoggedIn ?
                    <div className="w-1/3 px-4 py-0 mt-8">
                        <h3 className="text-xl text-white relative before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:bg-red-500 before:h-[2px] before:box-border before:w-[50px]">Menu</h3>
                        <ul className="list-none px-0 py-8">
                            <li className="mb-2"><Link href="/" className="text-lg text-slate-200 no-underline block duration-300 hover:pl-[10px] hover:text-white">Dashboard</Link></li>
                        </ul>
                    </div>
                    :null}

                    <div className="w-1/3 px-4 py-0 mt-8">
                        <h3 className="text-xl text-white relative before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:bg-red-500 before:h-[2px] before:box-border before:w-[50px]">Contact</h3>
                        <div className="px-0 py-8">
                            <Link href="https://www.facebook.com/eportsite" target="_blank" className="inline-block h-10 w-10 text-xl bg-slate-500 mt-0 mr-6 mb-2 ml-0 text-center leading-10 rounded-full text-white duration-500 hover:text-black hover:bg-white"><i className="fa-brands fa-facebook"></i></Link>
                            <Link href="https://www.instagram.com/eportsite" target="_blank" className="inline-block h-10 w-10 text-xl bg-slate-500 mt-0 mr-6 mb-2 ml-0 text-center leading-10 rounded-full text-white duration-500 hover:text-black hover:bg-white"><i className="fa-brands fa-instagram"></i></Link>
                            <Link href="https://www.linkedin.com/company/eport" target="_blank" className="inline-block h-10 w-10 text-xl bg-slate-500 mt-0 mr-6 mb-2 ml-0 text-center leading-10 rounded-full text-white duration-500 hover:text-black hover:bg-white"><i className="fa-brands fa-linkedin"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="text-center mx-2">
                    <div className="inline-block text-3xl mt-0 mr-6 mb-2 ml-0 text-white"><i className="fa-brands fa-cc-visa"></i></div>
                    <div className="inline-block text-3xl mt-0 mr-6 mb-2 ml-0 text-white"><i className="fa-brands fa-cc-mastercard"></i></div>
                    <div className="inline-block text-3xl mt-0 mr-6 mb-2 ml-0 text-white"><i className="fa-brands fa-cc-amex"></i></div>
                    <div className="inline-block text-3xl mt-0 mr-6 mb-2 ml-0 text-white"><i className="fa-brands fa-cc-discover"></i></div>
                    <div className="inline-block text-3xl mt-0 mr-6 mb-2 ml-0 text-white"><i className="fa-brands fa-cc-diners-club"></i></div>
                    <div className="inline-block text-3xl mt-0 mr-6 mb-2 ml-0 text-white"><i className="fa-brands fa-cc-jcb"></i></div>
                    <div className="inline-block text-3xl mt-0 mr-6 mb-2 ml-0 text-white"><i className="fa-brands fa-google-pay"></i></div>
                </div>
                <div className="text-white text-lg mb-3 text-center">© Copyright Eport (2023)</div>
            </div>
        </footer>
    )
}