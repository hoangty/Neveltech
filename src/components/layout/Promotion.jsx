import React from 'react';
import SeeAll from '../button/SeeAll';

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
    <section className="providers px-2 space-y-[12px] space-x-[12px] py-10">
      <div className=" w-[1440px] mx-auto">
        <div className="md:flex justify-between mb-4">
          <h2 className="text-3xl font-bold">All providers</h2>
          <SeeAll link={'#'}/>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-8 gap-3 px-[54px]">
          {promotionData.map((promotion, index) => (
              <a
              key={index}
              href={promotion.href}
              className="block text-center rounded-lg overflow-hidden group hover:opacity-90 transition bg-[#12294A]"
              >
              <figure className='pt-4 pb-[22px]'>
                  <img
                      src={promotion.image}
                      alt={promotion.label}
                      className="w-[93.5px] h-auto m-auto object-cover rounded-md"
                  />
              </figure>
              <div className="bg-[rgba(245,249,255,0.05)] py-1 px-3 underline ">
              <p className="text-[13px] text-white">{promotion.label}</p>
              <p className="text-[11px] text-[#90A2BD]">{promotion.totalGame}</p>
              </div>
              </a>
          ))}
          </div>
        </div>
    </section>
  );
  
export default Promotion;