// React imports
import { useContext } from "react";

// Local imports
// import { ActiveContentContext, SectionsContext } from "@/components/freelancer/template1/site";

export default function ContentTabInternalLink({ content, onChange, onDelete=null, sections, activeSectionInd }) {
    const {text, internalHref, externalHref, isExternal} = content;
    // const { activeSectionInd, _setActiveSectionInd } = useContext(ActiveContentContext);
    // const { sections, _setSections, _deleteSection } = useContext(SectionsContext);

    return (
        <div className="bg-white rounded-md shadow-lg border border-slate-300 duration-150 py-4 px-3 my-3 relative">
            {onDelete ? <i className="fa-solid fa-trash text-slate-300 hover:text-slate-700 duration-100 text-lg absolute top-4 right-2" onClick={onDelete}></i> : null}
            <div className="form-control w-full">
                <label className="pt-0">
                    <span className="label-text text-slate-500">Text</span>
                </label>
                <input 
                    type="text"
                    name="text"
                    placeholder="Heading text" 
                    className="input input-sm border border-neutral w-full" 
                    value={text}
                    onChange={onChange}/>
            </div>

            {isExternal ? 
            <div className="form-control w-full">
                <label className="mt-2">
                    <span className="label-text text-slate-500">External link</span>
                </label>
                <input 
                    type="text" 
                    name="externalLink"
                    placeholder="External link" 
                    className="input input-sm border border-neutral w-full" 
                    value={externalHref}
                    onChange={onChange}/>
            </div> : 
            
            <div className="form-control w-full">
                <label className="mt-2">
                    <span className="label-text text-slate-500">Internal section</span>
                </label>
                <select name="internalLink" className="select select-sm border border-black w-full max-w-xs" defaultValue={internalHref ? internalHref : "#"} onChange={onChange}>
                    <option value="#" disabled>Scroll to a section</option>
                    {sections.map(section => section.id !== sections[activeSectionInd].id ? <option key={section.id} value={`#${section.id}`}>Section: {section.sectionTitle}</option> : null)}
                </select>
            </div>}

            <div className="form-control">
                <label className="flex flex-row gap-2 mt-2">
                    <input type="checkbox" name="isExternal" checked={isExternal} className="checkbox checkbox-sm" onChange={onChange}/>
                    <span className="label-text my-auto">Use external link</span> 
                </label>
            </div>
        </div>
    )
}