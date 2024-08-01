import bannerBG from "../../../assets/flightsHome/bannerBG.png";

const FlightBanner = () => {
  const bannerStyle = {
    backgroundImage: `url('/banner.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="min-h-[620px] relative pt-14 text-center"
      style={bannerStyle}
    >
      <div className="absolute inset-0 w-full h-full bg-black opacity-50 pt-20"></div>
     <div>
      <h3>Finds a cheapest  flight  with right price</h3>
     </div>
    </div>
  );
};

export default FlightBanner;
