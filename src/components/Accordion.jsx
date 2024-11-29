// import { ChevronDown } from "lucide-react";

import { useRef, useState } from "react";

import downIcon from "../assets/images/down-chevron.svg";

import aboutImg1 from "../assets/images/about-1.jpg";
import aboutImg2 from "../assets/images/about-2.jpg";

const FAQAccordion = () => {
  const [openItem, setOpenItem] = useState(null);
  const contentRefs = useRef([]);

  const faqItems = [
    {
      question: "What exactly is Numerology and how can it help me?",
      answer:
        "Numerology is the study of numbers and their influence on life. It can provide insights into personality traits and life paths.",
    },
    {
      question:
        "What information do I need to provide for a numerology report?",
      answer:
        "You'll need to provide basic personal information such as your full name and date of birth for a numerology report.",
    },
    {
      question: "Is this an instant automated report?",
      answer:
        "Yes, our numerology reports are generated instantly using automated calculations based on your provided information.",
    },
    {
      question: "How long does it take to receive my numerology report?",
      answer:
        "Reports are generated and delivered instantly after you submit your information.",
    },
    {
      question: "Can I use this numerology report for making life decisions?",
      answer:
        "Absolutely! Our numerology report offers deep insights into your personality and life path, providing valuable guidance that can help you make informed decisions in various aspects of your life, from career moves to personal relationships.",
    },
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  // Calculate height for smooth animation
  const getContentHeight = (index) => {
    if (openItem === index) {
      return contentRefs.current[index]?.scrollHeight + "px";
    }
    return "0px";
  };

  return (
    <div className="max-container min-h-screen  bg-white px-4 py-8 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h2 className="font-Nunito mb-4 text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-gray-600 sm:text-base">
          Find answers to common questions about our numerology services
        </p>
      </div>
      <div className="flex gap-12 flex-col lg:flex-row-reverse">
        {/* Accordion Section */}
        <div className="space-y-3 lg:w-[60%] sm:space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="custom_box_shadow overflow-hidden rounded-xl border bg-white"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left focus:outline-none"
                aria-expanded={openItem === index}
              >
                <div className="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
                  <span className="pr-2 text-sm font-normal text-[#586a92] sm:text-base lg:text-xl">
                    {item.question}
                  </span>
                  {/* <ChevronDown
                    className={`h-4 w-4 flex-shrink-0 text-gray-500 transition-transform duration-300 ease-in-out sm:h-5 sm:w-5 ${
                      openItem === index ? "rotate-180 transform" : ""
                    }`}
                  /> */}
                  <img
                    src={downIcon}
                    alt=""
                    className={`size-5 flex-shrink-0 text-gray-500 transition-transform duration-300 ease-in-out sm:size-7 ${
                      openItem === index ? "rotate-180 transform" : ""
                    }`}
                  />
                </div>
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{ height: getContentHeight(index) }}
                className="transition-[height] duration-300 ease-in-out"
              >
                <div
                  className={`border-t border-gray-100 px-4 py-4 text-sm text-gray-600 transition-opacity duration-300 sm:px-6 sm:py-5 sm:text-base ${
                    openItem === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full lg:w-[40%]">
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
                    <div className="experience_box hidden md:block md:min-h-[134px]">
                      <div className="inner pl-28 font-openSans  py-1 relative">
                        <h2 className=" experience_box_h2 w-full text-primary">
                          1M +
                          <span className="text-black">Reports Generated</span>
                        </h2>
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
    </div>
  );
};

export default FAQAccordion;
