// src/components/reservation/TableRow.jsx
"use client";

import React from 'react';
import Link from 'next/link';
// import { useSelector } from 'react-redux';

function TableRow() {
  // const ticketNumber = useSelector((state) => state.ticket.ticketNumber);

  return (
    <div>
      <div className="max-w-[1000px] flex text-xs rounded-md ml-8 mt-2 mx-auto">
        <div className="w-[50px]">1.</div>
        <div className=" w-[60px] ml-2">Flight</div>
        <div className="w-[90px] ml-6">Flight Booking</div>
        <div className="w-[90px] ml-8">HAMS19801</div>
        <div className="w-[90px]">STFL00000</div>
        <div className="w-[90px] ml-10">VRIWOP</div>
        <div className="w-[40px] ml-6">0</div>
        <div className="w-[40px] ml-8">0</div>
        <div className="w-[60px] ml-6 mr-2">Unpaid</div>
        <div className="w-[90px] ml-3">17/03/24<br/>04:20pm</div>
        <div className="w-[90px]">
          <Link href="/pages/paymentMethod">
            <p className="text-[#039BE6]">
            pay now
          </p>
          </Link>
        </div>
      </div>
    </div>
    // <tr className="border-l border-r text-center border-b py-3 text-base font-medium text-[#282828] hover:bg-gray-100">
    //   <th className="py-3">1.</th>
    //   <th className="py-3">Flight</th>
    //   <th className="py-3">Flight Booking</th>
    //   <th className="py-3">HAMS{ticketNumber}</th>
    //   <th className="py-3">
    //     {/* STFL171066 <br />
    //     92178895 */}
    //   </th>
    //   <th className="py-3"></th>
    //   <th className="py-3">0</th>
    //   <th className="py-3">0</th>
    //   <th className="py-3">Approved</th>
    //   <th className="py-3">
    //     17/03/24 <br /> 04:20pm
    //   </th>
    //   <th className="py-3">
    //     <a href="#" className="text-[#039BE6]">
    //       View
    //     </a>
    //   </th>
    // </tr>
  );
}

export default TableRow;
