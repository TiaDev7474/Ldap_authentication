import React from 'react';
import Image from 'next/image'
import me from '../myAvatar.png'

export default function Badge() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="border border-gray-300 p-4">
        <div className="w-20 h-20 rounded-full overflow-hidden">
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
        <div>
          <p className="text-lg font-semibold">
            Numéro matricule: 1525H-F
          </p>
          <p className="text-sm">Niveau : License professionnelle de niveau 2</p>
        </div>
      </div>
      <nav className="mt-4">
        <ul className="bg-gradient-to-b from-purple-800 to-purple-900 rounded-lg p-4">
          <li className="mb-2">
            <div className="text-white">
              <a href="#">Logout</a>
            </div>
          </li>
          <li className="mb-2">
            <div className="text-white">
              <a href="#">Home</a>
            </div>
          </li>
          <li className="mb-2">
            <div className="text-white">
              <a href="#">About</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
