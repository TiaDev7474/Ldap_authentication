import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex justify-center  h-screen">
      <div>
        <ul className="flex">
          <li className="mr-4">
            Home
          </li>
          <li className="mr-4">
            About
          </li>
          <li>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button> 
            <Link href="/login">
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
