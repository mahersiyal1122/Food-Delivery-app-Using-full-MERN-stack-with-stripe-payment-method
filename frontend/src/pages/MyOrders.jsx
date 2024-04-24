import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { assets } from '../assets/assets';
import { IoCaretDownCircleOutline } from "react-icons/io5";
import "./pages.css"

const MyOrders = () => {

    const { url, token } = useContext(StoreContext)
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } })
        setData(response.data.data)
    }

    useEffect(() => {
        if (token) {
            fetchOrders()
        }
    }, [token])

    return (
        <div className='m-[50px_0px]'>
            <h2>My Orders</h2>
            <div className='flex flex-col gap-5 mt-[30px]'>
                {data.map((order, index) => {
                    return (
                        <div key={index} className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr_1fr] items-center gap-[30px] text-sm p-[10px_20px] text-[#454545] border border-[tomato] max-[900px]:grid-cols-[1fr_3fr_1fr] max-[570px]:grid-cols-[1fr_1fr]'>
                            <img className='w-[50px] max-[900px]:order-1 max-[570px]:w-[80px] ' src={assets.parcel_icon} alt="" />
                            <div className='ordersroll flex items-center gap-[30px] justify-between bg-[#ffe1e1] p-[12px_0px] rounded relative cursor-pointer max-[570px]:col-span-3 max-[570px]:order-last max-[900px]:order-5 max-[570px]:text-[13px] '>
                                <div className='font-medium pl-[8px]'>Your Order Items</div>
                                <div className='font-bold text-[16px] pr-[8px]'><IoCaretDownCircleOutline /></div>
                                <div className='ordersroll-abs absolute top-10 bg-[#ffbdb1e6] w-full rounded-[0px_0px_4px_4px] max-h-[18vh] min-h-[14vh] overflow-y-auto text-[#454545] hidden z-30 '>
                                    {order.items.map((item, index) => {
                                        return (
                                            <div key={index} className='flex flex-col'>
                                                <div className='p-[0px_8px] py-3'>{item.name} <span>x</span> ({item.quantity})</div>
                                                {index < order.items.length - 1 && <hr className='border-[#ffe1e1]' />}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='max-[900px]:order-6 max-[570px]:order-4 max-[570px]:text-[13px]'>${order.amount}.00</div>
                            <div className='max-[900px]:order-4 max-[570px]:order-3 max-[570px]:text-[13px]'>Items: {order.items.length}</div>
                            <div className='max-[900px]:order-2 max-[570px]:col-span-2'><span className='text-[tomato]'>&#x25cf;</span> <b className='text-[#454545] font-semibold'>{order.status}</b></div>
                            <button onClick={fetchOrders} className='p-[12px_0px] bg-[#ffe1e1] rounded cursor-pointer text-[#454545] max-[900px]:order-3 max-[750px]:text-[12px] max-[750px]:p-[9px_0px] max-[570px]:order-5 max-[570px]:text-[10px] max-[570px]:p-[5px_6px]  '>Track Order</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyOrders
