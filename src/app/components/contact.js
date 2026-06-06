"use client";
import React from 'react';

const Contact = () => {
  const contactMethods = [
    {
      name: "Email Me",
      value: "devissanju7@gmail.com",
      link: "mailto:devissanju7@gmail.com",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "text-blue-500",
      bgHover: "group-hover:bg-blue-500"
    },
    {
      name: "LinkedIn",
      value: "Let's Connect",
      link: "https://www.linkedin.com/in/sanju-devi-s/", 
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ),
      color: "text-blue-700",
      bgHover: "group-hover:bg-blue-700"
    },
    {
      name: "GitHub",
      value: "@sanjuseervii",
      link: "https://github.com/sanjuseervii",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      color: "text-slate-900",
      bgHover: "group-hover:bg-slate-900"
    }
  ];

  return (
    <section id="contact" className="w-full py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Centered Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">Next Steps</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Let's Work Together</h2>
          <div className="w-20 h-1.5 bg-blue-600 mt-6 rounded-full"></div>
          <p className="mt-8 text-slate-600 text-lg max-w-2xl">
            I'm currently available for freelance projects. Whether you have a specific requirement for web development, data analysis, or just want to discuss an idea, my inbox is always open.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <a 
              key={index}
              href={method.link}
              target={method.name !== "Email Me" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-full bg-slate-50 flex justify-center items-center mb-6 transition-colors duration-300 ${method.color} ${method.bgHover} group-hover:text-white`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{method.name}</h3>
              <p className="text-slate-500 font-medium">{method.value}</p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;