"use client";

import Link from "next/link";
import { useState } from "react";

import { db } from "../../../public/libs/firebase";

import { collection, query, where, getDocs } from "firebase/firestore";
import emailjs from "@emailjs/browser";

export default function ForgotPasswordForm() {
    // Can only takes 3 states: 'email', 'confirmation_code', 'new_password', 'success'
    const [formState, setFormState] = useState('email');
    
    const [email, setEmail] = useState('');
    const [userId, setUserId] = useState('');  // userId is extracted from Firestore
    const [confirmationCode, setConfirmationCode] = useState(0);  // 6-digit code
    const [inputCode, setInputCode] = useState('');  // 6-digit code input by user

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [msg, setMsg] = useState('Please type in your email below to reset your password.');
    const [loading, setLoading] = useState(false);
    const [btnText, setBtnText] = useState('Submit');

    // Send confirmation email
    const confirmEmail = async (toEmail) => {            
        let newConfirmationCode = Math.floor(Math.random() * 1000000);
        if (newConfirmationCode < 100000) {
            newConfirmationCode += 100000;
        }
        setConfirmationCode(newConfirmationCode);
        const templateParams = {
            to_email: toEmail,
            confirmation_code: newConfirmationCode  // 6-digit code
        };

        try {
            await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, templateParams, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
            console.log('Confirmation email sent succcessfully!');
        } catch (error) {
            console.log('FAILED...', error);
        }
    }

    // Check if there is an account with the email
    // Send a confirmation code to the email
    const verifyEmail = async(e) => {
        e.preventDefault();
        setLoading(true);
        
        // Check if there is an account with the email
        const q = query(collection(db, "users"), where("email", "==", email));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            setMsg('No account found with this email. Please try again.');
            setLoading(false);
            return;
        }

        setUserId(querySnapshot.docs[0].id);

        // Send a confirmation code to the email
        await confirmEmail(email);
        setFormState('confirmation_code');
        setMsg('A confirmation code has been sent to your email. Please type in the code below to confirm your email.');
        setBtnText('Resend code');
        setLoading(false);
    }

    // Resend confirmation email
    const resendConfirmationEmail = async (toEmail) => {
        setBtnText('Resending...');
        setLoading(true);
        await confirmEmail(toEmail);
        setBtnText('Resend code');
        setLoading(false);
        setMsg('Resend confirmation code successfully! Please type in the code below to confirm your email.');
    };

    // Update state inputCode and check if confirmation code is correct on type
    const updateInputCode = (e) => {
        setInputCode(e.target.value);
        
        const code = parseInt(e.target.value);
        if (code === confirmationCode) {
            setMsg('Correct confirmation code! Please type in your new password below.');
            setBtnText('Update password');
            setFormState('new_password');
            setLoading(true);
        }
    }

    // Update state password and enable "Update password" button only when the two passwords match
    const updatePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value === confirmPassword) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }
    
    // Update state confirmPassword and enable "Update password" button only when the two passwords match
    const updateConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value === password) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }

    // Update user password on the backend
    const updatePasswordOnBackend = async (e) => {
        e.preventDefault();
        setLoading(true);
        setBtnText('Updating password...');

        // Update user password on backend
        try {
            const response = await fetch('/api/authenticate/change_password', {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: userId,
                    newPassword: password
                })
            })
            const data = await response.json();
            if (data.status !== 200) {
                setMsg('Fail to update user password! Please contact our team to get support.');
            } else {
                setMsg('Password changed successfully! Login with your new password.');
                setBtnText('Login');
                setFormState('success');
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setMsg('Fail to update user password! Please contact our team to get support.');
        }

        
        
    }

    if (formState === 'email') {
        return (
            <form onSubmit={verifyEmail}>
                <div className="card w-full h-fit bg-white shadow-xl mt-40">
                    <div className="card-body">
                        {msg}
                    </div>
                </div>
                <div className="w-full shadow-lg mt-4">
                    <input type="text" placeholder="Your email" className="input border-black w-full" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="w-full mt-2">
                    <input 
                        type="submit" 
                        value={btnText} 
                        className="btn btn-accent w-full" 
                        disabled={loading}></input>
                </div>
            </form>
        )
    } else if (formState === 'confirmation_code') {
        return (
            <form>
                <div className="card w-full h-fit bg-white shadow-xl mt-40">
                    <div className="card-body">
                        {/* A confirmation code has been sent to your email. Please type in the code below to confirm your email. */}
                        {msg}
                    </div>
                </div>
                <div className="w-full shadow-lg mt-4">
                    <input 
                        type="text"
                        value={inputCode} 
                        placeholder="Insert code" 
                        className="input border-black w-full"
                        onChange={updateInputCode}/>
                </div>
                <div className="w-full mt-2">
                    <button 
                        className="btn btn-accent w-full" 
                        onClick={() => resendConfirmationEmail(email)} 
                        disabled={loading}>{btnText}</button>
                </div>
            </form>
        )
    } else if (formState === 'new_password') {
        return (
            <form onSubmit={updatePasswordOnBackend}>
                <div className="card w-full h-fit bg-white shadow-xl mt-40">
                    <div className="card-body">
                        {msg}
                    </div>
                </div>
                <div className="w-full shadow-lg mt-4">
                    <input 
                        type="password"
                        value={password} 
                        placeholder="New password" 
                        className="input border-black w-full"
                        onChange={updatePassword}/>
                </div>
                <div className="w-full shadow-lg mt-2">
                    <input 
                        type="password" 
                        value={confirmPassword}
                        placeholder="Confirm new password" 
                        className="input border-black w-full"
                        onChange={updateConfirmPassword}/>
                </div>
                <div className="w-full mt-4">
                    <input 
                        type="submit" 
                        value={btnText} 
                        className="btn btn-accent w-full"
                        disabled={loading}/>
                </div>
            </form>
        )
    } else {
        return (
            <div>
                <div className="card w-full h-fit bg-white shadow-xl mt-40">
                    <div className="card-body">
                        {msg}
                    </div>
                </div>
                <div className="w-full mt-4">
                    <Link href='/login' className="btn btn-accent w-full">{btnText}</Link>
                </div>
            </div>
        )
    }
}