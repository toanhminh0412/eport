// React imports
import { useContext } from "react";

// Local imports
import { ActiveContentContext, SectionsContext } from "../../site";
import ContentTabText from "@/components/ui/content_tab/ContentTabText";
import ContentTabBtn from "@/components/ui/content_tab/ContentTabBtn";
import ContentTabImage from "@/components/ui/content_tab/ContentTabImage";
import ContentTabNumber from "@/components/ui/content_tab/ContentTabNumber";
import ContentTabFormattedText from "@/components/ui/content_tab/ContentTabFormattedText";
import { DeleteSectionButton } from "./DeleteSectionButton";

export default function ContentTabTestimonial() {
    const { sections, setSections, _deleteSection } = useContext(SectionsContext);
    const { activeSectionInd, _setActiveSectionInd } = useContext(ActiveContentContext);

    // Change section description
    const onDescriptionChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].description = e.target.value;
        setSections(newSections);
    }

    // Change rating star
    const onRatingStarChange = (e, testimonialInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].testimonials[testimonialInd].ratingStars = parseInt(e.target.value);
        setSections(newSections);
    }

    // Change testimonial content
    const onTestimonialContentChange = (value, testimonialInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].testimonials[testimonialInd].content = value;
        setSections(newSections);
    }

    // Change testimonial image
    const onTestinomialImageChange = (imgSrc, testimonialInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].testimonials[testimonialInd].image = imgSrc;
        setSections(newSections);
    }

    // Change testimonial name
    const onTestimonialNameChange = (e, testimonialInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].testimonials[testimonialInd].name = e.target.value;
        setSections(newSections);
    }

    // Change testimonial job
    const onTestimonialJobChange = (e, testimonialInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].testimonials[testimonialInd].job = e.target.value;
        setSections(newSections);
    }

    // Change testimonial button
    const onActionBtnChange = (e) => {
        const newSections = [...sections];
        if (e.target.name === "text") {
            newSections[activeSectionInd].actionBtn.text = e.target.value;
        } else {
            if (e.target.dataset.color) {
                newSections[activeSectionInd].actionBtn.color = e.target.dataset.color;
            } else {
                newSections[activeSectionInd].actionBtn.href = e.target.value;
            }
        }
        setSections(newSections);
    }

    // Add testimonial item
    const addTestimonialItem = () => {
        const newSections = [...sections];
        const lastTestimonialItem = newSections[activeSectionInd].testimonials.length === 0 ? 1 : parseInt(newSections[activeSectionInd].testimonials[newSections[activeSectionInd].testimonials.length - 1].id);
        newSections[activeSectionInd].testimonials.push({
            id: lastTestimonialItem + 1,
            ratingStars: 4,
            content: "Lorem ipsum dolor sit amet,  elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis",
            image: "/img/freelancer-template0-aboutme1-avatar.jpg",
            name: "Harry Peter",
            job: "Designer"
        });
        setSections(newSections);
    }

    // Delete testimonial item
    const deleteTestimonialItem = (testimonialInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].testimonials.splice(testimonialInd, 1);
        setSections(newSections);
    }

    return (
        <div>
            <div className="prose max-w-none">
                {/* Section Description */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Heading</h4>
                    <ContentTabText rows={3} content={sections[activeSectionInd].description} onChange={onDescriptionChange}/>
                </div>

                {/* Testimonials */}
                <div className="px-3 py-1">
                    <h4 className="my-0">Testimonials</h4>
                    {sections[activeSectionInd].testimonials.map((testimonial, testimonialInd) => (
                        <div key={testimonial.id} className="bg-white rounded-md shadow-lg border border-slate-300 duration-150 py-3 px-3 mt-2 mb-4 relative">
                            <div onClick={() => deleteTestimonialItem(testimonialInd)}><i className="fa-solid fa-trash text-slate-300 hover:text-slate-700 duration-100 text-lg absolute top-2 right-2"></i></div>
                            <h5 className="font-semibold">Testimonial Item {testimonialInd + 1}</h5>
                            {/* Rating */}
                            <label className="pt-0">
                                <span className="label-text text-slate-700 font-medium">Rating</span>
                            </label>
                            <ContentTabNumber content={testimonial.ratingStars} min={1} max={5} onChange={e => onRatingStarChange(e, testimonialInd)}/>

                            {/* Content */}
                            <label className="pt-0">
                                <span className="label-text text-slate-700 font-medium">Content</span>
                            </label>
                            <ContentTabFormattedText content={testimonial.content} onChange={e => onTestimonialContentChange(e, testimonialInd)}/>
                            
                            {/* Image */}
                            <label className="pt-0">
                                <span className="label-text text-slate-700 font-medium">Image</span>
                            </label>
                            <ContentTabImage content={testimonial.image} onChange={e => onTestinomialImageChange(e, testimonialInd)} defaultImage="/img/freelancer-template0-aboutme1-avatar.jpg"/>

                            {/* Name */}
                            <label className="pt-0">
                                <span className="label-text text-slate-700 font-medium">Name</span>
                            </label>
                            <ContentTabText content={testimonial.name} onChange={e => onTestimonialNameChange(e, testimonialInd)}/>

                            {/* Job */}
                            <label className="pt-0">
                                <span className="label-text text-slate-700 font-medium">Job</span>
                            </label>
                            <ContentTabText content={testimonial.job} onChange={e => onTestimonialJobChange(e, testimonialInd)}/>
                        </div>
                    ))}
                    <div className="cursor-default text-base text-slate-400 hover:text-slate-700 duration-100 mb-2" onClick={() => addTestimonialItem()}><i className="fa-solid fa-plus"></i> Add testimonial item</div>
                </div>

                {/* Action button */}
                <div className="px-3 py-1">
                    <h4 className="my-0">Action buttons</h4>
                    <ContentTabBtn content={sections[activeSectionInd].actionBtn} onChange={onActionBtnChange}/>
                </div>
                <DeleteSectionButton/>
            </div>
        </div>
    )
}