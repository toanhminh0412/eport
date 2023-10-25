// Next imports
import Link from "next/link";
import { useContext } from "react";

// Local imports
import { ActiveTabContext, ActiveContentContext, SectionsContext } from "../../site";
import { convertToURL } from "@/helpers/helpers";

export function EditableNavbar1({ section, sectionInd }) {
    const { _activeTab, setActiveTab } = useContext(ActiveTabContext);
    const { activeSectionInd, setActiveSectionInd } = useContext(ActiveContentContext);
    const { _sections, _setSections, deleteSection } = useContext(SectionsContext);

    const openContentTabEditor = () => {
        setActiveTab("content");
        setActiveSectionInd(sectionInd);
    }

    return (
        <div className="group relative">
            <button className="btn bg-blue-700 border-none z-40 absolute hover:bg-blue-900 top-[-35px] right-0 mr-7 hidden group-hover:block" onClick={()=>document.getElementById(`delete_modal_${section.id}`).showModal()}><i className="fa-solid fa-trash text-lg text-white"></i></button>
            <dialog id={`delete_modal_${section.id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete Section!</h3>
                    <p className="py-4">Are you sure you want to delete this {section.sectionType} section?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn mr-4 bg-blue-700 hover:bg-blue-900 duration-200 text-white" onClick={() => deleteSection(section)}>Yes</button>
                            <button className="btn bg-red-700 hover:bg-red-900 duration-200 text-white">No</button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div className={`navbar bg-black/50 z-10 w-full border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} group-hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {section.navItems.map(navItem => <li key={navItem.id}>{navItem.isExternal ? <Link href={convertToURL(navItem.externalHref)} target="_blank">{navItem.text}</Link> : <Link href={navItem.internalHref} scroll={false}>{navItem.text}</Link>}</li>)}
                    </ul>
                    </div>
                    {section.heading.isExternal ? <Link href={section.heading.externalHref ? convertToURL(section.heading.externalHref) : "#"} className="btn btn-ghost normal-case text-xl text-white" target="_blank">{section.heading.text}</Link> : <Link href={section.heading.internalHref ? section.heading.internalHref : "#"} className="btn btn-ghost normal-case text-xl text-white" scroll={false}>{section.heading.text}</Link>}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {section.navItems.map(navItem => <li key={navItem.id}>{navItem.isExternal ? <Link href={navItem.externalHref ? convertToURL(navItem.externalHref) : "#"} target="_blank">{navItem.text}</Link> : <Link href={navItem.internalHref ? navItem.internalHref : "#"} scroll={false}>{navItem.text}</Link>}</li>)}
                    </ul>
                </div>
                <div className="navbar-end">
                    {section.actionBtn.isExternal ? <Link href={section.actionBtn.externalHref ? convertToURL(section.actionBtn.externalHref) : "#"} className="btn" target="_blank">{section.actionBtn.text}</Link> : <Link href={section.actionBtn.internalHref ? section.actionBtn.internalHref : "#"} className="btn" scroll={false}>{section.actionBtn.text}</Link>}
                </div>
            </div>
        </div>
    )
}

export function EditableNavbar2({ section, sectionInd }) {
    const { _activeTab, setActiveTab } = useContext(ActiveTabContext);
    const { activeSectionInd, setActiveSectionInd } = useContext(ActiveContentContext);
    const { _sections, _setSections, deleteSection } = useContext(SectionsContext);

    const openContentTabEditor = () => {
        setActiveTab("content");
        setActiveSectionInd(sectionInd);
    }

    return (
        <div className="group relative">
            <button className="btn bg-blue-700 border-none z-40 absolute hover:bg-blue-900 top-[-35px] right-0 mr-7 hidden group-hover:block" onClick={()=>document.getElementById(`delete_modal_${section.id}`).showModal()}><i className="fa-solid fa-trash text-lg text-white"></i></button>
            <dialog id={`delete_modal_${section.id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete Section!</h3>
                    <p className="py-4">Are you sure you want to delete this {section.sectionType} section?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn mr-4 bg-blue-700 hover:bg-blue-900 duration-200 text-white" onClick={() => deleteSection(section)}>Yes</button>
                            <button className="btn bg-red-700 hover:bg-red-900 duration-200 text-white">No</button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div className={`navbar bg-black/50 z-10 w-full border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} group-hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
                <div className="navbar-start w-fit">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {section.navItems.map(navItem => <li key={navItem.id}>{navItem.isExternal ? <Link href={convertToURL(navItem.externalHref)} target="_blank">{navItem.text}</Link> : <Link href={navItem.internalHref} scroll={false}>{navItem.text}</Link>}</li>)}
                    </ul>
                    </div>
                    {section.heading.isExternal ? <Link href={section.heading.externalHref ? convertToURL(section.heading.externalHref) : "#"} className="btn btn-ghost normal-case text-xl text-white" target="_blank">{section.heading.text}</Link> : <Link href={section.heading.internalHref ? section.heading.internalHref : "#"} className="btn btn-ghost normal-case text-xl text-white" scroll={false}>{section.heading.text}</Link>}
                </div>
                <div className="navbar-end grow">
                    <ul className="menu menu-horizontal px-1 text-white hidden lg:flex mr-10">
                        {section.navItems.map(navItem => <li key={navItem.id}>{navItem.isExternal ? <Link href={navItem.externalHref ? convertToURL(navItem.externalHref) : "#"} target="_blank">{navItem.text}</Link> : <Link href={navItem.internalHref ? navItem.internalHref : "#"} scroll={false}>{navItem.text}</Link>}</li>)}
                    </ul>
                    {section.actionBtn.isExternal ? <Link href={section.actionBtn.externalHref ? convertToURL(section.actionBtn.externalHref) : "#"} className="btn" target="_blank">{section.actionBtn.text}</Link> : <Link href={section.actionBtn.internalHref ? section.actionBtn.internalHref : "#"} className="btn" scroll={false}>{section.actionBtn.text}</Link>}
                </div>
            </div>
        </div>
    )
}

export function EditableNavbar3({ section, sectionInd }) {
    const { _activeTab, setActiveTab } = useContext(ActiveTabContext);
    const { activeSectionInd, setActiveSectionInd } = useContext(ActiveContentContext);
    const { _sections, _setSections, deleteSection } = useContext(SectionsContext);

    const openContentTabEditor = () => {
        setActiveTab("content");
        setActiveSectionInd(sectionInd);
    }

    return (
        <div className="group relative">
            <button className="btn bg-blue-700 border-none z-40 absolute hover:bg-blue-900 top-[-35px] right-0 mr-7 hidden group-hover:block" onClick={()=>document.getElementById(`delete_modal_${section.id}`).showModal()}><i className="fa-solid fa-trash text-lg text-white"></i></button>
            <dialog id={`delete_modal_${section.id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete Section!</h3>
                    <p className="py-4">Are you sure you want to delete this {section.sectionType} section?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn mr-4 bg-blue-700 hover:bg-blue-900 duration-200 text-white" onClick={() => deleteSection(section)}>Yes</button>
                            <button className="btn bg-red-700 hover:bg-red-900 duration-200 text-white">No</button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div className={`navbar bg-white z-10 w-full border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} group-hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-neutral">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {section.navItems.map(navItem => <li key={navItem.id}>{navItem.isExternal ? <Link href={convertToURL(navItem.externalHref)} target="_blank">{navItem.text}</Link> : <Link href={navItem.internalHref} scroll={false}>{navItem.text}</Link>}</li>)}
                    </ul>
                    </div>
                    {section.heading.isExternal ? <Link href={section.heading.externalHref ? convertToURL(section.heading.externalHref) : "#"} className="btn btn-ghost normal-case text-2xl text-neutral" target="_blank">{section.heading.text}</Link> : <Link href={section.heading.internalHref ? section.heading.internalHref : "#"} className="btn btn-ghost normal-case text-2xl font-bold text-neutral" scroll={false}>{section.heading.text}</Link>}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-neutral">
                        {section.navItems.map(navItem => <li key={navItem.id}>{navItem.isExternal ? <Link href={navItem.externalHref ? convertToURL(navItem.externalHref) : "#"} target="_blank">{navItem.text}</Link> : <Link href={navItem.internalHref ? navItem.internalHref : "#"} scroll={false}>{navItem.text}</Link>}</li>)}
                    </ul>
                </div>
                <div className="navbar-end">
                    {section.actionBtn.isExternal ? <Link href={section.actionBtn.externalHref ? convertToURL(section.actionBtn.externalHref) : "#"} className="btn bg-orange-500 hover:bg-orange-700 duration-200 text-white" target="_blank">{section.actionBtn.text}</Link> : <Link href={section.actionBtn.internalHref ? section.actionBtn.internalHref : "#"} className="btn bg-orange-500 hover:bg-orange-700 duration-200 text-white" scroll={false}>{section.actionBtn.text}</Link>}
                </div>
            </div>
        </div>
    )
}

export function EditableNavbar4({ section, sectionInd }) {
    const { _activeTab, setActiveTab } = useContext(ActiveTabContext);
    const { activeSectionInd, setActiveSectionInd } = useContext(ActiveContentContext);
    const { _sections, _setSections, deleteSection } = useContext(SectionsContext);

    const openContentTabEditor = () => {
        setActiveTab("content");
        setActiveSectionInd(sectionInd);
    }

    return (
        <div className="group relative">
            <button className="btn bg-blue-700 border-none z-40 absolute hover:bg-blue-900 top-[-35px] right-0 mr-7 hidden group-hover:block" onClick={()=>document.getElementById(`delete_modal_${section.id}`).showModal()}><i className="fa-solid fa-trash text-lg text-white"></i></button>
            <dialog id={`delete_modal_${section.id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete Section!</h3>
                    <p className="py-4">Are you sure you want to delete this {section.sectionType} section?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn mr-4 bg-blue-700 hover:bg-blue-900 duration-200 text-white" onClick={() => deleteSection(section)}>Yes</button>
                            <button className="btn bg-red-700 hover:bg-red-900 duration-200 text-white">No</button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div className={`navbar bg-neutral z-10 w-full border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} group-hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {section.navItems.map(navItem => <li key={navItem.id}>{navItem.isExternal ? <Link href={convertToURL(navItem.externalHref)} target="_blank">{navItem.text}</Link> : <Link href={navItem.internalHref} scroll={false}>{navItem.text}</Link>}</li>)}
                    </ul>
                    </div>
                    {section.heading.isExternal ? <Link href={section.heading.externalHref ? convertToURL(section.heading.externalHref) : "#"} className="btn btn-ghost normal-case text-2xl text-white" target="_blank">{section.heading.text}</Link> : <Link href={section.heading.internalHref ? section.heading.internalHref : "#"} className="btn btn-ghost normal-case text-2xl font-bold text-white" scroll={false}>{section.heading.text}</Link>}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {section.navItems.map(navItem => <li className="active:text-white" key={navItem.id}>{navItem.isExternal ? <Link href={navItem.externalHref ? convertToURL(navItem.externalHref) : "#"} target="_blank" className="hover:text-white hover:font-bold duration-100">{navItem.text}</Link> : <Link href={navItem.internalHref ? navItem.internalHref : "#"} scroll={false} className="hover:text-white hover:font-bold duration-100">{navItem.text}</Link>}</li>)}
                    </ul>
                </div>
                <div className="navbar-end">
                    {section.actionBtn.isExternal ? <Link href={section.actionBtn.externalHref ? convertToURL(section.actionBtn.externalHref) : "#"} className="btn" target="_blank">{section.actionBtn.text}</Link> : <Link href={section.actionBtn.internalHref ? section.actionBtn.internalHref : "#"} className="btn" scroll={false}>{section.actionBtn.text}</Link>}
                </div>
            </div>
        </div>
    )
}