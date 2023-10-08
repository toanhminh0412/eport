// Local imports
import { EditableNavbar1 } from "./sections/editable/EditableNavbars";

import { Navbar1 } from "./sections/display/Navbars";
import { Header1 } from "./sections/display/Headers";
import { AboutMe1 } from "./sections/display/AboutMes";
import { Service1 } from "./sections/display/Services";
import { Portfolio1 } from "./sections/display/Portfolios";
import { Testimonial1 } from "./sections/display/Testimonials";
import { Contact1 } from "./sections/display/Contact";

export function EditableSection({ section }) {
    switch (section.sectionId) {
        // Navigation bars
        case "navbar1":
            return <EditableNavbar1 section={section}/>
        
        // // Headers
        // case "header1":
        //     return <Header1/>

        // // About me
        // case "aboutme1":
        //     return <AboutMe1/>

        // // Services
        // case "service1":
        //     return <Service1/>

        // // Portfolios
        // case "portfolio1":
        //     return <Portfolio1/>

        // // Testimonials
        // case "testimonial1":
        //     return <Testimonial1/>

        // // Contacts
        // case "contact1":
        //     return <Contact1/>
    }
}

export function Section({ section }) {
    switch (section.sectionId) {
        // Navigation bars
        case "navbar1":
            return <Navbar1/>
        
        // Headers
        case "header1":
            return <Header1/>

        // About me
        case "aboutme1":
            return <AboutMe1/>

        // Services
        case "service1":
            return <Service1/>

        // Portfolios
        case "portfolio1":
            return <Portfolio1/>

        // Testimonials
        case "testimonial1":
            return <Testimonial1/>

        // Contacts
        case "contact1":
            return <Contact1/>
    }
}