"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Trainers() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      

<nav className="max-md:hidden sticky top-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800 shadow-xl shadow-zinc-900/5">
<div className="flex justify-between items-center h-20 px-6 md:px-12 max-w-screen-2xl mx-auto">
<div className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white">FitNova</div>
<div className="hidden md:flex items-center gap-8"><Link className="font-lexend tracking-tight text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors hover:scale-105 transition-transform duration-200" href="/">Home</Link>
<Link className="font-lexend tracking-tight text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors hover:scale-105 transition-transform duration-200" href="/about">About</Link>
<Link className="font-lexend tracking-tight text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors hover:scale-105 transition-transform duration-200" href="/services">Services</Link>
<Link className="font-lexend tracking-tight text-sm font-medium text-orange-600 dark:text-orange-500 font-bold border-b-2 border-orange-600 pb-1 hover:scale-105 transition-transform duration-200" href="/trainers">Trainers</Link>
<Link className="font-lexend tracking-tight text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors hover:scale-105 transition-transform duration-200" href="/pricing">Pricing</Link></div>
<button className="px-6 py-2 bg-primary text-on-primary rounded-full font-label-caps text-label-caps hover:scale-105 active:scale-95 transition-all duration-200" >
                Join Now
            </button>
</div>
</nav>
<main>

<section className="relative py-section-padding px-6 overflow-hidden">
<div className="max-w-container-max mx-auto relative z-10 flex flex-col items-center text-center">
<span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps mb-6">
                    Elite Movement Specialists
                </span>
<h1 className="font-display-xl text-display-xl text-on-surface max-w-4xl mb-stack-md">
                    Meet Your <span className="text-primary italic font-emphasis-italic">Elite</span> Coaches
                </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    Our trainers are more than just fitness instructors; they are high-performance architects dedicated to rebuilding your potential through science and grit.
                </p>
</div>

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-tertiary/5 rounded-full blur-3xl"></div>
</section>

<section className="pb-section-padding px-6">
<div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">

<div className="trainer-card group relative bg-white rounded-xl overflow-hidden shadow-xl shadow-zinc-900/5 transition-all duration-300 hover:-translate-y-2">
<div className="aspect-[4/5] relative overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A professional fitness trainer with a chiseled physique and intense focus, posing in a high-end minimalist gym with soft industrial lighting. The color palette features deep greys and sharp highlights, reflecting a premium athletic aesthetic. The composition is a heroic medium shot with professional studio depth of field." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxbhHADa4vvFKI2lzxJ_QH_Cew2gH9rEdZrdlSTQyXbVztn46z5HDbrRcPM54gDgTm_d0eFQ2FSaBmKRB30oyrD9OUA3bSAvUuY5roiLBVGo00EDjiJhfQ2Ok04eY0YRXSto82Ro5KMa32HAXjsKh1ccesihiqH4QMnpGFMGC0hmrxU4XZKJ4P6rhAiml8l414y5aNN8mbrIVh4REL5yFWOiVUnG9Xh2LQrNkpv9_cwu14-vV9a2A57VEaP31765sWZUZKTKbUFXE"/>
<div className="philosophy-overlay absolute inset-0 bg-primary/90 p-10 flex flex-col justify-center opacity-0 transform translate-y-4 transition-all duration-300 backdrop-blur-sm">
<h4 className="font-headline-md text-white mb-4">Philosophy</h4>
<p className="font-body-md text-white/90 italic leading-relaxed">
                                "Movement is a conversation between the mind and the muscle. We speak with intensity, precision, and unwavering discipline."
                            </p>
</div>
</div>
<div className="p-8">
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-3 py-1 bg-primary/10 text-primary font-label-caps text-[12px] rounded-full">STRENGTH</span>
<span className="px-3 py-1 bg-primary/10 text-primary font-label-caps text-[12px] rounded-full">POWER</span>
</div>
<h3 className="font-headline-md text-on-surface mb-2">Marcus Vance</h3>
<p className="font-body-md text-on-surface-variant mb-6">Former Decathlete &amp; Performance Coach</p>
<button className="w-full py-4 rounded-full border border-on-surface/10 font-label-caps text-label-caps hover:bg-on-surface hover:text-white transition-colors duration-300">
                            View Profile
                        </button>
</div>
</div>

<div className="trainer-card group relative bg-white rounded-xl overflow-hidden shadow-xl shadow-zinc-900/5 transition-all duration-300 hover:-translate-y-2">
<div className="aspect-[4/5] relative overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A female yoga and mobility specialist performing a controlled, graceful pose in a sun-drenched, airy studio with light wood floors. The lighting is ethereal and warm, emphasizing a serene yet powerful atmosphere. The color palette includes soft whites, neutral beiges, and subtle orange accents consistent with the brand's premium minimalist style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuASPqeR21vXjJk7bxLzrn1fiMolGx3K3SQKmr4aIDLBf0-vQ3OgZNAcygzhX7sP2xoyOz9FxJ5dWflxJkSig98RNn2Wdm1ytu4PxZsKCsWK42zWgLT7bleUP0q2_5xvFSO3bDyEWmzOnUMLbyQPA8xsb2bGx68hb8QaFkuipxGDnxRfnUPCfNQYwFl4YRfml0jxSrSDYLcUZEJBB8fomyqL9whvJJJQKHhevP3lLD25gj_jmgqTvPcAecz-hsUXxkwtRl1gxJFyVac"/>
<div className="philosophy-overlay absolute inset-0 bg-tertiary-container/95 p-10 flex flex-col justify-center opacity-0 transform translate-y-4 transition-all duration-300 backdrop-blur-sm">
<h4 className="font-headline-md text-on-tertiary-container mb-4">Philosophy</h4>
<p className="font-body-md text-on-tertiary-container/90 italic leading-relaxed">
                                "True strength is found in the stillness of a breath and the fluidity of a transition. Control is the ultimate expression of power."
                            </p>
</div>
</div>
<div className="p-8">
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-3 py-1 bg-tertiary/10 text-tertiary font-label-caps text-[12px] rounded-full">YOGA</span>
<span className="px-3 py-1 bg-tertiary/10 text-tertiary font-label-caps text-[12px] rounded-full">MOBILITY</span>
</div>
<h3 className="font-headline-md text-on-surface mb-2">Elena Rossi</h3>
<p className="font-body-md text-on-surface-variant mb-6">Master of Vinyasa &amp; Corrective Exercise</p>
<button className="w-full py-4 rounded-full border border-on-surface/10 font-label-caps text-label-caps hover:bg-on-surface hover:text-white transition-colors duration-300">
                            View Profile
                        </button>
</div>
</div>

<div className="trainer-card group relative bg-white rounded-xl overflow-hidden shadow-xl shadow-zinc-900/5 transition-all duration-300 hover:-translate-y-2">
<div className="aspect-[4/5] relative overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="An athletic male trainer captured mid-action during a high-intensity interval training session, sweat glistening under sharp dramatic studio lighting. The background is a dark, modern training facility with neon-tinged lighting. The image conveys raw energy, high contrast, and peak athletic performance through a dynamic wide-angle shot." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzhAEq6-rD-p6pErx8ZJXQjeLEBX4RXvJ8pX2RqXU7UWkWyHNi4km643V97fb2CLwtCTxbr9lWZS6f286B9qpULsl9YH-IT6G0rRzVOAsB8r7hF5Engd2ycqePaRTKo4O8mn4a0P4zXeWM9obroH5-nk4XFRfToaHdMHZ-qAKbj2dklm8tnF5lcwEoOEg9W7GyV0Obr3XP2Gv8UDfD1E22GhZ1ZSN6RemRJbND1Ez-Im3X6LgJBTzNa0Z9CAXtYzfRj8IdQRE2jkI"/>
<div className="philosophy-overlay absolute inset-0 bg-primary/90 p-10 flex flex-col justify-center opacity-0 transform translate-y-4 transition-all duration-300 backdrop-blur-sm">
<h4 className="font-headline-md text-white mb-4">Philosophy</h4>
<p className="font-body-md text-white/90 italic leading-relaxed">
                                "The only limit is the one you decide to respect. We train to shatter every boundary, one heart-beat at a time."
                            </p>
</div>
</div>
<div className="p-8">
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-3 py-1 bg-primary/10 text-primary font-label-caps text-[12px] rounded-full">HIIT</span>
<span className="px-3 py-1 bg-primary/10 text-primary font-label-caps text-[12px] rounded-full">CONDITIONING</span>
</div>
<h3 className="font-headline-md text-on-surface mb-2">Jaxson Thorne</h3>
<p className="font-body-md text-on-surface-variant mb-6">HIIT Specialist &amp; Endurance Athlete</p>
<button className="w-full py-4 rounded-full border border-on-surface/10 font-label-caps text-label-caps hover:bg-on-surface hover:text-white transition-colors duration-300">
                            View Profile
                        </button>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900 py-section-padding px-6 text-white relative overflow-hidden">
<div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
<div className="flex-1">
<h2 className="font-headline-lg text-headline-lg mb-6 leading-tight">
                        Built For The <span className="text-primary italic">Best.</span> By The Best.
                    </h2>
<p className="font-body-lg text-zinc-400 mb-stack-md max-w-xl">
                        Are you an elite-level coach with a passion for transformative fitness? We are looking for high-performance specialists to join our global network of trainers.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-10 py-5 bg-primary text-on-primary rounded-full font-label-caps text-label-caps hover:scale-105 active:scale-95 transition-all duration-300" >
                            Apply To Join
                        </button>
<button className="px-10 py-5 bg-zinc-800 text-white rounded-full font-label-caps text-label-caps border border-zinc-700 hover:bg-zinc-700 transition-all duration-300" >
                            Learn More
                        </button>
</div>
</div>
<div className="flex-1 w-full relative">
<div className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-black/50">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="A wide shot of a futuristic, dark-mode training facility with glowing orange LED accents and state-of-the-art equipment. The scene is empty and pristine, showcasing a professional workspace for elite coaches. The lighting is atmospheric and moody, highlighting the premium, high-tech nature of the environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgkvvKL6hzEw3EVkP20XuZQtPYEz4oVQGQaQBKOmi4A4ju3c-76YYXqhuSkIYWXa9vJachdrbtCdybYFRGIQiahTE_POnYXa6DMs9xwH-pkqqOybWe3bFgYc4k5BoYbM0Tvq25YFBY49Vouz896LsQtjFwyTitdT5oc6FLq8j2tRYY8Z-weewyKB-eCIJt_WunDns8PvC5M5Vld2lZKlihJMjNuvDeY0IrtRalDvPEauSmE3CLP2Z8FzQ_u2MlQEtshlqHydXafQ0"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-xl shadow-xl hidden lg:block">
<p className="font-display-xl text-3xl font-black mb-1">50+</p>
<p className="font-label-caps text-[10px] tracking-widest text-on-primary">GLOBAL TRAINERS</p>
</div>
</div>
</div>

<div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
</section>
</main>

<footer className="bg-zinc-900 dark:bg-black w-full pt-20 pb-10 border-t border-zinc-800">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 max-w-screen-2xl mx-auto">
<div className="col-span-1 md:col-span-1">
<span className="text-xl font-black text-white mb-6 block">FitNova</span>
<p className="font-lexend text-zinc-400 text-sm leading-relaxed">
                    Elevating human performance through premium movement and focused recovery.
                </p>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-white font-label-caps text-label-caps mb-2">Company</h5>
<Link className="font-lexend text-zinc-400 text-sm hover:text-orange-500 transition-colors hover:translate-x-1 transition-transform" href="/about">About</Link>
<Link className="font-lexend text-zinc-400 text-sm hover:text-orange-500 transition-colors hover:translate-x-1 transition-transform" href="#">Careers</Link>
<Link className="font-lexend text-zinc-400 text-sm hover:text-orange-500 transition-colors hover:translate-x-1 transition-transform" href="#">Contact</Link>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-white font-label-caps text-label-caps mb-2">Support</h5>
<Link className="font-lexend text-zinc-400 text-sm hover:text-orange-500 transition-colors hover:translate-x-1 transition-transform" href="#">FAQ</Link>
<Link className="font-lexend text-zinc-400 text-sm hover:text-orange-500 transition-colors hover:translate-x-1 transition-transform" href="#">Terms</Link>
<Link className="font-lexend text-zinc-400 text-sm hover:text-orange-500 transition-colors hover:translate-x-1 transition-transform" href="#">Privacy</Link>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-white font-label-caps text-label-caps mb-2">Connect</h5>
<div className="flex gap-4">
<Link className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-orange-500 transition-colors" href="#">
<span className="material-symbols-outlined text-sm">public</span>
</Link>
<Link className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-orange-500 transition-colors" href="#">
<span className="material-symbols-outlined text-sm">share</span>
</Link>
</div>
</div>
</div>
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-lexend text-zinc-400 text-sm">© 2026 FitNova. High-Performance Athleticism.</p>
<div className="flex gap-8">
<Link className="font-lexend text-zinc-500 hover:text-orange-500 transition-colors text-sm" href="#">Instagram</Link>
<Link className="font-lexend text-zinc-500 hover:text-orange-500 transition-colors text-sm" href="#">Twitter</Link>
<Link className="font-lexend text-zinc-500 hover:text-orange-500 transition-colors text-sm" href="#">LinkedIn</Link>
</div>
</div>
</footer>
<button className="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center opacity-0 pointer-events-none transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95" id="scroll-to-top"><span className="material-symbols-outlined text-3xl">arrow_upward</span></button>

      {/* Global Scroll-to-Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[60] w-14 h-14 bg-primary-container text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 ${showScrollTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <span className="material-symbols-outlined text-2xl">arrow_upward</span>
      </button>
    </>
  );
}
