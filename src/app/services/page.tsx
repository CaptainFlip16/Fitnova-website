"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Services() {
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
      

<header className="max-md:hidden sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 shadow-xl shadow-zinc-900/5">
<nav className="max-md:hidden flex justify-between items-center h-20 px-6 md:px-12 max-w-screen-2xl mx-auto">
<div className="text-2xl font-black tracking-tighter text-zinc-900">FitNova</div>
<div className="hidden md:flex items-center space-x-8">
<Link className="text-zinc-600 hover:text-zinc-900 transition-colors font-lexend tracking-tight text-sm font-medium" href="/">Home</Link>
<Link className="text-zinc-600 hover:text-zinc-900 transition-colors font-lexend tracking-tight text-sm font-medium" href="/about">About</Link>
<Link className="text-orange-600 font-bold border-b-2 border-orange-600 pb-1 font-lexend tracking-tight text-sm" href="/services">Services</Link>
<Link className="text-zinc-600 hover:text-zinc-900 transition-colors font-lexend tracking-tight text-sm font-medium" href="/trainers">Trainers</Link><Link className="text-zinc-600 hover:text-orange-600 transition-colors font-lexend tracking-tight text-sm font-medium" href="/pricing">Pricing</Link>
</div>
<button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-caps hover:scale-105 transition-transform duration-200 active:scale-95" >
        Join Now
      </button>
</nav>
</header>
<main>

<section className="relative py-section-padding px-6 md:px-12 overflow-hidden bg-zinc-900">
<div className="absolute inset-0 z-0 opacity-40">
<img className="w-full h-full object-cover" data-alt="A professional high-performance athlete performing an explosive box jump in a moody, industrial-style gym setting. The lighting is cinematic with deep shadows and warm orange rim-lights highlighting muscle definition. The overall aesthetic is gritty yet premium, consistent with a high-contrast minimalist design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcxJQIJRmr4E6O3hqeZKH9gNKC26nQbc5qc285rShPKZKJfxpXEZrDaCxMa0ZwbhmQTw5_jAKRIJOyA-Ypr51zt2Ks5vWi7CYQ5lpfrKP8iaAg9ClwxLj3QBnvapNCjCJuU1Ez3qYEOQsUMvcKhaycuBtmuv0M5fiE_ixWq9OrUdQmAmcRN96SoVijHrIsjkxrYjYAtzOtRR8hq_59UTbptz3l90TZSsDos5NoHuG3JGXE8eENC1W_zlGEBA6qsBB7gQiAE-XUIV8"/>
</div>
<div className="relative z-10 max-w-screen-2xl mx-auto text-center">
<span className="inline-block font-label-caps text-primary uppercase mb-stack-sm tracking-widest">Our Programs</span>
<h1 className="font-display-xl text-white mb-stack-md max-w-4xl mx-auto">Precision movement for <span className="text-primary italic font-emphasis-italic">peak performance.</span></h1>
<p className="font-body-lg text-zinc-300 max-w-2xl mx-auto mb-stack-lg">From elite athletic training to restorative wellness, discover the program tailored to your biology and your goals.</p>
</div>
</section>

<section className="py-section-padding px-6 md:px-12 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">

<div className="group bg-white rounded-xl overflow-hidden shadow-2xl shadow-zinc-900/5 hover:scale-[1.02] transition-transform duration-300">
<div className="h-64 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A close-up shot of a personal trainer guiding a client through a barbell squat in a bright, modern studio. The lighting is soft and natural, emphasizing the clean white and light gray background of the gym. The scene communicates focus, safety, and professional expertise." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgtAlYFbh01kIlowdzsdcHbQKZaTFgHDk0UCnEaDlz5MfT3U1R28V_tVjMuQxCMPGFORtCMukXkMxFABA8Of5Wt6lbo88avc_f6tHwGGdeuEWUSq2cDnP9l1uainUIg_J9JjChx9S2N6rrmPPdTQRPLYOz0rroc-h-BZM0Ay4VcdG8TLR99a6ACUqCCFGHSEWeEZ-j509YJqj57sVsdJBRCgvogjry_8SqXNv1-5nj7B-Aq1PRu6Dh8p0aZVMhII1JoSy5_DrlPGA"/>
<div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-full">
<span className="text-[10px] font-label-caps text-white">ELITE LEVEL</span>
</div>
</div>
<div className="p-8">
<h3 className="font-headline-md text-on-surface mb-4">Personal Training</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">Customized bio-mechanic assessment</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">1-on-1 private studio sessions</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">Injury prevention &amp; recovery focus</span>
</li>
</ul>
<button className="w-full py-4 border-2 border-on-surface text-on-surface font-label-caps rounded-full hover:bg-on-surface hover:text-white transition-colors">View Schedule</button>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden shadow-2xl shadow-zinc-900/5 hover:scale-[1.02] transition-transform duration-300">
<div className="h-64 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="High-key photography of vibrant, healthy meal prep containers arranged on a clean white marble surface. The colors are crisp and natural, featuring greens, oranges, and deep purples. The mood is fresh and energetic, highlighting the importance of fuel for performance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoRb-KxLwXECgdY_Jc5_rqlMAajXyL68XpNNbkcOErkGkG7M5XAHaDbio8sEwTziO5d4Ak1KPZtrj109OL4HxdpJlVNlXNphknFTHPRYF-mDyUasK55bahd99ldwvG3EDOF9fgbYseLyDRaq0s_q4CXWazmdsf87JA3LJ7SYKfi6tIV582gHm_Dvmto2zEyj9MEh1sjUj40ASPi7LCbOIjCl52-lXPbfahoDhJ3j6NIcR93bh5zPJ5SecRCbG2xYoo80EI376_tFU"/>
</div>
<div className="p-8">
<h3 className="font-headline-md text-on-surface mb-4">Nutrition Plans</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">Macro-nutrient optimization</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">Chef-designed recipe library</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">Weekly metabolic check-ins</span>
</li>
</ul>
<button className="w-full py-4 border-2 border-on-surface text-on-surface font-label-caps rounded-full hover:bg-on-surface hover:text-white transition-colors">View Schedule</button>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden shadow-2xl shadow-zinc-900/5 hover:scale-[1.02] transition-transform duration-300">
<div className="h-64 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A serene image of a woman in a challenging yoga pose in a minimalist studio with floor-to-ceiling windows. The soft morning light creates long, elegant shadows on the light wood floors. The aesthetic is clean, airy, and deeply calming, using a palette of whites and soft grays." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ-ZAzc4jBGaoFIZ35gdRMMLrXrAPmA-7RokduZCuMiwENWzCfNDg1f00kvmp9w4bbs7flcZi4oce9jFbgiob49AXnD7pXakXCkkgxC-NCKHohOLYt4r38iep-ME9VMqUuRuK-192ZzXMqC0Qjdg5Fo6CvR_U51V1Dy5HLpNY3LDul9uP4BS0P7ZrH7duqDL_MvSPYF1ee41el1jY_-BUiQwRrNoYHZUwwUdKJyA5EVecbaMjOMgHTZMaIwerrMM7Avis27-nMrEg"/>
</div>
<div className="p-8">
<h3 className="font-headline-md text-on-surface mb-4">Yoga &amp; Flow</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">Dynamic vinyasa &amp; mobility</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">Guided mindfulness meditation</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">Breathwork performance sessions</span>
</li>
</ul>
<button className="w-full py-4 border-2 border-on-surface text-on-surface font-label-caps rounded-full hover:bg-on-surface hover:text-white transition-colors">View Schedule</button>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden shadow-2xl shadow-zinc-900/5 hover:scale-[1.02] transition-transform duration-300">
<div className="h-64 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="High-intensity interval training session with a group of people rowing. The scene is energetic and high-contrast, with sweat glistening under bright overhead gym lights. The color palette is dominated by dark grays and blacks with the primary orange branding appearing on gym equipment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4Xeb8zuQUVcSsgcUhG2-vOr1RW4-UIJwiU-o8RReiOqoIMVoTGIyR1sQbKa023itnW9OZ0X6GGwA_elDlcMjQsxfDJkuFBNFTxEttCqCVJpikj68l9qJzfrutq95uFBtjnUf4dzwoBq4ZOofuX4BXwir-NWer5ey6HNcHcZCrOz-N0u7Ai1NhFO57fUFh4PJwKKrxTsVcS4Af1DEvLwuYOnsDrhDf5XsYrVOZw-yDyxXImP7LeYOrSdzFGCebguhlkHo3Nx1iHEA"/>
</div>
<div className="p-8">
<h3 className="font-headline-md text-on-surface mb-4">Cardio Blast</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">HIIT &amp; Metabolic conditioning</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">Heart-rate monitored training</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">Endurance &amp; stamina focus</span>
</li>
</ul>
<button className="w-full py-4 border-2 border-on-surface text-on-surface font-label-caps rounded-full hover:bg-on-surface hover:text-white transition-colors">View Schedule</button>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden shadow-2xl shadow-zinc-900/5 hover:scale-[1.02] transition-transform duration-300">
<div className="h-64 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A professional consultation room with a coach and client sitting across a modern table. The atmosphere is professional, clean, and welcoming. Sunlight spills through large windows, and the minimalist decor promotes a sense of mental clarity and focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADn-2HOmbhb2FwJaKO5lPdmGdcyLFe2fEHHQ_rl2p8DSsFRo01F_cplRrCnloyjqZs3fCp2PdWvXrEUavmd7-uZMqg-QGKbYQ5UwKW_61FlGi-TvVJObOA8PQ1lUQW82E0bdXgPKYyJjwUs9fvDHTomzf2T6UUJVVZbSA0AUPAyb423HURCUb-FjpIc5gPPz-JFIUwBeYi3wF_AeQJjBMGTRaWVJ9V-bZr5SWEqfHayDnVbKNyu2K75Gh4RT7Dw6YhLhj4itd6AmA"/>
</div>
<div className="p-8">
<h3 className="font-headline-md text-on-surface mb-4">Wellness Coaching</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">Sleep &amp; recovery optimization</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">Stress management protocols</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">Long-term lifestyle design</span>
</li>
</ul>
<button className="w-full py-4 border-2 border-on-surface text-on-surface font-label-caps rounded-full hover:bg-on-surface hover:text-white transition-colors">View Schedule</button>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden shadow-2xl shadow-zinc-900/5 hover:scale-[1.02] transition-transform duration-300">
<div className="h-64 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A high-tech digital tablet showing a personalized workout app interface with data visualizations and video coaching. The tablet is held in a gym setting with soft bokeh in the background. The image represents the cutting-edge technology and accessibility of the FitNova online program." src="https://lh3.googleusercontent.com/aida-public/AB6AXuABWgR6kyoxHbG9q_ml-fE9hBp21xds806BmztAt_bYsWfEIyXb_24rgM4Zqm8mnj3pe_EINbFyakmsIUedJ5AfQG0G6JLFnzKI7qdDzVcRilT2WZPY4trAuIVOCuu_1xuI6uTjtSfIU8fU0dd11iHBmeBs157gGHHy6nG3V7HvDVs-u-qMXXYzZVzndScRKGKl6y_EfGKQEdCO1etN8wCZUTHNHXw_V7BDMZz0DVUWf2oRZgKSldHZ6QEMUuaVaafCf0T-kC_Q1iI"/>
</div>
<div className="p-8">
<h3 className="font-headline-md text-on-surface mb-4">Online Coaching</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">Anywhere, anytime access</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">Weekly digital check-ins</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
<span className="font-body-md text-on-surface-variant">FitNova App exclusive content</span>
</li>
</ul>
<button className="w-full py-4 border-2 border-on-surface text-on-surface font-label-caps rounded-full hover:bg-on-surface hover:text-white transition-colors">View Schedule</button>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low py-section-padding px-6 md:px-12">
<div className="max-w-screen-2xl mx-auto">
<div className="text-center mb-20">
<h2 className="font-headline-lg text-on-surface mb-6">How It Works</h2>
<p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Three simple steps from where you are to where you want to be.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="relative z-10 text-center">
<div className="w-24 h-24 bg-primary text-on-primary rounded-full flex items-center justify-center mx-auto mb-8 text-4xl font-black">1</div>
<h4 className="font-headline-md mb-4">Consult</h4>
<p className="font-body-md text-on-surface-variant">We begin with a deep-dive assessment of your biology, goals, and lifestyle to create your bespoke blueprint.</p>
</div>

<div className="relative z-10 text-center">
<div className="w-24 h-24 bg-primary text-on-primary rounded-full flex items-center justify-center mx-auto mb-8 text-4xl font-black">2</div>
<h4 className="font-headline-md mb-4">Train</h4>
<p className="font-body-md text-on-surface-variant">Execute your plan with world-class coaches who push you past your perceived limits with scientific precision.</p>
</div>

<div className="relative z-10 text-center">
<div className="w-24 h-24 bg-primary text-on-primary rounded-full flex items-center justify-center mx-auto mb-8 text-4xl font-black">3</div>
<h4 className="font-headline-md mb-4">Transform</h4>
<p className="font-body-md text-on-surface-variant">Witness the evolution of your mind and body as you reach performance levels you never thought possible.</p>
</div>

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-1 border-t-2 border-dashed border-zinc-300 z-0"></div>
</div>
</div>
</section>

<section className="py-section-padding px-6 md:px-12 bg-white">
<div className="max-w-screen-xl mx-auto bg-zinc-900 rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">
<div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
<div className="relative z-10">
<h2 className="font-display-xl text-white mb-stack-md">Ready for the next <span className="text-primary italic font-emphasis-italic">level?</span></h2>
<p className="font-body-lg text-zinc-400 mb-stack-lg max-w-xl mx-auto">Your journey to peak performance starts with a single decision. Join FitNova today.</p>
<div className="flex flex-col md:flex-row gap-4 justify-center">
<button className="bg-primary text-on-primary px-12 py-5 rounded-full font-label-caps text-lg hover:scale-105 transition-transform" >Get Started Now</button>
<button className="bg-zinc-800 text-white px-12 py-5 rounded-full font-label-caps text-lg hover:bg-zinc-700 transition-colors">Speak to a Coach</button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-zinc-900 w-full pt-20 pb-10 border-t border-zinc-800">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 max-w-screen-2xl mx-auto">
<div className="col-span-1 md:col-span-2">
<span className="text-xl font-black text-white mb-6 block">FitNova</span>
<p className="text-zinc-400 font-body-md max-w-sm mb-8">Redefining human potential through high-performance movement and precision wellness. No compromises.</p>
<div className="flex gap-4">
<Link className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">share</span>
</Link>
<Link className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">public</span>
</Link>
</div>
</div>
<div>
<h5 className="text-white font-label-caps mb-6">Programs</h5>
<ul className="space-y-4">
<li><Link className="text-zinc-500 hover:text-orange-500 transition-colors font-lexend text-sm" href="#">Personal Training</Link></li>
<li><Link className="text-zinc-500 hover:text-orange-500 transition-colors font-lexend text-sm" href="#">Nutrition Plans</Link></li>
<li><Link className="text-zinc-500 hover:text-orange-500 transition-colors font-lexend text-sm" href="#">Yoga &amp; Flow</Link></li>
<li><Link className="text-zinc-500 hover:text-orange-500 transition-colors font-lexend text-sm" href="#">Online Coaching</Link></li>
</ul>
</div>
<div>
<h5 className="text-white font-label-caps mb-6">Company</h5>
<ul className="space-y-4">
<li><Link className="text-zinc-500 hover:text-orange-500 transition-colors font-lexend text-sm" href="#">Privacy</Link></li>
<li><Link className="text-zinc-500 hover:text-orange-500 transition-colors font-lexend text-sm" href="#">Terms</Link></li>
<li><Link className="text-zinc-500 hover:text-orange-500 transition-colors font-lexend text-sm" href="#">FAQ</Link></li>
<li><Link className="text-zinc-500 hover:text-orange-500 transition-colors font-lexend text-sm" href="#">Careers</Link></li>
</ul>
</div>
</div>
<div className="mt-20 px-6 md:px-12 max-w-screen-2xl mx-auto border-t border-zinc-800 pt-8 text-center md:text-left">
<span className="font-lexend text-zinc-400 text-sm">© 2026 FitNova. High-Performance Athleticism.</span>
</div>
</footer>
<button aria-label="Scroll to top" className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-lg transition-all duration-300 translate-y-20 opacity-0 hover:scale-110 hover:shadow-xl active:scale-95 group" id="scroll-to-top">
<span className="material-symbols-outlined transition-transform group-hover:-translate-y-1">north</span>
</button>


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
