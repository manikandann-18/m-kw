import React from 'react';
import { X } from 'lucide-react';

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12 w-full">
      <div 
        className="absolute inset-0 bg-zinc-900/60 backdrop-blur-md transition-opacity duration-500 animate-in fade-in" 
        onClick={onClose}
      />
      <div className="bg-white w-full max-w-4xl mx-auto rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row animate-in slide-in-from-bottom-8 duration-500 max-h-[95vh]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-colors z-20 shadow-sm"
        >
          <X size={20} />
        </button>

        <div className="w-full md:w-2/5 h-48 md:h-auto relative overflow-hidden shrink-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
        </div>

        <div className="w-full md:w-3/5 p-6 md:p-10 lg:p-14 flex flex-col overflow-y-auto no-scrollbar">
          <div className={`w-12 h-12 md:w-14 md:h-14 ${service.color} bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm shrink-0`}>
            {service.icon}
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-zinc-900 uppercase tracking-tighter mb-4 shrink-0">{service.title}</h3>
          <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-light mb-6 shrink-0">
            {service.detailedContent || service.content}
          </p>
          
          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 shrink-0">
            <div>
              <h4 className="text-[10px] font-black text-zinc-300 uppercase tracking-widest mb-2">{service.col1Title}</h4>
              <ul className="text-xs md:text-sm font-bold text-zinc-800 space-y-1">
                {service.col1?.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black text-zinc-300 uppercase tracking-widest mb-2">{service.col2Title}</h4>
              <ul className="text-xs md:text-sm font-bold text-zinc-800 space-y-1">
                {service.col2?.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
          </div>

          <button className="bg-zinc-900 text-white font-black px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-[11px] uppercase tracking-[0.3em] hover:bg-black transition-all shadow-xl active:scale-95 self-start mt-auto">
            Request Implementation
          </button>
        </div>
      </div>
    </div>
  );
}
