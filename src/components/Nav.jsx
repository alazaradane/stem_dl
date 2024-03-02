import React from 'react'


import {headerLogo} from '../assets/images/'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-4 w-full z-10 absolute text-black'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} 
               alt="header-logo" 
               width={230}
               height={100}
               className=' m-0'
               />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((items)=>(
            <li key={items.label}>
              <a 
            href={items.href}
            className=' font-palanquin font-semibold leading-normal text-lg hover:text-coral-blue'>{items.label}</a></li>)
          )}
        </ul>
        
      </nav>
    </header>
  )
}

export default Nav