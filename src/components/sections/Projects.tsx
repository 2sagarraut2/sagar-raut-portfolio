import React from "react";
import { Code, ChevronRight, ExternalLink } from "lucide-react";
import { projects } from "../../config/projects";

interface ProjectsProps {
  isDark: boolean;
}

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link: string;
  metrics: string[];
}

const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
//   const projects: Project[] = [
//     {
//       title: "4FIN TECHNOLOGIES",
//       subtitle: "Loan Management System",
//       description:
//         "Built a robust loan management system with React.js, improving performance by 30% through optimization techniques.",
//       tech: ["React.js", "Context API", "Ant Design", "API Optimization"],
//       link: "https://lms.4fin.in/login",
//       metrics: ["25% faster load", "30% better responsiveness", "Better UI/UX"],
//     },
//     {
//       title: "STOCKPILOT",
//       subtitle: "Inventory System",
//       description:
//         "Comprehensive inventory management system with REST APIs and modular architecture.",
//       tech: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
//       link: "https://github.com/2sagarraut2/StockPilot",
//       metrics: ["Efficient Product management and Stock tracking", "Soft delete support", "JWT Auth"],
//     },
//     {
//       title: "DEVTINDER",
//       subtitle: "Social App",
//       description:
//         "Full-stack social networking application with real-time messaging and JWT authentication.",
//       tech: ["React.js", "Node.js", "MongoDB", "WebSockets", "AWS EC2"],
//       link: "https://github.com/2sagarraut2/devTinder",
//       metrics: ["Real-time chat", "JWT Authentication & Authorization", "Profile Management"],
//     },
//   ];

  return (
    <section
      id="projects"
      className={`py-32 ${
        isDark
          ? "bg-gray-800"
          : "bg-gradient-to-br from-orange-50 via-red-50 to-pink-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <div
            className={`inline-block mb-6 px-6 py-3 ${
              isDark
                ? "bg-gray-900 border border-orange-500/30"
                : "bg-white"
            } rounded-full shadow-lg`}
          >
            <span
              className={`${
                isDark ? "text-orange-400" : "text-orange-600"
              } font-black text-sm tracking-wider uppercase`}
            >
              Portfolio
            </span>
          </div>

          <h2
            className={`text-5xl sm:text-7xl font-black ${
              isDark ? "text-white" : "text-gray-900"
            } mb-8 tracking-tighter`}
          >
            FEATURED PROJECTS
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                isDark
                  ? "bg-gray-900 border-gray-700 hover:border-orange-500"
                  : "bg-white border-gray-900 hover:border-orange-500"
              } rounded-3xl border-4 transition-all duration-300 hover:-translate-y-3 overflow-hidden shadow-lg hover:shadow-2xl group`}
            >
              {/* Thumbnail */}
              <div className="h-64 bg-gradient-to-br from-orange-300 via-red-300 to-pink-300 flex items-center justify-center">
                <Code
                  size={80}
                  className="text-white group-hover:scale-110 transition-transform"
                  strokeWidth={2.5}
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3
                  className={`text-3xl font-black ${
                    isDark ? "text-white" : "text-gray-900"
                  } mb-2 uppercase tracking-tighter`}
                >
                  {project.title}
                </h3>

                <p
                  className={`${
                    isDark ? "text-orange-400" : "text-orange-600"
                  } font-bold mb-4 uppercase text-sm tracking-wide`}
                >
                  {project.subtitle}
                </p>

                <p
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } mb-6 font-medium leading-relaxed`}
                >
                  {project.description}
                </p>

                {/* Technology Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 ${
                        isDark
                          ? "bg-orange-500/10 text-orange-400 border-orange-500/30"
                          : "bg-gradient-to-r from-orange-100 to-pink-100 text-gray-900 border-gray-900"
                      } text-xs font-bold rounded-full border-2`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="space-y-2 mb-6">
                  {project.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 text-sm ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      } font-bold`}
                    >
                      <ChevronRight
                        size={20}
                        className={
                          isDark ? "text-orange-400" : "text-orange-500"
                        }
                        strokeWidth={3}
                      />
                      {metric}
                    </div>
                  ))}
                </div>

                {/* External Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 ${
                    isDark
                      ? "text-orange-400 hover:text-orange-300"
                      : "text-orange-600 hover:text-orange-700"
                  } font-black uppercase text-sm tracking-wide`}
                >
                  View Project
                  <ExternalLink size={18} strokeWidth={3} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
