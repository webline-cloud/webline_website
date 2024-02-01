import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Home.css';

//images for slider
import slider1 from './../assets/slider_images/webp_slider_img/Business_development.webp'
import slider2 from './../assets/slider_images/webp_slider_img/advertise_business.webp'
import slider3 from './../assets/slider_images/webp_slider_img/advertise_business_1.webp'
import slider4 from './../assets/slider_images/webp_slider_img/business_development_1.webp'
import slider5 from './../assets/slider_images/webp_slider_img/digital presence 1.webp'
import slider6 from './../assets/slider_images/webp_slider_img/digital presence.webp'
import slider7 from './../assets/slider_images/webp_slider_img/left_with.webp'
import slider8 from './../assets/slider_images/webp_slider_img/left_with_1.webp'
import slider9 from './../assets/slider_images/webp_slider_img/want_content.webp'
import slider10 from './../assets/slider_images/webp_slider_img/want_content_1.webp'

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Hero_Slider = () => {
    return (
        <>
            <div className='slider_container'>
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide className=''>
                        <img src={slider1} alt="slider1" />
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider2} alt="slider2" />
                        <div>hello world</div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider3} alt="slider3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider4} alt="slider4" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider5} alt="slider5" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider6} alt="slider6" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider7} alt="slider7" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider8} alt="slider8" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider9} alt="slider9" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider10} alt="slider10" />
                    </SwiperSlide>

                </Swiper>
            </div>

        </>
    );
}
export default Hero_Slider
