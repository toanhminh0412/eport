"use client";

// React imports
import { useContext } from "react";

// Local imports
// import { EditModeContext } from "../freelancer/template1/site"

export default function PreviewControlNav({ editMode, setEditMode }) {
    // const {editMode, setEditMode} = useContext(EditModeContext);

    return (
        <div className="navbar bg-neutral text-neutral-content py-3 fixed top-18 z-30">
            <div className="navbar-start w-full flex-wrap gap-2">
                {editMode ? <button className="btn btn-sm xs:btn" onClick={() => setEditMode(false)}>Preview</button> : <button className="btn btn-sm xs:btn" onClick={() => setEditMode(true)}>Edit site</button>}
                <button className="btn btn-sm xs:btn">Publish</button>
            </div>
        </div>
    )
}