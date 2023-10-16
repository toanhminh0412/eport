// React imports
import { useContext } from "react";

// Local imports
import { ActiveContentContext, SectionsContext } from "../../site";
import ContentTabText from "@/components/ui/content_tab/ContentTabText";
import ContentTabBadge from "@/components/ui/content_tab/ContentTabBadge";
import ContentTabFormattedText from "@/components/ui/content_tab/ContentTabFormattedText";
import ContentTabImage from "@/components/ui/content_tab/ContentTabImage";
import ContentTabAccordion from "@/components/ui/content_tab/ContentTabAccordion";
import { DeleteSectionButton } from "./DeleteSectionButton";

export default function ContentTabAboutMe() {
    const { sections, setSections, _deleteSection } = useContext(SectionsContext);
    const { activeSectionInd, _setActiveSectionInd } = useContext(ActiveContentContext);

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

    // Change status name
    const onStatusChange = (e) => {
        const newSections = [...sections];
        if (e.target.name === "text") {
            newSections[activeSectionInd].status.text = e.target.value;
        } else {
            if (e.target.dataset.color) {
                newSections[activeSectionInd].status.color = e.target.dataset.color;
            }
        }
        setSections(newSections);
    }

    // Change job
    const onJobChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].job = e.target.value;
        setSections(newSections);
    }

    // Change name
    const onNameChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].name = e.target.value;
        setSections(newSections);
    }

    // Change description
    const onDescriptionChange = (value) => {
        const newSections = [...sections];
        newSections[activeSectionInd].description = value;
        setSections(newSections);
    }

    // Change tab name
    const onTabNameChange = (e, tabInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].tabs[tabInd].tabHeading = e.target.value;
        setSections(newSections);
    }

    // Change tab content key
    const onTabContentKeyChange = (e, tabInd, contentInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].tabs[tabInd].tabContent[contentInd].key = e.target.value;
        setSections(newSections);
    }

    // Change tab content value
    const onTabContentValueChange = (e, tabInd, contentInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].tabs[tabInd].tabContent[contentInd].value = e.target.value;
        setSections(newSections);
    }

    // Add tab content item
    const addTabContentItem = (tabInd) => {
        const newSections = [...sections];
        const lastTabContentItemId = newSections[activeSectionInd].tabs[tabInd].tabContent.length === 0 ? -1 : parseInt(newSections[activeSectionInd].tabs[tabInd].tabContent[newSections[activeSectionInd].tabs[tabInd].tabContent.length - 1].id);
        newSections[activeSectionInd].tabs[tabInd].tabContent.push({id: lastTabContentItemId + 1, key: "Key text", value: "Value text"});
        setSections(newSections);
    }

    // Delete tab content item
    const deleteTabContentItem = (tabInd, contentInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].tabs[tabInd].tabContent.splice(contentInd, 1);
        setSections(newSections);
    }

    // Add tab item (max 3)
    const addTabItem = () => {
        const newSections = [...sections];
        const lastTabItemId = newSections[activeSectionInd].tabs.length === 0 ? -1 : parseInt(newSections[activeSectionInd].tabs[newSections[activeSectionInd].tabs.length - 1].id);
        newSections[activeSectionInd].tabs.push({
            id: lastTabItemId + 1,
            tabHeading: "Tab Name",
            tabContent: [
                {id: 0, key: "Key", value: "Value"},
                {id: 1, key: "Key", value: "Value"},
                {id: 2, key: "Key", value: "Value"},
            ]
        });
        setSections(newSections);
    }

    // Delete tab item
    const deleteTabItem = (tabInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].tabs.splice(tabInd, 1);
        setSections(newSections);
    }

    return (
        <div>
            <div className="prose max-w-none">
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

                {/* Status */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Status</h4>
                    <ContentTabBadge content={{text: sections[activeSectionInd].status.text, color: sections[activeSectionInd].status.color}} onChange={onStatusChange}/>
                </div>

                {/* Job */}
                <div className="px-3 py-1">
                    <h4 className="my-0">Job</h4>
                    <ContentTabText rows={1} content={sections[activeSectionInd].job} onChange={onJobChange}/>
                </div>

                {/* Description */}
                <div className="px-3 py-1">
                    <h4 className="my-0">Name</h4>
                    <ContentTabText rows={1} content={sections[activeSectionInd].name} onChange={onNameChange}/>
                </div>

                {/* Description */}
                <div className="px-3 py-1">
                    <h4 className="my-0">Description</h4>
                    <ContentTabFormattedText content={sections[activeSectionInd].description} onChange={onDescriptionChange}/>
                </div>

                {/* Tab */}
                <div className="px-3 py-1">
                    <h4 className="my-1">Extra Information</h4>
                    {sections[activeSectionInd].tabs.map((tab, tabInd) => (
                        <ContentTabAccordion
                            key={tab.id}
                            heading={tab.tabHeading}>
                                <div>
                                    <div onClick={() => deleteTabItem(tabInd)}><i className="fa-solid fa-trash text-slate-300 hover:text-slate-700 duration-100 text-lg absolute top-15 right-4"></i></div>
                                    <h5 className="my-0 font-semibold">Tab Heading</h5>
                                        <ContentTabText rows={1} content={tab.tabHeading} onChange={e => onTabNameChange(e, tabInd)}/>
                                    <h5 className="mt-2 font-semibold">Tab Content</h5>
                                    {tab.tabContent.map((content, contentInd) => (
                                        <div key={content.id} className="bg-slate-100 rounded-md shadow-lg border border-slate-300 px-3 my-3 relative">
                                            <div onClick={() => deleteTabContentItem(tabInd, contentInd)}><i className="fa-solid fa-trash text-slate-300 hover:text-slate-700 duration-100 text-lg absolute top-2 right-2"></i></div>
                                            <label className="pt-0">
                                                <span className="label-text text-slate-500">Name</span>
                                            </label>
                                            <ContentTabText rows={1} content={content.key} onChange={e => onTabContentKeyChange(e, tabInd, contentInd)}/>
                                            <label className="pt-0">
                                                <span className="label-text text-slate-500">Value</span>
                                            </label>
                                            <ContentTabText rows={1} content={content.value} onChange={e => onTabContentValueChange(e, tabInd, contentInd)}/>
                                        </div>
                                    ))}
                                    <div className="cursor-default text-base text-slate-400 hover:text-slate-700 duration-100" onClick={() => addTabContentItem(tabInd)}><i className="fa-solid fa-plus"></i> Add tab content item</div>
                                </div>
                        </ContentTabAccordion>
                    ))}
                    {sections[activeSectionInd].tabs.length < 3 ?
                        <div className="cursor-default text-base text-slate-400 hover:text-slate-700 duration-100" onClick={addTabItem}><i className="fa-solid fa-plus"></i> Add tab</div>
                    :
                        <div className="text-base text-slate-400">You can only add up to 3 tabs in total</div>
                    }
                </div>
                <DeleteSectionButton/>
            </div>
        </div>
    )
}