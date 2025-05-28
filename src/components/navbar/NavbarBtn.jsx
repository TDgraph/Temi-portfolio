import React from 'react';
// using react arrow don icon
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className='px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-orange to-cyan hover:border-black hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>
      Hire Me
      <div className=' sm:hidden md:block'>
        {/* component for the react icon */}
        <LuArrowDownRight />
      </div>
    </button>
  )
}

export default NavbarBtn;
