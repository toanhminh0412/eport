"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { checkLoggedIn } from "@/actions/client/user";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        checkLoggedIn();
    }, [])

    // Update email on type
    const updateEmail = e => {
        setEmail(() => e.target.value);
    }
    
    // Update password on type
    const updatePassword = e => {
        setPassword(() => e.target.value);
    }

    // Log user in
    const login = e => {
        e.preventDefault();
        setLoading(true);
        fetch(`/api/authenticate/login`, {
            method: 'GET',
            headers: {
                'X-forwarded-email' : email,
                'X-forwarded-password': password
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                console.log("Login successfully");
                window.location.href = "/";
            } else {
                setLoading(false);
                setErrorMsg(data.message);
                setTimeout(() => {
                    setErrorMsg('');
                }, 5000);
            }
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        })
    }

    return (
        <div className="bg-slate-100 min-h-screen mt-[-4rem]">
            <div className="flex flex-row flex-wrap text-black">
                <div className="w-full lg:w-1/2 pt-20 lg:pt-40 pl-12 h-fit">
                    <h1 className="font-semibold text-3xl lg:text-4xl">Welcome to Eport</h1>
                    <p className="text-lg lg:text-xl mt-2">Build your own website. No coding or design skill needed!</p>
                </div>
                <div className="w-full lg:w-1/2 pt-10 lg:pt-40 pl-12 lg:px-6">
                    <form className="card w-96 bg-white shadow-xl p-4" onSubmit={login}>
                    {errorMsg ? (
                    <div className="alert alert-error bg-red-300 border-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{errorMsg}</span>
                    </div>
                    ) : null}
                    <label className="label">
                        <span className="label-text">Email:</span>
                    </label>
                    <input type="email" placeholder="Email" className="input input-bordered w-full" onChange={updateEmail}/>
                    <label className="label mt-2">
                        <span className="label-text">Password:</span>
                    </label>
                    <input type="password" placeholder="Password" className="input input-bordered w-full" onChange={updatePassword}/>
                    <Link href="/forgotpassword" className="link text-blue-700 mt-4">Forgot password?</Link>
                    <p className="mt-2">Don&apos;t have an account? <Link href="/signup" className="link text-blue-700">Sign up</Link>!</p>
                    <input type="submit" value={loading? "Logging in..." : "Login"} className="btn w-fit mt-6 bg-orange-600 hover:bg-orange-800 text-white" disabled={!(email&&password) || loading}></input>
                    </form>
                </div>
            </div>
        </div>
    )
}