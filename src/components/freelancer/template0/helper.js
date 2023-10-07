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