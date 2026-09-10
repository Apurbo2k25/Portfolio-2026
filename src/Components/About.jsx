import React from "react";

function About() {
  return (
    <section id="about" className="py-20 bg-white px-6">
      <div className="max-w-5xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            About <span className="text-emerald-600">Me</span>
          </h2>
          <p className="text-gray-600 mt-2 text-base sm:text-lg">
            Get to know my background, passion, and what drives my work.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-gray-50 p-8  rounded-2xl border border-r-5 border-l-5 border-emerald-600 shadow-sm flex flex-col md:flex-row gap-8 items-center">
          {/* Left / Info Text */}
          <div className="flex-1 space-y-4 text-center">
            <h3 className="text-2xl font-bold text-gray-800">
              Full-Stack Web Developer
            </h3>

            <p className="text-gray-600 leading-relaxed font-semibold">
              I am a Computer Science student and Full-Stack Web Developer
              passionate about building practical, user-friendly web
              applications with modern technologies. I currently work with the
              MERN stack and enjoy turning ideas into functional applications. I
              am also exploring Python, Artificial Intelligence, and Machine
              Learning to expand my skills beyond web development.
            </p>

            <p className="text-gray-600 leading-relaxed font-semibold">
              Beyond coding, I enjoy staying active through the gym and boxing,
              exploring new places and ideas, and pursuing creative interests
              like singing. I am continuously working on myself, with a
              long-term goal of pursuing higher studies and building my career
              internationally.
            </p>
            {/* Quick Details */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              <div>
                <p className="flex justify-center  text-emerald-700 font-bold ">
                  Name
                </p>
                <span className=" flex justify-center font-semibold text-black text-center">
                  Apurbo Chakrobarty
                </span>
              </div>
              <div>
                <p className="flex justify-center  text-emerald-700 font-bold ">
                  Focus
                </p>

                <span className="flex justify-center font-semibold text-black text-center">
                  MERN Stack & AI-ML
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
