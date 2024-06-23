'use client'
import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Return = () => {

  const [fromCode, setFromCode] = useState('From');
  const [toCode, setToCode] = useState('To');    

  const [fromInput, setFromInput] = useState(''); // Track user's input for "From"
  const [toInput, setToInput] = useState('');
  const [fromList, setFromList] = useState([]);
  const [toList, setToList] = useState([]);
  const [fromCity, setFromCity] = useState('Select a city');
  const [fromAirportName, setFromAirportName] = useState('');

  const [toCity, setToCity] = useState('Select a city');
  const [toAirportName, setToAirportName] = useState('');

  const [isFromInputFocused, setIsFromInputFocused] = useState(false);
  const [isToInputFocused, setIsToInputFocused] = useState(false);

  const [departureDate, setDepartureDate] = useState('');

  useEffect(() => {
      // Retrieve stored data from localStorage when the component mounts
      const storedFromCode = localStorage.getItem('fromCode');
      const storedToCode = localStorage.getItem('toCode');
      const storedDepartureDate = localStorage.getItem('departureDate');
      const storedFromCity = localStorage.getItem('fromCity');
      const storedFromAirportName = localStorage.getItem('fromAirportName');
      const storedToCity = localStorage.getItem('toCity');
      const storedToAirportName = localStorage.getItem('toAirportName');

      if (storedFromCode) setFromCode(storedFromCode);
      if (storedToCode) setToCode(storedToCode);
      if (storedDepartureDate) setDepartureDate(storedDepartureDate);
      if (storedFromCity) setFromCity(storedFromCity);
      if (storedFromAirportName) setFromAirportName(storedFromAirportName);
      if (storedToCity) setToCity(storedToCity);
      if (storedToAirportName) setToAirportName(storedToAirportName);
  }, []);

  // Fetch function for 'From' input
  const fetchFromData = (value) => {
      fetch("https://rest-api-airport-details-3e9021974608.herokuapp.com/api/airportdetails")
          .then((response) => response.json())
          .then((json) => {
              const filteredList = json.airportDetails.filter((airport) => {
                  const valueLowerCase = value.toLowerCase();
                  const nameLowerCase = airport.airportName.toLowerCase();
                  const codeLowerCase = airport.airportCode.toLowerCase();
                  const cityLowerCase = airport.cityName.toLowerCase();
                  
                  return (
                      nameLowerCase.includes(valueLowerCase) ||
                      codeLowerCase.includes(valueLowerCase) ||
                      cityLowerCase.includes(valueLowerCase)
                  );
              });
              setFromList(filteredList);
          })
          .catch((error) => {
              console.error('Error fetching data:', error);
          });
  };

  // Fetch function for 'To' input
  const fetchToData = (value) => {
      fetch("https://rest-api-airport-details-3e9021974608.herokuapp.com/api/airportdetails")
          .then((response) => response.json())
          .then((json) => {
              const filteredList = json.airportDetails.filter((airport) => {
                  const valueLowerCase = value.toLowerCase();
                  const nameLowerCase = airport.airportName.toLowerCase();
                  const codeLowerCase = airport.airportCode.toLowerCase();
                  const cityLowerCase = airport.cityName.toLowerCase();
                  
                  return (
                      nameLowerCase.includes(valueLowerCase) ||
                      codeLowerCase.includes(valueLowerCase) ||
                      cityLowerCase.includes(valueLowerCase)
                  );
              });
              setToList(filteredList);
          })
          .catch((error) => {
              console.error('Error fetching data:', error);
          });
  };

  // Handle 'From' input change
  const handleFromChange = (value) => {
      setFromInput(value);
      setFromAirportName(value); // Reflect user's input in the input field
      fetchFromData(value);
  };

  // Handle 'To' input change
  const handleToChange = (value) => {
      setToInput(value);
      setToAirportName(value); // Reflect user's input in the input field
      fetchToData(value);
  };

  // Handle 'From' selection from the dropdown
  const handleFromSelect = (airport) => {
      setFromCity(airport.cityName);
      setFromAirportName(airport.airportName);
      setFromCode(airport.airportCode);
      setFromInput(''); // Clear the input after selection
      setFromList([]); // Hide the dropdown after selection
      setIsFromInputFocused(false); // Hide dropdown when input is deselected
  };

  // Handle 'To' selection from the dropdown
  const handleToSelect = (airport) => {
      setToCity(airport.cityName);
      setToAirportName(airport.airportName);
      setToCode(airport.airportCode);
      setToInput(''); // Clear the input after selection
      setToList([]); // Hide the dropdown after selection
      setIsToInputFocused(false); // Hide dropdown when input is deselected
  };

  // Handle 'From' input focus
  const handleFromFocus = () => {
      setIsFromInputFocused(true);
      fetchFromData(fromAirportName); // Fetch based on the current input value
  };

  // Handle 'To' input focus
  const handleToFocus = () => {
      setIsToInputFocused(true);
      fetchToData(toAirportName); // Fetch based on the current input value
  };
  

  // Handle 'From' input blur
  const handleFromBlur = () => {
      setTimeout(() => setIsFromInputFocused(false), 100);
  };

  // Handle 'To' input blur
  const handleToBlur = () => {
      setTimeout(() => setIsToInputFocused(false), 100);
  };

  // Handle date change
  const handleDateChange = (e) => {
      setDepartureDate(e.target.value);
  };

  // Handle form submission and storing data in localStorage
  const handleSearch = () => {
      localStorage.setItem('fromCode', fromCode);
      localStorage.setItem('toCode', toCode);
      localStorage.setItem('departureDate', departureDate);
      // localStorage.setItem('fromCity', fromCity);
      // localStorage.setItem('fromAirportName', fromAirportName);
      // localStorage.setItem('toCity', toCity);
      // localStorage.setItem('toAirportName', toAirportName);

      // You can also handle further actions here, like submitting the form or navigating to another page
      console.log('Data stored in localStorage');
  };

  const handleTravalervisible = () =>{        
      if(isVisibleTraveler == false){
          
          setIsVisibleTraveler(true);
      }
      if(isVisibleTraveler == true){
          
          setIsVisibleTraveler(false);
      }
  }
  const [totalTraveller,setTotalTraveller] = useState(1);
  const [isVisibleTraveler, setIsVisibleTraveler] = useState(false);

  const[noOfAdt,setNoOfAdt] = useState(1);  
  const handleAdultIncrement = () => {
    if(totalTraveller<9){
      if(noOfAdt<9){      
        setNoOfAdt(noOfAdt + 1)
      }      
    }
    else{
      window.alert("Maximum limit reached!");
    }
  };
  const handleAdultDecrement = () => {
    if(noOfAdt>1){      
      setNoOfAdt(noOfAdt - 1);
    }else{
      window.alert("MInimun limit reached!");
    }
  }
  const handleChangeAdult = (e) => {
    const newValue = parseInt(e.target.value);
    setNoOfAdt(newValue >= 0 ? newValue : 0);    
  };

  const[noOfChildren,setNoOfChildren] = useState(0); 
  const handleChildrenIncrement = () => {
    if(totalTraveller<9){
      if(noOfChildren<9){      
        setNoOfChildren(noOfChildren + 1)
      }
    }    
    else{
      window.alert("Maximum limit reached!");
    }
  };
  const handleChildrenDecrement = () => {    
      if(noOfChildren>0){      
        setNoOfChildren(noOfChildren - 1);
      }else{
      window.alert("MInimun limit reached!");
    }
  }
  const handleChangeChildren = (e) => {
    const newValue = parseInt(e.target.value);
    setNoOfChildren(newValue >= 0 ? newValue : 0);
    
  };

  const[noOfKids,setNoOfKids] = useState(0);
  const handleKidsIncrement = () => {
    if(totalTraveller<9){
      if(noOfKids<9){      
        setNoOfKids(noOfKids + 1)
      }
    }
    else{
      window.alert("Maximum limit reached!");
    }
  };
  const handleKidsDecrement = () => {
    if(noOfKids>0){      
      setNoOfKids(noOfKids - 1);
    }else{
      window.alert("MInimun limit reached!");
    }
  }
  const handleChangeKids = (e) => {
    const newValue = parseInt(e.target.value);
    setNoOfKids(newValue >= 0 ? newValue : 0);
    
  };

  const[noOfInfent,setNoOfInfent] = useState(0); 
  const handleInfentIncrement = () => {
    if(totalTraveller<9){
      
      if(noOfInfent<noOfAdt){      
        setNoOfInfent(noOfInfent + 1)
      }
    }
    else{
      window.alert("Maximum limit reached!");
    }
  };
  const handleInfentDecrement = () => {
    if(noOfInfent>0){      
      setNoOfInfent(noOfInfent - 1);
    }else{
      window.alert("MInimun limit reached!");
    }
  }
  const handleChangeInfent = (e) => {
    const newValue = parseInt(e.target.value);
    setNoOfInfent(newValue >= 0 ? newValue : 0);
    
  }; 
  return (
    <div className='relative '>
       <div className='w-28 flex bg-white text-black text-sm justify-center border p-0.5 mb-1 rounded cursor-pointer'>
            <div>
                <p className='' onClick={handleTravalervisible}>{totalTraveller} Travelar</p>
            </div>
            <div>
                <MdOutlineKeyboardArrowDown fontSize={20}/>
            </div>
        </div>
                        <div className='flex gap-x-0.5'>
                            <input 
                                className='h-[50px] w-[250px] text-black border-[2px] ps-[15px]' 
                                type="text" 
                                placeholder='FROM' 
                                value={fromAirportName} 
                                onChange={(e) => handleFromChange(e.target.value)} 
                                onFocus={handleFromFocus}
                                onClick={handleFromFocus} // Fetch data on click
                                onBlur={handleFromBlur}
                            />
                            <input 
                                className='h-[50px] w-[250px] border-[2px] text-black ps-[15px]' 
                                type="text" 
                                placeholder='TO' 
                                value={toAirportName} 
                                onChange={(e) => handleToChange(e.target.value)}
                                onFocus={handleToFocus}
                                onClick={handleToFocus} // Fetch data on click
                                onBlur={handleToBlur}
                            />
                            <input 
                                type="date" 
                                value={departureDate} 
                                onChange={handleDateChange} 
                                className='h-[50px] w-[150px] text-black border-[2px]' 
                            />
                            <input 
                                type="date" 
                                value={departureDate} 
                                onChange={handleDateChange} 
                                className='h-[50px] w-[150px] text-black border-[2px]' 
                            />
                            <p 
                                className='text-center bg-green-800 text-white text-md w-[150px] flex items-center justify-center cursor-pointer' 
                                onClick={handleSearch}
                            >
                                Search Flights
                            </p>

                            <div >
                            {
                                isVisibleTraveler && (
                                    <div className="p-2 mx-auto bg-white text-black rounded-lg shadow-lg w-64 absolute left-[0px] top-[30px]"> 
                                    {/* <div className="mb-2">
                                        <h4 className="block font-bold text-gray-700">Travelers</h4>
                                        <p>Highest no of travelers 9</p>
                                    </div> */}
                                    <div className="flex justify-between  mb-2 border-b ">
                                        <div className='text-start'>
                                            <label className="block text-sm text-black">Adults</label>
                                        </div>
                                        <div className="flex">
                                            <button className="text-xl" onClick={handleAdultDecrement}>-</button>
                                            <input type="text" className="w-16 text-center" value={noOfAdt}  onChange={handleChangeAdult}/>
                                            <button className="text-xl text-green-500"  onClick={handleAdultIncrement}>+</button>
                                        </div>
                                    </div>

                                    <div className="flex justify-between mb-2 border-b">
                                        <div className='text-start'>
                                            <label className="block text-sm text-black">Childrens 5-12</label>
                                        </div>
                                        <div className="flex items-center">
                                            <button className="text-xl" onClick={handleChildrenDecrement}>-</button>
                                            <input type="text" className="w-16 text-center " value={noOfChildren}  onChange={handleChangeChildren}/>
                                            <button className="text-xl text-green-500" onClick={handleChildrenIncrement}>+</button>
                                        </div>
                                    </div>

                                    <div className="flex justify-between mb-2 border-b"> 
                                        <div className='text-start'>
                                            <label className="block text-sm text-black">Kids 2-5</label>
                                        </div>
                                        <div className="flex items-center">
                                            <button className="text-xl" onClick={handleKidsDecrement}>-</button>
                                        <input type="text" className="w-16 text-center " value={noOfKids} onChange={handleChangeKids}/>
                                            <button className="text-xl text-green-500" onClick={handleKidsIncrement}>+</button>
                                        </div>
                                    </div>

                                    <div className="flex justify-between">
                                        <div className='text-start'>
                                            <label className="block text-sm text-black">Infent</label>
                                        </div>
                                        <div className="flex items-center">
                                            <button className="text-xl" onClick={handleInfentDecrement}>-</button>
                                            <input type="text" className="w-16 text-center " value={noOfInfent} onChange={handleChangeInfent} />
                                            <button className="text-xl text-green-500" onClick={handleInfentIncrement}>+</button>
                                        </div>
                                    </div>
                                </div>
                        
                                )
                            }
                            </div>
                        </div>

                        {/* From Dropdown */}
                        {isFromInputFocused && fromList.length > 0 && (
                            <div className='max-h-[520px] w-[400px] bg-white shadow-md absolute top-[90px] left-[0px] rounded-lg overflow-hidden'>
                                <div className=''>
                                    {fromList.map((e, id) => (
                                        <div 
                                            onClick={() => handleFromSelect(e)} 
                                            className='bg-[#F0F8FF]' 
                                            key={id}
                                        >
                                            <div className='bg-[#FFFFFF] py-1 px-2 border rounded-lg overflow-hidden'>
                                                <div className='flex  justify-between'>
                                                    <div >
                                                        <p className='mb-2 text-[#6B6A69] text-xs font-light font-noto'>{e.cityName}</p>
                                                        <p className='mb-1 text-sm font-semibold text-black font-noto'>{e.airportName}</p>
                                                    </div>
                                                    <p className='text-[#6B6A69] text-xs font-light font-noto'>{e.airportCode}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* To Dropdown */}
                        {isToInputFocused && toList.length > 0 && (
                            <div className='h-[520px] w-[400px] bg-white shadow-md absolute top-[90px] left-[255px] rounded-lg  overflow-hidden'>
                                <div className=''>
                                    {toList.map((e, id) => (
                                        <div 
                                            onClick={() => handleToSelect(e)} 
                                            className='bg-[#F0F8FF]' 
                                            key={id}
                                        >
                                            <div className='bg-[#FFFFFF] py-1 px-2 border rounded-lg overflow-hidden'>
                                                <div className='flex justify-between itmes-center'>
                                                    <div className='text-start'>
                                                        <p className='mb-2 text-[#6B6A69] text-xs font-light font-noto'>{e.cityName}</p>
                                                        <p className='mb-1 text-sm font-semibold text-black font-noto'>{e.airportName}</p>
                                                    </div>
                                                    <p className='text-[#6B6A69] text-xs font-light font-noto'>{e.airportCode}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
  )
}

export default Return