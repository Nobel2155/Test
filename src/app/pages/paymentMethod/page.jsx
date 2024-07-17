"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { banks } from "@/components/paymentMethod/BankConstant";
import Image from "next/image";
import bkash from "@/assets/paymentMethod/bkash.png";
import nagad from "@/assets/paymentMethod/nagad.png";
import NagadForm from "@/components/paymentMethod/NagadForm";
import BankForm from "@/components/paymentMethod/BankForm";
import BankList from "@/components/paymentMethod/BankList";

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState("default");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  let options = [
    {
      value: "default",
      label: "Choose your payment option",
      disabled: true,
    },
    {
      value: "Hams pay",
      label: "HAMS pay",
      subLabel: "Gateway rate 0%",
    },
    {
      value: "nagad",
      label: (
        <div className="flex items-center gap-3">
          <Image src={nagad} alt="" />
          <p>Nagad</p>
        </div>
      ),
      subLabel: "Gateway rate 1%",
    },
    {
      value: "bkash",
      label: (
        <div className="flex items-center gap-3">
          <Image src={bkash} alt="" />
          <p>Bkash</p>
        </div>
      ),
      subLabel: "Gateway rate 1.5%",
    },
    {
      value: "book and pay later",
      label: "Book & Pay Later",
    },
    {
      value: "bank",
      label: "Bank",
    },
  ];

  const handleGetBankFormData = (data) => {
    setSelectedOption(data);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionSelect = (option) => {
    if (!option.disabled) {
      setSelectedOption(option.value);
      setDropdownOpen(false);

      if (option.value === "book and pay later") {
        router.push("/pages/dashboardPage"); 
      }
    }
  };

  return (
    <div className="lg:max-w-[1200px] mx-auto mb-10">
      <div className="border rounded-md h-auto lg:mx-auto md:mx-auto mx-5 mt-10 lg:w-[820px] md:w-[820px]">
        <h1 className="bg-[#00703E] h-[51px] flex items-center text-white rounded-md px-5 text-[20px] font-[500] mt-8">
          Payment method
        </h1>
        <div className="px-5 py-3">
          <h1 className="font-[500] text-[16px]">Choose payment method</h1>
          <div>
            <div className="relative" ref={dropdownRef}>
              <button
                className="my-select border px-5 py-2 rounded-md outline-none my-3 w-full text-left flex justify-between items-center"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {selectedOption === "default"
                  ? "Choose your payment option"
                  : selectedOption}
                <span>{dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
              </button>
              {dropdownOpen && (
                <div className="absolute mt-1 w-full bg-white border rounded-md shadow-lg z-10">
                  {options.map((option) => (
                    <div
                      key={option.value}
                      className={`px-5 py-2 hover:bg-[#E8E8E8] cursor-pointer ${
                        option.disabled ? "text-[#ABABAB]" : ""
                      }`}
                      onClick={() => handleOptionSelect(option)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-[400] text-[20px]">
                          {option.label}
                        </span>
                        {option.subLabel && (
                          <span className="font-[400] text-[14px] pl-3">
                            {option.subLabel}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {selectedOption === "nagad" ? <NagadForm /> : ""}
              {selectedOption === "bank" ? (
                <BankList handleGetBankFormData={handleGetBankFormData} />
              ) : (
                ""
              )}
              {banks?.includes(selectedOption) ? <BankForm /> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;