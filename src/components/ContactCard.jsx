import { FaMapMarked } from "react-icons/fa";

const ContactCard = () => {
  return (
    <div className="lg:w-1/3 w-full md:w-1/2 p-4">
      <div
        style={{ background: "linear-gradient(45deg, transparent, #1a73e8b0)" }}
        className="contact_card rounded-3xl hover:before:top-0 hover:before:rounded-none cursor-pointer custom-shadow-2 space-y-5 p-8 relative  group z-10 "
      >
        <div className="icon">
          <FaMapMarked
            size={50}
            className="text-primary group-hover:text-white transition-all duration-500"
          />
        </div>
        <div className="title">
          <h3 className="font-semibold group-hover:text-white transition-all duration-300 font-montserrat text-xl">
            Address
          </h3>
        </div>
        <div className="text-para group-hover:text-white transition-all duration-300 text-base font-openSans">
          <p>
            A-31, Shish Ram Park, Uttam Nagar, <br /> New Delhi - 110059
          </p>
          <p>9911494935</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
