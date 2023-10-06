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
        default:
            return {}
    }
}