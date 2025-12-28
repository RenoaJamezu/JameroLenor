export default function Projects() {
  const projects = [
    {
      title: "Blogtomasu",
      description: "A clean, user-friendly blogging platform that lets users create, share, and engage with content effortlessly — focused on simplicity, readability, and community interaction.",
      src: "/images/blogtomasu.png",
      responsive: "WEB APP - MOBILE RESPONSIVE",
      link: "https://blogtomasu.vercel.app"
    },
    {
      title: "LocalServiceHub",
      description: "A marketplace connecting local service providers with customers, making it easy to discover, book, and manage trusted services in your area.",
      src: "/images/localservicehub.png",
      responsive: "WEB APP - MOBILE RESPONSIVE",
      link: "https://local-service-hub-kohl.vercel.app"
    },
  ]
  return (
    <section id="projects" className="scroll-mt-20 px-4 md:px-50 py-10 md:py-30 flex flex-col bg-gray-950 justify-center space-y-10 font-mono">
      <h1 className="text-4xl text-white">Featured Projects</h1>
      <p className="text-gray-500">A collection of my projects showcasing my skills and passion in creating meaningful digital experiences:</p>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map(({ title, description, src, responsive, link }) => (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            key={title}
            className="group border border-gray-700 rounded-xl overflow-hidden flex flex-col text-white transition-all duration-300 hover:border-blue-500 hover:text-blue-900 shadow">
            <div className="overflow-hidden aspect-video">
              <img
                src={src}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-5 space-y-3 flex flex-col grow">
              <p className="text-blue-900 text-sm">{responsive}</p>
              <h1 className="text-xl font-semibold">{title}</h1>
              <p className="text-gray-500 text-sm grow">{description}</p>
              <p className="font-medium mt-4">
                View Project →
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}