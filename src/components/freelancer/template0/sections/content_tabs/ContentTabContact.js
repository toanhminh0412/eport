// React imports
import { useContext } from "react";

// Local imports
import { ActiveContentContext, SectionsContext } from "../../site";
import ContentTabText from "@/components/ui/content_tab/ContentTabText";
import ContentTabIconPicker from "@/components/ui/content_tab/ContentTabIconPicker";
import ContentTabSocial from "@/components/ui/content_tab/ContentTabSocial";
import ContentTabBtn from "@/components/ui/content_tab/ContentTabBtn";
import { DeleteSectionButton } from "./DeleteSectionButton";

export default function ContentTabContact() {
    const { sections, setSections, _deleteSection } = useContext(SectionsContext);
    const { activeSectionInd, _setActiveSectionInd } = useContext(ActiveContentContext);

    // Change description
    const onDescriptionChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].description = e.target.value;
        setSections(newSections);
    }

    // Change slogan
    const onSloganChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].slogan = e.target.value;
        setSections(newSections);
    }

    // Change contact information icon
    const onContactInformationIconChange = (icon, contactInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].contactInfo[contactInd].icon = icon;
        setSections(newSections);
    }

    // Change contact information content
    const onContactInformationContentChange = (e, contactInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].contactInfo[contactInd].content = e.target.value;
        setSections(newSections);
    }

    // Add contact information
    const addContactInformation = () => {
        const newSections = [...sections];
        const lastContactInformationItem = newSections[activeSectionInd].contactInfo.length === 0 ? 1 : parseInt(newSections[activeSectionInd].contactInfo[newSections[activeSectionInd].contactInfo.length - 1].id);
        newSections[activeSectionInd].contactInfo.push({
            id: lastContactInformationItem + 1,
            icon: "fa-solid fa-phone",
            content: "123456789"
        });
        setSections(newSections);
    }

    // Remove contact information
    const removeContactInformation = (contactInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].contactInfo.splice(contactInd, 1);
        setSections(newSections);
    }

    // Change social button
    const onSocialBtnChange = (e, socialBtnInd) => {
        const newSections = [...sections];
        if (e.target.name === "option") {
            newSections[activeSectionInd].socials[socialBtnInd].social = e.target.value;
        } else {
            newSections[activeSectionInd].socials[socialBtnInd].href = e.target.value;
        }
        setSections(newSections);
    }

    // Change contact button
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

    return (
        <div>
            <DeleteSectionButton/>
            <div className="prose max-w-none">
                {/* Description */}
                <div className="px-3 py-1">
                    <h4 className="my-0">Description</h4>
                    <ContentTabText rows={5} content={sections[activeSectionInd].description} onChange={onDescriptionChange}/>
                </div>

                {/* Slogan */}
                <div className="px-3 py-1">
                    <h4 className="my-0">Slogan</h4>
                    <ContentTabText rows={5} content={sections[activeSectionInd].slogan} onChange={onSloganChange}/>
                </div>

                {/* Contact Info */}
                <div className="px-3 py-1">
                    <h4 className="my-0">Contact Information</h4>
                    {sections[activeSectionInd].contactInfo.map((contact, contactInd) => (
                        <div key={contact.id} className="bg-white rounded-md shadow-lg border border-slate-300 duration-150 py-3 px-3 mt-2 mb-4 relative">
                            <div onClick={() => removeContactInformation(contactInd)}><i className="fa-solid fa-trash text-slate-300 hover:text-slate-700 duration-100 text-lg absolute top-2 right-2"></i></div>
                            <h5 className="font-semibold">Contact Item {contactInd + 1}</h5>

                            {/* Contact icon */}
                            <label className="pt-0">
                                <span className="label-text text-slate-500">Icon</span>
                            </label>
                            <ContentTabIconPicker content={contact} onIconChange={icon => onContactInformationIconChange(icon, contactInd)}/>

                            {/* Contact content */}
                            <label className="pt-0">
                                <span className="label-text text-slate-500">Contact content</span>
                            </label>
                            <ContentTabText content={contact.content} onChange={e => onContactInformationContentChange(e, contactInd)}/>
                        </div>
                    ))}
                    <div className="cursor-default text-base text-slate-400 hover:text-slate-700 duration-100 mb-2" onClick={() => addContactInformation()}><i className="fa-solid fa-plus"></i> Add contact information</div>
                </div>

                {/* Socials button */}
                <div className="px-3 py-1">
                    <h4 className="my-0">Social buttons</h4>
                    {sections[activeSectionInd].socials.map((socialBtn, socialBtnInd) => <ContentTabSocial key={socialBtn.id} content={socialBtn} onChange={e => onSocialBtnChange(e, socialBtnInd)}/>)}
                </div>

                {/* Action button */}
                <div className="px-3 py-1">
                    <h4 className="my-0">Action buttons</h4>
                    <ContentTabBtn content={sections[activeSectionInd].actionBtn} onChange={onActionBtnChange}/>
                </div>
            </div>
        </div>
    )
}