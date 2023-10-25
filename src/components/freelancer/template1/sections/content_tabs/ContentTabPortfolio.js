// React imports
import { useContext } from "react";

// Local imports
import { ActiveContentContext, SectionsContext } from "../../site";
import { DeleteSectionButton } from "./DeleteSectionButton";
import ContentTabText from "@/components/ui/content_tab/ContentTabText";
import ContentTabLink from "@/components/ui/content_tab/ContentTabLink";
import ContentTabFormattedText from "@/components/ui/content_tab/ContentTabFormattedText";
import ContentTabAddDeleteImage from "@/components/ui/content_tab/ContentTabAddDeleteImage";
import ContentTabAccordion from "@/components/ui/content_tab/ContentTabAccordion";
import { SectionTemplateAccordion } from "./SectionTemplateAccordion";


export default function ContentTabPortfolio() {
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

    /*** Manage projects ***/
    // Add project images
    const addProjectImages = (e, projectInd) => {
        const newSections = [...sections];
        const projectImagesLength = newSections[activeSectionInd].projects[projectInd].images.length;
        const lastId = projectImagesLength === 0 ? -1 : parseInt(newSections[activeSectionInd].projects[projectInd].images[projectImagesLength - 1].id);
        for (let i = 0; i < e.target.files.length; i++) {
            newSections[activeSectionInd].projects[projectInd].images.push({
                id: lastId + 1 + i,
                src: URL.createObjectURL(e.target.files[i])
            });
        }
        setSections(newSections);
    }

    // Delete project images
    const deleteProjectImages = (e, projectInd, imageInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].projects[projectInd].images.splice(imageInd, 1);
        setSections(newSections);
    }

    // Change project name
    const onProjectNameChange = (e, projectInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].projects[projectInd].name = e.target.value;
        setSections(newSections);
    }

    // Change project company
    const onProjectCompanyChange = (e, projectInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].projects[projectInd].company = e.target.value;
        setSections(newSections);
    }

    // Change project URL
    const onProjectURLChange = (e, projectInd) => {
        const newSections = [...sections];
        if (e.target.name === "text") {
            newSections[activeSectionInd].projects[projectInd].projectUrl.text = e.target.value;
        } else if (e.target.name === "link") {
            newSections[activeSectionInd].projects[projectInd].projectUrl.href = e.target.value;
        }
        setSections(newSections);
    }

    // Change project description
    const onProjectDescriptionChange = (value, projectInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].projects[projectInd].description = value;
        setSections(newSections);
    }

    // Add a new project
    const addProject = () => {
        const newSections = [...sections];
        const lastProjectId = newSections[activeSectionInd].projects.length === 0 ? -1 : parseInt(newSections[activeSectionInd].projects[newSections[activeSectionInd].projects.length - 1].id);
        newSections[activeSectionInd].projects.push({
            id: lastProjectId + 1,
            name: "Project name",
            company: "Company",
            projectUrl: {text: "Visit project", href: "#"},
            description: "Project description",
            images: []
        });
        setSections(newSections);
    }

    // Delete a project
    const deleteProject = projectInd => {
        const newSections = [...sections];
        newSections[activeSectionInd].projects.splice(projectInd, 1);
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

                {/* Projects */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Projects</h4>
                    {sections[activeSectionInd].projects.map((project, projectInd) => (
                        <ContentTabAccordion
                            key={project.id}
                            heading={project.name}>
                                <div>
                                <span className="text-slate-300 hover:text-slate-700 duration-100 absolute top-15 right-4 cursor-default text-sm"><i className="fa-solid fa-trash text-lg mr-1" onClick={() => deleteProject(projectInd)}></i>Delete project</span>
                                    {/* Images */}
                                    <label className="text-sm">Project images</label>
                                    <ContentTabAddDeleteImage content={project} addImage={e => addProjectImages(e, projectInd)} deleteImage={(e, imageInd) => deleteProjectImages(e, projectInd, imageInd)}/>
                                    {/* Name */}
                                    <label className="text-sm">Project name</label>
                                    <ContentTabText content={project.name} onChange={e => onProjectNameChange(e, projectInd)}/>
                                    {/* Company/time period */}
                                    <label className="text-sm">Company/time period</label>
                                    <ContentTabText content={project.company} onChange={e => onProjectCompanyChange(e, projectInd)}/>
                                    {/* Project URL */}
                                    <label className="text-sm">Project link</label>
                                    <ContentTabLink content={project.projectUrl} onChange={e => onProjectURLChange(e, projectInd)}/>
                                    {/* Project description */}
                                    <label className="text-sm">Project description</label>
                                    <ContentTabFormattedText content={project.description} onChange={e => onProjectDescriptionChange(e, projectInd)}/>
                                </div>
                        </ContentTabAccordion>
                    ))}
                    <div className="cursor-default text-base text-slate-400 hover:text-slate-700 duration-100" onClick={addProject}><i className="fa-solid fa-plus"></i> Add project</div>
                </div>

                <DeleteSectionButton/>
            </div>
        </div>
    )
}