import React from "react";
import Image from "next/image";
import apple from "../../assets/loginPopup/apple.png";
import facebook from "../../assets/loginPopup/facebook.png";
import google from "../../assets/loginPopup/google.png";
import { auth } from "../../firebase/firebase.config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  // AppleAuthProvider,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
// const appleProvider = new AppleAuthProvider();

const handleGoogleLogin = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  const user = result.user;
  console.log(user);
};

const handleFacebookLogin = async () => {
  const result = await signInWithPopup(auth, facebookProvider);
  const user = result.user;
  console.log(user);
};

const handleAppleLogin = async () => {
  // const result = await signInWithPopup(auth, appleProvider);
  // const user = result.user;
  // console.log(user);
};

const SocialLogin = () => {
  return (
    <fieldset className="border-t mt-5">
      <legend className="text-center text-[#575757] text-base px-2">
        Or Continue with
      </legend>
      <div className="flex justify-evenly items-center pt-5">
        <div onClick={handleFacebookLogin} className="cursor-pointer">
          <Image src={facebook} alt="facebook" />
        </div>
        <div onClick={handleGoogleLogin} className="cursor-pointer">
          <Image src={google} alt="Google" />
        </div>
        <div onClick={handleAppleLogin} className="cursor-pointer">
          <Image src={apple} alt="Apple" />
        </div>
      </div>
    </fieldset>
  );
};
export default SocialLogin;
