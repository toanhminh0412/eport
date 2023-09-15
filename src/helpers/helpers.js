import sensitiveValues from "@/data/sensitive-values";

// Add https in front of string if string doesn't have
export const convertToURL = url => {
    if (!url) return '#';
    
    // If a string start withs one or multiple '#', remove all of the beginning '#'s
    for (let i = 0; i < url.length; i++) {
        if (url[i] !== '#') {
            url = url.slice(i);
            break;
        }
    }

    return url.includes('https') || url === '#' || url.startsWith('/') ? url : `https://${url}`;
}

// Check domain sensitive values
export default function domainValidator(domain) {
    for (let i = 0; i < sensitiveValues.length; i++) {
        if (domain === sensitiveValues[i]) {
            return "Your domain contains sensitive value: '" + domain + "'. Please try another one!";
        }
    }
    return "";
}