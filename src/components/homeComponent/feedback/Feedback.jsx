import React from 'react'
import { FaStar } from "react-icons/fa";
import logoImg from  "@/assets/homepage/feedback.png";
import Image from 'next/image';


const Feedback = () => {
  return (
    <div className = "">
        <div className="bg-base-100 p-10 shadow-xl">
        <div className="border border-gray-100 rounded-sm">
          <div className="flex gap-4 items-center">
            {/* <Image className="w-16 h-16 rounded-full" src={img} alt=""/> */}
            <Image  className="w-16 h-16 rounded-full" src={logoImg} alt="Picture of the author"/>
            <div>
              <h1 className="text-xl">Rakib Hassan</h1>
              <div className="text-orange-400 flex gap-1 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div> 
          <p className="text-sm">
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Feedback
