import React, { useContext } from "react";
import { experienceData } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";

const Experience = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="experience" className={darkMode ? "bg-slate-50" : "bg-slate-900"}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <SectionHeader eyebrow="Career journey" title="Experience" darkMode={darkMode} />

        <div className="mt-16 relative">
          <div
            className={
              darkMode
                ? "absolute left-4 top-2 bottom-2 w-px bg-slate-300"
                : "absolute left-4 top-2 bottom-2 w-px bg-slate-700"
            }
          />
          <div className="space-y-10">
            {experienceData.map((job) => (
              <motion.div
                key={job.role + job.duration}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -20 },
                }}
                transition={{ duration: 0.4 }}
                className="relative pl-12"
              >
                <span
                  className={
                    job.current
                      ? "absolute left-1.5 top-1.5 w-5 h-5 rounded-full border-4 border-blue-500 bg-blue-500/20"
                      : darkMode
                      ? "absolute left-1.5 top-1.5 w-5 h-5 rounded-full border-4 border-slate-300 bg-white"
                      : "absolute left-1.5 top-1.5 w-5 h-5 rounded-full border-4 border-slate-700 bg-slate-900"
                  }
                />

                <div
                  className={
                    darkMode
                      ? "rounded-2xl border p-6 bg-white border-slate-200"
                      : "rounded-2xl border p-6 bg-slate-800/60 border-slate-700"
                  }
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4
                      className={
                        darkMode
                          ? "text-xl font-heading font-bold text-slate-900"
                          : "text-xl font-heading font-bold text-white"
                      }
                    >
                      {job.role}
                    </h4>
                    <span
                      className={
                        darkMode
                          ? "text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700"
                          : "text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300"
                      }
                    >
                      {job.duration}
                    </span>
                  </div>
                  <p className={darkMode ? "mt-1 text-sm font-medium text-blue-600" : "mt-1 text-sm font-medium text-blue-400"}>
                    {job.company}
                  </p>
                  <p className={darkMode ? "mt-0.5 text-sm text-slate-500" : "mt-0.5 text-sm text-slate-400"}>
                    {job.project}
                  </p>
                  <ul
                    className={
                      darkMode
                        ? "mt-4 space-y-1.5 list-disc list-inside text-sm text-slate-600"
                        : "mt-4 space-y-1.5 list-disc list-inside text-sm text-slate-400"
                    }
                  >
                    {job.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
