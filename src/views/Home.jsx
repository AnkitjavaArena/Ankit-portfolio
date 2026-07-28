import React, { useContext } from "react";
import heroBg from "../assets/webdev.svg";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url('${darkMode ? cloud : cloudDark}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={darkMode ? "absolute inset-0 bg-white/40" : "absolute inset-0 bg-slate-950/60"} />
      <main
        className="relative mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen gap-12 pt-28 pb-16"
        id="/"
      >
        <div className="sm:text-center lg:text-left max-w-2xl">
          <span
            className={
              darkMode
                ? "inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-50 text-blue-700"
                : "inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-500/10 text-blue-300"
            }
          >
            Backend Java Developer
          </span>
          <h1 className="mt-5 font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className={darkMode ? "block text-slate-900" : "block text-white"}>
              Hi, I'm Ankit
            </span>
            <span className="block text-blue-500 mt-1">
              <Typical
                steps={[
                  "Backend Java Developer",
                  1200,
                  "Full Stack Java Developer",
                  1200,
                ]}
                loop={Infinity}
              />
            </span>
          </h1>
          <p
            className={
              darkMode
                ? "mt-6 text-lg leading-relaxed sm:mx-auto md:mx-0 max-w-xl text-slate-700"
                : "mt-6 text-lg leading-relaxed sm:mx-auto md:mx-0 max-w-xl text-slate-200"
            }
          >
            I'm a Backend Java Developer building reliable, scalable systems with Java, Spring Boot, and REST APIs — powering web, Android, and iOS applications alongside frontend and mobile teams. Currently working on microservices and event-driven architectures at Neosoft.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 sm:justify-center lg:justify-start">
            <a
              href={`${process.env.PUBLIC_URL}/Ankit_Resume_Java.pdf`}
              download="Ankit_Resume_Java.pdf"
              className="cursor-pointer inline-flex items-center justify-center px-7 py-3 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Download Resume
            </a>

            <div className="flex items-center gap-3">
              {contactLinks.map((el) => (
                <a
                  key={el.name}
                  href={el.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={el.name}
                  className={
                    darkMode
                      ? "cursor-pointer w-11 h-11 rounded-full flex items-center justify-center border transition-colors bg-white border-slate-200 hover:bg-slate-100"
                      : "cursor-pointer w-11 h-11 rounded-full flex items-center justify-center border transition-colors bg-white/5 border-white/10 hover:bg-white/10"
                  }
                >
                  <img alt={el.name} src={el.url} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              y: 0,
              opacity: 1,
              transition: { type: "spring" },
            },
            hidden: { opacity: 0, y: 60 },
          }}
          src={heroBg}
          alt="Software development illustration"
          className="md:w-2/5 hidden sm:block relative"
        />
      </main>
    </div>
  );
};

export default Home;
