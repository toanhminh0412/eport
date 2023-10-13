import { register } from 'swiper/element/bundle';

register();

export default function Swiper({children}) {
    return (
        <swiper-container className="mySwiper h-96" pagination="true" pagination-clickable="true" navigation="true" space-between="30" loop="true">
            {children}
        </swiper-container>
    );
}