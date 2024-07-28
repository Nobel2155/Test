"use client";
import React, { ReactNode, useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "../redux/store";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { loadUserFromLocalStorage } from "@/redux/authSlice";
import AOS from "aos";
import "aos/dist/aos.css";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

type LayoutProps = {
    children: ReactNode;
};

const AuthInitializer = ({ children }: { children: ReactNode }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUserFromLocalStorage());
    }, [dispatch]);

    return <>{children}</>;
};

const Layout = ({ children }: LayoutProps) => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            delay: 0,
            duration: 1000,
            easing: "ease",
            once: true,
        });
    }, []);

    return (
        <html lang='en'>
            <body className={`${poppins.className} mx-auto`}>
                <Provider store={store}>
                    <AuthInitializer>
                        <Navbar />
                        <main>{children}</main>
                        <Footer />
                    </AuthInitializer>
                </Provider>
            </body>
        </html>
    );
};

export default Layout;
