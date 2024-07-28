 
// "use client"
// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import SocialLogin from "./SocialLogin";

// function SignUpPopup({ setIsSignUpOpen, setIsSignInOpen }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     emailOrPhone: "",
//     password: "",
//     agreeTerms: false,
//   });
//   const [successMessage, setSuccessMessage] = useState(""); // Add state for success message
//   const [errorMessage, setErrorMessage] = useState(""); // Add state for error message
//   const popupRef = useRef(null); // Ref for the popup container
//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("https://hamsfly-server-v1-0-0.onrender.com/api/auth/signup", {
//         name: formData.name,
//         email: formData.emailOrPhone, 
//         password: formData.password,
//       });
//       setSuccessMessage("Signup successful! OTP sent to your email.");  
//       setErrorMessage(""); 
//       setFormData({ // Reset form data
//         name: "",
//         emailOrPhone: "",
//         password: "",
//         agreeTerms: false,
//       });
//       console.log("Signup successful:", response.data);
//       console.log("Preview URL:", response.data.previewUrl);
//       // Optionally, redirect to another page or show success message
//     } catch (error) {
//       setErrorMessage((error.response?.data.message)); 
//       setSuccessMessage(""); 
//       console.error("Signup error:", error.response?.data || error.message);
       
//     }
//   };

//   // const [result, setResult] = useState("")
//   // const [loading, setLoading] = useState("")
//   // const sendEmail = () => {
//   //   setLoading(true);
//   //   // Send email request to the server
//   //   fetch("/api/emails", {
//   //     method: "POST"
//   //   })
//   //   .then(response => response.json())
//   //   .then(data => setResult(data))
//   //   .catch(error => setResult(error))
//   //   .finally(() => setLoading(false))
//   // }

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (popupRef.current && !popupRef.current.contains(event.target)) {
//         // Clicked outside the popup, close it
//         setIsSignUpOpen(false);
//         setFormData({
//           emailOrPhone: "",
//           password: "",
//         });
//         setSuccessMessage("");
//         setErrorMessage("");
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       {/* <div>
//         <div>{JSON.stringify(result)}</div>
//         {loading && <div className="my-4">Loading...</div>}
//       </div> */}
//       <div
//         ref={popupRef}
//         className="bg-white rounded shadow-lg w-[480px] flex lg:flex-row md:flex-col flex-col items-start justify-around"
//       >
//         {/* <div className="w-1/2">
//           <Image className="!w-[600px] pl-8 pt-5" src={traveler} alt="" />
//         </div> */}
//         <form
//           onSubmit={handleFormSubmit}
//           className="w-full text-center text-[#282828] shadow-lg rounded-2xl p-5"
//         >
//           <h1 className="text-xl font-medium pb-3">Create Your Account</h1>
//           <div className="flex flex-col gap-3 text-left text-base">
//             <div className="flex flex-col gap-[10px]">
//               <label>Name*</label>
//               <input
//                 className="py-[10px] px-[11px] w-full rounded border border-[#BABABA] text-[#242222] focus:outline-none flex-grow"
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 placeholder="Ex: John"
//               />
//             </div>
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
//             </div>
//             <div className="flex gap-1 items-center text-base w-[260px]">
//               <div>
//                 <input
//                   className="w-3 h-3 mr-2 bg-stone-500 "
//                   type="checkbox"
//                   name="agreeTerms"
//                   checked={formData.agreeTerms}
//                   onChange={handleInputChange}
//                 />
//                 <span className="text-sm">I agree to the Terms & Condition</span>
//               </div>
//             </div>
//             <div>
//               <button
//                 className="w-full bg-[#00703E] py-2 rounded text-white hover:bg-green-700"
//                 type="submit"
//               >
//                 Register
//               </button>
//             </div>
//             <div className="text-center mt-2">
//               <p className="text-sm">Already have an account?   
//                 <a
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setIsSignInOpen(true);
//                     setIsSignUpOpen(false); // Close the sign-up popup
//                   }}
//                   href="#"
//                   className="text-[#00703E]"
//                 >
//                     Sign In
//                 </a>
//               </p>
//             </div>
//             <div className="">
//               {successMessage && (
//                 <div className="font-xs text-green-500 mb-1">{successMessage}</div>
//               )}
//               {errorMessage && (
//                 <div className="font-xs text-red-500 mb-4">{errorMessage}</div>
//               )}
//             </div>
//             <SocialLogin />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUpPopup;






"use client"
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import SocialLogin from "./SocialLogin";

function SignUpPopup({ setIsSignUpOpen, setIsSignInOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
    agreeTerms: false,
  });
  const [successMessage, setSuccessMessage] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 
  const [showOtpForm, setShowOtpForm] = useState(false); // State to show OTP form
  const [otp, setOtp] = useState(""); // State for OTP
  const [email, setEmail] = useState(""); // State for email
  const popupRef = useRef(null); 

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", {  // if not working https://hamsfly-server-v1-0-0.onrender.com
        name: formData.name,
        email: formData.emailOrPhone, 
        password: formData.password,
      });
      setSuccessMessage("OTP sent to your email.");  
      setErrorMessage(""); 
      setEmail(formData.emailOrPhone); // Set email for OTP verification
      setShowOtpForm(true); // Show OTP form
      setFormData({
        name: "",
        emailOrPhone: "",
        password: "",
        agreeTerms: false,
      });
    } catch (error) {
      setErrorMessage(error.response?.data.message); 
      setSuccessMessage(""); 
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/verify-otp", {
        email: email,
        otp: otp,
      });
      setSuccessMessage("OTP verified successfully! Registration complete.");
      setErrorMessage(""); 
      setShowOtpForm(false); // Hide OTP form
    } catch (error) {
      setErrorMessage(error.response?.data.message); 
      setSuccessMessage(""); 
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
      <div ref={popupRef} className="bg-white rounded shadow-lg w-[480px] flex lg:flex-row md:flex-col flex-col items-start justify-around"
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
                    <span className="text-sm">I agree to the Terms & Condition</span>
                  </div>
                </div>
                <div>
                  <button
                    className="w-full bg-[#00703E] py-2 rounded text-white hover:bg-green-700"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
                <div className="text-center mt-2">
                  <p className="text-sm">Already have an account?   
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
                    <div className="font-xs text-green-500 mb-1">{successMessage}</div>
                  )}
                  {errorMessage && (
                    <div className="font-xs text-red-500 mb-4">{errorMessage}</div>
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
                    className="w-full bg-[#00703E] py-2 rounded text-white hover:bg-green-700"
                    type="submit"
                  >
                    Verify OTP
                  </button>
                </div>
                <div>
                  {successMessage && (
                    <div className="font-xs text-green-500 mb-1">{successMessage}</div>
                  )}
                  {errorMessage && (
                    <div className="font-xs text-red-500 mb-4">{errorMessage}</div>
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