// Next imports
import Image from "next/image"


export function Portfolio1() {
    const section = {
        heading: "Portfolio",
        tagline: "Check out my past works!",
        projects: [
            {
                id: 0,
                name: "Project 1",
                startMonth: "Jan 2023",
                endMonth: "Feb 2023",
                currentlyWorking: false,
                description: "<p>Make sure you describe the project carefully and vividly to attract readers</p>",
                images: []
            },
            {
                id: 1,
                name: "Project 2",
                startMonth: "Mar 2023",
                endMonth: "Jun 2023",
                currentlyWorking: false,
                description: "<p>Make sure you describe the project carefully and vividly to attract readers</p>",
                images: []
            },
            {
                id: 2,
                name: "Project 3",
                startMonth: "Jun 2023",
                endMonth: "",
                currentlyWorking: true,
                description: "<p>Make sure you describe the project carefully and vividly to attract readers</p>",
                images: []
            }
        ]
    }

    return (
        <section class="block bg-white">
            <div class="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
                <div class="">
                <div class="text-center">
                    <h2 class="font-bold text-3xl md:text-5xl">Portfolio</h2>
                    <div class="mx-auto mt-4 max-w-[528px] mb-8 md:mb-12 lg:mb-16">
                    <p class="text-[#636262] max-[479px]:text-sm">Lorem ipsum dolor sit amet elit ut aliquam</p>
                    </div>
                </div>
                <div class="mx-auto grid max-w-[1040px] grid-cols-1 md:grid-cols-2 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch">
                    <a href="#" class="relative flex max-w-full flex-col items-center justify-center text-black [grid-area:1/1/3/2] max-[767px]:object-cover max-[767px]:w-96">
                    <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a942fd2e6cfa2_Rectangle%201%20(2).svg" alt="" class="inline-block h-full w-full object-cover"/>
                    <div class="absolute flex flex-col items-center justify-center bg-white px-8 py-4 text-center rounded-sm">
                        <p class="font-medium text-sm sm:text-xl">Project Name</p>
                        <p class="max-[479px]:text-sm">Microsoft</p>
                    </div>
                    </a>
                    <a href="#" class="relative flex max-w-full flex-col items-center justify-center text-black h-64 max-[767px]:w-96">
                    <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a942fd2e6cfa2_Rectangle%201%20(2).svg" alt="" class="inline-block h-full w-full object-cover"/>
                    <div class="absolute flex flex-col items-center justify-center bg-white px-8 py-4 text-center rounded-sm">
                        <p class="font-medium text-sm sm:text-xl">Project Name</p>
                        <p class="max-[479px]:text-sm">Paypal</p>
                    </div>
                    </a>
                    <a href="#" class="relative flex max-w-full flex-col items-center justify-center text-black h-64 max-[767px]:w-96">
                    <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a942fd2e6cfa2_Rectangle%201%20(2).svg" alt="" class="inline-block h-full w-full object-cover"/>
                    <div class="absolute flex flex-col items-center justify-center bg-white px-8 py-4 text-center rounded-sm">
                        <p class="font-medium text-sm sm:text-xl">Project Name</p>
                        <p class="max-[479px]:text-sm">Airbnb</p>
                    </div>
                    </a>
                </div>
                </div>
            </div>
        </section>
    )
}