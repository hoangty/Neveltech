import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProvidersListSlider = ({ items }) => {
    return (
      <Swiper
        spaceBetween={6}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 3,
        },
          768: {
            slidesPerView: 6,
            spaceBetween: 16
           },
          1024: { slidesPerView: 8 }
        }}
        loop={true}
      >
        {items.map((item, index) => (
            <SwiperSlide key={index}>
                <a
                key={index}
                href={item.href}
                className="block text-center rounded-lg overflow-hidden group hover:opacity-90 transition bg-[#12294A]"
                >
                <figure className='pt-5 pb-[22px]'>
                    <img
                        src={item.image}
                        alt={item.label}
                        className="w-[93.5px] h-auto m-auto object-cover rounded-md"
                    />
                </figure>
                <div className="bg-[rgba(245,249,255,0.05)] py-4 px-3 underline ">
                <p className="text-[13px] text-white">{item.label}</p>
                <p className="text-[11px] text-[#90A2BD]">{item.totalGame}</p>
                </div>
                </a>
            </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  export default ProvidersListSlider;