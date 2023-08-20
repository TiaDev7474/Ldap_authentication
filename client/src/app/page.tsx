'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import illustration from '../app/undraw_color_palette_re_dwy7.svg'

export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSubDropdown, setShowSubDropdown] = useState(false); // Pour le sous-menu

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleSubDropdown = () => {
    setShowSubDropdown(!showSubDropdown);
  };

  return (
    <div>
    <main className="ml-[40%] text-center justify-center h-screen">
      <div>
        <ul className="flex ">
          <li className="mr-4 font-sans my-6 font-poppins font-bold">Home</li>
          <li className="mr-4 font-sans my-6 font-poppins font-bold">About</li>
          <li>
            <button
              className="bg-blue-500 my-3 px-[30px] hover:bg-blue-700 text-white font-bold py-2 px-4 font-sans font-poppins font-bold rounded"
              onClick={toggleDropdown}
            >
              Login 
            </button>
            {showDropdown && (
              <ul className="absolute mt-[-13px] py-0 px-4 bg-white border rounded shadow-lg">
                <li className="text-gray-700 hover:text-blue-700"onClick={toggleSubDropdown } >
                  Student
                  {/* Ajouter un sous-menu pour Student */}
                  {showSubDropdown && (
                    <ul className="ml-6 mt-2 mt-[-5px] px-4 bg-white border rounded shadow-lg">
                      <li className="text-gray-700 hover:text-blue-700">
                        <Link href="/login">L1</Link>
                      </li>
                      <li className="text-gray-700 hover:text-blue-700">
                        <Link href="/login">L3</Link>
                      </li>
                      {/* Ajoutez d'autres liens ici si nécessaire */}
                    </ul>
                  )}
                </li>
                <li className="text-gray-700 hover:text-blue-700">
                  <Link href="/login">Admin</Link>
                </li>
                <li className="text-gray-700 hover:text-blue-700">
                  <Link href="/login">Professor</Link>
                </li>
                {/* Ajoutez d'autres liens ici si nécessaire */}
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className='mt-[10%] ml-[-10%]'>
    <Image  
          src={illustration}
          alt="Picture of the author"
          sizes="100vw"
          style={{
            width: '40%',
            height: 'auto',
          }}
          className='absolute'
          />        
    </div>
    </main>
    
    </div>
  );
}
