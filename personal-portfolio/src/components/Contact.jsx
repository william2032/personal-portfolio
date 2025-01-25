import React from 'react'
import { gmail, location, phone } from '../assets'

const Contact = () => {
    return (
        <section >
            <div className='max-w-screen-xl mx-auto flex flex-col justify-center contact'>
                <div>
                    <h1 className='contact-title'>Get in touch</h1>
                </div>

                <div className='contact-section flex gap-[150px]'>
                    <div className='contact-left flex flex-col gap-[30px]'>
                        <h1 className='text-[50px] font-semibold'>Let's talk</h1>
                        <p className='max-w-[450px] text-[#D8D8D8] leading-[35px] text-[22px] space-y-4 py-8' >I'm currently available to take on new projects,so feel free to reach out.</p>

                        <div className='contact-details flex flex-col gap-[30px] text-[#D8D8D8] '>
                            <div className="contact-detail">
                                <img src={gmail} alt="email icon" />
                                <p>Gmail</p>
                            </div>
                            <div className="contact-detail">
                                <img src={phone} alt="" /><p>+254798666512</p>
                            </div>
                            <div className="contact-detail">
                                <img src={location} alt="location icon" /><p>Nairobi, Kenya</p>
                            </div>
                        </div>
                    </div>
                    {/* todo add email feature */}
                    <form className='contact-right flex  flex-col text-start gap-[30px] font'>
                        <label htmlFor="">Your Name</label>
                        <input type="text" name="name" placeholder='Enter your name' />
                        <label htmlFor="">Your Email</label>
                        <input type="email" name="email" placeholder='Enter your email' />
                        <label htmlFor="">Do you have any inquiries? </label>
                        <textarea name="message" placeholder='Enter your message here...' rows="8"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Contact 