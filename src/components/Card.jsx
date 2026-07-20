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
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 },
      }}
      className={
        darkMode
          ? "w-full bg-white rounded-lg border border-gray-200 shadow-lg my-8 overflow-hidden md:flex"
          : "w-full bg-gray-800 rounded-lg border border-gray-700 shadow-lg my-8 overflow-hidden md:flex"
      }
    >
      <div
        className={
          darkMode
            ? "md:w-64 flex-shrink-0 bg-gray-100 flex flex-col items-center justify-center p-8 text-center"
            : "md:w-64 flex-shrink-0 bg-gray-900 flex flex-col items-center justify-center p-8 text-center"
        }
      >
        {image ? (
          <img className="rounded-lg w-full" src={image} alt={title} />
        ) : confidential ? (
          <>
            <svg
              className="w-12 h-12 text-gray-400"
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
            <p className={darkMode ? "mt-3 text-sm text-gray-500" : "mt-3 text-sm text-gray-400"}>
              Confidential
              <br />
              Client Project
            </p>
          </>
        ) : (
          <>
            <svg
              className="w-12 h-12 text-amber-400"
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
            <p className={darkMode ? "mt-3 text-sm text-gray-500" : "mt-3 text-sm text-gray-400"}>
              {status || "Coming Soon"}
            </p>
          </>
        )}
      </div>

      <div className="p-6 flex-1">
        <div className="flex items-center flex-wrap gap-2">
          <h5 className={darkMode ? "text-2xl font-bold tracking-tight text-gray-900" : "text-2xl font-bold tracking-tight text-white"}>
            {title}
          </h5>
          {tag && (
            <span className={darkMode ? "text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-700" : "text-xs font-semibold px-2.5 py-1 rounded-full bg-green-900 text-green-300"}>
              {tag}
            </span>
          )}
          {status && (
            <span className={darkMode ? "text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700" : "text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-900 text-amber-300"}>
              {status}
            </span>
          )}
        </div>
        {meta && (
          <p className="mt-1 text-sm font-medium text-blue-500">{meta}</p>
        )}
        <p className={darkMode ? "mt-3 font-normal text-gray-700" : "mt-3 font-normal text-gray-400"}>
          {description}
        </p>

        {contributions && contributions.length > 0 && (
          <ul className={darkMode ? "mt-3 space-y-1.5 list-disc list-inside text-sm text-gray-700" : "mt-3 space-y-1.5 list-disc list-inside text-sm text-gray-400"}>
            {contributions.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}

        {techTags && techTags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {techTags.map((tag) => (
              <span
                key={tag}
                className={darkMode ? "text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-600" : "text-xs font-medium px-2.5 py-1 rounded-full bg-blue-900 text-blue-300"}
              >
                {tag}
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
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300"
              >
                View Code
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
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
