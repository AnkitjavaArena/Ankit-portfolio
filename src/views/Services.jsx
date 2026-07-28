import React, { useContext } from "react";
import { serviceData } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";

const Services = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="services" className={darkMode ? "bg-slate-50" : "bg-slate-900"}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <SectionHeader eyebrow="How I can help" title="Services" darkMode={darkMode} />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map((el) => (
            <motion.div
              key={el.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 24 },
              }}
              transition={{ duration: 0.4 }}
              className={
                darkMode
                  ? "p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg bg-white border-slate-200"
                  : "p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg bg-slate-800/60 border-slate-700"
              }
            >
              <div
                className={
                  darkMode
                    ? "w-14 h-14 rounded-xl flex items-center justify-center bg-blue-50"
                    : "w-14 h-14 rounded-xl flex items-center justify-center bg-blue-500/10"
                }
              >
                <img src={el.img} alt="" className="w-8 h-8" />
              </div>
              <h4 className={darkMode ? "mt-5 text-lg font-heading font-semibold text-slate-900" : "mt-5 text-lg font-heading font-semibold text-white"}>
                {el.name}
              </h4>
              <p className={darkMode ? "mt-2 text-sm leading-relaxed text-slate-600" : "mt-2 text-sm leading-relaxed text-slate-400"}>
                {el.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
