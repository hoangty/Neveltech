import React from 'react';
  
const icon = require.context('../../assets/images/icon', false, /\.(png|jpe?g|svg)$/);

  const Service = () => (
    <section className="mb-xl pt-lg">
      <div className="max-w-[1440px] mx-auto grid grid-cols-3 md:grid-cols-7 gap-[10px] border-b border-[rgba(255,255,255,0.04)] pb-[30px] px-5 md:px-0">
        <a href="#" className='flex md:hidden justify-center items-center rounded-lg overflow-hidden h-[57px] p-4 bg-[#12294A] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.3)] duration-200'>
          <img className='w-[24px] mr-[13px]' src={icon('./icon_search.png')} alt="" />
          <p className=''>Search</p>
        </a>
        <a href="#" className='hidden md:flex justify-center items-center rounded-lg overflow-hidden h-[57px] p-4 border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.3)] duration-200'>
          <img className='w-[24px] mr-[13px]' src={icon('./icon01.png')} alt="" />
          <p className=''>Diamond mine</p>
        </a>
        <a href="#" className='hidden md:flex justify-center items-center rounded-lg overflow-hidden h-[57px] p-4 border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.3)] duration-200'>
          <img className='w-[24px] mr-[13px]' src={icon('./icon02.png')} alt="" />
          <p className=''>VIP</p>
        </a>
        <a href="#" className='hidden md:flex justify-center items-center rounded-lg overflow-hidden h-[57px] p-4 border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.3)] duration-200'>
          <img className='w-[24px] mr-[13px]' src={icon('./icon03.png')} alt="" />
          <p className=''>Promotion</p>
        </a>
        <a href="#" className='hidden md:flex justify-center items-center rounded-lg overflow-hidden h-[57px] p-4 border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.3)] duration-200'>
          <img className='w-[24px] mr-[13px]' src={icon('./icon04.png')} alt="" />
          <p className=''>Hot Match</p>
        </a>
        <a href="#" className='hidden md:flex justify-center items-center rounded-lg overflow-hidden h-[57px] p-4 border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.3)] duration-200'>
          <img className='w-[24px] mr-[13px]' src={icon('./icon05.png')} alt="" />
          <p className=''>P2P Transaction</p>
        </a>
        <a href="#" className='flex justify-center items-center rounded-lg overflow-hidden h-[57px] p-4 border border-[rgba(255,255,255,0.1)] bg-[#12294A] hover:bg-[rgba(255,255,255,0.3)] duration-200'>
          <img className='w-[24px] mr-[13px]' src={icon('./icon_game.png')} alt="" />
          <p className=''>Games</p>
        </a>
        <a href="#" className='flex justify-center items-center rounded-lg overflow-hidden h-[57px] p-4 border border-[rgba(255,255,255,0.1)] bg-[#12294A] hover:bg-[rgba(255,255,255,0.3)] duration-200'>
          <img className='w-[24px] mr-[13px]' src={icon('./icon_setting.png')} alt="" />
          <p className=''>Providers</p>
        </a>
      </div>
    </section>
  );
  
export default Service;