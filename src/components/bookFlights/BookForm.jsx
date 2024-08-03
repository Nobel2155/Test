"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Airlines from "./Airlines";
import Paragraph from "./Paragraph";
import Title from "./Title";
import baggage from "@/assets/bookFlights/baggage.png";
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setPassengerData } from '../../redux/authSlice';
import { useSelector } from 'react-redux';

const BookForm = () => {
  const revalidateData = useSelector((state) => state.auth.revalidateData);
  console.log(revalidateData);
  
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: '',
    givenName: '',
    surName: '',
    DOB: '',
    passportNumber: '',
    passportEx: '',
    phone: '',
    email: '',
    region: ''
  });

  const [formErrors, setFormErrors] = useState({
    title: '',
    givenName: '',
    surName: '',
    DOB: '',
    passportNumber: '',
    passportEx: '',
    phone: '',
    email: '',
    region: ''
  });

  const handleBookNow = async (e) => {
    e.preventDefault();
  
    // Validate the form
    const hasErrors = Object.keys(formData).some(field => {
      validateField(field, formData[field]);
      return formData[field].trim() === '' || formErrors[field];
    });
  
    if (hasErrors) {
      alert("Please fill in all the required fields.");
      return;
    }
  
    // Post data if validation passes
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };
  
    try {
      const response = await fetch('https://hamsfly-server-v1-0-0.onrender.com/api/users', requestOptions);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch(setPassengerData(data)); // Dispatch the action to store data in Redux
  
      // Reset form state
      setFormData({
        title: '',
        givenName: '',
        surName: '',
        DOB: '',
        passportNumber: '',
        passportEx: '',
        phone: '',
        email: '',
        region: ''
      });
  
      // Navigate to confirmation page
      router.push('/pages/confirmPage');
    } catch (error) {
      console.error('Error:', error); 
      // Handle error, show message, retry, etc.
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    validateField(name, value);
  };

  // validation 
  const validateField = (fieldName, value) => {
    let error = '';

    switch (fieldName) {
      case 'givenName':
        if (value.trim() === '') {
          error = 'First name is required';
        }
        break;
      case 'surName':
        if (value.trim() === '') {
          error = 'Last Name is required';
        }
        break;
      case 'DOB':
        if (value.trim() === '') {
          error = 'Date of Birth is required';
        }
        break;
      case 'passportNumber':
        if (value.trim() === '') {
          error = 'Passport Number is required';
        }
        break;
      case 'passportEx':
        if (value.trim() === '') {
          error = 'Passport Expiration Date is required';
        }
        break;
      case 'email':
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          error = 'Invalid email address';
        }
        break;
      case 'phone':
        if (value.trim() === '') {
          error = 'Phone Number is required';
        }
        break;
      case 'region':
        if (value.trim() === '') {
          error = 'Region is required';
        }
        break;
      default:
        break;
    }

    setFormErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: error
    }));
  };

  // count baggage
  const [count, setCount] = useState(1);
  const increment = () =>{
    setCount(count + 1);
  };

  const decrement = () =>{
    setCount(count > 1 ? count - 1 : 1);
  };

  const [internationalFlight, setInternationalFlight] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [kids, setKids] = useState(0);
  const [infants, setInfants] = useState(0);

  useEffect(() => {
    const storedInternationalFlight = localStorage.getItem('internationalFlight');
    const storedAdults = localStorage.getItem('adults');
    const storedChildren = localStorage.getItem('children');
    const storedKids = localStorage.getItem('kids');
    const storedInfants = localStorage.getItem('infants');
    setInternationalFlight(storedInternationalFlight === 'true');
    setAdults(parseInt(storedAdults - 1) || 0);
    setChildren(parseInt(storedChildren) || 0);
    setKids(parseInt(storedKids) || 0);
    setInfants(parseInt(storedInfants) || 0);
  }, []);

  const passengerForm = (index, type) => (
    <div className="py-[30px] w-[660px]" key={index}>
      <Title title={`Passenger ${index + 1} (${type})`} />
      <div className="pt-[30px] flex gap-2 flex-col">
        <Title title="Select Title*" />
        <div className="flex gap-[10px]">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="title"
              value="Mr"
              className="hidden peer"
              onChange={handleChange}
              checked={formData.title === 'Mr'}
            />
            <div className="peer-checked:border-blue-500 peer-checked:text-blue-500 p-2 border border-gray-300 rounded-lg text-[#BABABA] text-base">
              Mr
            </div>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="title"
              value="Mrs"
              className="hidden peer"
              onChange={handleChange}
              checked={formData.title === 'Mrs'}
            />
            <div className="peer-checked:border-blue-500 peer-checked:text-blue-500 p-2 border border-gray-300 rounded-lg text-[#BABABA] text-base">
              Mrs
            </div>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="title"
              value="Ms"
              className="hidden peer"
              onChange={handleChange}
              checked={formData.title === 'Ms'}
            />
            <div className="peer-checked:border-blue-500 peer-checked:text-blue-500 p-2 border border-gray-300 rounded-lg text-[#BABABA] text-base">
              Ms
            </div>
          </label>
        </div>
      </div>
      <div className="pt-5 flex flex-wrap gap-5">
        
        <div className="text-base flex flex-col gap-2 w-full sm:w-[260px]"> 
          <label>Given Name*</label>
          <input
            className={`py-3 px-[14px] w-full rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1 ${formErrors.givenName && 'focus:ring-red-500'}`}
            type="text"
            placeholder="Ex: John"
            onChange={handleChange}
            name="givenName"
            value={formData.givenName}
            required
          />
          {formErrors.givenName && (
            <span className="text-red-500">{formErrors.givenName}</span>
          )}
        </div>
        <div className="text-base flex flex-col gap-2  w-full sm:w-[260px]">
          <label>Surname*</label>
          <input
            className={`py-3 px-[14px] w-full rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1 ${formErrors.surName && 'focus:ring-red-500'}`}
            type="text"
            placeholder="Ex: Jimmy"
            onChange={handleChange}
            name="surName"
            value={formData.surName}
            required
          />
          {formErrors.surName && (
            <span className="text-red-500">{formErrors.surName}</span>
          )}
        </div>
        <div className="text-base flex flex-col gap-2  w-full sm:w-[260px]">
              <label>Date of Birth*</label>
              <input
                className={`py-3 px-[14px] w-full rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1 ${formErrors.DOB && 'focus:ring-red-500'}`}
                type="date"
                placeholder="DD-MM-YYYY"
                onChange={handleChange}
                name="DOB"
                value={formData.DOB}
                required
              />
              {formErrors.DOB && (
                <span className="text-red-500">{formErrors.DOB}</span>
              )}
        </div>
        <div className="text-base flex flex-col gap-2  w-full sm:w-[260px]">
              <label>Region*</label>
              <input
                className={`py-3 px-[14px] w-full rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1 ${formErrors.phone && 'focus:ring-red-500'}`}
                type="text"
                placeholder="region"
                onChange={handleChange}
                name="region"
                value={formData.region}
                required
              />
              {formErrors.region && (
                <span className="text-red-500">{formErrors.region}</span>
              )}
        </div>

        {
          internationalFlight && (
            <div className='flex flex-wrap gap-5'>
              <div className="text-base flex flex-col gap-2  w-full sm:w-[260px]">
                <label>Passport number*</label>
                <input
                  className={`py-3 px-[14px] w-full rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1 ${formErrors.passportNumber && 'focus:ring-red-500'}`}
                  type="text"
                  placeholder="Passport Number"
                  onChange={handleChange}
                  name="passportNumber"
                  value={formData.passportNumber}
                  required
                />
                {formErrors.passportNumber && (
                  <span className="text-red-500">{formErrors.passportNumber}</span>
                )}
              </div>
              <div className="text-base flex flex-col gap-2  w-full sm:w-[260px]">
                <label>Passport Expire Date*</label>
                <input
                  className={`py-3 px-[14px] w-full rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1 ${formErrors.passportEx && 'focus:ring-red-500'}`}
                  type="date"
                  onChange={handleChange}
                  name="passportEx"
                  value={formData.passportEx}
                  required
                />
                {formErrors.passportEx && (
                  <span className="text-red-500">{formErrors.passportEx}</span>
                )}
              </div>
            </div>
          )
        }
      </div>
    </div>
  );

  return (
    <form onSubmit={handleBookNow}>
      <div className='flex flex-col-reverse lg:flex-row justify-between items-start'>
      <div className="">
        <div>
        <div className="pt-[30px] flex gap-2 flex-col">
        <Title title="Select Title*" />
        <div className="flex gap-[10px]">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="title"
              value="Mr"
              className="hidden peer"
              onChange={handleChange}
              checked={formData.title === 'Mr'}
            />
            <div className="peer-checked:border-blue-500 peer-checked:text-blue-500 p-2 border border-gray-300 rounded-lg text-[#BABABA] text-base">
              Mr
            </div>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="title"
              value="Mrs"
              className="hidden peer"
              onChange={handleChange}
              checked={formData.title === 'Mrs'}
            />
            <div className="peer-checked:border-blue-500 peer-checked:text-blue-500 p-2 border border-gray-300 rounded-lg text-[#BABABA] text-base">
              Mrs
            </div>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="title"
              value="Ms"
              className="hidden peer"
              onChange={handleChange}
              checked={formData.title === 'Ms'}
            />
            <div className="peer-checked:border-blue-500 peer-checked:text-blue-500 p-2 border border-gray-300 rounded-lg text-[#BABABA] text-base">
              Ms
            </div>
          </label>
        </div>
      </div>
        <div className="py-[30px] w-[660px]">
          <Title title="Passenger 1 (Adult)" />
          <div className="pt-5 flex flex-wrap gap-5">
            <div className="text-base flex flex-col gap-2 w-full sm:w-[260px]"> 
              <label>Given Name*</label>
              <input
                className={`py-3 px-[14px] w-full rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1 ${formErrors.givenName && 'focus:ring-red-500'}`}
                type="text"
                placeholder="Ex: John"
                onChange={handleChange}
                name="givenName"
                value={formData.givenName}
                required
              />
              {formErrors.givenName && (
                <span className="text-red-500">{formErrors.givenName}</span>
              )}
            </div>
            <div className="text-base flex flex-col gap-2  w-full sm:w-[260px]">
              <label>Surname*</label>
              <input
                className={`py-3 px-[14px] w-full rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1 ${formErrors.surName && 'focus:ring-red-500'}`}
                type="text"
                placeholder="Ex: Jimmy"
                onChange={handleChange}
                name="surName"
                value={formData.surName}
                required
              />
              {formErrors.surName && (
                <span className="text-red-500">{formErrors.surName}</span>
              )}
            </div>
            <div className="text-base flex flex-col gap-2  w-full sm:w-[260px]">
              <label>Date of Birth*</label>
              <input
                className={`py-3 px-[14px] w-full rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1 ${formErrors.DOB && 'focus:ring-red-500'}`}
                type="date"
                placeholder="DD-MM-YYYY"
                onChange={handleChange}
                name="DOB"
                value={formData.DOB}
                required
              />
              {formErrors.DOB && (
                <span className="text-red-500">{formErrors.DOB}</span>
              )}
            </div>
            <div className="text-base flex flex-col gap-2  w-full sm:w-[260px]">
              <label>Region*</label>
              <input
                className={`py-3 px-[14px] w-full rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1 ${formErrors.phone && 'focus:ring-red-500'}`}
                type="text"
                placeholder="region"
                onChange={handleChange}
                name="region"
                value={formData.region}
                required
              />
              {formErrors.region && (
                <span className="text-red-500">{formErrors.region}</span>
              )}
            </div>
            <div className="text-base flex flex-col gap-2  w-full sm:w-[260px]">
              <label>Passport number*</label>
              <input
                className={`py-3 px-[14px] w-full rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1 ${formErrors.passportNumber && 'focus:ring-red-500'}`}
                type="text"
                placeholder="Passport Number"
                onChange={handleChange}
                name="passportNumber"
                value={formData.passportNumber}
                required
              />
              {formErrors.passportNumber && (
                <span className="text-red-500">{formErrors.passportNumber}</span>
              )}
            </div>
            <div className="text-base flex flex-col gap-2  w-full sm:w-[260px]">
              <label>Passport Expire Date*</label>
              <input
                className={`py-3 px-[14px] w-full rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1 ${formErrors.passportEx && 'focus:ring-red-500'}`}
                type="date"
                onChange={handleChange}
                name="passportEx"
                value={formData.passportEx}
                required
              />
              {formErrors.passportEx && (
                <span className="text-red-500">{formErrors.passportEx}</span>
              )}
            </div>
            <div className="text-base flex flex-col gap-2  w-full sm:w-[260px]">
              <label>Email*</label>
              <input
                className={`py-3 px-[14px] w-full rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1 ${formErrors.email && 'focus:ring-red-500'}`}
                type="email"
                placeholder="Write your email here..."
                onChange={handleChange}
                name="email"
                value={formData.email}
                required
              />
              {formErrors.email && (
                <span className="text-red-500">{formErrors.email}</span>
              )}
            </div>
            <div className="text-base flex flex-col gap-2  w-full sm:w-[260px]">
              <label>Phone number*</label>
              <input
                className={`py-3 px-[14px] w-full rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1 ${formErrors.phone && 'focus:ring-red-500'}`}
                type="number"
                placeholder="Write your Phone number"
                onChange={handleChange}
                name="phone"
                value={formData.phone}
                required
              />
              {formErrors.phone && (
                <span className="text-red-500">{formErrors.phone}</span>
              )}
            </div>
            

            
          </div>
        </div>
        </div>
        {[...Array(adults)].map((_, index) => passengerForm(index+1, "Adult"))}
        {[...Array(children)].map((_, index) => passengerForm(index+1 + adults, "Child"))}
        {[...Array(kids)].map((_, index) => passengerForm(index+1 + adults + children, "Kid"))}
        {[...Array(infants)].map((_, index) => passengerForm(index+1 + adults + children + kids, "Infant"))}
      </div>
      <div>
        <div className="w-full md:max-w-[400px] rounded-xl p-4 border border-[#E9E8FC] lg:flex flex-col gap-1">
            {/* <Airlines /> */}
            <hr />
            </div>
      </div>
      </div>
      <button type="submit" className="mt-5 px-4 py-2 bg-blue-500 text-white rounded">
        Book Now
      </button>
    </form>
  );
}

export default BookForm;
