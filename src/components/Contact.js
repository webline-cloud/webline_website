import React, { useState } from 'react'
import axios from 'axios'
import { API } from './constant'

//images
import contact from "./../assets/images/contact-icon-01.png"
import contact2 from "./../assets/images/contact-icon-02.png"
import contact3 from "./../assets/images/contact-icon-03.png"

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const submit = async () => {
        axios.post(`${API}/contact`, {
            name: name,
            email: email,
            subject: subject,
            message: message
        }).then((res) => {
            alert(res.data.data)
            clearField()
        })
            .catch((err) => {
                alert(err)
            })
    }

    const clearField = () => {
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
    }


    return (
        <div>
            <div className='contact_us_container ' id='sendMessage'>
                <div className='max-w-[1100px] w-[100%] mx-auto mt-[60px] mb-[20px]'>
                    <div className='contact_heading_container text-center my-[20px]'>
                        <h6 className='text-[#33ccc5] text-[25px] font-semibold'>Contact Us</h6>
                        <h2 className=' text-[30px] font-bold'>Fill Out The Form Below To</h2>
                        <h2 className='text-[30px] font-bold'><span className='text-[#088ec3]'>Get</span> In <span className='text-[#33ccc5]'>Touch</span> With Us</h2>
                    </div>

                    <div className='md:flex justify-between '>
                        {/* left container start */}
                        <div className='flex items-center w-full '>
                            <div className='bg-white px-[80px] py-[30px] rounded-md text-center w-full '>
                                <div className='fields flex  justify-around gap-[20px] w-full my-[10px]'>
                                    <div className='w-full'>
                                        <input onChange={(e) => setName(e.target.value)} value={name} className='border-[2px] px-[10px] py-[7px] border-[#efefef] rounded-[5px] text-[15px] font-thin w-full' type="text" placeholder='Name' />
                                    </div>
                                    <div className='w-full'>
                                        <input onChange={(e) => setEmail(e.target.value)} value={email} className='border-[2px] px-[10px] py-[7px] border-[#efefef] rounded-[5px] text-[15px] font-thin w-full' type="text" placeholder='Email' />
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <input onChange={(e) => setSubject(e.target.value)} value={subject} className='border-[2px] px-[10px] py-[7px] mb-[10px] border-[#efefef] rounded-[5px] text-[15px] font-thin w-full' type="text" placeholder='Subject' />
                                </div>
                                <div className='w-full'>
                                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} className='border-2 px-[10px] py-[7px] border-[#efefef] rounded-[5px] text-[15px] font-thin w-full resize-none' placeholder='Message...' name="" id="" rows="3"  ></textarea>
                                </div>
                                <div>
                                </div>

                                <div className='mt-[20px]'>
                                    <button onClick={submit} className='bg-[#4771cb] text-white font-semibold rounded-full px-[20px] py-[10px] hover:bg-[#33ccc5] hover:text-white'>Send Message</button>
                                </div>
                                {/* <div>
                                    <div className='bg-[#4771cb] text-white font-semibold rounded-full px-[20px] py-[10px] hover:bg-white hover:text-[#4771cb]'>Get Your Quote</div>
                                </div> */}
                            </div>
                        </div>

                        {/* left container end */}


                        {/* right container start */}
                        <div className='flex flex-col items-center  gap-8 px-[30px] py-[40px] border-[2px]  border-[#efefef]'>
                            <div className='flex flex-col items-center'>
                                <img src={contact} alt="contact webline email" />
                                <p className='text-[#afafaf]'>info@webline.cloud</p>
                            </div>

                            <div className='flex flex-col items-center'>
                                <img src={contact2} alt="contact webline phone" />
                                <p className='text-[#afafaf]'>+91 7533002838</p>
                            </div>

                            <div className='flex flex-col items-center'>
                                <img src={contact3} alt="contact webline address" />
                                <p className='text-[#afafaf] text-center'>New Delhi, India</p>
                            </div>
                        </div>

                        {/* right container end */}

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Contact