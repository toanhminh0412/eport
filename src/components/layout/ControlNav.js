'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";

export default function ControlNav({setEditMode, saveSiteFunc, isEqual, message, messageLoading}) {
    const [state, setState] = useState('edit');
    const [loading, setLoading] = useState(false);
    const [domain, setDomain] = useState('');
    
    // Delay enabling Edit/Save button for 1 second when changing state
    const [delay, setDelay] = useState(false);

    useEffect(() => {
        if (secureLocalStorage.getItem('eport-domain', null)) {
            setDomain(secureLocalStorage.getItem('eport-domain'));
        };
    }, [secureLocalStorage.getItem('eport-domain', null)]);
    
    const stateControlFunc = async () => {
        if (state === 'save') {
            setLoading(true);
            await saveSiteFunc();
            setLoading(false);
        }

        setEditMode(state==='edit'); 
        setDelay(true);
        setTimeout(() => {
            setDelay(false);
        }, 2000);
        setState(state==='edit' ? 'save' : 'edit');
    }

    return (
        <div className="navbar bg-neutral text-neutral-content py-3 fixed top-18 z-30">
            <div className="navbar-start w-full flex-wrap gap-2">
                <ControlBtn state={state} loading={loading} onClick={stateControlFunc} delay={delay}/>
                {state === 'edit' ? 
                <button className="btn btn-sm xs:btn" onClick={() => window.publish_modal.showModal()}>Publish site</button>
                :
                <button className="btn btn-sm xs:btn" onClick={() => {setEditMode(false); setState('edit')}}>Cancel</button>}
                {domain !== '' ? <Link href={`/${domain}`} className="btn btn-sm xs:btn" target="_blank">Visit site</Link> : null}
                {!isEqual ?
                <div>
                    {messageLoading ? 
                        <span className="loading loading-spinner md:ml-5"></span>
                    :
                        <div>
                            {state === "edit" ?
                                <div className="text-red-300 md:ml-5">
                                    <span className="fa-solid fa-x mr-3"></span>
                                    {message}
                                </div>
                            : null }
                        </div>
                    }
                </div>
                :
                <div>
                    {messageLoading ? 
                        <span className="loading loading-spinner md:ml-5"></span>
                    :
                        <div>
                            {state === "edit" ?
                                <div className="text-green-300 md:ml-5">
                                    <span className="fa-solid fa-check mr-3"></span>
                                    {message}
                                </div>
                            : null}
                        </div>
                    }
                </div> 
                }
            </div>
        </div>
    )
}

function ControlBtn({state, loading, onClick, delay}) {
    if (state === 'edit' && !loading) {
        return (
            <button className="btn btn-sm xs:btn" onClick={onClick} disabled={delay}>Edit site</button>
        )
    }
    else if (state === 'edit' && loading) {
        return (
            <button className="btn btn-sm xs:btn">
                <span className="loading loading-spinner"></span>
                Editing
            </button>
        )
    } else if (state === 'save' && !loading) {
        return (
            <button className="btn btn-sm xs:btn" onClick={onClick} disabled={delay}>Save site</button>
        )
    }
    else {
        return (
            <button className="btn btn-sm xs:btn">
                <span className="loading loading-spinner"></span>
                Saving
            </button>
        )
    }
    
}