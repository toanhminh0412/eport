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