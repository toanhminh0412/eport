"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { checkLoggedIn } from "@/actions/client/user";

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [successMsg, setSucessMsg] = useState('');
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

    // Update confirm password on type
    const updateConfirmPassword = e => {
        setConfirmPassword(() => e.target.value);

        // Flash an error if confirm password is different from password
        if (e.target.value !== password && !errorMsg) {
            setErrorMsg("Passwords don't match!");
        } else if (e.target.value === password && errorMsg) {
            setErrorMsg('');
        }
    }

    // Sign up user with email and password
    const signUp = e => {
        e.preventDefault();
        setLoading(true);
        fetch('/api/authenticate/signup', {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                const newEmail = data.newEmail;
                window.location.href = '/confirm_email';
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
        <div className="bg-slate-100 min-h-screen pb-20 mt-[-4rem]">
            <div className="flex flex-row flex-wrap">
                <div className="w-full lg:w-1/2 pt-20 lg:pt-40 pl-12 h-fit">
                    <h1 className="font-semibold text-3xl lg:text-4xl">Welcome to Eport</h1>
                    <p className="text-lg lg:text-xl mt-2">Build your own website. No coding or design skill needed!</p>
                </div>
                <div className="w-full lg:w-1/2 pt-10 lg:pt-40 pl-12 lg:px-6">
                    <form className="card w-96 bg-white shadow-xl p-4" onSubmit={signUp}>
                        {successMsg ? (
                        <div className="alert alert-success bg-green-300 border-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{successMsg}</span>
                        </div>
                        ) : null}
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
                        <label className="label mt-2">
                            <span className="label-text">Confirm password:</span>
                        </label>
                        <input type="password" placeholder="Confirm password" className="input input-bordered w-full" onChange={updateConfirmPassword}/>
                        <p className="mt-4">Already have an account? <Link href="/login" className="link text-blue-700">Login</Link>!</p>
                        <input type="submit" value={loading ? "Signing up..." : "Signup"} className={`btn w-fit mt-6 bg-orange-600 hover:bg-orange-800 text-white`} disabled={(!(email && password && confirmPassword && (password === confirmPassword)))||loading }></input>
                    </form>
                </div>
            </div>
        </div>
    )
}