import React from 'react'
import Logo from '../../asset/Logo.png'
import { AiFillHome } from "react-icons/ai";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa";
import { IoCompass } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { FaArrowRightFromBracket } from "react-icons/fa6";
const LestSide = () => {
  return (
    <div className=''>
      <div className='m-6'>
        <img src={Logo} alt='logoj' className='w-[210px]'/>
      </div>
      <div >
        <p className='m-4'>Menu</p>
        <ul className='list-none space-y-4'>
          <li className='flex items-center ml-6 font-semibold'>
          <AiFillHome className='mr-2.5 text-red-600 '/><p className='hover:text-red-800'>Home</p>
            </li>
          <li className='flex items-center ml-6 font-semibold'>
           <FaArrowTrendUp className='mr-2.5 text-red-600'/> <p className='hover:text-red-800'>Trands</p>
            </li>
          <li className='flex items-center ml-6 font-semibold'><FaMusic className='mr-2.5 text-red-600'/>
          <p className='hover:text-red-800'>Library</p>
          </li>
          <li className='flex items-center ml-6 font-semibold'>
          <IoCompass className='mr-2.5 text-red-600'/> <p className='hover:text-red-800'>Discover</p>
            </li>
        </ul>
      </div>

      <div className=' absolute inset-x-0 bottom-0 h-[180px]'>
      <p className='m-4'>General</p>
        <ul className='list-none space-y-4 '>
          <li className='flex items-center ml-6 font-semibold'>
          <IoSettings className='mr-2.5 text-red-600'/><p className='hover:text-red-800'>Setting</p>
            </li>
          <li className='flex items-center ml-6 font-semibold'>
           <FaArrowRightFromBracket className='mr-2.5 text-red-600'/> <p className='hover:text-red-800'>Log Out</p>
            </li>
          
        </ul>
      </div>
    </div>
  )
}

export default LestSide
