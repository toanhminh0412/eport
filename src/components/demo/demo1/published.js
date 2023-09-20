import Section from "./Section";
import Footer from "./sections/Footer";

export default function PublishedDemo1({site}) {
    return (
            <main className="pt-20">
                <div className="mt-10 sm:mt-0 mb-20">
                    {/* Profile section */}
                    <Section content={site.sections[0]}/>

                    {/* Main sections */}
                    {site.sections.slice(1, site.sections.length-1).map((section, index) => <Section key={`${section.heading}-${index}`} content={section} userPlan={site.plan}/>)}

                    {/* Footer */}
                    <Footer content={site.sections[site.sections.length-1]}/>
                </div>
            </main>
    )
}