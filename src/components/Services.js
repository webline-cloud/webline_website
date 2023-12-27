import React from 'react'

//images
import service_icon1 from './../assets/images/service-icon-01.png'

const Services = () => {
    return (
        <div>
            <div className='service_main_container mt-[80px]'>
                <div className='service_heading_container text-center'>
                    <h6 className='text-[#33ccc5] text-[15px] font-semibold'>Our Services</h6>
                    <h2 className=' text-[30px] font-bold'>Discover What We Do &</h2>
                    <h2 className='text-[30px] font-bold'><span className='text-[#088ec3]'>Offer</span> To Our <span className='text-[#33ccc5]'>Clients</span></h2>
                </div>
                <div className='card_container  flex justify-center'>
                    <div className='flex flex-wrap gap-[20px] justify-center w-[1200px] my-[20px]'>
                        <div className='cards flex gap-[20px] grow-0 border-4 border-[#f7f7f7] px-[60px] py-[30px] w-[375px] rounded-sm'>
                            <div className='flex justify-center items-center '>
                                <div className='w-[80px] h-[80px] flex justify-center items-center   bg-slate-400 rounded-full'>
                                    <img className='w-[38px] h-[38px]' src={service_icon1} alt="similar website image" />
                                </div>
                            </div>
                            <div className='w-full'>
                                <h4 className='font-semibold '>Similar website</h4>
                                <p className='text-[15px] text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores atque cumque quod ducimus. Voluptas, nobis?</p>
                            </div>
                        </div>
                        <div className='cards flex gap-[20px] grow-0 border-4 border-[#f7f7f7] px-[60px] py-[30px] w-[375px]'>
                            <div className='flex justify-center items-center '>
                                <div className='w-[80px] h-[80px] flex justify-center items-center   bg-slate-400 rounded-full'>
                                    <img className='w-[38px] h-[38px]' src={service_icon1} alt="similar website image" />
                                </div>
                            </div>
                            <div className='w-full'>
                                <h4 className='font-semibold'>Similar website</h4>
                                <p className='text-[15px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores atque cumque quod ducimus. Voluptas, nobis?</p>
                            </div>
                        </div>
                        <div className='cards flex gap-[20px] grow-0 border-4 border-[#f7f7f7] px-[60px] py-[30px] w-[375px]'>
                            <div className='flex justify-center items-center '>
                                <div className='w-[80px] h-[80px] flex justify-center items-center   bg-slate-400 rounded-full'>
                                    <img className='w-[38px] h-[38px]' src={service_icon1} alt="similar website image" />
                                </div>
                            </div>
                            <div className='w-full'>
                                <h4 className='font-semibold'>Similar website</h4>
                                <p className='text-[15px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores atque cumque quod ducimus. Voluptas, nobis?</p>
                            </div>
                        </div>
                        <div className='cards flex gap-[20px] grow-0 border-4 border-[#f7f7f7] px-[60px] py-[30px] w-[375px]'>
                            <div className='flex justify-center items-center '>
                                <div className='w-[80px] h-[80px] flex justify-center items-center   bg-slate-400 rounded-full'>
                                    <img className='w-[38px] h-[38px]' src={service_icon1} alt="similar website image" />
                                </div>
                            </div>
                            <div className='w-full'>
                                <h4 className='font-semibold'>Similar website</h4>
                                <p className='text-[15px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores atque cumque quod ducimus. Voluptas, nobis?</p>
                            </div>
                        </div>
                        <div className='cards flex gap-[20px] grow-0 border-4 border-[#f7f7f7] px-[60px] py-[30px] w-[375px]'>
                            <div className='flex justify-center items-center '>
                                <div className='w-[80px] h-[80px] flex justify-center items-center   bg-slate-400 rounded-full'>
                                    <img className='w-[38px] h-[38px]' src={service_icon1} alt="similar website image" />
                                </div>
                            </div>
                            <div className='w-full'>
                                <h4 className='font-semibold'>Similar website</h4>
                                <p className='text-[15px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores atque cumque quod ducimus. Voluptas, nobis?</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services