// Next imports
import { cookies } from "next/headers";

// Local imports
import PlansDisplay from "@/components/ui/plans_display/PlansDisplay";
import InfoToast from "./InfoToast";
import { getUserFromToken } from "@/helpers/authentication";

export const metadata = {
    title: 'Manage Subscriptions',
    description: "Want to upgrade your plan to get new features from Eport? Here is the place to do it!",
}

export default function ManageSubscriptions({searchParams}) {
    const cookieStore = cookies();
    const userToken = cookieStore.get('eport-token').value;
    const user = getUserFromToken(userToken);
    const plan = user.plan ? user.plan : 'basic';
    const planStatus = user.planStatus ? user.planStatus : '';
    const planExpiredDate = user.planExpiredDate ? user.planExpiredDate : '';
    
    // Display a message to show the new subscription status
    const status = searchParams.status ? searchParams.status : '';
    let message = '';
    if (status === 'active') {
        message = 'Your Premium plan is active!';
    } else if (status === 'cancel') {
        message = `Your Premium plan has been cancelled for the next payment date! Your Premium plan will remain active until ${planExpiredDate}`;
    }

    return (
        <div className="pt-16 pl-5">
            {message ? <InfoToast message={message}/> : null}
            <div className="prose max-w-none">
                <h1 className="text-center">Manage subscriptions</h1>

                <div className="mb-40">
                    <PlansDisplay mode="manage" plan={plan} status={planStatus} expiredDate={planExpiredDate}/>
                </div>
            </div>
        </div>
    )
}