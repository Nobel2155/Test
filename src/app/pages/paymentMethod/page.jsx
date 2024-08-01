"use client";
import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { banks } from "@/components/paymentMethod/BankConstant";
import Image from "next/image";
import bkash from "@/assets/paymentMethod/bkash.png";
import nagad from "@/assets/paymentMethod/nagad.png";
import NagadForm from "@/components/paymentMethod/NagadForm";
import BankForm from "@/components/paymentMethod/BankForm";
import BankList from "@/components/paymentMethod/BankList";
import { useSelector } from "react-redux";
import config from "../../../config"

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState("default");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for "Book & Pay Later"
  const dropdownRef = useRef(null);
  const router = useRouter();

  const passengerData = useSelector((state) => state.auth.passengerData);

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

  const handleOptionSelect = async (option) => {
    if (!option.disabled) {
      setSelectedOption(option.value);
      setDropdownOpen(false);

      if (option.value === "book and pay later") {
        setLoading(true); // Start loading

        try {
          // Send email to user
          await axios.post(`${config.apiUrl}/api/send-mail`, {
            to: passengerData.email,
            subject: "Booking Confirmation",
            text: `Your reservation has been confirmed.
          
            Hello, ${passengerData.givenName} ${passengerData.surName}
            
            We appreciate you selecting Hams Fly Ltd.
            
            Here is your booking reference: HAMS${passengerData.ticketNumber}.
            
            Flight Itinerary:
            From [Departure Airport] to [Arrival Airport], on [Date of Flight] has been booked on ${passengerData.createAt}.
            This is not a valid flight ticket or a confirmation of your travel but only a provisional flight booking, subject to cancellation at any time.
            
            For any assistance, please contact us by calling: +8801407020590, +8801677462155, or by sending mail to: info@hamsfly.com .
            
            Best regards,
            Hams Fly Ltd.
            A Signature of Excellence
            
            E-Mail: info@hamsfly.com
            Telephone: 08802-4985730
            WhatsApp: 08801407020590, 0880167462155
            Address: House 12, Road 12, Sector 04, Uttara
           `
          });

          // Send email to administration
          await axios.post(`${config.apiUrl}/api/send-mail`, {
            to: "info@hamsfly.com",
            subject: "New Booking Alert",
            text: `A new booking. booking reference: HAMS${passengerData.ticketNumber} `,
          });

          // Redirect to the dashboard page
          router.push("/pages/ticket");
        } catch (error) {
          console.error("Failed to send email:", error);
        } finally {
          setLoading(false); // Stop loading after the process is complete
        }
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
                className={`my-select border px-5 py-2 rounded-md outline-none my-3 w-full text-left flex justify-between items-center ${loading ? 'bg-gray-300 cursor-not-allowed' : ''}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                disabled={loading} // Disable dropdown button during loading
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
