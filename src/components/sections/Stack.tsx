import { FaReact, FaNodeJs, FaLaravel, FaGitAlt, FaJs, FaPhp } from "react-icons/fa";
import { SiExpress, SiSupabase, SiPostgresql, SiTailwindcss, SiMysql, SiTypescript, SiMongodb, SiVite } from "react-icons/si";
import StackBox from "../ui/StackBox";

export default function Stack() {
  const stacks = [
    { name: "React", icon: <FaReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Supabase", icon: <SiSupabase /> },
    { name: "Postgres", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "PHP", icon: <FaPhp /> },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 flex flex-col">
      <div className="flex flex-col">
        <h1 className="text-neutral-100 text-3xl font-medium">Tech Stack</h1>
        <p className="text-neutral-300">here are some of my technologies I've work with:</p>
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stacks.map((s) => (
            <StackBox key={s.name} stack={s} />
          ))}
      </div>
    </section>
  )
}
