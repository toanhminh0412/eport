export function Contact1() {
    return (
    <section className="block bg-white">
        <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
            <div className="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
                <div className="max-[991px]:max-w-[720px]">
                    <h2 className="font-bold mb-2 text-3xl md:text-5xl">Let&apos;s build something exciting together!</h2>
                    <div className="ml-0 mr-0 mt-4 max-w-[528px] mb-5 md:mb-6 lg:mb-8 pb-4">
                        <p className="text-[#636262] max-[479px]:text-sm">Shoot me an email, describe your need. I&apos;ll start making your dream come true right away!</p>
                    </div>
                </div>
                <div className="mx-auto max-w-[608px] bg-[#f2f2f7] px-8 max-[991px]:ml-0 max-[991px]:mr-0 pt-[2em] pb-8">
                    <div className="text-center">
                        <h3 className="font-bold text-2xl md:text-3xl">Get a free quote</h3>
                        <div className="mx-auto mt-4 max-w-[480px] mb-5 md:mb-6 lg:mb-8">
                            <div className="text-[#636262] text-sm sm:text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna</div>
                        </div>
                        <div className="mx-auto w-full max-w-[400px]">
                            <div className="mx-auto max-w-[400px] text-left mb-4">
                                <form name="wf-form-password" method="get">
                                    <div className="relative">
                                        <label htmlFor="name-2" className="mb-1 font-medium">Your Name</label>
                                        <input type="text" className="m-0 mb-4 block w-full border border-solid border-black align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6 pl-4" maxLength="256" name="name-2" placeholder="" required=""/>
                                    </div>
                                    <div className="relative mb-2">
                                        <label htmlFor="name-2" className="mb-1 font-medium">Email Address</label>
                                        <input type="email" className="m-0 mb-4 block w-full border border-solid border-black align-middle text-[#333333] focus:border-[#3898ec] text-sm px-3 rounded-md h-9 py-6 pl-4" maxLength="256" name="name-2" placeholder="" required=""/>
                                    </div>
                                    <div className="relative mb-5 md:mb-6 lg:mb-8">
                                        <label htmlFor="field-3" className="mb-1 font-medium">Project Brief</label>
                                        <textarea placeholder="" maxLength="5000" name="field" className="m-0 block h-auto min-h-[128px] w-full overflow-auto border border-solid border-black bg-white align-middle text-[#333333] focus:border-[#3898ec] text-sm mb-2.5 px-3 py-2 rounded-md pl-4"></textarea>
                                    </div>
                                    <input type="submit" value="Get free quote" className="m-0 inline-block w-full cursor-pointer items-center bg-black px-6 py-3 text-center font-semibold text-white"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}