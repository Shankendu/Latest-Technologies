import { assets } from "../assets/assets";

export default function Map() {
  return (
    <>
      <div className="relative mb-10 lg:mb-[100px]">
        <iframe
          className=""
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4482.338540464517!2d73.00449732355362!3d19.143491007818827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1718174681066!5m2!1sen!2sin"
          width="100%"
          height="650"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div
          className="absolute top-0 left-0 w-fit h-fit
         mt-10 lg:mt-32 mx-9 lg:mx-[135px] bg-black/75 rounded-tl-[50px] rounded-br-[50px] rounded-tr-md rounded-bl-md text-white shadow-lg shadow-black/20"
        >
          <div className="py-12 lg:py-16 px-7 lg:px-14 ">
            <h1 className="font-raleway font-bold text-[25px] lg:text-4xl">
              Headquarters office
            </h1>
            <div className="w-full h-1 rounded-full bg-white mt-2"></div>
            <p className="font-raleway font-medium text-[20px] lg:text-2xl mt-5 mb-4">
              Laser Technologies Pvt Ltd
            </p>
            <p className="font-raleway font-normal text-[15px] lg:text-base">
              PAP/R/406 Rabale MIDC Near Dol Electric <br /> Company Rabale
              MIDC, Navi Mumbai - 400701.
            </p>
            <p className="font-raleway font-normal text-[15px] lg:text-base mt-[10px] ">Landline - 022 4131 0099</p>
            <div className="mt-[10px] flex items-center">
                <img className="w-[35px] mr-[10px]" src={assets.google_map2} alt="google map" />
                <a className="font-raleway font-normal text-[15px] lg:text-base" target="_blank" href="https://maps.app.goo.gl/dhWL27CZXSDPk4NS9">Google map Link</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
