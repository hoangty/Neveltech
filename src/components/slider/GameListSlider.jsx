import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import Hot from '../../assets/images/common/hot.png';
import New from '../../assets/images/common/new.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const GameListSlider = ({ items }) => {
    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 6 },
          1024: { slidesPerView: 8 }
        }}
        loop={true}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <a className="relative overflow-hidden md:block rounded-lg" href={items.href}>
              <img
                src={item.image}
                alt={item.publisher}
                className="w-full"
              />
              {item.hot ?
                <span className='w-[36px] absolute top-[15px] left-[-3px]'>
                  <img src={Hot} alt="HOT" />
                </span>
                : ''
              }
              <p className="absolute bottom-1 left-0 right-0 text-white text-[8px] text-center ">{item.publisher}</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  export default GameListSlider;