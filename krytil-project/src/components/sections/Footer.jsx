import React from 'react';

export default function Footer() {
  return (
    <footer className="relative w-full py-12 md:py-16 px-6 md:px-10 lg:px-12 bg-white border-t border-zinc-200 text-center">
      <div className="w-full max-w-[1920px] 2xl:px-20 mx-auto flex flex-col items-center">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
            <span className="text-white font-bold text-xl underline decoration-blue-500 decoration-2">K</span>
          </div>
          <span className="text-zinc-900 font-black tracking-[0.4em] text-2xl uppercase">KRYTIL</span>
        </div>
        <div className="max-w-2xl text-zinc-400 text-xs md:text-sm mb-8 font-light leading-relaxed">
          © 2026 KRYTIL PRIVATE LIMITED. All intellectual property rights reserved. <br className="hidden md:block" />
          Engineering intelligent ecosystems for the next decade of digital growth.
        </div>

      </div>
    </footer>
  );
}
