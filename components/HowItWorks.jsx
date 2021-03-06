import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import one from "../assets/01.png";
import two from "../assets/02.png";
import three from "../assets/03.png";
import "aos/dist/aos.css";
import AOS from "aos";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mx-24 overflow-hidden sm:mx-5 ">
      <h1 className="h-32 overflow-hidden text-5xl herofont font-semibold ">
        How it works
      </h1>
      <div className="overflow-hidden flex flex-row justify-evenly">
        <div className="overflow-hidden ">
          <div>
            <div className="w-1.5 h-80 rounded-full bg-[#212529] float-left z-0 relative m-1.5  "></div>
            <div className="  w-5 h-5 rounded-full bg-[#212529]  z-10 absolute my-20"></div>
          </div>
          <div className="-my-5 overflow-hidden">
            <div className="w-1.5 h-80 rounded-full bg-[#212529] float-left z-0 relative m-1.5  "></div>
            <div className="  w-5 h-5 rounded-full bg-[#212529] sm:my-64 z-10 absolute my-32 "></div>
          </div>
          <div className="-my-5 overflow-hidden">
            <div className="w-1.5 h-96 sm:h-[750px] rounded-full bg-[#212529] float-left z-0 relative m-1.5  "></div>
            <div className="  w-5 h-5 rounded-full bg-[#212529] sm:my-[420px] z-10 absolute my-48 "></div>
          </div>
        </div>
        <div className="sm:mx-5">
          <div
            className="flex flex-row items-center sm:flex-col-reverse  "
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
          >
            <div className="w-80 mr-10 sm:mx-5 mt-4 sm:text-center">
              <h1 className=" poppins text-7xl overflow-hidden font-bold text-[#161B22]">
                01
              </h1>
              <h1 className=" poppins font-medium text-3xl overflow-hidden my-4">
                Artists launch
              </h1>
              <p className="w-80  poppins font-regular">
                Artists launch new music as a set of limited edition NFTs. These
                are exclusive and uniquely numbered so each fan can showcase
                early support.{" "}
              </p>
            </div>
            <Image src={one} />
          </div>
          <div
            className="flex flex-row items-center my-16 sm:flex-col-reverse"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
          >
            <div className="w-80 mr-10 sm:mx-5 mt-4 sm:text-center">
              <h1 className=" font-bold poppins text-7xl overflow-hidden font-bold text-[#161B22] ">
                02
              </h1>
              <h1 className=" poppins font-medium text-3xl overflow-hidden my-4">
                Value for fans
              </h1>
              <p className="w-80 poppins font-regular">
                BEAT redefines what it means to be the earliest supporter of
                your favorite artist by owning a piece of their new release and
                more additional benefits.
              </p>
            </div>
            <Image src={two} />
          </div>
          <div
            className="flex flex-row items-center sm:flex-col-reverse"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
          >
            <div className="w-80 mr-10 sm:mx-5 mt-4 sm:text-center">
              <h1 className="text-7xl overflow-hidden poppins font-bold text-[#161B22] ">
                03
              </h1>
              <h1 className=" poppins font-medium text-3xl overflow-hidden my-4">
                Build a community
              </h1>
              <p className="w-80  poppins font-regular sm:ml-5 ">
                Music is about bringing us closer together. We enable artists
                and fans to create a close-knit community to collaborate,
                interact, and grow together.
              </p>
            </div>
            <Image src={three} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
