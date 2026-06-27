import React from 'react';
import { ArrowRight } from 'lucide-react';
import NeuralMesh from '../NeuralMesh';
import SideDecorations from '../SideDecorations';

export default function HeroSection({ onScroll }) {
  return (
    <section id="home" className="scroll-mt-32 relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center border-b border-zinc-200/50 overflow-hidden">
      <div className="absolute inset-0 w-full z-0">
         <NeuralMesh opacity={0.6} />
         <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#f3f4f6]/40 pointer-events-none"></div>
      </div>

      <SideDecorations />

      <div className="relative z-10 w-full max-w-[1920px] 2xl:px-20 mx-auto px-6 md:px-10 lg:px-12 flex flex-col items-center animate-in fade-in duration-1000">
        <div className="flex space-x-1.5 mb-8 lg:mb-10 justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
        </div>

        <div className="w-full max-w-4xl text-center mx-auto">
          <h1 className="text-4xl md:text-7xl lg:text-[6rem] xl:text-[7.5rem] font-black text-zinc-900 mb-6 leading-[0.95] tracking-tighter uppercase">
            Build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-red-600 to-yellow-600">Intelligent</span> <br />
            Digital Hub.
          </h1>
          <p className="text-zinc-600 text-base md:text-xl lg:text-2xl mb-10 md:mb-14 max-w-xl mx-auto leading-relaxed font-light">
            High-fidelity design meets industrial engineering. We architect the future with titanium-grade precision and neural speed.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-5 relative z-20">
            <button 
              onClick={() => onScroll('services')} 
              className="bg-zinc-900 text-white font-black px-10 py-5 md:px-12 md:py-6 rounded-full flex items-center space-x-4 hover:bg-black transition-all uppercase text-[10px] md:text-[11px] tracking-[0.2em] shadow-2xl active:scale-95 cursor-pointer"
            >
              <span>Explore Services</span>
              <ArrowRight size={18} />
            </button>

            <button 
              onClick={() => onScroll('careers')} 
              className="bg-zinc-100 border border-zinc-200 text-zinc-600 font-black px-10 py-5 md:px-12 md:py-6 rounded-full hover:bg-zinc-200 transition-all uppercase text-[10px] md:text-[11px] tracking-[0.2em] shadow-sm active:scale-95 cursor-pointer"
            >
              <span>Join us</span>
            </button>
          </div>
        </div>

        <div className="absolute top-1/2 right-12 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none hidden xl:block">
          <span className="text-[30rem] font-black leading-none">K</span>
        </div>
      </div>
    </section>
  );
}
