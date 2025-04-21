import React from 'react';
import SeeAll from '../button/SeeAll';
import GameListSlider from '../slider/GameListSlider';

const images = require.context('../../assets/images/gameList/', false, /\.(png|jpe?g|svg)$/);
const gameListData = [
    {
      publisher: '100HP Gaming',
      href: '#',
      hot: true,
      image: images('./img01.jpg')
    },
    {
      publisher: 'VeliPlay',
      href: '#',
      hot: true,
      image: images('./img02.jpg')
    },
    {
      publisher: 'Evolution',
      href: '#',
      news: true,
      image: images('./img03.jpg')
    },
    {
      publisher: 'VeliPlay',
      href: '#',
      news: true,
      image: images('./img04.jpg')
    },
    {
      publisher: 'Onlyplay',
      href: '#',
      image: images('./img05.jpg')
    },
    {
      publisher: 'VeliPlay',
      href: '#',
      image: images('./img06.jpg')
    },
    {
      publisher: 'VeliPlay',
      href: '#',
      image: images('./img08.jpg')
    },
    {
      publisher: 'VeliPlay',
      href: '#',
      hot: true,
      image: images('./img07.jpg')
    },
    {
      publisher: 'VeliPlay',
      href: '#',
      image: images('./img09.jpg')
    }
  ];
const gameList = () => (
    <section className="providers px-10 space-y-[12px] space-x-[12px] py-14">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between mx-auto mb-16">
          <h2 className="text-[32px] font-medium">Exclusive Games</h2>
          <SeeAll link={'#'}/>
        </div>
        <div className="overflow-hidden">
          <GameListSlider items={gameListData} />
        </div>
      </div>
    </section>
  );
  
export default gameList;