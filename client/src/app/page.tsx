import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div>
        <ul className="flex">
          <li className="mr-4">
            Home
          </li>
          <li className="mr-4">
            About
          </li>
          <li>
            <Link href="/login">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
