'use client'
import React, { useEffect, useState } from 'react'


const MultiPart = () => {
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
          const newItem = `Itemmm ${items.length + 1}`;
          setItems([...items, newItem]);
      };
  return (
    <div className='flex gap-x-2'>
                            <input 
                                className='h-[50px] w-[250px]  border-black border-[2px] ps-[15px]' 
                                type="text" 
                                placeholder='FROM' 
                                value={fromAirportName} 
                                onChange={(e) => handleFromChange(e.target.value)} 
                                onFocus={handleFromFocus}
                                onClick={handleFromFocus} // Fetch data on click
                                onBlur={handleFromBlur}
                            />
                            <input 
                                className='h-[50px] w-[250px]  border-black border-[2px]  ps-[15px]' 
                                type="text" 
                                placeholder='TO' 
                                value={toAirportName} 
                                onChange={(e) => handleToChange(e.target.value)}
                                onFocus={handleToFocus}
                                onClick={handleToFocus} // Fetch data on click
                                onBlur={handleToBlur}
                            />

                            

                            <div >
                            
                            </div>
                            <input 
                                type="date" 
                                value={departureDate} 
                                onChange={handleDateChange} 
                                className='h-[50px] w-[150px]  border-black border-[2px]' 
                            />
                            {/* <p 
                                className='text-center bg-white text-green-700 w-[150px] flex items-center justify-center cursor-pointer' 
                                onClick={handleSearch}
                            >
                                Submit
                            </p> */}
                        </div>
  )
}

export default MultiPart
