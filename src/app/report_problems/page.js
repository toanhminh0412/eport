// Next imports
import Link from "next/link"

export default function ReportProblems() {
    return (
        <section>
            <div className="px-5 py-16 md:px-10 md:py-24 lg:py-32r">
                <div className="mx-auto w-full max-w-7xl px-4 py-32 text-center">
                    <h2 className="mb-4 text-3xl font-bold md:text-5xl max-w-2xl mx-auto">Have trouble with the site? Please contact us!</h2>
                    <p className="mx-auto mb-6 max-w-xl text-sm text-[#636262] sm:text-base md:mb-12">We will response within 1 business day. Thank you for your patience!</p>
                    <div className="mx-auto">
                        <ul className="flex flex-wrap justify-center gap-6 items-center">
                            <li className="w-[165px]">
                                <Link href="mailto:support@eport.site" target="_blank" className="flex items-center gap-4 rounded-lg bg-blue-500 px-8 py-4 font-bold text-white transition hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-400">
                                    <i className="fa-regular fa-envelope text-xl"></i>
                                    <p className="text-white text-sm sm:text-base">Email</p>
                                </Link>
                            </li>
                            <li className="w-[165px]">
                                <Link href="https://www.facebook.com/eportsite" target="_blank" className="flex items-center gap-4 rounded-lg bg-blue-500 px-6 py-4 font-bold text-white transition hover:bg-blue-600">
                                    <i className="fa-brands fa-facebook text-xl"></i>
                                    <p className="text-white text-sm sm:text-base">Facebook</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}