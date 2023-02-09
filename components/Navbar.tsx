'use client';
import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { Link } from 'react-scroll';
import MenuModal from './ProductSection';

export const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto bg-white top-0 z-50 px-20">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between">
            <Link to="home">
              <div className="md:py-5 md:block">
                <h2 className="text-2xl font-bold">Wipet Cashier</h2>
              </div>
            </Link>
            <div className="md:hidden mt-2">
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
