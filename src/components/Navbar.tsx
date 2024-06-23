import React from 'react'
 
import logo from "@/assets/homepage/logo.png";
import Image from 'next/image';
const Navbar = () => {
  return (
    <main>
        <nav className="bg-green-800 p-1 flex items-center justify-between">

  <div className="flex items-center">
  <Image src={logo} alt="Logo" className="w-16" />
  </div>

  <div className="hidden dropdown md:flex gap-x-5 text-white">
      <a href="#" className="hover:underline">Home</a>
      <a href="#" className="hover:underline">Flights</a>
      <a href="#" className="hover:underline">Train</a>
      <a href="#" className="hover:underline">Cars</a>
      <a href="#" className="hover:underline">Bus</a>
      <a href="#" className="hover:underline">Tour Package</a>
      <a href="#" className="hover:underline">Visa Application</a>
      <a href="#" className="hover:underline">Track Flight</a>
  </div>

  <div className="flex items-center space-x-2">
      <button className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
      </button>
      <a href="#" className="bg-transparent border border-white text-white py-1 px-3 rounded hover:bg-white hover:text-green-800">Log in</a>
      <a href="#" className="bg-white text-green-800 py-1 px-3 rounded">Sign in</a>
  </div>
        </nav>
    </main>
  )
}

export default Navbar