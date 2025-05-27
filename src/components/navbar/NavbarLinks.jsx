import React from 'react'


// Create links for navbar
const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "contact", section: "contact" },
];

const NavbarLinks = () => {
  return <ul className='flex gap-6 text-white font-bold  text-center py-4 '>
    {/* render the Links */}
      {links.map((link, index)=>{
        return <li key={index} className='group'>
          <a href="#" className='cursor-pointer text-white hover:text-cyan transition-all duration-500'>{link.link}</a>
          <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500'>

          </div>
        </li>
      })}
    </ul>;
  
};

export default NavbarLinks;

