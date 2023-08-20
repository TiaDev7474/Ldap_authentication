import React from 'react';
import Image from 'next/image'
import me from '../myAvatar.png'
import Link from 'next/link';
import HomeImage from '../icons8-home-24.png'
import AboutImage from '../icons8-about-48.png'
import LogoutImage from '../icons8-logout-48.png'
import illustration from '../animation_lljvdmiy_small.gif'
export default function Badge() {
  return (
    <div className='flex'>
    <div className="bg-white rounded-lg shadow-lg p-4 w-[30%] h-[100vh]">
      <div className="border border-gray-300 p-4">
        <div className="w-40 h-40 ml-[27%] rounded-full overflow-hidden">
        <Image  
          src={me}
          alt="Picture of the author"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          />
        </div>
        <div className='mt-5 pl-[16%]'>
          <p className="text-lg font-semibold">
            Numéro matricule: 1525H-F
          </p>
          <p className="text-sm">Niveau : License professionnelle de niveau 2</p>
        </div>
      </div>
      <nav className="mt-4">
        <ul className="bg-gradient-to-b from-purple-800 to-purple-900 rounded-lg p-4">
          <li className="mb-2">
            <div className="text-white flex space-x-2">
            <Image  
              src={HomeImage}
              alt="Picture of the author"
              sizes="100vw" 
              style={{
                width: '4.5%',
                height: 'auto',
              }}
          />
            <Link href="#">Home</Link >
            </div>
          </li>
          <li className="mb-2">
            <div className="text-white flex space-x-2">
            <Image  
              src={AboutImage}
              alt="Picture of the author"
              sizes="100vw"
              style={{
                width: '4.5%',
                height: 'auto',
              }}
          />
            <Link href="#">About</Link >
            </div>
          </li>
          <li className="mb-2">
            <div className="text-white flex space-x-2">
            <Image  
              src={LogoutImage}
              alt="Picture of the author"
              sizes="100vw"
              style={{
                width: '4.5%',
                height: 'auto',
              }}
          />
              <Link href="#">Logout</Link >
            </div>
          </li>
        </ul>
      </nav>
    </div>
          {/* <Image  
          src={illustration}
          alt="Picture of the author"
          sizes="100vw"
          style={{
            // position:"absolute",
            width: '20%',
            height: '20%',
          }}
          /> */}
    </div>
  );

}