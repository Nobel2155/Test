'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import _ from 'lodash';
import airportDetails from '@/dataSet/airportDetails'; // Import the local data
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ModifyTravelarCounter from "@/components/searchResult/modifyTrip/ModifyTravelarCounter"
import { toast } from 'react-toastify';
const ModifyOnWay = () => {
  const [inputGroups, setInputGroups] = useState([{ id: 1 }]);
  const [departureAirports, setDepartureAirports] = useState([{ name: '', code: '' }]);
  const [arrivalAirports, setArrivalAirports] = useState([{ name: '', code: '' }]);
  const [departureDates, setDepartureDates] = useState(['']);
  const [dropdownData, setDropdownData] = useState({ from: [], to: [] });
  const [focus, setFocus] = useState({ from: null, to: null });
  const dropdownRef = useRef(null);
  const router = useRouter(); // Ensure useRouter is used within the component

  const customIndexList = [
    { code: "DAC", index: 1 },
    { code: "CGP", index: 2 },
    { code: "CXB", index: 3 },
    { code: "SPD", index: 4 },
    { code: "ZYL", index: 5 },
    { code: "RJH", index: 6 },
    { code: "BZL", index: 7 },
    { code: "DXB", index: 8 },
    { code: "JFK", index: 9 },
    { code: "SIN", index: 10 },
    // Add more airports with their custom indices
  ];

  const customIndexedAirports = customIndexList
    .map(({ code, index }) => {
      const airport = airportDetails.find((a) => a.airportCode === code);
      return airport ? { ...airport, customIndex: index } : null;
    })
    .filter((airport) => airport !== null);

  useEffect(() => {
    const storedDepartureAirports = JSON.parse(localStorage.getItem('departureAirports')) || [''];
    const storedArrivalAirports = JSON.parse(localStorage.getItem('arrivalAirports')) || [''];
    const storedDepartureDates = JSON.parse(localStorage.getItem('departureDates')) || ['', ''];

    const loadedDepartureAirports = storedDepartureAirports.map(code => {
      const airport = airportDetails.find(a => a.airportCode === code);
      return airport ? { ...airport, name: airport.airportName } : { name: '', code };
    });

    const loadedArrivalAirports = storedArrivalAirports.map(code => {
      const airport = airportDetails.find(a => a.airportCode === code);
      return airport ? { ...airport, name: airport.airportName } : { name: '', code };
    });

    setDepartureAirports(loadedDepartureAirports);
    setArrivalAirports(loadedArrivalAirports);
    setDepartureDates(storedDepartureDates);
  }, []);

  const debouncedFetchFromData = useCallback(_.debounce((value) => {
    filterData(value, 'from');
  }, 300), []);

  const debouncedFetchToData = useCallback(_.debounce((value) => {
    filterData(value, 'to');
  }, 300), []);

  const filterData = (value, type) => {
    if (!value) {
      setDropdownData((prevState) => ({ ...prevState, [type]: customIndexedAirports }));
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

  const handleDepartureCityChange = (index, value) => {
    const updatedAirports = [...departureAirports];
    updatedAirports[index] = { name: value, code: '' };
    setDepartureAirports(updatedAirports);
    debouncedFetchFromData(value);
    updateLocalStorage('departureAirports', updatedAirports);
  };

  const handleArrivalCityChange = (index, value) => {
    const updatedAirports = [...arrivalAirports];
    updatedAirports[index] = { name: value, code: '' };
    setArrivalAirports(updatedAirports);
    debouncedFetchToData(value);
    updateLocalStorage('arrivalAirports', updatedAirports);
  };

  const handleDepartureDateChange = (index, value) => {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format
    if (value >= today) { // Only accept dates from today onwards
      const updatedDates = [...departureDates];
      updatedDates[index] = value;
      setDepartureDates(updatedDates);
      updateLocalStorage('departureDates', updatedDates);
    }
  };

  const handleFromSelect = (index, airport) => {
    
    const updatedAirports = [...departureAirports];
    updatedAirports[index] = { name: airport.airportName, code: airport.airportCode };
    setDepartureAirports(updatedAirports);
    setFocus((prevState) => ({ ...prevState, from: null }));
    updateLocalStorage('departureAirports', updatedAirports);
  };

  const handleToSelect = (index, airport) => {
    const updatedAirports = [...arrivalAirports];
    updatedAirports[index] = { name: airport.airportName, code: airport.airportCode };
    setArrivalAirports(updatedAirports);
    setFocus((prevState) => ({ ...prevState, to: null }));
    updateLocalStorage('arrivalAirports', updatedAirports);
    
  };

  const handleToggleFocus = (type, index) => {
    if (focus[type] === index) {      
      // If already focused, toggle off
      setFocus({ from: null, to: null });
    } else {
      // Otherwise, focus on the new field and load dropdown data
      setFocus({ from: type === 'from' ? index : null,
          to: type === 'to' ? index : null });
      setDropdownData((prevState) => ({ ...prevState, [type]: customIndexedAirports }));
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setFocus({ from: null, to: null });
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchFlight = () => {
    if (departureAirports.some(airport => airport.name === '') ||
        arrivalAirports.some(airport => airport.name === '') ||
        departureDates.some(date => date === '')) {
      toast.warning('Please fill in all fields.');
    } else {
      window.location.reload();
    }
  };

  const updateLocalStorage = (key, value) => {
    
    localStorage.setItem(key, JSON.stringify(value.map(item => item.code || item)));
  };

  return (
    <div className=' text-black'>
      <div className=''>
        {inputGroups.map((group, index) => (
          <div key={group.id} className='flex lg:flex-row md:flex-col flex-col gap-3 relative gap-x-1'>
            <div className='flex-1 relative mb-4 sm:mb-0'>
              <input
                type="text"
                className='mr-2 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-[50px]'
                placeholder={`Departure`}
                value={departureAirports[index].name || ''}
                onChange={(e) => handleDepartureCityChange(index, e.target.value)}
                onClick={() => handleToggleFocus('from', index)}
                required
              />
              {focus.from === index && dropdownData.from.length > 0 && (
                <div ref={dropdownRef} className='max-h-[300px] w-full bg-white shadow-md absolute top-full left-0 overflow-y-auto z-10'>
                  <ul>
                    {dropdownData.from.map((airport) => (
                      <div
                        key={airport.airportCode}
                        className="bg-blue-50 cursor-pointer hover:bg-blue-100"
                        onMouseDown={() => handleFromSelect(index, airport)}
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
                  </ul>
                </div>
              )}
            </div>
            <div className='flex-1 relative mb-4 sm:mb-0'>
              <input
                type="text"
                className='mr-2 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-[50px]'
                placeholder={`Arrival`}
                value={arrivalAirports[index].name || ''}
                onChange={(e) => handleArrivalCityChange(index, e.target.value)}
                onClick={() => handleToggleFocus('to', index)}
                required
              />
              {focus.to === index && dropdownData.to.length > 0 && (
                <div ref={dropdownRef} className='max-h-[300px] w-full bg-white shadow-md absolute top-full left-0 overflow-y-auto z-10'>
                  <ul>
                    {dropdownData.to.map((airport) => (
                      <div
                        key={airport.airportCode}
                        className="bg-blue-50 cursor-pointer hover:bg-blue-100"
                        onMouseDown={() => handleToSelect(index, airport)}
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
                  </ul>
                </div>
              )}
            </div>
            <div className='flex-1'>
              <input
                type="date"
                className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-[50px]'
                value={departureDates[index] || ''}
                onChange={(e) => handleDepartureDateChange(index, e.target.value)}
                required
              />
            </div>
            <div>
              <ModifyTravelarCounter/>
            </div>
            <div>
              <button
                className='bg-green-800 w-[150px] h-[50px] font-bold text-white rounded'
                onClick={handleSearchFlight}
              >
                Search Flights
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModifyOnWay;
