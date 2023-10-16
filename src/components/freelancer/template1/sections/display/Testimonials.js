// Next imports
import Link from "next/link";

export function Testimonial1({section}) {
    return (
        <section className="block bg-white">
            <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
                <div className="mx-auto flex-col flex max-w-3xl items-center text-center">
                    <h2 className="font-bold text-3xl md:text-5xl mb-8 md:mb-12 lg:mb-16">{section.heading}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch mb-5 md:mb-6 lg:mb-8">
                    {section.reviews.map(review => (
                    <div key={review.id} className="grid-cols-1 flex flex-col border border-solid border-[#cdcdcd] bg-white rounded-md p-8 md:p-10">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={section.rating === 1} />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={section.rating === 2} />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={section.rating === 3} />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={section.rating === 4} />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={section.rating === 5} />
                        </div>
                        <div className="flex flex-col gap-6 justify-between mt-6 flex-grow">
                            <div className="text-[#636262] flex-grow">&quot;{review.review}&quot;</div>
                            <div className="flex-row flex justify-between">
                                <div className="flex-col flex items-start">
                                    <h6 className="text-base font-bold">{review.reviewerName}</h6>
                                    <p className="text-[#636262] text-sm sm:text-sm">{review.reviewerJob}</p>
                                </div>
                                {review.reviewUrl ? <Link href={convertToURL(review.reviewUrl)} target="_blank" className="link">See review</Link> : null}
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}