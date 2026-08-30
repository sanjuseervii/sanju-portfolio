"use client";
import React from 'react';

const Works = () => {
  // Yahan tum apne projects ki list update karogi
  const projects = [
    {
    id: 1,
    title: "House Price Predictor",
    category: "Machine Learning & Web",
    description: "An interactive web application integrated with a machine learning model to accurately predict real estate prices based on various housing features.",
    techStack: ["Python", "Machine Learning", "Web UI"],
    image: "/projects/house-price-prediction.png", 
    link: "https://house-price-predictor-web-page.vercel.app/"
  },
  {
    id: 2,
    title: "E-Commerce Data Analytics",
    category: "Data Science",
    description: "A comprehensive Exploratory Data Analysis (EDA) project extracting actionable business insights and trends from complex e-commerce sales datasets.",
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    image: "/projects/e-commerce.jpg",
    link: "https://github.com/sanjuseervii/e-commerce-data-analysis-"
  },
  {
    id: 3,
    title: "Employee Attrition Analysis",
    category: "Data Analytics",
    description: "A corporate data analysis project focusing on identifying key factors behind employee turnover using statistical visualization techniques.",
    techStack: ["Python", "Data Cleaning", "Data Vizualization"],
    image: "/projects/employee-attrition.png",
    link: "https://github.com/sanjuseervii/employee-attrition-analysis"
  },
  {
    id: 4,
    title: "IPL Fantasy 2026 Tracker",
    category: "Web Application",
    description: "A dynamic dashboard utilizing algorithms to track Indian Premier League fantasy cricket points and analyze individual player statistics.",
    techStack: ["React", "Cloud Firestore", "API Integration"],
    image: "/projects/ipl-fantasy.png",
    link: "https://github.com/sanjuseervii/ipl-fanatsy-2026"
  },
  {
    id: 5,
    title: "buy me a tea - A donation platform",
    category: "Web Application",
    description: " A Patreon clone .",
    techStack: ["next.js", "nodejs", "API Integration", "MongoDB atlas" ],
    image: "/projects/buy-me-a-tea.png",
    link: "https://getmetea.vercel.app/"
  },
  {id: 6,
    title: "financity -side hustle recommenenadtion system  ",
    category: "machine learning  model, full stack development ",
     description:"Developed a full-stack web application that predicts and recommends the top 3 side hustles for users using a Random Forest machine learning model. The platform includes secure Google Authentication and an integrated Gemini AI chatbot for real-time assistance.",
    techStack: ["react.js","python", "pandas","numpy","scikit-learn","data visulaization","mern stack" ],
    image: "/projects/financity.png",
    link: "finnacity-six.vercel.app"

  },

  {
    id: 7,
    title: "customer churn prediction model ",
    category: "ml model ",
    description: "This project is a complete Machine Learning pipeline designed to predict customer churn in a telecommunications dataset. The primary business objective was to maximize the Recall of the minority class (Churners) without drastically hurting Precision. By doing so, the model ensures that the company can proactively identify and retain at-risk customers, saving significant customer acquisition costs.",
    techStack: ["python", "pandas","numpy","scikit-learn","data visulaization","xgboost" ],
    image: "/projects/churnpredict.png",
    link: "https://github.com/sanjuseervii/churn-prediction"
  }

  ];

  return (
    <section id="works" className="w-full py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Featured Works</h2>
          <div className="w-20 h-1.5 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* --- IMAGE SECTION UPDATED --- */}
              {/* Ab gradient ki jagah actual <img> tag hai */}
              <div className="w-full h-60 relative overflow-hidden bg-slate-100 border-b border-slate-200">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  // Agar image load na ho toh default error handle karne ke liye:
                  onError={(e) => {e.target.src = "https://via.placeholder.com/600x400?text=Project+Screenshot"}}
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all duration-300"></div>
              </div>

              {/* Project Info Section */}
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-md border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Works;