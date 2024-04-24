import React from 'react'
import { menu_list } from '../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div id='explore-menu' className='flex flex-col gap-5 max-[600px]:gap-3'>
        <h1 className='text-[#262626] font-medium'>Explore our menu</h1>
        <div className='max-w-[60%] text-[#808080] max-[880px]:max-w-full max-[650px]:text-sm'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dinning experience, one delicious meal at a time.</div>
        <div className='menu-list flex justify-between items-center gap-[30px] text-center m-[20px_0] overflow-x-auto'>
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(e=>e===item.menu_name?"All":item.menu_name)} key={index} className=''>
                        <img className={`${category===item.menu_name?"border-[4px] border-[tomato] p-[2px]":""} w-[7.5vw] min-w-[80px] rounded-[50%] cursor-pointer transition-[0.2s]`} src={item.menu_image} alt="" />
                        <div className='mt-[8px] text-[#747474] text-[max(1.3vw,16px)] cursor-pointer'>{item.menu_name}</div>
                    </div>
                )
            })}
        </div>
        <hr className='m-[8px_0px] h-[2px] bg-[#e2e2e2] border-none' />
    </div>
  )
}

export default ExploreMenu
