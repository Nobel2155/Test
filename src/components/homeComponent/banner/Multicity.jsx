'use client'
import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import MultiPart from "@/components/homeComponent/banner/MultiPart"

const Multicity = () => {

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



 
    const [items, setItems] = useState(['']);

    const addItem = () => {
        const newItem = <MultiPart/>;
        setItems([...items, newItem]);
    };
    const deleteItem = (index) => {
      const updatedItems = items.filter((item, i) => i !== index);
      setItems(updatedItems);
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

        {
                    isVisibleTraveler && (
                        <div className="p-6 mx-auto mb-4 bg-white rounded-lg shadow-lg max-w-80 absolute left-[0px] top-[55px]"> 
                    <div className="mb-2" >
                        <h4 className="block font-bold text-gray-700">Travelers</h4>
                        <p>Highest no of travelers 9</p>
                    </div>
                    <div className="flex justify-between mb-2 ">
                        <div>
                            <label className="block font-bold text-gray-500">Adults</label>
                            <p className="block text-gray-400 text-xm">12 years and above</p>
                        </div>
                        <div className="flex items-center">
                            <button className="text-3xl font-bold" onClick={handleAdultDecrement}>-</button>
                            <input type="text" className="w-16 text-center" value={noOfAdt}  onChange={handleChangeAdult}/>
                            <button className="text-2xl font-bold"  onClick={handleAdultIncrement}>+</button>
                        </div>
                    </div>

                    <div className="flex justify-between mb-2">
                        <div>
                            <label className="block font-bold text-gray-500">Childrens</label>
                            <p className="block text-gray-400 text-xm">5 years - under 12 years</p>
                        </div>
                        <div className="flex items-center">
                            <button className="text-3xl font-bold" onClick={handleChildrenDecrement}>-</button>
                            <input type="text" className="w-16 text-center " value={noOfChildren}  onChange={handleChangeChildren}/>
                            <button className="text-2xl font-bold" onClick={handleChildrenIncrement}>+</button>
                        </div>
                    </div>

                    <div className="flex justify-between mb-2">
                        <div>
                            <label className="block font-bold text-gray-500">Kids</label>
                            <p className="block text-gray-400 text-xm">2 years - under 5 years</p>
                        </div>
                        <div className="flex items-center">
                            <button className="text-3xl font-bold" onClick={handleKidsDecrement}>-</button>
                        <input type="text" className="w-16 text-center " value={noOfKids} onChange={handleChangeKids}/>
                            <button className="text-2xl font-bold" onClick={handleKidsIncrement}>+</button>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <label className="block font-bold text-gray-500">Infent</label>
                            <p className="block text-gray-400 text-xm">
                                below 2 years</p>
                        </div>
                        <div className="flex items-center">
                            <button className="text-3xl font-bold" onClick={handleInfentDecrement}>-</button>
                            <input type="text" className="w-16 text-center " value={noOfInfent} onChange={handleChangeInfent} />
                            <button className="text-2xl font-bold" onClick={handleInfentIncrement}>+</button>
                        </div>
                    </div>
                        </div>
                        
                    )
                }
                        

        <div>

        
          <MultiPart/>

          
        
            <ul>
                {items.map((item, index) => (
                    <div className='flex '>
                      <div key={index}>{item}</div>

                      
                      {index > 0 && (
                <button
                  className='text-center bg-white text-red-700 w-[100px] h-[50px] flex items-center justify-center cursor-pointer border-black border-[2px]'
                  onClick={() => deleteItem(index)}
                >
                  Delete
                </button>
              )}
                      
                    </div>
                ))}
            </ul>

            <div>
              <button className='flex ms-auto mt-2 bg-white px-5 py-1' onClick={addItem}>Add Item</button>
            </div>

        </div>
                          
                       
                          
                        
                        



                        {/* From Dropdown */}
                        {isFromInputFocused && fromList.length > 0 && (
                            <div className='h-[500px] w-[400px] bg-red-500 absolute top-[60px] left-[0px] rounded-lg  overflow-y-scroll'>
                                <div className=''>
                                    {fromList.map((e, id) => (
                                        <div 
                                            onClick={() => handleFromSelect(e)} 
                                            className='bg-[#F0F8FF] mb-1 hover:bg-[#68afec] px-3 py-2' 
                                            key={id}
                                        >
                                            <div className='bg-[#FFFFFF] py-2 ps-3 pe-5 border rounded-lg overflow-hidden'>
                                                <div className='flex justify-between items-center'>
                                                    <div>
                                                        <p className='mb-2 text-[#6B6A69] text-sm font-light font-noto'>{e.cityName}</p>
                                                        <p className='mb-1 text-base font-semibold text-black font-noto'>{e.airportName}</p>
                                                    </div>
                                                    <p className='text-[#6B6A69] text-sm font-light font-noto'>{e.airportCode}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* To Dropdown */}
                        {isToInputFocused && toList.length > 0 && (
                            <div className='h-[500px] w-[400px] bg-blue-500 absolute top-[60px] left-[258px] rounded-lg  overflow-scroll'>
                                <div className=''>
                                    {toList.map((e, id) => (
                                        <div 
                                            onClick={() => handleToSelect(e)} 
                                            className='bg-[#F0F8FF] mb-1 hover:bg-[#68afec] px-3 py-2' 
                                            key={id}
                                        >
                                            <div className='bg-[#FFFFFF] py-2 ps-3 pe-5 border rounded-lg overflow-hidden'>
                                                <div className='flex justify-between items-center'>
                                                    <div>
                                                        <p className='mb-2 text-[#6B6A69] text-sm font-light font-noto'>{e.cityName}</p>
                                                        <p className='mb-1 text-base font-semibold text-black font-noto'>{e.airportName}</p>
                                                    </div>
                                                    <p className='text-[#6B6A69] text-sm font-light font-noto'>{e.airportCode}</p>
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

export default Multicity