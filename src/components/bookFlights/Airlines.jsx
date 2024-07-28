import React from 'react';
import Image from 'next/image';
import airlineLogo from "@/assets/bookFlights/airlineLogo.png"
const Airlines = () => {
  return (
    <div className="flex gap-2 justify-between items-start p-2">
      <Image className="w-10 h-10" src={airlineLogo} alt="Airline Logo"/>
      <div className="flex flex-col gap-1 text-base ">
        <h2>Hawaiian Airlines</h2>
        <h2 className="text-[#7C8DB0]">FIG4312</h2>
      </div>
      <div className="flex flex-col gap-1 text-base text-end">
        <h2>16h 45m (+1d)</h2>
        <h2>7:00 AM - 4:15 PM</h2>
        <h2 className="text-[#7C8DB0]">2h 45m in HNL</h2>
      </div>
    </div>
  );
}

export default Airlines;
