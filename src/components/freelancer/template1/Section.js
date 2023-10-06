// Local imports
import { Navbar1 } from "./sections/Navbars"
import { Header1 } from "./sections/Headers"

export default function Section({ section }) {
    switch (section.sectionId) {
        // Navigation bars
        case "navbar1":
            return <Navbar1/>
        
        // Headers
        case "header1":
            return <Header1/>
    }
}