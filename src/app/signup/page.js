import Signup from "./Signup";

export const metadata = {
    title: 'Sign up',
    description: "Sign up with your email and password to start using Eport right now!",
    alternates: {
        canonical: 'https://eport.site/signup',
    }
}

export default function SignupPage() {
    return <Signup/>
}