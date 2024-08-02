import FlightBanner from "@/components/flightsHome/banner/FlightBanner";
import FlightFeatures from "@/components/flightsHome/featuresSection/FlightFeatures";
import FlightRating from "@/components/flightsHome/FlightRating";
import SpecialOffers from "@/components/flightsHome/SpecialOffers";
import CheapFlights from "@/components/flightsHome/CheapFlights";

const FlightsHome = () => {
  return (
    <div>
      <FlightBanner />
      <div className="container max-w-[1200px] mx-auto">
        <FlightFeatures />
        <FlightRating />
        <SpecialOffers />
        <CheapFlights />
      </div>
    </div>
  );
};

export default FlightsHome;
