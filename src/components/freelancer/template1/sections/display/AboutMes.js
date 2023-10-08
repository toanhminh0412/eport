export function AboutMe1() {
    return (
    <section className="block bg-white">
        <div className="py-12 md:py-16 lg:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
                <div className="flex-col flex items-start gap-2">
                    <div className="">
                    <div className="flex-col flex items-start">
                        <div className="flex-col flex items-start gap-2">
                        <div className="flex grid-cols-2 items-center bg-green-700 text-white px-3 py-1 rounded-md">
                            <div className="h-2 w-2 min-w-[8px] bg-white rounded-full">
                            </div>
                            <div className="text-sm sm:text-sm ml-2">Available for work</div>
                        </div>
                        {/* <p className="flex-col text-[#808080] text-sm sm:text-xl">Developer &amp; UX Specialist</p> */}
                        <h1 className="font-bold text-4xl md:text-6xl mb-5 md:mb-6 lg:mb-8">Jonathan Smith</h1>
                        <p className="flex-col text-[#808080] font-light text-sm sm:text-lg">
                            I&apos;m Jonathan, a passionate photographer who captures life&apos;s beauty one click at a time. With an eye for detail and a love for storytelling, I specialize in nature photography. Through my lens, I aim to freeze moments in time, creating lasting memories and artistry. Let&apos;s create magic together.
                        </p>
                        </div>
                        <div className="mb-8 mt-8 h-px w-full bg-black">
                        </div>
                        <div className="flex-row flex flex-wrap gap-3">
                            <p className="flex-col text-[#808080] max-[479px]:text-sm">
                                <strong>Email:</strong> jdoe@example.org
                            </p>
                            <p className="flex-col text-[#808080] max-[479px]:text-sm">
                                <strong>Phone number: </strong> 1234567890
                            </p>
                            <p className="flex-col text-[#808080] max-[479px]:text-sm">
                                <strong>School:</strong> University of Example
                            </p>
                            <p className="flex-col text-[#808080] max-[479px]:text-sm">
                                <strong>Degree: </strong> BSc in Art and Photography
                            </p>
                        </div>
                        <div className="flex items-center justify-start gap-4 flex-wrap mb-6 md:mb-10 lg:mb-12"></div>
                    </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="max-w-[300px] aspect-square mx-auto overflow-hidden bg-[url('/img/freelancer-template1-aboutme1-avatar.jpg')] bg-cover bg-center rounded-md"></div>
                </div>
            </div>
        </div>
    </section>
    )
}