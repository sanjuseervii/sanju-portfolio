import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "sanjana's portfolio",
  description: "a web developer and data scientist's portfolio showcasing projects, skills, and contact information.",
};

export default function RootLayout({ children }) {
return (
  <html
    lang="en"
    className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
  >
    
    <body className="min-h-screen font-sans text-slate-800 flex flex-col relative">
      
      {/* 1. SEPARATE BACKGROUND DIV: Yeh peeche chipka rahega aur layout ko disturb nahi karega */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <Navbar />
      
      
      <main id="top" className="flex-grow w-full">
        {children}
      </main>
      
      <Footer />
      
    </body>
  </html>
);
}
