import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('rgba(66, 65, 125, 0.8)');
  const [textColor, setTextColor] = useState('#ffffff');
  const [scrolling, setScrolling] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={`fixed left-0 right-0 mx-auto max-w-[1280px] w-full justify-center items-center top-6 z-10 ease-in duration-300 rounded-full border border-sky-700 ${
        scrolling ? 'h-auto' : 'h-auto'
      }`}
    >
      <div className='flex justify-between items-center p-3 px-6 text-white '>
        <Link href='/'>
          <div className='flex items-center'>
            {scrolling ? (
              <img
                src='/logo.png'
                alt='Logo'
                style={{ width: '50px', height: '50px', marginRight: '10px' }}
              />
            ) : (
              <p style={{ color: `${textColor}`, fontSize: '1.5rem' }} className='font-bold text-4xl title-navbar'>
                PT. INFORMASI DIGITAL MANDIRI
              </p>
            )}
          </div>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/#about'>About Us</Link>
          </li>
          <li className='p-4'>
            <Link href='/#service'>Services</Link>
          </li>
          <li className='p-4'>
            <Link href='/#portofolio'>Portofolio</Link>
          </li>
          <li className='p-4'>
            <Link href='/#product'>Products</Link>
          </li>
          <li className='p-4'>
            <Link href='/#contact'>Contact Us</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={40} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={40} style={{ color: `${textColor}` }} />
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      {nav && (
        <div className='sm:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white'>
          <ul className='flex flex-col items-center space-y-8 mt-16'>
            <li
              onClick={handleNav}
              className='text-3xl'
              style={{ animation: 'fadeInDown 0.5s ease-in-out' }}
            >
              <Link href='/#about'>About Us</Link>
            </li>
            <li
              onClick={handleNav}
              className='text-3xl'
              style={{ animation: 'fadeInDown 0.7s ease-in-out' }}
            >
              <Link href='/#service'>Services</Link>
            </li>
            <li
              onClick={handleNav}
              className='text-3xl'
              style={{ animation: 'fadeInDown 0.9s ease-in-out' }}
            >
              <Link href='/#portofolio'>Portofolio</Link>
            </li>
            <li
              onClick={handleNav}
              className='text-3xl'
              style={{ animation: 'fadeInDown 1.1s ease-in-out' }}
            >
              <Link href='/#product'>Products</Link>
            </li>
            <li
              onClick={handleNav}
              className='text-3xl'
              style={{ animation: 'fadeInDown 1.3s ease-in-out' }}
            >
              <Link href='/#contact'>Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
