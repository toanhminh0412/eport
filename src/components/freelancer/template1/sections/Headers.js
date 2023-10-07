export function Header1() {
    return (
        <section className="w-full min-w-[450px] aspect-video flex flex-row bg-black bg-[url('/img/freelancer-template1-header-bg.png')] bg-cover">
            <div className="w-5/12 h-full bg-[url('/img/freelancer-template1-header-avatar.jpg')] brightness-75 bg-cover"></div>
            <div className="w-7/12 prose max-w-none p-0 flex flex-col justify-center">
                <div className="w-11/12 md:w-10/12 mx-auto">
                    <h3 className="text-md lg:text-xl mt-0 lg:mt-12">John Doe - Photographer</h3>
                    <h1 className="text-xl lg:text-3xl xl:text-4xl">Need a quick photoshoot session? Let me help you!</h1>
                    <div>
                        <button className="btn btn-sm btn-warning lg:btn lg:btn-warning">Services</button>
                        <button className="btn btn-sm btn-warning lg:btn lg:btn-warning ml-2">Contact me</button>
                    </div>
                </div>
            </div>
        </section>
    )
}