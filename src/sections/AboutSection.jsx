// import btnArrow from "../assets/images/btn-arrow.png";
import aboutImg1 from "../assets/images/about-1.jpg";
import aboutImg2 from "../assets/images/about-2.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 px-6 relative bg-[#e7eff0]">
      <div className="patter_layer layer_1"></div>
      <div className="patter_layer layer_2"></div>
      <div className="max-container flex  m-auto">
        <div className="flex w-full md:w-1/2">
          <div className="content_block mt-6 mr-6">
            <div className="title_content mb-6">
              <span>Laboratory</span>
              <h2 className="font-bold text-[48px] font-palanquin leading-normal">
                We Provide Reliable & High- Quality Clinical Service
              </h2>
            </div>
            <div className="text_box mb-11">
              <p className="mb-7 font-medium text-base text-[#6A6A6A] leading-[26px] font-openSans">
                Laboratory We Provide Reliable & High- Quality Clinical Service
                Welcome to the Labout Rare Chemistry Research Documentation
                Center, a hub exploration & discovery in the realm of uncommon &
                extraordinary chemical phenomena.
              </p>
              <ul className="list_style_one list-none">
                <li className="font-montserrat">
                  Modify the theming of the prebuilt automation platform
                </li>
                <li className="font-montserrat">
                  Override the default strings for any element
                </li>
              </ul>
            </div>
            <div className="about_btn">
              <a className="theme_btn  font-montserrat bg-primary" href="#">
                Get In Touch
                {/* <img src={btnArrow} alt="" /> */}
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-1/2">
          <div className="image_block_2 w-full">
            <div className="inner_image relative">
              <div className="patters_with_img">
                <div className="pattern_img1"></div>
                <div className="pattern_img2"></div>
              </div>
              <div className="imgs flex">
                <div className="w-full md:w-1/2 px-4">
                  <div className="img_box">
                    <figure className="img mb-7">
                      <img
                        src={aboutImg1}
                        alt="aboutImg"
                        className="aboutImg"
                      />
                    </figure>
                    <div className="experience_box">
                      <div className="inner pl-28 font-openSans  py-1 relative">
                        <h2 className="bg-[#cecee9]">
                          25
                          <span>Years</span>
                        </h2>
                        <h3 className="font-montserrat">
                          Of Experience in the Finance Service
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <figure className="img pt-24 mt-4">
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
