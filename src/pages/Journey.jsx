import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaCode,
  FaRocket,
  FaBrain,
  FaCalendarAlt,
} from "react-icons/fa";

function Journey() {
  const milestones = [
    {
      year: "2023 - Present",
      title: "B.Sc. in Computer Science",
      subtitle: "University Undergraduate",
      description:
        "Built a strong foundation in core Computer Science principles, Data Structures, Operating Systems, C, Java, and Relational Databases (MySQL).",
      icon: <FaGraduationCap className="text-emerald-600 text-xl" />,
      status: "In Progress (Graduation 2027)",
      badgeColor: "bg-emerald-100 text-emerald-800",
    },
    {
      year: "Late 2025 - Early 2026",
      title: "Full-Stack Web Development (MERN)",
      subtitle: "Mastering Modern Web Architectures",
      description:
        "Shifted focus to real-world software production. Mastered React, Tailwind CSS, Node.js, Express, MongoDB, and RESTful API integration.",
      icon: <FaCode className="text-emerald-600 text-xl" />,
      status: "Completed Core",
      badgeColor: "bg-blue-100 text-blue-800",
    },
    {
      year: "2026",
      title: "Real-World Projects & Systems",
      subtitle: "Production Applications",
      description:
        "Shipped production-ready applications like Laundrolink (Laundry Management), a Visitor Pass System with dynamic QR codes, and full-stack REST API utilities.",
      icon: <FaRocket className="text-emerald-600 text-xl" />,
      status: "Active Deployment",
      badgeColor: "bg-purple-100 text-purple-800",
    },
    {
      year: "2026 & Beyond",
      title: "Generative AI & Machine Learning",
      subtitle: "Future Direction",
      description:
        "Currently expanding into GenAI engineering—focusing on Python, PyTorch, Large Language Models (LLMs), RAG architectures, and vector search systems.",
      icon: <FaBrain className="text-emerald-600 text-xl" />,
      status: "Current Horizon",
      badgeColor: "bg-amber-100 text-amber-800",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 px-6 min-h-[80vh]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            My <span className="text-emerald-600">Journey</span> & Roadmap
          </h1>
          <p className="text-gray-600 mt-2 text-base sm:text-lg">
            Where I started, what I've built, and where I'm headed next.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-emerald-500 ml-4 md:ml-32 space-y-12">
          {milestones.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-10">
              {/* Timeline Icon Node */}
              <div className="absolute -left[17px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center shadow-md">
                {item.icon}
              </div>

              {/* Date Box (Desktop Offset) */}
              <div className="md:absolute md:-left-36 md:top-2 mb-2 md:mb-0 text-xs font-semibold text-gray-500 flex items-center gap-1">
                <FaCalendarAlt className="text-emerald-600" />
                {item.year}
              </div>

              {/* Card Content */}
              <div className="bg-white p-6 rounded-xl border border-emerald-600 shadow-sm hover:shadow-md transition">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${item.badgeColor}`}
                  >
                    {item.status}
                  </span>
                </div>

                <h4 className="text-sm font-medium text-emerald-600 mb-3">
                  {item.subtitle}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <Link
            to="#"
            className="inline-block bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
          >
            Connect With Me →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Journey;
