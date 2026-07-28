import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";
import { projectData } from "../constants";
import SectionHeader from "../components/SectionHeader";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="projects" className={darkMode ? "bg-white" : "bg-slate-950"}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <SectionHeader eyebrow="What I've built" title="Projects" darkMode={darkMode} />

        <div className="mt-16 flex flex-col">
          {projectData.map((project) => (
            <Card key={project.title} darkMode={darkMode} {...project} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/AnkitjavaArena"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer inline-flex items-center gap-2 py-3 px-6 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            More on GitHub
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
