// React imports
import { useContext } from "react";

// Local imports
import { ActiveContentContext, SectionsContext } from "../../site";
import ContentTabLink from "@/components/ui/content_tab/ContentTabLink";
import ContentTabInternalLink from "@/components/ui/content_tab/ContentTabInternalLink";
import { DeleteSectionButton } from "./DeleteSectionButton";

export default function ContentTabNavbar() {
    const { sections, setSections, _deleteSection } = useContext(SectionsContext);
    const { activeSectionInd, _setActiveSectionInd } = useContext(ActiveContentContext);

    // Change navbar heading
    const onHeadingChange = (e) => {
        const newSections = [...sections];
        if (e.target.name === "text") {
            newSections[activeSectionInd].heading.text = e.target.value;
        } else if (e.target.name === "internalLink") {
            newSections[activeSectionInd].heading.internalHref = e.target.value;
        } else if (e.target.name === "externalLink") {
            newSections[activeSectionInd].heading.externalHref = e.target.value;
        } else {
            newSections[activeSectionInd].heading.isExternal = e.target.checked;
        }
        setSections(newSections);
    }

    // Change navbar item
    const onNavItemChange = (e, navItemInd) => {
        const newSections = [...sections];
        if (e.target.name === "text") {
            newSections[activeSectionInd].navItems[navItemInd].text = e.target.value;
        } else if (e.target.name === "internalLink") {
            newSections[activeSectionInd].navItems[navItemInd].internalHref = e.target.value;
        } else if (e.target.name === "externalLink") {
            newSections[activeSectionInd].navItems[navItemInd].externalHref = e.target.value;
        } else {
            newSections[activeSectionInd].navItems[navItemInd].isExternal = e.target.checked;
        }
        setSections(newSections);
    }

    // Add a new navbar item
    const addNavItem = () => {
        const newSections = [...sections];
        const lastItemId = newSections[activeSectionInd].navItems.length === 0 ? -1 : parseInt(newSections[activeSectionInd].navItems[newSections[activeSectionInd].navItems.length - 1].id);
        newSections[activeSectionInd].navItems.push({id: lastItemId + 1, text: "Item text", internalHref: "#", externalHref: "#", isExternal: false});
        setSections(newSections);
    }

    // Delete an navbar item
    const deleteNavItem = navItemInd => {
        const newSections = [...sections];
        newSections[activeSectionInd].navItems.splice(navItemInd, 1);
        setSections(newSections);
    }

    // Change navbar action button
    const onActionBtnChange = (e) => {
        const newSections = [...sections];
        if (e.target.name === "text") {
            newSections[activeSectionInd].actionBtn.text = e.target.value;
        } else if (e.target.name === "internalLink") {
            newSections[activeSectionInd].actionBtn.internalHref = e.target.value;
        } else if (e.target.name === "externalLink") {
            newSections[activeSectionInd].actionBtn.externalHref = e.target.value;
        } else {
            newSections[activeSectionInd].actionBtn.isExternal = e.target.checked;
        }
        setSections(newSections);
    }

    return (
        <div>
            <div className="prose max-w-none">
                {/* Heading */}
                <div className="p-3">
                    <h4 className="my-0">Heading</h4>
                    <ContentTabInternalLink
                        content={sections[activeSectionInd].heading}
                        onChange={onHeadingChange}
                        sections={sections}
                        activeSectionInd={activeSectionInd}/>
                </div>
                {/* Navbar items */}
                <div className="p-3">
                    <h4 className="my-0">Navigation bar items</h4>
                    {sections[activeSectionInd].navItems.map((navItem, navItemInd) => (
                        <div key={navItem.id}>
                            <h4 className="my-0">Nav item #{navItemInd + 1}</h4>
                            <ContentTabInternalLink
                                content={navItem}
                                onChange={(e) => {onNavItemChange(e, navItemInd)}}
                                onDelete={() => deleteNavItem(navItemInd)}
                                sections={sections}
                                activeSectionInd={activeSectionInd}/>
                        </div>
                    ))}
                    <div className="cursor-default text-base text-slate-400 hover:text-slate-700 duration-100" onClick={addNavItem}><i className="fa-solid fa-plus"></i> Add nav item</div>
                </div>

                <div className="p-3">
                    <h4 className="my-0">Action button</h4>
                    <ContentTabInternalLink
                        content={sections[activeSectionInd].actionBtn}
                        onChange={onActionBtnChange}
                        sections={sections}
                        activeSectionInd={activeSectionInd}/>
                </div>
                <DeleteSectionButton/>
            </div>
        </div>
    )
}