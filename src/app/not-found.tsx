'use client';

import Error from 'next/error';
import Link from "next/link";
import "@/style/main.css"



export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center h-screen w-screen" style={{ backgroundImage: `url('/img/bg.webp')` }}>
          <h1 className="text-5xl font-bold mb-4 text-[var(--light-blue)]">404</h1>
          <p className="text-xl mb-6 text-[var(--light-blue)]">Oops! The page you’re looking for doesn’t exist.</p>
          <Link
            href="/en"
            className="
                relative inline-block text-[var(--dark-blue)] bg-[var(--light-blue)] 
                px-8 py-2 mb-10 w-fit rounded-[var(--border-radius-16)] transition-all duration-500
                after:content-['»'] after:absolute after:top-1/2 after:right-0 hover:pl-6 hover:pr-10 after:-translate-y-1/2
                after:opacity-0 after:transition-all after:duration-500
                hover:after:opacity-100 hover:after:right-6 shadow-box cursor-pointer"
          >
            Go back
          </Link>
        </div>
      </body>
    </html>
  );
}
