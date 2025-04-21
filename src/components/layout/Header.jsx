import React from 'react';
import { useState } from "react";
import logo from '../../assets/images/common/logo.png';
import iconSearch from '../../assets/images/icon/icon_search.png'
import iconHamburger from '../../assets/images/icon/icon_hamburger.png'

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'GAME', href: '/Game' },
  { label: 'INFOR', href: '/Infor' },
  { label: 'NEWS', href: '/News' },
  { label: 'PROMOTIONS', href: '/Promotions' },
  { label: 'VIP', href: '/VIP' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative w-full flex items-center px-6 py-4 z-100 bg-[#03193A]">
      <div className=" max-w-[1440px] w-full mx-auto flex items-center justify-between ">
        <div className="flex">
          <button
            className="block focus:outline-none mr-5 w-11"
            onClick={() => setOpen(!open)}
          >
            <img src={iconHamburger} alt="" />
          </button>

          <a className="flex items-center space-x-2 hover:opacity-70 duration-300" href='/'>
            <img src={logo} alt="Casino Logo" className="w-[72px]" />
          </a>

          <a href="#" className='hidden md:block ml-[55px] w-12 hover:opacity-70 duration-300'>
            <img src={iconSearch} alt="icon search" />
          </a>

          <nav className="hidden md:flex items-center gap-10 ml-[32px]">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white hover:text-yellow-400 transition duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        {open && (
          <ul className="md:hidden mt-4 space-y-2 fixed top-10 left-0 bg-[#ccc] w-full h-full">
            {navItems.map((item, index) => (
              <li>
              <a
                key={index}
                href={item.href}
                className="text-white hover:text-yellow-400 transition"
              >
                {item.label}
              </a>
              </li>
            ))}
        </ul>
        )}

        <div className="flex items-center space-x-4">
          <button className="text-white rounded-[10px] px-4 py-3 bg-[#12294A] hover:bg-white hover:text-black duration-300">LOGIN</button>
          <button className="text-white rounded-[10px] px-4 py-3 bg-[#01AF70] hover:bg-[#176e4f] duration-300">REGISTRATION</button>
        </div>
      </div>
    </header>
  );
};

export default Header;