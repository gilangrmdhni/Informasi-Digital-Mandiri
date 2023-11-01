import React, { useState } from 'react';
import Link from 'next/link';

const products = [
  {
    title: 'GAME SPEEDUP',
    description: 'The SpeedUp Game service can be used to boost your connection while playing games such as Mobile Legends, Free Fire, PUBG Mobile, Arena of Valor, Apex Legends, and dozens of other games.',
    descriptiontwo: 'If you often lose games due to lags on the internet connection, then its time for you to use the SpeedUp Game package to boost your internet connection to play certain games. anti-lag guaranteed!',
    image: '/gane.png',
  },
  {
    title: 'CALL FILTER',
    description: 'Call Filter is a Spam Monitoring Handling Service that makes it easy for users to handle the high activity of spammers or scammers in Indonesia.',
    image: '/call.png',
  },
  {
    title: 'HMS',
    descriptiontwo: 'Headline Message Service (HMS) is an instant messaging application in the form of text and multimedia, which will appear "full screen" automatically on the recipients cellphone, which has internet access and the HMS application on the cellphone.',
    image: '/hms.png',
    label: 'Headline Message Service'

  },
  {
    title: 'CBN',
    description1: 'CB Notify is technology automatically sends a real unanswered call notification to B party when they cannot be reached by A party. The resulting return call creates revenue.',
    image: '/cbn.png',
    label: 'Call Back Notify',
  },
  {
    title: 'VRBT',
    description: 'Video Ring Back Tone is a short video-based call connection video service within 15 seconds.',
    description1: '- It Provides fun to the caller during call waiting time.',
    description2: '- It Provides fun to the caller during call waiting time.',
    description3: '- It Provides fun to the caller during call waiting time.',
    image: '/vrbt.png',
    label: 'Video Ring Back Tone'
  },
  {
    title: 'E-SIM',
    description: 'eSIM.plus is a complete eSIM solution that includes GSMA SAS-SM certified Remote SIM Provisioning Platform (RSP+), Entitlement Server (and WS Websheet server) for wearables and companion devices, Operator app for eSIM application and enablement, and eSIM SDK for M2M/IoT devices.',
    descriptiontwo: 'eSIM.plus provides a seamless digital experience with the eSIM plugin for Mobile operators.',
    image: '/sim.png',
  },
];

const Product = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const changeSlide = (index) => {
    setActiveSlide(index);
  };

  const handleClick = () => {
    window.open(
      'https://my.telkomsel.com/app/payment-method?link=abac6efd12e3521d7c886dc553d1abd75ddb3aae7cf36d48d651f52e2b2ee8696613b418d908db1255081d6b591f280b',
      '_blank'
    );
  };

  const handleClickPlayStore = () => {
    window.open(
      'https://play.google.com/store/search?q=game%20speedup&c=apps&hl=en-ID',
      '_blank'
    );
  };

  const handleClickAppStore = () => {
    window.open(
      'https://apps.apple.com/id/app/game-speedup/id1632397994',
      '_blank'
    );
  };

  return (
    <>

      <div id='product' className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-10'>
        {/* Judul */}
        <div className='text-center md:text-right'>
          <h1 className='text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-5'>
            P R O D U C T S
          </h1>
          <hr className='border-t-1 border-sky-600 w-full mx-auto' />
        </div>

        {/* Navbar Slider */}
        <div className='flex flex-wrap justify-start mb-5 mt-10'>
          {products.map((product, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              className={`${index === activeSlide
                ? 'bg-white text-black'
                : 'bg-transparent text-white'
                } px-4 py-2 m-2 rounded-full border`}
            >
              {product.title}
            </button>
          ))}
        </div>

        {/* Konten Slider */}
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center gap-8 p-4 mt-20'>
          {/* Kolom Kanan (Gambar) */}
          <div className='col-span-1 flex flex-col items-center'>
            <img
              src={products[activeSlide].image}
              alt={products[activeSlide].title}
              className='w-full h-auto max-w-[300px]'
            />
            <p className='text-white mt-2'>{products[activeSlide].title}</p>
            <p className='text-white'>{products[activeSlide].label}</p>
          </div>
          {/* Kolom Kiri (Teks) */}
          <div className='col-span-1'>
            <p className='text-white py-2'>{products[activeSlide].description}</p>
            {products[activeSlide].descriptiontwo && (
              <>
               <p className='text-white py-2'>{products[activeSlide].descriptiontwo}</p>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-12 mt-10'>
                  <img  onClick={() => handleClickPlayStore()} src='/playstore.png' alt='Promo Banner 1' className='' />
                  <img  onClick={() => handleClickAppStore()} src='/appstore.png' alt='Promo Banner 2' className='w-full h-auto max-w-full sm:max-w-[250px] mx-auto' />
                </div>
              </>
            )}
            {products[activeSlide].description1 && (
              <p className='text-white py-2'>{products[activeSlide].description1}</p>
            )}
            {products[activeSlide].description2 && (
              <p className='text-white py-2'>{products[activeSlide].description2}</p>
            )}
            {products[activeSlide].description3 && (
              <p className='text-white py-2'>{products[activeSlide].description3}</p>
            )}

            {/* Konten Khusus Game Speedup */}
          </div>
        </div>
        {activeSlide === 0 && (
          <div className='text-center pt-8 mt-10'>
            <div className='mx-auto max-w-screen-md flex flex-col items-center'>
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-12'>
                <img src='/banner1.jpeg' alt='Promo Banner 1' className='w-full h-auto max-w-full sm:max-w-[250px] mx-auto mb-4' />
                <img src='/banner2.jpeg' alt='Promo Banner 2' className='w-full h-auto max-w-full sm:max-w-[250px] mx-auto mb-4' />
                <img src='/banner3.jpeg' alt='Promo Banner 3' className='w-full h-auto max-w-full sm:max-w-[250px] mx-auto mb-4' />
              </div>
            </div>
          </div>
        )}
      </div>

      {activeSlide === 0 && (
       <div>
         <div className='max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-2 mt-20'>
          {/* Judul */}
          {/* Grid untuk Teks dan Gambar */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-1 gap-2">
            <h1 className="text-white text-3xl font-semibold">ANDROID PACKAGE</h1>
            {/* Kolom Kiri (Teks) */}
            <div className="mt-5 flex">
              {/* Kolom Kiri (Teks Stand Alone) */}
              <div className="text-white">
                <h2 className="text-1xl font-semibold">Stand Alone</h2>
                <p className="py-1">4.000/3hari</p>
                <p className="py-1">4.000/3hari</p>
                <p className="py-1">4.000/3hari</p>
              </div>

              {/* Kolom Kanan (Teks Bundling) */}
              <div className="text-white ml-16">
                <h2 className="text-1xl font-semibold">Bundling</h2>
                <p className="py-1">7.000/3hari(1GB) </p>
                <p className="py-1">12.000/7hari(2GB)</p>
                <p className="py-1">15.000/30hari(5GB) </p>
              </div>
            </div>

            <div className='text-white'>
              <h2 className="text-2xl font-semibold mt-5">IOS PACKAGE</h2>
              <p className="py-1">16.000/30hari</p>
                <button 
                  onClick={() => handleClick()} className="bg-red-500 border-white border px-8 md:px-12 py-2 md:py-2 rounded-full mt-4 text-white">
                  BUY PACKAGE
                </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center md:mt-[-10] mt-[-10] img-foot">
          <img src="/bgfoots.png" alt="Gambar" className="w-full h-full mt-8" />
        </div>
       </div>
      )}
      
    </>
  );
};

export default Product;
