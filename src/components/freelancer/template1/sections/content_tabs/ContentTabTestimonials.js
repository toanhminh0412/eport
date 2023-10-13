// React imports
import { useContext } from "react";

// Local imports
import { ActiveContentContext, SectionsContext } from "../../site";
import { DeleteSectionButton } from "./DeleteSectionButton";
import ContentTabText from "@/components/ui/content_tab/ContentTabText";

export default function ContentTabTestimonial() {
    const { sections, setSections } = useContext(SectionsContext);
    const { activeSectionInd, _setActiveSectionInd } = useContext(ActiveContentContext);

    // Change heading
    const onHeadingChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].heading = e.target.value;
        setSections(newSections);
    }

    /*** Manage reviews ***/
    // Change reviewer's name
    const onReviewReviewerNameChange = (e, reviewInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].reviews[reviewInd].reviewerName = e.target.value;
        setSections(newSections);
    }

    // Change reviewer's job
    const onReviewReviewerJobChange = (e, reviewInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].reviews[reviewInd].reviewerJob = e.target.value;
        setSections(newSections);
    }

    // Change review
    const onReviewChange = (e, reviewInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].reviews[reviewInd].review = e.target.value;
        setSections(newSections);
    }

    // Change review URL
    const onReviewUrlChange = (e, reviewInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].reviews[reviewInd].reviewUrl = e.target.value;
        setSections(newSections);
    }

    // Add review
    const addReview = () => {
        const newSections = [...sections];
        let reviewsLength = newSections[activeSectionInd].reviews.length;
        const lastId = reviewsLength === 0 ? -1 : newSections[activeSectionInd].reviews[reviewsLength - 1].id;
        newSections[activeSectionInd].reviews.push({
            id: lastId + 1,
            reviewUrl: "",
            rating: 5,
            review: "What your customer says about your product/service",
            reviewerName: "Reviewer's name",
            reviewerJob: "Reviewer's job",
        });
        setSections(newSections);
    }

    // Delete review
    const deleteReview = (reviewInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].reviews.splice(reviewInd, 1);
        setSections(newSections);
    }

    return (
        <div>
            <div className="prose max-w-none py-3">
                {/* Heading */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Heading</h4>
                    <ContentTabText content={sections[activeSectionInd].heading} onChange={onHeadingChange}/>
                </div>

                {/* Reviews */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Reviews</h4>
                    {sections[activeSectionInd].reviews.map((review, reviewInd) => (
                    <div key={review.id} className="bg-white rounded-md shadow-lg border border-slate-300 duration-150 py-4 px-3 my-3 relative">
                        <h4 className="my-0">Review #{reviewInd + 1}</h4>
                        <i className="fa-solid fa-trash text-slate-300 hover:text-slate-700 duration-100 text-lg absolute top-4 right-2" onClick={() => deleteReview(reviewInd)}></i>
                        {/* Rating */}
                        <label className="text-sm">Rating</label>
                        <div></div>
                        {/* Reviewer's name */}
                        <label className="text-sm">Reviewer&apos;s name</label>
                        <ContentTabText content={review.reviewerName} onChange={e => onReviewReviewerNameChange(e, reviewInd)}/>
                        {/* Reviewer job */}
                        <label className="text-sm">Reviewer&apos;s job</label>
                        <ContentTabText content={review.reviewerJob} onChange={e => onReviewReviewerJobChange(e, reviewInd)}/>
                        {/* Review */}
                        <label className="text-sm">Review</label>
                        <ContentTabText rows={5} content={review.review} onChange={e => onReviewChange(e, reviewInd)}/>
                        {/* Review Link */}
                        <label className="text-sm">Review link</label>
                        <ContentTabText content={review.reviewUrl} onChange={e => onReviewUrlChange(e, reviewInd)}/>
                    </div>
                    ))}
                    <div className="cursor-default text-base text-slate-400 hover:text-slate-700 duration-100" onClick={addReview}><i className="fa-solid fa-plus"></i> Add review</div>
                </div>
                <DeleteSectionButton/>
            </div>
        </div>
    )
}