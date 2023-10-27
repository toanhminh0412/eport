'use client';

// Next imports
import Image from 'next/image';

// Third party imports
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

export default function TemplatesGallery() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                breakpoints={{
                    1024: {
                        slidesPerView:2,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="w-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[400px]"
            >
                <SwiperSlide className="flex justify-center items-center">
                    <Image src="/img/freelancer-template0-header1-thumbnail.jpg" className="block w-full h-full object-contain" width={700} height={500}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <Image src="/img/freelancer-template1-header1-thumbnail.png" className="block w-full h-full object-contain" width={700} height={500}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <Image src="/img/eresume-template0.png" className="block w-full h-full object-contain" width={700} height={500}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <Image src="/img/freelancer-template0-header2-thumbnail.png" className="block w-full h-full object-contain" width={700} height={500}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <Image src="/img/eresume-template0-lighttheme.png" className="block w-full h-full object-contain" width={700} height={500}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <Image src="/img/freelancer-template0-aboutme1-thumbnail.png" className="block w-full h-full object-contain" width={700} height={500}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <Image src="/img/freelancer-template1-service1-new-thumbnail.png" className="block w-full h-full object-contain" width={700} height={500}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <Image src="/img/freelancer-template0-aboutme2-thumbnail.jpg" className="block w-full h-full object-contain" width={700} height={500}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <Image src="/img/freelancer-template1-header2-thumbnail.png" className="block w-full h-full object-contain" width={700} height={500}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <Image src="/img/freelancer-template1-portfolio2-thumbnail.png" className="block w-full h-full object-contain" width={700} height={500}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <Image src="/img/freelancer-template1-aboutme1-thumbnail.png" className="block w-full h-full object-contain" width={700} height={500}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <Image src="/img/freelancer-template1-testimonial1-thumbnail.png" className="block w-full h-full object-contain" width={700} height={500}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <Image src="/img/freelancer-template0-portfolio2-thumbnail.png" className="block w-full h-full object-contain" width={700} height={500}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <Image src="/img/freelancer-template0-testimonial1-thumbnail.png" className="block w-full h-full object-contain" width={700} height={500}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <Image src="/img/freelancer-template1-aboutme2-thumbnail.png" className="block w-full h-full object-contain" width={700} height={500}/>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
