import { cookies } from "next/headers";
import EmailConfirmForm from "./EmailConfirmForm";


export default async function ConfirmEmail() {
    const cookieStore = cookies();
    const email = cookieStore.get('eport-email').value;

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