// import React, { ReactNode } from 'react';
// import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// const poppins = Poppins({ subsets: ["latin"], weight: "400" });

// export const metadata: Metadata = {
//   title: "HAMS",
//   description: "A Signature of Excellence",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${poppins.className} mx-auto`}>
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }


"use client";
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import './globals.css';
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {

  useEffect(() => {
    AOS.init({
        offset: 100,
        delay: 0,
        duration: 1000,
        easing: 'ease',
        once: true,
    });
}, []);
  return (
    <html lang="en">
      <body className={`${poppins.className} mx-auto`}>
        <Provider store={store}>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
