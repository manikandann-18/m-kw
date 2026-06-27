import React, { useRef, useState } from 'react';

export default function TiltContactCard({ href, icon: Icon, colorClass, label, value, delay, visible }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rX = (y - 0.5) * 12;
    const rY = (x - 0.5) * -12;
    setRotate({ x: rX, y: rY });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <a 
      href={href}
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`bg-white w-full p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-zinc-200 shadow-sm hover:shadow-2xl transition-all duration-700 group block relative overflow-hidden ${visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      style={{ 
        transitionDelay: `${delay}s`,
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
    >
      <div className="absolute inset-0 w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-200/50 to-transparent -translate-y-full group-hover:animate-[scanline_1.5s_ease-in-out_infinite] pointer-events-none"></div>
      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 md:mb-8 relative transition-transform duration-500 group-hover:scale-110 ${colorClass.bg} ${colorClass.text}`}>
          <div className={`absolute inset-0 ${colorClass.pulse} rounded-2xl animate-ping opacity-20 scale-125 group-hover:animate-none`}></div>
          <Icon size={28} className="relative z-10 transition-transform duration-500 group-hover:translate-x-[2px] group-hover:translate-y-[-2px]" />
      </div>
      <h4 className="text-zinc-400 text-[10px] md:text-[11px] font-black uppercase tracking-widest mb-2 md:mb-3 transition-colors duration-500 group-hover:text-zinc-600">{label}</h4>
      <p className="text-zinc-500 font-bold text-base md:text-lg break-all transition-all duration-500 group-hover:text-black group-hover:tracking-tight leading-snug">{value}</p>
      <div className="absolute bottom-6 right-6 w-4 h-4 border-r-2 border-b-2 border-zinc-100 group-hover:border-zinc-300 transition-colors"></div>
    </a>
  );
}
