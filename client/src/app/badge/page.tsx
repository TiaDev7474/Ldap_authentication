import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Badge() {
  return (
    <div className="flex space-x-[20%]">
      <div className="bg-white rounded-lg shadow-lg p-4 w-[30%] h-[100vh]">
        <div className="border border-gray-300 p-4">
          <div className="w-40 h-40 ml-[27%] rounded-full overflow-hidden">
            <Image
              src="/myAvatar.png"
              alt="Picture of the author"
              sizes="100vw"
              width={500}
              height={500}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
          <div className="mt-5 pl-[16%]">
            <p className="text-lg font-semibold"> matricule numbers: 1525H-F</p>
            <p className="text-sm">
            Level: Professional Bachelor's Degree (Level 2)
            </p>
          </div>
        </div>
        <nav className="mt-4">
          <ul className="bg-gradient-to-b from-purple-800 to-purple-900 rounded-lg p-4">
            <li className="mb-2">
              <div className="text-white flex space-x-2">
                <Image
                  src="/icons8-home-24.png"
                  alt="Picture of the author"
                  sizes="100vw"
                  width={50}
                  height={50}
                  style={{
                    width: '4.5%',
                    height: 'auto',
                  }}
                />
                <Link href="/">Home</Link>
              </div>
            </li>
            <li className="mb-2">
              <div className="text-white flex space-x-2">
                <Image
                  src="/icons8-about-48.png"
                  alt="Picture of the author"
                  sizes="100vw"
                  width={50}
                  height={50}
                  style={{
                    width: '4.5%',
                    height: 'auto',
                  }}
                />
                <Link href="#">About</Link>
              </div>
            </li>
            <li className="mb-2">
              <div className="text-white flex space-x-2">
                <Image
                  src="/icons8-logout-48.png"
                  alt="Picture of the author"
                  sizes="100vw"
                  width={50}
                  height={50}
                  style={{
                    width: '4.5%',
                    height: 'auto',
                  }}
                />
                <Link href="/login">Logout</Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div >
        <Image
          src="/undraw_join_re_w1lh.svg"
          alt="Picture of the author"
          sizes="100vw"
          width={50}
          height={50}
          style={{
            // position:"absolute",
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
}
