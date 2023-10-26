'use client';

import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import dynamic from "next/dynamic";

const Tour = dynamic(
    () => import("../ui/InstructionsModal"),
    { ssr:false }
)

export default function ControlNav({editMode, setEditMode, saveSiteFunc, isEqual, message, messageLoading, theme, type, projectDomain=""}) {
    const [loading, setLoading] = useState(false);
    const [domain, setDomain] = useState('');
    const [run, setRun] = useState(false);

    // Delay enabling Edit/Save button for 1 second when changing state
    const [delay, setDelay] = useState(false);

    useEffect(() => {
        if (projectDomain) {
            setDomain(projectDomain);
        };
    }, [projectDomain]);
    
    const stateControlFunc = async () => {
        if (editMode) {
            setLoading(true);
            await saveSiteFunc();
            setLoading(false);
        }

        setEditMode(!editMode); 
        setDelay(true);
        setTimeout(() => {
            setDelay(false);
        }, 2000);
    }

    return (
        <div className="navbar bg-neutral text-neutral-content py-3 fixed top-18 z-30">
            <div className="navbar-start w-full flex-wrap gap-2">
                {!editMode ?
                    <>
                    <button className="btn btn-info btn-sm xs:btn xs:btn-info" onClick={() => setRun(true)}>Show Instructions</button>
                        {run ? <Tour run={run} setRun={setRun} theme={theme}/> : null}
                    </>
                : null}
                <ControlBtn editMode={editMode} loading={loading} onClick={stateControlFunc} delay={delay}/>
                {!editMode ?
                    <button className="btn btn-sm xs:btn tour-publishSiteButton" onClick={() => window.publish_modal.showModal()}>Publish site</button>
                :
                <button className="btn btn-sm xs:btn" onClick={() => {setEditMode(false)}}>Cancel</button>}
                {domain !== '' ? <Link href={`/${type}/${domain}`} className="btn btn-sm xs:btn" target="_blank">Visit site</Link> : null}
                {!isEqual ?
                <div>
                    {messageLoading ? 
                        <span className="loading loading-spinner md:ml-5"></span>
                    :
                        <div>
                            {!editMode ?
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
                            {!editMode ?
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

function ControlBtn({editMode, loading, onClick, delay}) {
    if (!editMode && !loading) {
        return (
            <button className="btn btn-sm xs:btn tour-editSiteButton" onClick={onClick} disabled={delay}>Edit site</button>
        )
    }
    else if (!editMode && loading) {
        return (
            <button className="btn btn-sm xs:btn">
                <span className="loading loading-spinner"></span>
                Editing
            </button>
        )
    } else if (editMode && !loading) {
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