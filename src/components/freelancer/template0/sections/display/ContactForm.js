"use client";

// React imports
import { useRef, useState } from "react";

// Local imports
import { btnColorOptions } from "@/data/colorOptions";

// 3rd party imports
import emailjs from "@emailjs/browser";


export function ContactForm1({section, publish=false, ownerEmail=null}) {
    const name = useRef(null);
    const email = useRef(null);
    const details = useRef(null);

    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);

    // Send email to website owner when user submits contact form
    const submitForm = async(e) => {
        e.preventDefault();
        if (!publish) return;

        setSuccessMessage('');
        setErrorMessage('');
        setLoading(true);

        // Check if site owner has any email quota remaining
        const response = await fetch(`/api/freelancer/submit_contact_form?ownerEmail=${ownerEmail}`);
        const data = await response.json();
        if (data.status !== 200) {
            setLoading(false);
            setErrorMessage(data.message);
            return;
        }

        const templateParams = {
            from_name: name.current.value,
            from_email: email.current.value,
            details: details.current.value,
            to_email: ownerEmail
        };

        emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_FREELANCER_CONTACT_FORM_TEMPLATE_ID, templateParams, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setLoading(false);
            setDisabled(true);
            setSuccessMessage('Email sent successfully!');
        }, (error) => {
            setLoading(false);
            setErrorMessage(`Email failed to send: ${error.text}. Please try again or send an email to support@eport.site for support!`);
        });
    }

    return (
        <div className="mx-auto max-w-[608px] bg-slate-200 px-8 max-[991px]:ml-0 max-[991px]:mr-0 pt-[2em] pb-8">
            <div className="text-center">
            <h1 className="font-bold text-3xl md:text-5xl">Contact <span className="text-orange-500">Us</span></h1>
                <div className="mx-auto mt-4 max-w-[480px] mb-5 md:mb-6 lg:mb-8">
                    <div className="text-lg max-[479px]:text-md text-slate-700">{section.description}</div>
                </div>
                <div className="mx-auto w-full max-w-[400px]">
                    {successMessage ? <div className="alert alert-success">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{successMessage}</span>
                    </div> : null}

                    {errorMessage ? <div className="alert alert-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        <span>{errorMessage}</span>
                    </div> : null}
                    
                    <div className="mx-auto max-w-[400px] text-left my-4">
                        <form name="wf-form-password" onSubmit={submitForm}>
                            <div className="relative">
                                <label htmlFor="name" className="mb-1 font-medium">Name</label>
                                <input disabled={disabled} ref={name} type="text" className="m-0 mb-4 block w-full border border-solid border-black align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6 pl-4" maxLength="256" name="name" placeholder="Your name" required/>
                            </div>
                            <div className="relative mb-2">
                                <label htmlFor="email" className="mb-1 font-medium">Email Address</label>
                                <input disabled={disabled} ref={email} type="email" className="m-0 mb-4 block w-full border border-solid border-black align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6 pl-4" maxLength="256" name="email" placeholder="Your email" required/>
                            </div>
                            <div className="relative mb-5 md:mb-6 lg:mb-8">
                                <label htmlFor="details" className="mb-1 font-medium">Details</label>
                                <textarea disabled={disabled} ref={details} placeholder="Let me know how I can help" maxLength="5000" name="details" className="m-0 block h-auto min-h-[128px] w-full overflow-auto border border-solid border-black bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm mb-2.5 px-3 py-2 rounded-md pl-4" required></textarea>
                            </div>
                            {/* <input type="submit" disabled={loading || disabled} value={loading ? "Sending..." : section.formBtn.text} className={`${section.formBtn && section.formBtn.color ? btnColorOptions[section.formBtn.color] : btnColorOptions['orange']} m-0 inline-block w-full cursor-pointer items-center px-6 py-3 text-center font-semibold`}/> */}
                            <button disabled={loading || disabled || !publish} className={`m-0 inline-block w-full cursor-pointer ${btnColorOptions[section.actionBtn.color]} px-6 py-4 text-center font-semibold`}>{loading ? "Sending..." : section.actionBtn.text}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}