import ForgotPasswordForm from './ForgotPasswordForm';

export const metadata = {
    title: 'Forgot Password',
    description: "Forgot your password? No worries! Enter your email below and we'll send you a link to reset your password.",
}

export default function ForgotPassword() {
    return (
        <div className="relative flex flex-col justify-center mb-32 max-w-sm mx-auto">
            <ForgotPasswordForm/>
        </div>
    )
}