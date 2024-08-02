"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/redux/authSlice";
import SocialLogin from "./SocialLogin";
import SignUpPopup from "./SignUpPopup";
import { FaSpinner } from "react-icons/fa";
import globalAxiosURL from "@/hooks/globalAxiosURL";

function SignInPopup({ setIsSignInOpen, setIsSignUpOpen }) {
  const [isSignUpOpen, setIsSignUpOpenState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const popupRef = useRef(null);
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const axiosURL = globalAxiosURL();

  const toggleSignUpPopup = (e) => {
    e.preventDefault();
    setIsSignUpOpen(true);
    setIsSignInOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.emailOrPhone) {
      errors.emailOrPhone = "Email or Phone is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await axiosURL.post("/auth/login", {
        email: formData.emailOrPhone,
        password: formData.password,
      });
      setSuccessMessage("Login successful!");
      setErrorMessage("");
      setFormData({
        emailOrPhone: "",
        password: "",
      });
      console.log("Login successful:", response.data);

      dispatch(
        login({
          user: response.data.user,
          email: response.data.email,
          token: response.data.token,
        })
      );

      setIsSignInOpen(false);
    } catch (error) {
      setErrorMessage(
        "Login error: " + (error.response?.data.message || error.message)
      );
      setSuccessMessage("");
      console.error("Login error:", error.response?.data || error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsSignInOpen(false);
        setFormData({
          emailOrPhone: "",
          password: "",
        });
        setSuccessMessage("");
        setErrorMessage("");
        setValidationErrors({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsSignInOpen]);

  if (isLoggedIn) {
    return null; // Do not render the popup if the user is logged in
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={popupRef}
        className="bg-white rounded shadow-lg w-[420px] flex lg:flex-row md:flex-col flex-col items-start justify-around"
      >
        <form
          onSubmit={handleFormSubmit}
          className="w-full text-center text-[#282828] shadow-lg rounded-2xl p-5"
        >
          <h1 className="text-xl font-medium pb-3">Login Your Account</h1>
          <div className="flex flex-col gap-3 text-left text-base">
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
              {validationErrors.emailOrPhone && (
                <span className="text-red-500 text-xs">
                  {validationErrors.emailOrPhone}
                </span>
              )}
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
              {validationErrors.password && (
                <span className="text-red-500 text-xs">
                  {validationErrors.password}
                </span>
              )}
            </div>
            <div className="flex gap-1 items-center text-base w-[260px]"></div>
            <div>
              <button
                className={`w-full bg-[#00703E] duration-300 disabled:cursor-not-allowed py-2 rounded text-center text-white ${
                  isLoading ? "hover:bg-[#00703E]" : "hover:bg-green-700"
                } flex items-center justify-center`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <FaSpinner className="animate-spin" size={20} />
                ) : (
                  "Login"
                )}
              </button>
            </div>
            <div className="mt-2 text-center">
              <p className="text-sm">
                Don&apos;t have an account?
                <a
                  onClick={toggleSignUpPopup}
                  href="#"
                  className="text-[#00703E]"
                >
                  {" "}
                  Create Account
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
                <div className="font-xs text-red-500 mb-1">{errorMessage}</div>
              )}
              {isSignUpOpen && (
                <SignUpPopup
                  setIsSignUpOpen={setIsSignUpOpenState}
                  setIsSignInOpen={setIsSignInOpen}
                />
              )}
            </div>
            <SocialLogin setIsLoading={setIsLoading} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInPopup;
