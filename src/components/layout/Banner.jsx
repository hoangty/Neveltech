import React from 'react';
import BannerListSlider from '../slider/BannerListSlider';

const images = require.context('../../assets/images/banner/', false, /\.(png|jpe?g|svg)$/);
const BannerListData = [
  {
    title: 'Piggy Christmas Tap: €35,000 For Your Wins',
    href: '#',
    link: 'JOIN AND WIN',
    tag: 'Exclusive Tournament',
    gradient: ['#147261', '#082C25'],
    image: images('./banner01.png')
  },
  {
    title: 'Piggy Christmas Tap: €35,000 For Your Wins',
    href: '#',
    link: 'JOIN AND WIN',
    tag: 'Exclusive Tournament',
    gradient: ['#284DCE', '#0C1741'],
    image: images('./banner02.png')
  },
  {
    title: 'Piggy Christmas Tap: €35,000 For Your Wins',
    href: '#',
    link: 'JOIN AND WIN',
    tag: 'Exclusive Tournament',
    gradient: ['#284DCE', '#0C1741'],
    image: images('./banner03.png')
  },
  {
    title: 'Piggy Christmas Tap: €35,000 For Your Wins',
    href: '#',
    link: 'JOIN AND WIN',
    tag: 'Exclusive Tournament',
    gradient: ['#284DCE', '#0C1741'],
    image: images('./banner04.png')
  },
  {
    title: 'Piggy Christmas Tap: €35,000 For Your Wins',
    href: '#',
    link: 'JOIN AND WIN',
    tag: 'Exclusive Tournament',
    gradient: ['#26002F', '#590FB7'],
    image: images('./banner05.png')
  },
];
const gameList = () => (
    <section className="providers px-10 space-y-[12px] space-x-[12px] py-10">
      <div className="w-[1200px] mx-auto">
        <BannerListSlider items={BannerListData} />
      </div>
    </section>
  );
  
export default gameList;