import ProjectBox from "../ui/ProjectBox";

export default function Project() {
  const project = [
    { name: "Pillpoint", info: "PillPoint is a React + Vite web application that serves as a pharmaceutical e‑commerce platform with three distinct user experiences: Buyers (clients) who browse and purchase medicines, Sellers who manage inventory and sales, and Administrators who manage the system, reports, and contacts. The app prioritizes modular UI, fast local development with Vite, and responsive styling via Tailwind CSS and MUI components.", link:"https://pillpoint.vercel.app", team: "Meo Alcantara, Carl Lexter Buron, Lenor James Jamero"}
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 flex flex-col">
      <div className="flex flex-col">
        <h1 className="text-neutral-100 text-3xl font-medium">Projects</h1>
        <p className="text-neutral-300">here are some of my projects:</p>
      </div>
      <div className="mt-6 grid md:grid-cols-2">
        {project.map((s) => (
            <ProjectBox key={s.name} project={s} />
          ))}
      </div>
    </section>
  )
}
