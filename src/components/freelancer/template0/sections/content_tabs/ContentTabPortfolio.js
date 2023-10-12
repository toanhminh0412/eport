// React imports
import { useContext } from "react";

// Local imports
import { ActiveContentContext, SectionsContext } from "../../site";
import ContentTabText from "@/components/ui/content_tab/ContentTabText";
import ContentTabAddTag from "@/components/ui/content_tab/ContentTabAddTag";
import ContentTabBtn from "@/components/ui/content_tab/ContentTabBtn";
import { DeleteSectionButton } from "./DeleteSectionButton";

export default function ContentTabPortfolio() {
    const { sections, setSections, _deleteSection } = useContext(SectionsContext);
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

    // Change portfolio description
    const onPortfolioDescriptionChange = (e, portfolioInd) => {
        const newSections = [...sections];
        newSections[activeSectionInd].portfolios[portfolioInd].description = e.target.value;
        setSections(newSections);
    }

    // Add portfolio tag item
    const addPortfolioTag = (portfolioInd, tag) => {
        console.log(portfolioInd)
        console.log(tag);
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
        const lastPortfolioItem = newSections[activeSectionInd].portfolios.length === 0 ? 1 : parseInt(newSections[activeSectionInd].portfolios[newSections[activeSectionInd].portfolios.length - 1].id);
        newSections[activeSectionInd].portfolios.push({
            id: 0,
            title: "Project Name",
            description: "The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section. The Projects section serves as a portfolio of your work and a testament to your skills and expertise. It is an opportunity to make a strong impression on potential clients, employers, or collaborators. Be sure to include a variety of projects that showcase your versatility and abilities, and ensure that your descriptions are clear, concise, and engaging. To edit this section, go to Edit Site and find Projects section.",
            images: [
                "/img/freelancer-template0-portfolio1-bg.jpg",
                "/img/freelancer-template1-portfolio1-photo1.jpg",
                "/img/header-bg.jpg",
            ],
            tags: ["Development", "Website", "Portfolio"],
            actionBtn: {
                text: "See Docs",
                href: "#",
                color: "blue"
            }
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
                        <div key={portfolio.id} className="bg-white rounded-md shadow-lg border border-slate-300 duration-150 py-3 px-3 mt-2 mb-4 relative">
                            <div onClick={() => deletePorfolioItem(portfolioInd)}><i className="fa-solid fa-trash text-slate-300 hover:text-slate-700 duration-100 text-lg absolute top-2 right-2"></i></div>
                            <h5 className="font-semibold">Portolio Item {portfolioInd + 1}</h5>
                            {/* Title */}
                            <label className="pt-0">
                                <span className="label-text text-slate-500">Title</span>
                            </label>
                            <ContentTabText content={portfolio.title} onChange={e => onPortfolioTitleChange(e, portfolioInd)}/>

                            {/* Action button */}
                            <div className="px-3 py-1">
                                <h4 className="my-0">Action buttons</h4>
                                    {portfolio.actionBtns.map((actionBtn, actionBtnInd) => (
                                        <div key={actionBtn.id}>
                                            <ContentTabBtn content={actionBtn} onChange={e => onActionBtnChange(e, portfolioInd, actionBtnInd)}/>
                                        </div>
                                    ))} 
                            </div>

                            {/* Description */}
                            <label className="pt-0">
                                <span className="label-text text-slate-500">Description</span>
                            </label>
                            <ContentTabText rows={10} content={portfolio.description} onChange={e => onPortfolioDescriptionChange(e, portfolioInd)}/>

                            {/* Tags */}
                            <label className="pt-0">
                                <span className="label-text text-slate-500">Tags</span>
                            </label>
                            <ContentTabAddTag portfolio={portfolio} portfolioInd={portfolioInd} addTag={addPortfolioTag} removeTag={removePortfolioTag}/>
                        </div>
                    ))}
                    <div className="cursor-default text-base text-slate-400 hover:text-slate-700 duration-100 mb-2" onClick={() => addPortfolioItem()}><i className="fa-solid fa-plus"></i> Add portfolio item</div>
                </div>
                <DeleteSectionButton/>
            </div>
        </div>
    )
}