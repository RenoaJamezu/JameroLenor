export type ProjectItem = {
  name?: string;
  info?: string;
  link?: string;
  team?: string;
  tech?: string;
};

export const projects: ProjectItem[] = [
  {
    name: "Pillpoint",
    info: "PillPoint is a React + Vite web application that serves as a pharmaceutical e‑commerce platform with three distinct user experiences: Buyers (clients) who browse and purchase medicines, Sellers who manage inventory and sales, and Administrators who manage the system, reports, and contacts. The app prioritizes modular UI, fast local development with Vite, and responsive styling via Tailwind CSS and MUI components.",
    link: "https://pillpoint.vercel.app",
    team: "Meo Alcantara, Carl Lexter Buron, Lenor James Jamero",
    tech: "React-Vite",
  },
  {
    name: "Weather Weather",
    info: "Weather Weather is a lightweight, full‑stack weather lookup app that combines a Laravel API with a React (Vite) frontend. It lets users search for a place name and returns current weather data from OpenWeatherMap, displayed in a clean, responsive UI.",
    link: "https://weather-weather-frontend.vercel.app/",
    team: "Lenor James Jamero",
    tech: "React-Vite, Laravel",
  },
];

export function slugify(s: string) {
  return s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}