import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { assets } from '../assets/assets'
import './pages.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount,url, token } = useContext(StoreContext)
  const navigate=useNavigate();

  return (
    <div className='mt-[max(8vh,30px)]'>
      <div>
        <div className='cart_items'>
          <div>Items</div>
          <div>Title</div>
          <div className='max-[430px]:hidden'>Price</div>
          <div>Quantity</div>
          <div>Total</div>
          <div className='max-[430px]:hidden'>Remove</div>
        </div>
        <hr className='h-px bg-[#e2e2e2] border-none' />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return <div key={index}>
              <div className='cart_items text-black m-[10px_0px]'>
                <div className='flex flex-col'>
                  <img className='w-[50px]' src={url+"/images/"+item.image} alt="" />
                </div>
                <div>{item.name}</div>
                <div className='max-[430px]:hidden'>${item.price}</div>
                <div>{cartItems[item._id]}</div>
                <div>${item.price * cartItems[item._id]}</div>
                <img onClick={() => removeFromCart(item._id)} className='w-[max(1vw,12px)] cursor-pointer max-[430px]:hidden' src={assets.cross_icon} alt="" />
                <div className='hidden max-[430px]:flex flex-col text-[max(1vw,12px)] items-start'>
                  <div className='flex items-center gap-1 text-[#555]'>Price: <span className='text-black'>${item.price}</span></div>
                  <button onClick={() => removeFromCart(item._id)} className='text-[red] mt-[-2px] cursor-pointer'>Remove</button>
                </div>
              </div>
              <hr className='h-px bg-[#e2e2e2] border-none' />
            </div>
          }
        })}
      </div>
      <div className='mt-[max(8vh,30px)] flex justify-between gap-[max(12vw,20px)] max-[800px]:flex-col-reverse max-[800px]:gap-[max(8vw,20px)]'>
        <div className='flex flex-col gap-5 flex-1'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <div>SubTotal</div>
              <div>${getTotalCartAmount()}</div>
            </div>
            <hr className='m-[10px_0px]' />
            <div className='cart-total-details'>
              <div>Delivery Fee</div>
              <div>${getTotalCartAmount()===0?0:1}</div>
            </div>
            <hr className='m-[10px_0px]' />
            <div className='cart-total-details'>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()===0?0:getTotalCartAmount() + 1}</h3>
            </div>
          </div>
          <button onClick={()=>{!token?toast("Please Login to your account!"):getTotalCartAmount()!==0?navigate('/order'):toast("Please add something to cart")}} className='cart-total-proceed'>PROCEED TO CHECKOUT</button>
        </div>
        <div className='flex-1'>
          <div className='text-[#555]'>If you have promo code, Enter it here</div>
          <div className='cart-promo-code-input'>
            <input className='bg-transparent px-[10px] w-full outline-none' type="text" placeholder='Promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
