"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
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
<div className="hidden md:flex space-x-8">
<Link className="font-lexend tracking-tight text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors hover:scale-105 transition-transform duration-200" href="/">Home</Link>
<Link className="font-lexend tracking-tight text-sm font-medium text-orange-600 dark:text-orange-500 font-bold border-b-2 border-orange-600 pb-1 hover:scale-105 transition-transform duration-200" href="/about">About</Link>
<Link className="font-lexend tracking-tight text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors hover:scale-105 transition-transform duration-200" href="/services">Services</Link>
<Link className="font-lexend tracking-tight text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors hover:scale-105 transition-transform duration-200" href="/trainers">Trainers</Link><Link className="font-lexend tracking-tight text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors hover:scale-105 transition-transform duration-200" href="/pricing">Pricing</Link>
</div>
<button className="bg-primary-container text-white px-6 py-2 rounded-full font-lexend text-sm font-bold hover:scale-105 transition-transform duration-200 active:scale-95 duration-100" >Join Now</button>
</div>
</nav>

<header className="max-md:hidden relative w-full h-[819px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover grayscale brightness-50" data-alt="A high-contrast cinematic shot of an athlete in mid-motion during a focused training session in a minimalist concrete gym. Dramatic soft white side lighting emphasizes muscle definition and movement. The color palette is dominated by deep grays and blacks with subtle orange light leaks, creating a premium editorial aesthetic of high-performance athleticism and mental clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKjxTSiB6ouBUQ9Bm900pNWMdZ1R2MMvv3stl8_7CAB5BH6e0gpuujiEz4-hxviwwqAwvgLSr9kUDRLwOHYxzxftyds_nAwwOOvfCx2O1BXmETOi-At2QhP7RKC1Kp-WSt_ctPysXzkyruuqcGtYxYZYF4ybjJsTObRgznLtrvh7jZwagqFlefF2xK4jAotN4j2I8PXJI9Ec5VDNy7nxtc_B4R6xii7xD1gkl46prlXLOUcf3Y-q2BpWZPq5AQDELeQt2o0GCK8GI"/>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl">
<span className="font-label-caps text-label-caps text-primary-container mb-6 block uppercase tracking-widest">About FitNova</span>
<h1 className="font-display-xl text-display-xl text-white mb-8">Integrated Body &amp; Mind Training.</h1>
<p className="font-body-lg text-body-lg text-zinc-300 max-w-2xl mx-auto">We are redefining the human experience through movement that honors both physical power and cognitive focus.</p>
</div>
</header>

<section className="py-section-padding px-6 md:px-12 max-w-container-max mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
<div className="space-y-stack-md">
<span className="font-label-caps text-label-caps text-on-surface-variant">THE NARRATIVE</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Our story of transformation.</h2>
<p className="font-body-lg text-body-lg text-secondary">FitNova began with a simple observation: the disconnect between physical exertion and mental presence. We saw a world of mindless repetitions and sought to create a sanctuary of intentional movement. By integrating physiological science with psychological clarity, we transformed fitness into a holistic evolution.</p>
<div className="pt-stack-sm flex items-center space-x-4 text-primary">
<span className="material-symbols-outlined" data-weight="fill">psychology</span>
<span className="font-label-caps text-label-caps">MIND-FIRST APPROACH</span>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" data-alt="A serene image of a person practicing yoga in a bright, modern studio with floor-to-ceiling windows overlooking a soft city sunrise. The aesthetic is clean and minimal, featuring high-key natural lighting and a palette of warm whites and soft oranges. The atmosphere is peaceful, capturing the 'active stillness' philosophy of integrated body and mind training." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmm0oLIzhne8vLcAJxaVMdmc9eo5yg9DYUdE9lNyf6g0vw_2W5XDyoxBJEdi0r6fjkfe_KwnoRH8ER4XxlZAVCkjgi3rMdXCXxtjRTKCevqvAuZ5C8c0KY_IE7GId3-89G57U1q-NZhMiDGRYkd4VpSpfqOhdnUOu9JVBu56a7rpNlCH1JLYZWwAZ7PGuycAW3HzZAZlLNPXI1FFaYVAcSpMAVG5lNRBmHAjxCvAEmxt5VKkQvjEsDDCs-nd9irRHk49-SXea36nQ"/>
</div>

</div>
</div>
</section>

<section className="bg-surface-container-low py-section-padding">
<div className="max-w-container-max mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

<div className="md:col-span-7 bg-white p-12 rounded-xl shadow-sm flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-300">
<div>
<span className="font-label-caps text-label-caps text-primary mb-6 block">MISSION</span>
<h3 className="font-headline-lg text-headline-lg text-on-surface mb-6">To empower every individual to reach their peak potential.</h3>
</div>
<div className="h-1 w-24 bg-primary-container"></div>
</div>

<div className="md:col-span-5 bg-zinc-900 p-12 rounded-xl text-white flex flex-col justify-center relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20">
<span className="material-symbols-outlined text-[80px]">all_inclusive</span>
</div>
<span className="font-label-caps text-label-caps text-orange-500 mb-6 block">PHILOSOPHY</span>
<p className="font-headline-md text-headline-md leading-tight">Fitness is more than a workout; it's a lifestyle.</p>
</div>

<div className="md:col-span-12 bg-primary-container p-12 rounded-xl text-white flex flex-col md:flex-row items-center justify-between">
<div className="md:max-w-2xl">
<h4 className="font-headline-md text-headline-md mb-4">Kinetic Elegance</h4>
<p className="font-body-lg text-body-lg opacity-90">Our methodology balances the raw energy of high-intensity training with the sophisticated grace of intentional recovery.</p>
</div>
<button className="mt-8 md:mt-0 bg-zinc-900 text-white px-10 py-4 rounded-full font-lexend font-bold hover:scale-105 transition-all">Download Manifesto</button>
</div>
</div>
</div>
</section>

<section className="py-section-padding px-6 md:px-12 max-w-container-max mx-auto">
<div className="text-center mb-stack-lg">
<span className="font-label-caps text-label-caps text-primary mb-4 block">LEADERSHIP</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Meet the Visionaries</h2>
<div className="h-1 w-12 bg-primary-container mx-auto mt-6"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">

<div className="group">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-container mb-6 relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Professional portrait of a male fitness executive in a minimalist architectural office setting. The lighting is soft and directional, highlighting a clean, high-contrast aesthetic with sharp lines. The color scheme is predominantly white, black, and gray with a focused, premium professional mood." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKiqZXL67Eya5VlRtZbsMbyDbzTLiDLdgG4WXQLa2WS_53QRDu6HjxTBKrjJXUEGKo9x_DQIqDz8Snpa2t1awZ3o1diU0ytU8O8i3q-AD_Db1OkqfxpkVKzwCnxZcI3Etof4LKcMrJ4phmzBtVSr93VAr2lA-LmE4j-bVFfBuEiEtBKVnBYx4uFyeTcf_8ZJXbpOy4scplyDQN__4eutb7ACmYEG9wHeYLZ1yM8kVCldiOUGvf_CTKco6PMtiXzqXHqzJbr8tLhzk"/>
<div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h4 className="font-headline-md text-body-lg font-bold text-on-surface">Marcus Thorne</h4>
<p className="font-label-caps text-label-caps text-secondary uppercase">Founder &amp; CEO</p>
</div>

<div className="group">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-container mb-6 relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A professional headshot of a female leader in a high-performance wellness environment. The background is a blurred, modern gym with high-end equipment. Lighting is bright and crisp, emphasizing a clean and energetic vibe. Colors are neutral with sharp contrast, echoing the brand's premium minimalism." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIibQeg_5OGv_CsSJcPvJcOybvNQrMkKDBOGKIA3nw3PCoKRfRizYJEwpdLD1zQIJAahwe5CyfG-CBqide2Pq0G5BJ9wnL_2alWTnwAveXvMIcuSZlOizOhQtwTy2OLdan70tg1EQab_-l93eo_vIRIefLIzsaPOvVJPCLf6EBUf4StcxqwOnbMaw_268jzmQU_XRqE3Xy4qTEbeGB-K8SpOni0lvPdNaWXolZLxwBlLfPI6jrtcr7W_zaOLgV8fh6QYcG78vdQqM"/>
<div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h4 className="font-headline-md text-body-lg font-bold text-on-surface">Elena Rodriguez</h4>
<p className="font-label-caps text-label-caps text-secondary uppercase">Chief Wellness Officer</p>
</div>

<div className="group">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-container mb-6 relative">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A portrait of a male performance scientist in a clean, brightly lit laboratory-style office. The mood is clinical yet warm, with high-key lighting. The visual style is editorial and premium, using a palette of whites and cool grays that align with the high-performance athleticism of the brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5KHl6xkKMi0Sdf0dl-nvm3hXtvI_r_I4hvrv5z48nmkaHAh8-y_CUk-fRsRXeWuYjd8LVVoo4eT5WeLFBDKxLM0BkzIu05ni0aTt1DKGIq-wV7syMafbHPEp6g2-tBEPBURshT9X7yXcFTfAEeERXxfkZ_HG7flgGpeXYIo_k9auawQyjSSy_-tQPW6_7Uw-tRbTSpbxqh9Pa7A6Qx5URX96bssW3UxHBBcCG75_xYJDO7XG6vyCHsGZYf0xJc2xGJ_jDFMg6u9w"/>
<div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<h4 className="font-headline-md text-body-lg font-bold text-on-surface">Dr. Julian Vance</h4>
<p className="font-label-caps text-label-caps text-secondary uppercase">Head of Physiology</p>
</div>
</div>
</section>

<footer className="bg-zinc-900 dark:bg-black w-full pt-20 pb-10 border-t border-zinc-800">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 max-w-screen-2xl mx-auto">
<div className="md:col-span-1">
<span className="text-xl font-black text-white mb-6 block">FitNova</span>
<p className="font-lexend text-zinc-400 text-sm">© 2026 FitNova. High-Performance Athleticism.</p>
</div>
<div className="flex flex-col space-y-4">
<h5 className="text-white font-semibold mb-2">Company</h5>
<Link className="font-lexend text-zinc-500 hover:text-orange-500 transition-colors hover:translate-x-1 transition-transform" href="#">Careers</Link>
<Link className="font-lexend text-zinc-500 hover:text-orange-500 transition-colors hover:translate-x-1 transition-transform" href="#">Terms</Link>
<Link className="font-lexend text-zinc-500 hover:text-orange-500 transition-colors hover:translate-x-1 transition-transform" href="#">Privacy</Link>
</div>
<div className="flex flex-col space-y-4">
<h5 className="text-white font-semibold mb-2">Support</h5>
<Link className="font-lexend text-zinc-500 hover:text-orange-500 transition-colors hover:translate-x-1 transition-transform" href="#">FAQ</Link>
<Link className="font-lexend text-zinc-500 hover:text-orange-500 transition-colors hover:translate-x-1 transition-transform" href="#">Contact</Link>
<Link className="font-lexend text-zinc-500 hover:text-orange-500 transition-colors hover:translate-x-1 transition-transform" href="#">Training Guide</Link>
</div>
<div className="flex flex-col space-y-6">
<h5 className="text-white font-semibold mb-2">Stay Connected</h5>
<div className="flex space-x-4">
<Link className="text-zinc-500 hover:text-orange-500 transition-colors" href="#"><span className="material-symbols-outlined">social_distance</span></Link>
<Link className="text-zinc-500 hover:text-orange-500 transition-colors" href="#"><span className="material-symbols-outlined">share</span></Link>
<Link className="text-zinc-500 hover:text-orange-500 transition-colors" href="#"><span className="material-symbols-outlined">hub</span></Link>
</div>
</div>
</div>
</footer>


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
