import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "../../../../../public/libs/firebase";
import { collection, doc, query, setDoc, getDocs, where } from 'firebase/firestore';
import { nanoid } from 'nanoid';

export async function GET(request) {
    const cookieStore = cookies()
    const requestHeaders = new Headers(request.headers)
    const email = requestHeaders.get('x-forwarded-email');
    const uid = requestHeaders.get('x-forwarded-uid');

    let success = false;
    let message = '';

    const usersCollection = collection(db, 'users');
    const usersEmail = query(usersCollection, where ("email", "==", email))
    const usersDocs = await getDocs(usersEmail);

    // Didn't find any user with this Google email
    if (usersDocs.docs.length === 0) {
        const newUserId = nanoid();
        const newUser = {
            uid: newUserId,
            email: email,
            password: null,
            signInMethod: 'Google',
            emailVerified: true,
            domain: '',
        }
        
        // Save user in 'users' collection in Firestore
        await setDoc(doc(usersCollection, newUserId), newUser);
        
        // Log user in
        const cookieOptions = {
            secure: true,
            httpOnly: true,
        }
        cookieStore.set('eport-uid', newUser.uid, cookieOptions);
        cookieStore.set('eport-email', newUser.email, cookieOptions);
        cookieStore.set('eport-signInMethod', newUser.signInMethod, cookieOptions);
        cookieStore.set('eport-email-verified', newUser.emailVerified, cookieOptions);
        cookieStore.set('eport-domain', newUser.domain, cookieOptions);
        cookieStore.set('eport-stripe-customer-id', '', cookieOptions);

        success = true;
        message = 'Login successfully!';

    // Found an user with this Google email
    } else {
        const user = usersDocs.docs[0].data();
        if (user.signInMethod === "Google") {
            console.log('Calling this');
            success = true;
            message = 'Login successfully!';
          
            const cookieOptions = {
                secure: true,
                httpOnly: true,
            }
            console.log(cookieOptions);
            cookieStore.set('eport-uid', user.uid, cookieOptions);
            // cookieStore.set({
            //     name: 'eport-uid',
            //     value: user.uid,
            //     secure: true,
            //     httpOnly: true,
            //     path: '/',
            // })
            cookieStore.set('eport-email', user.email, cookieOptions);
            cookieStore.set('eport-signInMethod', 'Google', cookieOptions);
            cookieStore.set('eport-email-verified', true, cookieOptions);
            cookieStore.set('eport-domain', "", cookieOptions);
            cookieStore.set('eport-stripe-customer-id', user.stripeCustomerId ? user.stripeCustomerId : '', cookieOptions);

            // Check if user has an active subscription
            const stripeCustomerId = cookieStore.get('eport-stripe-customer-id') ? cookieStore.get('eport-stripe-customer-id').value : '';
            if (!user.stripeCustomerId) {
                cookieStore.set('eport-plan', 'basic');
            } else {
                const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
                const customer = await stripe.customers.retrieve(
                    stripeCustomerId, {
                        expand: ['subscriptions']
                    }
                );
                if (customer && customer.subscriptions.data.length > 0 && customer.subscriptions.data[0].current_period_end * 1000 > new Date().getTime()) {
                    console.log('Subscription is active');
                    cookieStore.set('eport-plan', 'premium');
                    // Store plan status and expired date in cookie
                    const currentSubscription = customer.subscriptions.data[0];
                    cookieStore.set('eport-plan-status', currentSubscription.cancel_at_period_end ? 'Cancelled' : 'Active');
                    cookieStore.set('eport-plan-expired-date', new Date(currentSubscription.current_period_end * 1000).toDateString());
                } else {
                    cookieStore.set('eport-plan', 'basic');
                }
            }
        } else {
            success = false;
            message = "Google SignIn option is not available to this email. Please log in using your email and password!";
        }
    }

    return NextResponse.json({
        uid: cookieStore.get('eport-uid') ? cookieStore.get('eport-uid').value : '',
        email: cookieStore.get('eport-email') ? cookieStore.get('eport-email').value : '',
        signInMethod: cookieStore.get('eport-signInMethod') ? cookieStore.get('eport-signInMethod').value : '',
        domain: cookieStore.get('eport-domain') ? cookieStore.get('eport-domain').value : '',
        success: success,
        message: message
    })
}