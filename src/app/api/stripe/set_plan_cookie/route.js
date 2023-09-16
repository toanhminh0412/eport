// Next imports
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Local imports
import { getUserFromToken, getTokenFromUser } from "@/helpers/authentication";
import { db } from '../../../../../public/libs/firebase';
import { setDoc, doc } from "firebase/firestore";

export async function GET(request) {
    const cookieStore = cookies();
    const userToken = cookieStore.get('eport-token') ? cookieStore.get('eport-token').value : '';

    if (!userToken) {
        redirect('/login');
    }

    let user = getUserFromToken(userToken);
    const stripeCustomerId = user.stripeCustomerId;
    // Set plan cookie if not exists
    if (stripeCustomerId && !user.plan) {
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
            // if plan status is active, set plan to be premium in published site
            if (user.planStatus === "Active") {
                await setDoc(doc(db, "publishedSites", user.uid), {
                    plan: user.plan
                }, {merge: true});
            }
        } else {
            user.plan = 'basic';
            user.planStatus = '';
            user.planExpiredDate = '';
        }
    } else if (!stripeCustomerId) {
        user.plan = 'basic';
        user.planStatus = '';
        user.planExpiredDate = '';
    }

    const newToken = getTokenFromUser(user);
    cookieStore.set('eport-token', newToken);

    const planStatus = user.planStatus;

    if (planStatus === 'Active') {
        redirect('/manage_subscriptions?status=active');
    } else if (planStatus === 'Cancelled') {
        redirect('/manage_subscriptions?status=cancel');
    } else {
        redirect('/manage_subscriptions');
    }
}