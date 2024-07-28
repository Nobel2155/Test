"use client";
import React, { useState, useEffect } from "react";

const LoginMsg = () => {
  const [showLoginCard, setShowLoginCard] = useState(false);
  const [updateData, setUpdateData] = useState(Date.now())

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoginCard(true);
      setUpdateData(Date.now());
    }, 120000);

    return () => clearTimeout(timer);
  }, [updateData]);

  const handleClose = () => {
    setShowLoginCard(false);
  };

  return (
    <div className="absolute bottom-0 shadow-lg">
      <div>
        {showLoginCard && (
          <div className="bg-white relative text-center w-80 border h-auto rounded-md">
            <div className="flex items-center justify-center">
              <div className="space-y-3 py-2 mx-3">
                <h1 className="text-[15px] font-[400]">
                  To get all the feature and <br /> services log in with your
                  email
                </h1>
                <input
                  type="email"
                  placeholder="Write your email here"
                  className="border px-4 py-2 rounded-md outline-none w-full"
                  required
                />
                <button className="font-[500] text-[12px] border px-4 py-2 rounded-md text-[#00703E]">
                  Login
                </button>
                <p className="text-[#00703E]">Don’t have an account?</p>
              </div>
            </div>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={handleClose}
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginMsg;
