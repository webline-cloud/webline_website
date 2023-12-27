import React from 'react'

//images
import contact from "./../assets/images/contact-bg.jpg"

const Contact = () => {
    return (
        <div>
            <div className='contact_us_container '>
                <div className='max-w-[1100px] w-[100%] mx-auto mt-[60px] mb-[20px]'>
                    <div className='contact_heading_container text-center my-[20px]'>
                        <h6 className='text-[#33ccc5] text-[15px] font-semibold'>Contact Us</h6>
                        <h2 className=' text-[30px] font-bold'>Fill Out The Form Below To</h2>
                        <h2 className='text-[30px] font-bold'><span className='text-[#088ec3]'>Get</span> In <span className='text-[#33ccc5]'>Touch</span> With Us</h2>
                    </div>
                    <div className='bg-white px-[80px] py-[30px] rounded-md text-center '>
                        <div className='fields flex  justify-around gap-[20px] w-full my-[10px]'>
                            <div className='w-full'>
                                <input className='border-[2px] px-[10px] py-[7px] border-[#efefef] rounded-[5px] text-[15px] font-thin w-full' type="text" placeholder='Email' />
                            </div>
                            <div className='w-full'>
                                <input className='border-[2px] px-[10px] py-[7px] border-[#efefef] rounded-[5px] text-[15px] font-thin w-full' type="text" placeholder='Email' />
                            </div>                         
                        </div>
                        <div className='w-full'>
                                <textarea className='border-2 px-[10px] py-[7px] border-[#efefef] rounded-[5px] text-[15px] font-thin w-full resize-none' placeholder='Message...' name="" id="" rows="3"  ></textarea>
                            </div>
                        <div></div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact