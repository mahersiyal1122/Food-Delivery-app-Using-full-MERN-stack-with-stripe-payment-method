import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div id='footer' className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 p-[20px_8vw] pt-[60px] mt-[80px] '>
      <div className='grid grid-cols-[2fr_1fr_1fr] w-full gap-16 max-[780px]:grid-cols-[1fr_1fr] max-[780px]:gap-10 max-[440px]:grid-cols-1'>
        <div className='flex flex-col items-start gap-5 max-[780px]:col-span-2 max-[440px]:col-span-1'>
            <img className='max-[440px]:w-[160px]' src={assets.logo} alt="" />
            <div className='max-[440px]:text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, id! Totam repellendus rerum autem, alias nemo nesciunt cum nobis consequuntur nihil aspernatur libero voluptatibus esse commodi ipsum eos vitae iure.</div>
            <div className='flex gap-[15px] w-[40px] max-[440px]:w-[30px]'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className='flex flex-col items-start gap-5 max-[440px]:gap-3'>
            <h2 className='text-white max-[440px]:text-2xl'>COMPANY</h2>
            <ul>
                <li className='mb-[8px] cursor-pointer max-[440px]:mb-[6px]'>Home</li>
                <li className='mb-[8px] cursor-pointer max-[440px]:mb-[6px]'>About Us</li>
                <li className='mb-[8px] cursor-pointer max-[440px]:mb-[6px]'>Delivery</li>
                <li className='mb-[8px] cursor-pointer max-[440px]:mb-[6px]'>Privacy Policy</li>
            </ul>
        </div>
        <div className='flex flex-col items-start gap-5 max-[440px]:gap-3'>
            <h2 className='text-white max-[440px]:text-2xl'>GET IN TOUCH</h2>
            <ul>
                <li className='mb-[8px] cursor-pointer max-[440px]:mb-[6px]'>+923-123-343-123</li>
                <li className='mb-[8px] cursor-pointer max-[440px]:mb-[6px]'>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr className='w-full h-[2px] m-[16px_0px] bg-[grey] border-none' />
      <div className='max-[800px]:text-center'>Copyright 2024 &copy; Tomato.com - All Rights Reserved.</div>
    </div>
  )
}

export default Footer
