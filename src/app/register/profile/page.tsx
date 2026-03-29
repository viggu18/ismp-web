import React from 'react';

export default function CreatorProfileStep() {
  return (
    <>
      {/* Hero Header */}
      <header className="mb-16">
        <span className="text-secondary font-semibold tracking-widest uppercase text-xs mb-4 block">Stage 03 / 05</span>
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-6">Define your <br/><span className="text-primary italic">creative persona.</span></h2>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">Your profile is the editorial anchor of your presence. High-tier brands look for narrative clarity and specific audience alignment.</p>
      </header>

      {/* Asymmetric Profile Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Inputs */}
        <div className="lg:col-span-7 space-y-12">
          {/* Bio Section */}
          <section className="space-y-4">
            <label className="block font-label text-sm font-bold tracking-wider uppercase text-on-surface-variant">The Creator Narrative</label>
            <div className="relative">
              <textarea className="w-full bg-surface-container-high border-none rounded-xl p-6 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary transition-all resize-none outline-none" placeholder="Write a compelling editorial bio that captures your unique voice and niche expertise..." rows={6}></textarea>
              <div className="absolute bottom-4 right-4 text-[10px] font-bold text-outline uppercase tracking-widest">0 / 500</div>
            </div>
          </section>

          {/* Niche Selection */}
          <section className="space-y-6">
            <label className="block font-label text-sm font-bold tracking-wider uppercase text-on-surface-variant">Editorial Categories</label>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-2.5 rounded-full bg-secondary text-on-secondary font-semibold text-sm transition-transform active:scale-95">Lifestyle</button>
              <button className="px-6 py-2.5 rounded-full bg-surface-container-highest text-on-surface-variant font-medium text-sm hover:bg-surface-container-high transition-colors">Technology</button>
              <button className="px-6 py-2.5 rounded-full bg-surface-container-highest text-on-surface-variant font-medium text-sm hover:bg-surface-container-high transition-colors">Sustainable Travel</button>
              <button className="px-6 py-2.5 rounded-full bg-secondary text-on-secondary font-semibold text-sm transition-transform active:scale-95">Minimalist Fashion</button>
              <button className="px-6 py-2.5 rounded-full bg-surface-container-highest text-on-surface-variant font-medium text-sm hover:bg-surface-container-high transition-colors">Wellness</button>
              <button className="px-6 py-2.5 rounded-full bg-surface-container-highest text-on-surface-variant font-medium text-sm hover:bg-surface-container-high transition-colors">Architecture</button>
              <button className="px-6 py-2.5 rounded-full bg-surface-container-highest text-on-surface-variant font-medium text-sm hover:bg-surface-container-high transition-colors">+ Add Niche</button>
            </div>
          </section>

          {/* Location Input */}
          <section className="space-y-4">
            <label className="block font-label text-sm font-bold tracking-wider uppercase text-on-surface-variant">Primary Base</label>
            <div className="flex items-center gap-4 bg-surface-container-high rounded-xl px-6 py-4">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <input className="flex-1 bg-transparent border-none focus:ring-0 text-on-surface p-0 outline-none" placeholder="City, Country (e.g. London, UK)" type="text" />
            </div>
          </section>
        </div>

        {/* Right Column: Visual Preview (Bento/Card) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden p-1 relative group">
            {/* Preview Card */}
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-6">
              <img className="w-full h-full object-cover" alt="Professional creator portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ6fZsvLoBbBWFVldJxYQXTnGCrusKzsH1qKI7Rx7Y2pnuTcHDphDKYVAQDqVw2VdFuTKMLYt2aOPmS6lZ7yD0I0hZSn2vHRsHHrGaW6Xuvzk5KvBd2cD8-QGCof0u_dk_Jwx_eSw4hETNZT1FeSdUybd_CcuYxncztwebzR0vGN3VUeXbHIMbN87vqvqAUxis7c4y3_AG36Q7LL5qP3V2NmUFtA-kxafAqFn80yDG3rIlmH9hSYOZ9OrM_ndNC4zXCj13-Uyv4Wsp" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold tracking-tight">Your Identity</h3>
                <p className="text-sm opacity-80">Profile Preview</p>
              </div>
            </div>
            <div className="px-4 pb-8 space-y-6">
              <div className="space-y-2">
                <div className="h-4 w-3/4 bg-surface-container rounded-full"></div>
                <div className="h-4 w-full bg-surface-container rounded-full"></div>
                <div className="h-4 w-1/2 bg-surface-container rounded-full"></div>
              </div>
              <div className="flex gap-2">
                <div className="h-8 w-20 bg-surface-container-highest rounded-full"></div>
                <div className="h-8 w-24 bg-surface-container-highest rounded-full"></div>
              </div>
            </div>
            {/* Floating Label Tooltip */}
            <div className="absolute -top-4 -right-4 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20">
              <span className="material-symbols-outlined text-secondary text-4xl block mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface">Verified Look</p>
            </div>
          </div>

          {/* Map/Location Context */}
          <div className="bg-surface-container-low rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-bold uppercase tracking-widest">Regional Reach</h4>
              <span className="material-symbols-outlined text-outline">map</span>
            </div>
            <div className="w-full h-32 rounded-lg overflow-hidden grayscale opacity-60">
              <img className="w-full h-full object-cover" alt="Map illustration" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-_E6gECArqD_rC48aMmk26Le9DavAeA7hbnrjZxPWle9SXw0KZnFFBcm9UhdqugS_oAkC75P6k7n2ftXRoEA5osZo2R-NTSQPLmDgyFFHNf9IkO5qeuuxZ9ikuAoiXy5tp_iLaRjOqBniibcyBOr9-3ooIxplJ9swDbHYd9isi6htzjs6D7wtEACewsa1D16BsxY4FVKsv02y2nbcIRsJUU53iSWS6ZoMkh_TVwBugwPMmXo8N3K6x5KKz1cXnW7epF2XA36jraQq" />
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed italic">&quot;Brands filter by location for localized campaigns. Ensure your base is accurate for geo-targeted opportunities.&quot;</p>
          </div>
        </div>
      </div>

      {/* Transactional Navigation Actions */}
      <footer className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-outline-variant/15">
        <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 group">
          <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
          <span className="font-bold text-sm uppercase tracking-widest">Previous Step</span>
        </button>
        <div className="flex items-center gap-8 w-full md:w-auto">
          <button className="hidden md:block text-outline hover:text-on-surface transition-colors font-bold text-sm uppercase tracking-widest">Save Draft</button>
          <button className="w-full md:w-auto bg-gradient-to-br from-primary to-primary-light text-white px-12 py-4 rounded-lg font-bold shadow-lg transition-all hover:scale-[1.02] active:scale-95">
            Continue to Socials
          </button>
        </div>
      </footer>
    </>
  );
}
