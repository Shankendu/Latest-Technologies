/* eslint-disable react/prop-types */
import { assets } from "../assets/assets";

export default function Toast(props) {
  return (
    <>
      <div
        className={`${props.className} w-full flex items-center justify-center h-screen z-50 `}
      >
        <div className="w-[60%] h-fit bg-[#232323] flex flex-col items-center justify-between pt-10 relative shadow-2xl shadow-black/70">
          <div className="flex flex-col justify-center items-center pb-10">
            <img className="pt-5 w-10" src={assets.checked} alt="" />
            <h1 className="pb-5 pt-3 text-center font-raleway font-bold text-2xl text-white">
              Form is submitted successfully.
            </h1>
          </div>

          <div className="absolute w-[100%] bg-[#F31524] h-1 animate-progress bottom-0 left-0"></div>
        </div>
      </div>
    </>
  );
}
