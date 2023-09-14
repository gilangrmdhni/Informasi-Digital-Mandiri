import React from 'react';

const Hero = ({ }) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-blue-tua custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0'/>
      <div className='p-5 text-white z-[2] mt-20'>
        <img
          src='banner.png'
          alt='Your Image'
          className='w-70 h-70 mx-auto pt-20'
        />
        <p className='py-5 mt-20 text-xl justify-center text-center max-w-[800px] '>{'IDM, Informasi Digital Mandiri, was established in 2022 in Jakarta, Indonesia. We started as an IT service provider such as software development, Operation and system integration. We focusing in only IT area as our team members are Expert in Software Development.'}</p>
      </div>
    </div>
  );
};

export default Hero;
