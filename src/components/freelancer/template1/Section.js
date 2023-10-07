// Local imports
import { Navbar1 } from "./sections/Navbars";
import { Header1 } from "./sections/Headers";
import { AboutMe1 } from "./sections/AboutMes";
import { Service1 } from "./sections/Services";
import { Portfolio1 } from "./sections/Portfolios";
import { Testimonial1 } from "./sections/Testimonials";
import { Contact1 } from "./sections/Contact";

export default function Section({ section }) {
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