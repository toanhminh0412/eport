'use client';

import { useState, } from "react";
import socialIcons from "../../../../data/social-icons";

import { nanoid } from "nanoid";

export default function FooterEdit({content, footerRef}) {
    const [footer, _] = useState(content);
    const [socials, setSocials] = useState(content.socials.map(social => ({id: nanoid(), ...social})));
    
    const removeSocial = (index) => {
        setSocials(prevSocials => prevSocials.filter((_, prevIndex) => prevIndex !== index));
        footerRef.current['socials'].splice(index, 1);
    }

    return (
        <div className="collapse collapse-arrow border border-slate-300">
            <input type="checkbox" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium bg-white shadow-lg">
                {footer.heading}
            </div>
            <div className="collapse-content bg-white">
                <div className="p-3 md:p-6">
                    {/* Heading */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Section heading  (recommend &apos;Get In Touch&apos;):</span>
                        </label>
                        <input ref={el => (footerRef.current['heading'] = el)} type="text" placeholder="Section heading (recommend 'Get In Touch')" className="input border-black w-full" defaultValue={footer.heading} />
                    </div>

                    <div className="font-semibold mt-8">Social medias:</div>
                    <div className="form-control mt-[-20px] max-w-lg">
                        {socials.map((social, index) => (
                        <div key={social.id} className="mt-4 w-full">
                            {/* Name */}
                            <label className="label">
                                <span className="label-text">Social media brand:</span>
                                <span className="text-md text-slate-400 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => removeSocial(index)}><i className="fa-solid fa-trash me-2"></i>Remove social</span>
                            </label>
                            <select
                            ref={el => {footerRef.current['socials'][index] = footerRef.current['socials'][index] ? footerRef.current['socials'][index] : {}; footerRef.current['socials'][index]['key'] = el}}
                            className="select border-black w-full max-w-lg"
                            defaultValue={social.key}>
                                {Object.keys(socialIcons).map((key, socialIndex) => (
                                <option key={`${key}-${socialIndex}`} value={key}>{key}</option>
                                ))}
                            </select>

                            {/* Link */}
                            <label className="label">
                                <span className="label-text">Social media link:</span>
                            </label>
                            <input 
                            ref={el => {footerRef.current['socials'][index] = footerRef.current['socials'][index] ? footerRef.current['socials'][index] : {}; footerRef.current['socials'][index]['value'] = el}}
                            type="url" 
                            placeholder="e.g. https://facebook.com/john.doe" 
                            className="input border-black w-full max-w-lg" 
                            defaultValue={social.value} />
                            {social.key === 'gmail' ? 
                            (
                            <label className="label text-xs">
                                <span><strong>Hint: </strong>Enter you email only (e.g. <strong>jdoe@example.org</strong>). No need to enter a link.</span>
                            </label> 
                            )
                            :
                            (
                            <label className="label text-xs">
                                <span><strong>Hint: </strong>Social media links, preferably start with <strong>https://</strong>. Otherwise, <strong>https://</strong> will be automatically appended in front of the link.</span>
                            </label>
                            )}
                            
                        </div>
                        ))}
                        <div className="text-md text-slate-400 hover:text-slate-700 duration-300 mt-6 cursor-default w-fit" onClick={() => {setSocials([...socials, {id: nanoid(), key: 'gmail', value: 'user@example.org'}])}}><i className="fa-solid fa-plus me-2"></i>Add social media</div>
                    </div>
                </div>
            </div>
        </div>
    )
}