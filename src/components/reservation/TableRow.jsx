"use client";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { authStates } from "@/redux/allSelector";

function TableRow() {
    const { passengerData } = useSelector(authStates);

    return (
        <div>
            <div className='max-w-[1000px] flex text-xs rounded-md ml-8 mt-2 mx-auto'>
                <div className='w-[50px]'>1.</div>
                <div className=' w-[60px] ml-2'>Flight</div>
                <div className='w-[90px] ml-6'>Flight Booking</div>
                <div className='w-[90px] ml-8'>
                    HAMS{passengerData.ticketNumber}
                </div>
                <div className='w-[90px]'>STFL00000</div>
                <div className='w-[90px] ml-10'></div>
                <div className='w-[40px] ml-6'>0</div>
                <div className='w-[40px] ml-8'>0</div>
                <div className='w-[60px] ml-6 mr-2'>Unpaid</div>
                <div className='w-[90px] ml-3'>
                    17/03/24
                    <br />
                    04:20pm
                </div>
                <div className='w-[90px]'>
                    <Link href='/pages/paymentMethod'>
                        <p className='text-[#039BE6]'>pay now</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TableRow;
