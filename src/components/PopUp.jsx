/* eslint-disable react/prop-types */
import Modal from "./ModalTEmplate";
import bannerPopup from "../assets/images/banner-popup-1.png";

const PopUp = ({ isOpen, onClose }) => {
  return (
    <div className="">
      {/* <button
        onClick={() => setIsOpen(true)}
        className="button-gradient rounded px-4 py-2 text-red-600"
      >
        Privacy & Policy
      </button> */}

      <Modal isOpen={isOpen} onClose={onClose} title="How Can We Assist You">
        <div className="md:space-y-6 space-y-3 ">
          <section className="flex justify-between px-12 ">
            <div className="img">
              <img src={bannerPopup} alt="" />
            </div>
          </section>
          <section className="flex md:justify-between justify-center gap-1  flex-col md:px-12 ">
            {/* <label htmlFor="name " className="text-lg text-primary">
              Name
            </label> */}
            <input
              type="text"
              className=" px-3 py-1 border rounded-full border-primary text-base h-8 "
              placeholder="Enter Your Name"
            />
          </section>
          <section className="flex md:justify-between justify-center  gap-1 flex-col md:px-12 ">
            {/* <label htmlFor="name" className="text-lg text-primary">
              Mobile No.
            </label> */}
            <input
              type="text"
              className=" px-3 py-1 border rounded-full border-primary text-base h-8 "
              placeholder="Phone No."
            />
          </section>

          {/* Additional sections to demonstrate scrolling */}
          {/* {[...Array(5)].map((_, index) => (
        <section key={index}>
          <h3 className="text-sm font-bold text-primary">
            Additional Information {index + 1}
          </h3>
          <p className="text-sm text-text_color">
            This is additional content to demonstrate the scrolling
            behavior of the modal. The header and footer remain fixed
            while this content scrolls.
          </p>
        </section>
      ))} */}
        </div>
      </Modal>
    </div>
  );
};

export default PopUp;
