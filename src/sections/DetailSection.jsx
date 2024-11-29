import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function DetailSection() {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const pohoneRef = useRef(null);
  const addressRef = useRef(null);
  const messageRef = useRef(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY), []);
  // Add these
  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current.value,
        email: emailRef.current.value,
        address: addressRef.current.value,
        number: pohoneRef.current.value,
        message: messageRef.current.value,
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8F8FF]">
      <div className="  max-container py-12 lg:px-0   ">
        {/* ------heading--------- */}
        <div className="flex flex-col lg:flex-row mb-10 ">
          <div className="w-full flex flex-col lg:gap-5 lg:w-1/2 lg:pr-7">
            <div className="uppercase text-primary">Book Your Appointment</div>
            <div className="">
              <h2 className="lg:text-[46px] text-2xl md:text-4xl my-6 text-center md:text-start lg:leading-[55px] font-openSans font-bold">
                Book your Tests online <br /> with Saujnya Diagnostic
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <p className=" leading-7 text-[#555574] font-normal font-openSans text-sm md:text-base">
              Ready to take the next step towards a healthier smile? Use our
              easy online booking system to schedule your dental appointment.
              Simply select a convenient date and time, provide some basic
              information, and we’ll handle the rest.
            </p>
          </div>
        </div>

        {/* -------bottom form-section  */}
        <div className="flex flex-col gap-6 lg:flex-row w-full ">
          {/* ----------left-section  */}
          <div className="img w-full flex flex-col md:flex-row lg:flex-col gap-10 lg:w-[35%] ">
            {/* ---------timing container  */}
            <div className="timin_container shadow-sm text-base font-semibold font-openSans bg-[#0a0b37] text-white p-6 lg:p-10 rounded-[40px] flex md:mx-4 flex-col gap-6">
              <div className="heading">
                <h3 className="lg:pb-6 border-b-[1px] text-xl border-gray-600">
                  Working Hours
                </h3>
              </div>
              <div className="opening_hours lg:mb-4 flex flex-col gap-4">
                <div className="opening_time  flex flex-wrap justify-between">
                  <div className="day mr-2 sm:mr-8 lg:mr-0">
                    Monday To Friday
                  </div>
                  <div className="time">8am - 9pm</div>
                </div>
              </div>
              <div className="opening_hours lg:mb-4 flex flex-col gap-4">
                <div className="opening_time  flex justify-between">
                  <div className="day">Saturday</div>
                  <div className="time">8am - 9pm</div>
                </div>
              </div>
              <div className="opening_hours lg:mb-4  flex flex-col gap-4">
                <div className="opening_time flex justify-between">
                  <div className="day">Sunday</div>
                  <div className="time">8am - 9pm</div>
                </div>
              </div>
            </div>
            {/* ---------call to action container ------------  */}
            <div className="bg-white p-7 shadow-lg lg:shadow-sm rounded-[40px] flex">
              <div className="icon pr-4"></div>
              <div className="text_containt gap-2 text-[#555574] flex flex-col">
                <h3 className="text-base font-normal">
                  We always take care of your Health
                </h3>
                <div>
                  <p className="text-2xl mb-2 font-semibold text-black">
                    24/7 Emergency
                  </p>
                  <p className="text-base font-medium">659-989-698565</p>
                </div>
              </div>
            </div>
          </div>
          {/* -------form section -------- */}
          <div className="contact flex flex-col w-full lg:gap-3 bg-white shadow-xl rounded-[40px] p-6  md:p-12 lg:w-[75%]">
            <div className="form_text lg:mb-5">
              <p className="text-[#555574] text-base font-openSans ">
                Fill out the form below to request your dental appointment.
                We’ll confirm your time and send you a reminder.
              </p>
            </div>
            <form className="  " onSubmit={handleSubmit}>
              <div className="row_flex flex lg:flex-row flex-col">
                <div className="form-group lg:w-1/2 lg:px-2  mb-6">
                  <input
                    ref={nameRef}
                    type="text"
                    className="form-control w-full text-base"
                    id="name"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="form-group lg:w-1/2 lg:px-2  mb-6">
                  <input
                    ref={emailRef}
                    type="email"
                    className="form-control w-full text-sbase"
                    id="email"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>
              <div className="row_flex flex lg:flex-row flex-col">
                <div className="form-group lg:w-1/2 lg:px-2  mb-6">
                  <input
                    ref={pohoneRef}
                    type="tel"
                    className="form-control w-full text-base "
                    id="number"
                    placeholder="Enter Phone Number"
                  />
                </div>
                <div className="form-group lg:w-1/2 lg:px-2  mb-6">
                  <input
                    type="text"
                    ref={addressRef}
                    className="form-control w-full text-base"
                    id="address"
                    placeholder="Enter Your Location"
                  ></input>
                </div>
              </div>
              <div className="form-group lg:w-2/3 lg:px-2  mb-6">
                <h5
                  htmlFor="message"
                  className="text-primary py-2 text-lg font-semibold"
                >
                  Write Your Test or Query
                </h5>
                <textarea
                  ref={messageRef}
                  className="form-control h-auto w-full text-base"
                  id="message"
                  rows="4"
                ></textarea>
              </div>
              <button
                disabled={loading}
                className="btn bg-primary font-montserrat font-semibold uppercase text-white py-3 px-5 text-lg rounded-full hover:bg-white hover:text-primary border-4 border-primary transition-all duration-300 "
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
