import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../themeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

const links = [
  { name: "Home", route: "/" },
  { name: "About", route: "about" },
  { name: "Experience", route: "experience" },
  { name: "Services", route: "services" },
  { name: "Projects", route: "projects" },
  { name: "Freelancing", route: "freelancing" },
  { name: "Education", route: "education" },
  { name: "Contact", route: "contact" },
];

const SunIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const darkMode = theme.state.darkMode;

  const toggleTheme = () => {
    theme.dispatch({ type: darkMode ? "LIGHTMODE" : "DARKMODE" });
  };

  return (
    <>
      <nav
        className={
          darkMode
            ? "fixed top-4 inset-x-4 md:inset-x-8 z-50 rounded-2xl border backdrop-blur-md shadow-lg bg-white/80 border-slate-200"
            : "fixed top-4 inset-x-4 md:inset-x-8 z-50 rounded-2xl border backdrop-blur-md shadow-lg bg-slate-900/80 border-slate-800"
        }
      >
        <div className="flex justify-between items-center px-4 md:px-6 py-3">
          <Link
            to="/"
            spy
            smooth
            className={
              darkMode
                ? "cursor-pointer text-lg font-heading font-semibold tracking-tight text-slate-900"
                : "cursor-pointer text-lg font-heading font-semibold tracking-tight text-white"
            }
          >
            Ankit Tripathi
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {links.map((el) => (
              <Link
                key={el.name}
                to={el.route}
                spy
                smooth
                activeClass={
                  darkMode
                    ? "!text-blue-600 !bg-blue-50"
                    : "!text-blue-400 !bg-blue-500/10"
                }
                className={
                  darkMode
                    ? "cursor-pointer px-2.5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    : "cursor-pointer px-2.5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors text-slate-300 hover:text-white hover:bg-white/5"
                }
              >
                {el.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={darkMode ? "Switch to dark mode" : "Switch to light mode"}
              className={
                darkMode
                  ? "cursor-pointer p-2 rounded-lg transition-colors text-slate-600 hover:bg-slate-100"
                  : "cursor-pointer p-2 rounded-lg transition-colors text-slate-300 hover:bg-white/5"
              }
            >
              {darkMode ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>

            <div className="lg:hidden">
              <Hamburger
                toggled={toggle}
                size={20}
                duration={0.6}
                toggle={setToggle}
                color={darkMode ? "#0F172A" : "#ffffff"}
              />
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={
              darkMode
                ? "lg:hidden fixed top-20 inset-x-4 z-40 max-h-[70vh] overflow-y-auto rounded-2xl border backdrop-blur-md shadow-lg p-2 bg-white/95 border-slate-200"
                : "lg:hidden fixed top-20 inset-x-4 z-40 max-h-[70vh] overflow-y-auto rounded-2xl border backdrop-blur-md shadow-lg p-2 bg-slate-900/95 border-slate-800"
            }
          >
            {links.map((el) => (
              <Link
                key={el.name}
                to={el.route}
                spy
                smooth
                onClick={() => setToggle(false)}
                className={
                  darkMode
                    ? "cursor-pointer block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-100"
                    : "cursor-pointer block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-white/5"
                }
              >
                {el.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
