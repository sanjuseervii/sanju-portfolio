import React from 'react';

const hero = () => {
  return (
    <div className="min-h-screen relative font-sans text-slate-800">
      
      {/* --- CUSTOM CSS FOR SMOOTH LOAD ANIMATIONS --- */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-scale {
          animation: fadeInScale 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
          opacity: 0; /* Stays hidden until animation starts */
        }
      `}</style>

      {/* --- WHITE GRID BACKGROUND --- */}
      

      {/* --- HERO SECTION --- */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-32 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
        
        {/* Left Side: Animated Typography & Description */}
        <div className="w-full md:w-3/5 flex flex-col justify-center text-center md:text-left animate-fade-in-up">
          
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-semibold text-sm w-max mx-auto md:mx-0">
            👋 Welcome to my portfolio
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Hi, I'm <span className="text-blue-600">Sanjana.</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-6">
            Web Developer <span className="text-slate-400 font-light">&</span> <br className="hidden md:block" /> Data Scientist
          </h2>
          
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
            I craft seamless full-stack web applications and transform complex datasets into clear, actionable insights. Let's build something scalable and intelligent together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a href="#works" className="px-8 py-3.5 w-full sm:w-auto bg-[#0f172a] hover:bg-slate-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3.5 w-full sm:w-auto bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg transition-all duration-300 text-center">
              Contact Me
            </a>
          </div>
          
        </div>

        {/* Right Side: Animated Photo with Original Background */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-end animate-fade-in-scale">
          {/* Image Container with subtle styling to frame the original background nicely */}
          <div className="relative w-[85%] sm:w-[70%] md:w-full max-w-[400px]">
            {/* Decorative background shape (gives a modern offset effect) */}
            <div className="absolute inset-0 bg-blue-600 rounded-3xl transform translate-x-4 translate-y-4 -z-10 opacity-20"></div>
            
            <img 
              src="/sanju.png" 
              alt="Sanjana" 
              className="w-full h-auto object-cover rounded-3xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>

      </main>

    </div>
  );
};

export default hero;