import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import { contactFormSchema } from "../schemas";
import Toast from "./Toast";

export default function ContactForm() {
  const [verified, setVerified] = useState(false);
  const [alert, setAlert] = useState(false)
  const catRef = useRef();

  function onChange() {
    setVerified(!verified);
  }

  const initialValues = {
    name: "",
    organisation_name: "",
    contact_number: "",
    email: "",
    remark: "",
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: contactFormSchema,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
        catRef.current.reset();
        setVerified(false);
        setAlert(true)
        setTimeout(() => {
          setAlert(false)
        }, 5000);
      },
    });
  return (
    <div className="relative">
      {alert ? <Toast className={`absolute bottom-0 lg:-top-[100%] right-0`} />: null }
      <div className="mt-5 lg:mt-[80px] mx-9 lg:mx-[135px] flex flex-col lg:flex-row justify-between items-center h-fit mb-32 lg:mb-[150px]">
        {/* Form-Left */}
        <div className="w-full lg:w-[50%] h-fit lg:my-[50px] py-8 lg:py-16 px-8 lg:px-12 bg-black rounded-tl-[50px] rounded-br-[50px] rounded-tr-lg rounded-bl-lg text-white lg:mr-24">
          <h2 className="mb-5 font-raleway font-bold text-3xl lg:text-5xl w-full">
            Get in touch
          </h2>
          <p className="font-raleway font-medium text-lg w-full lg:pr-10">
            Need our expertise for choosing your next laser machine?
          </p>
        </div>

        {/* Form-Right */}
        <div className="lg:w-[50%] w-full h-fit mt-12 lg:mt-0">
          <p className="mb-6 font-raleway font-medium text-base text-[#969696]">
            Fill out the form to get a free consultation.
          </p>
          <form className="flex flex-col gap-5 ">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 w-full">
              <div className="flex flex-col w-full">
                <label className="sr-only" htmlFor="name">
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  autoComplete="off"
                  placeholder="Your Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className=" w-full px-5 py-4 bg-[#F4F4F4] active:bg-[#F4F4F4] rounded-md font-raleway font-medium text-black text-base placeholder:font-raleway placeholder:font-medium placeholder:text-[#BDBDBD] placeholder:text-base focus:outline-none shadow-inner shadow-black/5 "
                />
                {errors.name && touched.name ? (
                  <p className="text-xs font-raleway text-red-600 font-semibold p-[2px]">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col w-full">
                <label className="sr-only" htmlFor="Organisation">
                  Organisation Name
                </label>
                <input
                  type="text"
                  id="Organisation"
                  name="organisation_name"
                  value={values.organisation_name}
                  autoComplete="off"
                  placeholder="Organisation Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className=" w-full px-5 py-4 bg-[#F4F4F4] rounded-md font-raleway font-medium text-black text-base placeholder:font-raleway placeholder:font-medium placeholder:text-[#BDBDBD] placeholder:text-base focus:outline-none shadow-inner shadow-black/5"
                />
                {errors.organisation_name && touched.organisation_name ? (
                  <p className="text-xs font-raleway text-red-600 font-semibold p-[2px]">
                    {errors.organisation_name}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 w-full">
              <div className="flex flex-col w-full">
                <label className="sr-only" htmlFor="contact">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact_number"
                  value={values.contact_number}
                  autoComplete="off"
                  placeholder="Contact Number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className=" w-full px-5 py-4 bg-[#F4F4F4] rounded-md font-raleway font-medium text-black text-base placeholder:font-raleway placeholder:font-medium placeholder:text-[#BDBDBD] placeholder:text-base focus:outline-none shadow-inner shadow-black/5"
                />
                {errors.contact_number && touched.contact_number ? (
                  <p className="text-xs font-raleway text-red-600 font-semibold p-[2px]">
                    {errors.contact_number}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col w-full">
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  autoComplete="off"
                  placeholder="Email ID"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className=" w-full px-5 py-4 bg-[#F4F4F4] rounded-md font-raleway font-medium text-black text-base placeholder:font-raleway placeholder:font-medium placeholder:text-[#BDBDBD] placeholder:text-base focus:outline-none shadow-inner shadow-black/5"
                />
                {errors.email && touched.email ? (
                  <p className="text-xs font-raleway text-red-600 font-semibold p-[2px]">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 w-full h-full">
              <div className="flex flex-col w-full">
                <label className="sr-only" htmlFor="remark">
                  Remark
                </label>
                <textarea
                  id="remark"
                  name="remark"
                  value={values.remark}
                  autoComplete="off"
                  placeholder="Remark"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className=" w-full h-44 px-5 py-4 bg-[#F4F4F4] rounded-md font-raleway font-medium text-black text-base placeholder:font-raleway placeholder:font-medium placeholder:text-[#BDBDBD] placeholder:text-base focus:outline-none shadow-inner shadow-black/5 break-all resize-none overflow-auto md:shrink-0"
                />
                {errors.remark && touched.remark ? (
                  <p className="text-xs font-raleway text-red-600 font-semibold p-[2px]">
                    {errors.remark}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col w-[47%]">
                <div className="flex flex-col gap-5 lg:gap-8 justify-between items-start">
                  <div className="lg:scale-[0.55] xl:scale-[0.67] origin-top-left ">
                    <ReCAPTCHA
                      sitekey="6Lc-yPYpAAAAAE4jkVh-OQmpiV7M62U2HJlp9n5R"
                      onChange={onChange}
                      ref={catRef}
                    />
                  </div>
                  <div>
                    <button
                      disabled={!verified}
                      onClick={handleSubmit}
                      onSubmit={handleSubmit}
                      type="submit"
                      className="font-raleway font-semibold bg-black hover:bg-[#232323] text-white w-fit text-base px-8 py-2 rounded-md"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
