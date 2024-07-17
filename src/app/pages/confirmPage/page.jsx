import PassengerDetails from "../../../components/confirmPage/PassengerDetails";
import PaymentInformation from "../../../components/confirmPage/PaymentInformation";
import TravelingDetails from "../../../components/confirmPage/TravelingDetails";
import Link from "next/link";

const Confirm = () => {
  return (
    <div className="lg:max-w-[1200px] w-full lg:mx-auto md:mx-auto mx-auto py-10 mt-8">
      <div className="flex lg:items-start md:items-center items-center lg:flex-row md:flex-col flex-col gap-5 lg:mx-5 md:mx-5 mx-5">
        <div className="w-full lg:w-auto md:w-auto">
          <TravelingDetails />
          <PassengerDetails />
          <div className="lg:hidden md:block block w-full mx-auto">
            <PaymentInformation />
          </div>
          <Link href="/pages/paymentMethod">
            <button className="bg-[#00703E] h-[46px] text-white font-[500] text-[20px] w-full rounded-md mt-10">
              Continue
            </button>
          </Link>
        </div>
        <div className="lg:block md:hidden hidden w-[350px] mx-auto">
          <PaymentInformation />
        </div>
      </div>
    </div>
  );
};

export default Confirm;
