

export default function Location() {
  return (
    <div className="py-10 ">
      <div className="heading flex justify-center">
        <h1 className="text-[40px] font-openSans font-semibold">
          {" "}
          <span className="text-blue-500 mr-4 ">
            <i className="ri-map-pin-fill animate-pulse text-[50px]"></i>
          </span>
          <span className="custom-underline before:h-[3px]  before:bg-primary before:w-1/2 text-primary ">
            Here We are
          </span>
        </h1>
      </div>
      <div className="google-map-code w-full flex justify-center items-center mt-10 ">
        <div className="map  custom-shadow border-black w-[90%]">
          <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.3842991284873!2d77.07259511508227!3d28.61824218242351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzA1LjciTiA3N8KwMDQnMjkuMiJF!5e0!3m2!1sen!2sin!4v1684729665825!5m2!1sen!2sin"
            width="600"
            height="550"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
          />
        </div>
      </div>
    </div>
  );
}
