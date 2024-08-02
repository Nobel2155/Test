import FlightBanner from "@/components/flightsHome/banner/FlightBanner";
import FlightFeatures from "@/components/flightsHome/featuresSection/FlightFeatures";
import FlightRating from "@/components/flightsHome/FlightRating";

const FlightsHome = () => {
  return (
    <div>
      <FlightBanner />
      <div className="container max-w-[1200px] mx-auto">
        <FlightFeatures />
        <FlightRating />
      </div>
    </div>
  );
};

export default FlightsHome;
