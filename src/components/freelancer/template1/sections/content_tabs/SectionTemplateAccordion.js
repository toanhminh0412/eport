// Next imports
import Image from "next/image"
import { useContext } from "react";

// Local imports
import sectionsDataTemplate0 from "../../sectionsData"
import { SectionsContext, ActiveContentContext } from "../../site";
import ContentTabAccordion from "@/components/ui/content_tab/ContentTabAccordion";

export function SectionTemplateAccordion() {
    const { sections, setSections, _deleteSection, _saveSite } = useContext(SectionsContext);
    const { activeSectionInd, _setActiveSectionInd } = useContext(ActiveContentContext);

    // Change section template
    const onSectionTemplateChange = (section) => {
        const newSections = [...sections];
        newSections[activeSectionInd].sectionId = section.sectionId;
        setSections(newSections);
    }

    return (
        <div>
            {Object.entries(sectionsDataTemplate0).map(([sectionName, sectionList]) => (
                <div key={sectionName}>
                    {sectionList[0].sectionType === sections[activeSectionInd].sectionType ?
                        <ContentTabAccordion
                            heading={sectionName}>
                                <>
                                {sectionList.map(section => (
                                    <div key={`section-${section.sectionId}`} value={section.sectionId} onClick={() => onSectionTemplateChange(section)}>
                                        <Image 
                                            width={200} 
                                            height={150}
                                            src={section.thumbnail}
                                            alt={section.description}
                                            className="w-full h-auto border-2 border-slate-500 hover:border-black mb-1"/>
                                    </div>
                                ))}
                                </>
                        </ContentTabAccordion>
                    :
                        null
                    }
                </div>
            ))}
        </div>
    )
}