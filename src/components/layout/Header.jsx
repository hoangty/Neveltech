import React from 'react';
import logo from '../../assets/images/common/logo.png';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'GAME', href: '/Game' },
  { label: 'INFOR', href: '/Infor' },
  { label: 'NEWS', href: '/News' },
  { label: 'PROMOTIONS', href: '/Promotions' },
  { label: 'VIP', href: '/VIP' },
];

const Header = () => {
  return (
    <header className="w-full h-20 bg-[#0A0A0A] flex items-center justify-between px-6 shadow-lg">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Casino Logo" className="h-10" />
        <span className="text-white text-xl font-semibold">Casino</span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-8">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-white hover:text-yellow-400 transition"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* User Actions */}
      <div className="flex items-center space-x-4">
        <button className="text-white border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">Login</button>
        <button className="bg-yellow-400 text-black font-bold rounded-full px-4 py-1 hover:bg-yellow-300 transition">Register</button>
      </div>
    </header>
  );
};

export default Header;