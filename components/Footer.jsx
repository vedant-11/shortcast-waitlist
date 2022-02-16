import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col h-screen justify-end ">
      <div className="mx-24 my-20 overflow-hidden h-80">
        <h1 className="text-5xl overflow-y-hidden herofont font-semibold">
          Interested?
        </h1>
        <p className="my-8">Join our waitist to be updated</p>
        <input
          type="email"
          placeholder="please enter your email"
          className=" poppins font-medium rounded-r-none border-r-0 h-10 rounded text-[#868E96] px-4 border-2 border-[#495057] w-96 bg-[#212529]"
        />
        <button
          type="submit"
          className=" font-medium poppins rounded rounded-l-none w-40 bg-[#F8F9FA] text-[#192024] h-10"
        >
          Join the waitlist
        </button>
      </div>
      <div className="flex overflow-hidden h-40 bg-[#161B22] justify-between items-center ">
        <span className="text-3xl font-bold  overflow-hidden bg-[#161B22] mx-24 poppins font-semibold ">
          Beat
        </span>
        <span className="bg-[#161B22] mx-24 poppins font-medium ">
          Lorem ipsum dolor amet
        </span>
      </div>
    </div>
  );
};

export default Footer;
