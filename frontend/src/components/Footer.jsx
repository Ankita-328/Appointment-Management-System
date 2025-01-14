import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <div className="flex items-center">
                <img src={assets.hospital} alt="Hospital Icon" className="w-10 h-10 cursor-pointer" />
                <span className="ml-2 text-4xl font-bold text-navy-800 cursor-pointer" style={{ color: '#000080' }}>
                MediEase
                </span>
            </div>
                <p className='w-full md:w-2/3 text-gray-600 leading-6 mt-4'>LoremIpsum is dummy text for printing and hju tre fres</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text0gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text0gray-600'>
                    <li>+91-9999999999</li>
                    <li>mediEase@gmail.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ MediEase</p>
        </div>
    </div>
  )
}

export default Footer