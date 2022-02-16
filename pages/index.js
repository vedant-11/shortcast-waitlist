import Navbar from "../components/Navabar";
import back from "../assets/bg.png";
import HowItWorks from "../components/HowItWorks";
import Image from "next/image";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" flex flex-col  justify-center items-center w-full h-screen">
        <div className="w-full h-screen  float-left z-0 relative m-1.5 overflow-hidden mt-10  ">
          <Image src={back} layout={"fill"} />
        </div>
        <div className="z-10 absolute bg-transparent justify-center items-center w-full flex flex-col ">
          <h1 className=" herofont font-bold text-center text-8xl w-1/2 overflow-hidden bg-transparent sm:text-5xl sm:w-80 ">
            The future of music is here
          </h1>
          <p className=" poppins font-normal  my-10 text-xl bg-transparent sm:text-lg sm:text-center  ">
            connecting artists with their fans like never before.
          </p>
          <button className="poppins font-medium rounded bg-[#F8F9FA] text-[#192024] w-40 h-10 hover:bg-[#C9C9C9] ">
            Enter the future
          </button>
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
