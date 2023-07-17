// Add https in front of string if string doesn't have
export const convertToURL = url => {
    return url.includes('https') || url === '#' || url.startsWith('/') ? url : `https://${url}`;
}