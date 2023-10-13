// React imports
import { useContext } from "react";

// Local imports
import { ActiveContentContext, SectionsContext } from "../../site";
import { DeleteSectionButton } from "./DeleteSectionButton";
import ContentTabBadge from "@/components/ui/content_tab/ContentTabBadge";
import ContentTabText from "@/components/ui/content_tab/ContentTabText";
import ContentTabFormattedText from "@/components/ui/content_tab/ContentTabFormattedText";
import ContentTabNameValue from "@/components/ui/content_tab/ContentTabNameValue";
import ContentTabImage from "@/components/ui/content_tab/ContentTabImage";

export default function ContentTabAboutMe() {
    const { sections, setSections } = useContext(SectionsContext);
    const { activeSectionInd, _setActiveSectionInd } = useContext(ActiveContentContext);

    // Change avatar
    const onAvatarChange = imgSrc => {
        const newSections = [...sections];
        newSections[activeSectionInd].avatar = imgSrc;
        setSections(newSections);
    }

    // Change status
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

    // Change heading
    const onHeadingChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].heading = e.target.value;
        setSections(newSections);
    }

    // Change bio
    const onBioChange = (value) => {
        const newSections = [...sections];
        newSections[activeSectionInd].bio = value;
        setSections(newSections);
    }

    // Change extra info
    const onInfoChange = (e, infoInd) => {
        const newSections = [...sections];
        if (e.target.name === "name") {
            newSections[activeSectionInd].extraInfo[infoInd].name = e.target.value;
        } else {
            newSections[activeSectionInd].extraInfo[infoInd].value = e.target.value;
        }
        setSections(newSections);
    }

    // Add extra info
    const addInfo = () => {
        const newSections = [...sections];
        const lastInfoId = newSections[activeSectionInd].extraInfo.length === 0 ? -1 : parseInt(newSections[activeSectionInd].extraInfo[newSections[activeSectionInd].extraInfo.length - 1].id);
        newSections[activeSectionInd].extraInfo.push({id: lastInfoId + 1, name: "Info name", value: "Info value"});
        setSections(newSections);
    }

    // Delete extra info
    const deleteInfo = infoInd => {
        const newSections = [...sections];
        newSections[activeSectionInd].extraInfo.splice(infoInd, 1);
        setSections(newSections);
    }

    return (
        <div>
            <div className="prose max-w-none py-3">
                {/* Avatar */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Avatar</h4>
                    <ContentTabImage content={sections[activeSectionInd].avatar} onChange={onAvatarChange} defaultImage="/img/freelancer-template1-aboutme1-avatar.jpg"/>
                </div>

                {/* Status */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Status</h4>
                    <ContentTabBadge content={{text: sections[activeSectionInd].status.text, color: sections[activeSectionInd].status.color}} onChange={onStatusChange}/>
                </div>

                {/* Heading */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Heading</h4>
                    <ContentTabText content={sections[activeSectionInd].heading} onChange={onHeadingChange}/>
                </div>

                {/* Bio */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Bio</h4>
                    <ContentTabFormattedText content={sections[activeSectionInd].bio} onChange={onBioChange}/>
                </div>

                {/* Extra info */}
                <div className="px-3 py-1">
                    <h4 className="my-0">Extra info</h4>
                    {sections[activeSectionInd].extraInfo.map((info, infoInd) => (
                    <div key={info.id}>
                        <h4 className="my-0">Extra info #{infoInd + 1}</h4>
                        <ContentTabNameValue content={info} onChange={e => onInfoChange(e, infoInd)} onDelete={() => deleteInfo(infoInd)}/>
                    </div>
                    ))}
                    <div className="cursor-default text-base text-slate-400 hover:text-slate-700 duration-100" onClick={addInfo}><i className="fa-solid fa-plus"></i> Add info</div>
                </div>
                <DeleteSectionButton/>
            </div>
        </div>
    )
}