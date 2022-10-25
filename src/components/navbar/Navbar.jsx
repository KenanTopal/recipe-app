import { useState } from 'react'
import { Link } from 'react-router-dom'
import {Nav, Logo, Hamburger, Menu, MenuLink} from './NavbarStyle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Nav className='asdasd'>
      <Logo>
        <i>{"Kadiiiirrrrr's"}</i>
        <span> Recipe</span>
      </Logo>
      <Hamburger onClick={()=> setIsOpen(!isOpen)}>
        <span/> 
        <span/>
        <span/>
      </Hamburger>
      <Menu isOpen={isOpen} onClick={()=> setIsOpen(false)} >
        <MenuLink to="/about" >About</MenuLink>
        <MenuLink href="https://github.com/KenanTopal" target="_blank" rel="noopener noreferrer">Github</MenuLink>
        <MenuLink to="/login">Logout</MenuLink>
      </Menu>
    </Nav>
  )
}

export default Navbar

