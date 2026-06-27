import React, { useState } from 'react';
import { 
  Cpu, 
  FileText, 
  GraduationCap, 
  TrendingUp, 
  Users, 
  Lightbulb
} from 'lucide-react';

import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import AboutSection from './components/sections/AboutSection';
import CareersSection from './components/sections/CareersSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';
import ServiceModal from './components/ServiceModal';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset matches navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    { 
      title: "IT Solutions", 
      icon: <Cpu size={26} />, 
      color: "text-blue-500", 
      border: "border-blue-100", 
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", 
      content: "Empowering enterprises with innovative AI-driven solutions, intelligent automation, and scalable IT strategies.",
      detailedContent: "Empowering enterprises with innovative AI-driven solutions, intelligent automation, and scalable IT strategies that accelerate digital transformation and business growth.",
      col1Title: "AI & Analytics",
      col1: ["• Custom AI Development", "• Predictive Analytics"],
      col2Title: "Processing",
      col2: ["• Natural Language Processing", "• Computer Vision"]
    },
    { 
      title: "Resume AI", 
      icon: <FileText size={26} />, 
      color: "text-purple-500", 
      border: "border-purple-100", 
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800", 
      content: "An intelligent platform that helps professionals craft stunning, personalized resumes in minutes powered by AI.",
      detailedContent: "An intelligent platform that helps professionals craft stunning, personalized resumes in minutes powered by AI that highlights your unique skills and achievements.",
      col1Title: "Features",
      col1: ["• Smart Resume Templates", "• Real-Time Editing"],
      col2Title: "Enhancements",
      col2: ["• Content Suggestions", "• Cloud Storage Sync"]
    },
    { 
      title: "School Tech", 
      icon: <GraduationCap size={26} />, 
      color: "text-yellow-600", 
      border: "border-yellow-100", 
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800", 
      content: "Redefining learning with interactive AI-powered courses, smart progress tracking, and real-world projects.",
      detailedContent: "Redefining learning with interactive AI-powered courses, smart progress tracking, and real-world projects that prepare students for the future of technology.",
      col1Title: "Learning",
      col1: ["• Adaptive Learning Paths", "• Project-Based Curriculum"],
      col2Title: "Tracking",
      col2: ["• Interactive Dashboards", "• Collaborative Tools"]
    },
    { 
      title: "LinkedIn Growth", 
      icon: <TrendingUp size={26} />, 
      color: "text-green-600", 
      border: "border-green-100", 
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=800", 
      content: "Your AI-powered career growth companion - track engagement, analyze network trends, and optimize performance.",
      detailedContent: "Your AI-powered career growth companion - track engagement, analyze network trends, and optimize your LinkedIn performance with real-time analytics.",
      col1Title: "Analytics",
      col1: ["• Profile Insights", "• Smart Analytics Tracking"],
      col2Title: "Growth",
      col2: ["• Career Trend Analysis", "• Performance Dashboard"]
    },
    { 
      title: "Campus Training", 
      icon: <Users size={26} />, 
      color: "text-red-500", 
      border: "border-red-100", 
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800", 
      content: "Bridging the gap between academic learning and industry readiness through AI-based career training and guidance.",
      detailedContent: "Bridging the gap between academic learning and industry readiness through AI-based career training, soft skills enhancement, and hands-on corporate exposure.",
      col1Title: "Development",
      col1: ["• Career Readiness Program", "• Soft Skills Training"],
      col2Title: "Placement",
      col2: ["• Mock Interviews", "• Internship Guidance"]
    },
    { 
      title: "AI Consulting", 
      icon: <Lightbulb size={26} />, 
      color: "text-indigo-500", 
      border: "border-indigo-100", 
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800", 
      content: "Expert guidance on AI strategy, implementation, and optimization to harness the power of artificial intelligence.",
      detailedContent: "Expert guidance on AI strategy, implementation, and optimization to help businesses harness the power of artificial intelligence for competitive advantage.",
      col1Title: "Strategy",
      col1: ["• AI Strategy Planning", "• Technology Assessment"],
      col2Title: "Execution",
      col2: ["• Implementation Support", "• Performance Optimization"]
    }
  ];

  return (
    <div className="bg-[#f3f4f6] text-zinc-600 font-sans selection:bg-blue-100 selection:text-blue-900 min-h-screen w-full antialiased flex flex-col">
      {/* GLOBAL DOT GRID BACKGROUND */}
      <div 
        className="fixed inset-0 w-full pointer-events-none z-0 opacity-[0.4]" 
        style={{ backgroundImage: 'radial-gradient(#cfd5dd 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      <Navbar onScroll={scrollToSection} />

      <main className="flex-grow pt-[80px] w-full">
        <HeroSection onScroll={scrollToSection} />
        <ServicesSection services={services} onSelectService={setSelectedService} />
        <AboutSection />
        <CareersSection />
        <ContactSection />
      </main>

      <Footer />

      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />

      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }
        ::-webkit-scrollbar {
          display: none;
        }
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
          -webkit-tap-highlight-color: transparent;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -webkit-overflow-scrolling: touch; -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes fade-in { 
          from { opacity: 0; transform: translateY(30px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .animate-in { animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        @keyframes moveDown { 
          0% { transform: translateY(-100%); opacity: 0; } 
          15% { opacity: 1; } 
          85% { opacity: 1; } 
          100% { transform: translateY(600%); opacity: 0; } 
        }
        @keyframes moveUp { 
          0% { transform: translateY(100%); opacity: 0; } 
          15% { opacity: 1; } 
          85% { opacity: 1; } 
          100% { transform: translateY(-600%); opacity: 0; } 
        }
        @keyframes spin { 
          from { transform: translate(-50%, -50%) rotate(0deg); } 
          to { transform: translate(-50%, -50%) rotate(360deg); } 
        }
        @keyframes scanline { 
          0% { transform: translateY(-100%); opacity: 0; } 
          50% { opacity: 0.5; } 
          100% { transform: translateY(500%); opacity: 0; } 
        }

        /* Ensure smooth interactions on mobile */
        @media (max-width: 768px) {
          h1 { font-size: 2.8rem !important; line-height: 1 !important; }
        }
      `}</style>
    </div>
  );
}