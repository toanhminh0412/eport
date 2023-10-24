// Local imports
import { EditableNavbar1, EditableNavbar2, EditableNavbar3 } from "./sections/editable/EditableNavbars";
import { EditableHeader1 } from "./sections/editable/EditableHeaders";
import { EditableAboutMe1 } from "./sections/editable/EditableAboutMes";
import { EditableService1 } from "./sections/editable/EditableServices";
import { EditablePortfolio1 } from "./sections/editable/EditablePortfolios";
import { EditableTestimonial1 } from "./sections/editable/EditableTestimonials";
import { EditableContact1 } from "./sections/editable/EditableContacts";

import { Navbar1 } from "./sections/display/Navbars";
import { Header1 } from "./sections/display/Headers";
import { AboutMe1 } from "./sections/display/AboutMes";
import { Service1 } from "./sections/display/Services";
import { Portfolio1 } from "./sections/display/Portfolios";
import { Testimonial1 } from "./sections/display/Testimonials";
import { Contact1 } from "./sections/display/Contacts";


export function EditableSection({ section, sectionInd }) {
    switch (section.sectionId) {
        // Navigation bars
        case "navbar1":
            return <EditableNavbar1 section={section} sectionInd={sectionInd}/>
        case "navbar2":
            return <EditableNavbar2 section={section} sectionInd={sectionInd}/>
        case "navbar3":
            return <EditableNavbar3 section={section} sectionInd={sectionInd}/>

        // Headers
        case "header1":
            return <EditableHeader1 section={section} sectionInd={sectionInd}/>

        // About me
        case "aboutme1":
            return <EditableAboutMe1 section={section} sectionInd={sectionInd}/>

        // Services
        case "service1":
            return <EditableService1 section={section} sectionInd={sectionInd}/>

        // Portfolios
        case "portfolio1":
            return <EditablePortfolio1 section={section} sectionInd={sectionInd}/>

        // Testimonials
        case "testimonial1":
            return <EditableTestimonial1 section={section} sectionInd={sectionInd}/>

        // Contacts
        case "contact1":
            return <EditableContact1 section={section} sectionInd={sectionInd}/>
    }
}

export function Section({ section, publish=false, ownerEmail=null }) {
    switch (section.sectionId) {
        // Navigation bars
        case "navbar1":
            return <Navbar1 section={section} publish={publish}/>
        
        // Headers
        case "header1":
            return <Header1 section={section}/>

        // About me
        case "aboutme1":
            return <AboutMe1 section={section}/>

        // Services
        case "service1":
            return <Service1 section={section}/>

        // Portfolios
        case "portfolio1":
            return <Portfolio1 section={section}/>

        // Testimonials
        case "testimonial1":
            return <Testimonial1 section={section}/>

        // Contacts
        case "contact1":
            return <Contact1 section={section} publish={publish} ownerEmail={ownerEmail}/>
    }
}