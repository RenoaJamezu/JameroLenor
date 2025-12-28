import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const section = [
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ]

  return (
    <header className={`fixed top-0 w-full h-16 sm:h-20 z-50 transition-colors px-4 md:px-20 flex items-center justify-between caret-transparent font-mono
      ${scrolled
        ? "backdrop-blur-xs bg-gray-950/50 shadow "
        : "bg-transparent"
      }`}>
      <a href="#hero"><h1 className="text-2xl font-bold text-white">LJ</h1></a>

      <div>
        {section.map(({ to, label }) => (
          <a
            href={`#${to}`}
            key={to}
            className="text-gray-500 text-lg font-medium mx-2 transition-all duration-300 hover:text-white">
            {label}
          </a>
        ))}
      </div>
    </header>
  )
}