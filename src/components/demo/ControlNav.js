'use client';

import { useState } from "react";

export default function ControlNav({setEditMode, saveSiteFunc}) {
    const [state, setState] = useState('edit');
    const [loading, setLoading] = useState(false);
    
    const stateControlFunc = async () => {
        if (state === 'save') {
            setLoading(true);
            await saveSiteFunc();
            setLoading(false);
        }

        setEditMode(state==='edit'); 
        setState(state==='edit' ? 'save' : 'edit');
    }

    return (
        <div className="navbar bg-neutral text-neutral-content py-3 fixed top-16 z-40">
            <div className="navbar-start">
                <ControlBtn state={state} loading={loading} onClick={stateControlFunc}/>
                {state === 'edit' ? 
                <button className="btn ms-2">Publish site</button>
                :
                <button className="btn ms-2" onClick={() => {setEditMode(false); setState('edit')}}>Cancel</button>}
            </div>
            <div className="navbar-center hidden lg:flex"></div>
            <div className="navbar-end"></div>
        </div>
    )
}

function ControlBtn({state, loading, onClick}) {
    if (state === 'edit' && !loading) {
        return (
            <button className="btn" onClick={onClick}>Edit site</button>
        )
    }
    else if (state === 'edit' && loading) {
        return (
            <button className="btn">
                <span className="loading loading-spinner"></span>
                Editing
            </button>
        )
    } else if (state === 'save' && !loading) {
        return (
            <button className="btn" onClick={onClick}>Save site</button>
        )
    }
    else {
        return (
            <button className="btn">
                <span className="loading loading-spinner"></span>
                Saving
            </button>
        )
    }
    
}