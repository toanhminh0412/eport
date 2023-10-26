import { redirect } from "next/navigation";

export default function Page({ params }) {
    const domain = params.domain;
    redirect(`/eresume/${domain}`);
}