import React from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';

// Handle state management
import { useState } from "react";

// using react burger icon for responsivness
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {

  // set state management for the hamburger menu button
  const [menuOpen,setMenuOpen]=useState(false);

  // treat the toggle function
  const toggleMenu = ()=>{
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">

      {/* creating a component for our navlogo */}
     <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-cyan">
         <NavbarLogo />

         {/* Handling menu using js expression */}
         <div className={`transition-all duration-300 ease-in-out overflow-hidden lg:block ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <NavbarLinks />
        </div>

         <NavbarBtn />
     </div>
     <div className='lg:hidden flex sm:block p-6 bg-black items-center rounded-full border-[0.5px] border-orange '>

      {/* Handling the hamburger button */}
      <button className='text-2xl p-3 border border-orange rounded-full text-white' onClick={toggleMenu}>
        <GiHamburgerMenu />
      </button>
     </div>

    </nav>
  )
}

export default NavbarMain;
