// Next imports
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// Local imports
import { db } from "../../../../../public/libs/firebase";
import cookieOptions from "@/data/cookieOptions";
import { getTokenFromUser } from "@/helpers/authentication";

// 3rd party imports
import { collection, doc, query, setDoc, getDocs, where } from 'firebase/firestore';
import { nanoid } from 'nanoid';


export async function GET(request) {
    const cookieStore = cookies()
    const requestHeaders = new Headers(request.headers)
    const email = requestHeaders.get('x-forwarded-email');
    const uid = requestHeaders.get('x-forwarded-uid');

    let success = false;
    let message = '';
    let responseUid = '';
    let responseEmail = email;
    let responseSignInMethod = 'Google';
    let responseDomain = '';

    const usersCollection = collection(db, 'users');
    const usersEmail = query(usersCollection, where ("email", "==", email))
    const usersDocs = await getDocs(usersEmail);

    // Didn't find any user with this Google email
    if (usersDocs.docs.length === 0) {
        const newUserId = nanoid();
        let newUser = {
            uid: newUserId,
            email: email,
            password: null,
            signInMethod: 'Google',
            emailVerified: true,
            domain: '',
            stripeCustomerId: '',
        }
        
        // Save user in 'users' collection in Firestore
        await setDoc(doc(usersCollection, newUserId), newUser);
        
        // Generate an user token and store the token in cookie
        const userToken = getTokenFromUser(newUser);
        cookieStore.set('eport-token', userToken, cookieOptions);

        success = true;
        message = 'Login successfully!';
        responseUid = newUserId;

    // Found an user with this Google email
    } else {
        let user = usersDocs.docs[0].data();
        if (user.signInMethod === "Google") {
            success = true;
            message = 'Login successfully!';
            responseUid = user.uid;
            responseEmail = user.email;
            responseSignInMethod = user.signInMethod;
            responseDomain = user.domain;
            
            user.stripeCustomerId = user.stripeCustomerId ? user.stripeCustomerId : '';

            // Check if user has an active subscription
            if (!user.stripeCustomerId) {
                user.plan = 'basic';
            } else {
                const stripeCustomerId = user.stripeCustomerId;
                const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
                const customer = await stripe.customers.retrieve(
                    stripeCustomerId, {
                        expand: ['subscriptions']
                    }
                );
                if (customer && customer.subscriptions.data.length > 0 && customer.subscriptions.data[0].current_period_end * 1000 > new Date().getTime()) {
                    console.log('Subscription is active');
                    user.plan = 'premium';
                    // Store plan status and expired date in cookie
                    const currentSubscription = customer.subscriptions.data[0];
                    user.planStatus = currentSubscription.cancel_at_period_end ? 'Cancelled' : 'Active';
                    user.planExpiredDate = new Date(currentSubscription.current_period_end * 1000).toDateString();
                } else {
                    user.plan = 'basic';
                }
            }
            let userToken = getTokenFromUser(user);
            cookieStore.set('eport-token', userToken, cookieOptions);
        } else {
            success = false;
            message = "Google SignIn option is not available to this email. Please log in using your email and password!";
        }
    }

    return NextResponse.json({
        uid: responseUid,
        email: responseEmail,
        signInMethod: responseSignInMethod,
        domain: responseDomain,
        success: success,
        message: message
    })
}