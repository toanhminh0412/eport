// React imports
import { useContext } from "react";

// Local imports
import { ActiveContentContext, SectionsContext } from "../../site";
import { DeleteSectionButton } from "./DeleteSectionButton";
import ContentTabText from "@/components/ui/content_tab/ContentTabText";
import ContentTabAccordion from "@/components/ui/content_tab/ContentTabAccordion";
import ContentTabCheckbox from "@/components/ui/content_tab/ContentTabCheckbox";
import ContentTabInternalBtn from "@/components/ui/content_tab/ContentTabInternalBtn";
import { SectionTemplateAccordion } from "./SectionTemplateAccordion";


export default function ContentTabService() {
    const { sections, setSections } = useContext(SectionsContext);
    const { activeSectionInd, _setActiveSectionInd } = useContext(ActiveContentContext);

    // Change heading
    const onHeadingChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].heading = e.target.value;
        setSections(newSections);
    }

    // Change tagline
    const onTaglineChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].tagline = e.target.value;
        setSections(newSections);
    }

    /*** Edit services ***/
    // Change service name
    const onServiceNameChange = (e, serviceInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].services[serviceInd].name = e.target.value;
        setSections(newSections);
    }

    // Change service price
    const onServicePriceChange = (e, serviceInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].services[serviceInd].price = e.target.value;
        setSections(newSections);
    }

    // Change service recommendation
    const changeServiceRecommendation = (e, serviceInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].services[serviceInd].recommended = e.target.checked;
        setSections(newSections);
    }

    // Change service action button
    const onServiceActionBtnChange = (e, serviceInd) => {
        const newSections = [...sections];
        if (e.target.name === "text") {
            newSections[activeSectionInd].services[serviceInd].actionBtn.text = e.target.value;
        } else if (e.target.name === "internalLink") {
            newSections[activeSectionInd].services[serviceInd].actionBtn.internalHref = e.target.value;
        } else if (e.target.name === "externalLink") {
            newSections[activeSectionInd].services[serviceInd].actionBtn.externalHref = e.target.value;
        } else if (e.target.name === "isExternal") {
            newSections[activeSectionInd].services[serviceInd].actionBtn.isExternal = e.target.checked;
        } else {
            if (e.target.dataset.color) {
                newSections[activeSectionInd].services[serviceInd].actionBtn.color = e.target.dataset.color;
            }
        }
        setSections(newSections);
    }

    // Change service pros
    const onServiceProsChange = (e, serviceInd, proInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].services[serviceInd].pros[proInd].text = e.target.value;
        setSections(newSections);
    }

    // Add service pros
    const addServicePros = (serviceInd) => {
        const newSections = [...sections];
        const lastId = newSections[activeSectionInd].services[serviceInd].pros.length === 0 ? -1 : parseInt(newSections[activeSectionInd].services[serviceInd].pros[newSections[activeSectionInd].services[serviceInd].pros.length - 1].id);
        newSections[activeSectionInd].services[serviceInd].pros.push({
            id: lastId + 1,
            text: "New pro for this service"
        });
        setSections(newSections);
    }

    // Delete service pros
    const deleteServicePros = (serviceInd, proInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].services[serviceInd].pros.splice(proInd, 1);
        setSections(newSections);
    }

    // Change service cons
    const onServiceConsChange = (e, serviceInd, conInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].services[serviceInd].cons[conInd].text = e.target.value;
        setSections(newSections);
    }

    // Add service cons
    const addServiceCons = (serviceInd) => {
        const newSections = [...sections];
        const lastId = newSections[activeSectionInd].services[serviceInd].cons.length === 0 ? -1 : parseInt(newSections[activeSectionInd].services[serviceInd].cons[newSections[activeSectionInd].services[serviceInd].cons.length - 1].id);
        newSections[activeSectionInd].services[serviceInd].cons.push({
            id: lastId + 1,
            text: "New con for this service"
        });
        setSections(newSections);
    }

    // Delete service cons
    const deleteServiceCons = (serviceInd, conInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].services[serviceInd].cons.splice(conInd, 1);
        setSections(newSections);
    }

    // Add service
    const addService = () => {
        const newSections = [...sections];
        const lastId = newSections[activeSectionInd].services.length === 0 ? -1 : parseInt(newSections[activeSectionInd].services[newSections[activeSectionInd].services.length - 1].id);
        newSections[activeSectionInd].services.push({
            id: lastId + 1,
            name: "Service name",
            price: "20 USD",
            recommended: false,
            actionBtn: {
                text: "Get started",
                href: "#",
                color: "orange"
            },
            pros: [
                {
                    id: 0,
                    text: "Service pro"
                },
                {
                    id: 1,
                    text: "Service pro 2"
                }
            ],
            cons: [
                {
                    id: 0,
                    text: "Service con"
                },
                {
                    id: 1,
                    text: "Service con 2"
                }
            ]
        });
        setSections(newSections);
    }

    // Delete service
    const deleteService = serviceInd => {
        const newSections = [...sections];
        newSections[activeSectionInd].services.splice(serviceInd, 1);
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

                {/* Heading */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Heading</h4>
                    <ContentTabText content={sections[activeSectionInd].heading} onChange={onHeadingChange}/>
                </div>

                {/* Tagline */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Tagline</h4>
                    <ContentTabText rows={3} content={sections[activeSectionInd].tagline} onChange={onTaglineChange}/>
                </div>

                {/* Services */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Services</h4>
                    {sections[activeSectionInd].services.map((service, serviceInd) => (
                        <ContentTabAccordion
                            key={service.id}
                            heading={service.name}>
                                <div>
                                    <span className="text-slate-300 hover:text-slate-700 duration-100 absolute top-15 right-4 cursor-default text-sm"><i className="fa-solid fa-trash text-lg mr-1" onClick={() => deleteService(serviceInd)}></i>Delete service</span>
                                    {/* Name */}
                                    <label className="text-sm">Service name</label>
                                    <ContentTabText content={service.name} onChange={e => onServiceNameChange(e, serviceInd)}/>
                                    {/* Price */}
                                    <label className="text-sm">Service price</label>
                                    <ContentTabText content={service.price} onChange={e => onServicePriceChange(e, serviceInd)}/>
                                    {/* Recommend service? */}
                                    <ContentTabCheckbox label="Save this service as <strong>Recommended</strong>" content={service.recommended} onChange={e => changeServiceRecommendation(e, serviceInd)}/>
                                    {/* Action button */}
                                    <label className="text-sm">Action button</label>
                                    <ContentTabInternalBtn content={service.actionBtn} onChange={e => onServiceActionBtnChange(e, serviceInd)} sections={sections} activeSectionInd={activeSectionInd}/>
                                    {/* Pros */}
                                    <label className="text-sm">Pros</label>
                                    {service.pros.map((pro, proInd) => (
                                    <div key={`pro-${pro.id}`} className="flex flex-row"><i className="fa-solid fa-check text-green-500 text-xl mr-2 my-auto"></i><span className="flex-grow"><ContentTabText content={pro.text} onChange={e => onServiceProsChange(e, serviceInd, proInd)} onDelete={() => deleteServicePros(serviceInd, proInd)}/></span></div>
                                    ))}
                                    <div className="cursor-default text-base text-slate-400 hover:text-slate-700 duration-100" onClick={() => addServicePros(serviceInd)}><i className="fa-solid fa-plus"></i> Add pro</div>
                                    {/* Cons */}
                                    <label className="text-sm">Cons</label>
                                    {service.cons.map((con, conInd) => (
                                    <div key={`con-${con.id}`} className="flex flex-row"><i className="fa-solid fa-xmark text-red-500 text-xl mr-2 my-auto"></i><span className="flex-grow"><ContentTabText content={con.text} onChange={e => onServiceConsChange(e, serviceInd, conInd)} onDelete={() => deleteServiceCons(serviceInd, conInd)}/></span></div>
                                    ))}
                                    <div className="cursor-default text-base text-slate-400 hover:text-slate-700 duration-100" onClick={() => addServiceCons(serviceInd)}><i className="fa-solid fa-plus"></i> Add con</div>
                                </div>
                        </ContentTabAccordion>
                    ))}
                    <div className="cursor-default text-base text-slate-400 hover:text-slate-700 duration-100" onClick={addService}><i className="fa-solid fa-plus"></i> Add service</div>
                </div>
                <DeleteSectionButton/>
            </div>
        </div>
    )
}