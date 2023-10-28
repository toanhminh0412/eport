'use client';

// Next imports
import { useState } from "react";
import Link from "next/link";

// Local imports
import { convertToURL } from "@/helpers/helpers";

export function Navbar2Showcase({ section }) {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenuButton = () => {
        setShowMenu(prev => !prev)
    }

    return (
        <>
            <label className="cursor-pointer lg:hidden block" onClick={toggleMenuButton}>
                <svg
                    className="fill-current text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <div className={`${showMenu ? "block" : "hidden"} lg:block lg:items-center lg:w-auto w-full`}>
                <nav>
                    <ul className="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0">
                        {section.navItems.map(navItem => (
                            <li key={navItem.id} className="py-4 lg:py-6 cursor-pointer px-5">
                                {navItem.isExternal ? 
                                    <Link href={convertToURL(navItem.externalHref)} target="_blank" className="text-yellow-300 hover:pb-4 hover:border-b-4 hover:border-orange-400">{navItem.text}</Link> 
                                : 
                                    <Link href={navItem.internalHref} className="text-yellow-300 hover:pb-4 hover:border-b-4 hover:border-orange-400">{navItem.text}</Link>
                                }
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}