import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <>
      <div className="w-full flex flex-col lg:justify-center items-start lg:items-center mb-[150px] lg:mb-[185px]">
        <h1 className="mx-9 lg:mx-0 font-raleway font-bold lg:text-center text-3xl lg:text-[42px] mb-12 lg:mb-[100px]">
          How can we help?
        </h1>

        <div className="grid grid-cols-2 mx-auto gap-x-4 gap-y-7 lg:flex lg:gap-5 items-center ">
          <div className="border border-[#cccccc] w-[160px] lg:w-[238px] h-[160px] lg:h-[238px] flex flex-col items-center rounded-3xl hover:shadow-xl hover:shadow-black/20 transition-all delay-75 duration-200 ease-in-out">
            <img
              className="lg:mt-11 mt-8 lg:w-16 w-8 "
              src={assets.demo_icon}
              alt="demo"
            />
            <p className="mt-4 text-center font-raleway font-normal text-[#4A4A4A] lg:text-[22px] text-[16px] flex flex-col leading-7">
              Schedule a
              <span className="font-bold text-[#F31524] text-[18px] lg:text-[26px]">
                Demo
              </span>
            </p>
          </div>
          <div className="border border-[#cccccc] w-[160px] lg:w-[238px] h-[160px] lg:h-[238px] flex flex-col items-center rounded-3xl hover:shadow-xl hover:shadow-black/20 transition-all delay-75 duration-200 ease-in-out">
            <img
              className="lg:mt-11 mt-8 lg:w-[54px] w-8 "
              src={assets.quote_icon}
              alt="quote"
            />
            <p className="mt-4 text-center font-raleway font-normal text-[#4A4A4A] lg:text-[22px] text-[16px] flex flex-col leading-7">
              Request a
              <span className="font-bold text-[#F31524] text-[18px] lg:text-[26px]">
                Quote
              </span>
            </p>
          </div>
          <div className="border border-[#cccccc] w-[160px] lg:w-[238px] h-[160px] lg:h-[238px] flex flex-col items-center rounded-3xl hover:shadow-xl hover:shadow-black/20 transition-all delay-75 duration-200 ease-in-out">
            <img
              className="lg:mt-11 mt-8 lg:w-[68px] w-8 "
              src={assets.sample_icon}
              alt="sample"
            />
            <p className="mt-4 text-center font-raleway font-normal text-[#4A4A4A] lg:text-[22px] text-[16px] flex flex-col leading-7">
              Send us a
              <span className="font-bold text-[#F31524] text-[18px] lg:text-[26px]">
                Sample
              </span>
            </p>
          </div>
          <div className="border border-[#cccccc] w-[160px] lg:w-[238px] h-[160px] lg:h-[238px] flex flex-col items-center rounded-3xl hover:shadow-xl hover:shadow-black/20 transition-all delay-75 duration-200 ease-in-out">
            <img
              className="lg:mt-11 mt-8 lg:w-16 w-8 "
              src={assets.ticket_icon}
              alt="query"
            />
            <p className="mt-4 text-center font-raleway font-normal text-[#4A4A4A] lg:text-[22px] text-[16px] flex flex-col leading-7">
              Raise your
              <span className="font-bold text-[#F31524] text-[18px] lg:text-[26px]">
                Query
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full lg:h-[35vh] h-[25vh] bg-black">
        <div className="h-fit lg:w-[80%] w-[90%] bg-[#F31524] shadow-xl shadow-black/80 flex flex-col justify-center lg:flex-row items-center lg:justify-evenly py-[27px] lg:py-[54px] px-[25px] lg:px-[39px] rounded-tl-[50px] rounded-br-[50px] rounded-tr-md rounded-bl-md absolute -top-[7vh] md:-top-[5vw] lg:-top-[7vw] xl:-top-[6vw] right-[5vw] lg:right-[10vw]">
          <p className="w-full mr-5 text-center font-raleway font-bold text-[15px] lg:text-[26px] mb-[13px] lg:mb-0 text-white ">
            Subscribe To Our Newsletter & Stay Updated
          </p>

          <div className="flex items-center rounded-full w-full relative shadow-xl shadow-black/30">
            <label className="sr-only" htmlFor="subscribe">
              Email
            </label>
            <input
              type="email"
              id="subscribe"
              name="subscribe"
              autoComplete="off"
              placeholder="Your Email"
              className=" w-full pl-[22px] lg:pl-[46px] pr-[240px] lg:pr-[340px] py-[12px] lg:py-[16px] bg-[#ffffff] rounded-full font-raleway font-medium text-black text-base placeholder:font-raleway placeholder:font-medium placeholder:text-[#e2e2e2] placeholder:text-[14px] lg:placeholder:text-base focus:outline-none shadow-inner shadow-black/5"
            />
            <button className=" py-[13px] lg:py-[16px] px-[36px] lg:px-[40px] rounded-full bg-[#232323] text-white text-[15px] lg:text-[18px] font-raleway absolute font-semibold top-0 -right-2">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className=" w-full h-full flex items-center justify-center lg:items-center lg:pr-[10vw] lg:justify-end pt-[7rem] lg:mt-[157px] lg:mb-[40px]">
          <img src={assets.laser_technologies_white} alt="logo" />
        </div>
      </div>
    </>
  );
}
