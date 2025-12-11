import React from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/config/resume";

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-orange-50 via-red-50 to-pink-50"
      } overflow-hidden pt-24`}
    >
      {/* Background Blobs */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-20 left-10 w-72 h-72 ${
            isDark ? "bg-orange-600" : "bg-orange-300"
          } rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob`}
        ></div>

        <div
          className={`absolute top-40 right-10 w-72 h-72 ${
            isDark ? "bg-pink-600" : "bg-pink-300"
          } rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000`}
        ></div>

        <div
          className={`absolute bottom-20 left-1/2 w-72 h-72 ${
            isDark ? "bg-red-600" : "bg-red-300"
          } rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000`}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Welcome Pill */}
        <div
          className={`inline-block mb-8 px-6 py-3 ${
            isDark ? "bg-gray-800 border border-orange-500/30" : "bg-white"
          } rounded-full shadow-lg`}
        >
          <span
            className={`${
              isDark ? "text-orange-400" : "text-orange-600"
            } font-black text-sm tracking-wider uppercase`}
          >
            👋 Welcome
          </span>
        </div>

        {/* Hero Heading */}
        <h1
          className={`text-6xl sm:text-8xl lg:text-9xl font-black ${
            isDark ? "text-white" : "text-gray-900"
          } mb-8 tracking-tighter leading-none`}
        >
          HI, I'M {" "}
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
            SAGAR
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-2xl sm:text-3xl lg:text-4xl ${
            isDark ? "text-gray-300" : "text-gray-700"
          } mb-12 max-w-4xl mx-auto font-bold leading-tight`}
        >
          Senior Software Engineer crafting high-performance web experiences
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="#contact"
            className="group px-10 py-5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-full font-black text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 uppercase tracking-wide"
          >
            Let's Talk
            <ArrowRight
              className="group-hover:translate-x-2 transition-transform"
              size={24}
            />
          </a>

          <a
            href="#projects"
            className={`px-10 py-5 ${
              isDark
                ? "bg-gray-800 text-white border-gray-700"
                : "bg-white text-gray-900 border-gray-900"
            } rounded-full font-black text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 border-4 uppercase tracking-wide`}
          >
            View Work
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDark
                ? "text-gray-400 hover:text-orange-400"
                : "text-gray-600 hover:text-orange-500"
            } transition-all transform hover:scale-110`}
          >
            <Github size={32} strokeWidth={2.5} />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDark
                ? "text-gray-400 hover:text-orange-400"
                : "text-gray-600 hover:text-orange-500"
            } transition-all transform hover:scale-110`}
          >
            <Linkedin size={32} strokeWidth={2.5} />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className={`${
              isDark
                ? "text-gray-400 hover:text-orange-400"
                : "text-gray-600 hover:text-orange-500"
            } transition-all transform hover:scale-110`}
          >
            <Mail size={32} strokeWidth={2.5} />
          </a>
        </div>
      </div>

      {/* Blob Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
