'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCards, Navigation, Pagination } from 'swiper/modules';

export default function Services() {
    return (
        <section className="">
            <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
                <div className="flex flex-col items-center">
                    <div className="mb-8 md:mb-12 lg:mb-16">
                        <div className="w-full max-w-[800px] text-center">
                        <h2 className="font-bold text-5xl md:text-7xl mb-10">Services</h2>
                        <div className="mx-auto w-full max-w-lg mb-16">
                            <p className="tracking-[0.2px] text-slate-700">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna</p>
                        </div>
                            <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[EffectCards, Navigation, Pagination]}
                            className="w-[300px] sm:w-[455px] h-full"
                            >
                                <SwiperSlide className='flex items-center justify-center rounded-lg'>
                                    <div className="card w-[295px] sm:w-[450px] bg-white border border-slate-300 dark:border-blue-400 shadow-lg text-center">
                                        <div className="card-body items-center">
                                            <div className="inline-flex justify-center items-center w-20 h-20 bg-transparent rounded-full text-black border-2 border-black border-solid mr-6 mb-7 ml-0 text-5xl no-underline">
                                                <i className="fa-solid fa-cloud"></i>
                                            </div>
                                            <h3 className="my-0 px-2 sm:px-5 text-3xl">Portfolio Design</h3>
                                            <h2 className="mb-2 px-2 sm:px-5 text-xl">200 CAD / month</h2>
                                            <article className="px-2 sm:px-5 mb-10">Remember that the goal of your Services section is to inform potential clients about what you offer, build trust, and persuade them to take action. Be clear, concise, and persuasive in your descriptions, and provide easy-to-follow steps for visitors to engage with your services. To edit this section, go to Edit Site and find Services section.</article>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='flex items-center justify-center rounded-lg'>
                                    <div className="card w-[295px] sm:w-[450px] bg-white border border-slate-300 dark:border-blue-400 shadow-lg text-center">
                                        <div className="card-body items-center">
                                            <div className="inline-flex justify-center items-center w-20 h-20 bg-transparent rounded-full text-black border-2 border-black border-solid mr-6 mb-7 ml-0 text-5xl no-underline">
                                                <i className="fa-brands fa-html5"></i>
                                            </div>
                                            <h3 className="my-0 px-2 sm:px-5 text-3xl">Portfolio Design</h3>
                                            <h2 className="mb-2 px-2 sm:px-5 text-xl">200 CAD / month</h2>
                                            <article className="px-2 sm:px-5 mb-10">Remember that the goal of your Services section is to inform potential clients about what you offer, build trust, and persuade them to take action. Be clear, concise, and persuasive in your descriptions, and provide easy-to-follow steps for visitors to engage with your services. To edit this section, go to Edit Site and find Services section.</article>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='flex items-center justify-center rounded-lg'>
                                    <div className="card w-[295px] sm:w-[450px] bg-white border border-slate-300 dark:border-blue-400 shadow-lg text-center">
                                        <div className="card-body items-center">
                                            <div className="inline-flex justify-center items-center w-20 h-20 bg-transparent rounded-full text-black border-2 border-black border-solid mr-6 mb-7 ml-0 text-5xl no-underline">
                                                <i className="fa-brands fa-css3-alt"></i>
                                            </div>
                                            <h3 className="my-0 px-2 sm:px-5 text-3xl">Portfolio Design</h3>
                                            <h2 className="mb-2 px-2 sm:px-5 text-xl">200 CAD / month</h2>
                                            <article className="px-2 sm:px-5 mb-10">Remember that the goal of your Services section is to inform potential clients about what you offer, build trust, and persuade them to take action. Be clear, concise, and persuasive in your descriptions, and provide easy-to-follow steps for visitors to engage with your services. To edit this section, go to Edit Site and find Services section.</article>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='flex items-center justify-center rounded-lg'>
                                    <div className="card w-[295px] sm:w-[450px] bg-white border border-slate-300 dark:border-blue-400 shadow-lg text-center">
                                        <div className="card-body items-center">
                                            <div className="inline-flex justify-center items-center w-20 h-20 bg-transparent rounded-full text-black border-2 border-black border-solid mr-6 mb-7 ml-0 text-5xl no-underline">
                                                <i className="fa-brands fa-square-js"></i>
                                            </div>
                                            <h3 className="my-0 px-2 sm:px-5 text-3xl">Portfolio Design</h3>
                                            <h2 className="mb-2 px-2 sm:px-5 text-xl">200 CAD / month</h2>
                                            <article className="px-2 sm:px-5 mb-10">Remember that the goal of your Services section is to inform potential clients about what you offer, build trust, and persuade them to take action. Be clear, concise, and persuasive in your descriptions, and provide easy-to-follow steps for visitors to engage with your services. To edit this section, go to Edit Site and find Services section.</article>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}