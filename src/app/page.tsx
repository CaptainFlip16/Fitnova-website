"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);

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
      

<header className="max-md:hidden sticky top-0 w-full z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800 shadow-sm">
<nav className="max-md:hidden flex justify-between items-center px-6 py-4 md:px-12 max-w-[1440px] mx-auto">
<div className="text-2xl font-black text-zinc-900 dark:text-white italic">FitNova</div>
<div className="hidden md:flex gap-8 items-center"><Link className="font-['Lexend'] font-medium uppercase tracking-wider text-sm text-[#FF6A2C] border-b-2 border-[#FF6A2C] pb-1 transition-all duration-300" href="/">Home</Link>
<Link className="font-['Lexend'] font-medium uppercase tracking-wider text-sm text-zinc-600 dark:text-zinc-400 hover:text-[#FF6A2C] transition-all duration-300" href="/about">About</Link>
<Link className="font-['Lexend'] font-medium uppercase tracking-wider text-sm text-zinc-600 dark:text-zinc-400 hover:text-[#FF6A2C] transition-all duration-300" href="/services">Services</Link>
<Link className="font-['Lexend'] font-medium uppercase tracking-wider text-sm text-zinc-600 dark:text-zinc-400 hover:text-[#FF6A2C] transition-all duration-300" href="/trainers">Trainers</Link>
<Link className="font-['Lexend'] font-medium uppercase tracking-wider text-sm text-zinc-600 dark:text-zinc-400 hover:text-[#FF6A2C] transition-all duration-300" href="/pricing">Pricing</Link></div>
<button className="bg-[#FF6A2C] text-white px-6 py-2 rounded-full font-label-caps text-label-caps active:scale-95 transition-all duration-200" >Join Now</button>
</nav>
</header>

<section className="relative min-h-[921px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover" data-alt="A focused high-performance athlete running intensely on a modern curved treadmill in a premium, sun-drenched gym. The lighting is crisp and natural, highlighting muscle definition and movement. The background features high-end architectural fitness equipment in a minimalist setting with soft gray and white tones, punctuated by the FitNova brand's energy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi1aSKL-z9JW1iUJ_OW0XNa8u17lkVrKq_bQLIdei2eSb2lae9zqXY2JttC--IsjKZDLpeXl9arF2x7vsUvFyBWLMechGu9Rzoe1gtY2mI9vSQzx3AE52ju7DgLN5vqREzWWEUsOrVJ0N4KEigdsQTCUjdiH7J1zIuEo6tYWgQ66ZgaddjanhfTWNYfui4E76VHZBoM5R0vcN4KnceQbQ6baO14VuE7GSG0jZUCgAtgr9VnbBV4Ms_AltxRjpfPwFv43B129xGmaQ"/>
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
</div>
<div className="relative z-10 container-max mx-auto px-6 md:px-12 py-stack-lg">
<div className="max-w-2xl">
<h1 className="font-display-xl text-display-xl text-on-background mb-stack-sm">
                    Transform your <span className="font-emphasis-italic italic text-primary-container">body</span>, empower your <span className="font-emphasis-italic italic text-primary-container">mind</span>
</h1>
<p className="font-body-lg text-body-lg text-secondary mb-stack-md max-w-lg">
                    Take charge of your health with personalized fitness programs, balanced nutrition, and expert guidance.
                </p>
<div className="flex flex-wrap gap-4 items-center">
<button className="bg-[#FF6A2C] text-white px-8 py-4 rounded-full font-label-caps text-label-caps hover:shadow-lg transition-all transform hover:-translate-y-1" >Start Your Journey</button>
<button className="flex items-center gap-2 px-8 py-4 rounded-full border-1.5 border-on-background/10 font-label-caps text-label-caps hover:bg-white/50 transition-all">
<span className="material-symbols-outlined">play_circle</span> Watch Video
                    </button>
</div>
<div className="mt-16 flex gap-8 items-center">
<div className="bg-white p-4 rounded-xl shadow-xl flex items-center gap-4">
<div className="flex -space-x-4">
<img className="w-10 h-10 rounded-full border-2 border-white object-cover" data-alt="Close up portrait of a professional fitness trainer in athletic wear, smiling confidently in a high-key studio environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY-S8Vv_EG-RgIykuVtCGROo2egDN8z9P9UOgN6bgrd2hNHBBf-UmF48-70Z2dsKADsqwJLq2MthPFUEMWoH_Jeps9tEtMsPbUefCHhgVIVvYgrWmNoEqosguaqXqgeB-JxAXha8wf4DqdIRwBeDaMXFA6_ObiOhiHyJAawwqLsbzR7-QkBh4-3oYqPAFJFDYEhB3kKfnhhTxzgS4c3HhSTOz2Ft7bCaYRgEMdUvwCqLM5rPV_E70JfRj58SjpJtXaveSFJJHTG_Y"/>
<img className="w-10 h-10 rounded-full border-2 border-white object-cover" data-alt="Profile shot of an athletic trainer with a determined expression, lit by dramatic side lighting in a modern gym facility." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbHl9WyAVsDXtAdjjxbDi68UH39yhx48KQbHJYH3izrTfWNEWpDsvB1n-tpii6c9unvabUfKT71KXNIo4pzIc4Op5s8rN1Bjdm8SrLHgL6hf4JPyGMhFbak31Ihygva8hI19IMUugA286v3FM2trtIt1FEDVY3IYZNA0hecYCXceZPOLP0zE_kT6mxc9047_rwJ_efmK73STWvQ4gqu_5inuLpcQa9f7-RhuirdDLMSvWG0CuDMYf3ijIzGEaOz4V2jrDxoTCSlHI"/>
<img className="w-10 h-10 rounded-full border-2 border-white object-cover" data-alt="Cheerful female wellness coach with vibrant energy, posed against a clean minimalist studio backdrop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEI6kHmBAWyXmZgWfYk-306JhwWkYUb_simQiDanLHEzQLMYyefT_n6Bty3vsKTjo804XaDAgEudn1761kBMfKXEeeK852-uvLcLqorpmgOlOJRCJoljfSItCnijDcxRaZ5Vn15FltskWe2S9K289GAvcrbFCzIJOpP3g-d8qCnNkTGhRbPwyp5iFwSpuo7MdnQ_VZH1xTa-QZYmKeYmxMY3DwWvhFSKG3MykZECIeqVaQ-S8E7SyQPxqyk_aOrsl8tkru9eI-tYg"/>
</div>
<div>
<p className="text-xl font-bold text-on-background">25K+</p>
<p className="text-xs font-label-caps text-secondary">Satisfied Clients</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-section-padding bg-white">
<div className="container-max mx-auto px-6 md:px-12 text-center mb-16">
<h2 className="font-headline-lg text-headline-lg text-on-background mb-stack-sm max-w-3xl mx-auto">
                At our <span className="text-primary-container">FitNova</span>, we believe fitness is more than just workouts.
            </h2>
<p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mb-stack-md">
                We bridge the gap between physical peak performance and mental resilience through an integrated approach.
            </p>
<button className="text-primary-container font-label-caps text-label-caps underline underline-offset-8 decoration-2 hover:decoration-primary transition-all">Explore Our Methodology</button>
</div>
<div className="flex gap-gutter overflow-x-auto pb-12 px-6 md:px-12 no-scrollbar scroll-smooth">

<div className="min-w-[320px] md:min-w-[400px] flex-shrink-0 group relative h-[500px] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A powerful athlete slamming thick heavy ropes in a dark industrial gym setting. Dust particles are caught in dramatic spotlights, highlighting the intensity and motion of the exercise." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI3NrE7lNADZIKSXdUMxWXr3-iv2piBQIV31L9AWoaqHdQHriFSnDyMr_Gp9quX22K99FH6QLDiq9j8xa4hSxd4LgxJYKOmAJpNjYQrzHHjyj4uUD_QQWAKrnkwfkv41bty8Zvg3KnrEBoL2mjOzCIadlE8SYngLeidsly775FucV2lb4hS1OwgDjBXVH19NuRqwooA1DoOaKunSGi7OKtOhMApOBo2QpmkrAHd48ggKVZgeERoBSM3JLs0oZ8vBrEjPXVpCvJmKg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="font-headline-md text-white mb-4">Battle Rope Training</h3>
<button className="bg-white text-on-background px-6 py-2 rounded-full font-label-caps text-label-caps group-hover:bg-primary-container group-hover:text-white transition-colors">View Now</button>
</div>
</div>
<div className="min-w-[320px] md:min-w-[400px] flex-shrink-0 group relative h-[500px] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Strong male athlete performing barbell squats with perfect form in a bright, airy professional training facility. The aesthetic is clean and focused with high-end steel equipment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0Nvy0Ryg63wnBxRbBkKOvLczV8OMLgp7TTB-LVXoULCff84oqA6SR0GZ77fT7STwItoc4osALyVxkproHpWjFBjZKlydvufeeQsghRLUykmAMpyas0RhI0IoKiE6MVYuIanWzJQICwsGp7mfLyGhkMTAKJKp6Da1ZNIQLlQmWnAXXUcpYSPDSIAgNngr8LdVYMv8-CtVHHHYfFJnGBbuMZ-3_XVKHt1FAA96fGabw3ILrYyg_GgcMhfGliaLka471gVvrVhMrliw"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="font-headline-md text-white mb-4">Strength Foundations</h3>
<button className="bg-white text-on-background px-6 py-2 rounded-full font-label-caps text-label-caps group-hover:bg-primary-container group-hover:text-white transition-colors">View Now</button>
</div>
</div>
<div className="min-w-[320px] md:min-w-[400px] flex-shrink-0 group relative h-[500px] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Zen yoga studio with soft morning light streaming through large windows. A woman is in a graceful warrior pose on a high-quality cork mat, surrounded by minimalist white architecture and lush green plants." src="https://lh3.googleusercontent.com/aida-public/AB6AXuASIJDPVD_uSrgQBzBlMIcsMTaLl4GBB74a4yANaLa_l4lU9Gtak8rF2e8F9vTfaZalxKZLBQbcPEwVIqYNBO_ONIiHW_IbMyCN-DTFhfB30LhUKiVGgtCKEIZLAryKrujo19xp6nDkDnE8NncJYYIJtUjtB9k7PAoOHgfytDECVwLa7Ug8cx2r5VarECPAkly_PiviEk09ccnDWZ3CW91y1KcsEIz-53VuwEXmqbVzXr5FY6-876lxrJq_nt6Le02G60lyWmDLZ_Q"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="font-headline-md text-white mb-4">Mindful Flow</h3>
<button className="bg-white text-on-background px-6 py-2 rounded-full font-label-caps text-label-caps group-hover:bg-primary-container group-hover:text-white transition-colors">View Now</button>
</div>
</div>
</div>
</section>

<section className="py-section-padding bg-[#F5F5F5]">
<div className="container-max mx-auto px-6 md:px-12">
<div className="flex justify-between items-end mb-16">
<h2 className="font-headline-lg text-headline-lg max-w-xl">Services That Shape a <span className="italic font-emphasis-italic text-primary-container">Healthier</span> You</h2>
<Link className="hidden md:block font-label-caps text-label-caps text-secondary hover:text-on-background transition-colors" href="/services">View All Services</Link>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">

<div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-primary-container/20 group cursor-pointer" onClick={() => window.location.href='/services'}>
<span className="material-symbols-outlined text-4xl text-primary-container mb-6 group-hover:scale-110 transition-transform">fitness_center</span>
<h3 className="font-headline-md text-on-background mb-4">Personal Training</h3>
<p className="font-body-md text-secondary mb-6">One-on-one sessions tailored to your specific body mechanics and athletic goals.</p>
<Link className="flex items-center gap-2 font-label-caps text-label-caps text-on-background group-hover:text-primary-container" href="/services">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
</div>
<div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-primary-container/20 group cursor-pointer" onClick={() => window.location.href='/services'}>
<span className="material-symbols-outlined text-4xl text-primary-container mb-6 group-hover:scale-110 transition-transform">nutrition</span>
<h3 className="font-headline-md text-on-background mb-4">Nutrition Plans</h3>
<p className="font-body-md text-secondary mb-6">Customized meal strategies designed by certified nutritionists to fuel your lifestyle.</p>
<Link className="flex items-center gap-2 font-label-caps text-label-caps text-on-background group-hover:text-primary-container" href="/services">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
</div>
<div className="bg-primary-container p-10 rounded-xl shadow-xl transition-all group cursor-pointer" onClick={() => window.location.href='/services'}>
<span className="material-symbols-outlined text-4xl text-white mb-6 group-hover:scale-110 transition-transform">self_improvement</span>
<h3 className="font-headline-md text-white mb-4">Yoga &amp; Flow</h3>
<p className="font-body-md text-white/90 mb-6">Connect movement with breath in our signature mobility and mindfulness sessions.</p>
<Link className="flex items-center gap-2 font-label-caps text-label-caps text-white group-hover:translate-x-2 transition-transform" href="/services">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
</div>
<div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-primary-container/20 group cursor-pointer" onClick={() => window.location.href='/services'}>
<span className="material-symbols-outlined text-4xl text-primary-container mb-6 group-hover:scale-110 transition-transform">directions_run</span>
<h3 className="font-headline-md text-on-background mb-4">Cardio Blast</h3>
<p className="font-body-md text-secondary mb-6">High-intensity interval training protocols that push your cardiovascular limits.</p>
<Link className="flex items-center gap-2 font-label-caps text-label-caps text-on-background group-hover:text-primary-container" href="/services">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
</div>
<div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-primary-container/20 group cursor-pointer" onClick={() => window.location.href='/services'}>
<span className="material-symbols-outlined text-4xl text-primary-container mb-6 group-hover:scale-110 transition-transform">favorite</span>
<h3 className="font-headline-md text-on-background mb-4">Wellness Coaching</h3>
<p className="font-body-md text-secondary mb-6">Holistic lifestyle adjustments focusing on sleep, stress, and recovery habits.</p>
<Link className="flex items-center gap-2 font-label-caps text-label-caps text-on-background group-hover:text-primary-container" href="/services">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
</div>
<div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-primary-container/20 group cursor-pointer" onClick={() => window.location.href='/services'}>
<span className="material-symbols-outlined text-4xl text-primary-container mb-6 group-hover:scale-110 transition-transform">video_camera_front</span>
<h3 className="font-headline-md text-on-background mb-4">Online Coaching</h3>
<p className="font-body-md text-secondary mb-6">Remote access to our world-class trainers and customized training app.</p>
<Link className="flex items-center gap-2 font-label-caps text-label-caps text-on-background group-hover:text-primary-container" href="/services">Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
</div>
</div>
</div>
</section>

<section className="py-section-padding bg-white overflow-hidden">
<div className="container-max mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-20">
<div className="w-full md:w-1/2 relative">
<div className="relative rounded-xl overflow-hidden shadow-2xl">
<img className="w-full h-[600px] object-cover" data-alt="A focused athlete lifting heavy iron weights in a dimly lit, professional powerlifting gym. The scene focuses on the grit and determination, with intense light highlighting the strain and focus. A translucent UI element overlays the image showing a 96 percent progress metric in a sleek, digital typography style." src="/images/powerlifter.png"/>
</div>
</div>
<div className="w-full md:w-1/2">
<div className="bg-primary-container p-12 md:p-20 rounded-xl shadow-2xl transform md:translate-x-[-100px] relative z-20">
<h2 className="font-headline-lg text-white mb-stack-sm">Track your health progress</h2>
<p className="font-body-lg text-white/90 mb-stack-md">
                        Our proprietary FitNova analytics engine provides real-time insights into your body composition, strength gains, and metabolic efficiency. We don't just guess; we measure.
                    </p>
<button className="bg-white text-primary-container px-10 py-4 rounded-full font-label-caps text-label-caps hover:bg-on-background hover:text-white transition-all transform hover:scale-105">Discover More</button>
</div>
</div>
</div>
</section>

<section className="py-section-padding bg-zinc-950 text-white">
<div className="container-max mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
<div className="max-w-xl mb-16 md:mb-0">
<h2 className="font-display-xl text-display-xl mb-stack-sm">
                    Move for <span className="italic font-emphasis-italic text-primary-container">healthy</span> body
                </h2>
<p className="font-body-lg text-zinc-400 mb-stack-md">
                    Elevation is a mindset. Every rep, every breath, every drop of sweat is an investment in the version of you that refuses to settle for mediocrity.
                </p>
</div>
<div className="flex flex-col gap-6 w-full md:w-auto">
<div className="bg-zinc-900 p-8 rounded-xl flex items-center gap-8 border border-zinc-800 hover:border-primary-container/30 transition-all">
<img className="w-20 h-20 rounded-lg object-cover" data-alt="Action portrait of an elite fitness coach demonstrating a high-impact exercise, captured in a sharp, crisp athletic photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoqc0LDMijIi4Jq82np8_FbLIc0XXufuYMbCUr9oDhOs086LtkR1bMuN5mJA9XWMjLiWJGr7XwDneQF1N-CqsxhF_FU_6tuLmTzcEPGWxHkWqL2lz53eMFrPrjPNMky4oxM81x675c8zqliDsr4vRmPyNkSTQn3IdEA6dXmMG1LLJm3eN62tvxyr0jp_LCEzTEJCSv-WJ-wu-40NlBvc9yJh6PMBZPzj_NO41k0JcmNa99fL6_a_YSaWq-WK4opLXeFLGxjqkZEZI"/>
<div>
<h4 className="font-headline-md text-xl">Elite Coaching</h4>
<p className="text-zinc-500 font-label-caps text-xs">Expert Guidance 24/7</p>
</div>
<span className="material-symbols-outlined text-primary-container ml-auto">bolt</span>
</div>
<div className="bg-zinc-900 p-8 rounded-xl flex items-center gap-8 border border-zinc-800 hover:border-primary-container/30 transition-all translate-x-4">
<img className="w-20 h-20 rounded-lg object-cover" data-alt="A fitness professional checking a digital workout log on a premium smartwatch, emphasizing technical precision and data-driven training." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0HiPRd-9cIh2U7vNqGuyoX5WsoyfBJkzkGZpTM8otI12ZrYTUDSGMJiw0M61Z-xei3KymppsQ4Y9EDXT5zjHwBA6StEK9zyHXgKsoYlCsC7LFgq24oIJa-Ps-5Fiksy5hIifoXitdBtYkH9kyzmVFdo0qL9udKV1sfB6tmZU2Dv1mpMjgUiCQwFGiaBVG4lig-vsEqsaWcsLgooONZKWNog0Srgb5Lc7lNmWt23QsW9npL9FL3ueWAvM4X4wm-gbaKUf1rqHWPtc"/>
<div>
<h4 className="font-headline-md text-xl">Digital Sync</h4>
<p className="text-zinc-500 font-label-caps text-xs">Seamless Data Integration</p>
</div>
<span className="material-symbols-outlined text-primary-container ml-auto">vital_signs</span>
</div>
</div>
</div>
</section>

<section className="py-section-padding bg-[#F5F5F5]">
<div className="container-max mx-auto px-6 md:px-12 text-center">
<h2 className="font-headline-lg text-headline-lg mb-stack-md">Our Pricing Plan For You</h2>
<div className="flex justify-center items-center gap-6 mb-16">
<span className={`font-label-caps text-label-caps ${!isAnnual ? 'text-on-background' : 'text-secondary'}`}>Monthly</span>
<button onClick={() => setIsAnnual(!isAnnual)} className={`w-14 h-8 rounded-full relative p-1 flex items-center transition-colors duration-300 ${isAnnual ? 'bg-primary-container' : 'bg-zinc-300'}`}>
<div className={`w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-300 ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`}></div>
</button>
<span className={`font-label-caps text-label-caps ${isAnnual ? 'text-primary-container' : 'text-secondary'}`}>Annual <span className="text-primary-container">(Save 20%)</span></span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-stretch">

<div className="bg-white p-12 rounded-xl shadow-sm border border-zinc-100 flex flex-col">
<h3 className="font-label-caps text-label-caps text-secondary mb-6">Kickstart</h3>
<div className="mb-8">
<span className="text-5xl font-black">{isAnnual ? '$39' : '$49'}</span>
<span className="text-secondary">/mo</span>
<div className={`text-[10px] text-primary-container font-bold uppercase tracking-wider ${isAnnual ? 'block' : 'hidden'} mt-2`}>Billed Annually</div>
</div>
<ul className="text-left space-y-4 mb-12 flex-grow">
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-container">check_circle</span> Unlimited Gym Access</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-container">check_circle</span> 2 Group Classes / Week</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-container">check_circle</span> Locker Room Access</li>
<li className="flex items-center gap-3 text-zinc-300"><span className="material-symbols-outlined">cancel</span> Personal Training</li>
</ul>
<button className="w-full py-4 rounded-full border-1.5 border-on-background font-label-caps text-label-caps hover:bg-on-background hover:text-white transition-all">Get Started</button>
</div>

<div className="bg-zinc-950 p-12 rounded-xl shadow-2xl border border-primary-container/30 flex flex-col scale-105 relative z-10 text-white">
<div className="absolute top-0 right-12 translate-y-[-50%] bg-primary-container text-white px-4 py-1 rounded-full font-label-caps text-[10px]">MOST POPULAR</div>
<h3 className="font-label-caps text-label-caps text-primary-container mb-6">Transform</h3>
<div className="mb-8">
<span className="text-5xl font-black">{isAnnual ? '$69' : '$89'}</span>
<span className="text-zinc-400">/mo</span>
<div className={`text-[10px] text-primary-container font-bold uppercase tracking-wider ${isAnnual ? 'block' : 'hidden'} mt-2`}>Billed Annually</div>
</div>
<ul className="text-left space-y-4 mb-12 flex-grow">
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-container">check_circle</span> All Kickstart Benefits</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-container">check_circle</span> Unlimited Group Classes</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-container">check_circle</span> 1 PT Session / Month</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-container">check_circle</span> Nutrition Consultation</li>
</ul>
<button className="w-full py-4 rounded-full bg-primary-container font-label-caps text-label-caps text-white hover:bg-white hover:text-on-background transition-all">Select Plan</button>
</div>

<div className="bg-white p-12 rounded-xl shadow-sm border border-zinc-100 flex flex-col">
<h3 className="font-label-caps text-label-caps text-secondary mb-6">Elite</h3>
<div className="mb-8">
<span className="text-5xl font-black">{isAnnual ? '$119' : '$149'}</span>
<span className="text-secondary">/mo</span>
<div className={`text-[10px] text-primary-container font-bold uppercase tracking-wider ${isAnnual ? 'block' : 'hidden'} mt-2`}>Billed Annually</div>
</div>
<ul className="text-left space-y-4 mb-12 flex-grow">
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-container">check_circle</span> Full Facility Access</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-container">check_circle</span> Weekly PT Sessions</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-container">check_circle</span> Recovery Suite Access</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary-container">check_circle</span> Custom App Profile</li>
</ul>
<button className="w-full py-4 rounded-full border-1.5 border-on-background font-label-caps text-label-caps hover:bg-on-background hover:text-white transition-all">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-section-padding bg-white">
<div className="container-max mx-auto px-6 md:px-12">
<div className="bg-zinc-950 rounded-3xl overflow-hidden flex flex-col md:flex-row">
<div className="w-full md:w-1/3 h-[300px] md:h-auto">
<img className="w-full h-full object-cover grayscale" data-alt="Dramatic black and white action shot of a professional female trainer adjusting weights, conveying experience and strength in a high-contrast cinematic style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpUp2v3iz2LEzANvQInBTfPYasN_i5kLGxJyigm32vPExmTDRiGhup6s5ZC2spSjTAX5sA4fNQPjexf6v0rLJNgsv7B9m3A6qMC_zPGPi7wYFuS9fj3zPs4iXNBiLknbNkNCWullK6HxPeGsJMTlO4H10RHpQmdjZ2UpuJ91eCQYAvQzIyWtHUOFrp0HBZA_k6soANBzY9Pmtad1D6taebPAcO6ovqfdUABd_5XfU9nFBx-Tgg59lzQmrsBBAmajn3NYcR_OVDmnI"/>
</div>
<div className="w-full md:w-2/3 p-12 md:p-20 flex flex-col justify-center">
<h2 className="font-headline-lg text-white mb-stack-sm max-w-xl">
                        Get the latest <span className="italic font-emphasis-italic text-primary-container">Updates</span>, special <span className="italic font-emphasis-italic text-primary-container">Offers</span>, and exclusive event invitations!
                    </h2>
<form className="flex flex-col sm:flex-row gap-4 mt-8">
<input className="flex-grow bg-zinc-900 border-none rounded-full px-8 py-4 text-white focus:ring-2 focus:ring-primary-container" placeholder="Your email address" type="email"/>
<button className="bg-primary-container text-white p-4 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</form>
</div>
</div>
</div>
</section>

<section className="py-section-padding bg-primary-container">
<div className="container-max mx-auto px-6 md:px-12 text-center text-white">
<h2 className="font-display-xl text-display-xl mb-stack-sm">
                Join us whenever you're <span className="italic font-emphasis-italic text-zinc-950">ready</span> wherever you are
            </h2>
<p className="font-body-lg mb-stack-md max-w-2xl mx-auto text-white/90">
                The hardest part of the journey is the first step. We've made it easier with flexible membership options and a community that supports your growth.
            </p>
<button className="bg-zinc-950 text-white px-12 py-5 rounded-full font-label-caps text-label-caps hover:bg-white hover:text-zinc-950 transition-all transform hover:scale-105" >Start Your Journey</button>
</div>
</section>

<footer className="bg-zinc-950 pt-20 pb-10 text-zinc-400 border-t border-zinc-800">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-20 max-w-7xl mx-auto font-['Lexend']">
<div className="col-span-1 md:col-span-1">
<div className="text-xl font-black text-white italic mb-6">FitNova</div>
<p className="mb-8 leading-relaxed">Redefining high-performance athleticism through science-backed training and premium lifestyle integration.</p>
<div className="flex gap-4">
<Link className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:text-[#FF6A2C] transition-colors" href="#"><span className="material-symbols-outlined text-sm">public</span></Link>
<Link className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:text-[#FF6A2C] transition-colors" href="#"><span className="material-symbols-outlined text-sm">alternate_email</span></Link>
<Link className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:text-[#FF6A2C] transition-colors" href="#"><span className="material-symbols-outlined text-sm">phone</span></Link>
</div>
</div>
<div>
<h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Lifestyle</h4>
<ul className="space-y-4">
<li><Link className="hover:text-[#FF6A2C] transition-colors" href="#">Workout Hub</Link></li>
<li><Link className="hover:text-[#FF6A2C] transition-colors" href="#">Nutrient Shop</Link></li>
<li><Link className="hover:text-[#FF6A2C] transition-colors" href="#">Apparel</Link></li>
<li><Link className="hover:text-[#FF6A2C] transition-colors" href="#">Wellness Blog</Link></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Services</h4>
<ul className="space-y-4">
<li><Link className="hover:text-[#FF6A2C] transition-colors" href="#">Pricing Plans</Link></li>
<li><Link className="hover:text-[#FF6A2C] transition-colors" href="#">Class Schedule</Link></li>
<li><Link className="hover:text-[#FF6A2C] transition-colors" href="#">Private Training</Link></li>
<li><Link className="hover:text-[#FF6A2C] transition-colors" href="#">Corporate Wellness</Link></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Support</h4>
<ul className="space-y-4">
<li><Link className="hover:text-[#FF6A2C] transition-colors" href="#">Privacy Policy</Link></li>
<li><Link className="hover:text-[#FF6A2C] transition-colors" href="#">Terms of Service</Link></li>
<li><Link className="hover:text-[#FF6A2C] transition-colors" href="#">FAQ</Link></li>
<li><Link className="hover:text-[#FF6A2C] transition-colors" href="#">Careers</Link></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-900 mt-12 pt-8 text-center text-xs tracking-widest uppercase">
<p>© 2026 FitNova. High-Performance Athleticism.</p>
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
