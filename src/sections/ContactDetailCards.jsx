import ContactCard from "../components/ContactCard";

const ContactDetailCards = () => {
  return (
    <div className="flex py-20 lg:flex-row flex-col max-container">
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </div>
  );
};

export default ContactDetailCards;
