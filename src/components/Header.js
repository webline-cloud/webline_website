import React from 'react'
import {Link} from "react-router-dom"

//images
import banner_dec_left from "./../assets/images/banner-dec-left.png"
// import banner_dec_left from "./../assets/images/banner-dec-left.png"
import banner_dec_right from "./../assets/images/banner-dec-right.png"
import banner_dec_right_img from "./../assets/images/banner-right-image.png"

const Header = () => {

  const handleButtonClick = () => {
    const secondComponent = document.getElementById('sendMessage');
    
    if (secondComponent) {
      secondComponent.scrollIntoView({ behavior: 'smooth' });
    } 
  };
  const homeButtonClick = () => {
    const homeComponent = document.getElementById('home');
    if(homeComponent){
      homeComponent.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const serviceButtonClick = () => {
    const serviceComponent = document.getElementById('service');
    
    if(serviceComponent){
      serviceComponent.scrollIntoView({ behavior: 'smooth' });
    }
  }

 
  return (
    <div className=''  id='home'>
      {/* header start  */}
      <div className='flex justify-between items-center bg-[#33ccc5] text-white px-[50px] py-[23px] sm:w-full sticky top-0 z-20'>
       <Link to="/"><div><span className='font-extrabold text-[30px] tracking-wide curso'>Webline Cloud</span></div></Link>
        <div className='sm:flex text-white  justify-between hidden w-[250px] font-semibold tracking-wide'>
         <div onClick={homeButtonClick} className='cursor-pointer'>Home</div>
         <div onClick={serviceButtonClick} className='cursor-pointer'>Services</div>
          <div onClick={handleButtonClick} className='cursor-pointer'>Contact Us</div>
        </div>
        <div>
          <div onClick={handleButtonClick} className='bg-[#4771cb] cursor-pointer text-white font-semibold rounded-full px-[20px] py-[10px] hover:bg-white hover:text-[#4771cb]'>Get Your Quote</div>
        </div>
      </div>
      {/* header end  */}

      {/* hero page start  */}
      <div className=''>
      <div className=' flex justify-center '>
        <div className='left_div w-[40%] h-[90vh] '>
          <div className='relative '><img src={banner_dec_left} alt="" />
            <div className='absolute top-20 px-[60px]'>
              <div className='status_and_schedule flex justify-between w-[500px]'>
                <div>
                  <h4 className='text-[15px] font-light text-[#2a2a2a]'>Agency status:</h4>
                  <h3 className='font-bold text-[20px] text-[#2a2a2a]'>Ready Working</h3>
                </div>
                <div>
                  <h4 className='text-[15px] font-light text-[#2a2a2a]'>Pricing:</h4>
                  <h3 className='font-bold text-[20px] text-[#2a2a2a]'>Let's Discuss</h3>
                </div>
                <div>
                  <h4 className='text-[15px] font-light text-[#2a2a2a]'>Schedules:</h4>
                  <h3 className='font-bold text-[20px] text-[#2a2a2a]'>Available</h3>
                </div>

              </div>
              <div className='heading_left_div w-[400px]'>
                <h1 className='text-[60px] font-extrabold bg-gradient-to-r from-[#FA9D4D] to-[#FF4F6B] bg-clip-text text-transparent'>SEO & Digital Marketing Agency</h1>
              </div>

              {/* <div>
                <div className='bg-[#4771cb] text-white font-semibold rounded-full px-[20px] py-[10px] hover:bg-white hover:text-[#4771cb] w-[180px] text-center'>Get Your Quote</div>
              </div> */}
            </div>
          </div>
        </div>


        <div className='right_div w-[60%] h-[90vh]'>
          
          <div className='relative'>
            <img className=' ' src={banner_dec_right} alt="banner right img" />
            <div className='absolute top-20 px-[60px]'>
              <img src={banner_dec_right_img} alt="" />
            </div>
          </div>

        </div>
      </div>
      </div>
      {/* hero page end */}

    </div>
  )
}

export default Header