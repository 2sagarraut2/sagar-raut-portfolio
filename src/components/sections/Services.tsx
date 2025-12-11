import React from "react";
import { Sparkles, Zap, Target, Users } from "lucide-react";
import { services } from '../../config/services';
import * as Icons from "lucide-react";

interface ServicesProps {
  isDark: boolean;
}

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Services: React.FC<ServicesProps> = ({ isDark }) => {

  return (
    <section
      id="services"
      className={`py-32 ${isDark ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
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
              What I Offer
            </span>
          </div>

          <h2
            className={`text-5xl sm:text-7xl font-black ${
              isDark ? "text-white" : "text-gray-900"
            } mb-8 tracking-tighter`}
          >
            SERVICES
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => { 
            const Icon = Icons[service.icon as keyof typeof Icons];
          return(
            <div
              key={index}
              className={`${
                isDark
                  ? "bg-gray-800 border-gray-700 hover:border-orange-500"
                  : "bg-gradient-to-br from-orange-50 to-pink-50 border-gray-900 hover:border-orange-500"
              } p-10 rounded-3xl border-4 transition-all duration-300 hover:-translate-y-3 shadow-lg hover:shadow-2xl group`}
            >
              <div
                className={`${
                  isDark ? "text-orange-400" : "text-orange-500"
                } mb-8 group-hover:scale-110 transition-transform`}
              >
                {Icon && <Icon size={56} strokeWidth={2.5} />}
              </div>

              <h3
                className={`text-2xl font-black ${
                  isDark ? "text-white" : "text-gray-900"
                } mb-4 uppercase tracking-tight`}
              >
                {service.title}
              </h3>

              <p
                className={`${
                  isDark ? "text-gray-300" : "text-gray-700"
                } leading-relaxed font-medium text-lg`}
              >
                {service.description}
              </p>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default Services;
