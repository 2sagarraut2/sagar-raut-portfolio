import React from "react";
import { Briefcase, ChevronRight, Award, GraduationCap } from "lucide-react";
import { experiences} from '../../config/experience'

interface ExperienceProps {
  isDark: boolean;
}

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

const Experience: React.FC<ExperienceProps> = ({ isDark }) => {

  return (
    <section
      id="experience"
      className={`py-32 ${isDark ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <div
            className={`inline-block mb-6 px-6 py-3 ${
              isDark
                ? "bg-orange-500/10 border border-orange-500/30"
                : "bg-orange-100"
            } rounded-full`}
          >
            <span
              className={`${
                isDark ? "text-orange-400" : "text-orange-600"
              } font-black text-sm tracking-wider uppercase`}
            >
              Career Journey
            </span>
          </div>

          <h2
            className={`text-5xl sm:text-7xl font-black ${
              isDark ? "text-white" : "text-gray-900"
            } mb-8 tracking-tighter`}
          >
            WORK EXPERIENCE
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`${
                isDark
                  ? "bg-gray-800 border-gray-700 hover:border-orange-500"
                  : "bg-gradient-to-br from-orange-50 to-pink-50 border-gray-900 hover:border-orange-500"
              } p-10 rounded-3xl border-4 transition-all duration-300 hover:shadow-2xl`}
            >
              {/* Top Section */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between ">
                <div>
                  <h3
                    className={`text-3xl font-black ${
                      isDark ? "text-white" : "text-gray-900"
                    } mb-3 uppercase tracking-tight`}
                  >
                    {exp.role}
                  </h3>

                  <div
                    className={`flex items-center gap-4 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <Briefcase
                      size={24}
                      className={isDark ? "text-orange-400" : "text-orange-500"}
                      strokeWidth={2.5}
                    />
                    <span className="font-black text-xl">{exp.company}</span>
                  </div>
                </div>

                <div
                  className={`mt-4 lg:mt-0 px-6 py-3 ${
                    isDark
                      ? "bg-gray-900 border-gray-600"
                      : "bg-white border-gray-900"
                  } border-2 rounded-full`}
                >
                  <span
                    className={`${
                      isDark ? "text-white" : "text-gray-900"
                    } font-black text-sm uppercase tracking-wide`}
                  >
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              {/* <div className="grid md:grid-cols-2 gap-4">
                {exp.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ChevronRight
                      size={24}
                      className={`${
                        isDark ? "text-orange-400" : "text-orange-500"
                      } flex-shrink-0 mt-1`}
                      strokeWidth={3}
                    />
                    <span
                      className={`${
                        isDark ? "text-gray-300" : "text-gray-700"
                      } font-bold text-lg`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div> */}
            </div>
          ))}
        </div>

        {/* Certifications & Education */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div
            className={`${
              isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-900"
            } p-10 rounded-3xl border-4 hover:border-orange-500`}
          >
            <Award
              className={`${isDark ? "text-orange-400" : "text-orange-500"} mb-5`}
              size={48}
              strokeWidth={2.5}
            />
            <h3
              className={`text-3xl font-black ${
                isDark ? "text-white" : "text-gray-900"
              } mb-6 uppercase tracking-tight`}
            >
              Certifications
            </h3>

            <div className="space-y-4">
              {[
                "Microsoft Certified: Azure Fundamentals - 2023",
                "Namaste React (NamasteDev.com) - 2023",
                "Namaste Node.js (NamasteDev.com) - 2025",
              ].map((cert, i) => (
                <div
                  key={i}
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } font-bold text-lg`}
                >
                  • {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div
            className={`${
              isDark
                ? "bg-gray-800 border-gray-700"
                : "bg-gradient-to-br from-orange-50 to-pink-50 border-gray-900"
            } p-10 rounded-3xl border-4 hover:border-orange-500`}
          >
            <GraduationCap
              className={`${isDark ? "text-orange-400" : "text-orange-500"} mb-5`}
              size={48}
              strokeWidth={2.5}
            />
            <h3
              className={`text-3xl font-black ${
                isDark ? "text-white" : "text-gray-900"
              } mb-6 uppercase tracking-tight`}
            >
              Education
            </h3>

            <div className="space-y-3">
              <div
                className={`${
                  isDark ? "text-white" : "text-gray-900"
                } font-black text-xl`}
              >
                Bachelor of Computer Applications
              </div>
              <div
                className={`${
                  isDark ? "text-gray-300" : "text-gray-700"
                } font-bold text-lg`}
              >
                Savitribai Phule Pune University
              </div>
              <div
                className={`${
                  isDark ? "text-gray-400" : "text-gray-600"
                } font-bold`}
              >
                June 2014 - April 2018
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
