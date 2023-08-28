'use client';

import { useState, useEffect } from "react";

import { db } from "../../../public/libs/firebase";

import { getDoc, doc, updateDoc } from "firebase/firestore";
import secureLocalStorage from "react-secure-storage";
import emailjs from "@emailjs/browser";

export default function ConfirmEmail() {
    const [email, setEmail] = useState('');
    const [confirmationCode, setConfirmationCode] = useState(0);  // 6-digit code

    // Send confirmation email
    const confirmEmail = async (toEmail) => {            
        const newConfirmationCode = Math.floor(Math.random() * 1000000);
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

    useEffect(() => {
        const userEmail = secureLocalStorage.getItem('eport-email');
        setEmail(userEmail);

        // Check if user has verfied email
        // Redirect to home page if user already verifies email
        const checkEmailVerified = async () => {
            const userId = secureLocalStorage.getItem('eport-uid');
            const user = (await getDoc(doc(db, 'users', userId))).data();
            if (user.emailVerified) {
                window.location.href = '/';
                return true;
            }
            return false;
        }
        
        if (!checkEmailVerified()) {
            confirmEmail(userEmail);
        }
    }, []);

    // Check if confirmation code is correct
    const checkConfirmationCode = e => {
        const code = parseInt(e.target.value);
        if (code === confirmationCode) {
            console.log('Correct confirmation code!');
            
            // Update user's emailVerified to true
            const userId = secureLocalStorage.getItem('eport-uid');
            const userRef = doc(db, 'users', userId);
            updateDoc(userRef, {emailVerified: true});

            // Redirect to dashboard
            window.location.href = '/';
        }
    }

    return (
        <div className="relative flex flex-col justify-center">
            <div className="card w-fit h-fit max-w-sm bg-white shadow-xl mx-auto mt-40">
                <div className="card-body">
                    <p>A confirmation code has been sent to <span className='link link-primary'>{email}</span>. Please type in the code below to start using the app!</p>
                </div>
            </div>
            <div className="w-11/12 max-w-sm mx-auto mt-4 shadow-lg">
                <input type="text" placeholder="Insert code" className="input border-black w-full" onChange={checkConfirmationCode}/>
            </div>
            <div className="w-11/12 max-w-sm mx-auto mt-2">
                <button className="btn btn-accent w-full" onClick={() => confirmEmail(email)}>Resend code</button>
            </div>
        </div>
    )
}