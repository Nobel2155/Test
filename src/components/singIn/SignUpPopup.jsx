"use client";
import React, { useState, useEffect, useRef } from "react";
import SocialLogin from "./SocialLogin";
import globalAxiosURL from "../../hooks/globalAxiosURL";

function SignUpPopup({ setIsSignUpOpen, setIsSignInOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
    agreeTerms: false,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const popupRef = useRef(null);
  const axiosURL = globalAxiosURL();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosURL.post("/auth/signup", {
        name: formData.name,
        email: formData.emailOrPhone,
        password: formData.password,
      });
      if (response.data.token) {
        setSuccessMessage("OTP sent to your email.");
        setErrorMessage("");
        setEmail(formData.emailOrPhone);
        setShowOtpForm(true);
        setFormData({
          name: "",
          emailOrPhone: "",
          password: "",
          agreeTerms: false,
        });
      } else {
        setErrorMessage("Something went wrong. Please try again");
        setFormData({
          name: "",
          emailOrPhone: "",
          password: "",
          agreeTerms: false,
        });
      }
    } catch (error) {
      setErrorMessage(error.response?.data.message || "An error occurred.");
      setSuccessMessage("");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosURL.post("/auth/verify-otp", {
        email: email,
        otp: otp,
      });
      if (response.status === 200) {
        setSuccessMessage("OTP verified successfully! Registration complete.");
        setErrorMessage("");
        setShowOtpForm(false);
      } else {
        setSuccessMessage("");
        setErrorMessage("Otp not verified. Please try with valid otp");
      }
    } catch (error) {
      setErrorMessage(error.response?.data.message || "An error occurred.");
      setSuccessMessage("");
    } finally {
      setLoading(false); // Set loading to false after the response
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsSignUpOpen(false);
        setFormData({
          emailOrPhone: "",
          password: "",
        });
        setSuccessMessage("");
        setErrorMessage("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={popupRef}
        className="bg-white rounded shadow-lg w-[480px] flex lg:flex-row md:flex-col flex-col items-start justify-around"
      >
        <form
          onSubmit={showOtpForm ? handleOtpSubmit : handleFormSubmit}
          className="w-full text-center text-[#282828] shadow-lg rounded-2xl p-5"
        >
          {!showOtpForm ? (
            <>
              <h1 className="text-xl font-medium pb-3">Create Your Account</h1>
              <div className="flex flex-col gap-3 text-left text-base">
                <div className="flex flex-col gap-[10px]">
                  <label>Name*</label>
                  <input
                    className="py-[10px] px-[11px] w-full rounded border border-[#BABABA] text-[#242222] focus:outline-none flex-grow"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ex: John"
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <label>Email or Phone Number*</label>
                  <input
                    className="py-[10px] px-[11px] w-full rounded border border-[#BABABA] text-[#242222] focus:outline-none flex-grow"
                    type="text"
                    name="emailOrPhone"
                    value={formData.emailOrPhone}
                    onChange={handleInputChange}
                    placeholder="Write your email here..."
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <label>Password*</label>
                  <input
                    className="py-[10px] px-[11px] w-full rounded border border-[#BABABA] text-[#242222] focus:outline-none flex-grow"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="password"
                  />
                </div>
                <div className="flex gap-1 items-center text-base w-[260px]">
                  <div>
                    <input
                      className="w-3 h-3 mr-2 bg-stone-500 "
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                    />
                    <span className="text-sm">
                      I agree to the Terms & Condition
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    className={`w-full py-2 rounded text-white ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#00703E] hover:bg-green-700"
                    }`}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Registering..." : "Register"}
                  </button>
                </div>
                <div className="text-center mt-2">
                  <p className="text-sm">
                    Already have an account?
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        setIsSignInOpen(true);
                        setIsSignUpOpen(false);
                      }}
                      href="#"
                      className="text-[#00703E]"
                    >
                      Sign In
                    </a>
                  </p>
                </div>
                <div>
                  {successMessage && (
                    <div className="font-xs text-green-500 mb-1">
                      {successMessage}
                    </div>
                  )}
                  {errorMessage && (
                    <div className="font-xs text-red-500 mb-4">
                      {errorMessage}
                    </div>
                  )}
                </div>
                <SocialLogin />
              </div>
            </>
          ) : (
            <>
              <h1 className="text-xl font-medium pb-3">Enter OTP</h1>
              <div className="flex flex-col gap-3 text-left text-base">
                <div className="flex flex-col gap-[10px]">
                  <label>OTP*</label>
                  <input
                    className="py-[10px] px-[11px] w-full rounded border border-[#BABABA] text-[#242222] focus:outline-none flex-grow"
                    type="text"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter the OTP sent to your email"
                  />
                </div>
                <div>
                  <button
                    className={`w-full py-2 rounded text-white ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#00703E] hover:bg-green-700"
                    }`}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Verifying..." : "Verify OTP"}
                  </button>
                </div>
                <div>
                  {successMessage && (
                    <div className="font-xs text-green-500 mb-1">
                      {successMessage}
                    </div>
                  )}
                  {errorMessage && (
                    <div className="font-xs text-red-500 mb-4">
                      {errorMessage}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default SignUpPopup;
