import TravelarCounter from "@/components/homeComponent/banner/TravelarCounter";
import { IoIosSearch } from "react-icons/io";
import { LiaPlaneDepartureSolid } from "react-icons/lia";
import usBangla from "../../../assets/flightsHome/usBangla.png";
import bimanbd from "../../../assets/flightsHome/biman-bangla.png";
import emirates from "../../../assets/flightsHome/emirates.png";
import qatarAirways from "../../../assets/flightsHome/qatar-airways.png";
import singaporeAir from "../../../assets/flightsHome/singapore-airlines.png";
import Image from "next/image";

const FlightBanner = () => {
  const bannerStyle = {
    backgroundImage: `url('/banner.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      style={{
        backgroundImage: `url('/banner.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "620px",
        backgroundRepeat: "no-repeat",
        position: "relative",
        width: "full",
      }}
    >
      <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center">
        <div className="text-white text-center mt-5 space-y-4">
          <h1 className="lg:text-4xl md:text-2xl text-lg font-semibold lg:block md:block hidden">
            Finds a cheapest flight with right price
          </h1>
          <p className="lg:text-lg md:text-sm lg:block md:block hidden font-medium">
            Best Flight deal to around the globe
          </p>
          <div className="w-auto bg-black/50 mx-auto py-6 px-40 rounded">
            <div className=" ">
              <div>
                <div>
                  <div className="flex mb-2 gap-7 justify-center ">
                    <div className="flex items-center gap-1 relative cursor-pointer">
                      <input
                        // onClick={oneWay}
                        value="oneway"
                        defaultChecked
                        type="radio"
                        name="transport"
                        id=""
                      />
                      <p className="text-sm text-white font-medium ">One Way</p>
                    </div>

                    <div className="flex items-center  gap-1 relative cursor-pointer">
                      <input
                        // onClick={roundWay}
                        value="Round way"
                        type="radio"
                        name="transport"
                        id=""
                      />
                      <p className="text-sm text-white font-medium text-center">
                        Round Way
                      </p>
                    </div>

                    <div className="flex items-center gap-1 relative cursor-pointer">
                      <input
                        // onClick={multi}
                        value="Multi city"
                        type="radio"
                        name="transport"
                        id=""
                      />
                      <p className="text-sm text-white font-medium ">
                        Multi City
                      </p>
                    </div>
                  </div>
                  <div>
                    <TravelarCounter />
                  </div>
                </div>
                <div className="flex gap-3 pt-2 text-black">
                  <div>
                    <input
                      type="text"
                      name="departure"
                      placeholder="Departure"
                      className="p-3 rounded-sm outline-none focus:ring-blue-500 focus:ring-2"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="departure"
                      placeholder="Departure"
                      className="p-3 rounded-sm outline-none focus:ring-blue-500 focus:ring-2"
                    />
                  </div>
                  <div>
                    <input
                      type="select"
                      name="departure"
                      placeholder="Departure"
                      className="p-3 rounded-sm outline-none focus:ring-blue-500 focus:ring-2"
                    />
                  </div>
                  <div>
                    <button className="p-3 rounded-sm bg-[#00703e] px-6 text-white">
                      Search Flight
                    </button>
                  </div>
                </div>

                {/* {oneway && <Onway />}
                  {roundway && <RoundWay />}
                  {multicity && <Multicity />} */}
              </div>
              {/* <div className="text-left flex items-center gap-2">
                <input type="checkbox" name="" id="" />{" "}
                <span>Check hotels with HAMS</span>
              </div> */}
              <div className="flex mt-5 ml-2 gap-7">
                <div className="flex items-center gap-1 relative cursor-pointer">
                  <input
                    // onClick={oneWay}
                    value="nearby airports"
                    defaultChecked
                    type="radio"
                    name="transport"
                    id=""
                  />
                  <p className="text-sm text-white font-medium ">
                    Nearby Airports
                  </p>
                </div>

                <div className="flex items-center gap-1 relative cursor-pointer">
                  <input
                    // onClick={roundWay}
                    value="Prefer nonstop"
                    type="radio"
                    name="transport"
                    id=""
                  />
                  <p className="text-sm text-white font-medium text-center">
                    Prefer nonstop
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="lg:text-lg md:text-sm lg:block md:block hidden font-medium max-w-[500px] mx-auto">
            Discover with HAMS more than thousand of partners to bring you
            better travel deals.
          </p>

          <div className="flex items-center justify-center gap-8 w-full">
            <Image alt="us-bangla" src={usBangla} />
            <Image alt="us-bangla" src={emirates} />
            <Image alt="us-bangla" src={singaporeAir} />
            <Image alt="us-bangla" src={qatarAirways} />
            <Image alt="us-bangla" src={bimanbd} />
          </div>
        </div>
      </div>
      {/* <LoginMsg /> */}
    </div>
  );
};

export default FlightBanner;
