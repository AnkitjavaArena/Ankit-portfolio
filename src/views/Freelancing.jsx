import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import SectionHeader from "../components/SectionHeader";

const Freelancing = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="freelancing" className={darkMode ? "bg-slate-50" : "bg-slate-900"}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-24 md:py-32 text-center">
        <SectionHeader eyebrow="Independent work" title="Freelancing" darkMode={darkMode} />

        <div className="mt-6 flex justify-center">
          <span
            className={
              darkMode
                ? "inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-50 text-amber-700"
                : "inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400"
            }
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Upcoming — not yet open for freelance engagements
          </span>
        </div>

        <p className={darkMode ? "mt-6 text-lg leading-relaxed text-slate-600" : "mt-6 text-lg leading-relaxed text-slate-400"}>
          I'm planning to open up for freelance and contract backend work soon. Check back here, or reach out via the contact section below to get on the list early.
        </p>
      </div>
    </div>
  );
};

export default Freelancing;
