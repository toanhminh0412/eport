// React imports
import { useContext } from "react";

// Local imports
import { ActiveContentContext, SectionsContext } from "../../site";
import ContentTabText from "@/components/ui/content_tab/ContentTabText";
import ContentTabBtn from "@/components/ui/content_tab/ContentTabBtn";
import ContentTabSocial from "@/components/ui/content_tab/ContentTabSocial";
import ContentTabImage from "@/components/ui/content_tab/ContentTabImage";
import ContentTabAccordion from "@/components/ui/content_tab/ContentTabAccordion";
import { DeleteSectionButton } from "./DeleteSectionButton";

export default function ContentTabHeader() {
    const { sections, setSections, _deleteSection, _saveSite } = useContext(SectionsContext);
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
        const scaleX = 100 / croppedArea.width;
        const scaleY = 100 / croppedArea.height;
        const transform = {
            x: `${-croppedArea.x * scaleX}%`,
            y: `${-croppedArea.y * scaleY}%`,
            scaleX,
            scaleY,
        };

        const imageStyle = {
            transform: `translate3d(${transform.x}, ${transform.y}, 0) scale3d(${transform.scaleX},${transform.scaleY}, 1)`
        }
        
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

    // Change description
    const onDescriptionChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].description = e.target.value;
        setSections(newSections);
    }

    // Change social buttons
    const onSocialBtnChange = (e, socialBtnInd) => {
        const newSections = [...sections];
        if (e.target.name === "option") {
            newSections[activeSectionInd].socials[socialBtnInd].social = e.target.value;
        } else {
            newSections[activeSectionInd].socials[socialBtnInd].href = e.target.value;
        }
        setSections(newSections);
    }

    // Change action buttons
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

    // Add social button
    const addSocialButton = () => {
        const newSections = [...sections];
        const lastSocialButtonId = newSections[activeSectionInd].socials.length === 0 ? -1 : parseInt(newSections[activeSectionInd].socials[newSections[activeSectionInd].socials.length - 1].id);
        newSections[activeSectionInd].socials.push({
            id: lastSocialButtonId + 1,
            social: "facebook",
            href:  "#"
        });
        setSections(newSections);
    }

    // Delete social button
    const deleteSocialButton = (socialBtnInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].socials.splice(socialBtnInd, 1);
        setSections(newSections);
    }

    return (
        <div>
            <div className="prose max-w-none">
                {/* Background image */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Background Image</h4>
                    <ContentTabImage content={sections[activeSectionInd].backgroundImage} onChange={onBackgroundImageChange} defaultImage="/img/freelancer-template0-header1-white-bg.png"/>
                </div>

                {/* Avatar */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Avatar</h4>
                    <ContentTabImage 
                        content={sections[activeSectionInd].avatar.src} 
                        onChange={onAvatarChange} 
                        defaultImage="/img/freelancer-template0-aboutme1-avatar.jpg"
                        croppable
                        cropper={sections[activeSectionInd].avatar.cropper}
                        onCropAreaChange={onAvatarCrop}
                        aspectRatio={3/4}/>
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

                {/* Description */}
                <div className="px-3 py-1">
                    <h4 className="my-0">Description</h4>
                    <ContentTabText rows={5} content={sections[activeSectionInd].description} onChange={onDescriptionChange}/>
                </div>

                {/* Socials button */}
                <div className="px-3 py-2">
                    <h4 className="my-0">Social Buttons</h4>
                    <div>
                        {sections[activeSectionInd].socials.map((socialBtn, socialBtnInd) => (
                            <ContentTabAccordion
                                key={socialBtn.id}
                                heading={`Social button #${socialBtnInd + 1}`}>
                                <div onClick={() => deleteSocialButton(socialBtnInd)}><i className="fa-solid fa-trash z-[1000] text-slate-300 hover:text-slate-700 duration-100 text-lg absolute top-12 right-4"></i></div>
                                <ContentTabSocial key={socialBtn.id} content={socialBtn} onChange={e => onSocialBtnChange(e, socialBtnInd)}/>
                            </ContentTabAccordion>
                        ))}
                        <div className="cursor-default text-base text-slate-400 hover:text-slate-700 duration-100" onClick={addSocialButton}><i className="fa-solid fa-plus"></i> Add social button</div>
                    </div>
                </div>

                {/* Action button */}
                <div className="px-3 py-2">
                    <ContentTabAccordion
                        heading={"Action buttons"}>
                            <div>{sections[activeSectionInd].actionBtns.map((btn, btnInd) => <ContentTabBtn key={btn.id} content={btn} onChange={e => onActionBtnChange(e, btnInd)}/>)}</div>
                    </ContentTabAccordion>
                </div>
                <DeleteSectionButton/>
            </div>
        </div>
    )
}