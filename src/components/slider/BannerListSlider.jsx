import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../css/components/bannerSlider.css';

const BannerListSlider = ({ items }) => {
    return (
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        speed={1000}
        centeredSlides
        loopedSlides={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="banner-slider relative flex items-center">
                <div className={`rounded-[30px] banner-bg bg-linear-to-r from-[${item.gradient[0]}] to-[${item.gradient[1]}] w-full h-full absolute top-0 left-0 z-11`}></div>
                <div className="p-xl w-full relative flex flex-col items-center z-22">
                    <p className='rounded-full py-2 px-5 bg-[rgba(255,255,255,0.1)]'>{item.tag}</p>
                    <h2 className="text-white text-[42px]/[1.4] text-center font-extrabold mt-4">{item.title}</h2>
                    <a className="md:block text-[21px]/[40px] py-[5px] bg-[#FF0960] w-[340px] text-center mt-6" href={item.href}>{item.link}</a>
                </div>
                <figure className="relative w-[585px] flex-shrink-0 z-2">
                    <img
                        src={item.image}
                        alt={item.title}
                        className=""
                    />
                </figure>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  export default BannerListSlider;