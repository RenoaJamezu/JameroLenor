import { FaExternalLinkAlt, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

export default function Contact() {
  const contacts = [
    {
      name: "JameroLenor@gmail.com",
      title: "Email",
      link: "mailto:jamerolenor@gmail.com",
      icon: <SiGmail />
    },
    {
      name: "RenoaJamezu",
      title: "Github",
      link: "https://github.com/RenoaJamezu",
      icon: <FaGithub />
    },
    {
      name: "Lenor James Jamero",
      title: "Facebook",
      link: "https://facebook.com/lenorjamesjamero",
      icon: <FaFacebook />
    },
    {
      name: "Lenor James Jamero",
      title: "LinkedIn",
      link: "https://linkedin.com/in/lenor-james-jamero-462120396",
      icon: <FaLinkedin />
    },
  ]
  return (
    <section id="contact" className="scroll-mt-20 px-4 md:px-50 py-10 md:py-30 flex flex-col bg-gray-950 justify-center space-y-10 font-mono text-center">
      <h1 className="text-4xl text-white">Contact</h1>
      <p className="text-gray-500">If you'd like to contact me, you can reach me using the following methods.</p>

      <div className="grid grid-cols-2 gap-5">
        {contacts.map(({ name, title, link, icon }) => (
          <div className="bg-neutral-900/30 backdrop-blur-sm backdrop-saturate-150 border border-neutral-500 rounded-lg p-4 flex items-center gap-2 min-w-35 sm:min-w-40 shadow-sm hover:scale-105 hover:border-neutral-50 transition-transform max-w-full">
            <a href={link} target="_blank" className="w-full">
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  <div className="text-2xl text-neutral-100">{icon}</div>
                  <div className="text-neutral-100 text-sm">{title}</div>
                </div>
                <FaExternalLinkAlt className="text-neutral-50" />
              </div>
              <p className="text-neutral-500 mt-1">{name}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}