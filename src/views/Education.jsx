import React, { useContext } from "react";
import { educationData, certificationData } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";

const Education = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="education" className={darkMode ? "bg-white" : "bg-slate-950"}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <SectionHeader eyebrow="Academic background" title="Education" darkMode={darkMode} />

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {educationData.map((ed) => (
            <motion.div
              key={ed.degree}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              transition={{ duration: 0.4 }}
              className={
                darkMode
                  ? "rounded-2xl border p-6 bg-slate-50 border-slate-200"
                  : "rounded-2xl border p-6 bg-slate-900 border-slate-800"
              }
            >
              <h4
                className={
                  darkMode
                    ? "text-lg font-heading font-semibold text-slate-900"
                    : "text-lg font-heading font-semibold text-white"
                }
              >
                {ed.degree}
              </h4>
              <p className={darkMode ? "mt-1 text-sm font-medium text-blue-600" : "mt-1 text-sm font-medium text-blue-400"}>
                {ed.institution}
              </p>
              <p className={darkMode ? "mt-1 text-sm text-slate-500" : "mt-1 text-sm text-slate-400"}>
                {ed.duration}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14">
          <h4 className={darkMode ? "text-xl font-heading font-semibold text-blue-600" : "text-xl font-heading font-semibold text-blue-400"}>
            Training &amp; Certifications
          </h4>
          <div className="mt-5 flex flex-wrap gap-3">
            {certificationData.map((c) => (
              <div
                key={c.name}
                className={
                  darkMode
                    ? "flex items-start gap-3 py-3 px-4 rounded-xl border bg-slate-50 border-slate-200 max-w-sm"
                    : "flex items-start gap-3 py-3 px-4 rounded-xl border bg-slate-900 border-slate-800 max-w-sm"
                }
              >
                <svg
                  className="w-5 h-5 mt-0.5 text-emerald-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className={darkMode ? "text-sm font-medium text-slate-800" : "text-sm font-medium text-slate-200"}>
                    {c.name}
                  </p>
                  <p className="text-xs text-slate-500">{c.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
