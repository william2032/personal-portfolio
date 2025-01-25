import { useState } from 'react';
import { down, rightarrow, uparrow } from '../assets';
import { webservices } from '../constants';
import 'animate.css';



const Services = () => {
    const [showAll, setShowAll] = useState(false)

    const handleToggle = () => (
        setShowAll(!showAll)
    );
    return (
        <section id='services'>
            <div className='max-w-screen-xl mx-auto flex flex-col justify-center  services'>
                <div className=' font-semibold font-outfit services-title'>
                    <h1>My Services</h1>
                </div>
                <div>
                    {webservices.map((webservice, index) => (
                        <div key={index} className='space-y-2 services-container'>
                            {webservice.services.slice(0, showAll ? webservice.services.length : 4).map((service, index) => (
                                <div className=' flex flex-col justify-center p-[60px] services-format'>
                                    {/* todo add animation  card that on hover 
                                it displays the description and pricing 
                                on the other side */}
                                    <h1 className='text-[20px] font-semibold'>{service.no}</h1>
                                    <h2 className='services-name font-semibold'>{service.name}</h2>
                                    <p className='services-desc font-normal text-[20px] max-w-[400px] leading-[40px] text-left'>{service.description}</p>
                                    <p className='services-pricing text-[rgb(240,226,226)] text-[20px] text-center mt-[10px] font-thin animate__animated animate__pulse animate__infinite' >{service.pricing}</p>

                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="readmore flex items-center cursor-pointer " onClick={handleToggle}>
                    <p className='font-medium'>{showAll ? 'Show less' : 'View more'}</p>
                    <img src={showAll ? uparrow : down} alt="right arrow " className='h-5 space-x-2' />
                </div>
            </div>


        </section>)
}

export default Services