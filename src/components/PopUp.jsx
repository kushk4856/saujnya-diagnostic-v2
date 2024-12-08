/* eslint-disable react/prop-types */
import Modal from "./ModalTEmplate";
import bannerPopup from "../assets/images/banner-popup-1.png";

const PopUp = ({ isOpen, setIsOpen }) => {
  return (
    <div className="">
      {/* <button
        onClick={() => setIsOpen(true)}
        className="button-gradient rounded px-4 py-2 text-red-600"
      >
        Privacy & Policy
      </button> */}

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="How Can We Assist You"
      >
        <div className="space-y-6 ">
          <section className="flex justify-between px-12 ">
            <div className="img">
              <img src={bannerPopup} alt="" />
            </div>
          </section>
          <section className="flex justify-between px-12 ">
            <label htmlFor="name " className="text-lg text-primary">
              Name
            </label>
            <input
              type="text"
              className=" px-3 py-1 border rounded-full border-primary text-base h-8 w-[170px]"
              placeholder="Enter Your Name"
            />
          </section>
          <section className="flex justify-between px-12 ">
            <label htmlFor="name" className="text-lg text-primary">
              Mobile No.
            </label>
            <input
              type="text"
              className=" px-3 py-1 border rounded-full border-primary text-base h-8 w-[170px]"
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
