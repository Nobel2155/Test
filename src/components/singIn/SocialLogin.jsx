import React from "react";
import Image from "next/image";
import apple from "../../assets/loginPopup/apple.png";
import facebook from "../../assets/loginPopup/facebook.png";
import google from "../../assets/loginPopup/google.png";

const SocialLogin = () => {
    return(
    <fieldset className="border-t mt-5">
        <legend className="text-center text-[#575757] text-base px-2">
            Or Continue with
        </legend>
        <div className="flex justify-evenly items-center pt-5">
            <div className="cursor-pointer">
            <Image src={facebook} alt="facebook"/>
            </div>
            <div className="cursor-pointer">
            <Image src={google} alt="Google" />
            </div>
            <div className="cursor-pointer">
            <Image src={apple}alt="Apple" />
            </div>
        </div>
    </fieldset>
    )
}
export default SocialLogin;