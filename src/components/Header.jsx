import React from 'react'
import NavBar from './NavBar'


const Header = () => {
    const NavLinks =["Home", "Project","Contact", "Work_Experience", "Bookshelf"];
  
    console.log(NavLinks);

  return (
    <>
      <NavBar navBox={NavLinks} />
    </>
  )
}

export default Header
