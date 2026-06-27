import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MessageCircle, Link as LinkIcon } from 'lucide-react';
import TiltContactCard from '../TiltContactCard';

export default function ContactSection() {
  const contactRef = useRef(null);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setContactVisible(true);
    }, { threshold: 0.05 });

    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  return (
    <section 
      id="contact" 
      ref={contactRef} 
      className="scroll-mt-20 relative w-full py-12 lg:py-24 px-6 md:px-10 lg:px-12 border-t border-zinc-200/70 bg-zinc-50/40 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-blue-500/5 blur-[180px] rounded-full animate-[spin_40s_linear_infinite] pointer-events-none"></div>
      <div className="w-full max-w-[1920px] 2xl:px-20 mx-auto relative z-10 flex flex-col items-center">
        <h2 className={`text-5xl md:text-8xl lg:text-[10rem] font-black text-zinc-900 uppercase tracking-tighter mb-10 md:mb-16 transition-all duration-1000 transform text-center ${contactVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          Get In Touch
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
           <TiltContactCard 
             href="mailto:Hr@krytil.com" 
             icon={Mail} 
             colorClass={{ bg: "bg-blue-50", text: "text-blue-500", pulse: "bg-blue-500/20" }} 
             label="Email Us" 
             value="Hr@krytil.com" 
             delay={0.1} 
             visible={contactVisible} 
           />
           <TiltContactCard 
             href="tel:+919663515839" 
             icon={Phone} 
             colorClass={{ bg: "bg-red-50", text: "text-red-500", pulse: "bg-red-500/20" }} 
             label="Call Us" 
             value="+91 96635 15839" 
             delay={0.2} 
             visible={contactVisible} 
           />
           <TiltContactCard 
             href="https://wa.me/919663515839" 
             icon={MessageCircle} 
             colorClass={{ bg: "bg-green-50", text: "text-green-600", pulse: "bg-green-500/20" }} 
             label="WhatsApp" 
             value="Connect Now" 
             delay={0.3} 
             visible={contactVisible} 
           />
           <TiltContactCard 
             href="https://linkedin.com/company/krytil" 
             icon={LinkIcon} 
             colorClass={{ bg: "bg-blue-50", text: "text-blue-700", pulse: "bg-blue-700/20" }} 
             label="LinkedIn" 
             value="Connect Now" 
             delay={0.4} 
             visible={contactVisible} 
           />
        </div>
      </div>
    </section>
  );
}
