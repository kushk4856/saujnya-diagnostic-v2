import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import formBg from "../assets/images/contact-form-bg.svg";
import contactImg1 from "../assets/images/saujnya-diagnostic-contact-img-1.webp";
import contactImg2 from "../assets/images/saujnya-diagnostic-contact-img-2.webp";

const ContactUsFormSection = () => {
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
    <div className="contact_form max-container">
      {/* -------form section -------- */}
      <div className="flex lg:gap-10 lg:flex-row flex-col items-center  justify-between">
        <div className="contact flex flex-col lg:w-1/2 lg:gap-3 bg-white  rounded-[40px]   ">
          <p className="text-primary font-montserrat font-medium">
            Contact Form
          </p>
          <h3 className="text-black font-montserrat font-bold text-4xl">
            Get in touch with us
          </h3>
          <div className="form_text lg:mb-5">
            <p className="text-[#555574] text-base font-openSans ">
              Fill out the form below to request your Test appointment. We’ll
              confirm your time and send you a reminder.
            </p>
          </div>
          <form className=" lg:mt-6 " onSubmit={handleSubmit}>
            <div className="row_flex flex lg:flex-row flex-col">
              <div className="form-group lg:w-1/2 lg:px-2  mb-6">
                <input
                  ref={nameRef}
                  type="text"
                  className="form-control  custom-shadow-2  w-full text-base"
                  id="name"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="form-group lg:w-1/2 lg:px-2  mb-6">
                <input
                  ref={emailRef}
                  type="email"
                  className="form-control custom-shadow-2  w-full text-sbase"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="form-group lg:w-1/2 lg:px-2  mb-6">
                <input
                  ref={pohoneRef}
                  type="tel"
                  className="form-control custom-shadow-2  w-full text-base "
                  id="number"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
            <div className="row_flex flex lg:flex-row flex-col">
              <div className="form-group lg:w-full lg:px-2  mb-6">
                <input
                  type="text"
                  ref={addressRef}
                  className="form-control  custom-shadow-2 w-full text-base"
                  id="address"
                  placeholder="Enter Your Location"
                ></input>
              </div>
            </div>
            <div className="form-group lg:w-full lg:px-2  mb-6">
              <h5
                htmlFor="message"
                className="text-primary py-2 text-lg font-semibold"
              >
                Write Your Test or Query
              </h5>
              <textarea
                ref={messageRef}
                className="form-control custom-shadow-2 placeholder:py-4 h-auto w-full text-base"
                placeholder="Write Your message..."
                id="message"
                rows="6"
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

        <div className="relative px-6">
          <img src={formBg} alt="" />
          <div className="package_img absolute -top-16 custom-shadow-3 -left-7 overflow-hidden rounded-[35px] w-[50%] h-[400px] ">
            <img
              src={contactImg1}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="package_img absolute -bottom-10 custom-shadow-3 -right-7 overflow-hidden rounded-[35px] w-[50%] h-[400px] ">
            <img
              src={contactImg2}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsFormSection;
