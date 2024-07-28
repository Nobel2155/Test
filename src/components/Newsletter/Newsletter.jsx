const Newsletter = () => {
  return (
    <div className="px-4">
      <div className="bg-[#00703E] rounded-md inline-block lg:flex-row flex-col items-center justify-center gap-3 lg:px-10 md:px-10 px-5 mx-auto py-2">
        <div className="flex items-center justify-center lg:flex-row md:flex-col flex-col lg:gap-5">
          <div className="flex-shrink-0 text-center">
            <h1 className="text-lg text-white">Subscribe Now!</h1>
          </div>
          <div className="rounded-2xl py-1 px-1 flex gap-2 w-full md:w-auto justify-center items-center flex-grow">
            <div className="relative flex items-center w-full md:w-80">
              <input
                type="text"
                className="input input-bordered rounded-full w-full pr-32 py-3 px-3 text-black"
                placeholder="Write your email here..."
              />
              <button className="absolute right-2 md:right-1 badge bg-gradient-to-b from-[#00703E] to-[#009D4D] text-white py-2 px-4 rounded-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
