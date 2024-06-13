export default function LocationInfo() {
  return (
    <>
      <div className=" mx-6 flex flex-col lg:mx-36 lg:grid lg:grid-cols-6 lg:gap-8 mb-20">
        <div className="relative col-span-2">
          <h1 className="font-raleway font-bold text-[170px] text-[#f4f4f4]">
            M
          </h1>
          <div className="absolute top-[60px] left-[110px] w-[50%] lg:w-[55%]">
            <p className="font-raleway font-bold text-3xl">Mumbai</p>
            <p className="font-raleway font-medium text-base mt-1.5">
              PAP/R/406 Rabale MIDC Near Dol Electric Company Rabale MIDC, Navi
              Mumbai - 400701.
            </p>
          </div>
        </div>
        <div className="relative col-span-2">
          <h1 className="font-raleway font-bold text-[170px] text-[#f4f4f4]">
            P
          </h1>
          <div className="absolute top-[60px] left-[80px] w-[50%] lg:w-[50%]">
            <p className="font-raleway font-bold text-3xl ">Pune</p>
            <p className="font-raleway font-medium text-base mt-1.5">
            &ldquo;S&ldquo; Block, plot No.186, MIDC, Bhosari
.
Pune - 411026
            </p>
          </div>
        </div>
        <div className="relative col-span-2">
          <h1 className="font-raleway font-bold text-[170px] text-[#f4f4f4]">
            G
          </h1>
          <div className="absolute top-[60px] left-[100px] w-[50%] lg:w-[60%]">
            <p className="font-raleway font-bold text-3xl">GUJRAT</p>
            <p className="font-raleway font-medium text-base mt-1.5">
            A-5, GF, Barcelona Multiple Business Campus, Odhav Ring Road Circle, Ahmedabad, Gujarat - 382430
            </p>
          </div>
        </div>
        <div className="relative col-span-2 col-start-2">
          <h1 className="font-raleway font-bold text-[170px] text-[#f4f4f4]">
            D
          </h1>
          <div className="absolute top-[60px] left-[95px] w-[40%] lg:w-[55%]">
            <p className="font-raleway font-bold text-3xl">Delhi</p>
            <p className="font-raleway font-medium text-base mt-1.5">
            S-98 Second Floor Phase-2, Okhla Industrial Area , New Delhi - 110020
            </p>
          </div>
        </div>
        <div className="relative col-span-2 col-start-4">
          <h1 className="font-raleway font-bold text-[170px] text-[#f4f4f4]">
            K
          </h1>
          <div className="absolute top-[60px] left-[95px] w-[50%] lg:w-[60%]">
            <p className="font-raleway font-bold text-3xl mt-1.5">KARNATAKA</p>
            <p className="font-raleway font-medium text-base">
            77/78/B, Janapriya Commercial Complex, Magadi Main Rd, Sunkadakatte, Bengaluru, Karnataka - 560091
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
