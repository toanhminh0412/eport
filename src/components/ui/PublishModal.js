'use client';

import { useState, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import domainValidator from "@/helpers/helpers";
import Link from "next/link";

export default function PublishModal({site, showMessageToast, setPublishMessage, plan}) {
    const [url, setUrl] = useState('');
    const [domain, setDomain] = useState('');
    const [displayedOnEport, setDisplayedOnEport] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Set default domain
        if (secureLocalStorage.getItem('eport-domain', null)) {
            setDomain(secureLocalStorage.getItem('eport-domain'));
        } else if (secureLocalStorage.getItem('eport-email', null)) {
            setDomain(secureLocalStorage.getItem('eport-email').split('@')[0].replace('.', '-'));
        } else {
            setDomain('');
        }
        setUrl(typeof window !== 'undefined' ? `${window.location.protocol}//${window.location.hostname}` : '');
    }, []);

    // Publish site
    const publishSite = async (e) => {
        e.preventDefault();

        // Set error message when domain is invalid
        const domainErrorMsg = domainValidator(domain)
        if (domainErrorMsg !== "") {
            setError(domainErrorMsg);
            return
        } else if (error) {
            setError("");
        }

        const publishedSite = {
            domain: domain,
            plan: plan,
            displayedOnEport: displayedOnEport,
            ...site
        }

        setLoading(true);
        console.log(publishedSite);
        // Post request to publish site
        const res = await fetch('/api/site/publish', {
            method: 'POST',
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                site: publishedSite
            })
        })
        const data = await res.json();
        if (data.status === 200) {
            showMessageToast(data.message, true);
            setPublishMessage();
            secureLocalStorage.setItem('eport-domain', domain);
            document.getElementById('publish_modal').close();
        } else {
            setError(data.message);
        }
        setLoading(false);

    }

    return (
        <dialog id="publish_modal" className="modal">
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg">Publish site</h3>

                {/* Message display */}
                {error ?
                <div className="alert alert-error mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{error}</span>
                </div>: null}

                {/* Domain input */}
                <p className="mt-3">Your site URL: <strong>{url}/{domain}</strong></p>
                <input 
                type="text" 
                placeholder="Site domain" 
                className="input border-black w-full max-w-xs mt-3" 
                value={domain}
                onChange={e => setDomain(e.target.value)}/>
                <p className="mt-3 text-sm"><strong>Note:</strong> You can change this later</p>

                {/* Display on Eport published sites page input */}
                <div className="mt-5">Do you want this site to be displayed on Eport&apos;s <Link href="/published_sites" target="_blank" className="link text-blue-500">published sites</Link> page?</div>
                <div className="form-control flex flex-row mt-2 w-fit">
                    <input 
                        type="checkbox" 
                        className="checkbox checkbox-primary" 
                        checked={displayedOnEport}
                        onChange={e => setDisplayedOnEport(e.target.checked)}/>
                    <strong className="ml-2">Yes, I do</strong> 
                </div>

                <div className="modal-action">
                    <button disabled={domain === '' || loading} className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white" onClick={publishSite}>
                    {loading ?
                    <>
                    <span className="loading loading-spinner"></span>
                    Publishing
                    </>
                    : <>Publish</>}
                    </button>
                </div>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}