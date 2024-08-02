import React from "react";

const CheapFlights = () => {
  return (
    <div>
      <h3 className="font-semibold text-[28px]">
        Cheap Flights to Popular Locations
      </h3>
      <h4 className="text-[22px] font-medium mt-5 mb-10">
        There's a better way, which we know.
      </h4>
      <div className="grid grid-cols-3 gap-10 text-center mb-10 *:hover:underline">
        <h3>Flight to New York (JFK)</h3>
        <h3>Flight to New York (JFK)</h3>
        <h3>Flight to New York (JFK)</h3>
        <h3>Flight to New York (JFK)</h3>
        <h3>Flight to New York (JFK)</h3>
        <h3>Flight to New York (JFK)</h3>
      </div>
    </div>
  );
};

export default CheapFlights;
