import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center md:justify-center p-4 bg-[#E9EEEC] border-b border-gray-300">
      <header className="text-2xl md:text-3xl uppercase text-green-800 font-bold">Le duo du bistro</header>
      <button className="bg-green-800 absolute right-4 text-lg md:text-xl text-white py-2 px-4 rounded">kontakt oss</button>
    </nav>
  );
};

