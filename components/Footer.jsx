import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col h-screen justify-end ">
      <div className="mx-24 my-20 sm:my-32 overflow-hidden h-80 sm:mx-5">
        <h1 className="text-5xl overflow-y-hidden herofont font-semibold">
          Interested?
        </h1>
        <p className="my-8">Join our waitist to be updated</p>
        <input
          type="email"
          placeholder="please enter your email"
          className=" sm:border-r-2 poppins font-medium rounded-r-none sm:rounded-r border-r-0 sm:w-80 h-10 rounded text-[#868E96] px-4 border-2 border-[#495057] w-96 bg-[#212529]"
        />
        <button
          type="submit"
          className=" font-medium sm:rounded-l sm:mt-8 poppins rounded rounded-l-none w-40 bg-[#F8F9FA] text-[#192024] h-10"
        >
          Join the waitlist
        </button>
      </div>
      <div className="flex overflow-hidden h-40 bg-[#161B22] justify-between items-center sm:flex-col sm:justify-evenly sm:items-start ">
        <span className="text-3xl font-bold  overflow-hidden bg-[#161B22] mx-24 sm:mx-5 sm:text-3xl poppins font-semibold ">
          Beat
        </span>
        <span className="bg-[#161B22] mx-24 poppins font-medium sm:mx-5 sm:text-md">
          Lorem ipsum dolor amet
        </span>
      </div>
    </div>
  );
};

export default Footer;
