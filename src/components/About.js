import React from 'react'
// import about_img from "./../assets/images/about-left-image.png"
import about_img from "./../assets/Company images/about-left-image-removebg-preview.png"

const About = () => {
    return (
        <div className='flex justify-center mt-[30px]'>
            <div className='md:flex  justify-around max-w-[1200px] px-[20px]'>
                {/* left container start */}
                <div className='w-full md:w-[500px]'>
                    <img className=' md:w-full h-[400px] md:h-auto mx-auto' src={about_img} alt="about us image" />
                </div>
                {/* left container end */}

                {/* right container start */}
                <div className='px-[30px] max-w-[1000px]'>
                    <div className='service_heading_container '>
                        <h6 className='text-[#33ccc5] text-[25px] font-bold text-center md:text-base'>About Us</h6>
                        <div className=' text-[30px] font-bold  text-center md:text-base    '>Top <span className='text-[#088ec3]'>Marketing</span> agency & consult</div>
                        <div className='text-[30px] font-bold text-center md:text-base'>Your<span className='text-[#33ccc5]'> website </span>with us</div>
                    </div>

                    <div>
                        {/* <div className='flex justify-around'>
                            <div>
                                <h2 className='text-[#33ccc5] text-[25px] font-bold'>750+</h2>
                                <p className='text-[#afafaf]'>Projects Fnished</p>
                            </div>
                            <div>
                                <h2 className='text-[#33ccc5] text-[25px] font-bold'>340+</h2>
                                <p className='text-[#afafaf]'>Happy Clients</p>
                            </div>
                            <div>
                                <h2 className='text-[#33ccc5] text-[25px] font-bold'>128+</h2>
                                <p className='text-[#afafaf]'>Awards</p>
                            </div>
                        </div> */}
                        <div className='my-[15px]'>
                             <p className='text-[15px]'>Welcome to Webline Cloud, where innovation meets expertise. Our dynamic team of young visionaries brings fresh, 
                             innovative ideas, backed by individual expertise gained from experience with MNCs. Established just two months ago, we're dedicated to digitizing 
                             offline businesses and forging impactful collaborations to enhance market visibility. Reach out to us effortlessly by filling the attached form on our website, writing an email, or connecting via WhatsApp. Let's embark on a journey to transform and elevate your online presence together.</p>
                        </div>
                       
                    </div>


                </div>
                {/* right container end */}
            </div>

        </div>
    )
}

export default About