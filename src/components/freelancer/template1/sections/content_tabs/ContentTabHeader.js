// React imports
import { useContext } from "react";

// Local imports
import { ActiveContentContext, SectionsContext } from "../../site";
import ContentTabText from "@/components/ui/content_tab/ContentTabText";
import ContentTabBtn from "@/components/ui/content_tab/ContentTabBtn";
import { DeleteSectionButton } from "./DeleteSectionButton";

export default function ContentTabHeader() {
    const { sections, setSections } = useContext(SectionsContext);
    const { activeSectionInd, _setActiveSectionInd } = useContext(ActiveContentContext);

    // Change heading
    const onHeadingChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].heading = e.target.value;
        setSections(newSections);
    }

    // Change slogan
    const onSloganChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].slogan = e.target.value;
        setSections(newSections);
    }

    // Chang action buttons
    const onActionBtnChange = (e, actionBtnInd) => {
        const newSections = [...sections];
        if (e.target.name === "text") {
            newSections[activeSectionInd].actionBtns[actionBtnInd].text = e.target.value;
        } else {
            if (e.target.dataset.color) {
                newSections[activeSectionInd].actionBtns[actionBtnInd].color = e.target.dataset.color;
            } else {
                newSections[activeSectionInd].actionBtns[actionBtnInd].href = e.target.value;
            }
        }
        setSections(newSections);
    }

    return (
        <div>
            <DeleteSectionButton/>
            <form className="prose max-w-none">
                {/* Heading */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Heading</h4>
                    <ContentTabText content={sections[activeSectionInd].heading} onChange={onHeadingChange}/>
                </div>

                {/* Slogan */}
                <div className="px-3 py-1">
                    <h4 className="my-0">Slogan</h4>
                    <ContentTabText rows={2} content={sections[activeSectionInd].slogan} onChange={onSloganChange}/>
                </div>

                {/* Action button */}
                <div className="px-3 py-1">
                    <h4 className="my-0">Action buttons</h4>
                    {sections[activeSectionInd].actionBtns.map((btn, btnInd) => <ContentTabBtn key={btn.id} content={btn} onChange={e => onActionBtnChange(e, btnInd)}/>)}
                </div>
            </form>
        </div>
    )
}