import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function ServicesSection({ services, onSelectService }) {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="scroll-mt-20 relative w-full py-8 md:py-12 px-6 md:px-10 lg:px-12 border-t border-zinc-200/70">
      <div className="w-full max-w-[1920px] 2xl:px-20 mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-zinc-900 uppercase tracking-tighter mb-6 md:mb-10 text-center">
          Our <span className="text-blue-600">Services</span>
        </h2>
        <div className="relative w-full group">
          <button 
            onClick={() => scrollCarousel('left')} 
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-zinc-200 text-zinc-400 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-zinc-900 hover:text-white shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scrollCarousel('right')} 
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-zinc-200 text-zinc-400 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-zinc-900 hover:text-white shadow-lg"
          >
            <ChevronRight size={20} />
          </button>
          
          <div ref={carouselRef} className="flex overflow-x-auto gap-6 md:gap-10 pb-6 snap-x snap-mandatory no-scrollbar scroll-smooth w-full">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className={`flex-shrink-0 w-[280px] md:w-[480px] snap-center bg-white border ${service.border} rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden hover:shadow-2xl transition-all duration-700 group/card flex flex-col shadow-sm cursor-pointer`}
              >
                <div className="h-64 md:h-80 relative overflow-hidden w-full" onClick={() => onSelectService(service)}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 w-full bg-gradient-to-t from-white via-white/5 to-transparent"></div>
                  <div className={`absolute top-6 left-6 md:top-8 md:left-8 ${service.color} p-4 md:p-6 rounded-2xl bg-white/95 shadow-xl transform group-hover/card:-rotate-6 transition-transform duration-500`}>
                    {service.icon}
                  </div>
                </div>
                <div className="w-full p-8 md:p-14 flex flex-col flex-grow">
                  <h3 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4 md:mb-6 uppercase tracking-tighter">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-base md:text-lg mb-8 md:mb-12 flex-grow font-light leading-relaxed">
                    {service.content.length > 110 ? service.content.substring(0, 110) + '...' : service.content}
                  </p>
                  <button 
                    onClick={() => onSelectService(service)} 
                    className={`flex items-center font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] ${service.color} group-hover/card:translate-x-4 transition-transform duration-500`}
                  >
                    <span>Launch Briefing</span>
                    <ArrowRight size={14} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
