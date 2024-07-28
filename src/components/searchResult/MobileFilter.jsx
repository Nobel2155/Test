"use client"
const { default: Image } = require("next/image");
const { IoChevronDownSharp } = require("react-icons/io5");
const { MdClose } = require("react-icons/md");
import bg from "../../assets/searchResult/bg.png";
import group1 from "../../assets/searchResult/group1.png";
import group2 from "../../assets/searchResult/group2.png";
import group3 from "../../assets/searchResult/group3.png";
import group4 from "../../assets/searchResult/group4.png";

const MobileFilter = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-full bg-white z-50 transition-all duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b bg-white">
        <h3 className="text-xl font-medium">Filters</h3>
        <button type="button" onClick={() => setIsOpen(false)}>
          <MdClose size={24} className="text-gray-500 hover:text-gray-700" />
        </button>
      </div>
      <div className="px-5 overflow-y-auto h-full">
        <div className="flex items-center justify-between text-lg font-semibold">
          <p>Share</p>
          <p>Reset</p>
        </div>
        <div className="border rounded-md h-auto p-2">
          <p className="text-lg font-semibold">Airlines</p>
          <div className="flex items-center justify-between py-3">
            <div className="border flex items-center gap-2 bg-gray-200 w-36 px-2 rounded-md">
              <div className="bg-white px-2 py-1">
                <Image width={20} height={20} src={bg} alt="" />
              </div>
              <div>
                <h1 className="font-semibold">BG</h1>
                <p>BDT 34,299</p>
              </div>
            </div>
            <div className="border flex items-center gap-2 bg-gray-200 w-36 px-2 rounded-md">
              <div className="bg-white px-2 py-1">
                <Image width={20} height={20} src={bg} alt="" />
              </div>
              <div>
                <h1 className="font-semibold">BG</h1>
                <p>BDT 34,299</p>
              </div>
            </div>
          </div>
          <p className="text-center flex items-center gap-2 justify-center">
            See All <IoChevronDownSharp />
          </p>
          <hr className="my-2" />
          <div className="py-5">
            <p className="text-lg font-semibold">Price Range</p>
            <input className="w-full" max={5000} type="range" name="price" />
            <div className="flex items-center justify-between">
              <p>0</p>
              <p>5000</p>
            </div>
          </div>
          <hr className="my-2" />
          <div>
            <p className="text-lg font-semibold">
              Departure Time From Rajshahi
            </p>
            <div className="pt-2 space-y-1">
              <div className="text-[#525252] font-semibold flex items-center gap-1">
                <input type="checkbox" name="" id="" />{" "}
                <Image className="pb-1" src={group1} alt="" /> Morning
                06:00-11:59
              </div>
              <div className="text-[#525252] font-semibold flex items-center gap-1">
                <input type="checkbox" name="" id="" />{" "}
                <Image width={20} height={20} src={group2} alt="" /> Afternoon
                06:00-11:59
              </div>
              <div className="text-[#525252] font-semibold flex items-center gap-1">
                <input type="checkbox" name="" id="" />{" "}
                <Image
                  width={20}
                  height={20}
                  className="pb-2"
                  src={group3}
                  alt=""
                />{" "}
                Evening 06:00-11:59
              </div>
              <div className="text-[#525252] font-semibold flex items-center gap-1">
                <input type="checkbox" name="" id="" />{" "}
                <Image
                  width={20}
                  height={20}
                  className="w-6"
                  src={group4}
                  alt=""
                />{" "}
                Last Night 06:00-11:59
              </div>
            </div>
            <hr className="my-2" />
            <p className="text-lg font-semibold">
              Number of Stops (Dhaka-Dubai)
            </p>
            <div className="pt-2 space-y-1">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" /> Non Stop
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" /> 1 Stop
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" /> 2 Stop
              </div>
            </div>
            <hr className="my-2" />
            <div className="flex items-center justify-between">
              <p className="font-semibold">Departing from</p>
              <p className="font-semibold">Arriving at</p>
            </div>
            <div className="pt-2 flex items-center justify-between">
              <div className="border w-20">
                <select name="" id="">
                  <option value="DAC">DAC</option>
                  <option value="DAC">DAC</option>
                  <option value="DAC">DAC</option>
                </select>
              </div>
              <div className="border w-20">
                <select name="" id="">
                  <option value="DAC">DAC</option>
                  <option value="DAC">DAC</option>
                  <option value="DAC">DAC</option>
                </select>
              </div>
            </div>
            <hr className="my-2" />
            <p className="font-semibold">Refundable / Non Refundable</p>
            <div className="pt-2 space-y-1">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" /> Partically Refundable
                (103)
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" /> Non Refundable (95)
              </div>
            </div>
            <hr className="my-2" />
            <p className="font-semibold">Baggage Allowance</p>
            <div className="pt-2 space-y-1">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" /> 40KG ($20)
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" /> 35KG ($44)
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" /> 67KG ($52)
              </div>
            </div>
            <hr className="my-2" />
            <p className="font-semibold">Transit Time in (Dhaka-Dubai)</p>
            <div className="pt-2 space-y-1">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" /> No Transit Time (44)
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" /> Less Than Five Hours
                (49)
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" /> More Than Fifteen Hours
                (47)
              </div>
            </div>
            <div className="text-center pb-12">
              <button className="px-4 py-2 bg-[#00703E] active:scale-95 duration-200 active:bg-[#0b5a37] text-white font-semibold rounded-lg my-5">
                Search By Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFilter;