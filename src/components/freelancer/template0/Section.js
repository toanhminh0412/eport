import { NavigationBar1 } from "./sections/Navbars";
import { Header1 } from "./sections/Headers";
import { AboutMe1 } from "./sections/AboutMes";
import { Services1 } from "./sections/Services";
import { Portfolio1 } from "./sections/Portfolios";
import { Testimonials1 } from "./sections/Testimonials";
import { Contact1 } from "./sections/Contacts";

export default function Section({ section }) {
    switch (section.sectionId) {
        // Navigation bars
        case "navbar1":
            return <NavigationBar1/>
        
        // Headers
        case "header1":
            return <Header1/>

        // About me
        case "aboutme1":
            return <AboutMe1/>

        // Services
        case "service1":
            return <Services1/>

        // Portfolios
        case "portfolio1":
            return <Portfolio1/>

        // Testimonials
        case "testimonial1":
            return <Testimonials1/>

        // Contacts
        case "contact1":
            return <Contact1/>
    }
}