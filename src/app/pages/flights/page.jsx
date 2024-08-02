import FlightBanner from "@/components/flightsHome/banner/FlightBanner";
import FlightFeatures from "@/components/flightsHome/featuresSection/FlightFeatures";
import FlightRating from "@/components/flightsHome/FlightRating";
import SpecialOffers from "@/components/flightsHome/SpecialOffers";

const FlightsHome = () => {
  return (
    <div>
      <FlightBanner />
      <div className="container max-w-[1200px] mx-auto">
        <FlightFeatures />
        <FlightRating />
        <SpecialOffers />
      </div>
    </div>
  );
};

export default FlightsHome;
