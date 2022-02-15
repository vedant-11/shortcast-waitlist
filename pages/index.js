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
      <div className=" h-screen flex flex-row items-center justify-around mx-24">
        <div className="w-80">
          <p className="text-center mb-16 ">Artists</p>
          <h1 className="text-5xl overflow-hidden text-center">
            Regain artistic freedom
          </h1>
        </div>
        <div className="w-80">
          <p className="text-center mb-16">Fans</p>
          <h1 className="text-5xl overflow-y-hidden text-center ">
            Own your favorite song
          </h1>
        </div>
      </div>
    </>
  );
}
