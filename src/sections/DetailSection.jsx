import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

import { detailBg } from "../assets";

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
    <div className="flex flex-col pt-10 lg:flex-row w-full ">
      <div className="img w-full lg:w-1/2 ">
        <img src={detailBg} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="contact pl-10 pr-32 w-full lg:w-1/2">
        <div className="heading">
          <h3 className="text-3xl text-primary font-openSans font-semibold custom-underline before:bg-primary before:h-[4px] before:w-1/4 pb-3">
            Book Appointment
          </h3>
          <p className="pt-4 font-semibold">
            If you have any question or query feel free to conact with us
          </p>
        </div>
        <form className="for" onSubmit={handleSubmit}>
          <div className="form-group">
            <h5
              htmlFor="name"
              className="text-primary py-2 text-lg font-semibold"
            >
              Name
            </h5>
            <input
              ref={nameRef}
              type="text"
              className="form-control w-full text-sm"
              id="name"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <h5
              htmlFor="email"
              className="text-primary py-2 text-lg font-semibold"
            >
              Email
            </h5>
            <input
              ref={emailRef}
              type="email"
              className="form-control w-full text-sm"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <h5
              htmlFor="number"
              className="text-primary py-2 text-lg font-semibold"
            >
              Phone Number
            </h5>
            <input
              ref={pohoneRef}
              type="tel"
              className="form-control w-full text-sm "
              id="number"
              placeholder="Enter phone number"
            />
          </div>
          <div className="form-group">
            <h5
              htmlFor="address"
              className="text-primary py-2 text-lg font-semibold"
            >
              address
            </h5>
            <textarea
              ref={addressRef}
              className="form-control w-full text-sm"
              id="address"
              rows="1"
            ></textarea>
          </div>
          <div className="form-group">
            <h5
              htmlFor="message"
              className="text-primary py-2 text-lg font-semibold"
            >
              Write Your Test or Query
            </h5>
            <textarea
              ref={messageRef}
              className="form-control w-full text-sm"
              id="message"
              rows="3"
            ></textarea>
          </div>
          <button className="btn bg-primary font-montserrat font-semibold uppercase text-white p-2 px-4 text-lg rounded-lg hover:bg-white hover:text-primary border-4 border-primary transition-all duration-300 ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
