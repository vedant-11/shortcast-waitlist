import Navbar from "../components/Navabar";
import React, { useState, useEffect } from "react";
import back from "../assets/bg.png";
import HowItWorks from "../components/HowItWorks";
import Image from "next/image";
import Head from "next/head";
import Footer from "../components/Footer";

import Timer from "../components/Timer";

export default function Home() {
  return (
    <>
      <Head>
        <title>BEAT waitlist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className=" flex flex-col  justify-center items-center w-full h-screen">
        <div className="w-full h-screen  float-left z-0 relative m-1.5 overflow-hidden mt-10  ">
          <Image src={back} layout={"fill"} />
        </div>
        <div className="z-10 absolute bg-transparent justify-center items-center w-full flex flex-col ">
          <h1 className=" herofont font-bold text-center text-8xl w-3/4 overflow-hidden bg-transparent sm:text-5xl sm:w-80 ">
            THE FUTURE OF MUSIC IS HERE
          </h1>
          <p className=" poppins font-normal  my-10 text-xl bg-transparent sm:text-lg sm:text-center  ">
            connecting artists with their fans like never before
          </p>
          <Timer />
        </div>
      </div>
      <div className=" h-screen flex flex-row items-center justify-around mx-24 sm:flex-col sm:mx-5 sm:justify-evenly">
        <div className="w-96">
          <p className="text-center mb-16 poppins font-medium text-2xl ">
            Artists
          </p>
          <h1 className="font-semibold herofont text-5xl overflow-hidden text-center">
            Regain artistic freedom
          </h1>
        </div>
        <div className="w-80 mt-16">
          <p className="text-center mb-16 poppins font-medium text-2xl  ">
            Fans
          </p>
          <h1 className=" h-40 font-semibold herofont text-5xl overflow-hidden text-center">
            Own your favorite song
          </h1>
        </div>
      </div>
      <HowItWorks />
      <Footer />
    </>
  );
}
