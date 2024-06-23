import React from "react";
import Image from "next/image";
import { SiIata } from "react-icons/si";
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import logo from "@/assets/homepage/logo.png";
import bkash from "@/assets/homepage/bkashh.png"
import bankTransfer from "@/assets/homepage/bank-transfer.png"

const Footer = () => {
  return (
    <div>
        <div className="w-full mx-auto  px-4 divide-y bg-[#28373e] text-white">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                            <Image src={logo} alt=""/>
                        </div>
                        <span className="self-center text-xl font-semibold">HAMS AVIATION</span>
                    </a>
                    <div className="w-[290px] mt-5">
                        <p className="text-xs mb-1">
                            Corporate Office: House # 12, Road # 12, Sector # 04, Uttara, Dhaka 1230, Bangladesh.
                        </p>
                        <p className="text-xs">
                            Commercial Address: KC Tower, 8th floor, Plot 13, Sonargaon Janapath road Sector 13. Uttara, Dhaka 1230,Bangladesh.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-900">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Features</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Integrations</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Pricing</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-900">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Privacy policy</a> 
                                {/* <Link to='/privacyPolicy'>Privacy policy</Link> */}
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Terms & conditons</a>
                                {/* <Link  to='/termsAndCondition'> Terms & conditons </Link> */}
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase dark:text-gray-900">Authorized By</h3>
                        <div className="text-7xl text-blue-500"><SiIata /></div>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase dark:text-gray-900">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <a rel="noopener noreferrer" href="https://www.facebook.com/hamsfly.om.bd" target="_blank" title="Facebook" className="text-xl text-blue-400">
                            <FaFacebookSquare />
                            </a>
                            
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/company/hams-fly/" target="_blank" title="Linkedin" className="text-xl text-blue-400">
                             <FaLinkedin />
                            </a>
                            <a rel="noopener noreferrer" href="https://www.instagram.com/hamsfly1?igsh=MW91cWNwM3RnY2RnOQ==" target="_blank" title="Instagram" className="text-xl text-red-500">
                                <FaInstagramSquare />
                            </a>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase dark:text-gray-900">Payment Method</div>
                        <div className="flex gap-x-1">
                            <div className="">
                                <Image src={bkash} alt="" className="w-12"/>
                            </div>
                            <div>
                                <Image src={bankTransfer} alt="" className="w-11"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center dark:text-gray-600">© 2024 HAMS. All rights reserved.</div>
        </div>
    </div>
  )
}

export default Footer
