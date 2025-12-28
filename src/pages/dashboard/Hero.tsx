import { Button } from "../../components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-20 min-h-screen px-4 md:px-50 flex flex-col bg-linear-to-br from-gray-900 to-black justify-center space-y-10 font-mono">
      <div>
        <div className="space-y-10">
          <p className="text-blue-900 font-medium">Hello, I'm</p>
          <h1 className="text-white font-bold text-7xl">Lenor James</h1>
          <p className="text-gray-500 font-medium w-1/2">I’m a junior full-stack developer who builds modern, reliable web applications with clean code and strong attention to user experience. I’m eager to learn, adapt fast, and contribute real value to your team.</p>
        </div>

        <div className="space-x-3">
          <Button>
            View Resume
          </Button>
          <Button>
            Get it Touch
          </Button>
        </div>

      </div>
    </section>
  )
}