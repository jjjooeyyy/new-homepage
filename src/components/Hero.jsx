import React, { useState, useEffect } from 'react';
import { heroMobile, heroDesktop } from '../assets';

const Hero = () => {
  const [xs, setXs] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setXs(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex flex-col'>
      <img src={xs ? heroMobile : heroDesktop} alt="hero-image" className='w-[500px] sm:w-[700px]' />

<div className="flex flex-col lg:flex-row">
     <div className='flex lg:mr-10 lg:justify-center'>
      <h1 className='mt-3 lg:mt-6 flex-1 max-w-[300px]  text-[40px] lg:text-[45px] font-bold text-very-dark-blue xs:leading-[40px] lg:leading-[50px]'>
        The Bright Future of Web 3.0?
      </h1>
      </div>
      <div className='flex flex-col lg:mt-6'>
      <p className='text-dark-grayish-blue lg:w-[400px] text'>
        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
      </p>
      <button className='mt-7 bg-soft-red text-off-white font-bold py-3 px-6 w-[200px] lg:w-[190px] tracking-[4px] hover:bg-very-dark-blue'>
        READ MORE
      </button>
      </div>
</div>
    </div>
  );
};

export default Hero;

