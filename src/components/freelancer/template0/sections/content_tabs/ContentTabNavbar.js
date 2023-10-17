// React imports
import { useContext } from "react";

// Local imports
import { ActiveContentContext, SectionsContext } from "../../site";
import ContentTabLink from "@/components/ui/content_tab/ContentTabLink";
import { DeleteSectionButton } from "./DeleteSectionButton";

export default function ContentTabNavbar() {
    const { sections, setSections, _deleteSection, _saveSite } = useContext(SectionsContext);
    const { activeSectionInd, _setActiveSectionInd } = useContext(ActiveContentContext);

    // Field can only be "text" or "link"
    // Change navbar item
    const onNavItemChange = (e, navItemInd) => {
        const newSections = [...sections];
        if (e.target.name === "text") {
            newSections[activeSectionInd].navItems[navItemInd].text = e.target.value;
        } else {
            newSections[activeSectionInd].navItems[navItemInd].href = e.target.value;
        }
        setSections(newSections);
    }

    // Add a new navbar item
    const addNavItem = () => {
        const newSections = [...sections];
        const lastItemId = newSections[activeSectionInd].navItems.length === 0 ? -1 : parseInt(newSections[activeSectionInd].navItems[newSections[activeSectionInd].navItems.length - 1].id);
        newSections[activeSectionInd].navItems.push({id: lastItemId + 1, text: "Item text", href: "#"});
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
                {/* Navbar items */}
                <div className="py-3 px-2">
                    <h4 className="my-0">Navigation bar items</h4>
                    {sections[activeSectionInd].navItems.map((navItem, navItemInd) => (
                        <div key={navItem.id}>
                            <h4>Nav item #{navItemInd + 1}</h4>
                            <ContentTabLink 
                                key={navItem.id} 
                                content={{text: navItem.text, href: navItem.href}}
                                onChange={(e) => {onNavItemChange(e, navItemInd)}}
                                onDelete={() => deleteNavItem(navItemInd)}/>
                        </div>
                    ))}
                    <div className="cursor-default text-base text-slate-400 hover:text-slate-700 duration-100 my-3" onClick={addNavItem}><i className="fa-solid fa-plus"></i> Add nav item</div>
                </div>
                <DeleteSectionButton/>
            </div>
        </div>
    )
}