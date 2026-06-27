import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Clock } from 'lucide-react';
import BlueprintGrid from '../BlueprintGrid';

export default function AboutSection() {
  const aboutRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setAboutVisible(true);
    }, { threshold: 0.05 });

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={aboutRef} 
      className="scroll-mt-20 relative w-full py-8 md:py-12 px-6 md:px-10 lg:px-12 border-t border-zinc-200/70 bg-white/30 overflow-hidden"
    >
      <BlueprintGrid />
      <div className="w-full max-w-[1920px] 2xl:px-20 mx-auto relative z-10 flex flex-col items-center text-center">
        <div className={`w-full max-w-5xl flex flex-col items-center transition-all duration-1000 transform ${aboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-zinc-900 uppercase tracking-tighter mb-6 md:mb-10 text-center">
            About <span className="text-red-500">Us</span>
          </h2>
          <div className="w-full text-center">
            <h3 className="text-2xl md:text-4xl lg:text-6xl font-black text-zinc-900 uppercase tracking-tighter mb-6 lg:mb-8 leading-[1.1] mx-auto">
              Technology with Purpose.
            </h3>
            <p className="text-zinc-500 text-lg md:text-3xl leading-relaxed font-normal mb-6 md:mb-8 max-w-4xl mx-auto">
              KRYTIL PRIVATE LIMITED is a technology-driven company focused on building intelligent software solutions that solve real-world problems.
            </p>
            <p className="text-zinc-500 text-lg md:text-3xl leading-relaxed font-normal mb-8 lg:mb-12 max-w-4xl opacity-80 mx-auto">
              We empower businesses, students, and professionals with AI-driven software solutions, scalable platforms, and future-ready digital systems. We help our partners leverage automation and scalable systems to accelerate growth and innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 border-t border-zinc-200 pt-8 md:pt-16 mt-8 w-full">
              {[
                { value: "5+", label: "Industry Experience", icon: <Award className="text-indigo-600 mb-4" size={44} />, delay: '0.2s' },
                { value: "50+", label: "Expert Team", icon: <Users className="text-red-600 mb-4" size={44} />, delay: '0.4s' },
                { value: "24/7", label: "Support", icon: <Clock className="text-green-600 mb-4" size={44} />, delay: '0.6s' }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className={`group transition-all duration-1000 transform flex flex-col items-center ${aboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} 
                  style={{ transitionDelay: stat.delay }}
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                  <div className="text-6xl md:text-8xl font-black text-zinc-900 mb-2 tracking-tighter uppercase whitespace-nowrap text-center">{stat.value}</div>
                  <h4 className="text-zinc-400 font-black uppercase tracking-[0.2em] text-xs md:text-lg leading-tight text-center">
                    {stat.label.split(' ').map((word, idx) => <span key={idx} className="block">{word}</span>)}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
