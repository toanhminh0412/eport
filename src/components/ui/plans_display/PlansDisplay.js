import Link from "next/link";

import ManagePlanButton from "./ManagePlanButton";

export default function PlansDisplay({mode="showcase", plan="basic", status="", expiredDate="", loggedIn=false}) {
    /*
    Props:
        - mode: "showcase" or "manage"
        - plan: "basic" or "premium"
        - status: "Active" or "Cancelled". Only avaiable when plan is "premium"
        - expiredDate: Date string. Only avaiable when plan is "premium"
        - loggedIn: true or false. Only avaiable when mode is "showcase"
    */
    if (mode === "manage") return (
        <div className="flex flex-row flex-wrap justify-center gap-8 text-lg px-4 mt-8">
            <div className="card p-4 w-fit bg-base-100 shadow-xl">
                <div className="card-body text-left mt-[-30px]">
                    <p className="text-2xl md:text-3xl mb-0 pb-0 text-center mt-2">Basic</p>
                    <h2 className="text-3xl md:text-5xl font-medium text-center mt-[-10px] mx-0 mb-10">Free</h2>
                    {plan === "basic" ? <div className="badge text-blue-500 badge-outline mx-auto badge-lg text-xl my-3">Current plan</div> : null}
                    <div className="text-center">You have the following sections</div>
                    
                    <ul className="mt-5 mx-0 list-none">
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>Basic Profile</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>About Me</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>Experience</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>References</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>Get In Touch</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-x text-red-500 mr-3"></i>Skills</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-x text-red-500 mr-3"></i>Services</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-x text-red-500 mr-3"></i>Projects</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-x text-red-500 mr-3"></i>Testimonials</li>
                    </ul>

                    <ManagePlanButton displayPlan="basic" currentPlan={plan} status={status} expiredDate={expiredDate}/>
                    <Link href="/examples_basic" target="_blank" className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white w-full max-w-xs mx-auto">Basic Examples</Link>
                </div>
            </div>

            <div className="card p-4 w-fit bg-base-100 shadow-xl">
                <div className="card-body text-left mt-[-30px]">
                    <p className="text-2xl md:text-3xl text-center mt-2">Premium</p>
                    <h2 className="text-3xl md:text-5xl font-medium mt-[-10px] mx-0 mb-10 text-center">2 <span className="text-2xl md:text-4xl">CAD</span><span className="text-2xl"> / month</span></h2>
                    {plan === "premium" ? <div className="badge text-blue-500 badge-outline mx-auto badge-lg">Current plan</div> : null}
                    {plan === "premium" && status ? <div className={`badge ${status === 'Active' ? 'text-green-500' : 'text-orange-500'} badge-outline mx-auto badge-lg`}>{status}</div> : null}
                    {plan === "premium" && status === 'Cancelled' && expiredDate ? <div className="badge text-red-500 badge-outline mx-auto badge-lg">Expired on: {expiredDate}</div> : null}
                    <div className="text-center">You have the following sections</div>

                    <ul className="mt-5 mx-0 list-none">
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>Basic Profile</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>About Me</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>Experience</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>References</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>Get In Touch</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>Skills</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>Services</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>Projects</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>Testimonials</li>
                    </ul>
                    <ManagePlanButton displayPlan="premium" currentPlan={plan}/>
                    <Link href="/examples_premium" target="_blank" className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white w-full max-w-xs mx-auto">Premium Examples</Link>
                </div>
            </div>
        </div>
    )

    return (
        <div className="flex flex-row flex-wrap justify-center gap-8 text-lg px-4 mt-8">
            <div className="card p-4 w-fit bg-base-100 shadow-xl">
                <div className="card-body text-left mt-[-30px]">
                    <p className="text-2xl md:text-3xl text-center mt-2">Basic</p>
                    <h2 className="text-3xl md:text-5xl font-medium mx-0 mb-10 text-center mt-[-10px]">Free</h2>
                    <div className="text-center">You have the following sections</div>
                    
                    <ul className="mt-5 mx-0 list-none">
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>Basic Profile</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>About Me</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>Experience</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>References</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>Get In Touch</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-x text-red-500 mr-3"></i>Skills</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-x text-red-500 mr-3"></i>Services</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-x text-red-500 mr-3"></i>Projects</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-x text-red-500 mr-3"></i>Testimonials</li>
                    </ul>

                    <Link href={loggedIn ? "/manage_subscriptions" : "/login"} className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white w-full max-w-xs mx-auto">Subcribe Now</Link>
                    <Link href="/examples_basic" target="_blank" className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white w-full max-w-xs mx-auto">Basic Examples</Link>
                </div>
            </div>

            <div className="card p-4 w-fit bg-base-100 shadow-xl">
                <div className="card-body text-left mt-[-30px]">
                    <p className="text-2xl md:text-3xl text-center mt-2">Premium</p>
                    <h2 className="text-3xl md:text-5xl font-medium mx-0 mb-10 text-center mt-[-10px]">2 <span className="text-2xl md:text-4xl">CAD</span><span className="text-2xl"> / month</span></h2>
                    <div className="text-center">You have the following sections</div>

                    <ul className="mt-5 mx-0 list-none">
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>Basic Profile</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>About Me</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>Experience</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>References</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>Get In Touch</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>Skills</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>Services</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>Projects</li>
                        <li className="my-2 mx-0"><i className="fa-solid fa-check text-green-500 mr-3"></i>Testimonials</li>
                    </ul>
                    <Link href={loggedIn ? "/manage_subscriptions" : "/login"} className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white w-full max-w-xs mx-auto">Subcribe Now</Link>
                    <Link href="/examples_premium" target="_blank" className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white w-full max-w-xs mx-auto">Premium Examples</Link>
                </div>
            </div>
        </div>
    )
}