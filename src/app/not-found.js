import Link from "next/link";

export default function Page() {
    return (
        <div className='prose p-10'>
            <h1 className="mb-0">404<Link href='/' className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white ms-6">Go Home</Link></h1>
            <p className="mt-3">Sorry! This page doesn&apos;t exist.</p>
        </div>
    )
}