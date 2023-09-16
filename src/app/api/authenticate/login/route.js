import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { db } from '../../../../../public/libs/firebase';
import cookieOptions from '@/data/cookieOptions';
import { getTokenFromUser } from '@/helpers/authentication';

import { getDocs, collection, setDoc, doc } from 'firebase/firestore';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/* Handle users logging in
Query:
    - Email: string
    - Password: string
*/
export async function GET(request) {
    const cookieStore = cookies();
    const requestHeaders = new Headers(request.headers)
    const email = requestHeaders.get('x-forwarded-email');
    const password = requestHeaders.get('x-forwarded-password');
    let success = false;
    let message = '';
    let responseUid = '';
    let responseEmail = '';
    let responseDomain = '';

    // Get user by email and password from Firestore
    const userDoc = await getDocs(collection(db, 'users'));
    let i = 0;

    // Have to use while as await doesn't work in for loop
    while (i < userDoc.docs.length) {
        let userData = userDoc.docs[i].data();
        if (userData.email == email) {
            if (userData.password) {
                const passwordMatch = await bcrypt.compare(password, userData.password);
                if (passwordMatch) {
                    // Set info sending back to user
                    success = true;
                    message = 'Login successfully!';
                    responseUid = userData.uid;
                    responseEmail = userData.email;
                    responseDomain = userData.domain;

                    userData.stripeCustomerId = userData.stripeCustomerId ? userData.stripeCustomerId : '';

                    // Check if user has an active subscription
                    if (!userData.stripeCustomerId) {
                        userData.plan = 'basic';
                    } else {
                        const stripeCustomerId = userData.stripeCustomerId;
                        const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
                        const customer = await stripe.customers.retrieve(
                            stripeCustomerId, {
                                expand: ['subscriptions']
                            }
                        );
                        if (customer && customer.subscriptions.data.length > 0 && customer.subscriptions.data[0].current_period_end * 1000 > new Date().getTime()) {
                            userData.plan = 'premium';
                            // Store plan status and expired date in cookie
                            const currentSubscription = customer.subscriptions.data[0];
                            userData.planStatus = currentSubscription.cancel_at_period_end ? 'Cancelled' : 'Active';
                            userData.planExpiredDate = new Date(currentSubscription.current_period_end * 1000).toDateString();
                        } else {
                            userData.plan = 'basic';

                            // Make user's published site basic plan if user has no active subscription
                            await setDoc(doc(db, "publishedSites", userData.uid), {
                                plan: "basic"
                            }, {merge: true});
                        }
                    }
                    let userToken = getTokenFromUser(userData);
                    cookieStore.set('eport-token', userToken, cookieOptions);
                }
            }
            break;
        }
        i++;
    };
    if (!success) {
        message = 'Invalid email and password. Please try again or sign up!';
    }

    return NextResponse.json({
        uid: responseUid,
        email: responseEmail,
        domain: responseDomain,
        success: success,
        message: message
    })
}