import { FaArrowRightLong } from "react-icons/fa6";
import { banks } from "@/components/paymentMethod/BankConstant";

const BankList = ({ handleGetBankFormData }) => {
  return (
    <form className="space-y-2">
      {banks.map((bankName) => (
        <div
          key={bankName}
          className="border rounded-md"
          onClick={() => handleGetBankFormData(bankName)}
        >
          <div className="py-2 px-5 flex items-center justify-between cursor-pointer">
            <span>{bankName}</span>
            <span>
              <FaArrowRightLong color="#282828" size={"1.5rem"} />
            </span>
          </div>
        </div>
      ))}
    </form>
  );
};


export default BankList;
