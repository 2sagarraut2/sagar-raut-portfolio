import React from "react";
import { Code, Server, Database, Cloud } from "lucide-react";
import {skillCategories} from "../../config/skills";
import * as Icons from "lucide-react";

interface SkillsProps {
  isDark: boolean;
}

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ isDark }) => {

  return (
    <section
      id="skills"
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
              Technical Expertise
            </span>
          </div>

          <h2
            className={`text-5xl sm:text-7xl font-black ${
              isDark ? "text-white" : "text-gray-900"
            } mb-8 tracking-tighter`}
          >
            SKILLS & TECH
          </h2>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => { 
            const Icon = Icons[category.icon as keyof typeof Icons];
            return (
            <div
              key={index}
              className={`${
                isDark
                  ? "bg-gray-900 border-gray-700 hover:border-orange-500"
                  : "bg-white border-gray-900 hover:border-orange-500"
              } p-10 rounded-3xl border-4 transition-all duration-300 hover:-translate-y-3 shadow-lg hover:shadow-2xl group`}
            >
              <div
                className={`${
                  isDark ? "text-orange-400" : "text-orange-500"
                } mb-6 group-hover:scale-110 transition-transform`}
              >
                {Icon && <Icon size={56} strokeWidth={2.5} />}
              </div>

              <h3
                className={`text-2xl font-black ${
                  isDark ? "text-white" : "text-gray-900"
                } mb-6 uppercase tracking-tight`}
              >
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 ${
                      isDark
                        ? "bg-orange-500/10 text-orange-400 border-orange-500/30"
                        : "bg-gradient-to-r from-orange-100 to-pink-100 text-gray-900 border-gray-900"
                    } text-sm font-bold rounded-full border-2`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default Skills;
