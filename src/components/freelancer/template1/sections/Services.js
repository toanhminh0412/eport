// Next imports
import Link from "next/link"

export function Service1() {
    return (
        <section className="prose max-w-none bg-white py-16 px-8 text-center">
            <h1 className="mb-4">Services</h1>
            <h4 className="mt-0 mb-8">You aren&apos;t happy with my work? Money back guranteed</h4>
            <div className="flex flex-row flex-wrap gap-4 justify-center">
                <div className="card w-96 bg-base-100 shadow-xl border border-slate-200">
                    <div className="card-body items-center text-center">
                        <h4 className="card-title">Basic package</h4>
                        {/* <h4 className="text-orange-500 mt-0 opacity-0"><i class="fa-solid fa-star mr-2"></i>Recommended</h4> */}
                        <h1 className="my-4">20 USD</h1>
                        <Link href="#" className="btn bg-orange-500 hover:bg-orange-700 duration-200 text-white btn-lg btn-wide mx-auto">Get started</Link>
                        <ul className="text-left list-none mt-2">
                            <li><i className="fa-solid fa-check text-green-500 text-xl mr-2"></i>Build you a beautiful album of 10 nature photos</li>
                            <li><i className="fa-solid fa-check text-green-500 text-xl mr-2"></i>Affordable: Suitable for clients on a budget</li>
                            <li><i className="fa-solid fa-xmark text-red-500 text-xl mr-2"></i>Limited Coverage: May not include advanced editing or additional services like prints</li>
                            <li><i className="fa-solid fa-xmark text-red-500 text-xl mr-2"></i>Basic Equipment: May use entry-level camera gear</li>
                        </ul>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-2xl border border-orange-500">
                    <h4 className="absolute text-orange-500 top-1 inset-x-0 mx-auto"><i class="fa-solid fa-star mr-2"></i>Recommended</h4>
                    <div className="card-body items-center text-center">
                        <h4 className="card-title">Basic package</h4>
                        {/* <h4 className="text-orange-500 mt-0"><i class="fa-solid fa-star mr-2"></i>Recommended</h4> */}
                        <h1 className="my-4">20 USD</h1>
                        <Link href="#" className="btn bg-orange-500 hover:bg-orange-700 duration-200 text-white btn-lg btn-wide mx-auto">Get started</Link>
                        <ul className="text-left list-none mt-2">
                            <li><i className="fa-solid fa-check text-green-500 text-xl mr-2"></i>Build you a beautiful album of 10 nature photos</li>
                            <li><i className="fa-solid fa-check text-green-500 text-xl mr-2"></i>Affordable: Suitable for clients on a budget</li>
                            <li><i className="fa-solid fa-xmark text-red-500 text-xl mr-2"></i>Limited Coverage: May not include advanced editing or additional services like prints</li>
                            <li><i className="fa-solid fa-xmark text-red-500 text-xl mr-2"></i>Basic Equipment: May use entry-level camera gear</li>
                        </ul>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl border border-slate-200">
                    <div className="card-body items-center text-center">
                    <h4 className="card-title">Basic package</h4>
                        {/* <h4 className="text-orange-500 mt-0 opacity-0"><i class="fa-solid fa-star mr-2"></i>Recommended</h4> */}
                        <h1 className="my-4">20 USD</h1>
                        <Link href="#" className="btn bg-orange-500 hover:bg-orange-700 duration-200 text-white btn-lg btn-wide mx-auto">Get started</Link>
                        <ul className="text-left list-none mt-2">
                            <li><i className="fa-solid fa-check text-green-500 text-xl mr-2"></i>Build you a beautiful album of 10 nature photos</li>
                            <li><i className="fa-solid fa-check text-green-500 text-xl mr-2"></i>Affordable: Suitable for clients on a budget</li>
                            <li><i className="fa-solid fa-xmark text-red-500 text-xl mr-2"></i>Limited Coverage: May not include advanced editing or additional services like prints</li>
                            <li><i className="fa-solid fa-xmark text-red-500 text-xl mr-2"></i>Basic Equipment: May use entry-level camera gear</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}