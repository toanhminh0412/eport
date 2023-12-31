// React imports
import { useContext } from "react";

// Local imports
import { ActiveContentContext, SectionsContext } from "../../site";
import ContentTabText from "@/components/ui/content_tab/ContentTabText";
import ContentTabBtn from "@/components/ui/content_tab/ContentTabBtn";
import { DeleteSectionButton } from "./DeleteSectionButton";
import ContentTabImage from "@/components/ui/content_tab/ContentTabImage";
import ContentTabAccordion from "@/components/ui/content_tab/ContentTabAccordion";
import ContentTabInternalBtn from "@/components/ui/content_tab/ContentTabInternalBtn";
import { SectionTemplateAccordion } from "./SectionTemplateAccordion";

export default function ContentTabHeader() {
    const { sections, setSections, _deleteSection } = useContext(SectionsContext);
    const { activeSectionInd, _setActiveSectionInd } = useContext(ActiveContentContext);

    // Change background image
    const onBackgroundImageChange = imgSrc => {
        const newSections = [...sections];
        newSections[activeSectionInd].backgroundImage = imgSrc;
        setSections(newSections);
    }

    // Change avatar
    const onAvatarChange = imgSrc => {
        const newSections = [...sections];
        newSections[activeSectionInd].avatar.src = imgSrc;
        setSections(newSections);
    }

    // Crop avatar
    const onAvatarCrop = (croppedArea, cropper) => {
        console.log(croppedArea);
        const scaleX = 100 / croppedArea.width;
        const scaleY = 100 / croppedArea.height;
        const transform = {
            x: `${-croppedArea.x * scaleX}%`,
            y: `${-croppedArea.y * scaleY}%`,
            scaleX,
            scaleY,
            width: `calc(100% + 0.5px)`,
            height: "auto"
        };

        const imageStyle = {
            transform: `translate3d(${transform.x}, ${transform.y}, 0) scale3d(${transform.scaleX},${transform.scaleY}, 1)`,
            width: transform.width,
            height: transform.height
        };
        const newSections = [...sections];
        newSections[activeSectionInd].avatar.cropper = cropper;
        newSections[activeSectionInd].avatar.style = imageStyle;
        setSections(newSections);
    }

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
        } else if (e.target.name === "internalLink") {
            newSections[activeSectionInd].actionBtns[actionBtnInd].internalHref = e.target.value;
        } else if (e.target.name === "externalLink") {
            newSections[activeSectionInd].actionBtns[actionBtnInd].externalHref = e.target.value;
        } else if (e.target.name === "isExternal") {
            newSections[activeSectionInd].actionBtns[actionBtnInd].isExternal = e.target.checked;
        } else {
            if (e.target.dataset.color) {
                newSections[activeSectionInd].actionBtns[actionBtnInd].color = e.target.dataset.color;
            }
        }
        setSections(newSections);
    }

    // Add action buttons
    const addActionBtn = () => {
        const newSections = [...sections];
        const lastBtnId = newSections[activeSectionInd].actionBtns.length === 0 ? -1 : parseInt(newSections[activeSectionInd].actionBtns[newSections[activeSectionInd].actionBtns.length - 1].id);
        newSections[activeSectionInd].actionBtns.push({id: lastBtnId + 1, text: "Button text", internalHref: "#", externalHref: "#", isExternal: false, color: "yellow"});
        setSections(newSections);
    }

    // Delete action buttons
    const deleteActionBtn = actionBtnInd => {
        const newSections = [...sections];
        newSections[activeSectionInd].actionBtns.splice(actionBtnInd, 1);
        setSections(newSections);
    }

    return (
        <div>
            <div className="prose max-w-none py-3">
                {/* Section Template */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Change section template</h4>
                    <SectionTemplateAccordion/>
                </div>

                {/* Background image */}
                <div className="px-3 pb-1">
                    <h4 className="my-0">Background Image</h4>
                    <ContentTabImage content={sections[activeSectionInd].backgroundImage} onChange={onBackgroundImageChange} defaultImage="/img/freelancer-template1-header-bg.png"/>
                </div>

                {/* Avatar */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Avatar</h4>
                    <ContentTabImage 
                        content={sections[activeSectionInd].avatar.src} 
                        onChange={onAvatarChange} 
                        defaultImage="/img/freelancer-template1-header-avatar.jpg"
                        croppable
                        cropper={sections[activeSectionInd].avatar.cropper}
                        onCropAreaChange={onAvatarCrop}/>
                </div>

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
                    <ContentTabAccordion
                        heading={"Action buttons"}>
                            <div>
                                {sections[activeSectionInd].actionBtns.map((btn, btnInd) => (
                                <div key={btn.id}>
                                    <h4 className="my-0">Action button #{btnInd + 1}</h4>
                                    <ContentTabInternalBtn content={btn} onChange={e => onActionBtnChange(e, btnInd)} onDelete={() => deleteActionBtn(btnInd)} sections={sections} activeSectionInd={activeSectionInd}/>
                                </div>
                                ))}
                                <div className="cursor-default text-base text-slate-400 hover:text-slate-700 duration-100" onClick={addActionBtn}><i className="fa-solid fa-plus"></i> Add action button</div>
                            </div>
                    </ContentTabAccordion>
                </div>
                <DeleteSectionButton/>
            </div>
        </div>
    )
}