import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom';


const Whatsapp = () => {
  return (
    <div>
        <div className='bg-gradient-to-r from-[#9761ED] to-[#703CF3] max-w-[800px] px-[20px] mx-auto my-[20px] rounded-xl'>
            <div className='px-[30px] py-[30px]'>
            <h2 className='text-white font-semibold text-[25px]'>Lets chat!</h2>
            <p className='text-white font-semibold text-[20px]'>I would love to talk to you! Message me.</p>

         <Link to="https://wa.me/+917533002838">  <div className='my-[20px]'><button className='p-[20px]  bg-white rounded-full flex items-center'><span className='px-[10px]'><FaWhatsapp/></span> Let's chat on Whatsapp<span></span> <span className='px-[10px]'><MdOutlineArrowRightAlt /></span></button></div></Link> 
            </div>
            
        </div>
    </div>
  )
}

export default Whatsapp