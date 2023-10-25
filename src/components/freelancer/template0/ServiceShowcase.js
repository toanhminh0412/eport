"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCards, Navigation, Pagination } from 'swiper/modules';

export default function Service1Showcase({section}) {
    return (
        <div>
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
                {section.services.map(service =>
                    <SwiperSlide key={service.id} className='flex items-center justify-center rounded-lg'>
                        <div className="card w-[295px] sm:w-[450px] bg-white border border-slate-300 dark:border-blue-400 shadow-lg text-center">
                            <div className="card-body items-center">
                                <div className="inline-flex justify-center items-center w-20 h-20 bg-transparent rounded-full text-black border-2 border-black border-solid mr-6 mb-7 ml-0 text-5xl no-underline">
                                    <i className={`${service.icon}`}></i>
                                </div>
                                <h3 className="my-0 px-2 sm:px-5 text-3xl">{service.title}</h3>
                                <h2 className="mb-2 px-2 sm:px-5 text-xl">{service.price}</h2>
                                <article className="px-2 sm:px-5 mb-10" dangerouslySetInnerHTML={{ __html: service.content }}></article>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}