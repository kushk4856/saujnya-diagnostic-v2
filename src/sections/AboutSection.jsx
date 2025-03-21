// import btnArrow from "../assets/images/btn-arrow.png";
import { NavLink } from "react-router-dom";
import aboutImg1 from "../assets/images/about-1.jpg";
import aboutImg2 from "../assets/images/about-2.jpg";

const AboutSection = () => {
  return (
    <section className="lg:py-24 lg:px-6 px-4 py-4 relative bg-[#e7eff0]">
      <div className="patter_layer layer_1"></div>
      <div className="patter_layer layer_2"></div>
      <div className="max-container flex gap-7 lg:gap-0 flex-col lg:flex-row  m-auto">
        <div className="flex w-full  lg:w-1/2">
          <div className="content_block mt-6 lg:mr-6">
            <div className="title_content mb-2 lg:mb-6">
              <span>Laboratory</span>
              <h2 className="font-bold text-2xl lg:text-[48px] font-palanquin leading-[1.3]">
                Saujnya Diagnostic: Accurate Pathology Testing in Uttam Nagar,
                Delhi
              </h2>
            </div>
            <div className="text_box lg:mb-11">
              <p className="lg:mb-2 mb-2 font-medium lg:text-base text-sm text-[#6A6A6A] leading-[26px] font-openSans">
                Welcome to{" "}
                <span className="font-semibold text-primary">
                  Saujnya Diagnostic
                </span>
                , a state-of-the-art medical lab specializing in accurate and
                reliable diagnostic testing. We analyze blood, urine, tissues,
                and more, covering all pathology categories like Hematology,
                Immunology, Microbiology, Molecular Testing, and Biochemistry.
              </p>
              <p className="lg:mb-2 mb-2 font-medium lg:text-base text-sm text-[#6A6A6A] leading-[26px] font-openSans">
                With advanced technology and skilled professionals, we ensure
                precise and timely results. Located in Uttam Nagar, our
                diagnostic center is known for exceptional service and expert
                pathologists.
              </p>
              <p className="lg:mb-4 mb-4 font-medium lg:text-base text-sm text-[#6A6A6A] leading-[26px] font-openSans">
                Choose Saujnya Diagnostic for trusted and efficient healthcare
                support.
              </p>
              <ul className="list_style_one  list-none">
                <li className="font-montserrat about_list_style">
                  Choose the most suitable diagnostic packages
                </li>
                <li className="font-montserrat about_list_style">
                  Receive detailed and accurate reports
                </li>
              </ul>
            </div>
            <div className="about_btn py-2 text-center lg:text-justify">
              <NavLink
                to="/test-package"
                className="theme_btn bg-primary font-montserrat "
              >
                Book an Appointment
                {/* <img src={btnArrow} alt="" /> */}
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2">
          <div className="image_block_2 w-full">
            <div className="inner_image relative">
              <div className="patters_with_img">
                <div className="pattern_img1"></div>
                <div className="pattern_img2"></div>
              </div>
              <div className="imgs flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 px-4">
                  <div className="img_box">
                    <figure className="img mb-7">
                      <img
                        src={aboutImg1}
                        alt="aboutImg"
                        className="aboutImg"
                      />
                    </figure>
                    <div className="experience_box md:min-h-[134px]">
                      <div className="inner pl-28 font-openSans  py-1 relative">
                        <h2 className="bg-[#cecee9] experience_box_h2">
                          25
                          <span>Years</span>
                        </h2>
                        <h3 className="font-montserrat text-base md:text-2xl font-medium">
                          of Excellence in Diagnostic Services
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <figure className="img lg:pt-24 mt-4">
                    <img src={aboutImg2} alt="aboutImg" className="aboutImg" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
