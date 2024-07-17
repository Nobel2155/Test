const NagadForm = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
      <div className="flex flex-col gap-1 w-full">
        <label className="font-[400] text-[16px]" htmlFor="">
          Amount*
        </label>
        <input
          type="text"
          placeholder="Enter your amount"
          className="border border-gray-200 rounded-md w-full py-2 px-4 outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label className="font-[400] text-[16px]" htmlFor="">
          Gateway Charge*
        </label>
        <input
          className="outline-none border border-gray-200 rounded-md w-full py-2 px-4 focus:ring focus:ring-blue-500"
          type="text"
          placeholder="Enter your gateway charge"
        />
      </div>
      <div className="flex flex-col gap-1 w-[]">
        <label className="font-[400] text-[16px]" htmlFor="">
          Total*
        </label>
        <input
          className="outline-none border border-gray-200 rounded-md w-full py-2 px-4 focus:ring focus:ring-blue-500"
          type="text"
          placeholder="Enter your total amount"
        />
      </div>
    </div>
  );
};

export default NagadForm;
