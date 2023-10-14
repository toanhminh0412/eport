// React imports
import { useContext } from "react";

// Local imports
import { ActiveContentContext, SectionsContext } from "../../site";
import ContentTabText from "@/components/ui/content_tab/ContentTabText";
import ContentTabIconPicker from "@/components/ui/content_tab/ContentTabIconPicker";
import ContentTabFormattedText from "@/components/ui/content_tab/ContentTabFormattedText";
import ContentTabAccordion from "@/components/ui/content_tab/ContentTabAccordion";
import { DeleteSectionButton } from "./DeleteSectionButton";

export default function ContentTabService() {
    const { sections, setSections, _deleteSection } = useContext(SectionsContext);
    const { activeSectionInd, _setActiveSectionInd } = useContext(ActiveContentContext);

    // Change heading
    const onHeadingChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].heading = e.target.value;
        setSections(newSections);
    }

    // Change description
    const onDescriptionChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].description = e.target.value;
        setSections(newSections);
    }

    // Change service icon
    const onServiceIconChange = (icon, serviceInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].services[serviceInd].icon = icon;
        setSections(newSections);
    }

    // Change service title
    const onServiceTitleChange = (e, serviceInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].services[serviceInd].title = e.target.value;
        setSections(newSections);
    }

    // Change service price
    const onServicePriceChange = (e, serviceInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].services[serviceInd].price = e.target.value;
        setSections(newSections);
    }

    // Change service content
    const onServiceContentChange = (value, serviceInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].services[serviceInd].content = value;
        setSections(newSections);
    }

    // Add service item
    const addServiceItem = () => {
        const newSections = [...sections];
        const lastServiceItem = newSections[activeSectionInd].services.length === 0 ? 1 : parseInt(newSections[activeSectionInd].services[newSections[activeSectionInd].services.length - 1].id);
        newSections[activeSectionInd].services.push({
            id: lastServiceItem + 1,
            title: "Portfolio Design",
            price: "200 CAD / month",
            content: "Remember that the goal of your Services section is to inform potential clients about what you offer, build trust, and persuade them to take action. Be clear, concise, and persuasive in your descriptions, and provide easy-to-follow steps for visitors to engage with your services. To edit this section, go to Edit Site and find Services section."
        });
        setSections(newSections);
    }

    // Delete service item
    const deleteServiceItem = (serviceInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].services.splice(serviceInd, 1);
        setSections(newSections);
    }

    return (
        <div>
            <div className="prose max-w-none">
                {/* Heading */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Heading</h4>
                    <ContentTabText content={sections[activeSectionInd].heading} onChange={onHeadingChange}/>
                </div>

                {/* Description */}
                <div className="px-3 py-1">
                    <h4 className="my-0">Description</h4>
                    <ContentTabText rows={5} content={sections[activeSectionInd].description} onChange={onDescriptionChange}/>
                </div>

                {/* Services */}
                <div className="px-3 py-1">
                    <h4 className="my-0">Services</h4>
                    {sections[activeSectionInd].services.map((service, serviceInd) => (
                        <ContentTabAccordion
                            key={service.id} 
                            childrenHeading = {
                                <h5 className="font-semibold">Service Item {serviceInd + 1}</h5>
                            }
                            childrenBody = {
                                <div>
                                    <div onClick={() => deleteServiceItem(serviceInd)}><i className="fa-solid fa-trash text-slate-300 hover:text-slate-700 duration-100 text-lg absolute top-15 right-4"></i></div>
                                    {/* Icont */}
                                    <label className="pt-0">
                                        <span className="label-text text-slate-700 font-medium">Icon</span>
                                    </label>
                                    <ContentTabIconPicker content={service} onIconChange={icon => onServiceIconChange(icon, serviceInd)}/>
                                
                                    {/* Title */}
                                    <label className="pt-0">
                                            <span className="label-text text-slate-700 font-medium">Title</span>
                                    </label>
                                        <ContentTabText content={service.title} onChange={e => onServiceTitleChange(e, serviceInd)}/>
                                    
                                        {/* Price */}
                                    <label className="pt-0">
                                        <span className="label-text text-slate-700 font-medium">Price</span>
                                    </label>
                                    <ContentTabText content={service.price} onChange={e => onServicePriceChange(e, serviceInd)}/>
                                
                                    {/* Content */}
                                    <label className="pt-0">
                                        <span className="label-text text-slate-700 font-medium">Content</span>
                                    </label>
                                    <ContentTabFormattedText content={service.content} onChange={e => onServiceContentChange(e, serviceInd)}/>
                                </div>
                            }
                        />
                    ))}
                    <div className="cursor-default text-base text-slate-400 hover:text-slate-700 duration-100 mb-2" onClick={() => addServiceItem()}><i className="fa-solid fa-plus"></i> Add service item</div>
                </div>
                <DeleteSectionButton/>
            </div>
        </div>
    )
}