import React from "react";
import { motion } from "framer-motion";

const Card = ({
  title,
  company,
  role,
  tag,
  status,
  description,
  contributions,
  techTags,
  image,
  githubLink,
  demoLink,
  confidential,
  darkMode,
}) => {
  const meta = [role, company].filter(Boolean).join(" · ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 },
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={
        darkMode
          ? "w-full rounded-2xl border my-6 overflow-hidden md:flex transition-shadow duration-200 hover:shadow-xl bg-white border-slate-200 shadow-sm"
          : "w-full rounded-2xl border my-6 overflow-hidden md:flex transition-shadow duration-200 hover:shadow-xl bg-slate-900 border-slate-800 shadow-sm shadow-black/30"
      }
    >
      <div
        className={
          darkMode
            ? "md:w-64 flex-shrink-0 flex flex-col items-center justify-center p-8 text-center bg-slate-50"
            : "md:w-64 flex-shrink-0 flex flex-col items-center justify-center p-8 text-center bg-slate-950"
        }
      >
        {image ? (
          <img className="rounded-xl w-full" src={image} alt={title} />
        ) : confidential ? (
          <>
            <svg
              className={darkMode ? "w-10 h-10 text-slate-400" : "w-10 h-10 text-slate-600"}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v4h8z"
              />
            </svg>
            <p className="mt-3 text-sm text-slate-500">
              Confidential
              <br />
              Client Project
            </p>
          </>
        ) : (
          <>
            <svg
              className="w-10 h-10 text-amber-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L1.5 3l1.5-1.5L7.5 4.5v1.409l4.26 4.26"
              />
            </svg>
            <p className="mt-3 text-sm text-slate-500">
              {status || "Coming Soon"}
            </p>
          </>
        )}
      </div>

      <div className="p-6 md:p-8 flex-1">
        <div className="flex items-center flex-wrap gap-2">
          <h5
            className={
              darkMode
                ? "text-xl md:text-2xl font-heading font-bold tracking-tight text-slate-900"
                : "text-xl md:text-2xl font-heading font-bold tracking-tight text-white"
            }
          >
            {title}
          </h5>
          {tag && (
            <span
              className={
                darkMode
                  ? "text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700"
                  : "text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400"
              }
            >
              {tag}
            </span>
          )}
          {status && (
            <span
              className={
                darkMode
                  ? "text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700"
                  : "text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400"
              }
            >
              {status}
            </span>
          )}
        </div>
        {meta && (
          <p className={darkMode ? "mt-1.5 text-sm font-medium text-blue-600" : "mt-1.5 text-sm font-medium text-blue-400"}>
            {meta}
          </p>
        )}
        <p className={darkMode ? "mt-3 leading-relaxed text-slate-600" : "mt-3 leading-relaxed text-slate-400"}>
          {description}
        </p>

        {contributions && contributions.length > 0 && (
          <ul
            className={
              darkMode
                ? "mt-4 space-y-1.5 list-disc list-inside text-sm text-slate-600"
                : "mt-4 space-y-1.5 list-disc list-inside text-sm text-slate-400"
            }
          >
            {contributions.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}

        {techTags && techTags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {techTags.map((t) => (
              <span
                key={t}
                className={
                  darkMode
                    ? "text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700"
                    : "text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300"
                }
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {(githubLink || demoLink) && (
          <div className="mt-5 flex gap-3">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                className={
                  darkMode
                    ? "cursor-pointer inline-flex items-center py-2 px-4 text-sm font-medium rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 text-slate-900 bg-slate-100 hover:bg-slate-200"
                    : "cursor-pointer inline-flex items-center py-2 px-4 text-sm font-medium rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 text-white bg-slate-800 hover:bg-slate-700"
                }
              >
                View Code
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Watch Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
