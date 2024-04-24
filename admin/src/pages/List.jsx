import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {

    const [list, setList] = useState([]);
    const fetchList = async ()=>{
        const response=await axios.get(`${url}/api/food/list`)
        // console.log(response.data);
        if (response.data.success){
            setList(response.data.data)
        }
        else{
            toast.error("Error")
        }
    }

    const removeFood=async (foodId)=>{
        const response=await axios.post(`${url}/api/food/remove`,{id:foodId})
        await fetchList()
        if (response.data.success){
            toast.success(response.data.message)
        }
        else{
            toast.error("Error")
        }
    }

    useEffect(()=>{
        fetchList()
    },[])

    return (
        <div className='w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-base flex flex-col gap-[10px]'>
            <div className='text-2xl text-black font-semibold text-center'>All Foods List</div>
            <div>
                <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] p-[12px_15px] font-extrabold text-sm border border-[#cacaca] bg-[#faf8f8] max-[660px]:grid-cols-[1fr_1fr_1fr_1fr_0.5fr] '>
                    <div>Image</div>
                    <div>Name</div>
                    <div>Category</div>
                    <div>Price</div>
                    <div>Action</div>
                </div>
                {list.map((item,index)=>{
                    return (
                        <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-[10px] p-[12px_15px] text-[13px] border border-[#cacaca] max-[660px]:grid-cols-[1fr_1fr_1fr_1fr_0.5fr] ' key={index}>
                            <img className='w-[50px]' src={`${url}/images/`+item.image} alt="" />
                            <div>{item.name}</div>
                            <div>{item.category}</div>
                            <div>${item.price}</div>
                            <div onClick={()=>removeFood(item._id)} className='cursor-pointer font-bold text-[15px]'>X</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default List
