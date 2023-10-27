'use client';

// React, Next imports
import { useState, useEffect, useContext } from "react";

// Local imports
import domainValidator from "@/helpers/helpers";
import Link from "next/link";
import { SetSiteFunctionContext } from "../eresume/template0/site";
import { ProjectContext as ProjectContext0 } from "../freelancer/template0/site";
import { ProjectContext as ProjectContext1 } from "../freelancer/template1/site";

// 3rd party imports
import secureLocalStorage from "react-secure-storage";

export default function PublishModal({site, projectId, publishedSite=null, showMessageToast, setPublishMessage=null, projectType}) {
    const [url, setUrl] = useState('');
    const [domain, setDomain] = useState('');
    const [displayedOnEport, setDisplayedOnEport] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const setSite = useContext(SetSiteFunctionContext);
    const setProjectTemplate0 = useContext(ProjectContext0);
    const setProjectTemplate1 = useContext(ProjectContext1);

    useEffect(() => {
        // Set default domain
        if (publishedSite && publishedSite.domain) {
            setDomain(publishedSite.domain);
        } else if (secureLocalStorage.getItem('eport-email', null)) {
            setDomain(secureLocalStorage.getItem('eport-email').split('@')[0].replace('.', '-'));
        } else {
            setDomain('');
        }
        setUrl(typeof window !== 'undefined' ? `${window.location.protocol}//${window.location.hostname}/${projectType}` : '');
        setDisplayedOnEport(publishedSite && publishedSite.displayedOnEport ? publishedSite.displayedOnEport : false);
    }, [publishedSite]);

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

        const newPublishedSite = {
            ...site,
            domain: domain,
            displayedOnEport: displayedOnEport,
            publishedDate: new Date()
        }

        setLoading(true);

        // Post request to publish site
        if (projectType === 'eresume') {
            const res = await fetch(`/api/eresume/publish?projectId=${projectId}`, {
                method: 'POST',
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    site: newPublishedSite
                })
            })
            const data = await res.json();
            console.log(data);
            if (data.status === 200) {
                showMessageToast(data.message, true);
                setPublishMessage();
                setSite({
                    ...site,
                    published: true,
                    domain: domain
                })
                document.getElementById('publish_modal').close();
            } else {
                setError(data.message);
            }
            setLoading(false);

        } else if (projectType === 'freelancer') {
            const res = await fetch(`/api/freelancer/publish?projectId=${projectId}`, {
                method: 'POST',
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    project: newPublishedSite
                })
            })
            const data = await res.json();
            console.log(data);
            if (data.status === 200) {
                showMessageToast(data.message, true);
                if (site.templateId === 0) {
                    setProjectTemplate0({
                        ...site,
                        published: true,
                        domain: domain
                    })
                } else if (site.templateId === 1) {
                    setProjectTemplate1({
                        ...site,
                        published: true,
                        domain: domain
                    })
                }
                document.getElementById('publish_modal').close();
            } else {
                setError(data.message);
            }
            setLoading(false);
        }
    }

    if (!publishedSite) {
        return (
            <dialog id="publish_modal" className="modal">
                <form method="dialog" className="modal-box dark:bg-slate-800 dark:text-slate-200">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Publish site</h3>
                    <span className="loading loading-dots loading-lg h-fit"></span>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        )
    }

    return (
        <dialog id="publish_modal" className="modal">
            <form method="dialog" className="modal-box dark:bg-slate-800 dark:text-slate-200">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg">Publish site</h3>

                {/* Display reminder */}
                {projectType === "freelancer" ? <div className="alert alert-info my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span><strong>Reminder: </strong>You need to click &quot;Save&quot; before publishing to see your latest changes</span>
                </div> : null}

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
                className="input border-black dark:border-blue-400 dark:bg-slate-700 dark:text-slate-200 w-full max-w-xs mt-3" 
                value={domain}
                onChange={e => setDomain(e.target.value)}/>
                <p className="mt-3 text-sm"><strong>Note:</strong> You can change this later</p>

                {/* Display on Eport published sites page input */}
                {/* Temporarily hide it for now */}
                <div className="hidden">
                    <div className="mt-5">Do you want this site to be displayed on Eport&apos;s <Link href="/published_sites" target="_blank" className="link text-blue-500">published sites</Link> page?</div>
                    <div className="form-control flex flex-row mt-2 w-fit">
                        <input 
                            type="checkbox" 
                            className="checkbox dark:checkbox-info" 
                            checked={displayedOnEport}
                            onChange={e => setDisplayedOnEport(e.target.checked)}/>
                        <strong className="ml-2">Yes, I do</strong> 
                    </div>
                </div>

                <div className="modal-action">
                    <button disabled={domain === '' || loading} className="btn bg-blue-500 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-900 dark:border-blue-700 duration-200 text-white dark:text-white" onClick={publishSite}>
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