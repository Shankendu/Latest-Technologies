import { assets } from "../assets/assets";

export default function Navbar() {
  return (
    <>
      <div className="py-12 lg:py-6 px-9 lg:px-[135px] w-full">
        <img className='pb-6' src={assets.laser_technologies} alt="logo" />
        <p className="hidden lg:block text-right pt-5 font-raleway font-medium text-xs">Home / Contact</p>
      </div>
    </>
  );
}
