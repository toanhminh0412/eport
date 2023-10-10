/**
 * Params: sectionId (string)
 * Returns: section initial data (object)
 */
export function getSectionInitialData(sectionId) {
    switch (sectionId) {
        // Navigation bars
        case "navbar1":
            return {
                sectionId: "navbar1",
                sectionType: "navbar",
                navItems: [
                    {
                        id: 0,
                        text: "About me",
                        href: "#"
                    },
                    {
                        id: 1,
                        text: "Services",
                        href: "#"
                    },
                    {
                        id: 2,
                        text: "Portfolios",
                        href: "#"
                    },
                    {
                        id: 3,
                        text: "Testimonials",
                        href: "#"
                    },
                ],
            }
        
        // Headers
        case "header1":
            return {
                sectionId: "header1",
            }

        // About me
        case "aboutme1":
            return {
                sectionId: "aboutme1",
            }

        // Services
        case "service1":
            return {
                sectionId: "service1",
            }

        // Portfolios
        case "portfolio1":
            return {
                sectionId: "portfolio1",
            }

        // Testimonials
        case "testimonial1":
            return {
                sectionId: "testimonial1",
            }

        // Contacts
        case "contact1":
            return {
                sectionId: "contact1",
            }

        default:
            return {}
    }
}