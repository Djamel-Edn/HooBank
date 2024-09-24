import React, { useState } from 'react'
import {logo,menu,close} from '../assets'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='flex justify-between items-center px-3 py-1 lg:px-32 z-10'>
        <div>
            <img src={logo} alt="Logo"  className='w-1/2 h-1/2 md:w-36 md:h-20 md:mx-6'/>
        </div>
        <ul className=' flex-row items-center hidden md:flex gap-12 px-16 mr-4 text-white/70  font-semibold'>
            <li><a href="#Home" className='hover:text-white'>Home</a></li>
            <li><a href="#About Us" className='hover:text-white'>About Us</a></li>
            <li><a href="Features" className='hover:text-white'>Features</a></li>
            <li><a href="Solution" className='hover:text-white'>Solution</a></li>
        </ul>
        {isOpen ?( 
            <div className='relative'>
                <ul className='absolute text-sm top-7 text-white/80 right-2 bg-gray-700 rounded-lg flex flex-col gap-4 p-4 px-6 z-10'>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About Us">About Us</a></li>
                    <li><a href="Features">Features</a></li>
                    <li><a href="Solution">Solution</a></li>
                </ul>
                <img src={close} alt="Close" className='w-6 h-6 md:hidden cursor-pointer' onClick={()=>setIsOpen(prev=>!prev)}/> 
            </div>) :
         <img src={menu} alt="Menu" className='w-6 h-6 md:hidden cursor-pointer' onClick={()=>setIsOpen(!isOpen)}/>}
    </nav>
  )
}

export default Navbar