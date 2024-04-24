import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {

    
    const [isImage, setIsImage] = useState(false)
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    })
    const changeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", isImage);
        const response = await axios.post(`${url}/api/food/add`, formData)
        if (response.data.success) {
            setData({
                name: "",
                description:"",
                price: "",
                category: "Salad",
            })
            setIsImage(false)
            toast.success(response.data.message);
        }else{
            toast.error(response.data.message);
        }
    }

    return (
        <div className='w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-base'>
            <form className='flex flex-col gap-[10px]' onSubmit={onSubmitHandler} action="">
                <div className='flex flex-col gap-[10px]'>
                    <div>Upload Image</div>
                    <label className='w-max' htmlFor="image">
                        <img className='w-[120px] h-[80px] object-contain rounded-md' src={isImage ? URL.createObjectURL(isImage) : assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e) => setIsImage(e.target.files[0])} className='rounded-md' type="file" id='image' hidden required />
                </div>
                <div className='flex flex-col gap-[10px] w-[max(40%,280px)]'>
                    <div>Product Name</div>
                    <input onChange={changeHandler} value={data.name} className='p-[10px] border border-[#a8a6a6] rounded-md' type="text" name="name" placeholder='Type here' required />
                </div>
                <div className='flex flex-col gap-[10px] w-[max(40%,280px)]'>
                    <div>Product Description</div>
                    <textarea onChange={changeHandler} value={data.description} className='p-[10px] border border-[#a8a6a6] rounded-md' name="description" rows="6" placeholder='Write content here' required ></textarea>
                </div>
                <div className='flex gap-[30px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <div>Product Category</div>
                        <select onChange={changeHandler} className='border border-[#a8a6a6] max-w-[120px] p-[10px] rounded-md ' name="category">
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <div>Product Price</div>
                        <input onChange={changeHandler} value={data.price} required className='border border-[#a8a6a6] max-w-[120px] p-[10px] rounded-md ' type="number" name='price' placeholder='$20' />
                    </div>
                </div>
                <button className='max-w-[120px] border-none p-[10px] bg-black text-white cursor-pointer rounded-md ' type='submit'>ADD</button>
            </form>
        </div>
    )
}

export default Add
