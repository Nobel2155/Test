import React from "react";
import vestige from "../../../assets/flightsHome/Vestige.png";
import network from "../../../assets/flightsHome/Networking Manager.png";
import moneyTransfer from "../../../assets/flightsHome/Online Money Transfer.png";
import Image from "next/image";

const FlightFeatures = () => {
  const features = [
    {
      image: vestige,
      title: "Get the greatest deals.",
      description:
        "Compare airfares from hundreds of airlines andonline travel agencies in one location.",
    },
    {
      image: network,
      title: "Make your own timetable.",
      description:
        "You may filter based on pricing, desired price,desired airlines, and more.",
    },
    {
      image: moneyTransfer,
      title: "Look without fear.",
      description:
        "We have no hidden fees or charges on flight prices, thus using us is totally free.",
    },
  ];

  return (
    <div className="flex my-16 gap-4">
      {features.map((feature) => (
        <div
          key={feature.image}
          className="flex flex-col justify-center items-center text-center"
        >
          <Image src={feature.image} alt={feature.title} />
          <h3 className="font-semibold mb-3 mt-2 text-lg">{feature.title}</h3>
          <p className="w-[95%] mx-auto">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FlightFeatures;
