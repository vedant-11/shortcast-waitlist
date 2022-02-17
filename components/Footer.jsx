import React, { useState } from "react";

const Footer = () => {
  return (
    <div className="flex flex-col h-screen justify-end ">
      <div className="mx-24 my-20 sm:my-32 overflow-hidden h-80 sm:mx-5">
        <h1 className="text-5xl overflow-y-hidden herofont font-semibold">
          Interested?
        </h1>

        <p className="my-8">Join our waitist to be updated</p>

        <a href="https://airtable.com/shrTTFlTlO3xnARGN">
          <button className=" font-medium sm:rounded-l sm:mt-8 poppins rounded  w-40 bg-[#F8F9FA] text-[#192024] h-10">
            Join the waitlist
          </button>
        </a>
      </div>
      <div className="flex flex-col overflow-hidden h-40 bg-[#161B22] justify-between items-center sm:flex-col sm:justify-evenly sm:items-center ">
        <div className=" flex overflow-hidden w-screen h-40 bg-[#161B22] justify-between items-center sm:flex-col sm:justify-evenly sm:items-center">
          <span className="text-3xl font-bold  overflow-hidden bg-[#161B22] mx-24 sm:mx-5 sm:text-3xl poppins font-semibold ">
            BEAT
          </span>
          <button className="bg-[#161B22] mx-24 poppins font-medium sm:mx-5 sm:text-md">
            FAQ
          </button>
        </div>
        <a href="https://short-cast.club">
          <button className="mb-4 poppins">A part of SHORTCAST</button>
        </a>
      </div>
    </div>
  );
};

export default Footer;
