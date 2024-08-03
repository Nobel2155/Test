"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import airlineLogo from "@/assets/bookFlights/airlineLogo.png";
import { useSelector } from 'react-redux';
import { useRouter } from "next/navigation";

import airportMap from "@/dataSet/cityNameMap";
import { IoMdTime } from "react-icons/io";

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

      return { ...itinerary, legs,totalPassengers };
    });
  });
};

const Airlines = () => {
  const [error, setError] = useState(null);

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

  const calculateTotalTransits = (leg) => leg.transits.length;

  const [airlines, setAirlines] = useState([]);

  useEffect(()=>{
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
    fetchAirlines();
  },[])
    const getAirlineName = (code) =>
    airlines.find((airline) => airline.code === code)?.name || "";
    const getAirlineLogo = (code) =>
      airlines.find((airline) => airline.code === code)?.logo || "";





  
  const revalidateData = useSelector((state) => state.auth.revalidateData);
  const [itineraries, setItineraryData] = useState([]);

  useEffect(() => {
    if (revalidateData) {
      const processedData = processItinerary(revalidateData);
      setItineraryData(processedData);
      console.log(processedData);
    }
  }, [revalidateData]);
  console.log(itineraries,"itineraryData");

  return (
    <div>
      { 
        itineraries.map((selectedItinerary, itineraryIndex) => (
          <div
            className="flex w-full mb-3 bg-gray-300 bookButton shadow-black border "
            key={selectedItinerary.ref}
          >
            <div className=" w-[80%]">
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
                  <div className="flex gap-2 justify-around items-center">
                    <p className="text-base text-gray-600">
                      Total Duration: {calculateTotalDuration(leg)}
                    </p>
                    <p className="text-base text-gray-600">
                      Total Stops: {calculateTotalTransits(leg)}
                    </p>
                    <p className="text-base text-gray-600">
                      Total Passengers: {selectedItinerary.totalPassengers}
                    </p>
                  </div>
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
                            | {schedule.carrier.marketing}{" "}
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
            <div className="w-[20%] flex items-center justify-center text-center">
              <div>
                <p className="text-black bold">
                  BDT{" "}
                  {selectedItinerary.pricingInformation[0].fare.totalFare.totalPrice}
                </p>
                {/* <button
                  className=" px-3 py-1 text-white rounded bg-blue-600 hidden bookbuttonshow"
                  onClick={() => handleSelect(itinerary)}
                >
                  Select
                </button> */}
              </div>
            </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Airlines;
