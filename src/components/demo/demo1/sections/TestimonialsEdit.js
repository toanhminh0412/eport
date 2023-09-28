'use client';

import { useState, useContext} from "react";
import { SiteContext } from "../../../layout/ContentEditor";
import { isLoggedInContext } from "../site";

import { nanoid } from "nanoid";

export default function TestimonialsEdit({
    content, 
    testimonialsRef,
    index, 
    moveUp, 
    moveDown
}) {
    const site = useContext(SiteContext);
    const isLoggedIn = useContext(isLoggedInContext);
    const [testimonials, _] = useState(content);
    const [testimonialsList, setTestimonialsList] = useState(content.testimonials.map(testimonial => ({id: nanoid(), ...testimonial})));
    
    const removeTestimony = index => {
        setTestimonialsList(prevTestimonialsList => prevTestimonialsList.filter((_, prevIndex) => prevIndex !== index));
        testimonialsRef.current['testimonials'].splice(index, 1);
    }

    return (
        <div 
        ref={el => (testimonialsRef.current['index'] = el)}
        className="collapse collapse-arrow border border-slate-300 dark:border-slate-600"
        data-index={index}>
            <input type="checkbox" name="my-accordion-2" /> 
            <div className="collapse-title text-xl dark:text-slate-200 font-medium bg-white dark:bg-slate-950 shadow-lg">
                {testimonials.heading}
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
                        ref={el => (testimonialsRef.current['hidden'] = el)}
                        type="checkbox" 
                        className="toggle" 
                        defaultChecked={testimonials.hidden}/>
                        <label className="label text-xs dark:text-slate-200">
                            <span><strong className="dark:text-slate-100">Hint: </strong>Turn this on if you want this section to <strong className="dark:text-slate-100">not be visible</strong> on your page.</span>
                        </label>
                        
                        {/* Heading */}
                        <label className="label">
                            <span className="label-text dark:text-slate-200">Section heading  (recommend &apos;Testimonials&apos;):</span>
                        </label>
                        <input ref={el => (testimonialsRef.current['heading'] = el)} type="text" placeholder="Section heading (recommend 'Testimonials')" className="input border-black dark:border-blue-400 dark:bg-slate-700 dark:text-slate-200 w-full" defaultValue={testimonials.heading} />
                    </div>

                    <div className="font-semibold mt-8 dark:text-slate-200">Testimony list:</div>

                    <div className="form-control mt-[-20px] max-w-lg">
                        {testimonialsList.map((testimonial, index) => (
                        <div key={testimonial.id} className="mt-4 w-full">
                            {/* Name */}
                            <label className="label">
                                <span className="label-text dark:text-slate-200">Testimony giver&apos;s name:</span>
                                <span className="text-md text-slate-400 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => removeTestimony(index)}><i className="fa-solid fa-trash me-2"></i>Remove testimony</span>
                            </label>
                            <input 
                            ref={el => {testimonialsRef.current['testimonials'][index] = testimonialsRef.current['testimonials'][index] ? testimonialsRef.current['testimonials'][index] : {}; testimonialsRef.current['testimonials'][index]['name'] = el}}
                            type="text" 
                            placeholder="e.g. Alice Doe" 
                            className="input border-black dark:border-blue-400 dark:bg-slate-700 dark:text-slate-200 w-full max-w-lg" 
                            defaultValue={testimonial.name} />
                            
                            {/* Job */}
                            <label className="label">
                                <span className="label-text dark:text-slate-200">Testimony giver&apos;s job:</span>
                            </label>
                            <input 
                            ref={el => {testimonialsRef.current['testimonials'][index] = testimonialsRef.current['testimonials'][index] ? testimonialsRef.current['testimonials'][index] : {}; testimonialsRef.current['testimonials'][index]['job'] = el}}
                            type="text" 
                            placeholder="e.g. Product manager" 
                            className="input border-black dark:border-blue-400 dark:bg-slate-700 dark:text-slate-200 w-full max-w-lg" 
                            defaultValue={testimonial.job} />

                            {/* Content */}
                            <label className="label">
                                <span className="label-text dark:text-slate-200">Testimony content:</span>
                            </label>
                            <textarea 
                            ref={el => {testimonialsRef.current['testimonials'][index] = testimonialsRef.current['testimonials'][index] ? testimonialsRef.current['testimonials'][index] : {}; testimonialsRef.current['testimonials'][index]['content'] = el}}
                            type="text" 
                            placeholder="e.g. John is a great person to work with. He's very professional and always delivers on time. I'm very happy with his work." 
                            rows={6}
                            className="textarea border-black dark:border-blue-400 dark:bg-slate-700 dark:text-slate-200 w-full max-w-lg" 
                            defaultValue={testimonial.content} />
                        </div>
                        ))}

                        {/* Ask user login to add more field */}
                        {isLoggedIn ?
                            <div className="text-md text-slate-400 hover:text-slate-700 duration-300 mt-6 cursor-default w-fit" onClick={() => {setTestimonialsList([...testimonialsList, {id: nanoid(), name: "Person's name", job: "Person's job", description: 'What was the feedback for your work?'}])}}><i className="fa-solid fa-plus me-2"></i>Add testimony</div>
                        :
                            <div className="text-md text-slate-400 hover:text-slate-700 duration-300 mt-6 cursor-default w-fit" onClick={() => window.ask_login_modal.showModal()}><i className="fa-solid fa-plus me-2"></i>Add testimony</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}