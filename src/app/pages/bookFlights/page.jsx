import React from 'react'
import BookForm from "../../../components/bookFlights/BookForm";
import PassengerInfo from "../../../components/bookFlights/PassengerInfo";
import Airliens from "@/components/bookFlights/Airlines";

const bookFlights = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-[120px] py-10 text-[#282828]">
      <PassengerInfo />
      <BookForm />
      <Airliens/>
    </div>
  );
}
export default bookFlights;