'use client';
import { useState } from "react";

export default function TestimonialShowcase({testimonials}) {
    const [active, setActive] = useState(0);

    return (
    <div>
        {testimonials.map((testimonial, index) => (
            <article key={index} className={`${active === index ? '' : 'hidden'}`}>
                <div className="text-blue-500 dark:text-blue-700 text-6xl font-semibold">&quot;</div>
                <blockquote className="mt-[-10px] dark:text-slate-200">{testimonial.content}</blockquote>
                <div className="text-slate-500 dark:text-white"><span className="font-semibold text-black dark:text-slate-400">{testimonial.name}</span> | {testimonial.job}</div>
            </article>
            ))}
        <div className="flex flex-row flex-wrap gap-x-4 justify-center w-full mt-8">
            {testimonials.map((_, index) => (
                <span key={index} className={`${active === index ? 'bg-slate-700 dark:bg-slate-200' : 'bg-slate-300 dark:bg-slate-500'} hover:bg-black dark:hover:bg-blue-500 duration-300 w-4 h-4 rounded-full`} onClick={() => {setActive(() => index)}}></span>
            ))}
        </div> 
    </div>
    )
}