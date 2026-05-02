"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Pricing() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      

<nav className="max-md:hidden fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 flex justify-between items-center px-8 py-4 max-w-none shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
<div className="max-w-7xl mx-auto w-full flex justify-between items-center">
<div className="text-2xl font-black tracking-tighter text-zinc-900 font-display-xl">FitNova</div>
<div className="hidden md:flex items-center space-x-8 font-label-caps text-sm">
<Link className="text-zinc-600 hover:text-[#FF6A2C] transition-colors duration-300" href="/">Home</Link>
<Link className="text-zinc-600 hover:text-[#FF6A2C] transition-colors duration-300" href="/about">About</Link>
<Link className="text-zinc-600 hover:text-[#FF6A2C] transition-colors duration-300" href="/services">Services</Link>
<Link className="text-zinc-600 hover:text-[#FF6A2C] transition-colors duration-300" href="/trainers">Trainers</Link>
<Link className="text-[#FF6A2C] border-b-2 border-[#FF6A2C] pb-1" href="/pricing">Pricing</Link>
</div>
<Link className="bg-[#FF6A2C] text-white px-6 py-2 rounded-full font-label-caps hover:scale-105 transition-transform active:scale-95 inline-block text-center" href="#">Join Now</Link>
</div>
</nav>

<header className="max-md:hidden relative min-h-[716px] flex items-center justify-center pt-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Fitness Athlete" className="w-full h-full object-cover brightness-50" data-alt="A cinematic, low-angle shot of a high-performance athlete preparing for a sprint in a modern, moody fitness facility. The lighting is dramatic and focused, highlighting muscular definition against a dark, sleek architectural background. The color palette is dominated by deep grays and intense shadows, punctuated by sharp highlights, reflecting FitNova's premium and high-intensity brand aesthetic. The overall mood is one of focused determination and peak athletic readiness." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEAy6zZY9Jbjon9wQ7zjrmkHK6X0HKWeA7HAnfWgcrn-bPLncJPija9yu1YsuM73Rgqd1TUnQmacecwcCOZwvBKZmmjo4OecGuh58-2i999aPOsaFsQ06EhTj2xEHxkZS3u2Xm85iU-Upztgts7zlbJVBs0FSrSSfsi1kFYGKjuB6oQWKjPnFI8_hewCDBpGlQ4TAXQdXvmfkf4BoE-Qn4C4VFPppQuFr3uQ2kmNqNdWYbv4X5-yX6RTJM1mwvgFtsAfN5oTnmtvE"/>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
<span className="inline-block px-4 py-1 rounded-full bg-primary-container/20 text-primary-container font-label-caps text-xs mb-6 tracking-widest uppercase">Select Your Path</span>
<h1 className="font-display-xl text-white text-5xl md:text-7xl lg:text-8xl mb-8">Flexible Plans for Your Journey</h1>
<p className="font-body-lg text-zinc-300 max-w-2xl mx-auto">
                Whether you're starting out or aiming for elite performance, we have a membership designed to push your limits.
            </p>
</div>
</header>

<section className="py-24 px-6 md:px-12 bg-white">
<div className="max-w-7xl mx-auto">

<div className="flex flex-col items-center mb-20">
<div className="flex items-center space-x-4 bg-zinc-100 p-1.5 rounded-full relative">
<button onClick={() => setIsAnnual(false)} className={`px-8 py-2 rounded-full font-label-caps text-sm transition-all duration-300 z-10 ${!isAnnual ? 'text-white bg-[#FF6A2C]' : 'text-zinc-500 hover:text-zinc-900'}`} id="btn-monthly">Monthly</button>
<button onClick={() => setIsAnnual(true)} className={`px-8 py-2 rounded-full font-label-caps text-sm transition-all duration-300 z-10 ${isAnnual ? 'text-white bg-[#FF6A2C]' : 'text-zinc-500 hover:text-zinc-900'}`} id="btn-annual">Annual</button>
</div>
<div className="mt-4 flex items-center space-x-2 text-primary font-label-caps text-xs">
<span className="material-symbols-outlined text-sm">auto_awesome</span>
<span>Save 20% with yearly billing</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

<div className="bg-white rounded-[2rem] p-10 border border-zinc-100 shadow-[0_20px_40px_rgba(0,0,0,0.05)] flex flex-col hover:scale-[1.02] transition-transform duration-300">
<div className="mb-8">
<h3 className="font-headline-md text-zinc-900 mb-2">Kickstart</h3>
<p className="text-zinc-500 font-body-md">For those beginning their fitness odyssey.</p>
</div>
<div className="mb-10">
<span className="text-5xl font-black text-zinc-900 font-display-xl" id="price-kickstart">{isAnnual ? '$39' : '$49'}</span>
<span className="text-zinc-400 font-label-caps">/mo</span><div className={`text-[10px] text-primary font-bold uppercase tracking-wider ${isAnnual ? 'block' : 'hidden'} annual-label`}>Billed Annually</div>
</div>
<ul className="space-y-5 mb-12 flex-grow">
<li className="flex items-center space-x-3 text-zinc-600">
<span className="material-symbols-outlined text-[#FF6A2C]">check_circle</span>
<span>Access to all gym floor equipment</span>
</li>
<li className="flex items-center space-x-3 text-zinc-600">
<span className="material-symbols-outlined text-[#FF6A2C]">check_circle</span>
<span>Locker room &amp; sauna access</span>
</li>
<li className="flex items-center space-x-3 text-zinc-600">
<span className="material-symbols-outlined text-[#FF6A2C]">check_circle</span>
<span>2 group classes per week</span>
</li>
<li className="flex items-center space-x-3 text-zinc-400">
<span className="material-symbols-outlined">circle</span>
<span className="line-through">Personal training session</span>
</li>
</ul>
<button className="w-full py-4 rounded-full border-2 border-zinc-900 font-label-caps text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300">Choose Plan</button>
</div>

<div className="bg-zinc-950 rounded-[2rem] p-10 relative flex flex-col shadow-2xl scale-105 z-10 border border-zinc-800">
<div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FF6A2C] text-white px-6 py-1.5 rounded-full font-label-caps text-[10px] tracking-widest uppercase">Most Popular</div>
<div className="mb-8">
<h3 className="font-headline-md text-white mb-2">Transform</h3>
<p className="text-zinc-400 font-body-md">The core experience for dedicated athletes.</p>
</div>
<div className="mb-10">
<span className="text-5xl font-black text-white font-display-xl" id="price-transform">{isAnnual ? '$69' : '$89'}</span>
<span className="text-zinc-500 font-label-caps">/mo</span><div className={`text-[10px] text-primary-fixed font-bold uppercase tracking-wider ${isAnnual ? 'block' : 'hidden'} annual-label`}>Billed Annually</div>
</div>
<ul className="space-y-5 mb-12 flex-grow">
<li className="flex items-center space-x-3 text-zinc-300">
<span className="material-symbols-outlined text-[#FF6A2C]">check_circle</span>
<span>Unlimited group classes</span>
</li>
<li className="flex items-center space-x-3 text-zinc-300">
<span className="material-symbols-outlined text-[#FF6A2C]">check_circle</span>
<span>Personalized nutrition guide</span>
</li>
<li className="flex items-center space-x-3 text-zinc-300">
<span className="material-symbols-outlined text-[#FF6A2C]">check_circle</span>
<span>1 Personal training session / mo</span>
</li>
<li className="flex items-center space-x-3 text-zinc-300">
<span className="material-symbols-outlined text-[#FF6A2C]">check_circle</span>
<span>Recovery zone access</span>
</li>
</ul>
<button className="w-full py-4 rounded-full bg-[#FF6A2C] text-white font-label-caps hover:bg-[#e55a22] transition-all duration-300 hover:shadow-[0_10px_20px_rgba(255,106,44,0.3)]">Choose Plan</button>
</div>

<div className="bg-white rounded-[2rem] p-10 border border-zinc-100 shadow-[0_20px_40px_rgba(0,0,0,0.05)] flex flex-col hover:scale-[1.02] transition-transform duration-300">
<div className="mb-8">
<h3 className="font-headline-md text-zinc-900 mb-2">Elite</h3>
<p className="text-zinc-500 font-body-md">The pinnacle of performance &amp; luxury.</p>
</div>
<div className="mb-10">
<span className="text-5xl font-black text-zinc-900 font-display-xl" id="price-elite">{isAnnual ? '$119' : '$149'}</span>
<span className="text-zinc-400 font-label-caps">/mo</span><div className={`text-[10px] text-primary font-bold uppercase tracking-wider ${isAnnual ? 'block' : 'hidden'} annual-label`}>Billed Annually</div>
</div>
<ul className="space-y-5 mb-12 flex-grow">
<li className="flex items-center space-x-3 text-zinc-600">
<span className="material-symbols-outlined text-[#FF6A2C]">check_circle</span>
<span>4 Personal training sessions / mo</span>
</li>
<li className="flex items-center space-x-3 text-zinc-600">
<span className="material-symbols-outlined text-[#FF6A2C]">check_circle</span>
<span>Full-body physiological analysis</span>
</li>
<li className="flex items-center space-x-3 text-zinc-600">
<span className="material-symbols-outlined text-[#FF6A2C]">check_circle</span>
<span>Priority booking for workshops</span>
</li>
<li className="flex items-center space-x-3 text-zinc-600">
<span className="material-symbols-outlined text-[#FF6A2C]">check_circle</span>
<span>Private concierge support</span>
</li>
</ul>
<button className="w-full py-4 rounded-full border-2 border-zinc-900 font-label-caps text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300">Choose Plan</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-zinc-50" id="faq">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-zinc-900 mb-4">Frequently Asked Questions</h2>
<p className="text-zinc-500 font-body-lg italic font-emphasis-italic">Everything you need to know before joining the FitNova collective.</p>
</div>
<div className="space-y-4">
<div className="faq-item bg-white rounded-2xl overflow-hidden shadow-sm group">
<button onClick={() => toggleFaq(0)} className="faq-toggle w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors">
<span className="font-headline-md text-lg">Can I switch plans later?</span>
<span className={`material-symbols-outlined text-zinc-400 transition-transform duration-300 ${openFaq === 0 ? 'rotate-180' : ''}`}>expand_more</span>
</button>
<div className={`faq-content px-6 pb-6 text-zinc-500 font-body-md ${openFaq === 0 ? 'block' : 'hidden'}`}>
        Absolutely. You can upgrade or downgrade your membership plan at any time through your member dashboard. If you upgrade mid-month, the price difference will be prorated. Downgrades will take effect from your next billing cycle, ensuring you get the full value of your current tier.
    </div>
</div>

<div className="faq-item bg-white rounded-2xl overflow-hidden shadow-sm group">
<button onClick={() => toggleFaq(1)} className="faq-toggle w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors border-t border-zinc-50">
<span className="font-headline-md text-lg">Is there a long-term contract?</span>
<span className={`material-symbols-outlined text-zinc-400 transition-transform duration-300 ${openFaq === 1 ? 'rotate-180' : ''}`}>expand_more</span>
</button>
<div className={`faq-content px-6 pb-6 text-zinc-500 font-body-md ${openFaq === 1 ? 'block' : 'hidden'}`}>
        Our standard plans are built for flexibility, operating on a month-to-month basis with no long-term commitment required. If you decide to move on, we simply require a 30-day notice period to process your cancellation. For those committed to their long-term journey, our annual plans offer significant savings.
    </div>
</div>

<div className="faq-item bg-white rounded-2xl overflow-hidden shadow-sm group">
<button onClick={() => toggleFaq(2)} className="faq-toggle w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors border-t border-zinc-50">
<span className="font-headline-md text-lg">Do you offer a student discount?</span>
<span className={`material-symbols-outlined text-zinc-400 transition-transform duration-300 ${openFaq === 2 ? 'rotate-180' : ''}`}>expand_more</span>
</button>
<div className={`faq-content px-6 pb-6 text-zinc-500 font-body-md ${openFaq === 2 ? 'block' : 'hidden'}`}>
        We are committed to making high-performance fitness accessible to the next generation. Full-time students with a valid ID can receive a 15% discount on any monthly membership tier. To apply this to your account, simply bring your student ID to the front desk during your first visit.
    </div>
</div>

<div className="faq-item bg-white rounded-2xl overflow-hidden shadow-sm group">
<button onClick={() => toggleFaq(3)} className="faq-toggle w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors border-t border-zinc-50">
<span className="font-headline-md text-lg">What is included in the 'Recovery Zone'?</span>
<span className={`material-symbols-outlined text-zinc-400 transition-transform duration-300 ${openFaq === 3 ? 'rotate-180' : ''}`}>expand_more</span>
</button>
<div className={`faq-content px-6 pb-6 text-zinc-500 font-body-md ${openFaq === 3 ? 'block' : 'hidden'}`}>
        The Recovery Zone is a sanctuary for regeneration. It includes state-of-the-art percussion therapy tools, professional-grade compression boots for lymphatic drainage, zero-gravity lounge seating, and access to our infrared sauna. It's designed to ensure your body recovers as hard as you train, reducing injury risk and soreness.
    </div>
</div></div>
</div>
</section>

<Link className="fixed bottom-8 right-8 w-12 h-12 bg-[#FF6A2C] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 opacity-0 invisible scroll-smooth transition-all duration-300 pointer-events-none" href="#" id="scrollToTop">
<span className="material-symbols-outlined" id="scroll-top-btn-container">north</span>
</Link>

<footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 w-full py-20">
<div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="space-y-8">
<div className="text-xl font-bold text-zinc-900 dark:text-white font-display-xl">FitNova</div>
<p className="text-zinc-500 dark:text-zinc-400 max-w-sm font-body-md">
                    High-performance training facility dedicated to pushing the boundaries of human potential through science, grit, and community.
                </p>
<div className="flex space-x-6 font-label-caps text-sm">
<Link className="text-zinc-500 hover:text-[#FF6A2C] transition-colors" href="#">Instagram</Link>
<Link className="text-zinc-500 hover:text-[#FF6A2C] transition-colors" href="#">Twitter</Link>
<Link className="text-zinc-500 hover:text-[#FF6A2C] transition-colors" href="#">YouTube</Link>
</div>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
<h4 className="font-label-caps text-zinc-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Explore</h4>
<ul className="space-y-4 font-body-md text-sm text-zinc-500">
<li><Link className="hover:text-[#FF6A2C] transition-colors" href="#">Workouts</Link></li>
<li><Link className="hover:text-[#FF6A2C] transition-colors" href="#">Nutrition</Link></li>
<li><Link className="hover:text-[#FF6A2C] transition-colors" href="#">Memberships</Link></li>
<li><Link className="hover:text-[#FF6A2C] transition-colors" href="#">Locations</Link></li>
</ul>
</div>
<div>
<h4 className="font-label-caps text-zinc-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Support</h4>
<ul className="space-y-4 font-body-md text-sm text-zinc-500">
<li><Link className="hover:text-[#FF6A2C] transition-colors" href="#">Privacy Policy</Link></li>
<li><Link className="hover:text-[#FF6A2C] transition-colors" href="#">Terms of Service</Link></li>
<li><Link className="hover:text-[#FF6A2C] transition-colors" href="#">Contact Us</Link></li>
<li><Link className="hover:text-[#FF6A2C] transition-colors" href="#">FAQ</Link></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-12 mt-20 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-8">
<p className="text-zinc-500 font-label-caps text-xs">© 2026 FitNova. High-Performance Athleticism.</p>
<div className="flex items-center space-x-4">
<input className="bg-white dark:bg-zinc-800 border-none rounded-full px-6 py-2 text-sm focus:ring-2 focus:ring-[#FF6A2C] w-64" placeholder="Subscribe for performance tips" type="email"/>
<button className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-2 rounded-full font-label-caps text-xs hover:bg-[#FF6A2C] hover:text-white transition-all">Sign Up</button>
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
