import React, { useContext, useState } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import SectionHeader from "../components/SectionHeader";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name} (${form.email})`
    );
    window.location.href = `mailto:ankit.scrps@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputClass = darkMode
    ? "bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-slate-400"
    : "bg-slate-800 border border-slate-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-slate-500";

  const labelClass = darkMode
    ? "block mb-2 text-sm font-medium text-slate-900"
    : "block mb-2 text-sm font-medium text-slate-200";

  return (
    <div id="contact" className={darkMode ? "bg-slate-50" : "bg-slate-900"}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <SectionHeader eyebrow="Let's talk" title="Contact" darkMode={darkMode} />

        <p className={darkMode ? "mt-6 text-center max-w-xl mx-auto text-lg leading-relaxed text-slate-600" : "mt-6 text-center max-w-xl mx-auto text-lg leading-relaxed text-slate-400"}>
          If you want to know more about me or my work, or if you would just
          like to say hello, send me a message. I'd love to hear from you.
        </p>

        <div className={darkMode ? "mt-14 rounded-2xl shadow-xl overflow-hidden md:grid md:grid-cols-5 bg-white" : "mt-14 rounded-2xl shadow-xl overflow-hidden md:grid md:grid-cols-5 bg-slate-800"}>
          <form onSubmit={handleSubmit} className="md:col-span-3 p-8 md:p-10 space-y-5">
            <div>
              <label htmlFor="name" className={labelClass}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} h-32 resize-none`}
                placeholder="Enter your message"
                required
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer w-full sm:w-auto px-8 py-3 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-500 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Submit
            </button>
          </form>

          <div className="md:col-span-2 bg-slate-950 text-white p-8 md:p-10 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                  Email
                </h4>
                <a
                  href="mailto:ankit.scrps@gmail.com"
                  className="cursor-pointer mt-2 inline-block text-lg font-medium text-blue-400 hover:text-blue-300"
                >
                  ankit.scrps@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                  Address
                </h4>
                <p className="mt-2 text-lg font-medium">
                  Satna, Madhya Pradesh
                  <br />
                  India
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Social
              </h4>
              <div className="flex gap-3 mt-3">
                {contactLinks.map((el) => (
                  <a
                    key={el.name}
                    href={el.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={el.name}
                    className="cursor-pointer w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <img alt={el.name} src={el.url} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          darkMode
            ? "w-full text-sm py-4 flex justify-center items-center gap-1.5 bg-slate-100 text-slate-500"
            : "w-full text-sm py-4 flex justify-center items-center gap-1.5 bg-slate-950 text-slate-400"
        }
      >
        Made with
        <span className="text-red-500 text-base">&#10084;</span>
        by Ankit Tripathi
      </div>
    </div>
  );
};

export default Contact;
