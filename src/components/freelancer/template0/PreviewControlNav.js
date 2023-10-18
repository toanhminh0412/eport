"use client";

// React imports
import { useContext, useEffect, useState } from "react";

// Local imports
import { EditModeContext } from "./site";
import { SectionsContext } from "./site";
import Link from "next/link";

export default function PreviewControlNav({type, projectDomain=""}) {
    const {editMode, setEditMode, isEqual, message, msgLoading} = useContext(EditModeContext);
    const {_sections, _setSections, _deleteSection, saveSite} = useContext(SectionsContext);
    const [loading, setLoading] =  useState(false);
    const [domain, setDomain]  = useState('')

    const stateControlFunc = async () => {
        setLoading(true);
        await saveSite();
        setLoading(false);
    }

    useEffect(() => {
        if (projectDomain) {
            setDomain(projectDomain);
        }
    }, [projectDomain])

    return (
        <div className="navbar bg-neutral text-neutral-content py-3 fixed top-18 z-30">
            <div className="navbar-start w-full flex-wrap gap-2">
                {editMode ? <button className="btn btn-sm xs:btn" onClick={() => setEditMode(false)}>Preview</button> : <button className="btn btn-sm xs:btn" onClick={() => setEditMode(true)}>Edit site</button>}
                {!loading ? 
                    <button className="btn btn-sm xs:btn" onClick={stateControlFunc}>Save</button>
                :   
                    <button className="btn btn-sm xs:btn"><span className="loading loading-spinner"></span>Saving</button>
                }
                {domain !== '' ? <Link href={`/${type}/${domain}`} className="btn btn-sm xs:btn" target="_blank">Visit Site</Link> : null}
                {!isEqual ?
                    <div>
                        {msgLoading ?
                            <span className="loading loading-spinner md:ml-5"></span>
                        :
                            <div className="text-red-300 md:ml-5">
                                <span className="fa-solid fa-x mr-3"></span>
                                {message}
                            </div>
                        }
                    </div>
                :
                    <div>
                        {msgLoading ?
                            <span className="loading loading-spinner md:ml-5"></span>
                        :
                            <div className="text-green-300 md:ml-5">
                                <span className="fa-solid fa-check mr-3"></span>
                                {message}
                            </div>
                        }
                    </div>
                }
                <button className="btn btn-sm xs:btn ml-auto" onClick={()  => window.publish_modal.showModal()}>Publish</button>
            </div>
        </div>
    )
}