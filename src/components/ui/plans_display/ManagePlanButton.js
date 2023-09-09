"use client";

import { useState } from "react";

export default function ManagePlanButton({displayPlan, currentPlan="basic", status="", expiredDate=""}) {
    const [loading, setLoading] = useState(false);
    const [modalLoading, setModalLoading] = useState(false);

    // Open checkout session for users to upgrade their plan to "Premium"
    const openStripeCheckoutSession = async () => {
        setLoading(true);
        const response = await fetch('/api/stripe/create_checkout_session');
        const data = await response.json();
        console.log(data);
        if (data.status === 200) {
            window.location.href = data.sessionUrl;
        } else {
            console.log('Failed to create Stripe checkout session');
        }
    }

    // Open customer portal for user to manage their subscription
    const openStripePortalSession = async () => {
        setLoading(true);
        const response = await fetch('/api/stripe/create_portal_session');
        const data = await response.json();
        console.log(data);
        if (data.status === 200) {
            window.location.href = data.sessionUrl;
        } else {
            console.log('Failed to create Stripe checkout session');
        }
    }

    // Cancel "Premium" plan subscription
    const cancelPremiumPlan = async(e) => {
        setModalLoading(true);
        e.preventDefault();
        const response = await fetch('/api/stripe/cancel_subscription');
        const data = await response.json();
        console.log(data);
        if (data.status === 200) {
            window.location.href = '/manage_subscriptions';
        } else {
            console.log('Failed to cancel Stripe subscription');
            console.log(data.message);
        }
    }

    if (displayPlan === 'premium') {
        if (currentPlan === 'premium') return (
            <button 
                className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white w-full max-w-xs mx-auto" 
                onClick={() => openStripePortalSession()}
                disabled={loading}
                >
                {loading ? <><span className="loading loading-spinner"></span>Loading...</> : "Manage plan"}</button>
        );
    
        return (
            <button 
                className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white w-full max-w-xs mx-auto" 
                onClick={() => openStripeCheckoutSession()}
                disabled={loading}>
                    {loading ? <><span className="loading loading-spinner"></span>Loading...</> : "Subscribe"}</button>
        );
    } else {
        if (currentPlan === 'premium') return (
            <div>
                <button className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white w-full max-w-xs mx-auto" onClick={() => document.getElementById('cancel_premium_modal').showModal()}>Subscribe</button>
                <dialog id="cancel_premium_modal" className="modal">
                    <div className="modal-box not-prose">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Cancel Premium</h3>
                        {status === "Active" ?
                        <>
                        <p className="py-4">Subcribing to the Basic Plan means <strong>cancelling the Premium Plan</strong>. Are you sure you want to do this?</p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button 
                                    className="btn mr-2" 
                                    onClick={cancelPremiumPlan}
                                    disabled={modalLoading}
                                    >
                                    {modalLoading ? <><span className="loading loading-spinner"></span>Loading...</> : "Yes"}</button>
                                <button className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white">No</button>
                            </form>
                        </div>
                        </> :
                        <div className="py-4">Your next payment has been cancelled. Your Premium plan will continue to be valid until <strong>{expiredDate}</strong></div>}
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        );

        return (
            <div></div>
        )
    }
}