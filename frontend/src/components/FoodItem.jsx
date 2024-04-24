import React, {useContext} from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id,name,image,price,description}) => {

  const{cartItems,addToCart,removeFromCart,url}=useContext(StoreContext)

  return (
    <div className='w-full m-auto rounded-[15px] shadow-[0px_0px_10px_#00000015] transition-[0.3s] animate-[fadeIn_2s]'>
      <div className='relative'>
        <img className='w-full rounded-[15px_15px_0px_0px]' src={url+"/images/"+image} alt="" />
        {!cartItems[id]
          ?<img onClick={()=>addToCart(id)} className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]' src={assets.add_icon_white} alt="" />
          :<div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[5px] rounded-[50px] bg-white'>
            <img className='w-[30px] cursor-pointer' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <div>{cartItems[id]}</div>
            <img className='w-[30px] cursor-pointer' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className='p-[20px]'>  
        <div className='flex justify-between items-center mb-[10px]'>
            <div className='text-lg font-medium '>{name}</div>
            <img className='w-[70px]' src={assets.rating_starts} alt="" />
        </div>
        <div className='text-[#676767] text-xs'>{description}</div>
        <div className='text-[tomato] text-[22px] font-medium m-[10px_0px]'>${price}</div>
      </div>
    </div>
  )
}

export default FoodItem
