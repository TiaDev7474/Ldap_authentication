'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <main className="flex justify-center h-screen">
      <div>
        <ul className="flex">
          <li className="mr-4 font-sans font-poppins font-bold">Home</li>
          <li className="mr-4 font-sans font-poppins font-bold">About</li>
          <li>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 font-sans font-poppins font-bold rounded"
              onClick={toggleDropdown}
            >
              Login
            </button>
            {showDropdown && (
              <ul className="absolute mt-2 py-2 px-4 bg-white border rounded shadow-lg">
                <li className="text-blue-500 hover:text-blue-700">
                  <Link href="/login">Student</Link>
                </li>
                <li className="text-blue-500 hover:text-blue-700">
                  <Link href="/login">Admin</Link>
                </li>
                <li className="text-blue-500 hover:text-blue-700">
                  <Link href="/login">Professor</Link>
                </li>
                {/* Ajoutez d'autres liens ici si nécessaire */}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </main>
  );
}
