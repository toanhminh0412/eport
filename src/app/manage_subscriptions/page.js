import { cookies } from "next/headers";

import PlansDisplay from "@/components/ui/plans_display/PlansDisplay";

export default function ManageSubscriptions() {
    const cookieStore = cookies();
    const plan = cookieStore.get('eport-plan') ? cookieStore.get('eport-plan').value : 'basic';
    const planStatus = cookieStore.get('eport-plan-status') ? cookieStore.get('eport-plan-status').value : '';
    const planExpiredDate = cookieStore.get('eport-plan-expired-date') ? cookieStore.get('eport-plan-expired-date').value : '';

    return (
        <div className="pt-16 pl-5">
            <div className="prose max-w-none">
                <h1 className="text-center">Manage subscriptions</h1>

                <div className="mb-40">
                    <PlansDisplay mode="manage" plan={plan} status={planStatus} expiredDate={planExpiredDate}/>
                </div>
            </div>
        </div>
    )
}