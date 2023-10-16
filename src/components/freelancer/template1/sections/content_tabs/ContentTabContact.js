// React imports
import { useContext } from "react";

// Local imports
import { ActiveContentContext, SectionsContext } from "../../site";
import { DeleteSectionButton } from "./DeleteSectionButton";
import ContentTabText from "@/components/ui/content_tab/ContentTabText";
import ContentTabBadge from "@/components/ui/content_tab/ContentTabBadge";
import ContentTabBtn from "@/components/ui/content_tab/ContentTabBtn";

export default function ContentTabContact() {
    const { sections, setSections } = useContext(SectionsContext);
    const { activeSectionInd, _setActiveSectionInd } = useContext(ActiveContentContext);

    // Change heading
    const onHeadingChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].heading = e.target.value;
        setSections(newSections);
    }

    // Change description
    const onDescriptionChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].description = e.target.value;
        setSections(newSections);
    }

    // Change form heading
    const onFormHeadingChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].formHeading = e.target.value;
        setSections(newSections);
    }

    // Change form tagline
    const onFormTaglineChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].formTagline = e.target.value;
        setSections(newSections);
    }

    // Change form button
    const onFormBtnChange = (e) => {
        const newSections = [...sections];
        if (e.target.name === "text") {
            newSections[activeSectionInd].formBtn.text = e.target.value;
        } else {
            if (e.target.dataset.color) {
                newSections[activeSectionInd].formBtn.color = e.target.dataset.color;
            }
        }
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

                {/* Description */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Description</h4>
                    <ContentTabText rows={5} content={sections[activeSectionInd].description} onChange={onDescriptionChange}/>
                </div>

                {/* Form heading */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Form heading</h4>
                    <ContentTabText content={sections[activeSectionInd].formHeading} onChange={onFormHeadingChange}/>
                </div>

                {/* Form tagline */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Form tagline</h4>
                    <ContentTabText rows={5} content={sections[activeSectionInd].formTagline} onChange={onFormTaglineChange}/>
                </div>

                {/* Form button */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Form button</h4>
                    <ContentTabBtn content={sections[activeSectionInd].formBtn} onChange={onFormBtnChange}/>
                </div>
            </div>
            <DeleteSectionButton />
        </div>
    )
}