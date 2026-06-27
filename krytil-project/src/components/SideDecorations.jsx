import React from 'react';

export default function SideDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
      <div className="absolute left-2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-zinc-200 to-transparent opacity-30 hidden lg:block">
        <div className="absolute top-1/4 left-[-1.5px] w-1.5 h-16 bg-blue-500 rounded-full animate-[moveDown_10s_linear_infinite] shadow-[0_0_8px_rgba(59,130,246,0.4)]"></div>
        <div className="absolute top-1/2 left-[-1.5px] w-1.5 h-8 bg-red-500 rounded-full animate-[moveDown_15s_linear_infinite_2s]"></div>
      </div>
      <div className="absolute right-2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-zinc-200 to-transparent opacity-30 hidden lg:block">
        <div className="absolute bottom-1/4 left-[-1.5px] w-1.5 h-20 bg-green-500 rounded-full animate-[moveUp_12s_linear_infinite] shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
        <div className="absolute bottom-1/2 left-[-1.5px] w-1.5 h-10 bg-yellow-500 rounded-full animate-[moveUp_18s_linear_infinite_1s]"></div>
      </div>
    </div>
  );
}
