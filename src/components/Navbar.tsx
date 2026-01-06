import { useEffect, useState } from "react"
import { Button } from "./ui/button"

const sections = [
  { to: "#skills", label: "Skills" },
  { to: "#projects", label: "Projects" },
  { to: "#education", label: "Education" },
  { to: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleClick = (to: string) => {
    const element = document.querySelector(to)
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors font-mono caret-transparent px-5 md:px-50 ${
        scrolled || open
          ? "backdrop-blur-xl bg-gray-950/70 border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 sm:h-20 max-w-6xl items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-2xl font-bold text-white cursor-pointer">
          LJ
        </button>

        <nav className="hidden sm:flex items-center gap-1">
          {sections.map(({ to, label }) => (
            <Button
              key={to}
              onClick={() => handleClick(to)}
              variant={"ghost"}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:bg-transparent cursor-pointer"
            >
              {label}
            </Button>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`sm:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0 pointer-events-none "
        }`}
      >
        <div className="flex flex-col gap-1 pb-4">
          {sections.map(({ to, label }) => (
            <Button
              key={to}
              onClick={() => handleClick(to)}
              variant={"ghost"}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:bg-transparent text-left"
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  )
}