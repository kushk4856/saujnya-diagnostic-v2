import { IoCallOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";

const TopHeader = () => {
  return (
    <div className="top_upper w-full hidden lg:block">
      <div className="font-robot relative bg-primary px-20 py-1 text-[14px] font-normal text-white">
        <div className="skew-bg_top relative"></div>
        <div className="inner-top_header flex-between m-auto max-w-[1200px]">
          <div className="left-top_header flex-between z-20">
            <div className="call flex-between px-3">
              <IoCallOutline className="size-[20px] font-semibold" />
              <p>+1 (044) 123 456 789</p>
            </div>
            <div className="email flex-between left-border px-3">
              <IoMdMail className="size-[20px] font-semibold" />
              <p>info@travon.com</p>
            </div>
            <div className="address flex-between left-border px-3">
              <CiLocationOn className="size-[20px] font-semibold" />
              <p>Jaina Tower-I, DC, New Delhi, India</p>
            </div>
          </div>
          <div className="right-top_header"></div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
