import Image from "next/image";
import { checkEmailVerificationAction, checkLoggedInAction } from "@/actions/server/actions";
import UpperNav from "@/components/UpperNav";
import Link from "next/link";


export default async function Home() {
  checkLoggedInAction();
  const user = checkEmailVerificationAction();

  return (
    <>
      <UpperNav/>
      <main className="p-24">
        <div className="prose">
          <h1>Get your personal website started</h1>
          <h4>Select a template</h4>
        </div>
        <div className="flex flex-row flex-wrap gap-8 mt-8">
          <div className="card w-96 bg-base-100 shadow-xl border border-slate-200">
            <figure className="relative w-full aspect-video"><Image src="https://firebasestorage.googleapis.com/v0/b/eport-4141e.appspot.com/o/demo1%2Fthumbnail.png?alt=media&token=4d64a786-418e-4d54-90dd-16c674b9b1c9" alt="Demo 1 thumbnail" fill/></figure>
            <div className="card-body prose">
              <h2 className="card-title">Personal resume page</h2>
              <div className="flex flex-row flex-wrap gap-2">
                <div className="badge bg-blue-500 text-white">About me</div>
                <div className="badge bg-blue-500 text-white">Skills</div>
                <div className="badge bg-blue-500 text-white">Experience</div>
                <div className="badge bg-blue-500 text-white">Services</div>
                <div className="badge bg-blue-500 text-white">Projects</div>
                <div className="badge bg-blue-500 text-white">Testimonials</div>
                <div className="badge bg-blue-500 text-white">Get in touch</div>
              </div>
              <div className="card-actions justify-end mt-4">
                <Link href="/demo/demo1" className="btn btn-secondary">Preview</Link>
                <Link href="/api/new_site?selectedTemplate=0" className="btn btn-primary">Use template</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
