'use client';

import { useState, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";

export default function PublishModal({site, showMessageToast}) {
    const [url, setUrl] = useState('');
    const [domain, setDomain] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
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
        setLoading(true);
        const publishedSite = {
            domain: domain,
            ...site
        }
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
            secureLocalStorage.setItem('eport-domain', domain);
            document.getElementById('publish_modal').close();
        } else {
            setError(data.message);
            setTimeout(() => {
                setError('');
            }, 5000);
        }
        setLoading(false);
    }

    return (
        <dialog id="publish_modal" className="modal">
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg">Publish site</h3>
                {error ?
                <div className="alert alert-error mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{error}</span>
                </div>: null}
                <p className="mt-3">Your site URL: <strong>{url}/{domain}</strong></p>
                <input 
                type="text" 
                placeholder="Site domain" 
                className="input border-black w-full max-w-xs mt-3" 
                value={domain}
                onChange={e => setDomain(e.target.value)}/>
                <p className="mt-3"><strong>Note:</strong> You can change this later</p>
                <div className="modal-action">
                    <button disabled={domain === '' || loading} className="btn btn-primary" onClick={publishSite}>
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