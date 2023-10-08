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
                heading: {
                    text: "John Doe",
                    href: "#"
                },
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
                        text: "Portfolio",
                        href: "#"
                    }
                ],
                actionBtn: {
                    text: "Contact me",
                    href: "#"
                }
            }
        
        // Headers
        case "header1":
            return {
                sectionId: "header1",
                sectionType: "header",
            }

        // About me
        case "aboutme1":
            return {
                sectionId: "aboutme1",
                sectionType: "aboutme",
            }

        // Services
        case "service1":
            return {
                sectionId: "service1",
                sectionType: "service",
            }

        // Portfolios
        case "portfolio1":
            return {
                sectionId: "portfolio1",
                sectionType: "portfolio",
            }

        // Testimonials
        case "testimonial1":
            return {
                sectionId: "testimonial1",
                sectionType: "testimonial",
            }

        // Contacts
        case "contact1":
            return {
                sectionId: "contact1",
                sectionType: "contact",
            }

        default:
            return {}
    }
}