import React, { useContext, useState } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";

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

  const inputClass =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 placeholder-gray-400";

  return (
    <div
      id="contact"
      className={darkMode ? "bg-gray-100 pt-24 pb-24" : "bg-black pt-24 pb-24 text-white"}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Contact
        </h2>
        <div className="text-center max-w-2xl mx-auto">
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">
            Connect with me
          </h4>
          <p className={darkMode ? "mt-4 text-lg text-gray-500" : "mt-4 text-lg text-gray-300"}>
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden md:grid md:grid-cols-5">
          <form onSubmit={handleSubmit} className="md:col-span-3 p-8 md:p-10 space-y-5">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
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
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
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
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
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
              className="w-full sm:w-auto px-8 py-3 text-base font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-400 transition-colors"
            >
              Submit
            </button>
          </form>

          <div className="md:col-span-2 bg-gray-900 text-white p-8 md:p-10 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                  Email
                </h4>
                <a
                  href="mailto:ankit.scrps@gmail.com"
                  className="mt-2 inline-block text-lg font-medium text-blue-400 hover:text-blue-300"
                >
                  ankit.scrps@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
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
              <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
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
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
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
            ? "w-full bg-white text-black text-lg py-3 flex justify-center mt-20"
            : "w-full bg-gray-900 text-white text-lg py-3 flex justify-center mt-20"
        }
      >
        Made with
        <div className="text-red-500 px-2 text-2xl">&#10084;</div>
        by Ankit Tripathi
      </div>
    </div>
  );
};

export default Contact;
