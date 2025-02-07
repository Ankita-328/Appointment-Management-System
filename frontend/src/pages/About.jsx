import React from 'react'
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'>Us</span></p>
      </div>

      <div className='flex flex-col gap-12 my-10 md:flex-row'>
         <img className='w-full md:max-w-[360px]' src={assets.about_image} alt=""/>
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome To Prescripto, Your Trusted Partner in Managing Your Healthcare Needs Conveniently And Efficiently. At Prescripto, We Understand The Challenges Individuals Face When It Comes To Scheduling Doctor Appointments And Managing Their Health Records.</p>
          <p>Prescripto Is Committed To Excellence in Healthcare Technology. We Continuously Strive To Enhance Our Platform, Integrating The Latest Advancements To Improve User Experience And Deliver Superior Service. Whether You're Booking Your First Appointment Or Managing Ongoing Care, Prescripto Is Here To Support You Every Step Of The Way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Prescripto Is Committed To Excellence in Healthcare Technology. We Continuously Strive To Enhance Our Platform, Integrating The Latest Advancements To Improve User Experience And Deliver Superior Service. Whether You're Booking Your First Appointment Or Managing Ongoing Care, Prescripto Is Here To Support You Every Step Of The Way.</p>
         </div> 
      </div>

      <div>
        <p>WHY <span className='text-gray-700 font-semibold'> CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'> 
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle,</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE</b>
          <p>Access To A Network Of Trusted Healthcare Professionals in Your Area,</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>Tailored Recommendations And Reminders To Help You Stay On Top Of Your Health.</p>
        </div>
      </div>

    </div>

   
  )
}

export default About;
