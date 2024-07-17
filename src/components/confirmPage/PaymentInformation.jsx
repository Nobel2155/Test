import React from "react";
const PaymentInformation = () => {
  return (
    <div className="border rounded-md mx-auto lg:mt-0 md:mt-8 mt-8">
      <h1 className="bg-[#00703E] h-[51px] flex items-center text-white rounded-md px-5 text-[20px] font-[500]">
        Payment Information
      </h1>
      <div className="px-5 py-3 space-y-1">
        <div className="flex items-center justify-between text-[16px] font-[400]">
          <span>Total Ticket</span>
          <span>$2,000</span>
        </div>
        <div className="flex items-center justify-between text-[16px] font-[400]">
          <span>Extra Bags</span>
          <span>$0</span>
        </div>
        <div className="flex items-center justify-between text-[16px] font-[400]">
          <span>Taxs & Fees</span>
          <span>$30</span>
        </div>
        <hr className="border-[#BABABA]" />
        <div className="flex items-center justify-between text-[16px] font-[400]">
          <span>Total</span>
          <span>$2,030</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentInformation;
