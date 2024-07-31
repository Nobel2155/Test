'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import _ from 'lodash';
import airportDetails from '@/dataSet/airportDetails'; 
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Page = () => {
  // Initialize with two groups
  const [inputGroups, setInputGroups] = useState([{ id: 1 }]);
  const [departureAirports, setDepartureAirports] = useState([{ name: '', code: '' }, { name: '', code: '' }]);
  const [arrivalAirports, setArrivalAirports] = useState([{ name: '', code: '' }, { name: '', code: '' }]);
  const [departureDates, setDepartureDates] = useState(['', '']);
  const [dropdownData, setDropdownData] = useState({ from: [], to: [] });
  const [focus, setFocus] = useState({ from: null, to: null });
  const dropdownRef = useRef(null);
  const router = useRouter(); 

  // Custom index list for airports
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

  // Map the custom index list to airport details
  const customIndexedAirports = customIndexList
    .map(({ code, index }) => {
      const airport = airportDetails.find((a) => a.airportCode === code);
      return airport ? { ...airport, customIndex: index } : null;
    })
    .filter((airport) => airport !== null);

  // Load stored values from local storage
  useEffect(() => {
    
    localStorage.setItem('departureAirports', JSON.stringify(['', '']));
    localStorage.setItem('arrivalAirports', JSON.stringify(['', '']));
    localStorage.setItem('departureDates', JSON.stringify(['', '']));

    const storedDepartureAirports = JSON.parse(localStorage.getItem('departureAirports')) || ['', ''];
    const storedArrivalAirports = JSON.parse(localStorage.getItem('arrivalAirports')) || ['', ''];
    const storedDepartureDates = JSON.parse(localStorage.getItem('departureDates')) || ['', ''];

    const loadedDepartureAirports = storedDepartureAirports.map(code => ({ name: '', code }));
    const loadedArrivalAirports = storedArrivalAirports.map(code => ({ name: '', code }));

    setDepartureAirports(loadedDepartureAirports);
    setArrivalAirports(loadedArrivalAirports);
    setDepartureDates(storedDepartureDates);
  }, []);

  // Update local storage when state changes
  useEffect(() => {
    const storedDepartureAirports = departureAirports.map(airport => airport.code);
    localStorage.setItem('departureAirports', JSON.stringify(storedDepartureAirports));
  }, [departureAirports]);

  useEffect(() => {
    const storedArrivalAirports = arrivalAirports.map(airport => airport.code);
    localStorage.setItem('arrivalAirports', JSON.stringify(storedArrivalAirports));
  }, [arrivalAirports]);

  useEffect(() => {
    localStorage.setItem('departureDates', JSON.stringify(departureDates));
  }, [departureDates]);

  // Fetch data for dropdown list
  const debouncedFetchFromData = useCallback(_.debounce((value) => {
    filterData(value, 'from');
  }, 300), []);

  const debouncedFetchToData = useCallback(_.debounce((value) => {
    filterData(value, 'to');
  }, 300), []);

  // Filter data based on input
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

  // Handle change for departure city input
  const handleDepartureCityChange = (index, value) => {
    const updatedAirports = [...departureAirports];
    updatedAirports[index] = { name: value, code: '' };
    setDepartureAirports(updatedAirports);
    debouncedFetchFromData(value);

    // Sync with arrival city if index is 0
    if (index === 0) {
      const updatedArrivals = [...arrivalAirports];
      updatedArrivals[1] = { name: value, code: '' };
      setArrivalAirports(updatedArrivals);
    }
  };

  // Handle change for arrival city input
  const handleArrivalCityChange = (index, value) => {
    const updatedAirports = [...arrivalAirports];
    updatedAirports[index] = { name: value, code: '' };
    setArrivalAirports(updatedAirports);
    debouncedFetchToData(value);

    // Sync with departure city if index is 0
    if (index === 0) {
      const updatedDepartures = [...departureAirports];
      updatedDepartures[1] = { name: value, code: '' };
      setDepartureAirports(updatedDepartures);
    }
  };

  // Handle change for departure date input
  const handleDepartureDateChange = (index, value) => {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format
    if (value >= today) { // Only accept dates from today onwards
      const updatedDates = [...departureDates];
      updatedDates[index] = value;
      setDepartureDates(updatedDates);
    }
  };

  // Handle selection of an airport from the dropdown
  const handleFromSelect = (index, airport) => {
    const updatedAirports = [...departureAirports];
    updatedAirports[index] = { name: airport.airportName, code: airport.airportCode };
    setDepartureAirports(updatedAirports);

    // Sync with arrival city if index is 0
    if (index === 0) {
      const updatedArrivals = [...arrivalAirports];
      updatedArrivals[1] = { name: airport.airportName, code: airport.airportCode };
      setArrivalAirports(updatedArrivals);
    }

    setFocus((prevState) => ({ ...prevState, from: null }));
  };

  // Handle selection of an airport from the dropdown
  const handleToSelect = (index, airport) => {
    const updatedAirports = [...arrivalAirports];
    updatedAirports[index] = { name: airport.airportName, code: airport.airportCode };
    setArrivalAirports(updatedAirports);

    // Sync with departure city if index is 0
    if (index === 0) {
      const updatedDepartures = [...departureAirports];
      updatedDepartures[1] = { name: airport.airportName, code: airport.airportCode };
      setDepartureAirports(updatedDepartures);
    }

    setFocus((prevState) => ({ ...prevState, to: null }));
  };

  // Toggle focus state to show/hide dropdown
  const handleToggleFocus = (type, index) => {
    if (focus[type] === index) {
      // If already focused, toggle off
      setFocus({ from: null, to: null });
    } else {
      // Otherwise, focus on the new field and load dropdown data
      setFocus({ from: type === 'from' ? index : null, to: type === 'to' ? index : null });
      setDropdownData((prevState) => ({ ...prevState, [type]: customIndexedAirports }));
    }
  };

  // Handle clicks outside the dropdown to close it
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
    // Check if any of the required state variables are empty
    if (departureAirports.some(airport => airport.name === '') ||
        arrivalAirports.some(airport => airport.name === '') ||
        departureDates.some(date => date === '')) {
      toast.warning('Please fill in all fields.');
    } else {
      localStorage.setItem('show', "true");
      // Navigate to the search result page
      router.push('./../../../pages/searchResult');
    }
  };

  return (
    <div className='py-1 text-black'>
      <div className='py-1 rounded shadow-md'>
        {inputGroups.map((group, index) => (
          <div key={group.id} className='flex lg:flex-row md:flex-col flex-col gap-3 mb-4 relative gap-x-1'>
            <div className='flex-1 relative mb-4 sm:mb-0'>
              <input
                type="text"
                className='mr-2 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-[50px]'
                placeholder={`Departure city for group ${group.id}`}
                value={departureAirports[index].name || ''}
                onChange={(e) => handleDepartureCityChange(index, e.target.value)}
                onClick={() => handleToggleFocus('from', index)}
              />
              {focus.from === index && dropdownData.from.length > 0 && (
                <div ref={dropdownRef} className='max-h-[300px] w-full bg-white shadow-md absolute top-full left-0 overflow-y-auto z-10'>
                  <ul>
                    {dropdownData.from.map((airport) => (
                      <li
                        key={airport.airportCode}
                        className="bg-blue-50 cursor-pointer hover:bg-blue-100"
                        onMouseDown={() => handleFromSelect(index, airport)}
                      >
                        <div className="bg-white py-1 px-2 border rounded-lg overflow-hidden">
                          <div className="flex justify-between">
                            <div className="text-start">
                              <p className="mb-2 text-gray-500 text-xs font-light">{airport.airportCode}</p>
                              <p className="text-sm font-medium">{airport.airportName}</p>
                              <p className="text-xs text-gray-400">{airport.cityName}, {airport.countryName}</p>
                            </div>
                            <div className="text-end">
                              <p className="text-sm font-medium">{airport.airportCode}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className='flex-1 relative mb-4 sm:mb-0'>
              <input
                type="text"
                className='mr-2 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-[50px]'
                placeholder={`Arrival city for group ${group.id}`}
                value={arrivalAirports[index].name || ''}
                onChange={(e) => handleArrivalCityChange(index, e.target.value)}
                onClick={() => handleToggleFocus('to', index)}
              />
              {focus.to === index && dropdownData.to.length > 0 && (
                <div ref={dropdownRef} className='max-h-[300px] w-full bg-white shadow-md absolute top-full left-0 overflow-y-auto z-10'>
                  <ul>
                    {dropdownData.to.map((airport) => (
                      <li
                        key={airport.airportCode}
                        className="bg-blue-50 cursor-pointer hover:bg-blue-100"
                        onMouseDown={() => handleToSelect(index, airport)}
                      >
                        <div className="bg-white py-1 px-2 border rounded-lg overflow-hidden">
                          <div className="flex justify-between">
                            <div className="text-start">
                              <p className="mb-2 text-gray-500 text-xs font-light">{airport.airportCode}</p>
                              <p className="text-sm font-medium">{airport.airportName}</p>
                              <p className="text-xs text-gray-400">{airport.cityName}, {airport.countryName}</p>
                            </div>
                            <div className="text-end">
                              <p className="text-sm font-medium">{airport.airportCode}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className='flex-1 relative mb-4 sm:mb-0'>
              <input
                type="date"
                className='mr-2 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-[50px]'
                placeholder={`Departure date for group ${group.id}`}
                value={departureDates[0] || ''}
                onChange={(e) => handleDepartureDateChange(0, e.target.value)}
              />
            </div>
            <div className='flex-1 relative mb-4 sm:mb-0'>
              <input
                type="date"
                className='mr-2 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-[50px]'
                placeholder={`Departure date for group ${group.id}`}
                value={departureDates[1] || ''}
                onChange={(e) => handleDepartureDateChange(1, e.target.value)}
              />
            </div>
            <button className='bg-green-800 w-[150px] h-[50px] font-bold text-white rounded' onClick={handleSearchFlight}>
              Search Flights
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
