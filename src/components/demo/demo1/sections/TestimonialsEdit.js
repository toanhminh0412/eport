'use client';

import { useState, } from "react";

export default function TestimonialsEdit({content, testimonialsRef}) {
    const [testimonials, _] = useState(content);
    const [testimonialsList, setTestimonialsList] = useState(content.testimonials);
    
    const removeTestimony = index => {
        setTestimonialsList(prevTestimonialsList => prevTestimonialsList.filter((_, prevIndex) => prevIndex !== index));
        testimonialsRef.current['testimonials'].splice(index, 1);
    }

    return (
        <div className="collapse collapse-arrow border border-slate-300">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium bg-white shadow-lg">
                {testimonials.heading}
            </div>
            <div className="collapse-content bg-white">
                <div className="p-3 md:p-6">
                    {/* Heading */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Section heading  (recommend &apos;Testimonials&apos;):</span>
                        </label>
                        <input ref={el => (testimonialsRef.current['heading'] = el)} type="text" placeholder="Section heading (recommend 'Testimonials')" className="input border-black w-full" defaultValue={testimonials.heading} />
                    </div>

                    <div className="font-semibold mt-8">Testimony list:</div>

                    <div className="form-control mt-[-20px] max-w-lg">
                        {testimonialsList.map((testimonial, index) => (
                        <div key={`${testimonial.name}-${testimonial.job}-${index}`} className="mt-4 w-full">
                            {/* Name */}
                            <label className="label">
                                <span className="label-text">Testimony giver&apos;s name:</span>
                                <span className="text-md text-slate-400 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => removeTestimony(index)}><i className="fa-solid fa-trash me-2"></i>Remove testimony</span>
                            </label>
                            <input 
                            ref={el => {testimonialsRef.current['testimonials'][index] = testimonialsRef.current['testimonials'][index] ? testimonialsRef.current['testimonials'][index] : {}; testimonialsRef.current['testimonials'][index]['name'] = el}}
                            type="text" 
                            placeholder="e.g. Alice Doe" 
                            className="input border-black w-full max-w-lg" 
                            defaultValue={testimonial.name} />
                            
                            {/* Job */}
                            <label className="label">
                                <span className="label-text">Testimony giver&apos;s job:</span>
                            </label>
                            <input 
                            ref={el => {testimonialsRef.current['testimonials'][index] = testimonialsRef.current['testimonials'][index] ? testimonialsRef.current['testimonials'][index] : {}; testimonialsRef.current['testimonials'][index]['job'] = el}}
                            type="text" 
                            placeholder="e.g. Product manager" 
                            className="input border-black w-full max-w-lg" 
                            defaultValue={testimonial.job} />

                            {/* Content */}
                            <label className="label">
                                <span className="label-text">Testimony content:</span>
                            </label>
                            <textarea 
                            ref={el => {testimonialsRef.current['testimonials'][index] = testimonialsRef.current['testimonials'][index] ? testimonialsRef.current['testimonials'][index] : {}; testimonialsRef.current['testimonials'][index]['content'] = el}}
                            type="text" 
                            placeholder="e.g. John is a great person to work with. He's very professional and always delivers on time. I'm very happy with his work." 
                            rows={6}
                            className="textarea border-black w-full max-w-lg" 
                            defaultValue={testimonial.content} />
                        </div>
                        ))}
                        <div className="text-md text-slate-400 hover:text-slate-700 duration-300 mt-6 cursor-default w-fit" onClick={() => {setTestimonialsList([...testimonialsList, {name: "Person's name", job: "Person's job", description: 'What was the feedback for your work?'}])}}><i className="fa-solid fa-plus me-2"></i>Add testimony</div>
                    </div>
                </div>
            </div>
        </div>
    )
}