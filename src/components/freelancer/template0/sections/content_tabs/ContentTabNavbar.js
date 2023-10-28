// React imports
import { useContext } from "react";

// Local imports
import { ActiveContentContext, SectionsContext } from "../../site";
import ContentTabInternalLink from "@/components/ui/content_tab/ContentTabInternalLink";
import ContentTabImage from "@/components/ui/content_tab/ContentTabImage";
import { DeleteSectionButton } from "./DeleteSectionButton";
import { SectionTemplateAccordion } from "./SectionTemplateAccordion";

export default function ContentTabNavbar() {
    const { sections, setSections, _deleteSection, _saveSite } = useContext(SectionsContext);
    const { activeSectionInd, _setActiveSectionInd } = useContext(ActiveContentContext);

    // Change navbar logo
    const onNavbarLogoChange = (imgSrc) => {
        const newSections = [...sections];
        newSections[activeSectionInd].logo = imgSrc;
        setSections(newSections);
    }

    // Field can only be "text" or "link"
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
        newSections[activeSectionInd].navItems.push({id: lastItemId + 1, text: "Nav item", internalHref: "#", externalHref: "#", isExternal: false});
        setSections(newSections);
    }

    // Delete an navbar item
    const deleteNavItem = navItemInd => {
        const newSections = [...sections];
        newSections[activeSectionInd].navItems.splice(navItemInd, 1);
        setSections(newSections);
    }

    return (
        <div>
            <div className="prose max-w-none">
                {/* Section Template */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Change section template</h4>
                    <SectionTemplateAccordion/>
                </div>

                {/* Logo */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Logo</h4>
                    <ContentTabImage content={sections[activeSectionInd].logo} onChange={onNavbarLogoChange} defaultImage="/img/eport-logo-color.png"/>
                </div>

                {/* Navbar items */}
                <div className="py-3 px-2">
                    <h4 className="my-0">Navigation bar items</h4>
                    {sections[activeSectionInd].navItems.map((navItem, navItemInd) => (
                        <div key={navItem.id}>
                            <h4>Nav item #{navItemInd + 1}</h4>
                            <ContentTabInternalLink
                                content={navItem}
                                onChange={(e) => {onNavItemChange(e, navItemInd)}}
                                onDelete={() => deleteNavItem(navItemInd)}
                                sections={sections}
                                activeSectionInd={activeSectionInd}/>
                        </div>
                    ))}
                    <div className="cursor-default text-base text-slate-400 hover:text-slate-700 duration-100 my-3" onClick={addNavItem}><i className="fa-solid fa-plus"></i> Add nav item</div>
                </div>
                <DeleteSectionButton/>
            </div>
        </div>
    )
}