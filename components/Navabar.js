import React from "react";

const Navbar = () => {
  return (
    <div className=" z-50 shadow-cyan-500/50 flex flex-row mt-8 items-center  w-screen justify-between fixed top-[-34px] h-20 left-0 right-0">
      <span className="text-3xl font-bold  ml-24 overflow-hidden poppins font-semibold ">
        Beat
      </span>
      <button className=" poppins font-regular bg-[#F8F9FA] text-[#192024] w-40 h-10 rounded-md mr-24">
        Join the waitlist
      </button>
    </div>
  );
};

export default Navbar;
