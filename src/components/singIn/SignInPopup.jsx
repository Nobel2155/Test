// "use client"
// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { useDispatch } from 'react-redux';
// import { login } from '@/redux/authSlice';
// import SocialLogin from "./SocialLogin";
// import SignUpPopup from "./SignUpPopup"

// function SignInPopup({ setIsSignInOpen , setIsSignUpOpen }) {
//     const [isSignUpOpen, setIsSignUpOpenState] = useState(false);
//     const toggleSignUpPopup = (e) => {
//         e.preventDefault();
//           setIsSignUpOpen(true);
//           setIsSignInOpen(false);
//       };
//     const [formData, setFormData] = useState({
//         emailOrPhone: "",
//         password: "",
//     });
//     const [successMessage, setSuccessMessage] = useState("");
//     const [errorMessage, setErrorMessage] = useState("");
//     const [validationErrors, setValidationErrors] = useState({});
//     const popupRef = useRef(null); // Ref for the popup container

//     const dispatch = useDispatch();

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };
//     const validateForm = () => {
//         let errors = {};
//         if (!formData.emailOrPhone) {
//           errors.emailOrPhone = "Email or Phone is required";
//         }
//         if (!formData.password) {
//           errors.password = "Password is required";
//         }
//         setValidationErrors(errors);
//         return Object.keys(errors).length === 0;
//       };

//     const handleFormSubmit = async (e) => {
//         e.preventDefault();
//         if (!validateForm()) {
//             return;
//         }

//         const intervalId = setInterval(() => {
//             // console.log('Interval triggered');
//         }, 10000);

//         try {
//             const response = await axios.post("https://hamsfly-server-v1-0-0.onrender.com/api/auth/login", {
//                 email: formData.emailOrPhone,
//                 password: formData.password,
//             });
//             setSuccessMessage("Login successful!");
//             setErrorMessage("");
//             setFormData({
//                 emailOrPhone: "",
//                 password: "",
//             });
//             console.log("Login successful:", response.data);

//             // Dispatch the login action with user email
//             dispatch(login({ user: response.data.user, email: response.data.email }));
//             // Optionally, redirect to another page or store the token
//             setIsSignInOpen(false);
//             // Clear the interval when the login is successful
//             clearInterval(intervalId);
//         } catch (error) {
//             setErrorMessage("Login error: " + (error.response?.data.message || error.message));
//             setSuccessMessage("");
//             console.error("Login error:", error.response?.data || error.message);
//             // Clear the interval in case of an error
//             clearInterval(intervalId);
//         }
//     };

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (popupRef.current && !popupRef.current.contains(event.target)) {
//                 // Clicked outside the popup, close it
//                 setIsSignInOpen(false); // Close the popup using prop from parent
//                 setFormData({
//                     emailOrPhone: "",
//                     password: "",
//                 });
//                 setSuccessMessage("");
//                 setErrorMessage("");
//                 setValidationErrors({});
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div ref={popupRef} className="bg-white rounded shadow-lg w-[420px] flex lg:flex-row md:flex-col flex-col items-start justify-around">
//         <form onSubmit={handleFormSubmit} className="w-full text-center text-[#282828] shadow-lg rounded-2xl p-5">
//           <h1 className="text-xl font-medium pb-3">Login Your Account</h1>
//           <div className="flex flex-col gap-3 text-left text-base">
//             <div className="flex flex-col gap-[10px]">
//               <label>Email or Phone Number*</label>
//               <input
//                 className="py-[10px] px-[11px] w-full rounded border border-[#BABABA] text-[#242222] focus:outline-none flex-grow"
//                 type="text"
//                 name="emailOrPhone"
//                 value={formData.emailOrPhone}
//                 onChange={handleInputChange}
//                 placeholder="Write your email here..."
//               />
//               {validationErrors.emailOrPhone && (
//                 <span className="text-red-500 text-xs">{validationErrors.emailOrPhone}</span>
//               )}
//             </div>
//             <div className="flex flex-col gap-[10px]">
//               <label>Password*</label>
//               <input
//                 className="py-[10px] px-[11px] w-full rounded border border-[#BABABA] text-[#242222] focus:outline-none flex-grow"
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 placeholder="password"
//               />
//               {validationErrors.password && (
//                 <span className="text-red-500 text-xs">{validationErrors.password}</span>
//               )}
//             </div>
//             <div className="flex gap-1 items-center text-base w-[260px]">
//               <div>
//                 <input
//                   className="w-3 h-3 mr-2 bg-stone-500"
//                   type="checkbox"
//                   name="agreeTerms"
//                 />
//                 <span className="text-sm">I agree to the Terms & Condition</span>
//               </div>
//             </div>
//             <div>
//               <button
//                 className="w-full bg-[#00703E] py-2 rounded text-white hover:bg-green-700"
//                 type="submit"
//               >
//                 Login
//               </button>
//             </div>
//             <div className="mt-2 text-center">
//               <p className="text-sm">Don't have an account?  
//                 <a 
//                   onClick={toggleSignUpPopup}
//                   href="#" className="text-[#00703E]"> Create Account
//                 </a>
//               </p>
//             </div>
//             <div>
//               {successMessage && (
//                 <div className="font-xs text-green-500 mb-1">{successMessage}</div>
//               )}
//               {errorMessage && (
//                 <div className="font-xs text-red-500 mb-1">{errorMessage}</div>
//               )}
//               {isSignUpOpen && <SignUpPopup setIsSignUpOpen={setIsSignUpOpenState} setIsSignInOpen={setIsSignInOpen} />}
//             </div>
//             <SocialLogin />
//           </div>
//         </form>
//       </div>
//     </div>
//     );
// }
// export default SignInPopup;
 




"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "@/redux/authSlice";
import SocialLogin from "./SocialLogin";
import SignUpPopup from "./SignUpPopup";

function SignInPopup({ setIsSignInOpen, setIsSignUpOpen }) {
  const [isSignUpOpen, setIsSignUpOpenState] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleSignUpPopup = (e) => {
    e.preventDefault();
    setIsSignUpOpen(true);
    setIsSignInOpen(false);
  };
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const popupRef = useRef(null); // Ref for the popup container

  const dispatch = useDispatch();

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
    setIsDisabled(true);
    if (!validateForm()) {
      setIsDisabled(false)
      return;
    }

    const intervalId = setInterval(() => {
      // console.log('Interval triggered');
    }, 10000);

    try {
      const response = await axios.post(
        "https://hamsfly-server-v1-0-0.onrender.com/api/auth/login",
        {
          email: formData.emailOrPhone,
          password: formData.password,
        }
      );
      setSuccessMessage("Login successful!");
      setErrorMessage("");
      setFormData({
        emailOrPhone: "",
        password: "",
      });
      console.log("Login successful:", response.data);

      // Dispatch the login action with user email
      dispatch(login({ user: response.data.user, email: response.data.email }));
      // Optionally, redirect to another page or store the token
      setIsSignInOpen(false);
      // Clear the interval when the login is successful
      clearInterval(intervalId);
    } catch (error) {
      setErrorMessage(
        "Login error: " + (error.response?.data.message || error.message)
      );
      setSuccessMessage("");
      console.error("Login error:", error.response?.data || error.message);
      // Clear the interval in case of an error
      clearInterval(intervalId);
    }
    setIsDisabled(false)
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        // Clicked outside the popup, close it
        setIsSignInOpen(false); // Close the popup using prop from parent
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
  }, []);

  const handleClick = () => {
    setIsDisabled(true);
    // setTimeout(() => {
    //   setIsDisabled(false);
    // }, 2000);
  };

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
            <div className="flex gap-1 items-center text-base w-[260px]">
              {/* <div>
                <input
                  className="w-3 h-3 mr-2 bg-stone-500"
                  type="checkbox"
                  name="agreeTerms"
                />
                <span className="text-sm">I agree to the Terms & Condition</span>
              </div> */}
            </div>
            <div>
              <button
                className="w-full bg-[#00703E] py-2 rounded text-white hover:bg-green-700"
                type="submit"
                disabled={isDisabled}
              >
                {isDisabled ? "Loading . . ." : "Login"}
              </button>
            </div>
            <div className="mt-2 text-center">
              <p className="text-sm">
                Don't have an account?
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
            <SocialLogin />
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignInPopup;
