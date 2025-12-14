import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function BlogTomasu() {
  const tech = ["MongoDB", "Express", "React", "Node.js"];

  return (
    <main className="min-h-screen w-full flex flex-col px-4 py-10 bg-linear-to-b from-slate-900 to-black bg-no-repeat bg-cover bg-fixed">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="text-neutral-300 hover:text-neutral-100">← Back</Link>
          <span className="text-sm text-neutral-400">Project • BlogTomasu</span>
        </div>

        <div className="bg-neutral-900/30 border border-neutral-500/30 rounded-lg p-6 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-4xl text-white font-bold">BlogTomasu</h1>

            <div className="flex items-center gap-3">
              <a href="https://github.com/RenoaJamezu/blogtomasu" target="_blank" className="text-neutral-100 hover:text-neutral-300">
                <FaGithub className="text-3xl sm:text-4xl" />
              </a>
              <span className="px-3 py-1 bg-white text-black rounded-full font-medium">Completed</span>
              <a href="https://blogtomasu.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Open live project
              </a>
            </div>

            <p className="text-neutral-300 text-justify">The idea for BlogTomasu came from my desire to create a platform where I could practice full-stack development while building something meaningful. I wanted a space to write, share, and manage blog posts, and also experiment with modern authentication flows and secure deployments. The project allowed me to turn concepts I learned into a tangible, deployable web app.</p>

            <h3 className="mt-6 font-semibold text-2xl text-white">Objectives & Goals</h3>
            <ul className="mt-2 list-disc list-inside text-neutral-300 space-y-1">
              <li>Build a complete end-to-end web application</li>
              <li>Implement secure authentication and authorization</li>
              <li>Handle cross-browser and deployment-specific issues</li>
              <li>Practice production deployment workflows (frontend + backend)</li>
              <li>Write clean, maintainable, and scalable code</li>
              <li>Learn debugging and troubleshooting for production-only problems</li>
            </ul>

            <h3 className="mt-6 font-semibold text-2xl text-white">What is BlogTomasu?</h3>
            <p className="mt-2 text-neutral-300 text-justify">BlogTomasu is a full-stack blogging platform where users can create accounts, log in securely, and post blogs. It emphasizes security, clean UI, and smooth user experience, with protected routes and authentication that follows modern best practices.</p>

            <h3 className="mt-6 font-semibold text-2xl text-white">My role</h3>
            <ul className="mt-2 list-disc list-inside text-neutral-300 space-y-1">
              <li>Frontend UI and routing</li>
              <li>Backend API design</li>
              <li>Authentication and authorization logic</li>
              <li>Database schema design</li>
              <li>Deployment configuration</li>
              <li>Debugging cross-browser and production issues</li>
              <li>Security decisions and tradeoffs</li>
            </ul>

            <h3 className="mt-6 font-semibold text-2xl text-white">Challenges and Problems faced</h3>
            <ul className="mt-2 list-disc list-inside text-neutral-300 space-y-1">
              <li>Cross-browser authentication issues – Safari blocked cookies due to ITP.</li>
              <li>Email OTP verification – worked locally but became unreliable in production because of email provider restrictions.</li>
              <li>Cookie and CORS configuration – balancing secure cookies, cross-domain requests, and browser compatibility.</li>
            </ul>

            <h3 className="mt-6 font-semibold text-2xl text-white">Key learnings & Solutions</h3>
            <ul className="mt-2 list-disc list-inside text-neutral-300 space-y-1">
              <li>Learned that secure cookie-based authentication requires a same-site deployment.</li>
              <li>Understood browser security policies, especially Safari ITP.</li>
              <li>Learned that security is contextual, depending on deployment, scale, and data sensitivity.</li>
              <li>Gained experience in debugging production-only issues.</li>
            </ul>

            <h3 className="mt-6 font-semibold text-2xl text-white">What I Learned</h3>
            <ul className="mt-2 list-disc list-inside text-neutral-300 space-y-1">
              <li>End-to-end JWT authentication</li>
              <li>Password hashing with bcrypt</li>
              <li>HttpOnly, Secure, SameSite cookie configuration</li>
              <li>CORS and credentials handling</li>
            </ul>

            <h3 className="mt-6 font-semibold text-2xl text-white">Future Improvements</h3>
            <ul className="mt-2 list-disc list-inside text-neutral-300 space-y-1">
              <li>Implement change password functionality for users</li>
              <li>Implement edit profile functionality</li>
              <li>Add password reset flow with email verification</li>
              <li>Introduce refresh token rotation for improved session security</li>
              <li>Add rate limiting on authentication endpoints to prevent brute-force attacks</li>
            </ul>
          </div>

          <aside className="md:col-span-1 space-y-3">
            <div className="bg-neutral-800/40 border border-neutral-700/40 rounded-lg p-4">
              <h4 className="text-neutral-100 font-semibold mb-3">Technologies</h4>
              <ul className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <li key={t} className="px-3 py-1 bg-white/90 text-black rounded-full text-sm">{t}</li>
                ))}
              </ul>

              <div className="mt-6 text-neutral-400">
                <p className="font-medium">Team</p>
                <p>Lenor James Jamero</p>
              </div>
            </div>

            <div className="bg-neutral-800/40 border border-neutral-700/40 rounded-lg p-4">
              <h4 className="text-neutral-100 font-semibold mb-3">Notes</h4>
              <ul className="mt-2 list-disc list-inside text-neutral-300 space-y-1">
                <li>Supported browsers: Chrome, Firefox, Edge</li>
                <li>Known limitation: Safari authentication may not work due to cross-site cookie restrictions</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default BlogTomasu;