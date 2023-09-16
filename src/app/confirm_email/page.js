// Next imports
import { cookies } from "next/headers";

// Local imports
import EmailConfirmForm from "./EmailConfirmForm";
import { getUserFromToken } from "@/helpers/authentication";

export const metadata = {
    title: 'Confirm Email',
    description: "Confirm your email to start using Eport right now!",
}

export default async function ConfirmEmail() {
    const cookieStore = cookies();
    const userToken = cookieStore.get('eport-token').value;
    const user = getUserFromToken(userToken);
    const email = user.email;

    return (
        <div className="relative flex flex-col justify-center mb-32">
            <div className="card w-fit h-fit max-w-sm bg-white shadow-xl mx-auto mt-40">
                <div className="card-body">
                    <p>A confirmation code has been sent to <span className='link link-primary'>{email}</span>. Please type in the code below to start using the app!</p>
                </div>
            </div>
            <EmailConfirmForm email={email}/>
        </div>
    )
}