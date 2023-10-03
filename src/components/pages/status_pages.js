// Next imports
import Link from "next/link"

export function Page403({message}) {
    return (
        <div className='prose p-10'>
            <h1 className="mb-0">403<Link href='/' className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white ms-6">Go Home</Link></h1>
            <p className="mt-3">{message}</p>
        </div>
    )
}

export function Page404({message}) {
    return (
        <div className='prose p-10'>
            <h1 className="mb-0">404<Link href='/' className="btn bg-blue-500 hover:bg-blue-700 duration-200 text-white ms-6">Go Home</Link></h1>
            <p className="mt-3">{message}</p>
        </div>
    )
}