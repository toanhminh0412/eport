import Link from "next/link"
import Image from "next/image"

export function NavBar1({ section, publish }) {
    return (
        <div className={`fixed ${publish ? "top-0" : "top-36"} w-full z-[1000] block bg-slate-900 py-3 lg:block`}>
            <div className="px-5 md:px-10">
                <div className="mx-auto grid w-full max-w-[1400px] auto-cols-auto grid-cols-[auto_max-content] items-center justify-stretch gap-[0px] lg:grid-cols-[176px_auto]">
                    <div className="relative float-left max-[991px]:mr-auto max-[767px]:pl-0">
                        <Image src={section.logo} alt="Website logo" className="inline-block max-h-12 max-w-full" width={100} height={100}/>
                    </div>
                    <nav className="relative float-right flex place-content-between max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:hidden max-[991px]:bg-black max-[991px]:py-1 max-[991px]:text-left">
                        <div className="mx-auto flex items-start max-[991px]:flex-col lg:items-center">
                            {section.navItems.map(navItem => <div key={navItem.id} className="px-5 py-2 text-white transition hover:text-[#c9fd02] max-[991px]:block md:px-10 lg:px-4 cursor-pointer">{navItem.isExternal ? <Link href={convertToURL(navItem.externalHref)} target="_blank">{navItem.text}</Link> : <Link href={navItem.internalHref}>{navItem.text}</Link>}</div>)}
                        </div>
                        <div className="flex w-auto flex-none justify-start max-[991px]:mb-4 max-[991px]:ml-10 max-[991px]:mt-3 max-[767px]:ml-5 lg:w-44 lg:justify-end">
                        </div>
                    </nav>
                    <div className="relative dropdown dropdown-bottom dropdown-end float-right hidden cursor-pointer select-none p-3 text-2xl max-[991px]:z-[9999] max-[991px]:-mr-3 max-[991px]:block max-[991px]:text-white lg:p-[18px]" tabIndex="0">
                        <svg width="1.25rem" height="1rem" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7Z" fill="currentColor"></path>
                            <path d="M19 0H7C6.44772 0 6 0.447715 6 1C6 1.55228 6.44772 2 7 2H19C19.5523 2 20 1.55228 20 1C20 0.447715 19.5523 0 19 0Z" fill="currentColor"></path>
                            <path d="M19 14H11C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H19C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14Z" fill="currentColor"></path>
                        </svg>
                        <ul tabIndex="0" className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow bg-slate-900 rounded-box w-52">
                            {section.navItems.map(navItem => <li key={navItem.id} className="px-5 py-2 text-white transition hover:text-[#c9fd02] max-[991px]:block md:px-10 lg:px-4 cursor-pointer">{navItem.isExternal ? <Link href={convertToURL(navItem.externalHref)} target="_blank">{navItem.text}</Link> : <Link href={navItem.internalHref}>{navItem.text}</Link>}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Navbar2({ section, publish }) {
    return (
        <nav className={`fixed ${publish ? "top-0" : "top-36"} w-full z-[1000] bg-gray-800`}>
            <div className="mx-auto max-w-[1400px] px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-20 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <div className="relative dropdown dropdown-bottom hidden cursor-pointer select-none p-3 text-2xl max-[991px]:z-[9999] max-[991px]:-mr-3 max-[991px]:block max-[991px]:text-white lg:p-[18px]" tabIndex="0">
                            <svg width="1.25rem" height="1rem" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7Z" fill="currentColor"></path>
                                <path d="M19 0H7C6.44772 0 6 0.447715 6 1C6 1.55228 6.44772 2 7 2H19C19.5523 2 20 1.55228 20 1C20 0.447715 19.5523 0 19 0Z" fill="currentColor"></path>
                                <path d="M19 14H11C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H19C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14Z" fill="currentColor"></path>
                            </svg>
                            <ul tabIndex="0" className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow bg-slate-900 rounded-box w-52">
                                {section.navItems.map(navItem => <li key={navItem.id} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium cursor-pointer">{navItem.isExternal ? <Link href={convertToURL(navItem.externalHref)} target="_blank">{navItem.text}</Link> : <Link href={navItem.internalHref}>{navItem.text}</Link>}</li>)}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Image className="h-12 w-auto" src={section.logo} alt="Your Company" width={100} height={100}/>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {section.navItems.map(navItem => <div key={navItem.id} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium cursor-pointer">{navItem.isExternal ? <Link href={convertToURL(navItem.externalHref)} target="_blank">{navItem.text}</Link> : <Link href={navItem.internalHref}>{navItem.text}</Link>}</div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}