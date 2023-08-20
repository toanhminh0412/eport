"use client";

import { useState } from "react";

export default function ChangePasswordModal() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [successMsg, setSucessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    // Update current password on type
    const updateCurrentPassword = e => {
        setCurrentPassword(() => e.target.value);
    };

    // Update new password on type
    const updateNewPassword = e => {
        setNewPassword(() => e.target.value);
    }

    // Update confirm password on type
    const updateConfirmPassword = e => {
        setConfirmPassword(() => e.target.value);

        // Flash an error if confirm password is different from password
        if (e.target.value !== newPassword && !errorMsg) {
            setErrorMsg("Passwords don't match!");
        } else if (e.target.value === newPassword && errorMsg) {
            setErrorMsg('');
        }
    }

    // Change password
    const changePassword = e => {
        e.preventDefault();
        setLoading(true);
        fetch('/api/authenticate/change_password', {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                currentPassword: currentPassword,
                newPassword: newPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            setLoading(false);
            if (data.status === 200) {
                setSucessMsg(data.message);
                setTimeout(() => {
                    setSucessMsg('');
                }, 5000);
                setCurrentPassword('');
                setNewPassword('');
                setConfirmPassword('');
            } else {
                setErrorMsg(data.message);
                setTimeout(() => {
                    setErrorMsg('');
                }, 5000);
            }
        })
        .catch(err => {
            setLoading(false);
            setErrorMsg(err.message);
            setTimeout(() => {
                setErrorMsg('');
            }, 5000);
        })
    }

    return (
        <dialog id="change_password_modal" className="modal">
            <form method="dialog" className="modal-box" onSubmit={changePassword}>
                <div className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => window.change_password_modal.close()}>✕</div>
                <h3 className="font-bold text-lg">Change password</h3>
                
                {/* Flash success/error message */}
                {successMsg ? (
                <div className="alert alert-success bg-green-300 border-none mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{successMsg}</span>
                </div>
                ) : null}
                {errorMsg ? (
                <div className="alert alert-error bg-red-300 border-none mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{errorMsg}</span>
                </div>
                ) : null}

                {/* Current password */}
                <label className="label mt-2">
                    <span className="label-text">Current password:</span>
                </label>
                <input 
                value={currentPassword} 
                type="password" 
                placeholder="Password" 
                className="input input-bordered w-full" 
                onChange={updateCurrentPassword}/>

                {/* New password */}
                <label className="label mt-2">
                    <span className="label-text">New password:</span>
                </label>
                <input 
                value={newPassword} 
                type="password" 
                placeholder="Password" 
                className="input input-bordered w-full" 
                onChange={updateNewPassword}/>

                {/* Confirm new password */}
                <label className="label mt-2">
                    <span className="label-text">Confirm new password:</span>
                </label>
                <input 
                value={confirmPassword} 
                type="password" 
                placeholder="Password" 
                className="input input-bordered w-full" 
                onChange={updateConfirmPassword}/>

                {/* Submit button */}
                <input type="submit" value={loading ? "Updating password..." : "Update password"} className={`btn w-fit mt-6 bg-orange-600 hover:bg-orange-800 text-white`} disabled={(!(currentPassword && newPassword && confirmPassword && (newPassword === confirmPassword)))||loading }></input>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}