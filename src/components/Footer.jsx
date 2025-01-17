import React from "react";
import Image from "next/image";
import { SiIata } from "react-icons/si";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import logo from "@/assets/homepage/logo.png";
import bkash from "@/assets/homepage/bkashh.png";
import bankTransfer from "@/assets/homepage/bank-transfer.png";
import Link from "next/link";
import Newsletter from "@/components/Newsletter/Newsletter";

const Footer = () => {
  return (
    <div>
      <div className="px-4 divide-y bg-[#28373e] text-white">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0 max-w-[1200px]">
          <div className="lg:w-1/3 lg:pr-10">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full">
                <Image src={logo} alt="" />
              </div>
              <span className="self-center text-xl font-semibold">
                HAMS Fly Limited
              </span>
            </a>
            <div className="w-[290px] mt-5">
              <p className="text-xs mb-1">
                Corporate Office: House # 12, Road # 12, Sector # 04, Uttara,
                Dhaka 1230, Bangladesh.
              </p>
              <br />
              <p className="text-xs">
                Commercial Address: KC Tower, 8th floor, Plot 13, Sonargaon
                Janapath road Sector 13. Uttara, Dhaka 1230,Bangladesh.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-4 gap-10 grid-cols-2 text-sm gap-y-5 items-start justify-center">
            <div className="space-y-3">
              {/*
              <h3 className="tracking-wide uppercase dark:text-gray-900">
                Product
              </h3>
               <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Integrations
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    FAQ
                  </a>
                </li>
              </ul> */}
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="tracking-wide uppercase font-bold text-white">
                  About Us
                </h3>
                <ul className="space-y-1 gap-2 mt-2">
                  <li>
                    <Link href="/pages/cookiePolicy" target="_blank">
                      {" "}
                      Cookie policy{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/termsAndCondition" target="_blank">
                      {" "}
                      Terms & conditons{" "}
                    </Link>
                  </li>
                  <li rel="noopener noreferrer" href="#">
                    <Link href="/pages/faq" target="_blank">
                      {" "}
                      FAQ{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pt-7 lg:block md:block hidden">
                <Newsletter />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase text-white">Authorized By</h3>
              <div className="text-7xl text-blue-500">
                <SiIata />
              </div>
            </div>
            <div className="space-y-3">
              <div className="uppercase text-white">Social media</div>
              <div className="flex justify-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/hamsfly.om.bd"
                  target="_blank"
                  title="Facebook"
                  className="text-xl text-blue-400"
                >
                  <FaFacebookSquare />
                </a>

                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/hams-fly/"
                  target="_blank"
                  title="Linkedin"
                  className="text-xl text-blue-400"
                >
                  <FaLinkedin />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/hamsfly1?igsh=MW91cWNwM3RnY2RnOQ=="
                  target="_blank"
                  title="Instagram"
                  className="text-xl text-red-500"
                >
                  <FaInstagramSquare />
                </a>
              </div>
            </div>
            <div className="pt-7 lg:hidden md:hidden block col-span-2">
              <Newsletter />
            </div>
            <div className="space-y-3">
              <div className="uppercase text-white">Payment Method</div>
              <div className="flex gap-x-1">
                <div className="">
                  <Image src={bkash} alt="" className="w-12" />
                </div>
                <div>
                  <Image src={bankTransfer} alt="" className="w-11" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-600">
          © 2024 HAMS. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
