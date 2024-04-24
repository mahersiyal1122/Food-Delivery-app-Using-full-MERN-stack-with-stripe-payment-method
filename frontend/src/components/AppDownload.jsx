import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div id='app-download' className='m-auto mt-[100px] text-[max(3vw,20px)] text-center font-medium max-[360px]:text-[max(2vw,16px)]'>
      <div>
        <div>For Better Experience Download</div>
        <div>Tomato App</div>
      </div>
      <div className='flex justify-center gap-[max(2vw,10px)] mt-5'>
        <img className='w-[max(3vw,150px)] transition-[0.5s] cursor-pointer hover:scale-105 max-[880px]:w-[max(2vw,100px)] max-[360px]:w-[max(1vw,80px)]' src={assets.play_store} alt="" />
        <img className='w-[max(3vw,150px)] transition-[0.5s] cursor-pointer hover:scale-105 max-[880px]:w-[max(2vw,100px)] max-[360px]:w-[max(1vw,80px)]' src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
