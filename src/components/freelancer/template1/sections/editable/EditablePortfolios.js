// Next imports
import Image from "next/image"


export function EditablePortfolio1() {
    return (
        <section className="prose max-w-none bg-white py-16 px-8">
            <h1 className="mb-4">Portfolio</h1>
            <h3 className="mt-0 mb-8 font-normal">Check out my past works!</h3>
            <div className="block sm:hidden w-full">
                <div className="bg-slate-300 max-w-[400px] aspect-square my-2 mx-auto"></div>
                <div className="bg-slate-300 max-w-[400px] aspect-square my-2 mx-auto"></div>
                <div className="bg-slate-300 max-w-[400px] aspect-square my-2 mx-auto"></div>
            </div>
            <div className="hidden sm:flex w-10/12 mx-auto flex-row gap-4 h-[400px]">
                <div className="basis-1/2 h-full flex flex-col gap-4">
                    <div className="w-full grow bg-slate-300"></div>
                </div>
                <div className="basis-1/2 h-full flex flex-col gap-4">
                    <div className="w-full grow bg-slate-300"></div>
                    <div className="w-full grow bg-slate-300"></div>
                </div>
            </div>
        </section>
    )
}