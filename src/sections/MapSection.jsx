const MapSection = () => {
  return (
    <div className="mt-7">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6500250202857!2d77.08945327522504!3d28.610274185091505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04d12ed4245f%3A0x2a53e1bf597777b1!2sSAUJNYA%20DIAGNOSTIC!5e0!3m2!1sen!2sin!4v1733194667236!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapSection;
