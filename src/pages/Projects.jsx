import laundrolinkImg from "../assets/laundrolink.jpg";
import VPMS from "../assets/VPMS.jpg";
import task from "../assets/task.jpg";

function Projects() {
  const projects = [
    {
      title: "Laundrolink",
      image: laundrolinkImg,
      description:
        "A full-stack laundry management web application featuring automated booking, real-time status updates, and a clean user dashboard.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Apurbo2k25/Laundry-FullStack",
      demo: "https://laundrymaster-wb.netlify.app/",
    },
    {
      title: "Visitor Pass System",
      image: VPMS,
      description:
        "A secure management app featuring dynamic QR code generation for automated guest check-ins and access tracking.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Mongoose Hooks"],
      github: "https://github.com/Apurbo2k25/VPMS",
      demo: "https://vpms-portal.netlify.app/",
    },
    {
      title: "Task Tracker App",
      image: task,
      description:
        "A fast, single-component full-stack task manager featuring full CRUD operations, inline record editing, and RESTful API integration.",
      tech: ["React", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Featured <span className="text-emerald-600">Projects</span>
          </h2>
          <p className="text-gray-600 mt-2 text-base sm:text-lg">
            Some of the real-world applications I've built.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" rounded-xl border border-r-4 border-l-4 border-emerald-600 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden"
            >
              <div className="p-2">
                {/* Thumbnail Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  onClick={() => window.open(project.demo, "_blank")}
                  className="w-full h-48 object-contain cursor-pointer bg-gray-100 transition-transform duration-300 hover:scale-105"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-emerald-600 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-semibold leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md font-medium border border-emerald-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 border-t border-gray-100 p-6 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition"
                >
                  GitHub →
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center p-10">
        <h1 className="text-sm md:text-lg bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-medium flex items-center gap-1">
          <span>Future Projects Are Loading</span>
          <span className="flex gap-0.5 ml-1">
            <span className="animate-bounce [animation-delay:-0.3s]">.</span>
            <span className="animate-bounce [animation-delay:-0.15s]">.</span>
            <span className="animate-bounce">.</span>
          </span>
        </h1>
      </div>
    </section>
  );
}

export default Projects;
