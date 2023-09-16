import Login from "./Login";

export const metadata = {
    title: 'Login',
    description: "Login with your email/password or with Google to start using Eport right now!",
    alternates: {
        canonical: 'https://eport.site/login',
    }
}

export default function LoginPage() {
    return (<Login/>)
}