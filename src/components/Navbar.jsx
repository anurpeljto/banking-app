import React from 'react'
import { useState } from 'react'
import styles from '../style';

import {close, logo, menu, reacticon, robotarm2} from '../assets';
import {navLinks} from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex flex-row py-6 justify-between items-center navbar z-1">
      <img src={reacticon}  alt="logo" className="w-[50px] h-[50px]"/>
      <div className='flex flex-1 flex-col justify-start flew-wrap gap-2 ml-4'>
        <h4 className='flex-1 text-white font-poppins font-semibold text-[16px]'>Anur Peljto</h4>
        <p className={`${styles.paragraph} text-[14px]`}>Full-Stack Web developer & student</p>
      </div>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id}
          className={`font-poppins
          font-normal
          cursor-pointer
          text-[16px]
          ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'}
          text-white
          `}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt='menu' 
        className='w-[28px] h-[28px] object-contain'
        onClick={() => setToggle((prev) => !prev)}/>

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z[1]`}>
            <ul className='list-none flex justify-end items-center flex-1 flex-col'>
            {navLinks.map((nav, index) => (
              <li key={nav.id}
              className={`font-poppins
              font-normal
              cursor-pointer
              text-[16px]
              ${index === navLinks.length-1 ? 'mr-0' : 'mb-4'}
              text-white
              `}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>  
      </div>
    </nav> 
  )
}

export default Navbar