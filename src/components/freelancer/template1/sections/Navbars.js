// Next imports
import Link from "next/link"

export function Navbar1() {
    return (
        <div className="navbar bg-black/50 z-10 lg:absolute w-full min-w-[450px]">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href="#">About me</Link></li>
                    <li><Link href="#">Services</Link></li>
                    <li><Link href="#">Portfolio</Link></li>
                </ul>
                </div>
                <div className="btn btn-ghost normal-case text-xl text-white">John Doe</div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    <li><Link href="#">About me</Link></li>
                    <li><Link href="#">Services</Link></li>
                    <li><Link href="#">Portfolio</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link href="#" className="btn">Contact me</Link>
            </div>
        </div>
    )
}