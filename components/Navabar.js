import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row mt-8  w-screen justify-between">
      <span className="text-3xl font-bold  mx-24 ">Beat</span>
      <button className="bg-[#F8F9FA] text-[#192024] w-40 h-10 rounded-md mx-24">
        Join the waitlist
      </button>
    </div>
  );
};

export default Navbar;
