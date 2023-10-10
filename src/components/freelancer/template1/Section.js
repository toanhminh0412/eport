// Local imports
import { EditableNavbar1 } from "./sections/editable/EditableNavbars";
import { EditableHeader1 } from "./sections/editable/EditableHeaders";

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
        
        // Headers
        case "header1":
            return <EditableHeader1 section={section} sectionInd={sectionInd}/>

        // // About me
        // case "aboutme1":
        //     return <AboutMe1 section={section} sectionInd={sectionInd}/>

        // // Services
        // case "service1":
        //     return <Service1 section={section} sectionInd={sectionInd}/>

        // // Portfolios
        // case "portfolio1":
        //     return <Portfolio1 section={section} sectionInd={sectionInd}/>

        // // Testimonials
        // case "testimonial1":
        //     return <Testimonial1 section={section} sectionInd={sectionInd}/>

        // // Contacts
        // case "contact1":
        //     return <Contact1 section={section} sectionInd={sectionInd}/>
    }
}

export function Section({ section }) {
    switch (section.sectionId) {
        // Navigation bars
        case "navbar1":
            return <Navbar1 section={section}/>
        
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
            return <Contact1 section={section}/>
    }
}