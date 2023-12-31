'use client';

import { useState, useContext } from "react";
import { SiteContext } from "../../../layout/ContentEditor";
import TextEditor from "@/components/ui/TextEditor";

import { nanoid } from "nanoid";

export default function ServicesEdit({
    content, 
    servicesRef,
    index, 
    moveUp, 
    moveDown
}) {
    const site = useContext(SiteContext);
    const [services, _] = useState(content);
    const [servicesList, setServicesList] = useState(content.services.map(service => ({id: nanoid(), ...service})));

    // Remove a service from Services section
    const removeService = index => {
        setServicesList(prevServicesList => prevServicesList.filter((_, prevIndex) => prevIndex !== index));
        servicesRef.current['services'].splice(index, 1);
    }

    return (
        <div 
        ref={el => (servicesRef.current['index'] = el)}
        className="collapse collapse-arrow border border-slate-300 dark:border-slate-600"
        data-index={index}>
            <input type="checkbox" name="my-accordion-2" /> 
            <div className="collapse-title text-xl dark:text-slate-200 font-medium bg-white dark:bg-slate-950 shadow-lg">
                {services.heading}
            </div>

            {/* Move up/down buttons */}
            <div className="ms-4 z-10 absolute right-12 top-4">
                <div className="text-xl">
                    {index !== 1 ? <i className="fa-solid fa-arrow-up me-2 text-slate-300 hover:text-slate-700 active:text-slate-700 duration-200" onClick={() => moveUp(index)}></i> : null}
                    {index !== site.sections.length - 2 ? <i className="fa-solid fa-arrow-down text-slate-300 hover:text-slate-700 active:text-slate-700 duration-200" onClick={() => moveDown(index)}></i>: null}
                </div>
            </div>

            {/* Content */}
            <div className="collapse-content bg-white dark:bg-slate-900">
                <div className="p-3 md:p-6">
                    <div className="form-control w-full max-w-lg">
                        {/* Section visibility */}
                        <label className="label">
                            <span className="label-text dark:text-slate-200">Hide section:</span>
                        </label>
                        <input
                        ref={el => (servicesRef.current['hidden'] = el)}
                        type="checkbox" 
                        className="toggle" 
                        defaultChecked={services.hidden}/>
                        <label className="label text-xs dark:text-slate-200">
                            <span><strong className="dark:text-slate-100">Hint: </strong>Turn this on if you want this section to <strong className="dark:text-slate-100">not be visible</strong> on your page.</span>
                        </label>

                        {/* Section heading */}
                        <label className="label">
                            <span className="label-text dark:text-slate-200">Section heading  (recommend &apos;Services&apos;):</span>
                        </label>
                        <input ref={el => (servicesRef.current['heading'] = el)} type="text" placeholder="Section heading (recommend 'Services')" className="input border-black dark:border-blue-400 dark:bg-slate-700 dark:text-slate-200 w-full" defaultValue={services.heading} />
                    </div>

                    {/* Services */}
                    <div className="font-semibold mt-8 dark:text-slate-200">Service list:</div>
                    <div className="form-control max-w-lg">
                        {servicesList.map((svc, index) => (
                        <div key={svc.id} className={`${index === 0 ? '' : 'mt-12'} w-full`}>
                            <label className="label">
                                <span className="label-text dark:text-slate-200">Service name:</span>
                                <span className="text-md text-slate-300 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => removeService(index)}><i className="fa-solid fa-trash me-2"></i>Remove service</span>
                            </label>
                            <input 
                            ref={el => {servicesRef.current['services'][index] = servicesRef.current['services'][index] ? servicesRef.current['services'][index] : {}; servicesRef.current['services'][index]['title'] = el}}
                            type="text" 
                            placeholder="e.g. Web design" 
                            className="input border-black dark:border-blue-400 dark:bg-slate-700 dark:text-slate-200 w-full" 
                            defaultValue={svc.title} />

                            {/* <label className="label mt-2">
                                <span className="label-text">Service icon:</span>
                            </label>
                            <IconPicker 
                            selectedIcon={svc.icon} 
                            id={`${svc.title}-${index}`} 
                            iconRef={el => {servicesRef.current['services'][index] = servicesRef.current['services'][index] ? servicesRef.current['services'][index] : {}; servicesRef.current['services'][index]['icon'] = el}}/> */}

                            <label className="label">
                                <span className="label-text dark:text-slate-200">Service price:</span>
                            </label>
                            <input 
                            ref={el => {servicesRef.current['services'][index] = servicesRef.current['services'][index] ? servicesRef.current['services'][index] : {}; servicesRef.current['services'][index]['price'] = el}}
                            type="text" 
                            placeholder="e.g. 200 CAD / month" 
                            className="input border-black dark:border-blue-400 dark:bg-slate-700 dark:text-slate-200 w-full" 
                            defaultValue={svc.price} />
                            
                            <label className="label mt-2">
                                <span className="label-text">Service description:</span>
                            </label>
                            <TextEditor 
                            paramRef={el => {servicesRef.current['services'][index] = servicesRef.current['services'][index] ? servicesRef.current['services'][index] : {}; servicesRef.current['services'][index]['description'] = el}}
                            defaultValue={svc.description}
                            placeholder="e.g. I will help you build a 6-sections professional landing page to attract more customers."
                            theme={site.theme}
                            />
                        </div>
                        ))}

                        {/* Ask user login to add more field */}
                        <div className="text-md text-slate-300 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => {setServicesList([...servicesList, {id: nanoid(), title: 'Service name', icon: 'fas fa-laptop', description: 'Provide a short description for your service here.'}])}}><i className="fa-solid fa-plus me-2"></i>Add service</div>
                    </div>
                </div>
            </div>
        </div>
    )
}