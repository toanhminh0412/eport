// Next imports
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Local imports
import { db } from '../../../../../public/libs/firebase';
import { SALT_ROUNDS } from '../../../../../public/libs/bcryptConfig';
import cookieOptions from '@/data/cookieOptions';
import { getTokenFromUser } from '@/helpers/authentication';

// 3rd party imports
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
    let responseUid = '';
    let responseEmail = '';

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
        let newUser = {
            uid: newUserId,
            email: email,
            password: password,
            signInMethod: '',
            emailVerified: false,
            stripeCustomerId: ''
        }
        
        // Save user in 'users' collection in Firestore
        await setDoc(doc(usersCollection, newUserId), newUser);
        
        // Log user in
        newUser.plan = 'basic';
        const userToken = getTokenFromUser(newUser);
        cookieStore.set('eport-token', userToken, cookieOptions);

        success = true;
        message = 'Signed up successfully!';
        responseUid = newUserId;
        responseEmail = email;
    }

    return NextResponse.json({
        success: success,
        message: message,
        email: responseEmail,
        uid: responseUid
    })
}