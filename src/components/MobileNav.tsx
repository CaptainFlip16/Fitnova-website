"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 h-20 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md z-[100] border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-center px-6 shadow-sm">
        <button onClick={() => setIsOpen(true)} className="absolute left-6 material-symbols-outlined text-zinc-900 dark:text-white text-3xl active:scale-90 transition-transform">menu</button>
        <div className="text-2xl font-black italic tracking-tighter text-zinc-900 dark:text-white">FitNova</div>
      </div>

      <div className={`md:hidden fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)}>
        <div className={`fixed top-0 left-0 bottom-0 w-[280px] bg-white dark:bg-zinc-950 p-6 transform transition-transform duration-300 shadow-2xl flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-10">
            <div className="text-2xl font-black italic tracking-tighter text-zinc-900 dark:text-white">FitNova</div>
            <button onClick={() => setIsOpen(false)} className="material-symbols-outlined text-zinc-900 dark:text-zinc-400 text-3xl active:scale-90 transition-transform">close</button>
          </div>
          
          <div className="flex flex-col space-y-6 flex-grow">
            <Link onClick={() => setIsOpen(false)} className="font-lexend font-semibold text-lg text-zinc-900 dark:text-white hover:text-[#FF6A2C] dark:hover:text-[#FF6A2C] transition-colors" href="/">Home</Link>
            <Link onClick={() => setIsOpen(false)} className="font-lexend font-semibold text-lg text-zinc-900 dark:text-white hover:text-[#FF6A2C] dark:hover:text-[#FF6A2C] transition-colors" href="/about">About</Link>
            <Link onClick={() => setIsOpen(false)} className="font-lexend font-semibold text-lg text-zinc-900 dark:text-white hover:text-[#FF6A2C] dark:hover:text-[#FF6A2C] transition-colors" href="/services">Services</Link>
            <Link onClick={() => setIsOpen(false)} className="font-lexend font-semibold text-lg text-zinc-900 dark:text-white hover:text-[#FF6A2C] dark:hover:text-[#FF6A2C] transition-colors" href="/trainers">Trainers</Link>
            <Link onClick={() => setIsOpen(false)} className="font-lexend font-semibold text-lg text-zinc-900 dark:text-white hover:text-[#FF6A2C] dark:hover:text-[#FF6A2C] transition-colors" href="/pricing">Pricing</Link>
          </div>
          
          <div className="mt-10 mb-6">
            <button className="w-full bg-[#FF6A2C] text-white px-6 py-4 rounded-full font-label-caps active:scale-95 transition-transform duration-200 hover:shadow-lg">Join Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
