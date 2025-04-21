import React, { useState } from 'react';
import { FaTelegramPlane, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import appIos from '../../assets/images/common/ios.png';
import appAndroid from '../../assets/images/common/android.png';
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
const social = require.context('../../assets/images/social/', false, /\.(png|jpe?g|svg)$/);

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  const accordionData = {
    Games: [
      { label: 'Game 1', href: '/games/game1' },
      { label: 'Game 2', href: '/games/game2' },
      { label: 'Game 3', href: '/games/game3' },
      { label: 'Game 14', href: '/games/game14' }
    ],
    About: [
      { label: 'About Us', href: '/about' },
      { label: 'Promotions', href: '/promotions' },
      { label: 'VIP', href: '/vip' },
      { label: 'Help Center', href: '/help' },
      { label: 'Awards & Certificates', href: '/awards' },
      { label: 'App', href: '/app' }
    ],
    'Legal Information': [
      { label: 'General Terms & Conditions', href: '/legal/terms' },
      { label: 'Responsible Gaming Policy', href: '/legal/responsible' },
      { label: 'Sports Betting Rules', href: '/legal/sports' },
      { label: 'Privacy and Cookies Policy', href: '/legal/privacy' },
      { label: 'Payment Methods', href: '/legal/payments' },
      { label: 'Limits', href: '/legal/limits' }
    ]
  };

  return (
    <footer className="bg-[#12294A] text-white py-16 md:py-24 px-6 md:px-6">
      <div className="max-w-[1440px] mx-auto space-y-10 md:space-y-0 md:grid md:grid-cols-[200px_auto_auto_auto_160px] md:gap-[80px] items-start">

        <div className="md:hidden space-y-6">
          {Object.entries(accordionData).map(([title, items]) => (
            <div key={title} className="bg-[#1A3157] rounded-md">
              <button
                className="w-full rounded-lg text-left px-6 py-5 pr-7 font-semibold flex justify-between items-center"
                onClick={() => toggleSection(title)}
              >
                {title}
                <span className='text-lg'>
                  {openSection === title ? <SlArrowUp /> : <SlArrowDown />}
                </span>
              </button>
              {openSection === title && (
                <ul className="px-4 pb-3 space-y-2 text-gray-300">
                  {items.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className="hover:text-white transition-colors duration-200 block">{item.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="text-center pt-8">
            <p className="font-semibold mb-9">Follow Us</p>
            <div className="flex justify-center space-x-10 md:space-x-4 text-xl">
              <a href="#" className='block w-[35px] md:w-[30px] hover:opacity-70 transition' target='_blank'>
                <img src={social('./icon_tele.png')} alt="" />
              </a>
              <a href="#" className='block w-[35px] md:w-[30px] hover:opacity-70 transition' target='_blank'>
                <img src={social('./icon_facebook.png')} alt="" />
              </a>
              <a href="#" className='block w-[40px] md:w-[30px] hover:opacity-70 transition' target='_blank'>
                <img src={social('./icon_instagram.png')} alt="" />
              </a>
              <a href="#" className='block w-[35px] md:w-[30px] hover:opacity-70 transition' target='_blank'>
                <img src={social('./icon_twitter.png')} alt="" />
              </a>
            </div>
          </div>

          <div className="bg-[#132e57] py-4 px-8 rounded-md space-y-2 grid grid-cols-[auto_116px] items-center gap-5">
            <div className="w-full">
              <p className="font-meium">Help Center</p>
              <p className="text-gray-300">If you have any questions?</p>
            </div>
            <button className="bg-[#4361ee] text-white text-[14px] w-[116px] rounded-lg px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#3a52c6] w-full">
              GET ANSWERS
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#132e57] p-3 rounded-md flex flex-col items-center">
              <img src={appAndroid} alt="Android" className="w-8 mb-1" />
              <p className="text-xs text-gray-200 text-center">Bluechip App<br />for Android</p>
            </div>
            <div className="bg-[#132e57] p-3 rounded-md flex flex-col items-center">
              <img src={appIos} alt="iOS" className="w-8 mb-1" />
              <p className="text-xs text-gray-200 text-center">Bluechip App<br />for iOS</p>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <h4 className="font-medium text-[24px] mb-5">Help Center</h4>
          <p className="mb-5 text-gray-300">If you have any questions?</p>
          <button className="md:block bg-[#3555FF] text-white px-5 py-4 rounded-[10px] text-[13px, 24px] w-full mb-16 hover:bg-[#3a52c6]">
            GET ANSWERS
          </button>
          <div className="flex gap-6 space-x-3 text-xl">
            <a href="#" className='w-[30px] hover:opacity-70 transition' target='_blank'>
              <img src={social('./icon_tele.png')} alt="" />
            </a>
            <a href="#" className='w-[30px] hover:opacity-70 transition' target='_blank'>
              <img src={social('./icon_facebook.png')} alt="" />
            </a>
            <a href="#" className='w-[30px] hover:opacity-70 transition' target='_blank'>
              <img src={social('./icon_instagram.png')} alt="" />
            </a>
            <a href="#" className='w-[30px] hover:opacity-70 transition' target='_blank'>
              <img src={social('./icon_twitter.png')} alt="" />
            </a>
          </div>
        </div>

        {Object.entries(accordionData).map(([title, items]) => (
          <div className="hidden md:block" key={title}>
            <h4 className="font-medium mb-[20px]">{title}</h4>
            <ul className="space-y-[20px] text-gray-300">
              {items.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="hover:text-white transition-colors duration-200 block">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="hidden md:grid md:grid-cols-2 gap-2 items-start">
          <a className="bg-[#132e57] rounded-[10px] col-span-2 flex items-center py-[4px] px-[11px] hover:bg-[#314e79] duration-300" href='#'>
            <img src={appIos} alt="Apple" className="w-16 h-16" />
            <span className="text-[15px]">Bluechip App for Mac OS</span>
          </a>
          <a className="bg-[#1A3157] rounded-[10px] block text-center text-[#90A2BD] hover:bg-[#314e79] duration-300" href='#'>
            <img src={appAndroid} alt="Android" className="w-20 md:w-16 h-20 md:h-16 mx-auto" />
            <p>Android</p>
          </a>
          <a className="bg-[#1A3157] rounded-[10px] block text-center text-[#90A2BD] hover:bg-[#314e79] duration-300" href='#'>
            <img src={appIos} alt="iOS" className="w-16 h-16 mx-auto" />
            <p>iOS</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;