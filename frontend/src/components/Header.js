import React, { useState } from 'react';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm px-4 sm:px-0">
      <nav className="mt-8 relative max-w-5xl w-full bg-gray-100 border rounded-[36px] mx-2 py-8 px-4 md:flex md:items-center md:justify-between md:py-4 md:px-6 lg:px-8 xl:mx-auto" aria-label="Global">
        <div className="flex items-center justify-between">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input
            type="text"
           placeholder="Search"
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
           className="text-xl ml-4 font-medium appearance-none border-0 focus:outline-none bg-gray-100 w-full py-2 px-4"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;