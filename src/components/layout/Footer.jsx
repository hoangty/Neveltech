import React, { useState } from 'react';
import { FaTelegramPlane, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import appIos from '../../assets/images/common/ios.png';
import appAndroid from '../../assets/images/common/android.png';

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
    <footer className="bg-[#12294A] text-white py-10 px-2 md:px-6">
      <div className="w-[1440px] mx-auto space-y-6 md:space-y-0 md:grid md:grid-cols-5 md:gap-8 items-start">

        <div className="md:hidden space-y-4">
          {Object.entries(accordionData).map(([title, items]) => (
            <div key={title} className="bg-[#132e57] rounded-md">
              <button
                className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center"
                onClick={() => toggleSection(title)}
              >
                {title}
                <span className="text-lg">{openSection === title ? '−' : '+'}</span>
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
          <div className="text-center">
            <p className="font-semibold mb-2">Follow Us</p>
            <div className="flex justify-center space-x-4 text-xl">
              <FaTelegramPlane className="hover:text-[#00b2ff]" />
              <FaFacebookF className="hover:text-[#1877f2]" />
              <FaInstagram className="hover:text-[#e1306c]" />
              <FaTwitter className="hover:text-[#1da1f2]" />
            </div>
          </div>

          <div className="bg-[#132e57] p-4 rounded-md space-y-2">
            <p className="font-bold">Help Center</p>
            <p className="text-gray-300">If you have any questions?</p>
            <button className="bg-[#4361ee] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#3a52c6] w-full">
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
          <h4 className="font-bold text-2xl mb-2">Help Center</h4>
          <p className="mb-4 text-gray-300">If you have any questions?</p>
          <button className="md:block bg-[#3555FF] text-white px-4 py-3 rounded-[10px] text-[13px, 24px] w-full mb-20 hover:bg-[#3a52c6]">
            GET ANSWERS
          </button>
          <div className="flex space-x-3 text-xl">
            <FaTelegramPlane className="hover:text-[#00b2ff] cursor-pointer" />
            <FaFacebookF className="hover:text-[#1877f2] cursor-pointer" />
            <FaInstagram className="hover:text-[#e1306c] cursor-pointer" />
            <FaTwitter className="hover:text-[#1da1f2] cursor-pointer" />
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
          <a className="bg-[#132e57] rounded-[10px] col-span-2 flex items-center py-[6px] px-[18px] hover:bg-[#314e79] duration-300" href='#'>
            <img src={appIos} alt="Apple" className="w-4.2 h-4.2" />
            <span className="text-[15px]">Bluechip App for Mac OS</span>
          </a>
          <a className="bg-[#1A3157] rounded-[10px] block text-center text-[#90A2BD] hover:bg-[#314e79] duration-300" href='#'>
            <img src={appAndroid} alt="Android" className="w-4.2 h-4.2 mx-auto" />
            <p>Android</p>
          </a>
          <a className="bg-[#1A3157] rounded-[10px] block text-center text-[#90A2BD] hover:bg-[#314e79] duration-300" href='#'>
            <img src={appIos} alt="iOS" className="w-4.2 h-4.2 mx-auto" />
            <p>iOS</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;