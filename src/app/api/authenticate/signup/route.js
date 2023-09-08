import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { db } from '../../../../../public/libs/firebase';
import { SALT_ROUNDS } from '../../../../../public/libs/bcryptConfig';

import { collection, doc, query, setDoc, getDocs, where } from 'firebase/firestore';

import bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';


/* Handle users signing up
Body:
    - Email: string
    - Password: string
*/
export async function POST(request) {

    const cookieStore = cookies();
    const signUpInfo = await request.json();
    const email = signUpInfo.email;
    const password = await bcrypt.hash(signUpInfo.password, SALT_ROUNDS);
    
    // Information returned to users
    let success = false;
    let message = '';

    // Create a new user
    const usersCollection = collection(db, 'users');
    
    // Check if email already exists
    const existingUser = await getDocs(query(usersCollection, where('email', '==', email)));
    if (existingUser.docs.length > 0) {
        success = false;
        message = "Email already exists. Please log in!";
    
    // If not create new user in Firestore and log user in
    } else {
        const newUserId = nanoid();
        const newUser = {
            uid: newUserId,
            email: email,
            password: password,
            // emailVerified: true,
            emailVerified: false,
            domain: '',
            stripeCustomerId: ''
        }
        
        // Save user in 'users' collection in Firestore
        await setDoc(doc(usersCollection, newUserId), newUser);
        
        // Log user in
        cookieStore.set('eport-uid', newUser.uid);
        cookieStore.set('eport-email', newUser.email);
        cookieStore.set('eport-email-verified', newUser.emailVerified);
        cookieStore.set('eport-domain', newUser.domain);
        cookieStore.set('eport-stripe-customer-id', '');
        cookieStore.set('eport-plan', 'basic');

        success = true;
        message = 'Signed up successfully!';
    }

    return NextResponse.json({
        success: success,
        message: message,
        email: cookieStore.get('eport-email') ? cookieStore.get('eport-email').value : '',
        uid: cookieStore.get('eport-uid') ? cookieStore.get('eport-uid').value : '',
        domain: cookieStore.get('eport-domain') ? cookieStore.get('eport-domain').value : '',
    })
}