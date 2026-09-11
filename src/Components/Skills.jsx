import React from "react";

function Skills() {
  const frontendSkills = [
    {
      name: "HTML",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    },
    {
      name: "JS",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "Tailwind",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Bootstrap",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    },
    {
      name: "REST APIs",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg",
    },
    {
      name: "JWT",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/json/json-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Postman",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg",
    },
  ];

  const coreSkills = [
    {
      name: "C",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    },
    {
      name: "Java",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    },
    {
      name: "MySQL",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Git",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    },
  ];

  // AI & GenAI Tools
  const aiSkills = [
    {
      name: "Python",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    },
    {
      name: "PyTorch",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg",
    },
    {
      name: "LangChain",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    }, // placeholder/icon
    {
      name: "RAG / LLMs",
      logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            My <span className="text-emerald-600">Skills</span>
          </h2>
          <p className="text-gray-600 mt-2 text-base sm:text-lg">
            Full-Stack Development & Artificial Intelligence
          </p>
        </div>

        {/* 2x2 Grid or 4 Columns on Large Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {/* Frontend */}
          <div className="bg-white p-5 rounded-xl border border-r-5 border-l-5 border-emerald-600 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
              Frontend
            </h3>
            <div className="grid grid-cols-3 gap-3 ">
              {frontendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="cursor-pointer w-16 h-16 bg-gray-50 border border-emerald-500 rounded-lg flex flex-col items-center justify-center p-1 hover:border-green-500 hover:bg-green-50 transition"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-6 h-6 object-contain "
                  />
                  <span className="text-[10px] font-medium text-gray-700 mt-1 text-center truncate w-full">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white p-5 rounded-xl border border-r-5 border-l-5 border-emerald-600 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
              Backend & DataBase
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {backendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="cursor-pointer w-16 h-16 bg-gray-50 border border-emerald-500 rounded-lg flex flex-col items-center justify-center p-1 hover:border-green-500 hover:bg-green-50 transition"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-[10px] font-medium text-gray-700 mt-1 text-center truncate w-full">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white p-5 rounded-xl border border-r-5 border-l-5 border-emerald-600 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
              Core Skills
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {coreSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="cursor-pointer w-16 h-16 bg-gray-50 border border-emerald-500 rounded-lg flex flex-col items-center justify-center p-1 hover:border-green-500 hover:bg-green-50 transition"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-[10px] font-medium text-gray-700 mt-1 text-center truncate w-full">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* AI & GenAI (New) */}
          <div className="bg-white p-5 rounded-xl border border-r-5 border-l-5 border-emerald-600 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100 flex items-center justify-between">
              AI & GenAI
              <span className="text-sm  bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium flex items-center gap-1">
                <span>Loading</span>
                <span className="flex gap-0.5 ml-1">
                  <span className="animate-bounce [animation-delay:-0.3s]">
                    .
                  </span>
                  <span className="animate-bounce [animation-delay:-0.15s]">
                    .
                  </span>
                  <span className="animate-bounce">.</span>
                </span>
              </span>
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {aiSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="cursor-pointer w-16 h-16 bg-gray-50 border border-emerald-500 rounded-lg flex flex-col items-center justify-center p-1 hover:border-green-500 hover:bg-green-50 transition"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-[10px] font-medium text-gray-700 mt-1 text-center truncate w-full">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
