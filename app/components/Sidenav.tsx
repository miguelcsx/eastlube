// app/components/Sidenav.tsx

// src/components/Sidenav.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface SidenavProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidenav: React.FC<SidenavProps> = ({ isOpen, onClose }) => {
  const [isSidenavOpen, setIsSidenavOpen] = useState<boolean>(isOpen);

  const handleLinkClick = () => {
    onClose();
  };

  useEffect(() => {
    setIsSidenavOpen(isOpen);
    if (isSidenavOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isOpen, isSidenavOpen]);

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 bg-black/50 z-10' onClick={onClose}></div>
      )}

      <div className={`fixed top-0 left-0 h-full w-72 bg-black text-white z-20 transform transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='p-4 flex justify-between'>
          <h1 className='text-xl font-bold p-2'>Eastlube</h1>
          <button onClick={onClose} className='text-gray-500 hover:bg-white/5 focus:outline-none p-2 rounded'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
        <nav className='flex-grow'>
          <ul className='flex flex-col hover:cursor-pointer mr-8 ml-3'>
            <li className='hover:rounded hover:bg-white/5 py-2 px-3'>
              <Link to='/' onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li className='block lg:hidden py-2 px-3 hover:rounded hover:bg-white/5'>
              <Link to='/services' onClick={handleLinkClick}>
                Services
              </Link>
            </li>
            <li className='block lg:hidden py-2 px-3 hover:rounded hover:bg-white/5'>
              <Link to='/work' onClick={handleLinkClick}>
                Portfolio
              </Link>
            </li>
            <li className='block lg:hidden py-2 px-3 hover:rounded hover:bg-white/5'>
              <Link to='/careers' onClick={handleLinkClick}>
                Careers
              </Link>
            </li>
            <li className='block lg:hidden py-2 px-3 hover:rounded hover:bg-white/5'>
              <Link to='/about' onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li className='block lg:hidden py-2 px-3 hover:rounded hover:bg-white/5'>
              <Link to='/contact' onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidenav;
