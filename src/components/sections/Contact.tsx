import React from "react";
import { Mail, Phone, Linkedin, ArrowRight } from "lucide-react";
import { personalInfo } from "@/config/resume";

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  return (
    <section
      id="contact"
      className={`py-32 ${
        isDark
          ? "bg-gray-800"
          : "bg-gradient-to-br from-orange-50 via-red-50 to-pink-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
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
              Get In Touch
            </span>
          </div>

          <h2
            className={`text-5xl sm:text-7xl font-black ${
              isDark ? "text-white" : "text-gray-900"
            } mb-8 tracking-tighter`}
          >
            LET'S WORK TOGETHER
          </h2>

          <p
            className={`text-2xl ${
              isDark ? "text-gray-300" : "text-gray-700"
            } max-w-3xl mx-auto font-bold`}
          >
            Have a project in mind? Let's discuss how I can help bring your ideas
            to life.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            className={`${
              isDark
                ? "bg-gray-900 border-gray-700 hover:border-orange-500"
                : "bg-white border-gray-900 hover:border-orange-500"
            } p-10 rounded-3xl border-4 transition-all duration-300 hover:-translate-y-3 text-center group shadow-lg hover:shadow-2xl`}
          >
            <Mail
              className={`${
                isDark ? "text-orange-400" : "text-orange-500"
              } mx-auto mb-6 group-hover:scale-110 transition-transform`}
              size={56}
              strokeWidth={2.5}
            />
            <h3
              className={`text-2xl font-black ${
                isDark ? "text-white" : "text-gray-900"
              } mb-3 uppercase tracking-tight`}
            >
              Email
            </h3>
            <p
              className={`${
                isDark ? "text-gray-300" : "text-gray-700"
              } font-bold break-all`}
            >
              {personalInfo.email}
            </p>
          </a>

          {/* Phone */}
          {/* <a
            href="tel:+919604848364"
            className={`${
              isDark
                ? "bg-gray-900 border-gray-700 hover:border-orange-500"
                : "bg-white border-gray-900 hover:border-orange-500"
            } p-10 rounded-3xl border-4 transition-all duration-300 hover:-translate-y-3 text-center group shadow-lg hover:shadow-2xl`}
          >
            <Phone
              className={`${
                isDark ? "text-orange-400" : "text-orange-500"
              } mx-auto mb-6 group-hover:scale-110 transition-transform`}
              size={56}
              strokeWidth={2.5}
            />
            <h3
              className={`text-2xl font-black ${
                isDark ? "text-white" : "text-gray-900"
              } mb-3 uppercase tracking-tight`}
            >
              Phone
            </h3>
            <p
              className={`${
                isDark ? "text-gray-300" : "text-gray-700"
              } font-bold`}
            >
              +91 9604848364
            </p>
          </a> */}

          {/* LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDark
                ? "bg-gray-900 border-gray-700 hover:border-orange-500"
                : "bg-white border-gray-900 hover:border-orange-500"
            } p-10 rounded-3xl border-4 transition-all duration-300 hover:-translate-y-3 text-center group shadow-lg hover:shadow-2xl`}
          >
            <Linkedin
              className={`${
                isDark ? "text-orange-400" : "text-orange-500"
              } mx-auto mb-6 group-hover:scale-110 transition-transform`}
              size={56}
              strokeWidth={2.5}
            />
            <h3
              className={`text-2xl font-black ${
                isDark ? "text-white" : "text-gray-900"
              } mb-3 uppercase tracking-tight`}
            >
              LinkedIn
            </h3>
            <p
              className={`${
                isDark ? "text-gray-300" : "text-gray-700"
              } font-bold`}
            >
              Connect with me
            </p>
          </a>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-full font-black text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 uppercase tracking-wide"
          >
            Start a Conversation
            <ArrowRight
              className="group-hover:translate-x-2 transition-transform"
              size={28}
              strokeWidth={3}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
