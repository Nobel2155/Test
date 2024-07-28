import React from "react";
import Feedback from "@/components/homeComponent/feedback/Feedback";

const FeedbackSection = () => {
  const feedbacks = [
    {
      name: "Fahim",
      image:
        "https://i.ibb.co/58sVYf0/Whats-App-Image-2024-04-11-at-20-57-18-71e45dce.jpg",
      text: "The navigation bar needs better alignment for mobile devices.Increase the font size for better readability on smaller screens.",
    },
    
    {
      name: "Nobel",
      image: "https://i.ibb.co/cY6Y8qF/Screenshot-2024-07-06-164611.png",
      text: "Consider optimizing image loading to improve page speed.The form's error messages could be more user-friendly and specific.",
    },
     
    // {
    //   name: "Julfikar Dhoni",
    //   image: "https://ibb.co/H2S7MMs",
    //   text: "Add more spacing between sections to avoid a cluttered layout.The color contrast in the footer could be enhanced for accessibility.",
    // },
  ];
  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-4 mb-10">
        <div className="text-center mb-1 ">
          <h2 className="text-3xl p-1">Feedback</h2>
          <p className="text-xl">See what our client say&apos;s about us.</p>
        </div>
        <div className="pt-10">
          <Feedback feedbackData={feedbacks} />
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
