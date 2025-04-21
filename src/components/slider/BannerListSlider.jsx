import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import iconHelp from '../../assets/images/icon/icon_help.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BannerListSlider = ({ items }) => {
    return (
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        speed={1000}
        centeredSlides
        loopedSlides={4}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className='translation'>
            <div className="relative flex flex-col-reverse items-center md:flex-row pb-24 md:pb-4 px-8 md:p-0">
                <div className={`${item.gradient} rounded-[30px] w-full md:h-full absolute top-32 md:top-0 bottom-0 left-0 z-11 border border-white/20`}></div>
                <a href="#" className='w-6 md:w-4 block absolute top-36 md:top-10 right-6 md:right-10 z-10'>
                  <img src={iconHelp} alt="" />
                </a>
                <div className="p-xl w-full relative flex flex-col items-center z-22 px-10">
                    <p className='rounded-full py-2 px-5 bg-[rgba(255,255,255,0.1)]'>{item.tag}</p>
                    <h2 className="text-white text-4xl md:text-[42px]/[1.4] text-center font-extrabold mt-4">{item.title}</h2>
                    <a className="md:block rounded-lg text-[21px]/[40px] py-[5px] bg-[#FF0960] w-full md:w-[340px] text-center mt-6" href={item.href}>{item.link}</a>
                </div>
                <figure className="relative w-[70%] w-full md:w-[585px] flex-shrink-0 z-2">
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