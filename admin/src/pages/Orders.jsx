import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import { toast } from "react-toastify"
import { assets } from '../assets/assets'

const Orders = ({ url }) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list")
    if (response.data.success) {
      setOrders(response.data.data)
      // console.log(response.data.data)
    }
    else {
      toast.error("Error")
    }
  }

  const statusHandler=async (event,orderId)=>{
    const response=await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if (response.data.success){
      await fetchAllOrders()
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [])

  return (
    <div className='w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-base'>
      <h3 className='text-2xl text-black font-semibold text-center'>Order Page</h3>
      <div>
        {orders.map((order, index) => (
          <div key={index} className='grid grid-cols-[0.5fr_2fr_0.5fr_0.5fr_1fr] items-start gap-[30px] border border-[tomato] p-5 m-[30px_0px] text-sm text-[#505050] max-[540px]:text-xs '>
            <img className='min-w-[50px]' src={assets.parcel_icon} alt="" />
            <div className='max-[900px]:col-span-4'>
              <p className='font-semibold'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return `${item.name} x (${item.quantity})`
                  } else {
                    return `${item.name} x (${item.quantity}), `
                  }
                })}
              </p>
            </div>
            <div className='max-[900px]:col-span-2'>Items: {order.items.length}</div>
            <div className='max-[900px]:col-span-2'>${order.amount}</div>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className='bg-[#ffe8e4] border border-[tomato] w-[max(10vw,160px)] p-[10px] outline-none max-[540px]:p-[6px] max-[540px]:w-[max(25vw,60px)]  '>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
            <div className='col-span-5 flex items-start gap-10'>
              <div><span className='font-semibold'>NAME :</span> {order.address.firstName + " " + order.address.lastName}</div>
              <div><span className='font-semibold'>ADDRESS : </span>{`${order.address.street}, ${order.address.city} (${order.address.zipcode}), ${order.address.state}, ${order.address.country}`}
              </div>
              <div><span className='font-semibold'>PHONE No :</span> {order.address.phone}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
