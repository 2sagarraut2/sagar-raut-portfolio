import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/config/resume";

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  return (
    <footer
      className={`${
        isDark
          ? "bg-gray-900 border-t-4 border-gray-800"
          : "bg-white border-t-4 border-gray-900"
      } py-16`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo + Name */}
          <div className="flex items-center space-x-3 mb-8 md:mb-0">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-2xl tracking-tight">
                SR
              </span>
            </div>
            <span
              className={`${
                isDark ? "text-white" : "text-gray-900"
              } font-black text-2xl tracking-tight`}
            >
              SAGAR RAUT
            </span>
          </div>

          {/* Social Links */}
          <div className="flex gap-8 mb-8 md:mb-0">
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
              <Github size={28} strokeWidth={2.5} />
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
              <Linkedin size={28} strokeWidth={2.5} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className={`${
                isDark
                  ? "text-gray-400 hover:text-orange-400"
                  : "text-gray-600 hover:text-orange-500"
              } transition-all transform hover:scale-110`}
            >
              <Mail size={28} strokeWidth={2.5} />
            </a>
          </div>

          {/* Copyright */}
          <div
            className={`${
              isDark ? "text-gray-400" : "text-gray-700"
            } text-center md:text-left`}
          >
            <p className="font-bold">&copy; 2025 Sagar Raut. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
