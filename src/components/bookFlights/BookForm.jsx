"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Airlines from "./Airlines";
import Paragraph from "./Paragraph";
import Title from "./Title";
import baggage from "@/assets/bookFlights/baggage.png";
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setPassengerData } from '../../redux/authSlice';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import config from '../../config';

const BookForm = () => {

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

  const [loading, setLoading] = useState(false);
  const handleBookNow = async (e) => {
    e.preventDefault();
  
    // Validate the form
    const hasErrors = Object.keys(formData).some(field => {
      validateField(field, formData[field]);
      return formData[field].trim() === '' || formErrors[field];
    });
  
    if (hasErrors) {
      toast.warning("Please fill in all the required fields.");
      return;
    }
    setLoading(true);
  
    // Post data if validation passes
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };
  
    try {
      const response = await fetch(`${config.apiUrl}/api/users`, requestOptions);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // console.log('Data:', data);
      dispatch(setPassengerData(data)); // Dispatch the action to store data in Redux
  
      // Store form data in sessionStorage
      // Object.keys(formData).forEach(key => {
      //   sessionStorage.setItem(key, formData[key]);
      // });
  
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
    } finally {
      setLoading(false); // Set loading to false when the request is complete
    }
  };
  
     
  const handleChange = (e) => {
    const { name, value } = e.target; // name: 'givenName', value: 'Jane'
    setFormData(prevState => ({
      ...prevState, // copies { givenName: 'John', surName: 'Doe', DOB: '1990-01-01', passportNumber: '123456789', passportEx: '2030-01-01', region: 'USA' }
      [name]: value // updates givenName: 'Jane'
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
      // Add more cases for other fields
      case 'surName':
        if (value.trim() === '') {
          error = 'Last Name is required';
        }
        break;
      // Add more cases for other fields
      case 'DOB':
        if (value.trim() === '') {
          error = 'Date of Birth is required';
        }
        break;
      // Add more cases for other fields
      case 'passportNumber':
        if (value.trim() === '') {
          error = 'Passport Number is required';
        }
        break;
        // Add more cases for other fields
      case 'passportEx':
        if (value.trim() === '') {
          error = 'Passport Expiration Date is required';
        }
        break;
      // Add more cases for other fields
      case 'email':
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          error = 'Invalid email address';
        }
        break;
      // Add more cases for other fields
      case 'phone':
        if (value.trim() === '') {
          error = 'Phone Number is required';
        }
        break;
      // Add more cases for other fields
      case 'region':
        if (value.trim() === '') {
          error = 'region is required';
        }
        break;
      // Add more cases for other fields
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

  return (
    <form onSubmit={handleBookNow}>
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
      <div className="flex flex-col-reverse lg:flex-row justify-between items-start">
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
              <label>Passport number (Optional)</label>
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
          </div>
        </div>
        <div className="w-full md:max-w-[400px] rounded-xl p-4 border border-[#E9E8FC] lg:flex flex-col gap-1">
          <Airlines />
          <hr />
          <Airlines />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="max-w-[660px] flex flex-col gap-4 lg:gap-[30px]">
          {/* <div className="flex flex-col gap-4]">
            <Title title="Frequent Flyer" />
            <div className="text-base flex flex-col gap-2 w-full sm:w-[260px]">
              <label>Frequent Flyer*</label>
              <input
                className="py-3 px-[14px] w-full rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1 required:border-red-500"
                type="text"
                placeholder="Frequent Flyer Number"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <Title title="Emergency contact information" />
            <div className="flex gap-1 items-center text-base w-full sm:w-[260px]">
              <input
                className="w-4 h-4 bg-stone-500 "
                type="checkbox"
                name=""
                id=""
              />
              <span>Same as Passenger 1</span>
            </div>

            <div className="flex flex-wrap gap-5">
              <div className="text-base flex flex-col gap-2 w-full sm:w-[260px]">
                <label>Given Name*</label>
                <input
                  className="py-3 px-[14px] w-full rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                  type="text"
                  placeholder="Ex: John"
                  required
                />
              </div>
              <div className="text-base flex flex-col gap-2 w-full sm:w-[260px]">
                <label>Surname*</label>
                <input
                  className="py-3 px-[14px] w-full rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1 "
                  type="text"
                  placeholder="Ex: Jimmy"
                  required
                />
              </div>
              <div className="text-base flex flex-col gap-2 w-full sm:w-[260px]">
                <label>Phone*</label>
                <input
                  className="py-3 px-[14px] w-full rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                  type="text"
                  placeholder="Ex: 123456789"
                  required
                />
              </div>
              <div className="text-base flex flex-col gap-2 w-full sm:w-[260px]">
                <label>Email*</label>
                <input
                  className="py-3 px-[14px] w-full rounded border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                  type="text"
                  placeholder="Write your email here..."
                  required
                />
              </div>
            </div>
          </div> */}
          <div className="flex gap-5 flex-col">
            <Title title="Additional information" />
            <Paragraph width="full">
              Each passenger is allowed one free carry-on bag and one personal
              item. First checked bag for each passenger is also free.Second bag
              check fees are waived for loyalty program members.See the{" "}
              <a className="text-[#039BE6] cursor-pointer" href="#">
                full bag policy.
              </a>
            </Paragraph>
            <div className="flex flex-col gap-3 w-full sm:max-w-80 text-base">
              <div className="flex justify-between items-center">
                <span>Passenger 1</span>
                <span>Checked bags </span>
              </div>
              <div className="flex justify-between items-center">
                <span>First Last</span>
                <div className="flex items-center border rounded-md p-1">
                  <button
                    type="button"
                    className="px-2 text-lg semibold border-r"
                    onClick={decrement}
                  >
                    -
                  </button>
                  <input
                    value={count}
                    type="text"
                    readOnly
                    className="w-12 text-green-500 text-center text-lg border-none outline-none"
                  />
                  <button
                    type="button"
                    className="px-2 text-lg semibold border-l"
                    onClick={increment}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Title title="Payment information" />
              <div className="w-full sm:max-w-[285px] text-base flex flex-col gap-[10px] pt-5">
                <div className="flex justify-between items-center">
                  <h2>Total Ticket</h2>
                  <span>$2,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <h2>Extra Bags</h2>
                  <span>$0</span>
                </div>
                <div className="flex justify-between items-center">
                  <h2>Taxes & Fees</h2>
                  <span>$30</span>
                </div>
                <hr />
                <div className="flex justify-between items-center">
                  <h2>Total</h2>
                  <span>$2,030</span>
                </div>
              </div>
            </div>
            <div className="text-base font-normal flex gap-9">
              <button
                type="submit" 
                className={`py-2 px-7 border rounded text-white w-40 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00703E] hover:bg-green-700'}`}
                disabled={loading}
              >
                 {loading ? <Spinner /> : 'Buy Now'}  
              </button>
              {/* <button
                type="button"
                className="py-2 px-7 border rounded border-gray-100 hover:bg-[#00703E] hover:text-white transition duration-300"
              >
                Choose Seats
              </button> */}
            </div>
          </div>
        </div>
      <Image className='hidden lg:hidden' src={baggage} alt="Baggage" />
      </div>
    </form>
  );
}

export default BookForm;
 