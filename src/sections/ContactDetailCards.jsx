import ContactCard from "../components/ContactCard";

const ContactDetailCards = () => {
  return (
    <div className="flex py-6 lg:py-20 justify-center flex-row flex-wrap max-container">
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </div>
  );
};

export default ContactDetailCards;
