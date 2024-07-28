import React from "react";
import ExploreCard from "./ExploreCard";

const ExploreSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center mb-4">
        <h1 className="text-3xl p-1">The Places You Must Visit</h1>
        <div className="p-1">
          <p className="text-xl">Visit new places and chosen destinations of your interests with</p>
          <p className="text-xl">HAMS Fly.</p>
        </div>
      </div>
      <div>
        <ExploreCard />
      </div>
    </div>
  );
};

export default ExploreSection;
