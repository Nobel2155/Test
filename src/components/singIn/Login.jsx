"use client"
import React, { useState } from "react";
import SignInPopup from "./SignInPopup";
import SignUpPopup from "./SignUpPopup";

function Login() { 
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    
    return (
      <div>
        <button 
        className="bg-transparent border border-white text-white py-1 px-3 rounded hover:bg-white hover:text-green-800" 
        onClick={() => setIsSignInOpen(true)}>Sign In</button>
        {isSignInOpen && (
          <SignInPopup
            setIsSignInOpen={setIsSignInOpen}
            setIsSignUpOpen={setIsSignUpOpen}
          />
        )}
        {isSignUpOpen && (
          <SignUpPopup
            setIsSignUpOpen={setIsSignUpOpen}
            setIsSignInOpen={setIsSignInOpen}
          />
        )}
      </div>
    );
  }

export default Login;