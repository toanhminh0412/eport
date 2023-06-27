import UpperNav from "@/components/UpperNav"
import Link from "next/link";

export default function Login() {
  return (
    <div className="bg-slate-100 min-h-screen">
        <div className="flex flex-row flex-wrap text-black">
            <div className="w-full lg:w-1/2 pt-20 lg:pt-40 pl-12 h-fit">
                <h1 className="font-semibold text-3xl lg:text-4xl">Welcome to Eport</h1>
                <p className="text-lg lg:text-xl mt-2">Build your own website. No coding or design skill needed!</p>
            </div>
            <div className="w-full lg:w-1/2 pt-10 lg:pt-40 pl-12 lg:px-6">
                <form className="card w-96 bg-white shadow-xl p-4">
                <label className="label">
                    <span className="label-text">Email:</span>
                </label>
                <input type="text" placeholder="Email" className="input input-bordered w-full" />
                <label className="label mt-2">
                    <span className="label-text">Password:</span>
                </label>
                <input type="password" placeholder="Password" className="input input-bordered w-full" />
                <Link href="/forgotpassword" className="link text-blue-700 mt-4">Forgot password?</Link>
                <p className="mt-2">Don't have an account? <Link href="/signup" className="link text-blue-700">Sign up</Link>!</p>
                <input type="submit" value="Login" className="btn w-fit mt-6 bg-orange-600 hover:bg-orange-800 text-white"></input>
                </form>
            </div>
        </div>
    </div>
  )
}