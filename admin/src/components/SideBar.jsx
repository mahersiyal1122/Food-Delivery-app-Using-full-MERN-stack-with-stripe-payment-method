import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='w-[18%] min-h-screen border-[1.5px] border-[#a9a9a9] border-t-0 text-[max(1vw,10px)]'>
      <div className='pt-[50px] pl-[20%] flex flex-col gap-5'>
        <NavLink to="/add" className='sidebar_options'>
            <img src={assets.add_icon} alt="" />
            <div className='max-[650px]:hidden'>Add Items</div>
        </NavLink>
        <NavLink to="/list" className='sidebar_options'>
            <img src={assets.order_icon} alt="" />
            <div className='max-[650px]:hidden'>List Items</div>
        </NavLink>
        <NavLink to="/orders" className='sidebar_options'>
            <img src={assets.order_icon} alt="" />
            <div className='max-[650px]:hidden'>Orders</div>
        </NavLink>
      </div>
    </div>
  )
}

export default SideBar
