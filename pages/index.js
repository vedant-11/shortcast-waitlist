import Navbar from "../components/Navabar";
import back from "../assets/bg.png";
import HowItWorks from "../components/HowItWorks";
import Image from "next/image";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" bg-[url('/bg.png')] flex flex-col  justify-center items-center w-full h-screen">
        <h1 className=" herofont font-bold text-center text-8xl w-1/2 overflow-hidden">
          The future of music is here
        </h1>
        <p className=" poppins font-normal  my-10 text-xl">
          connecting artists with their fans like never before.
        </p>
        <button className="poppins font-medium rounded bg-[#F8F9FA] text-[#192024] w-40 h-10">
          Enter the future
        </button>
      </div>
      <div className=" h-screen flex flex-row items-center justify-around mx-24">
        <div className="w-96">
          <p className="text-center mb-16 poppins font-medium text-2xl ">
            Artists
          </p>
          <h1 className="font-semibold herofont text-5xl overflow-hidden text-center">
            Regain artistic freedom
          </h1>
        </div>
        <div className="w-80">
          <p className="text-center mb-16 poppins font-medium text-2xl ">
            fans
          </p>
          <h1 className=" font-semibold herofont text-5xl overflow-hidden text-center">
            Own your favorite song
          </h1>
        </div>
      </div>
      <HowItWorks />
      <Footer />
    </>
  );
}
