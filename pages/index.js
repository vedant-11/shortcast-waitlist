import Navbar from "../components/Navabar";
import back from "../assets/bg.png";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col  justify-center items-center w-full h-screen">
        <h1 className="text-center text-8xl w-[900px] overflow-hidden">
          The future of music is here
        </h1>
        <p className="my-10">
          connecting artists with their fans like never before.
        </p>
        <button className="rounded bg-[#F8F9FA] text-[#192024] w-40 h-10">
          Enter the future
        </button>
      </div>
    </>
  );
}
