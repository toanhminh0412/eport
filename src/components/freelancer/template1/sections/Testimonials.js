// Next imports
import Image from "next/image";
import Link from "next/link";

export function Testimonial1() {
    return (
    <section className="block bg-white">
        <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
            <div className="mx-auto flex-col flex max-w-3xl items-center text-center">
                <h2 className="font-bold text-3xl md:text-5xl mb-8 md:mb-12 lg:mb-16">What our clients are saying</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch mb-5 md:mb-6 lg:mb-8">
                <div className="grid-cols-1 grid gap-6 border border-solid border-[#cdcdcd] bg-white rounded-md p-8 md:p-10">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    </div>
                    <div className="text-[#636262]">“Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"</div>
                    <div className="flex-row flex items-start">
                        <Image width={16} height={16} style={{objectFit: "cover"}} src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" alt="" className="inline-block h-16 w-16 mr-4"/>
                        <div className="flex-col flex items-start">
                            <h6 className="text-base font-bold">Laila Bahar</h6>
                            <p className="text-[#636262] text-sm sm:text-sm">Designer</p>
                        </div>
                    </div>
                </div>
                <div className="grid-cols-1 grid gap-6 border border-solid border-[#cdcdcd] bg-white rounded-md p-8 md:p-10">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    </div>
                    <div className="text-[#636262]">“Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"</div>
                    <div className="flex-row flex items-start">
                        <Image width={16} height={16} style={{objectFit: "cover"}} src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" alt="" className="inline-block h-16 w-16 mr-4"/>
                        <div className="flex-col flex items-start">
                            <h6 className="text-base font-bold">Laila Bahar</h6>
                            <p className="text-[#636262] text-sm sm:text-sm">Designer</p>
                        </div>
                    </div>
                </div>
                <div className="grid-cols-1 grid gap-6 border border-solid border-[#cdcdcd] bg-white rounded-md p-8 md:p-10">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    </div>
                    <div className="text-[#636262]">“Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"</div>
                    <div className="flex-row flex items-start">
                        <Image width={16} height={16} style={{objectFit: "cover"}} src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" alt="" className="inline-block h-16 w-16 mr-4"/>
                        <div className="flex-col flex items-start">
                            <h6 className="text-base font-bold">Laila Bahar</h6>
                            <p className="text-[#636262] text-sm sm:text-sm">Designer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col flex items-center justify-center">
                <Link href="#" className="mx-auto font-bold text-black">Check all reviews</Link>
            </div>
        </div>
    </section>
    )
}