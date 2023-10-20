import domainSensitiveValues from "@/data/sensitive-values";

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
    for (let i = 0; i < domainSensitiveValues.length; i++) {
        if (domain === domainSensitiveValues[i]) {
            return "Your domain contains sensitive value: '" + domain + "'. Please try another one!";
        }
    }
    return "";
}

// Convert milliseconds to years, months, days, hours, minutes and seconds, rounded to the nearest unit
export const convertMilliseconds = milliseconds => {
    let years = Math.floor(milliseconds / (1000 * 60 * 60 * 24 * 365));
    let months = Math.floor(milliseconds / (1000 * 60 * 60 * 24 * 30));
    let days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    let hours = Math.floor(milliseconds / (1000 * 60 * 60));
    let minutes = Math.floor(milliseconds / (1000 * 60));
    let seconds = Math.floor(milliseconds / (1000));

    if (years > 0) {
        return years + " years";
    } else if (months > 0) {
        return months + " months";
    } else if (days > 0) {
        return days + " days";
    } else if (hours > 0) {
        return hours + " hours";
    } else if (minutes > 0) {
        return minutes + " minutes";
    } else {
        return seconds + " seconds";
    }
}
