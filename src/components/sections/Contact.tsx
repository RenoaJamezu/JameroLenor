import { SiGmail } from "react-icons/si";
import { FaFacebook, FaGithub } from "react-icons/fa";
import ContactBox from "../ui/ContactBox";


export default function Contact() {
  const contact = [
    { name: "JameroLenor@gmail.com", title: "Email", link: "mailto:jamerolenor@gmail.com", icon: <SiGmail />},
    { name: "RenoaJamezu", title: "Github", link: "https://github.com/RenoaJamezu", icon: <FaGithub />},
    { name: "Lenor James Jamero", title: "Facebook", link: "https://facebook.com/lenorjamesjamero", icon: <FaFacebook />},
  ]

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 flex flex-col">
      <div className="flex flex-col">
        <h1 className="text-neutral-100 text-3xl font-medium">Get in touch</h1>
        <p className="text-neutral-500 mt-2">For any inquiries, you can get in touch with me through the following methods.</p>
      </div>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {contact.map((s) => (
          <ContactBox key={s.name} contact={s} />
        ))}
      </div>
    </section>
  )
}
