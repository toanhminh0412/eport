'use client';
import { useState } from "react";

export default function TestimonialShowcase({testimonials}) {
    const [active, setActive] = useState(0);

    return (
    <div>
        {testimonials.map((testimonial, index) => (
            <article key={index} className={`${active === index ? '' : 'hidden'}`}>
                <div className="text-blue-500 text-6xl font-semibold">&quot;</div>
                <blockquote className="mt-[-10px]">{testimonial.content}</blockquote>
                <div className="text-slate-500"><span className="font-semibold text-black">{testimonial.name}</span> | {testimonial.job}</div>
            </article>
            ))}
        <div className="flex flex-row flex-wrap gap-x-4 justify-center w-full mt-8">
            {testimonials.map((_, index) => (
                <span key={index} className={`${active === index ? 'bg-slate-700' : 'bg-slate-300'} hover:bg-black duration-300 w-4 h-4 rounded-full`} onClick={() => {setActive(() => index)}}></span>
            ))}
        </div> 
    </div>
    )
}