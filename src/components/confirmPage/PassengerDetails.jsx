"use client"
import React, { useEffect, useState } from 'react';

const PassengerDetails = () => {
  const [passenger, setPassenger] = useState({
    title: '',
    givenName: '',
    surName: '',
    DOB: '',
    passportNumber: '', 
    passportEx: '',
    email: '',
    phone: '',
    region: ''
  });

  useEffect(() => {
    setPassenger({
      title: sessionStorage.getItem('title') || '',
      givenName: sessionStorage.getItem('givenName') || '',
      surName: sessionStorage.getItem('surName') || '',
      DOB: sessionStorage.getItem('DOB') || '',
      passportNumber: sessionStorage.getItem('passportNumber') || '',
      passportEx: sessionStorage.getItem('passportEx') || '',
      email: sessionStorage.getItem('email') || '',
      phone: sessionStorage.getItem('phone') || '',
      region: sessionStorage.getItem('region') || '',
    });
  }, []);

  return (
    <div className="border rounded-md h-auto w-[820px] mt-10">
      <h1 className="bg-[#00703E] h-[51px] flex items-center text-white rounded-md px-5 text-[20px] text-base">
        Passenger Details
      </h1>
      <div className="flex items-start justify-between px-5 py-3">
        <div className="space-y-1">
          <div className="text-[16px] text-base">
            Name: <span className="text-base">{passenger.title} {passenger.givenName} {passenger.surName}</span>
          </div>
          <div className="text-[16px] text-base">
            Date of Birth: <span className="text-base">{passenger.DOB}</span>
          </div>
          <div className="text-[16px] text-base">
            Region: <span className="text-base">{passenger.region}</span>
          </div>
          {/* <div className="text-[16px] text-base">
            City: <span className="text-base">Dhaka</span>
          </div> */}
        </div>
        <div className="space-y-1">
          <div className="text-[16px] text-base">
            Passport Number: <span className="text-base">{passenger.passportNumber}</span>
          </div>
          <div className="text-[16px] text-base">
            Email: <span className="text-base">{passenger.email}</span>
          </div>
          <div className="text-[16px] text-base">
            Phone Number: <span className="text-base">{passenger.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerDetails;
