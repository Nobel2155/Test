// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import logo from "@/assets/homepage/logo.png";
// import Image from "next/image";
// import SignInPopup from "../components/singIn/SignInPopup.jsx";
// import { FaSearch } from "react-icons/fa";
// import AnimatedSearchInput from "./Search.jsx";

// const Navbar = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const popupRef = useRef(null);
//   const [user] = useState(false);
//   const [activeNav, setActiveNav] = useState("home");
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   const togglePopup = () => {
//     setIsPopupOpen(!isPopupOpen);
//   };

//   const handleClickOutside = (event) => {
//     if (popupRef.current && !popupRef.current.contains(event.target)) {
//       setIsPopupOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (isPopupOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isPopupOpen]);

//   return (
//     <main>
//       {isPopupOpen && <SignInPopup popupRef={popupRef} />}
//       <nav className="bg-green-800 ">
//         <div className="p-1 flex items-center h-[70px] justify-between max-w-[1300px] mx-auto lg:px-0 md:px-5 px-2">
//           <div className="flex items-center">
//             <Link href="/pages/homePage">
//               <Image src={logo} alt="Logo" className="w-16" />
//             </Link>
//           </div>
//           <div className="lg:flex md:hidden hidden dropdown gap-x-4 text-white">
//             <a
//               onClick={() => setActiveNav("home")}
//               href="#"
//               className={`hover:underline ${
//                 activeNav === "home" ? "underline" : ""
//               }`}
//               aria-current="page"
//             >
//               Home
//             </a>
//             <a
//               onClick={() => setActiveNav("flights")}
//               href="#"
//               className={`hover:underline ${
//                 activeNav === "flights" ? "underline" : ""
//               }`}
//             >
//               Flights
//             </a>
//             <a
//               onClick={() => setActiveNav("train")}
//               href="#"
//               className={`hover:underline ${
//                 activeNav === "train" ? "underline" : ""
//               }`}
//             >
//               Train
//             </a>
//             <a
//               onClick={() => setActiveNav("cars")}
//               href="#"
//               className={`hover:underline ${
//                 activeNav === "cars" ? "underline" : ""
//               }`}
//             >
//               Cars
//             </a>
//             <a
//               onClick={() => setActiveNav("bus")}
//               href="#"
//               className={`hover:underline ${
//                 activeNav === "bus" ? "underline" : ""
//               }`}
//             >
//               Bus
//             </a>
//             <a
//               onClick={() => setActiveNav("tour")}
//               href="#"
//               className={`hover:underline ${
//                 activeNav === "tour" ? "underline" : ""
//               }`}
//             >
//               Tour Package
//             </a>
//             <a
//               onClick={() => setActiveNav("visa")}
//               href="#"
//               className={`hover:underline ${
//                 activeNav === "visa" ? "underline" : ""
//               }`}
//             >
//               Visa Application
//             </a>
//             <a
//               onClick={() => setActiveNav("track")}
//               href="#"
//               className={`hover:underline ${
//                 activeNav === "track" ? "underline" : ""
//               }`}
//             >
//               Track Flight
//             </a>
//           </div>
//           <div className="flex items-center space-x-2">
//             <div>
//               <AnimatedSearchInput/>
//             </div>
//             <a
//               onClick={!user ? togglePopup : undefined}
//               type={user ? "submit" : "button"}
//               href="#"
//               className="bg-transparent border border-white text-white py-1 px-3 rounded hover:bg-white hover:text-green-800"
//             >
//               Log in
//             </a>
//             <a href="#" className="bg-white text-green-800 py-1 px-3 rounded">
//               Sign in
//             </a>
//           </div>
//         </div>
//       </nav>
//     </main>
//   );
// };

// export default Navbar;

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/authSlice";
import logo from "@/assets/homepage/logo.png";
import Login from "@/components/singIn/Login";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, email } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <main>
      <nav className="bg-green-800 fixed top-0 w-full z-[9999]">
        <div className="p-1 flex items-center justify-between lg:px-16 md:px-10 px-3 mx-auto">
          <div className="flex items-center">
            <Link href="/pages/homePage">
              <Image src={logo} alt="Logo" className="w-16" />
            </Link>
          </div>
          <div className="lg:flex md:hidden hidden dropdown gap-x-5 text-white">
            <a href="#" className="hover:underline" aria-current="page">
              Home
            </a>
            {/* <a href="#" className="hover:underline">
              Flights
            </a>
            <a href="#" className="hover:underline">
              Train
            </a>
            <a href="#" className="hover:underline">
              Cars
            </a>
            <a href="#" className="hover:underline">
              Bus
            </a>
            <a href="#" className="hover:underline">
              Tour Package
            </a>
            <a href="#" className="hover:underline">
              Visa Application
            </a>
            <a href="#" className="hover:underline">
              Track Flight
            </a> */}
          </div> 
          <div className="flex items-center space-x-2">
            <button className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                clipRule="evenodd"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            {!isLoggedIn ? (
              <>
                <Login />
              </>
            ) : (
              <>
                <Link href="/pages/dashboard">
                  <Image
                    className="rounded-full border border-green-600 p-1"
                    src="/profile.png"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                </Link>
                {/* <span className="text-white">Welcome, {email}</span> */}
                <button
                  onClick={handleLogout}
                  className="bg-transparent border border-white text-white py-1 px-3 rounded hover:bg-white hover:text-green-800"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </main>
  );
};
export default Navbar;
