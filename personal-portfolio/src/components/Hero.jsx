import React from 'react'

const Hero = () => {
    return (
        <section className='md:max-w-screen-xl mx-auto overflow-hidden flex flex-row justify-between hero' id='home'>
            <div className='flex flex-col '>
                <h1 >
                    <span>I'm  William Kivindu,</span>  frontend  developer based in Kenya. </h1>
                <p>I am a intermediate web developer from chuka University with a 2+ years of experience with multiple web techonlogies ...</p>
                <div className='cursor-pointer flex flex-row gap-[40px] mb-[50px]text-center text-[20px] hero-action '>
                    <div className='hero-connect cursor-pointer'>
                        <a href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector(`#contact`).scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",

                                });
                            }}
                        >
                            <button >Connect with me</button></a>
                    </div>

                    <div className='hero-resume'>
                        <button >My resume</button>
                    </div>
                </div>
            </div>
            {/* todo add my good photoshoot image */}
            <div className="profile overflow-hidden relative ">
                <img src='#' alt="profile image" />
            </div>
        </section>
    )
}

export default Hero