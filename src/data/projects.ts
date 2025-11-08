export type ProjectItem = {
  name: string;
  info: string;
  link?: string;
  team?: string;
};

export const projects: ProjectItem[] = [
  {
    name: "Pillpoint",
    info: "PillPoint is a React + Vite web application that serves as a pharmaceutical e‑commerce platform with three distinct user experiences: Buyers (clients) who browse and purchase medicines, Sellers who manage inventory and sales, and Administrators who manage the system, reports, and contacts. The app prioritizes modular UI, fast local development with Vite, and responsive styling via Tailwind CSS and MUI components.",
    link: "https://pillpoint.vercel.app",
    team: "Meo Alcantara, Carl Lexter Buron, Lenor James Jamero",
  },
  {
    name: "Dummy",
    info: "lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum",
    link: "",
    team: "Dummy",
  },
];

export function slugify(s: string) {
  return s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}