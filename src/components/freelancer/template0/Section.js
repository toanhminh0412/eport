// Local imports
import { EditableNavbar1, EditableNavbar2 } from "./sections/editable/EditableNavbars";
import { EditableHeader1, EditableHeader2 } from "./sections/editable/EditableHeaders";
import { EditableAboutMe1, EditableAboutMe2 } from "./sections/editable/EditableAboutMes";
import { EditableService1, EditableService2 } from "./sections/editable/EditableServices";
import { EditablePortfolio1, EditablePortfolio2 } from "./sections/editable/EditablePortfolios";
import { EditableTestimonial1, EditableTestimonial2 } from "./sections/editable/EditableTestimonials";
import { EditableContact1, EditableContact2 } from "./sections/editable/EditableContacts";

import { NavBar1, Navbar2 } from "./sections/display/Navbars";
import { Header1, Header2 } from "./sections/display/Headers";
import { AboutMe1, AboutMe2 } from "./sections/display/AboutMes";
import { Services1, Services2 } from "./sections/display/Services";
import { Portfolio1, Portfolio2 } from "./sections/display/Portfolios";
import { Testimonials1, Testimonials2 } from "./sections/display/Testimonials";
import { Contact1, Contact2 } from "./sections/display/Contacts";

export function EditableSection({ section, sectionInd }) {
    switch (section.sectionId) {
        // Navigation bars
        case "navbar1":
            return <EditableNavbar1 section={section} sectionInd={sectionInd}/>
        
        case "navbar2":
            return <EditableNavbar2 section={section} sectionInd={sectionInd}/>
        
        // // Headers
        case "header1":
            return <EditableHeader1 section={section} sectionInd={sectionInd}/>

        case "header2":
            return <EditableHeader2 section={section} sectionInd={sectionInd}/>

        // // About me
        case "aboutme1":
            return <EditableAboutMe1 section={section} sectionInd={sectionInd}/>
        
        case "aboutme2":
            return <EditableAboutMe2 section={section} sectionInd={sectionInd}/>

        // // Services
        case "service1":
            return <EditableService1 section={section} sectionInd={sectionInd}/>
        
        case "service2":
            return <EditableService2 section={section} sectionInd={sectionInd}/>

        // // Portfolios
        case "portfolio1":
            return <EditablePortfolio1 section={section} sectionInd={sectionInd}/>

        case "portfolio2":
            return <EditablePortfolio2 section={section} sectionInd={sectionInd}/>

        // // Testimonials
        case "testimonial1":
            return <EditableTestimonial1 section={section} sectionInd={sectionInd}/>

        case "testimonial2":
            return <EditableTestimonial2 section={section} sectionInd={sectionInd}/>

        // // Contacts
        case "contact1":
            return <EditableContact1 section={section} sectionInd={sectionInd}/>
        
        case "contact2":
            return <EditableContact2 section={section} sectionInd={sectionInd}/>
    }
}

export function Section({ section, publish=false, ownerEmail=null }) {
    switch (section.sectionId) {
        // Navigation bars
        case "navbar1":
            return <NavBar1 section={section} publish={publish}/>

        case "navbar2":
            return <Navbar2 section={section} publish={publish}/>
        
        // Headers
        case "header1":
            return <Header1 section={section}/>

        case "header2":
            return <Header2 section={section}/>

        // About me
        case "aboutme1":
            return <AboutMe1 section={section}/>

        case "aboutme2":
            return <AboutMe2 section={section}/>

        // Services
        case "service1":
            return <Services1 section={section}/>

        case "service2":
            return <Services2 section={section}/>

        // Portfolios
        case "portfolio1":
            return <Portfolio1 section={section}/>

        case "portfolio2":
            return <Portfolio2 section={section}/>

        // Testimonials
        case "testimonial1":
            return <Testimonials1 section={section}/>

        case "testimonial2":
            return <Testimonials2 section={section}/>

        // Contacts
        case "contact1":
            return <Contact1 section={section} publish={publish} ownerEmail={ownerEmail}/>
        
        case "contact2":
            return <Contact2 section={section}/>
    }
}