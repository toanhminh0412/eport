import secureLocalStorage from "react-secure-storage";

// Redirect to login page if user is not logged in
export const checkLoggedIn = () => {
    fetch('/api/authenticate')
    .then(response => response.json())
    .then(data => {
        if (data.uid && (window.location.pathname.includes('login') || window.location.pathname.includes('signup'))) {
            secureLocalStorage.setItem('eport-uid', data.uid);
            window.location.href = (data.emailVerified ? '/' : '/confirm_email');
        } else if (!data.uid && !window.location.pathname.includes('login') && !window.location.pathname.includes('signup')) {
            window.location.href = '/login';
        }
    })
}