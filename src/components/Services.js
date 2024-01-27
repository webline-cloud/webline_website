import React from 'react'

//images
import service_icon1 from './../assets/images/service-icon-01.png'
import service_icon2 from './../assets/images/service-icon-02.png'
import service_icon3 from './../assets/images/service-icon-03.png'


const Services = () => {
    return (
        <div>
            <div className='service_main_container mt-[80px]' id="service">
                <div className='service_heading_container text-center'>
                    <h6 className='text-[#33ccc5] text-[25px] font-semibold'>Our Services</h6>
                    <h2 className=' text-[30px] font-bold'>Discover What We Do &</h2>
                    <h2 className='text-[30px] font-bold'><span className='text-[#088ec3]'>Offer</span> To Our <span className='text-[#33ccc5]'>Clients</span></h2>
                </div>
                <div className='card_container  flex justify-center'>
                    <div className='flex flex-wrap gap-[20px] justify-center w-[1200px] my-[20px]'>
                        <div className='cards flex gap-[20px] grow-0 border-4 border-[#f7f7f7] px-[60px] py-[30px] w-[375px] rounded-sm'>
                            <div className='flex justify-center items-center '>
                                <div className='w-[80px] h-[80px] flex justify-center items-center   bg-[#f7f7f7] rounded-full'>
                                    <img className='w-[38px] h-[38px]' src={service_icon1} alt="similar website image" />
                                </div>
                            </div>
                            <div className='w-full'>
                                <h4 className='font-semibold '>Similar website</h4>
                                <p className='text-[15px] text-left'>Craft stunning websites tailored to your brand, ensuring a standout online presence and functionality.</p>
                            </div>
                        </div>
                        <div className='cards flex gap-[20px] grow-0 border-4 border-[#f7f7f7] px-[60px] py-[30px] w-[375px]'>
                            <div className='flex justify-center items-center '>
                                <div className='w-[80px] h-[80px] flex justify-center items-center   bg-[#f7f7f7] rounded-full'>
                                    <img className='w-[38px] h-[38px]' src={service_icon2} alt="similar website image" />
                                </div>
                            </div>
                            <div className='w-full'>
                                <h4 className='font-semibold'>SEO</h4>
                                <p className='text-[15px]'>Boost visibility on search engines, driving more traffic and enhancing your online discoverability.</p>
                            </div>
                        </div>
                        <div className='cards flex gap-[20px] grow-0 border-4 border-[#f7f7f7] px-[60px] py-[30px] w-[375px]'>
                            <div className='flex justify-center items-center '>
                                <div className='w-[80px] h-[80px] flex justify-center items-center   bg-[#f7f7f7] rounded-full'>
                                    <img className='w-[38px] h-[38px]' src={service_icon3} alt="similar website image" />
                                </div>
                            </div>
                            <div className='w-full'>
                                <h4 className='font-semibold'>Social Media Marketing</h4>
                                <p className='text-[15px]'>Amplify your brand through strategic social media campaigns, connecting and engaging with your audience.</p>
                            </div>
                        </div>
                        <div className='cards flex gap-[20px] grow-0 border-4 border-[#f7f7f7] px-[60px] py-[30px] w-[375px]'>
                            <div className='flex justify-center items-center '>
                                <div className='w-[80px] h-[80px] flex justify-center items-center   bg-[#f7f7f7] rounded-full'>
                                    <img className='w-[38px] h-[38px]' src={service_icon2} alt="similar website image" />
                                </div>
                            </div>
                            <div className='w-full'>
                                <h4 className='font-semibold'>Portfolio</h4>
                                <p className='text-[15px]'>Showcase your best work elegantly, leaving a lasting impression on potential clients and partners.</p>
                            </div>
                        </div>
                        <div className='cards flex gap-[20px] grow-0 border-4 border-[#f7f7f7] px-[60px] py-[30px] w-[375px]'>
                            <div className='flex justify-center items-center '>
                                <div className='w-[80px] h-[80px] flex justify-center items-center   bg-[#f7f7f7] rounded-full'>
                                    <img className='w-[38px] h-[38px]' src={service_icon1} alt="similar website image" />
                                </div>
                            </div>
                            <div className='w-full'>
                                <h4 className='font-semibold'>E-Business Card</h4>
                                <p className='text-[15px]'>Digitize your identity with a dynamic E-business card, leaving a memorable and professional impression.</p>
                            </div>
                        </div>
                        <div className='cards flex gap-[20px] grow-0 border-4 border-[#f7f7f7] px-[60px] py-[30px] w-[375px]'>
                            <div className='flex justify-center items-center '>
                                <div className='w-[80px] h-[80px] flex justify-center items-center   bg-[#f7f7f7] rounded-full'>
                                    <img className='w-[38px] h-[38px]' src={service_icon1} alt="similar website image" />
                                </div>
                            </div>
                            <div className='w-full'>
                                <h4 className='font-semibold'>Logo Designing</h4>
                                <p className='text-[15px]'>Create a unique visual identity that resonates, leaving a lasting impression on your audience.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services