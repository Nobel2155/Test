"use client"
import React, { useState, useEffect, useCallback, useRef } from "react";
import _ from "lodash";
import airportDetails from "@/dataSet/airportDetails";
import PassengerCount from "@/components/homeComponent/airportService/PassengerCount";

const AirportService = () => {
  const [departureAirport, setDepartureAirport] = useState({
    name: "",
    code: "",
  });
  const dropdownRef = useRef(null);

  const [arrivalAirport, setArrivalAirport] = useState({ name: "", code: "" });
  const [departureDate, setDepartureDate] = useState("");
  const [dropdownData, setDropdownData] = useState({ from: [], to: [] });
  const [focus, setFocus] = useState({ from: null, to: null });
  const fromDropdownRef = useRef(null);
  const toDropdownRef = useRef(null);

  const customIndexList = [
    { code: "DAC" },
    { code: "CGP" },
    { code: "CXB" },
    { code: "SPD" },
    { code: "ZYL" },
    { code: "RJH" },
    { code: "BZL" },
    { code: "DXB" },
    { code: "JFK" },
    { code: "SIN" },
  ];

  const customIndexedAirports = customIndexList
    .map(({ code }) => {
      const airport = airportDetails.find((a) => a.airportCode === code);
      return airport ? { ...airport } : null;
    })
    .filter((airport) => airport !== null);

  useEffect(() => {
    const storedDepartureAirportCode =
      localStorage.getItem("departureAirportCode") || "";
    const storedArrivalAirportCode =
      localStorage.getItem("arrivalAirportCode") || "";
    const storedDepartureDate = localStorage.getItem("departureDate") || "";

    const departureAirportDetails = airportDetails.find(
      (airport) => airport.airportCode === storedDepartureAirportCode
    ) || { name: "", code: "" };
    const arrivalAirportDetails = airportDetails.find(
      (airport) => airport.airportCode === storedArrivalAirportCode
    ) || { name: "", code: "" };

    setDepartureAirport({
      name: departureAirportDetails.airportName,
      code: storedDepartureAirportCode,
    });
    setArrivalAirport({
      name: arrivalAirportDetails.airportName,
      code: storedArrivalAirportCode,
    });
    setDepartureDate(storedDepartureDate);
  }, []);

  useEffect(() => {
    localStorage.setItem("departureAirportCode", departureAirport.code);
  }, [departureAirport]);

  useEffect(() => {
    localStorage.setItem("arrivalAirportCode", arrivalAirport.code);
  }, [arrivalAirport]);

  useEffect(() => {
    localStorage.setItem("departureDate", departureDate);
  }, [departureDate]);

  const debouncedFetchFromData = useCallback(
    _.debounce((value) => {
      filterData(value, "from");
    }, 300),
    []
  );

  const debouncedFetchToData = useCallback(
    _.debounce((value) => {
      filterData(value, "to");
    }, 300),
    []
  );

  const filterData = (value, type) => {
    if (!value) {
      setDropdownData((prevState) => ({
        ...prevState,
        [type]: airportDetails,
      }));
      return;
    }

    const filteredList = airportDetails.filter((airport) => {
      const valueLowerCase = value.toLowerCase();
      const nameLowerCase = airport.airportName.toLowerCase();
      const codeLowerCase = airport.airportCode.toLowerCase();
      const cityLowerCase = airport.cityName.toLowerCase();
      const countryLowerCase = airport.countryName.toLowerCase();

      return (
        nameLowerCase.includes(valueLowerCase) ||
        codeLowerCase.includes(valueLowerCase) ||
        cityLowerCase.includes(valueLowerCase) ||
        countryLowerCase.includes(valueLowerCase)
      );
    });

    setDropdownData((prevState) => ({ ...prevState, [type]: filteredList }));
  };

  const handleDepartureCityChange = (value) => {
    setDepartureAirport({ name: value, code: "" });
    debouncedFetchFromData(value);
  };

  const handleArrivalCityChange = (value) => {
    setArrivalAirport({ name: value, code: "" });
    debouncedFetchToData(value);
  };

  const handleDepartureDateChange = (value) => {
    const today = new Date().toISOString().split("T")[0];
    if (value >= today) {
      setDepartureDate(value);
    }
  };

  const handleFromSelect = (airport) => {
    setDepartureAirport({
      name: airport.airportName,
      code: airport.airportCode,
    });
    setFocus((prevState) => ({ ...prevState, from: null }));
  };

  const handleToSelect = (airport) => {
    setArrivalAirport({ name: airport.airportName, code: airport.airportCode });
    setFocus((prevState) => ({ ...prevState, to: null }));
  };

  const handleToggleFocus = (type) => {
    if (
      (focus[type] !== null && dropdownRef.current !== null) ||
      (focus[type] !== null && fromDropdownRef.current !== null) ||
      (focus[type] !== null && toDropdownRef.current !== null)
    ) {
      setFocus({ from: null, to: null });
    } else {
      setFocus({
        from: type === "from" ? 0 : null,
        to: type === "to" ? 0 : null,
      });
      setDropdownData((prevState) => ({
        ...prevState,
        [type]: customIndexedAirports,
      }));
    }
  };

  const handleClickOutside = (event) => {
    if (
      fromDropdownRef.current &&
      !fromDropdownRef.current.contains(event.target) &&
      toDropdownRef.current &&
      !toDropdownRef.current.contains(event.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setFocus({ from: null, to: null });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#F6F5F5]">
      <div className="max-w-[1200px] mx-auto p-10 mb-4">
        <div className="mb-2">
          <h1 className="text-3xl text-[#282828] p-1">Airport Service</h1>
          <p className="text-xl text-[#282828]">
            Get our customized treatment as a VIP to save your valuable time
            spent in line at the airport.
          </p>
        </div>
        <div className="py-1 rounded">
          <div className="flex flex-wrap gap-3 relative lg:justify-start md:justify-start justify-center items-center gap-x-o.5">
            <div className="relative">
              <input
                type="text"
                className="mr-2 w-48 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-[50px]"
                placeholder="Departure city"
                value={departureAirport.name || ""}
                onChange={(e) => handleDepartureCityChange(e.target.value)}
                onClick={() => handleToggleFocus("from")}
              />
              {focus.from !== null && dropdownData.from.length > 0 && (
                <div
                  ref={fromDropdownRef}
                  className="max-h-[300px] w-full bg-white shadow-md absolute top-[60px] left-0 rounded-lg overflow-auto z-10"
                >
                  {dropdownData.from.map((airport, idx) => (
                    <div
                      key={idx}
                      className="bg-blue-50 cursor-pointer hover:bg-blue-100"
                      onMouseDown={() => handleFromSelect(airport)}
                    >
                      <div className="bg-white py-1 px-2 border rounded-lg overflow-hidden">
                        <div className="flex justify-between">
                          <div className="text-start">
                            <p className="mb-2 text-gray-500 text-xs font-light">
                              {airport.cityName}
                            </p>
                            <p className="mb-1 text-sm font-semibold text-black">
                              {airport.airportName}
                            </p>
                          </div>
                          <p className="text-gray-500 text-xs font-light">
                            {airport.airportCode}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="">
              <input
                type="date"
                className="mr-2 w-48 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-[50px]"
                placeholder="Departure date"
                value={departureDate || ""}
                onChange={(e) => handleDepartureDateChange(e.target.value)}
                min={new Date().toISOString().split("T")[0]} // Set the minimum date to today
              />
            </div>
            <div className="">
              <PassengerCount dropdownRef={dropdownRef} />
            </div>
            <div className="pl-2">
              <input
                type="email"
                id="email"
                className="mr-2 w-48 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-[50px]"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-start">
          <button className="bg-[#166534] px-4 py-1 text-base mt-1 text-white rounded-md">
            Get Price
          </button>
        </div>
      </div>
    </div>
  );
};

export default AirportService;
