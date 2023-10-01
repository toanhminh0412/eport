"use client";

// React, Next imports
import { useEffect, useState } from "react";

// Local imports
import TemplateSelector from "./TemplateSelector";

export default function Dashboard() {
    const [sites, setSites] = useState([]);

    return (
        <main className="prose bg-slate-100 w-screen min-h-screen pt-24 pb-32 px-8 lg:px-20 max-w-none">
            {/* Render create new project modal */}
            <dialog id="create_new_project_modal" className="modal not-prose">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-xl text-center">Select a template</h3>
                    <div className="mt-3">
                        <TemplateSelector/>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            
            <h1 className="flex flex-row justify-between">Projects<button className="btn bg-blue-700 hover:bg-blue-900 duration-200 text-white" onClick={() => document.getElementById('create_new_project_modal').showModal()}>&#43; Create new project</button></h1>
            {/* Render all current projects */}
            {sites.length !== 0 ? 
                <div className="flex flex-row flex-wrap gap-4">
                    {sites.map(site => (
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            
            // Render text if there are no projects
            : <p className="text-center mt-40">
                You don&apos;t have any project. <span className="link text-blue-500" onClick={() => document.getElementById('create_new_project_modal').showModal()}>Start one</span> right now!
            </p>}
        </main>
    )
}