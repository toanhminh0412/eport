"use client";

// React imports
import { useContext, useState } from "react";

// Local imports
import { EditModeContext } from "./site";
import { SectionsContext } from "./site";

export default function PreviewControlNav() {
    const {editMode, setEditMode} = useContext(EditModeContext);
    const {_sections, _setSections, _deleteSection, saveSite} = useContext(SectionsContext);
    const [loading, setLoading] =  useState(false);

    const stateControlFunc = async () => {
        setLoading(true);
        await saveSite();
        setLoading(false);
    }

    return (
        <div className="navbar bg-neutral text-neutral-content py-3 fixed top-18 z-30">
            <div className="navbar-start w-full flex-wrap gap-2">
                {editMode ? <button className="btn btn-sm xs:btn" onClick={() => setEditMode(false)}>Preview</button> : <button className="btn btn-sm xs:btn" onClick={() => setEditMode(true)}>Edit site</button>}
                {!loading ? 
                    <button className="btn btn-sm xs:btn" onClick={stateControlFunc}>Save</button>
                :   
                    <button className="btn btn-sm xs:btn"><span className="loading loading-spinner"></span>Saving</button>
                }
                <button className="btn btn-sm xs:btn ml-auto">Publish</button>
            </div>
        </div>
    )
}