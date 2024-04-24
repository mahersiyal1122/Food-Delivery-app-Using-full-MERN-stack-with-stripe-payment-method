import React, { useEffect, useState } from 'react'
import { GoArrowUp } from "react-icons/go";

const ScrollToTop = () => {

    const [isVisible,setIsVisible]=useState(false)
    
    useEffect(()=>{
        const toggleVisibility=()=>{
            if (window.scrollY>window.innerHeight){
                setIsVisible(true)
            }
            else{
                setIsVisible(false)
            }
        }
        window.addEventListener("scroll", toggleVisibility);
        return ()=>{
            window.removeEventListener("scroll", toggleVisibility)
        }
    },[])

    const scrollToTopFunc=()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <button onClick={scrollToTopFunc} className={`${isVisible?'block':'hidden'} opacity-40 hover:opacity-100 fixed bottom-8 right-8 z-50 cursor-pointer text-[28px] font-bold p-2 bg-black text-white rounded-full outline-none max-[750px]:right-5 max-[500px]:text-xl max-[500px]:p-1 max-[500px]:right-4 max-[500px]:bottom-5 `}><GoArrowUp /></button>
  )
}

export default ScrollToTop
