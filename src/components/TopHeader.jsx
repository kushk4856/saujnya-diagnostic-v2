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
              <p>+91 93184 16590</p>
            </div>
            <div className="email flex-between left-border px-3">
              <IoMdMail className="size-[20px] font-semibold" />
              <p>
                <a href="mailto:saujnyadiagnostic@gmail.com">
                  saujnyadiagnostic@gmail.com
                </a>
              </p>
            </div>
            <div className="address flex-between left-border px-3">
              <CiLocationOn className="size-[20px] font-semibold" />
              <p>
                Rz-56, Pankha Rd, Block C, Mahindra Park, Uttam Nagar, New
                Delhi-59
              </p>
            </div>
          </div>
          <div className="right-top_header"></div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
