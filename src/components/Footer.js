import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import logo from "./../assets/Company images/logo.png"
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <div className='w-full px-[20px] mx-auto mt-[20px] bg-[#33ccc5]'>
                <div>
                    <div className='flex justify-center '>
                        <img className='w-[100px] h-[80px]' src={logo} alt="webline logo" />
                    </div>
                    <div className='flex gap-3 justify-center items-center'>
                      <Link to="https://www.linkedin.com/company/webline-cloud/ ">  <span><FaLinkedin size={30} color='white' /></span></Link>
                     <Link to='https://www.instagram.com/webline.cloud'>   <span><FaInstagram size={30} color='white' /></span></Link>
                       <Link to="https://wa.me/+917533002838"> <span><FaWhatsapp size={30} color="white" /></span></Link>
                    </div>
                    <div className='flex gap-2 justify-center items-center my-[5px]'>
                        <Link to="mailto:info@webline.cloud"><div>info@webline.cloud</div></Link>|<Link to="tel:+917533002838"><div >+91 75330-02838</div></Link>|<Link to="mailto:support@webline.cloud"> <div>support@webline.cloud</div></Link>
                    </div>
                    <hr />
                    <div className='flex justify-center items-center'>
                        <p>©2023 Webline cloud All rights reserved</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Footer



