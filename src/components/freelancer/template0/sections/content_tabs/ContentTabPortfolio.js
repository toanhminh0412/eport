// React imports
import { useContext } from "react";

// Local imports
import { ActiveContentContext, SectionsContext } from "../../site";
import ContentTabText from "@/components/ui/content_tab/ContentTabText";
import ContentTabAddTag from "@/components/ui/content_tab/ContentTabAddTag";
import ContentTabBtn from "@/components/ui/content_tab/ContentTabBtn";
import ContentTabFormattedText from "@/components/ui/content_tab/ContentTabFormattedText";
import ContentTabAddDeleteImage from "@/components/ui/content_tab/ContentTabAddDeleteImage";
import ContentTabAccordion from "@/components/ui/content_tab/ContentTabAccordion";
import { DeleteSectionButton } from "./DeleteSectionButton";

export default function ContentTabPortfolio() {
    const { sections, setSections, _deleteSection, _saveSite } = useContext(SectionsContext);
    const { activeSectionInd, _setActiveSectionInd } = useContext(ActiveContentContext);

    // Change heading
    const onHeadingChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].heading = e.target.value;
        setSections(newSections);
    }

    // Change section description
    const onSectionDescriptionChange = (e) => {
        const newSections = [...sections];
        newSections[activeSectionInd].sectionDescription = e.target.value;
        setSections(newSections);
    }

    // Change portfolio title
    const onPortfolioTitleChange = (e, portfolioInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].portfolios[portfolioInd].title = e.target.value;
        setSections(newSections);
    }

    // Change action button
    const onActionBtnChange = (e, portfolioInd, actionBtnInd) => {
        const newSections = [...sections];
        if (e.target.name === "text") {
            newSections[activeSectionInd].portfolios[portfolioInd].actionBtns[actionBtnInd].text = e.target.value;
        } else {
            if (e.target.dataset.color) {
                newSections[activeSectionInd].portfolios[portfolioInd].actionBtns[actionBtnInd].color = e.target.dataset.color;
            } else {
                newSections[activeSectionInd].portfolios[portfolioInd].actionBtns[actionBtnInd].href = e.target.value;
            }
        }
        setSections(newSections);
    }

    // Add portfolio image
    const addPortfolioImage = (e, portfolioInd) => {
        const newSections = [...sections];
        const porfolioImagesLength = newSections[activeSectionInd].portfolios[portfolioInd].images.length;
        const lastId = porfolioImagesLength === 0 ? -1 : parseInt(newSections[activeSectionInd].portfolios[portfolioInd].images[porfolioImagesLength - 1].id);
        for (let i = 0; i < e.target.files.length; i++) {
            newSections[activeSectionInd].portfolios[portfolioInd].images.push({
                id: lastId + 1 + i,
                src: URL.createObjectURL(e.target.files[i])
            });
        }
        setSections(newSections);
    }

    // Delete portfolio image
    const deletePortfolioImage = (e, portfolioInd, imageInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].portfolios[portfolioInd].images.splice(imageInd, 1);
        setSections(newSections);
    }

    // Change portfolio description
    const onPortfolioDescriptionChange = (value, portfolioInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].portfolios[portfolioInd].description = value;
        setSections(newSections);
    }

    // Add portfolio tag item
    const addPortfolioTag = (portfolioInd, tag) => {
        const newSections = [...sections];
        newSections[activeSectionInd].portfolios[portfolioInd].tags.push(tag);
        setSections(newSections);
    }

    // Remove portfolio tag item
    const removePortfolioTag = (portfolioInd, tagInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].portfolios[portfolioInd].tags.splice(tagInd, 1)
        setSections(newSections);
    }

    // Add portfolio item
    const addPortfolioItem = () => {
        const newSections = [...sections];
        const lastPortfolioItem = newSections[activeSectionInd].portfolios.length === 0 ? -1 : parseInt(newSections[activeSectionInd].portfolios[newSections[activeSectionInd].portfolios.length - 1].id);
        newSections[activeSectionInd].portfolios.push({
            id: lastPortfolioItem + 1,
            title: "Project Name",
            description: "The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section.",
            images: [
                {
                    id: 0,
                    src: "/img/freelancer-template0-portfolio1-bg.jpg"
                },
                {
                    id: 1,
                    src: "/img/freelancer-template1-portfolio1-photo1.jpg"
                },
                {
                    id: 2,
                    src: "/img/header-bg.jpg"
                }
            ],
            tags: ["Development", "Website", "Portfolio"],
            actionBtns: [
                {
                    id: 0,
                    text: "Learn more",
                    href: null,
                    color: "orange"
                },
                {
                    id: 1,
                    text: "See Docs",
                    href: "#",
                    color: "orange"
                }
            ]
        });
        setSections(newSections);
    }

    // Delete portfolio item
    const deletePorfolioItem = (portfolioInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].portfolios.splice(portfolioInd, 1);
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

                {/* Section description */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Section Description</h4>
                    <ContentTabText rows={5} content={sections[activeSectionInd].sectionDescription} onChange={onSectionDescriptionChange}/>
                </div>

                {/* Portfolios Item */}
                <div className="px-3 pt-3 pb-1">
                    <h4 className="my-0">Portfolios</h4>
                    {sections[activeSectionInd].portfolios.map((portfolio, portfolioInd) => (
                        <ContentTabAccordion
                            key={portfolio.id}
                            heading={portfolio.title}>
                                <div>
                                    <div onClick={() => deletePorfolioItem(portfolioInd)}><i className="fa-solid fa-trash text-slate-300 hover:text-slate-700 duration-100 text-lg absolute top-15 right-4"></i></div>
                                    
                                    {/* Title */}
                                    <label className="pt-0">
                                        <span className="label-text text-slate-700 font-medium">Title</span>
                                    </label>
                                    <ContentTabText content={portfolio.title} onChange={e => onPortfolioTitleChange(e, portfolioInd)}/>

                                    {/* Action button */}
                                    <label className="pt-0">
                                        <span className="label-text text-slate-700 font-medium">Action buttons</span>
                                    </label>
                                    <div className="px-1 py-1">
                                        {portfolio.actionBtns.map((actionBtn, actionBtnInd) => (
                                            <div key={actionBtn.id}>
                                                <ContentTabBtn content={actionBtn} onChange={e => onActionBtnChange(e, portfolioInd, actionBtnInd)}/>
                                            </div>
                                        ))} 
                                    </div>
                                    
                                    {/* Add Delete Images */}
                                    <label className="pt-0">
                                        <span className="label-text text-slate-700 font-medium">Project images</span>
                                    </label>
                                    <ContentTabAddDeleteImage content={portfolio} addImage={e => addPortfolioImage(e, portfolioInd)} deleteImage={(e, imageInd) => deletePortfolioImage(e, portfolioInd, imageInd)}/>

                                    {/* Description */}
                                    <label className="pt-0">
                                        <span className="label-text text-slate-700 font-medium">Description</span>
                                    </label>
                                    <ContentTabFormattedText content={portfolio.description} onChange={e => onPortfolioDescriptionChange(e, portfolioInd)}/>

                                    {/* Tags */}
                                    <label className="pt-0">
                                        <span className="label-text text-slate-700 font-medium">Tags</span>
                                    </label>
                                    <ContentTabAddTag portfolio={portfolio} addTag={tag => addPortfolioTag(portfolioInd, tag)} removeTag={(tagInd) => removePortfolioTag(portfolioInd, tagInd)}/>
                                </div>
                        </ContentTabAccordion>
                    ))}
                    <div className="cursor-default text-base text-slate-400 hover:text-slate-700 duration-100 mb-2" onClick={() => addPortfolioItem()}><i className="fa-solid fa-plus"></i> Add portfolio item</div>
                </div>
                <DeleteSectionButton/>
            </div>
        </div>
    )
}