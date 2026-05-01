"use client";
import React from 'react';
import { MdLocationOn, MdVerified, MdMap, MdArrowBack } from 'react-icons/md';
import { useOnboardingStore } from '@/store/onboardingStore';
import { useRouter } from 'next/navigation';

const AVAILABLE_NICHES = [
  'Lifestyle', 'Technology', 'Sustainable Travel', 'Minimalist Fashion', 'Wellness', 'Architecture'
];

export default function CreatorProfileStep() {
  const router = useRouter();
  const { bio, location, selectedNiches, setProfileData } = useOnboardingStore();

  const toggleNiche = (niche: string) => {
    const newNiches = selectedNiches.includes(niche) 
      ? selectedNiches.filter(n => n !== niche) 
      : [...selectedNiches, niche];
    setProfileData({ selectedNiches: newNiches });
  };

  return (
    <div className="pb-8">
      {/* Hero Header */}
      <header className="mb-12">
        <span className="text-secondary font-semibold tracking-widest uppercase text-xs mb-4 block">Stage 03 / 05</span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4">Define your <br/><span className="text-primary italic">creative persona.</span></h2>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">Your profile is the editorial anchor of your presence. High-tier brands look for narrative clarity and specific audience alignment.</p>
      </header>

      {/* Asymmetric Profile Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
        {/* Left Column: Inputs */}
        <div className="lg:col-span-7 space-y-10">
          {/* Bio Section */}
          <section className="space-y-4">
            <label className="block font-label text-sm font-bold tracking-wider uppercase text-on-surface-variant">The Creator Narrative</label>
            <div className="relative">
              <textarea 
                className="w-full bg-surface-container-high border-none rounded-xl p-6 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary transition-all resize-none outline-none" 
                placeholder="Write a compelling editorial bio that captures your unique voice and niche expertise..." 
                rows={5}
                value={bio}
                onChange={(e) => setProfileData({ bio: e.target.value })}
              ></textarea>
              <div className="absolute bottom-4 right-4 text-[10px] font-bold text-outline uppercase tracking-widest">{bio.length} / 500</div>
            </div>
          </section>

          {/* Niche Selection */}
          <section className="space-y-4">
            <label className="block font-label text-sm font-bold tracking-wider uppercase text-on-surface-variant">Editorial Categories</label>
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_NICHES.map(niche => {
                const isSelected = selectedNiches.includes(niche);
                return (
                  <button 
                    key={niche}
                    onClick={() => toggleNiche(niche)}
                    className={`px-5 py-2 rounded-full font-semibold text-sm transition-transform active:scale-95 ${
                      isSelected 
                        ? 'bg-secondary text-on-secondary' 
                        : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high transition-colors font-medium'
                    }`}
                  >
                    {niche}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Location Input */}
          <section className="space-y-4">
            <label className="block font-label text-sm font-bold tracking-wider uppercase text-on-surface-variant">Primary Base</label>
            <div className="flex items-center gap-4 bg-surface-container-high rounded-xl px-6 py-4">
              <MdLocationOn className="text-primary text-2xl shrink-0" />
              <input 
                className="flex-1 bg-transparent border-none focus:ring-0 text-on-surface p-0 outline-none" 
                placeholder="City, Country (e.g. London, UK)" 
                type="text" 
                value={location}
                onChange={(e) => setProfileData({ location: e.target.value })}
              />
            </div>
          </section>
        </div>

        {/* Right Column: Visual Preview (Bento/Card) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden p-1 relative group">
            {/* Preview Card */}
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-4 bg-slate-200 dark:bg-slate-800">
              <img className="w-full h-full object-cover mix-blend-overlay" alt="Professional creator portrait" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold tracking-tight">{bio ? 'Creator Profile' : 'Your Identity'}</h3>
                <p className="text-sm opacity-80">{location || 'Profile Preview'}</p>
                {selectedNiches.length > 0 && (
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {selectedNiches.slice(0, 3).map(n => (
                      <span key={n} className="text-[10px] px-2 py-1 bg-white/20 backdrop-blur-md rounded-full uppercase tracking-wider">{n}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* Floating Label Tooltip */}
            <div className="absolute -top-4 -right-4 bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/20">
              <MdVerified className="text-secondary text-3xl block mb-1" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-800">Verified Look</p>
            </div>
          </div>

          {/* Map/Location Context */}
          <div className="bg-surface-container-low rounded-xl p-5 space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-bold uppercase tracking-widest">Regional Reach</h4>
              <MdMap className="text-outline text-2xl" />
            </div>
            <div className="w-full h-24 rounded-lg overflow-hidden grayscale opacity-80 bg-slate-800">
              <img className="w-full h-full object-cover opacity-60" alt="Map illustration" src="/images/topo_map.png" />
            </div>
          </div>
        </div>
      </div>

      {/* Transactional Navigation Actions - STICKY */}
      <footer className="sticky bottom-0 bg-background/95 backdrop-blur-md z-50 pt-4 pb-4 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <button 
          onClick={() => router.back()}
          className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 group"
        >
          <MdArrowBack className="group-hover:-translate-x-1 transition-transform text-2xl" />
          <span className="font-bold text-sm uppercase tracking-widest">Previous Step</span>
        </button>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button className="hidden md:block text-outline hover:text-on-surface transition-colors font-bold text-sm uppercase tracking-widest">Save Draft</button>
          <button 
            onClick={() => router.push('/onboarding/socials')}
            className="w-full md:w-auto bg-gradient-to-br from-primary to-primary-light text-white px-8 py-3 rounded-lg font-bold shadow-md transition-all hover:scale-[1.02] active:scale-95"
          >
            Continue to Socials
          </button>
        </div>
      </footer>
    </div>
  );
}
