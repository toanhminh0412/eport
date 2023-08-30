'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { db } from "../../../public/libs/firebase";

import { doc, updateDoc } from "firebase/firestore";
import secureLocalStorage from "react-secure-storage";
import emailjs from "@emailjs/browser";

export default function EmailConfirmForm({email}) {
    const router = useRouter();
    const [confirmationCode, setConfirmationCode] = useState(0);  // 6-digit code
    const [message, setMessage] = useState('');

    // 'Resend button controller'
    const [btnText, setBtnText] = useState('Resend code');
    const [btnDisabled, setBtnDisabled] = useState(false);

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

    // Resend confirmation email
    const resendConfirmationEmail = async (toEmail) => {
        setBtnText('Resending...');
        setBtnDisabled(true);
        await confirmEmail(toEmail);
        setBtnText('Resend code');
        setBtnDisabled(false);
        setMessage('Resend confirmation code successfully!');
        setTimeout(() => {
            setMessage('');
        }, 5000);
    };

    useEffect(() => {
        confirmEmail(email);
    }, []);

    // Check if confirmation code is correct
    const checkConfirmationCode = async (e) => {
        const code = parseInt(e.target.value);
        if (code === confirmationCode) {
            console.log('Correct confirmation code!');
            setMessage('Correct confirmation code! Redirecting to dashboard...');
            setBtnText('Redirecting...');
            setBtnDisabled(true);
            
            // Update user's emailVerified to true
            const userId = secureLocalStorage.getItem('eport-uid');
            const userRef = doc(db, 'users', userId);
            await updateDoc(userRef, {emailVerified: true});

            // TEMPORARY FIX: Prevent page from redirecting to the login page after confirming email 
            // Force update user cookies on the backend
            await fetch('/api/authenticate/set_user_cookie', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: userId
                })
            })

            // Redirect to dashboard
            router.push('/');
        }
    }

    return (
        <form className="w-11/12 max-w-sm mx-auto">
            {message ? <div className="alert alert-info w-full mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>{message}</span>
            </div> : null}
            <div className="w-full shadow-lg mt-4">
                <input type="text" placeholder="Insert code" className="input border-black w-full" onChange={checkConfirmationCode}/>
            </div>
            <div className="w-full mt-2">
                <button 
                    className="btn btn-accent w-full" 
                    onClick={() => resendConfirmationEmail(email)} 
                    disabled={btnDisabled}>{btnText}</button>
            </div>
        </form>
    )
}