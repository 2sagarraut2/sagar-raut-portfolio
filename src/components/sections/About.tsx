import React from "react";
import { GraduationCap } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface AboutProps {
  isDark: boolean;
}

interface StatItem {
  number: string;
  label: string;
}

const About: React.FC<AboutProps> = ({ isDark }) => {
  const stats: StatItem[] = [
    { number: "6+", label: "Years Experience" },
    { number: "50+", label: "Projects" },
    { number: "40%", label: "Performance Boost" },
    { number: "100%", label: "Satisfaction" },
  ];

  return (
    <section
      id="about"
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
              About Me
            </span>
          </div>

          <h2
            className={`text-5xl sm:text-7xl font-black ${
              isDark ? "text-white" : "text-gray-900"
            } mb-8 tracking-tighter`}
          >
            BUILDING DIGITAL EXCELLENCE
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Section */}
          <div className="space-y-8">
            <p
              className={`text-2xl ${
                isDark ? "text-gray-300" : "text-gray-700"
              } leading-relaxed font-medium`}
            >
              I'm a{" "}
              <span
                className={`${
                  isDark ? "text-orange-400" : "text-orange-600"
                } font-black`}
              >
                Senior Software Engineer
              </span>{" "}
              with a passion for crafting scalable, high-performance web
              applications.
            </p>

            <p
              className={`text-xl ${
                isDark ? "text-gray-400" : "text-gray-600"
              } leading-relaxed`}
            >
              With over 6+ years of experience, I specialize in modern
              JavaScript frameworks and full-stack development. Currently at
              NCSI Technologies, I have engineered enterprise applications that
              improved performance by 40%.
            </p>

            <p
              className={`text-xl ${
                isDark ? "text-gray-400" : "text-gray-600"
              } leading-relaxed`}
            >
              I thrive on solving complex engineering problems and building
              products that create real-world impact. Outside of work, I explore
              new technologies and actively contribute to open-source projects.
            </p>

            {/* Education Card */}
            {/* <div
              className={`flex items-center gap-6 pt-6 p-8 ${
                isDark ? "bg-gray-800" : "bg-gradient-to-r from-orange-50 to-pink-50"
              } rounded-3xl border-4 ${
                isDark ? "border-gray-700" : "border-gray-900"
              }`}
            >
              <GraduationCap
                className={isDark ? "text-orange-400" : "text-orange-600"}
                size={40}
                strokeWidth={2.5}
              />
              <div>
                <p
                  className={`${
                    isDark ? "text-white" : "text-gray-900"
                  } font-black text-xl`}
                >
                  Bachelor of Computer Applications
                </p>
                <p
                  className={`${
                    isDark ? "text-gray-400" : "text-gray-600"
                  } font-bold`}
                >
                  Savitribai Phule Pune University
                </p>
              </div>
            </div> */}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {stats.map((stat, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true, // run animation only once
                threshold: 0.3, // start when 30% visible
              });

              return (
                <div
                  key={index}
                  ref={ref}
                  className={`${
                    isDark
                      ? "bg-gray-800 border-gray-700 hover:border-orange-500"
                      : "bg-white border-gray-900 hover:border-orange-500"
                  } p-10 rounded-3xl border-4 transition-all duration-300 hover:-translate-y-3 shadow-lg hover:shadow-2xl`}
                >
                  <div className="text-5xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-3">
                    {inView ? (
                      <CountUp end={parseInt(stat.number)} duration={2} />
                    ) : (
                      "0"
                    )}
                    +
                  </div>

                  <div
                    className={`${
                      isDark ? "text-gray-400" : "text-gray-700"
                    } font-bold text-lg uppercase tracking-wide`}
                  >
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
