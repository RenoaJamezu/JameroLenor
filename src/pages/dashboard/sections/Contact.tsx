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
    <section id="contact" className="scroll-mt-20 px-4 md:px-50 py-20 md:py-30 flex flex-col bg-gray-950 justify-center space-y-10 font-mono text-center caret-transparent">
      <h1 className="text-xl md:text-2xl text-white">Contact</h1>
      <p className="text-sm md:text-base text-gray-500">If you'd like to contact me, you can reach me using the following methods.</p>

      <div className="grid md:grid-cols-2 gap-5">
        {contacts.map(({ name, title, link, icon }) => (
          <div key={title} className="bg-primary/50 backdrop-blur-sm backdrop-saturate-150 p-4 flex items-center gap-2 min-w-35 sm:min-w-40 hover:scale-105 transition max-w-full text-white hover:text-blue-800 shadow-sm shadow-white/20 duration-300">
            <a href={link} target="_blank" className="w-full">
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  <div className="text-lg md:text-xl">{icon}</div>
                  <div className="text-xs md:text-base">{title}</div>
                </div>
                <FaExternalLinkAlt className="text-xs md:text-base"/>
              </div>
              <p className="text-xs md:text-base mt-1 text-gray-500">{name}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}