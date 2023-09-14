import Section from "./Section";
import Footer from "./sections/Footer";

export default function PublishedDemo1({site}) {
    return (
            <main>
                <div className="inset-x-0 w-11/12 mx-auto flex flex-row min-h-screen gap-x-3 flex-wrap md:flex-nowrap mb-32">
                    <Section content={site.sections[0]}/>
                    <div className="card min-h-screen w-full md:w-[60%] lg:w-2/3 bg-white mt-[2vh]">
                        <div className="p-8">
                            {site.sections.slice(1, site.sections.length-1).map((section, index) => <Section key={`${section.heading}-${index}`} content={section} userPlan={site.plan}/>)}
                        </div>
                    
                    {/* Contact me */}
                    <Footer content={site.sections[site.sections.length-1]}/>
                    </div>
                </div>
            </main>
    )
}