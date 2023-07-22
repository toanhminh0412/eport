'use client';

import { useState, useEffect } from "react";

export default function IconPicker({selectedIcon, id, iconRef}) {
    const [icons, setIcons] = useState([]);
    const [activeIcon, setActiveIcon] = useState(selectedIcon);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const getIcons = async() => {
            const res = await fetch('/assets/json/fa-icons.min.json');
            const data = await res.json();
            setIcons(data);
        }
        getIcons();
    }, []);

    return (
        <div>
            <dialog id={id} className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Pick an icon</h3>
                    <div className="mb-2">
                        <label className="label">
                            <span className="label-text">Search icon:</span>
                        </label>
                        <input type="text" placeholder="e.g. laptop" className="input border-black w-full max-w-xs" value={search} onChange={e => {setSearch(e.target.value)}}/>
                    </div>
                    {icons.map(icon => (
                        <button key={icon} className={icon.includes(search) ? '' : 'hidden'}><i className={`${icon} ${icon === activeIcon ? 'bg-slate-500' : ''} p-3 m-1 text-2xl text-slate-700 hover:bg-slate-500 rounded-md`} onClick={() => {setActiveIcon(icon)}}></i></button>
                    ))}
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div className="join">
                <div ref={el => {iconRef(el)}} className="border border-black w-24 join-item text-center flex flex-col justify-center" data-icon={activeIcon}>
                    {activeIcon ? <i className={`${activeIcon} text-xl`}></i> : ''}
                </div>
                <button className="btn btn-primary join-item" onClick={() => {document.getElementById(id).showModal()}}>Find icon</button>
            </div>
        </div>
    )
}