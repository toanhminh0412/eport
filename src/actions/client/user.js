  // Redirect to login page if user is not logged in
export const checkLoggedIn = () => {
    fetch('/api/authenticate')
    .then(response => response.json())
    .then(data => {
        if (data.uid) {
            window.location.href = (data.emailVerified ? '/' : '/confirm_email');
        }
    })
}