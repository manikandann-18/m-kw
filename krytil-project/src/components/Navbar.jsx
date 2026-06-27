import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onScroll }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false); }
    };
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Careers', id: 'careers' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl border-zinc-200/60 py-2 shadow-md' 
        : 'bg-white/70 backdrop-blur-lg border-zinc-200/40 py-4' 
    }`}>
      <div className="w-full max-w-[1920px] 2xl:px-20 mx-auto px-6 md:px-10 lg:px-12 flex justify-between items-center relative">
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => onScroll('home')}>
          <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center shadow-lg group-hover:bg-black transition-all duration-500 transform group-hover:-rotate-12">
            <span className="text-white font-bold text-xs underline decoration-blue-500 decoration-2">K</span>
          </div>
          <span className="text-zinc-900 font-bold tracking-[0.4em] text-lg uppercase hidden sm:block">KRYTIL</span>
        </div>

        <div className="relative" ref={menuRef}>
          <button 
            className={`flex items-center space-x-3 px-5 py-2 rounded-full border transition-all duration-500 ${
              isOpen ? 'bg-zinc-900 border-zinc-900 text-white shadow-xl' : 'bg-white/80 border-zinc-200 text-zinc-900 hover:border-zinc-400'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] hidden sm:block">Explore</span>
            {isOpen ? <X size={16} strokeWidth={2.5} /> : <Menu size={16} strokeWidth={2.5} />}
          </button>

          <div className={`absolute top-full right-0 mt-4 w-64 bg-white/95 backdrop-blur-2xl border border-zinc-200 rounded-[2rem] shadow-[0_30px_70_rgba(0,0,0,0.1)] transition-all duration-500 origin-top-right z-[110] overflow-hidden ${
            isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
          }`}>
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => { onScroll(link.id); setIsOpen(false); }}
                  className="flex items-center justify-between px-8 py-4 text-left group hover:bg-zinc-50 transition-all border-b border-zinc-50 last:border-0"
                >
                  <span className="text-[12px] font-black uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-900 transition-colors">{link.name}</span>
                  <div className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-125 bg-zinc-900"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
