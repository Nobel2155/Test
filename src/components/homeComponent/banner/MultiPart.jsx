'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import _ from 'lodash';
import airportDetails from '@/dataSet/airportDetails'; 
import SearchBtn from "./SearchBtn";// Import the local data

const Page = () => {
  const [inputGroups, setInputGroups] = useState([{ id: 1 }, { id: 2 }]);
  const [departureAirports, setDepartureAirports] = useState([{ name: '', code: '' }, { name: '', code: '' }]);
  const [arrivalAirports, setArrivalAirports] = useState([{ name: '', code: '' }, { name: '', code: '' }]);
  const [departureDates, setDepartureDates] = useState(['', '']);
  const [dropdownData, setDropdownData] = useState({ from: [], to: [] });
  const [focus, setFocus] = useState({ from: null, to: null });
  const dropdownRef = useRef(null);

  // Updated customIndexList with the new structure
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

  // Updated customIndexedAirports using the customIndexList
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

    const loadedDepartureAirports = storedDepartureAirports.map(code => ({ name: '', code }));
    const loadedArrivalAirports = storedArrivalAirports.map(code => ({ name: '', code }));

    setDepartureAirports(loadedDepartureAirports);
    setArrivalAirports(loadedArrivalAirports);
    setDepartureDates(storedDepartureDates);
  }, []);

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
  };

  const handleArrivalCityChange = (index, value) => {
    const updatedAirports = [...arrivalAirports];
    updatedAirports[index] = { name: value, code: '' };
    setArrivalAirports(updatedAirports);
    debouncedFetchToData(value);
  };

  const handleDepartureDateChange = (index, value) => {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format
    if (value >= today) { // Only accept dates from today onwards
      const updatedDates = [...departureDates];
      updatedDates[index] = value;
      setDepartureDates(updatedDates);
    }
  };

  const handleFromSelect = (index, airport) => {
    const updatedAirports = [...departureAirports];
    updatedAirports[index] = { name: airport.airportName, code: airport.airportCode };
    setDepartureAirports(updatedAirports);
    setFocus((prevState) => ({ ...prevState, from: null }));
  };

  const handleToSelect = (index, airport) => {
    const updatedAirports = [...arrivalAirports];
    updatedAirports[index] = { name: airport.airportName, code: airport.airportCode };
    setArrivalAirports(updatedAirports);
    setFocus((prevState) => ({ ...prevState, to: null }));
  };

  const handleAddInputGroup = () => {
    const newId = inputGroups.length > 0 ? inputGroups[inputGroups.length - 1].id + 1 : 1;
    setInputGroups([...inputGroups, { id: newId }]);
    setDepartureAirports([...departureAirports, { name: '', code: '' }]);
    setArrivalAirports([...arrivalAirports, { name: '', code: '' }]);
    setDepartureDates([...departureDates, '']);
  };

  const handleDeleteInputGroup = (id) => {
    if (inputGroups.length > 2) {
      const groupIndex = inputGroups.findIndex(group => group.id === id);

      const updatedDepartureAirports = [...departureAirports];
      const updatedArrivalAirports = [...arrivalAirports];
      const updatedDepartureDates = [...departureDates];

      updatedDepartureAirports.splice(groupIndex, 1);
      updatedArrivalAirports.splice(groupIndex, 1);
      updatedDepartureDates.splice(groupIndex, 1);

      setDepartureAirports(updatedDepartureAirports);
      setArrivalAirports(updatedArrivalAirports);
      setDepartureDates(updatedDepartureDates);

      const updatedInputGroups = inputGroups.filter(group => group.id !== id);
      setInputGroups(updatedInputGroups);
    }
  };

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

  return (
    <div className='py-1 text-black'>
      <div className=' py-1 rounded shadow-md'>
        {inputGroups.map((group, index) => (
          <div key={group.id} className='flex flex-wrap mb-4 relative gap-x-1'>
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
                        {/* Display the custom index */}
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
                placeholder={`Arrival city for group ${group.id}`}
                value={arrivalAirports[index].name || ''}
                onChange={(e) => handleArrivalCityChange(index, e.target.value)}
                onClick={() => handleToggleFocus('to', index)}
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
                        {/* Display the custom index */}
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
              />
            </div>
            {inputGroups.length > 2 && (
              <div className='flex-none ml-2'>
                <button
                  className='px-2 py-2 bg-red-500 text-white rounded h-[50px]'
                  onClick={() => handleDeleteInputGroup(group.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
        <div className='mt-4'>
          <button
            className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ms-auto flex'
            onClick={handleAddInputGroup}
          >
            Add More
          </button>
        </div>
        <SearchBtn/>
      </div>
    </div>
  );
};

export default Page;


