import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { db } from "../../../public/libs/firebase";
import { checkLoggedInAction } from "@/actions/server/actions";
import EmailConfirmForm from "./EmailConfirmForm";

import { getDoc, doc } from "firebase/firestore";


export default async function ConfirmEmail() {
    await checkLoggedInAction();

    const cookieStore = cookies();
    const userId = cookieStore.get('eport-uid').value;
    const email = cookieStore.get('eport-email').value;

    // Check if user has verfied email
    // Redirect to home page if user already verifies email
    const user = (await getDoc(doc(db, 'users', userId))).data();
    if (user.emailVerified) {
        redirect('/');
    }

    return (
        <div className="relative flex flex-col justify-center">
            <div className="card w-fit h-fit max-w-sm bg-white shadow-xl mx-auto mt-40">
                <div className="card-body">
                    <p>A confirmation code has been sent to <span className='link link-primary'>{email}</span>. Please type in the code below to start using the app!</p>
                </div>
            </div>
            <EmailConfirmForm email={email}/>
        </div>
    )
}