import Image from "next/image";
import Hero from "./components/hero";
import Works from "./components/mywork";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import About from "./components/abt";
import ScrollReveal from "./components/scrollreveal";

export default function Home() {
  return (
  <>
      <Hero/>
    
{/* Solid Black Horizontal Line */}
<div className="w-full max-w-5xl mx-auto h-px bg-black my-12 opacity-20"></div>
<ScrollReveal>
    <About/>
    </ScrollReveal>
<ScrollReveal>
    <Works/>
    </ScrollReveal>
   {/* Thin, sub
    tle fading divider */}
{/* Solid Black Horizontal Line */}
<div className="w-full max-w-5xl mx-auto h-px bg-black my-12 opacity-20"></div>

  {/* Solid Black Horizontal Line */}
<div className="w-full max-w-5xl mx-auto h-px bg-black my-12 opacity-20"></div>
<ScrollReveal>
    <Contact/>
    </ScrollReveal>
    </>
  );
}
