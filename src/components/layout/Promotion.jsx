import React from 'react';
import SeeAll from '../button/SeeAll';
import ProvidersListSlider from '../slider/ProvidersListSlider';

const images = require.context('../../assets/images/promotion/', false, /\.(png|jpe?g|svg)$/);
const promotionData = [
    {
      label: 'Evolution',
      totalGame: '312 games',
      href: '#',
      image: images('./img01.png')
    },
    {
      label: 'Spribe',
      totalGame: '1212 games',
      href: '#',
      image: images('./img02.png')
    },
    {
      label: 'VeliPlay',
      totalGame: '9 games',
      href: '#',
      image: images('./img03.png')
    },
    {
      label: 'SmartSoft',
      totalGame: '36 games',
      href: '#',
      image: images('./img04.png')
    },
    {
      label: '100HP Gaming',
      totalGame: '37 games',
      href: '#',
      image: images('./img05.png')
    },
    {
      label: 'BGaming',
      totalGame: '7 games',
      href: '#',
      image: images('./img06.png')
    },
    {
      label: 'Wazdan',
      totalGame: '166 games',
      href: '#',
      image: images('./img07.png')
    },
    {
      label: 'Turbo Games',
      totalGame: '199 games',
      href: '#',
      image: images('./img08.png')
    }
  ];
const Promotion = () => (
    <section className="providers md:px-2 py-10 pb-16 pt-6 pb-10 space-y-[12px] space-x-[12px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between mb-16">
          <h2 className="text-[32px] font-medium">All Providers</h2>
          <SeeAll link={'#'}/>
        </div>
        <div className="md:px-[54px]">
          <ProvidersListSlider items={promotionData}/>
          </div>
        </div>
    </section>
  );
  
export default Promotion;