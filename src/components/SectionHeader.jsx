import React from "react";

const SectionHeader = ({ eyebrow, title, darkMode }) => (
  <div className="text-center">
    {eyebrow && (
      <span
        className={
          darkMode
            ? "inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-50 text-blue-700"
            : "inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-500/10 text-blue-300"
        }
      >
        {eyebrow}
      </span>
    )}
    <h2
      className={
        darkMode
          ? "mt-4 font-heading text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
          : "mt-4 font-heading text-4xl md:text-5xl font-bold tracking-tight text-white"
      }
    >
      {title}
    </h2>
  </div>
);

export default SectionHeader;
