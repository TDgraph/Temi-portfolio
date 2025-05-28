import React from 'react';

const NavbarLogo = () => {
  return (
    <div>
      {/* Show full name on md and up */}
      <h1 className="text-white text-2xl hidden md:block">Temitope Douglas</h1>
      
      {/* Show initials on smaller screens */}
      <h1 className="text-white font-special font-extrabold text-4xl block md:hidden">TD</h1>
    </div>

  )
}

export default NavbarLogo;
