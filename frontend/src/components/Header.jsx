import React from 'react'

const Header = () => {
  return (
    <div className="h-[34vw] m-[30px_auto] bg-[url('/header_img.png')] bg-contain bg-no-repeat relative">
      <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-[fadeIn_3s] max-[430px]:max-w-[66%] max-[328px]:max-w-[80%]'>
        <h2 className='font-medium text-white text-[max(4.5vw,22px)] leading-tight max-[550px]:text-[20px] max-[328px]:text-[18px]'>Order your favourite food here</h2>
        <div className='text-white text-[1vw] max-[755px]:hidden'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediends and culinnary expertise. Our mission is to satisfy your cravings and elevate your dinning experience, one delicious meal at a time.</div>
        <button className='text-[#747474] font-medium p-[1vw_2.3vw] bg-white text-[max(1vw,13px)] rounded-[50px] max-[550px]:p-[0.7vw_1.7vw] max-[550px]:text-[10px]'>View Menu</button>
      </div>
    </div>
  )
}

export default Header
