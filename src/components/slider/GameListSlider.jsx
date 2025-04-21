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
        slidesPerView={'auto'}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className='w-[156px]'>
            <a className="relative md:block" href={items.href}>
              <img
                src={item.image}
                alt={item.publisher}
                className="w-full overflow-hidden rounded-lg"
              />
              {item.hot ?
                <span className='w-[36px] absolute top-[15px] left-[-3px]'>
                  <img src={Hot} alt="HOT" />
                </span>
                : ''
              }
              {item.news ?
                <span className='w-[36px] absolute top-[15px] left-[-3px]'>
                  <img src={New} alt="new" />
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