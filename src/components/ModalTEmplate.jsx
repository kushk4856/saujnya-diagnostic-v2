/* eslint-disable react/prop-types */

import closeIcon from "../assets/images/close.svg";

const Modal = ({ isOpen, onClose, title, children }) => {
  //   useEffect(() => {
  //     if (isOpen) {
  //       document.body.style.overflow = "hidden";
  //     } else {
  //       document.body.style.overflow = "unset";
  //     }
  //     return () => {
  //       document.body.style.overflow = "unset";
  //     };
  //   }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop with fade */}
      <div
        className={`fixed inset-0 z-[99] bg-black/30 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-[999] overflow-y-auto overflow-x-hidden">
        <div className="flex  items-center justify-center h-full p-4">
          {/* Modal Content with fade and slide */}
          <div
            className={`relative flex w-full max-w-[450px] transform flex-col rounded-lg bg-white shadow-lg transition-all duration-300 ${
              isOpen ? "modal_animation opacity-100" : "opacity-0"
            }`}
          >
            {/* Fixed Header */}
            <div className="flex flex-shrink-0 items-center justify-center border-b px-8 py-4">
              <h2 className="text-xl  font-medium text-primary">{title}</h2>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center absolute -top-4 -right-4 justify-center rounded-full bg-primary text-white hover:bg-primary focus:outline-none"
              >
                <img src={closeIcon} alt="" className="size-3" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className=" px-8 py-4">{children}</div>

            {/* Fixed Footer */}
            <div className="flex flex-shrink-0 justify-center  p-6">
              <button
                onClick={onClose}
                className="rounded-full text-xl bg-primary px-14 py-2 text-white hover:bg-primary focus:outline-none"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
