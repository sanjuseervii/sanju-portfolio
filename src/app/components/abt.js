import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start mb-16 animate-fade-in-up">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2">About Me</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Who is Sanjana?</h2>
          <div className="w-20 h-1.5 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
          
          {/* Left Side: The Story */}
          <div className="w-full lg:w-1/2 space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Hey there! I'm Sanjana, a 5th-semester computer science student and an independent freelancer who loves bridging the gap between <strong className="text-slate-900 font-bold">creative web design</strong> and <strong className="text-slate-900 font-bold">logical data structures</strong>.
            </p>
            <p>
              I started my coding journey building simple static pages, but quickly realized the power of dynamic data. Today, I don't just build websites; I build intelligent web applications that can handle complex datasets, analyze trends, and present them in beautiful, user-friendly interfaces.
            </p>
            <p>
              Whether you need a full-stack e-commerce platform, a customized data dashboard, or a machine learning model integrated into a web app, I bring a unique hybrid approach to the table.
            </p>
            
            {/* Quick Stats/Highlights */}
            <div className="flex gap-8 pt-6 border-t border-slate-100">
              <div>
                <span className="block text-3xl font-extrabold text-blue-600">10+</span>
                <span className="text-sm font-semibold text-slate-500 uppercase">Projects Built</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-blue-600">Dual</span>
                <span className="text-sm font-semibold text-slate-500 uppercase">Niche Expertise</span>
              </div>
            </div>
          </div>

          {/* Right Side: Skills Showcase */}
          <div className="w-full lg:w-1/2">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Arsenal</h3>
              
              <div className="space-y-8">
                
                {/* Skill Category 1 */}
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Web Development</h4>
                  <div className="flex flex-wrap gap-3">
                    {['React.js', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB'].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg shadow-sm hover:border-blue-400 hover:text-blue-600 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skill Category 2 */}
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Data Science & ML</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-Learn', 'Jupyter'].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg shadow-sm hover:border-blue-400 hover:text-blue-600 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skill Category 3 */}
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Git/GitHub', 'Firebase', 'Figma', 'VS Code', 'Postman'].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg shadow-sm hover:border-blue-400 hover:text-blue-600 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;