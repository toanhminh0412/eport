'use client';

import { useState } from "react";
import IconPicker from "@/components/IconPicker";
import TextEditor from "@/components/TextEditor";

export default function ServicesEdit({content, servicesRef}) {
    const [services, _] = useState(content);
    const [servicesList, setServicesList] = useState(content.services);

    // Remove a service from Services section
    const removeService = index => {
        setServicesList(prevServicesList => prevServicesList.filter((_, prevIndex) => prevIndex !== index));
        servicesRef.current['services'].splice(index, 1);
    }

    return (
        <div className="collapse collapse-arrow border border-slate-300">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium bg-white shadow-lg">
                {services.heading}
            </div>
            <div className="collapse-content bg-white">
                <div className="p-3 md:p-6">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Section heading  (recommend &apos;Services&apos;):</span>
                        </label>
                        <input ref={el => (servicesRef.current['heading'] = el)} type="text" placeholder="Section heading (recommend 'Services')" className="input border-black w-full" defaultValue={services.heading} />
                    </div>
                    <div className="font-semibold mt-8">Service list:</div>
                    <div className="form-control max-w-lg">
                        {servicesList.map((svc, index) => (
                        <div key={`${svc.title}-${index}`} className={`${index === 0 ? '' : 'mt-12'} w-full`}>
                            <label className="label">
                                <span className="label-text">Service name:</span>
                                <span className="text-md text-slate-300 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => removeService(index)}><i className="fa-solid fa-trash me-2"></i>Remove service</span>
                            </label>
                            <input 
                            ref={el => {servicesRef.current['services'][index] = servicesRef.current['services'][index] ? servicesRef.current['services'][index] : {}; servicesRef.current['services'][index]['title'] = el}}
                            type="text" 
                            placeholder="e.g. Web design" 
                            className="input border-black w-full" 
                            defaultValue={svc.title} />

                            <label className="label mt-2">
                                <span className="label-text">Service icon:</span>
                            </label>
                            <IconPicker 
                            selectedIcon={svc.icon} 
                            id={`${svc.title}-${index}`} 
                            iconRef={el => {servicesRef.current['services'][index] = servicesRef.current['services'][index] ? servicesRef.current['services'][index] : {}; servicesRef.current['services'][index]['icon'] = el}}/>
                            
                            <label className="label mt-2">
                                <span className="label-text">Service description:</span>
                            </label>
                            <TextEditor 
                            paramRef={el => {servicesRef.current['services'][index] = servicesRef.current['services'][index] ? servicesRef.current['services'][index] : {}; servicesRef.current['services'][index]['description'] = el}}
                            defaultValue={svc.description}
                            placeholder="e.g. I will help you build a 6-sections professional landing page to attract more customers."
                            />
                        </div>
                        ))}
                        
                        <div className="text-md text-slate-300 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => {setServicesList([...servicesList, {title: 'Service name', icon: 'fas fa-laptop', description: 'Provide a short description for your service here.'}])}}><i className="fa-solid fa-plus me-2"></i>Add service</div>
                    </div>
                </div>
            </div>
        </div>
    )
}