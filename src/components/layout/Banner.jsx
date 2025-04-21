import React from 'react';
import BannerListSlider from '../slider/BannerListSlider';

const images = require.context('../../assets/images/banner/', false, /\.(png|jpe?g|svg)$/);
import '../../css/components/bannerSlider.css';

const BannerListData = [
  {
    title: 'Piggy Christmas Tap: €35,000 For Your Wins',
    href: '#',
    link: 'JOIN AND WIN',
    tag: 'Exclusive Tournament',
    gradient: 'gradient01',
    image: images('./banner01.png')
  },
  {
    title: 'Piggy Christmas Tap: €35,000 For Your Wins',
    href: '#',
    link: 'JOIN AND WIN',
    tag: 'Exclusive Tournament',
    gradient: 'gradient02',
    image: images('./banner02.png')
  },
  {
    title: 'Piggy Christmas Tap: €35,000 For Your Wins',
    href: '#',
    link: 'JOIN AND WIN',
    tag: 'Exclusive Tournament',
    gradient: 'gradient03',
    image: images('./banner03.png')
  },
  {
    title: 'Piggy Christmas Tap: €35,000 For Your Wins',
    href: '#',
    link: 'JOIN AND WIN',
    tag: 'Exclusive Tournament',
    gradient: 'gradient04',
    image: images('./banner04.png')
  },
  {
    title: 'Piggy Christmas Tap: €35,000 For Your Wins',
    href: '#',
    link: 'JOIN AND WIN',
    tag: 'Exclusive Tournament',
    gradient: 'gradient05',
    image: images('./banner05.png')
  },
];
const gameList = () => (
    <section className="banner px-10 space-y-[12px] space-x-[12px] py-10">
      <div className="max-w-[1200px] mx-auto">
        <BannerListSlider items={BannerListData} />
      </div>
    </section>
  );
  
export default gameList;