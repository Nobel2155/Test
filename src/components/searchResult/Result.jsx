"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./style.css";
import Image from "next/image";
import logo from "./../../assets/searchResult/logo.png";
import airportMap from "@/./dataSet/cityNameMap";
import { IoMdTime } from "react-icons/io";
import { MdClose } from "react-icons/md";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useDispatch } from 'react-redux';
import { setItineraryData } from '../../redux/authSlice';

const getLocalStorageData = () => {
  return {
    departureDates: JSON.parse(localStorage.getItem("departureDates")) || [],
    departureAirports:
      JSON.parse(localStorage.getItem("departureAirports")) || [],
    arrivalAirports: JSON.parse(localStorage.getItem("arrivalAirports")) || [],
    adults: parseInt(localStorage.getItem("adults")) || 1,
    kids: parseInt(localStorage.getItem("kids")) || 0,
    children: parseInt(localStorage.getItem("children")) || 0,
    infants: parseInt(localStorage.getItem("infants")) || 0,
  };
};

const buildOriginDestinationInfo = (
  departureDates,
  departureAirports,
  arrivalAirports
) => {
  return departureDates.map((date, index) => ({
    RPH: (index + 1).toString(),
    DepartureDateTime: `${date}T00:00:00`,
    OriginLocation: { LocationCode: departureAirports[index] },
    DestinationLocation: { LocationCode: arrivalAirports[index] },
  }));
};

const buildPassengerTypes = (adults, kids, children, infants) => {
  const passengerTypes = [{ Code: "ADT", Quantity: adults }];

  if (kids > 0) passengerTypes.push({ Code: "C06", Quantity: kids });
  if (children > 0) passengerTypes.push({ Code: "C03", Quantity: children });
  if (infants > 0) passengerTypes.push({ Code: "INF", Quantity: infants });

  return passengerTypes;
};

// const fetchItineraryData = async (originDestinationInfo, passengerTypes) => {
//   const requestOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Conversation-ID": "2021.01.DevStudio",
//       Authorization:
//         "Bearer T1RLAQLS66ol77q6VvK2n7VCZKuYWRgygxYcT57LoehxmovHnxCaYO209HBgIWaRbUjytKS5AADQQhDH9qvAV9C7l27OW7Yf0Zug8MeLsopm7ed3STEz303c9GK+Tp4dGeINguoHlQLLqnrWFUaR9eeuD7dCuXkIgUjCfXVnoU9ZRHDpO8pL+1VcOuNIjSqtT1K+n5M58L1JDi3XEUSMi8HVOfNJ75xQZ+/499Y0mpEvJ8kswDwJKvgy1MB5h6BDYSXyD9d+gwnZj+kV1hKYRIL0thfLcuUVuWu5q36ZzBJ6JA+Fr/JbJIStyQ2LZf9laesW7ggZzF2J9NkdMAv6Oo8rB+DvFIG7Fw**",
//       Cookie:
//         "incap_ses_1787_2768614=0SjoZhqWLgdPMbDpIbPMGPJAomYAAAAApLohNoE3k6viHlK62M2bnA==; nlbi_2768614=ZKBcKV/r9XrbAKhrRh9LCAAAAACFsRG/G1bTU1Ur3t/q4bKx; visid_incap_2768614=SPMPSIHqQUSMgkgbdUhsdjadOGYAAAAAQkIPAAAAAAA0To3MKwPR8OocZaNNanzT",
//     },
//     body: JSON.stringify({
//       OTA_AirLowFareSearchRQ: {
//         Version: "5",
//         POS: {
//           Source: [
//             {
//               PseudoCityCode: "7C18",
//               RequestorID: {
//                 Type: "1",
//                 ID: "1",
//                 CompanyName: { Code: "TN" },
//               },
//             },
//           ],
//         },
//         OriginDestinationInformation: originDestinationInfo,
//         TravelPreferences: {
//           TPA_Extensions: {
//             DataSources: {
//               NDC: "Disable",
//               ATPCO: "Enable",
//               LCC: "Disable",
//             },
//             PreferNDCSourceOnTie: { Value: false },
//           },
//         },
//         TravelerInfoSummary: {
//           AirTravelerAvail: [{ PassengerTypeQuantity: passengerTypes }],
//         },
//         TPA_Extensions: {
//           IntelliSellTransaction: { RequestType: { Name: "200ITINS" } },
//         },
//       },
//     }),
//     redirect: "follow",
//   };

//   const response = await fetch(
//     "https://api.cert.platform.sabre.com/v5/offers/shop",
//     requestOptions
//   );
//   if (!response.ok) {
//     throw new Error("Failed to fetch itinerary data");
//   }
//   const data = response.json();
//   dispatch(setItineraryData(data));
//   // return await  data;
// };

const processItinerary = (data) => {
  return data.groupedItineraryResponse.itineraryGroups.flatMap((group) => {
    return group.itineraries.map((itinerary) => {
      const legs = itinerary.legs.map((leg, index) => {
        const legDesc = data.groupedItineraryResponse.legDescs.find(
          (ld) => ld.id === leg.ref
        );
        const schedules = legDesc.schedules.map((schedule) => {
          return data.groupedItineraryResponse.scheduleDescs.find(
            (sd) => sd.id === schedule.ref
          );
        });
        // Find the corresponding departure date
        const legDescription = group.groupDescription.legDescriptions[index];
        const departureDate = legDescription.departureDate;
        const departureLocation = legDescription.departureLocation;
        const arrivalLocation = legDescription.arrivalLocation;

        const transits = [];
        const sharedFlights = [];
        for (let i = 0; i < schedules.length - 1; i++) {
          const currentSchedule = schedules[i];
          const nextSchedule = schedules[i + 1];
          if (
            currentSchedule.arrival.airport === nextSchedule.departure.airport
          ) {
            const arrivalTime = new Date(
              `${departureDate}T${currentSchedule.arrival.time}`
            );
            const departureTime = new Date(
              `${departureDate}T${nextSchedule.departure.time}`
            );
            const layoverTime = Math.abs(departureTime - arrivalTime) / 60000;
            transits.push({
              airport: currentSchedule.arrival.airport,
              arrivalTime: currentSchedule.arrival.time,
              departureTime: nextSchedule.departure.time,
              elapsedTime: nextSchedule.elapsedTime,
              layoverTime,
            });
          } else {
            sharedFlights.push(i + 1);
          }
        }

        return {
          ...legDesc,
          schedules,
          rph: index + 1,
          transits,
          sharedFlights,
          departureDate,
          departureLocation,
          arrivalLocation,
        };
      });

      const totalPassengers = itinerary.pricingInformation.reduce(
        (sum, pricingInfo) => {
          return (
            sum +
            pricingInfo.fare.passengerInfoList.reduce(
              (passengerSum, passengerInfo) => {
                return (
                  passengerSum + passengerInfo.passengerInfo.passengerNumber
                );
              },
              0
            )
          );
        },
        0
      );

      return { ...itinerary, legs, totalPassengers };
    });
  });
};
const Result = () => {
  const dispatch = useDispatch();
  const [itineraries, setItineraries] = useState([]);
  const [airlines, setAirlines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredCardIndices, setHoveredCardIndices] = useState({});
  const router = useRouter();

  const fetchItineraryData = async (originDestinationInfo, passengerTypes) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Conversation-ID": "2021.01.DevStudio",
        Authorization:
          "Bearer T1RLAQLS66ol77q6VvK2n7VCZKuYWRgygxYcT57LoehxmovHnxCaYO209HBgIWaRbUjytKS5AADQQhDH9qvAV9C7l27OW7Yf0Zug8MeLsopm7ed3STEz303c9GK+Tp4dGeINguoHlQLLqnrWFUaR9eeuD7dCuXkIgUjCfXVnoU9ZRHDpO8pL+1VcOuNIjSqtT1K+n5M58L1JDi3XEUSMi8HVOfNJ75xQZ+/499Y0mpEvJ8kswDwJKvgy1MB5h6BDYSXyD9d+gwnZj+kV1hKYRIL0thfLcuUVuWu5q36ZzBJ6JA+Fr/JbJIStyQ2LZf9laesW7ggZzF2J9NkdMAv6Oo8rB+DvFIG7Fw**",
        Cookie:
          "incap_ses_1787_2768614=0SjoZhqWLgdPMbDpIbPMGPJAomYAAAAApLohNoE3k6viHlK62M2bnA==; nlbi_2768614=ZKBcKV/r9XrbAKhrRh9LCAAAAACFsRG/G1bTU1Ur3t/q4bKx; visid_incap_2768614=SPMPSIHqQUSMgkgbdUhsdjadOGYAAAAAQkIPAAAAAAA0To3MKwPR8OocZaNNanzT",
      },
      body: JSON.stringify({
        OTA_AirLowFareSearchRQ: {
          Version: "5",
          POS: {
            Source: [
              {
                PseudoCityCode: "7C18",
                RequestorID: {
                  Type: "1",
                  ID: "1",
                  CompanyName: { Code: "TN" },
                },
              },
            ],
          },
          OriginDestinationInformation: originDestinationInfo,
          TravelPreferences: {
            TPA_Extensions: {
              DataSources: {
                NDC: "Disable",
                ATPCO: "Enable",
                LCC: "Disable",
              },
              PreferNDCSourceOnTie: { Value: false },
            },
          },
          TravelerInfoSummary: {
            AirTravelerAvail: [{ PassengerTypeQuantity: passengerTypes }],
          },
          TPA_Extensions: {
            IntelliSellTransaction: { RequestType: { Name: "200ITINS" } },
          },
        },
      }),
      redirect: "follow",
    };
  
    const response = await fetch(
      "https://api.cert.platform.sabre.com/v5/offers/shop",
      requestOptions
    );
    if (!response.ok) {
      throw new Error("Failed to fetch itinerary data");
    }
    const data = response.json();
    dispatch(setItineraryData(data));
    return await  data;
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const {
          departureDates,
          departureAirports,
          arrivalAirports,
          adults,
          kids,
          children,
          infants,
        } = getLocalStorageData();
        const originDestinationInfo = buildOriginDestinationInfo(
          departureDates,
          departureAirports,
          arrivalAirports
        );
        const passengerTypes = buildPassengerTypes(
          adults,
          kids,
          children,
          infants
        );
        const data = await fetchItineraryData(
          originDestinationInfo,
          passengerTypes
        );
        const processedData = processItinerary(data);
        setItineraries(processedData);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
        router.push("/"); // Redirect to the root page on error
      } 
      finally {
        setIsLoading(false);
      }
    };

    const fetchAirlines = async () => {
      // setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://rest-api-airport-details-3e9021974608.herokuapp.com/api/carrierLogo" 
        );
        if (!response.ok) {
          throw new Error("Failed to fetch airline data");
        }
        const data = await response.json();
        setAirlines(
          data.carrierLogo.map(({ code, logo, name }) => ({ code, logo, name }))
        );
      } catch (error) {
        setError(error);
        console.error("Error fetching airlines:", error);
      } 
      // finally {
      //   setIsLoading(false);
      // }
    };

    fetchData();
    fetchAirlines();
  }, []);

  const firstDeparture = (leg) => [leg.schedules[0].departure.airport];
  const lastArrival = (leg) => [
    leg.schedules[leg.schedules.length - 1].arrival.airport,
  ];
  const getAirlineLogo = (code) =>
    airlines.find((airline) => airline.code === code)?.logo || "";
  const getAirlineName = (code) =>
    airlines.find((airline) => airline.code === code)?.name || "";
  const calculateTotalTransits = (leg) => leg.transits.length;

  const handleMouseEnter = (itineraryIndex, legIndex) => {
    setHoveredCardIndices((prev) => ({
      ...prev,
      [`${itineraryIndex}-${legIndex}`]: true,
    }));
  };

  const handleMouseLeave = (itineraryIndex, legIndex) => {
    setHoveredCardIndices((prev) => ({
      ...prev,
      [`${itineraryIndex}-${legIndex}`]: false,
    }));
  };

  const [showPopup, setShowPopup] = useState(false);
  const [selectedItinerary, setSelectedItinerary] = useState(null);

  const handleBookNowClick = (itinerary) => {
    setSelectedItinerary(itinerary); // Set the selected itinerary
    setShowPopup(true); // Show the popup
  };

  const popupRef = useRef();

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };



  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  // if (!showPopup || !selectedItinerary) {
  //   return null;
  // }

  const getDayOfWeek = (dateString) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);

    return daysOfWeek[date.getUTCDay()];
  };
  const calculateTotalDuration = (leg) => {
    let totalFlightDuration = 0;
    let totalLayoverDuration = 0;

    // Calculate total flight duration
    leg.schedules.forEach((schedule) => {
      totalFlightDuration += schedule.elapsedTime;
    });

    // Calculate total layover duration
    leg.transits.forEach((transit) => {
      totalLayoverDuration += transit.layoverTime;
    });

    const totalDuration = totalFlightDuration + totalLayoverDuration;
    // Convert total duration to hours and minutes
    const hours = Math.floor(totalDuration / 60);
    const minutes = totalDuration % 60;

    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {error && <div className="text-red-500">Error: {error.message}</div>}
      {isLoading && 
        <div>
          <Skeleton height={200} />
            <div className="gap-5 pt-5">
              <Skeleton height={400} width={1100} />
              <Skeleton height={400} width="100%" />
            </div>
        </div>}
      {showPopup && selectedItinerary && (
        <div className="fixed top-0 left-0 z-10 flex justify-center items-center w-full bg-[#00000080] h-screen overflow-y-auto pt-56">
          {/* popUp Start............... */}
          {/* popUp Start............... */}

          <div
            ref={popupRef}
            className="bg-white shadow-xl text-black rounded-lg  max-w-2xl lg:w-[700px] mx-auto my-20 relative"
          >
            <button onClick={handleClosePopup} className="absolute right-8 top-8 cursor-pointer text-xl">
              <MdClose />
            </button>
            {selectedItinerary.legs.map((leg, legIndex) => (
              <div
                className="py-6 px-16 border-b border-gray-200"
                key={legIndex}
              >
                <div className="flex flex-col gap-1 border-b border-gray-200 pb-3">
                  <p className="text-xl font-bold text-center text-green-800">
                    {leg.departureLocation} to {leg.arrivalLocation}
                  </p>
                  <div className="flex gap-1 justify-center items-center text-base text-gray-800">
                    <p className="">{getDayOfWeek(leg.departureDate)}</p> |
                    <p className="">{leg.departureDate}</p>
                  </div>
                  {/* <div className="flex gap-2 justify-around items-center">
                    <p className="text-base text-gray-600">
                      Total Duration: {calculateTotalDuration(leg)}
                    </p>
                    <p className="text-base text-gray-600">
                      Total Stops: {calculateTotalTransits(leg)}
                    </p>
                    <p className="text-base text-gray-600">
                      Total Passengers: {selectedItinerary.totalPassengers}
                    </p>
                  </div> */}
                </div>
                <div className="">
                  {leg.schedules.map((schedule, idx) => (
                    <div className="" key={idx}>
                      <div className="flex flex-row-reverse justify-between items-center">
                        <p className="text-base font-medium text-gray-600">
                          {getAirlineName(schedule.carrier.marketing)}
                        </p>
                        <p className="text-base text-gray-600 flex items-center">
                          <Image
                            src={getAirlineLogo(schedule.carrier.marketing)}
                            alt="Airline Logo"
                            width={100}
                            height={100}
                            className="ml-2"
                          />
                        </p>
                      </div>

                      <div className="text-lg text-gray-600 flex flex-col items-center py-2">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex flex-col items-center">
                            <span className="font-semibold">
                              {schedule.departure.time.substring(0, 5)}
                            </span>
                            <span className="text-base font-bold">
                              {schedule.departure.airport}
                            </span>
                          </div>

                          <div className="relative w-1/2 flex items-center justify-center mx-4">
                            <div className="border-t border-gray-500 w-full relative">
                              <span className="absolute left-1/2 transform -translate-x-1/2  bg-white px-2 text-sm">
                                {Math.floor(schedule.elapsedTime / 60)}h{" "}
                                {schedule.elapsedTime % 60}m
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-col items-center">
                            <span className="font-semibold">
                              {schedule.arrival.time.substring(0, 5)}
                            </span>
                            <span className="text-base font-bold">
                              {schedule.arrival.airport}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-1 items-center text-base">
                        <div className="flex items-center gap-2">
                          <p className=" text-gray-600 rounded">
                            {airportMap[schedule.departure.airport]} to{" "}
                            {airportMap[schedule.arrival.airport]} {"|"}
                          </p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <p className=" text-gray-600">
                            Elapsed Time:{" "}
                            {Math.floor(schedule.elapsedTime / 60)}h{" "}
                            {schedule.elapsedTime % 60}m
                          </p>
                          <p className=" text-gray-600">
                            Airline: {schedule.carrier.marketing}{" "}
                            {schedule.carrier.marketingFlightNumber}
                          </p>
                        </div>
                      </div>

                      {leg.transits.map((transit, transitIndex) => (
                        <div key={transitIndex}>
                          {schedule.arrival.airport === transit.airport && (
                            <div className="bg-green-100 p-3 mt-2 rounded-lg flex justify-center gap-2 items-center">
                              <IoMdTime />
                              <p className="text-base text-gray-800">
                                Layover in: {airportMap[transit.airport]} (
                                {transit.airport})
                              </p>
                              <p className="text-base text-gray-800">
                                Layover Time:{" "}
                                {Math.floor(transit.layoverTime / 60)}h{" "}
                                {transit.layoverTime % 60}m
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="p-6 relative flex justify-center items-center flex-col text-center bg-[#133758a6] text-white">
              <div>
                <p className="text-2xl font-bold">
                  Price:{" "}
                  {
                    selectedItinerary.pricingInformation[0].fare.totalFare
                      .totalPrice
                  }{" "}
                  BDT
                </p>
                <p className="text-lg text-center px-2 py-1 rounded  mt-2 flex justify-center">
                  {JSON.parse(localStorage.getItem("adults")) !== 0 && (
                    <div className="text-center">
                      {JSON.parse(localStorage.getItem("adults"))} adults
                    </div>
                  )}
                  {JSON.parse(localStorage.getItem("children")) !== 0 && (
                    <div>
                      , {JSON.parse(localStorage.getItem("children"))} children
                    </div>
                  )}
                  {JSON.parse(localStorage.getItem("kids")) !== 0 && (
                    <div>, {JSON.parse(localStorage.getItem("kids"))} kids</div>
                  )}
                  {JSON.parse(localStorage.getItem("infants")) !== 0 && (
                    <div>
                      , {JSON.parse(localStorage.getItem("infants"))} infants
                    </div>
                  )}
                </p>
              </div>
              <button className="mt-4 bg-[#00703E] text-white py-3 px-6 rounded-lg hover:bg-green-700 font-bold transition-colors duration-300 absolute right-7">
                <Link href="/pages/bookFlights">
                  Book Now
                </Link>
              </button>
            </div>
          </div>

          {/* popUp End............... */}
          {/* popUp End............... */}
        </div>
      )}

      { !isLoading &&
        !error &&
        itineraries.map((itinerary, itineraryIndex) => (
          <div
            className="flex w-full mb-3 bg-gray-300 bookButton shadow-black border "
            key={itinerary.ref}
          >
            <div className=" w-[80%]">
              {itinerary.legs.map((leg, legIndex) => (
                <div
                  className="flex bg-white buttonbutton items-center h-[80px] mb-1 pl-1 relative"
                  key={legIndex}
                >
                  {/* airline logo start */}
                  <div
                    onMouseEnter={() =>
                      handleMouseEnter(itineraryIndex, legIndex)
                    }
                    onMouseLeave={() =>
                      handleMouseLeave(itineraryIndex, legIndex)
                    }
                    className={`mr-1 transition-transform duration-300 ease-in-out ${
                      hoveredCardIndices[`${itineraryIndex}-${legIndex}`]
                        ? "transform scale-105 opacity-80"
                        : ""
                    }`}
                  >
                    {hoveredCardIndices[`${itineraryIndex}-${legIndex}`] ? (
                      leg.schedules.map((schedule, idx) => (
                        <Image
                          key={idx}
                          src={getAirlineLogo(schedule.carrier.marketing)}
                          alt={schedule.carrier.marketing}
                          width={50}
                          height={50}
                          className="mr-1 transition-opacity duration-300 ease-in-out opacity-60 hover:opacity-100"
                        />
                      ))
                    ) : (
                      <Image
                        src={logo}
                        alt="Airline Logo"
                        width={50}
                        height={50}
                        className="mr-1 transition-opacity duration-300 ease-in-out opacity-100"
                      />
                    )}
                  </div>
                  {/* airline logo End */}
                  <div className="mr-1">
                    <div>{leg.schedules[0].departure.time.substring(0, 5)}</div>
                    <div>{firstDeparture(leg)}</div>
                  </div>
                  <div className="relative">
                    <div className="w-[60px] h-0.5 bg-gray-400 line"></div>
                    <div className=" absolute w-[90px] text-xs text-gray-500 right-[0px] top-[5px] flex justify-center hidden show">
                      {Math.floor(leg.schedules[0].elapsedTime / 60)}h{" "}
                      {leg.schedules[0].elapsedTime % 60}m
                    </div>
                  </div>
                  {leg.transits.length > 0 && (
                    <div className="flex">
                      {leg.transits.map((transit, idx) => (
                        <div className="flex items-center relative" key={idx}>
                          <div className="absolute text-sm text-gray-500 top-[10px] left-[37px]">
                            {transit.airport}
                          </div>
                          <div className="relative">
                            <div className="w-3 h-3 bg-gray-400 rounded-full flight-stop mx-1"></div>
                            <div className="absolute bottom-[7px] -left-[10px] hidden show">
                              {transit.arrivalTime.substring(0, 5)}
                            </div>
                          </div>
                          <div className="w-[90px] flex justify-center absolute text-xs text-gray-500 right-[0px] top-[10px] hidden show">
                            {Math.floor(transit.elapsedTime / 60)}h{" "}
                            {transit.elapsedTime % 60}m
                          </div>
                          <div className="relative w-20 border-t-2 border-gray-400 border-dashed dashed"></div>
                          <div className="relative">
                            <div className="w-3 h-3 bg-gray-400 rounded-full flight-stop mx-1"></div>
                            <div className="absolute bottom-[7px] -left-[10px] hidden show">
                              {transit.departureTime.substring(0, 5)}
                            </div>
                          </div>
                          <div className="relative">
                            <div className="w-[60px] h-0.5 bg-gray-400 line"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="ml-1">
                    <div>
                      {leg.schedules[
                        leg.schedules.length - 1
                      ].arrival.time.substring(0, 5)}
                    </div>
                    <div>{lastArrival(leg)}</div>
                  </div>
                  <div className="">
                    {leg.schedules.map((schedule, idx) => (
                      <div className="" key={idx}>
                        {leg.sharedFlights.includes(idx + 1) && (
                          <div className="text-red-500 mt-2 absolute bottom-0 left-[58px] hidden show font-extrabold">
                            This is a shared flight
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[20%] flex items-center justify-center text-center">
              <div>
                <p className="text-black bold">
                  BDT{" "}
                  {itinerary.pricingInformation[0].fare.totalFare.totalPrice}
                </p>
                <button
                  className=" px-3 py-1 text-white rounded bg-blue-600 hidden bookbuttonshow"
                  onClick={() => handleBookNowClick(itinerary)}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Result;
