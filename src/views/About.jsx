import React, { useContext } from "react";
import { techStack, familiarStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";

const TechGrid = ({ items, darkMode }) => (
  <div className="mt-6 flex flex-wrap gap-3">
    {items.map((el) => (
      <motion.div
        key={el.name}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: { y: 0, opacity: 1, transition: { type: "spring" } },
          hidden: { opacity: 0, y: 20 },
        }}
        className={
          darkMode
            ? "cursor-default flex items-center gap-3 py-2.5 px-4 rounded-xl border transition-transform duration-200 hover:-translate-y-0.5 bg-slate-50 border-slate-200 hover:border-blue-300"
            : "cursor-default flex items-center gap-3 py-2.5 px-4 rounded-xl border transition-transform duration-200 hover:-translate-y-0.5 bg-slate-900 border-slate-800 hover:border-blue-500/40"
        }
      >
        <img alt={el.name} src={el.link} className="w-7 h-7" />
        <span className={darkMode ? "text-sm font-medium text-slate-800" : "text-sm font-medium text-slate-200"}>
          {el.name}
        </span>
      </motion.div>
    ))}
  </div>
);

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const textMuted = darkMode ? "text-slate-600" : "text-slate-400";
  const headingAccent = darkMode ? "text-blue-600" : "text-blue-400";

  return (
    <div id="about" className={darkMode ? "bg-white" : "bg-slate-950"}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <SectionHeader eyebrow="Get to know me" title="About Me" darkMode={darkMode} />

        <div className="mt-16 max-w-3xl mx-auto">
          <h4 className={`text-2xl font-heading font-semibold ${headingAccent}`}>
            A bit about me
          </h4>
          <p className={`mt-3 text-lg leading-relaxed ${textMuted}`}>
            Software Developer, team player, and leader with a versatile skill set. I've built software products from scratch, with a focus on backend systems that are reliable, well-tested, and easy to maintain. My core stack is Java and Spring Boot — Spring Web for REST APIs, Spring Data/JPA for persistence with MySQL, PostgreSQL, and MongoDB, and Kafka, RabbitMQ, and AWS SQS/SNS for building event-driven systems around Enterprise Integration Patterns using Spring Integration.
          </p>

          <h4 className={`mt-12 text-2xl font-heading font-semibold ${headingAccent}`}>
            Technologies and Tools
          </h4>
          <p className={`mt-3 text-lg leading-relaxed ${textMuted}`}>
            For testing, I write unit tests with Groovy and Spock. I manage dependencies and builds with Maven and Jenkins, containerize services with Docker and Docker Compose, and orchestrate deployments with Kubernetes. I always aim to write clean, well-organized, and testable code — see the stack I work with below.
          </p>
        </div>

        <TechGrid items={techStack} darkMode={darkMode} />

        <div className="mt-16 max-w-3xl mx-auto">
          <h4 className={`text-2xl font-heading font-semibold ${headingAccent}`}>
            Also Familiar With
          </h4>
          <p className={`mt-3 text-lg leading-relaxed ${textMuted}`}>
            Technologies I've worked with on the job that aren't reflected on my current resume yet, plus tools I'm familiar with at a foundational level.
          </p>
        </div>

        <TechGrid items={familiarStack} darkMode={darkMode} />
      </div>
    </div>
  );
};

export default About;
