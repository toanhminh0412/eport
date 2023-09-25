'use client';

import { useState, useContext} from "react";
import socialIcons from "../../../../data/social-icons";
import { isLoggedInContext } from "../site";

import { nanoid } from "nanoid";

export default function FooterEdit({content, footerRef}) {
    const isLoggedIn = useContext(isLoggedInContext);
    const [footer, _] = useState(content);
    const [socials, setSocials] = useState(content.socials.map(social => ({id: nanoid(), ...social})));
    
    const removeSocial = (index) => {
        setSocials(prevSocials => prevSocials.filter((_, prevIndex) => prevIndex !== index));
        footerRef.current['socials'].splice(index, 1);
    }

    return (
        <div className="collapse collapse-arrow border border-slate-300 dark:border-slate-600">
            <input type="checkbox" name="my-accordion-2" /> 
            <div className="collapse-title text-xl dark:text-slate-200 font-medium bg-white dark:bg-slate-950 shadow-lg">
                {footer.heading}
            </div>
            <div className="collapse-content bg-white dark:bg-slate-900">
                <div className="p-3 md:p-6">
                    {/* Heading */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text dark:text-slate-200">Section heading  (recommend &apos;Get In Touch&apos;):</span>
                        </label>
                        <input ref={el => (footerRef.current['heading'] = el)} type="text" placeholder="Section heading (recommend 'Get In Touch')" className="input border-black dark:border-blue-400 dark:bg-slate-700 dark:text-slate-200 w-full" defaultValue={footer.heading} />
                    </div>

                    <div className="font-semibold mt-8 dark:text-slate-200">Social medias:</div>
                    <div className="form-control mt-[-20px] max-w-lg">
                        {socials.map((social, index) => (
                        <div key={social.id} className="mt-4 w-full">
                            {/* Name */}
                            <label className="label">
                                <span className="label-text dark:text-slate-200">Social media brand:</span>
                                <span className="text-md text-slate-400 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => removeSocial(index)}><i className="fa-solid fa-trash me-2"></i>Remove social</span>
                            </label>
                            <select
                            ref={el => {footerRef.current['socials'][index] = footerRef.current['socials'][index] ? footerRef.current['socials'][index] : {}; footerRef.current['socials'][index]['key'] = el}}
                            className="select border-black dark:border-blue-400 dark:bg-slate-700 dark:text-slate-200 w-full max-w-lg"
                            defaultValue={social.key}>
                                {Object.keys(socialIcons).map((key, socialIndex) => (
                                <option key={`${key}-${socialIndex}`} value={key}>{key}</option>
                                ))}
                            </select>

                            {/* Link */}
                            <label className="label">
                                <span className="label-text dark:text-slate-200">Social media link:</span>
                            </label>
                            <input 
                            ref={el => {footerRef.current['socials'][index] = footerRef.current['socials'][index] ? footerRef.current['socials'][index] : {}; footerRef.current['socials'][index]['value'] = el}}
                            type="url" 
                            placeholder="e.g. https://facebook.com/john.doe" 
                            className="input border-black dark:border-blue-400 dark:bg-slate-700 dark:text-slate-200 w-full max-w-lg" 
                            defaultValue={social.value} />
                            {social.key === 'gmail' ? 
                            (
                            <label className="label text-xs dark:text-slate-200">
                                <span><strong className="dark:text-slate-100">Hint: </strong>Enter you email only (e.g. <strong className="dark:text-slate-100">jdoe@example.org</strong>). No need to enter a link.</span>
                            </label> 
                            )
                            :
                            (
                            <label className="label text-xs dark:text-slate-200">
                                <span><strong className="dark:text-slate-100">Hint: </strong>Social media links, preferably start with <strong className="dark:text-slate-100">https://</strong>. Otherwise, <strong className="dark:text-slate-100">https://</strong> will be automatically appended in front of the link.</span>
                            </label>
                            )}
                            
                        </div>
                        ))}

                        {/* Ask user login to add more field */}
                        {isLoggedIn ?
                            <div className="text-md text-slate-400 hover:text-slate-700 duration-300 mt-6 cursor-default w-fit" onClick={() => {setSocials([...socials, {id: nanoid(), key: 'gmail', value: 'user@example.org'}])}}><i className="fa-solid fa-plus me-2"></i>Add social media</div>
                        :
                            <div className="text-md text-slate-400 hover:text-slate-700 duration-300 mt-6 cursor-default w-fit" onClick={() => window.ask_login_modal.showModal()}><i className="fa-solid fa-plus me-2"></i>Add social media</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}