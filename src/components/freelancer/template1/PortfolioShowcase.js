"use client";

// Local imports
import { Swiper, SwiperSlide } from 'swiper/react';

// Third party imports
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function PortfolioShowcase({project}) {
    return (
        <div>
            <Swiper 
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                navigation
                spaceBetween={50}
                loop={true}>
                {project.images.map(image => <SwiperSlide key={image.id}><Image width={200} height={200} src={image.src} alt="" className="h-full w-full object-contain brightness-75"/></SwiperSlide>)}
            </Swiper>
        </div>
    )
}