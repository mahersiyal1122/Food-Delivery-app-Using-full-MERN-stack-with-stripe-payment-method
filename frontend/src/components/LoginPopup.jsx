import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';
import axios from "axios"

const LoginPopup = ({ setShowLogin }) => {

  const {url, setToken}=useContext(StoreContext)
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler=(event)=>{
    const name=event.target.name
    const value=event.target.value
    setData((data)=>({...data,[name]:value}))

  }

  const onLogin=async (event)=>{
    event.preventDefault()
    let newUrl=url;
    if (currState==="Login"){
      newUrl+="/api/user/login"
    }
    else{
      newUrl+="/api/user/register"
    }
    
    const response=await axios.post(newUrl,data)
    if (response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token)
      setShowLogin(false)
    }
    else{
      alert(response.data.message)
    }

  }
  

  return (
    <div className='absolute z-10 w-full h-full bg-[#00000090] grid'>
      <form onSubmit={onLogin} className='place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] p-[25px_30px] rounded-lg text-sm animate-[fadeIn_0.5s]'>
        <div className='flex justify-between items-center text-black'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} className='cursor-pointer w-4 hover:scale-110' src={assets.cross_icon} alt="" />
        </div>
        <div className='flex flex-col gap-4'>
          {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} className='outline-none border border-[#c9c9c9] rounded p-[8px]' type="text" placeholder='Your name' required />}
          <input name='email' onChange={onChangeHandler} value={data.email} className='border border-[#c9c9c9] rounded p-[8px]' type="email" placeholder='Your Email' required />
          <input name='password' onChange={onChangeHandler} value={data.password} className='outline-none border border-[#c9c9c9] rounded p-[8px]' type="password" placeholder='Passsword' />
        </div>
        <button type='submit' className='text-white bg-[tomato] p-[8px] rounded text-[15px]'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className='flex items-start gap-2 mt-[-15px]'>
          <input className='mt-[4px]' type="checkbox" required />
          <div>By continuing, I agree to the terms of use & privacy policy.</div>
        </div>
        {currState === "Login"
          ? <div className='mt-[-10px] mb-[5px]'>Create a new account? <span className='cursor-pointer text-[tomato] font-medium' onClick={() => setCurrState("Sign Up")}>Click here</span></div>
          : <div className='mt-[-10px] mb-[5px]'>Already have an account? <span className='cursor-pointer text-[tomato] font-medium' onClick={() => setCurrState("Login")}>Login here</span></div>}
      </form>
    </div>
  )
}

export default LoginPopup
