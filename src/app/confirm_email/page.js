import { redirect } from "next/navigation";
import { cookies } from "next/headers"
import { db } from "../../../public/libs/firebase";
import { getDoc, doc } from "firebase/firestore";

export default async function ConfirmEmail() {
    const cookieStore = cookies();
    const email = cookieStore.get('eport-email').value;

    // Redirect to home page if user already confirms email
    const userId = cookieStore.get('eport-uid').value;
    const user = (await getDoc(doc(db, 'users', userId))).data();
    if (user.emailVerified) {
        redirect('/');
    }

    return (
        <div className="bg-slate-100 w-screen h-screen relative flex flex-col justify-center">
            <div className="card w-96 bg-white shadow-xl mx-auto mb-20">
                <div className="card-body">
                    <p>A confirmation link has been sent to <span className='link link-primary'>{email}</span>. Please click on that link to start using the app!</p>
                </div>
            </div>
        </div>
    )
}