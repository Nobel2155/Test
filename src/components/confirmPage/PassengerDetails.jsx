"use client";
import { authStates } from "@/redux/allSelector";
import React from "react";
import { useSelector } from "react-redux";

const PassengerDetails = () => {
    const { passengerData } = useSelector(authStates);

    return (
        <div className='border rounded-md h-auto w-[820px] mt-10'>
            <h1 className='bg-[#00703E] h-[51px] flex items-center text-white rounded-md px-5 text-[20px] text-base'>
                Passenger Details
            </h1>
            <div className='flex items-start justify-between px-5 py-3'>
                <div className='space-y-1'>
                    <div className='text-[16px] text-base'>
                        Name:{" "}
                        <span className='text-base'>
                            {passengerData.title} {passengerData.givenName}{" "}
                            {passengerData.surName}
                        </span>
                    </div>
                    <div className='text-[16px] text-base'>
                        Date of Birth:{" "}
                        <span className='text-base'>{passengerData.DOB}</span>
                    </div>
                    <div className='text-[16px] text-base'>
                        Region:{" "}
                        <span className='text-base'>
                            {passengerData.region}
                        </span>
                    </div>
                    {/* <div className="text-[16px] text-base">
            City: <span className="text-base">Dhaka</span>
          </div> */}
                </div>
                <div className='space-y-1'>
                    <div className='text-[16px] text-base'>
                        Passport Number:{" "}
                        <span className='text-base'>
                            {passengerData.passportNumber}
                        </span>
                    </div>
                    <div className='text-[16px] text-base'>
                        Email:{" "}
                        <span className='text-base'>{passengerData.email}</span>
                    </div>
                    <div className='text-[16px] text-base'>
                        Phone Number:{" "}
                        <span className='text-base'>{passengerData.phone}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PassengerDetails;
