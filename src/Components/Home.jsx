import { Link } from "react-router-dom";
import profileImg from "../assets/Img.jpg";

function Home() {
  return (
    <div className="min-h-[80vh] bg-gray-100 flex items-center justify-center p-6 sm:p-12">
      <div className="max-w-4xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12">
        {/* Left Side: Text Content */}
        <div className="flex-2 text-center md:text-left">
          <span className="bg-yellow-200 text-emerald-600 font-medium px-4 py-1 rounded-full text-sm inline-block mb-4 animate-bounce">
            Welcome to my portfolio
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-emerald-600">Apurbo Chakrobarty</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Full-Stack Developer building practical web applications with the
            MERN stack and exploring the world of AI and Machine Learning.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="/projects"
              className="bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-emerald-700 transition text-center"
            >
              View Projects
            </Link>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition text-center"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-90 md:h-90 rounded-full overflow-hidden border-2 border-emerald-600 shadow-lg bg-gray-200">
            <img
              src={profileImg}
              alt="Apurbo Chakrobarty"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
