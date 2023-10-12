// React imports
import { useContext } from "react";

// Local imports
import { ActiveContentContext, SectionsContext } from "../../site";
import ContentTabText from "@/components/ui/content_tab/ContentTabText";
import { DeleteSectionButton } from "./DeleteSectionButton";

export default function ContentTabAboutMe() {
    const { sections, setSections, _deleteSection } = useContext(SectionsContext);
    const { activeSectionInd, _setActiveSectionInd } = useContext(ActiveContentContext);

    // Change tag name
    const onTagChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].tag = e.target.value;
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
    const onDescriptionChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].description = e.target.value;
        setSections(newSections);
    }

    // Change tab name
    const onTabNameChange = (e, tabInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].tab[tabInd].tabHeading = e.target.value;
        setSections(newSections);
    }

    // Change tab content key
    const onTabContentKeyChange = (e, tabInd, contentInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].tab[tabInd].tabContent[contentInd].key = e.target.value;
        setSections(newSections);
    }

    // Change tab content value
    const onTabContentValueChange = (e, tabInd, contentInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].tab[tabInd].tabContent[contentInd].value = e.target.value;
        setSections(newSections);
    }

    // Add tab content item
    const addTabContentItem = (tabInd) => {
        const newSections = [...sections];
        const lastTabContentItemId = newSections[activeSectionInd].tab[tabInd].tabContent.length === 0 ? 1 : parseInt(newSections[activeSectionInd].tab[tabInd].tabContent[newSections[activeSectionInd].tab[tabInd].tabContent.length - 1].id);
        newSections[activeSectionInd].tab[tabInd].tabContent.push({id: lastTabContentItemId + 1, key: "Key text", value: "Value text"});
        setSections(newSections);
    }

    // Delete tab content item
    const deleteTabContentItem = (tabInd, contentInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].tab[tabInd].tabContent.splice(contentInd, 1);
        setSections(newSections);
    }

    return (
        <div>
            <DeleteSectionButton/>
            <form className="prose max-w-none">
                {/* Tag */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Tag</h4>
                    <ContentTabText content={sections[activeSectionInd].tag} onChange={onTagChange}/>
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
                    <ContentTabText rows={5} content={sections[activeSectionInd].description} onChange={onDescriptionChange}/>
                </div>

                {/* Tab */}
                <div className="px-3 py-1">
                    <h4 className="my-0">Extra Information</h4>
                    {sections[activeSectionInd].tab.map((tab, tabInd) => (
                        <div key={tab.id} className="bg-white rounded-md shadow-lg border border-slate-300 duration-150 py-3 px-3 my-2 relative">
                            <h5 className="my-0 font-semibold">Tab Heading</h5>
                            <ContentTabText rows={1} content={tab.tabHeading} onChange={e => onTabNameChange(e, tabInd)}/>
                            <h5 className="mt-2 font-semibold">Tab Content</h5>
                            {tab.tabContent.map((content, contentInd) => (
                                <div key={content.id} className="bg-slate-100 rounded-md shadow-lg border border-slate-300 px-3 my-3 relative">
                                    <div onClick={() => deleteTabContentItem(tabInd, contentInd)}><i className="fa-solid fa-trash text-slate-300 hover:text-slate-700 duration-100 text-lg absolute top-2 right-2"></i></div>
                                    <label className="pt-0">
                                        <span className="label-text text-slate-500">Key</span>
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
                    ))}
                </div> 
            </form>
        </div>
    )
}