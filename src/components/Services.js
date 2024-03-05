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
                            {/* <div className='flex justify-center items-center '>
                                <div className='w-[80px] h-[80px] flex justify-center items-center   bg-[#f7f7f7] rounded-full'>
                                    <img className='w-[38px] h-[38px]' src={service_icon1} alt="similar website image" />
                                </div>
                            </div> */}
                            <div className='w-full'>
                                <h4 className='font-bold text-[20px] text-center'>Get Your Digital Presence</h4>
                                <p className='text-[17px]  text-center'>Web Designing</p>
                                <p className='text-[17px] text-center'>SEO(Search Engine Optimization)</p>
                                <p className='text-[17px] text-center'>SMM(Social Media Marketing)</p>
                                <p className='text-[17px] text-center'>Portfolio</p>
                                <p className='text-[17px] text-center'>Online Surveys</p>
                                <p className='text-[17px] text-center'>Article and Blog Writing</p>
                            </div>
                        </div>
                        <div className='cards flex gap-[20px] grow-0 border-4 border-[#f7f7f7] px-[60px] py-[30px] w-[375px]'>
                            {/* <div className='flex justify-center items-center '>
                                <div className='w-[80px] h-[80px] flex justify-center items-center   bg-[#f7f7f7] rounded-full'>
                                    <img className='w-[38px] h-[38px]' src={service_icon2} alt="similar website image" />
                                </div>
                            </div> */}
                             <div className='w-full'>
                                <h4 className='font-bold text-[20px] text-center'>Advertise Your Business</h4>
                                <p className='text-[17px]  text-center'>Business Promotion</p>
                                <p className='text-[17px] text-center'>Marketing</p>
                                <p className='text-[17px] text-center'>Affiliate Marketing</p>
                                <p className='text-[17px] text-center'>Print Advertising</p>
                                <p className='text-[17px] text-center'>Social Media Advertising</p>
                                <p className='text-[17px] text-center'>Email Advertisement</p>
                            </div>
                        </div>
                        <div className='cards flex gap-[20px] grow-0 border-4 border-[#f7f7f7] px-[60px] py-[30px] w-[375px]'>
                            {/* <div className='flex justify-center items-center '>
                                <div className='w-[80px] h-[80px] flex justify-center items-center   bg-[#f7f7f7] rounded-full'>
                                    <img className='w-[38px] h-[38px]' src={service_icon3} alt="similar website image" />
                                </div>
                            </div> */}
                            <div className='w-full'>
                                <h4 className='font-bold text-[20px] text-center'>Want Content for Business</h4>
                                <p className='text-[17px]  text-center'>Photo And Video Editing</p>
                                <p className='text-[17px] text-center'>Docs formatting</p>
                                <p className='text-[17px] text-center'>Hindi And English Typing</p>
                                <p className='text-[17px] text-center'>Letter Head Designing</p>
                                <p className='text-[17px] text-center'>Content Writing</p>
                                <p className='text-[17px] text-center'>Poster Designing</p>
                            </div>
                        </div>
                        <div className='cards flex gap-[20px] grow-0 border-4 border-[#f7f7f7] px-[60px] py-[30px] w-[375px]'>
                            {/* <div className='flex justify-center items-center '>
                                <div className='w-[80px] h-[80px] flex justify-center items-center   bg-[#f7f7f7] rounded-full'>
                                    <img className='w-[38px] h-[38px]' src={service_icon2} alt="similar website image" />
                                </div>
                            </div> */}
                          <div className='w-full'>
                                <h4 className='font-bold text-[20px] text-center'>Webline for your Business Development</h4>
                                <p className='text-[17px]  text-center'>E-Tender/Tender</p>
                                <p className='text-[17px] text-center'>E-Auction</p>
                                <p className='text-[17px] text-center'>GEM</p>
                                <p className='text-[17px] text-center'>E-Commerce</p>
                                <p className='text-[17px] text-center'>Digital Signature Cetrificate</p>
                                <p className='text-[17px] text-center'>Quality/ISO Certification</p>
                            </div>
                        </div>
                        <div className='cards flex gap-[20px] grow-0 border-4 border-[#f7f7f7] px-[60px] py-[30px] w-[375px]'>
                            {/* <div className='flex justify-center items-center '>
                                <div className='w-[80px] h-[80px] flex justify-center items-center   bg-[#f7f7f7] rounded-full'>
                                    <img className='w-[38px] h-[38px]' src={service_icon1} alt="similar website image" />
                                </div>
                            </div> */}
                          <div className='w-full'>
                                <h4 className='font-bold text-[20px] text-center'>Services You feel left with</h4>
                                <p className='text-[17px]  text-center'>Contract work</p>
                                <p className='text-[17px] text-center'>Tech News</p>
                                <p className='text-[17px] text-center'>Computer Solution</p>
                                <p className='text-[17px] text-center'>Quick Techincal Help</p>
                                <p className='text-[17px] text-center'>Proof Reading</p>
                                <p className='text-[17px] text-center'>Market Research</p>
                            </div>
                        </div>
                        {/* <div className='cards flex gap-[20px] grow-0 border-4 border-[#f7f7f7] px-[60px] py-[30px] w-[375px]'>
                            <div className='flex justify-center items-center '>
                                <div className='w-[80px] h-[80px] flex justify-center items-center   bg-[#f7f7f7] rounded-full'>
                                    <img className='w-[38px] h-[38px]' src={service_icon1} alt="similar website image" />
                                </div>
                            </div>
                            <div className='w-full'>
                                <h4 className='font-semibold'>Logo Designing</h4>
                                <p className='text-[15px]'>Create a unique visual identity that resonates, leaving a lasting impression on your audience.</p>
                            </div>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services