"use client";

import { useState } from "react";

export default function InfoToast({message}) {
    const [show, setShow] = useState(true);

    if (!show) return null;

    return (
        <div className="toast z-40">
            <div className="alert alert-info whitespace-normal">
                <span>{message}</span>
                <button className="btn btn-sm btn-circle btn-ghost ml-2" onClick={() => setShow(false)}>✕</button>
            </div>
        </div> 
    )
}