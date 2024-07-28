import React from 'react'
import BookForm from "../../../components/bookFlights/BookForm";
import PassengerInfo from "../../../components/bookFlights/PassengerInfo";

const bookFlights = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-[120px] py-10 text-[#282828]">
      <PassengerInfo />
      <BookForm />
    </div>
  );
}
export default bookFlights;