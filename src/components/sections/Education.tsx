import { IoLinkOutline } from "react-icons/io5";

export default function Education() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 flex flex-col">
      <div className="flex flex-col w-fit">
        <h1 className="text-neutral-100 text-3xl font-medium">Education</h1>
        <div className="flex mt-3 justify-between">
          <p className="text-neutral-100 font-medium">2021 - 2025</p>
          <button className="text-neutral-50 hover:text-neutral-500">
            <a href="https://drive.google.com/file/d/1dVdhD9y5uFkHWUeJ0XwNNyYh_XVoOz3g/view?usp=sharing" target="_blank">
              <IoLinkOutline className="h-5 w-5"/>
            </a>
          </button>
        </div>
        <div className="text-neutral-300 mt-2">
          <p>Caraga State University - Main</p>
          <p>Bachelor of Science in Information Technology</p>
          <p>Graduated</p>
        </div>
      </div>
    </section>
  )
}
