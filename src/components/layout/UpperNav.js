'use client';

import Link from "next/link"
import { useEffect, useState} from "react";

export default function UpperNav({isLoggedIn = true}) {
  const [currentPath, setCurrentPath] = useState();
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div className="fixed top-0 z-40 navbar bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg text-white">
      <div className="navbar-start">
        {loggedIn ?
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-r from-cyan-500 to-blue-500 rounded-box w-52">
            <li><Link href="/" className={`${currentPath === '/' ? 'font-semibold active' : ''} hover:font-bold duration-75`} onClick={() => {setCurrentPath('/')}}>Dashboard</Link></li>
            <li><Link href="/features" className={`${currentPath === '/features' ? 'font-semibold active' : ''} hover:font-bold duration-75`} onClick={() => {setCurrentPath('/features')}}>Features</Link></li>
          </ul>
        </div>
        :
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-r from-cyan-500 to-blue-500 rounded-box w-52">
            <li><Link href="/features" className={`${currentPath === '/features' ? 'font-semibold active' : ''} hover:font-bold duration-75`} onClick={() => {setCurrentPath('/features')}}>Features</Link></li>
          </ul>
        </div>}
        
        <Link href={loggedIn ? '/' : '/login'} className="btn btn-ghost normal-case text-xl" onClick={() => {setCurrentPath('/')}}>Eport</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {loggedIn ? 
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/" className={`${currentPath === '/' ? 'font-semibold active' : ''} hover:font-bold duration-75`} onClick={() => {setCurrentPath('/')}}>Dashboard</Link></li>
          <li><Link href="/features" className={`${currentPath === '/features' ? 'font-semibold active' : ''} hover:font-bold duration-75`} onClick={() => {setCurrentPath('/features')}}>Features</Link></li>
        </ul>
        : 
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/features" className={`${currentPath === '/features' ? 'font-semibold active' : ''} hover:font-bold duration-75`} onClick={() => {setCurrentPath('/features')}}>Features</Link></li>
        </ul>}
        
      </div>
      <div className="navbar-end">
        {loggedIn ? 
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-primary m-1">My account</label>
          <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow text-black bg-white rounded-box w-fit min-w-[10rem]">
            <li><label onClick={() => window.change_password_modal.showModal()}>Change password</label></li>
            <li><Link href="/api/authenticate/logout" prefetch={false} onClick={() => {setCurrentPath('/login'); setLoggedIn(false)}}>Logout</Link></li>
          </ul>
        </div>
        :
        <Link href='/login' className="btn btn-primary" onClick={() => {setCurrentPath('/login')}} prefetch={false}>Login</Link>}
      </div>
    </div>
  )
}