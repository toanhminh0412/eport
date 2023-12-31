// React imports
import { useContext } from "react";

// Local imports
import { ActiveContentContext, SectionsContext } from "../../site";
import ContentTabText from "@/components/ui/content_tab/ContentTabText";
import ContentTabBtn from "@/components/ui/content_tab/ContentTabBtn";
import ContentTabNumber from "@/components/ui/content_tab/ContentTabNumber";
import ContentTabFormattedText from "@/components/ui/content_tab/ContentTabFormattedText";
import ContentTabAccordion from "@/components/ui/content_tab/ContentTabAccordion";
import { DeleteSectionButton } from "./DeleteSectionButton";
import { SectionTemplateAccordion } from "./SectionTemplateAccordion";

export default function ContentTabTestimonial() {
    const { sections, setSections, _deleteSection, _saveSite } = useContext(SectionsContext);
    const { activeSectionInd, _setActiveSectionInd } = useContext(ActiveContentContext);

    // Change section heading
    const onHeadingChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].heading = e.target.value;
        setSections(newSections); 
    }

    // Change section description
    const onDescriptionChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].description = e.target.value;
        setSections(newSections);
    }

    // Change rating star
    const onRatingStarChange = (e, testimonialInd) => {
        const newSections = [...sections];
        if (e.target.value === '' || e.target.value > 5) {
            e.target.value = 0;
        }
        newSections[activeSectionInd].testimonials[testimonialInd].ratingStars = parseInt(e.target.value);  
        setSections(newSections);
    }

    // Change testimonial content
    const onTestimonialContentChange = (value, testimonialInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].testimonials[testimonialInd].content = value;
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
        const lastTestimonialItem = newSections[activeSectionInd].testimonials.length === 0 ? -1 : parseInt(newSections[activeSectionInd].testimonials[newSections[activeSectionInd].testimonials.length - 1].id);
        newSections[activeSectionInd].testimonials.push({
            id: lastTestimonialItem + 1,
            ratingStars: 4,
            content: "<p>The Testimonials section serves as a social proof and validation of your work or services. It can greatly influence potential clients or customers in their decision-making process. Make sure the testimonials you feature are genuine, compelling, and relevant to your target audience.</p>",
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
                {/* Section template */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Change section template</h4>
                    <SectionTemplateAccordion/>   
                </div>

                {/* Section Heading */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Heading</h4>
                    <ContentTabText rows={1} content={sections[activeSectionInd].heading} onChange={onHeadingChange}/>
                </div>

                {/* Section Description */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Description</h4>
                    <ContentTabText rows={3} content={sections[activeSectionInd].description} onChange={onDescriptionChange}/>
                </div>

                {/* Testimonials */}
                <div className="px-3 py-1">
                    <h4 className="my-0">Testimonials</h4>
                    {sections[activeSectionInd].testimonials.map((testimonial, testimonialInd) => (
                        <ContentTabAccordion
                            key={testimonial.id}
                            heading={`Testimonial #${testimonialInd + 1}`}>
                                <div>
                                    <div onClick={() => deleteTestimonialItem(testimonialInd)}><i className="fa-solid fa-trash text-slate-300 hover:text-slate-700 duration-100 text-lg absolute top-15 right-4"></i></div>
                                    {/* Rating */}
                                    <label className="pt-0">
                                        <span className="label-text text-slate-700 font-medium">Rating</span>
                                    </label>
                                    <ContentTabNumber content={testimonial.ratingStars} min={0} max={5} onChange={e => onRatingStarChange(e, testimonialInd)}/>

                                    {/* Content */}
                                    <label className="pt-0">
                                        <span className="label-text text-slate-700 font-medium">Content</span>
                                    </label>
                                    <ContentTabFormattedText content={testimonial.content} onChange={e => onTestimonialContentChange(e, testimonialInd)}/>

                                    {/* Name */}
                                    <label className="pt-0">
                                        <span className="label-text text-slate-700 font-medium">Reviewer Name</span>
                                    </label>
                                    <ContentTabText content={testimonial.name} onChange={e => onTestimonialNameChange(e, testimonialInd)}/>

                                    {/* Job */}
                                    <label className="pt-0">
                                        <span className="label-text text-slate-700 font-medium">Reviewer Job</span>
                                    </label>
                                    <ContentTabText content={testimonial.job} onChange={e => onTestimonialJobChange(e, testimonialInd)}/>
                                </div>
                        </ContentTabAccordion>
                    ))}
                    <div className="cursor-default text-base text-slate-400 hover:text-slate-700 duration-100 mb-2" onClick={() => addTestimonialItem()}><i className="fa-solid fa-plus"></i> Add testimonial item</div>
                </div>

                {/* Action button */}
                {sections[activeSectionInd].sectionId === "testimonial1" ?
                    <div className="px-3 py-1">
                        <h4 className="my-0">Action buttons</h4>
                        <ContentTabBtn content={sections[activeSectionInd].actionBtn} onChange={onActionBtnChange}/>
                    </div>
                : null}

                <DeleteSectionButton/>
            </div>
        </div>
    )
}