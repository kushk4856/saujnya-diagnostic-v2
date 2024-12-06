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
              <h2 className="font-bold text-2xl lg:text-[48px] font-palanquin leading-normal">
                We Provide Reliable & High- Quality Clinical Service
              </h2>
            </div>
            <div className="text_box lg:mb-11">
              <p className="lg:mb-7 mb-4 font-medium lg:text-base text-sm text-[#6A6A6A] leading-[26px] font-openSans">
                Laboratory We Provide Reliable & High- Quality Clinical Service
                Welcome to the Labout Rare Chemistry Research Documentation
                Center, a hub exploration & discovery in the realm of uncommon &
                extraordinary chemical phenomena.
              </p>
              <ul className="list_style_one  list-none">
                <li className="font-montserrat about_list_style">
                  Modify the theming of the prebuilt automation platform
                </li>
                <li className="font-montserrat about_list_style">
                  Override the default strings for any element
                </li>
              </ul>
            </div>
            <div className="about_btn py-2 text-center lg:text-justify">
              <NavLink
                to="/test-package"
                className="theme_btn  font-montserrat "
              >
                Get In Touch
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
                          Of Expertise in the Path labs
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
