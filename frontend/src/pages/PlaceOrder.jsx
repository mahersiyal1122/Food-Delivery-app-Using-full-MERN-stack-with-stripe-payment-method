import React, { useContext, useEffect, useState } from 'react'
import "./pages.css"
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import { toast } from 'react-toastify'

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)

  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:"",
  })

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const place_order=async (event) => {
    event.preventDefault();
    let orderItems=[]
    food_list.map((item)=>{
      if (cartItems[item._id]>0){
        let itemInfo=item;
        itemInfo["quantity"]=cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })
    
    let orderData={
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+1
    }
    
    let response=await axios.post(url+"/api/order/place", orderData,{headers: {token}})
    if (response.data.success){
      const {session_url}=response.data
      window.location.replace(session_url)
    }
    else{
      alert("Error!")
    }

  }  

  return (
    <form onSubmit={place_order} className='flex items-start justify-between gap-[50px] mt-[max(8vh,30px)] max-[700px]:flex-col'>
      <div className='w-full max-w-[max(30%,500px)] placeorder-left'>
        <div className='text-[30px] font-semibold mb-[35px]'>Delivery Information</div>
        <div className='placeorder-multi-input'>
          <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' required />
          <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name' required />
        </div>
        <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email Address' required />
        <input name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' required />
        <div className='placeorder-multi-input'>
          <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' required />
          <input name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' required />
        </div>
        <div className='placeorder-multi-input'>
          <input name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip/Postal Code' required />
          <input name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' required />
        </div>
        <input name='phone' onChange={onChangeHandler} value={data.phone} type="tel" placeholder='Phone Number' required />
      </div>
      <div className='w-full max-w-[max(40%,500px)]'>
        <h2 className='mb-3'>Cart Totals</h2>
        <div>
          <div className='cart-total-details'>
            <div>SubTotal</div>
            <div>${getTotalCartAmount()}</div>
          </div>
          <hr className='m-[10px_0px]' />
          <div className='cart-total-details'>
            <div>Delivery Fee</div>
            <div>${getTotalCartAmount() === 0 ? 0 : 1}</div>
          </div>
          <hr className='m-[10px_0px]' />
          <div className='cart-total-details'>
            <h3>Total</h3>
            <h3>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 1}</h3>
          </div>
        </div>
        <button type='submit' className='cart-total-proceed mt-7'>PROCEED TO PAYMENT</button>
      </div>
    </form>
  )
}

export default PlaceOrder
