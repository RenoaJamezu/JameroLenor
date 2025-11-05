import { FaExternalLinkAlt } from "react-icons/fa";

type ContactItem = {
  name: string;
  title: string;
  link: string;
  icon: React.ReactElement;
};

const ContactBox = ({contact}: {contact: ContactItem}) => {
  return (
    <div className="bg-neutral-900/30 backdrop-blur-sm backdrop-saturate-150 border border-neutral-500 rounded-lg p-4 flex items-center gap-2 min-w-[140px] sm:min-w-40 shadow-sm hover:scale-105 hover:border-neutral-50 transition-transform max-w-full">
      <a href={contact.link} className="w-full">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <div className="text-2xl text-neutral-100">{contact.icon}</div>
            <div className="text-neutral-100 text-sm">{contact.title}</div>
          </div>
          <FaExternalLinkAlt className="text-neutral-50"/>
        </div>
        <p className="text-neutral-500 mt-1">{contact.name}</p>
      </a>
    </div>
  );
}

export default ContactBox;
