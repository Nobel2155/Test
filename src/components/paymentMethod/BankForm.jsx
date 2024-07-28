import { useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { TiAttachment } from "react-icons/ti";

const BankForm = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };
  return (
    <form className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center items-start gap-10">
      <div className="space-y-3 w-full">
        <div className="flex items-start gap-1 flex-col">
          <label>Account number*</label>
          <input
            className="p-2 px-3 outline-none focus:ring focus:ring-blue-500 border rounded-md w-full"
            placeholder="Enter your account number"
            type="text"
            name=""
          />
        </div>
        <div className="flex items-start gap-1 flex-col">
          <label>Branch*</label>
          <input
            className="p-2 px-3 outline-none focus:ring focus:ring-blue-500 border rounded-md w-full"
            placeholder="Enter your branch name"
            type="text"
            name=""
          />
        </div>
        <div className="flex items-start gap-1 flex-col">
          <label>Routing Number*</label>
          <input
            className="p-2 px-3 outline-none focus:ring focus:ring-blue-500 border rounded-md w-full"
            placeholder="Enter your routing number"
            type="text"
            name=""
          />
        </div>
      </div>
      <div>
        <div className="flex items-start gap-1 flex-col">
          <label>Amount*</label>
          <input
            className="p-2 px-3 outline-none focus:ring focus:ring-blue-500 border rounded-md w-full"
            placeholder="Enter your amount"
            type="text"
            name=""
          />
        </div>
        <div
          onDrop={handleDrop}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          className={`border-2 h-auto border-dashed w-full px-5 py-5 rounded-lg flex flex-col items-center justify-center my-3 ${
            isDragging ? "bg-gray-200" : "bg-white"
          } cursor-pointer relative`}
        >
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 rounded-lg h-28">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <>
              <div className="relative">
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                  onChange={handleDrop}
                  multiple
                />
                <button
                  className="py-1 px-4 bg-black text-white flex items-center gap-2 rounded-md"
                  // onClick={handleDrop}
                >
                  <TiAttachment fontSize={"1.5rem"} /> Choose file
                </button>
              </div>
              <label className="w-full h-full flex flex-col items-center justify-center">
                <IoMdCloudUpload className="" fontSize="5rem" />
                <h1 className="text-xl font-[400] text-[16px] ">
                  Drag & Drop file here
                </h1>
              </label>
            </>
          )}
        </div>
      </div>
      <button className="bg-[#00703E] w-64 mx-auto lg:col-span-2 md:col-span-2 text-white px-4 py-2 rounded-md">
        Pay Now
      </button>
    </form>
  );
};

export default BankForm;
