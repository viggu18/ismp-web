import React from 'react';

export default function RatesStep() {
  return (
    <>
      {/* Editorial Header Section */}
      <section className="mb-12">
        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-bold tracking-widest uppercase">
          Step 5 of 5
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4 leading-tight">
          Define Your <br/>Value Proposition.
        </h1>
        <p className="text-on-surface-variant text-lg max-w-xl">
          Your rate card is the first thing premium brands look at. Set competitive prices based on our niche-specific data to maximize your partnership potential.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Rate Configuration Form */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-on-surface">
              <span className="material-symbols-outlined text-primary">currency_exchange</span>
              Standard Deliverables
            </h3>
            <div className="space-y-6">
              {/* Instagram Reels */}
              <div className="group">
                <label className="text-sm font-bold text-on-surface-variant block mb-2">Instagram Reels</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                    $
                  </div>
                  <input className="w-full pl-8 pr-4 py-4 bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary transition-all placeholder:text-outline-variant outline-none" placeholder="0.00" type="number" />
                </div>
                <p className="mt-2 text-xs text-secondary font-medium">Market average for your niche: $450 - $700</p>
              </div>

              {/* Instagram Stories */}
              <div className="group">
                <label className="text-sm font-bold text-on-surface-variant block mb-2">Instagram Stories (Set of 3)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                    $
                  </div>
                  <input className="w-full pl-8 pr-4 py-4 bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary transition-all placeholder:text-outline-variant outline-none" placeholder="0.00" type="number" />
                </div>
                <p className="mt-2 text-xs text-outline font-medium">Market average: $150 - $300</p>
              </div>

              {/* Carousel/Static Post */}
              <div className="group">
                <label className="text-sm font-bold text-on-surface-variant block mb-2">Carousel or Static Post</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                    $
                  </div>
                  <input className="w-full pl-8 pr-4 py-4 bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary transition-all placeholder:text-outline-variant outline-none" placeholder="0.00" type="number" />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services Bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-6 rounded-xl border border-transparent hover:border-outline-variant/30 transition-all">
              <h4 className="font-bold text-on-surface mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">verified</span>
                Usage Rights
              </h4>
              <p className="text-sm text-on-surface-variant mb-4">Allow brands to use your content for paid ads (30 days).</p>
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-primary">+20%</span>
                <span className="text-xs uppercase tracking-widest text-outline">Of Total Fee</span>
              </div>
            </div>
            
            <div className="bg-surface-container-low p-6 rounded-xl border border-transparent hover:border-outline-variant/30 transition-all">
              <h4 className="font-bold text-on-surface mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">link</span>
                Link in Bio
              </h4>
              <p className="text-sm text-on-surface-variant mb-4">Dedicated link in your bio for 48 hours post-campaign.</p>
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-primary">+$50</span>
                <span className="text-xs uppercase tracking-widest text-outline">Flat Fee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Insights Sidebar */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-primary to-primary-light text-white p-8 rounded-xl shadow-xl">
            <span className="material-symbols-outlined text-4xl mb-4 text-white">tips_and_updates</span>
            <h3 className="text-xl font-bold mb-4 text-white">Pricing Strategy</h3>
            <ul className="space-y-4 text-sm opacity-90">
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-secondary-container shrink-0">check_circle</span>
                <p>In the <strong>Lifestyle</strong> niche, engagement rates drive 40% higher premiums than follower count.</p>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-secondary-container shrink-0">check_circle</span>
                <p>Bundling 2 Stories with 1 Reel typically increases conversion for brands by 22%.</p>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-secondary-container shrink-0">check_circle</span>
                <p>Brands are currently seeking multi-platform packages. Consider adding a TikTok upsell.</p>
              </li>
            </ul>
          </div>

          <div className="bg-surface-container-highest p-6 rounded-xl border border-outline-variant/10">
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider text-on-surface">Quick Preview</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm py-2 border-b border-outline-variant/20">
                <span className="text-on-surface-variant">Avg. Project Fee</span>
                <span className="font-bold text-primary">$0.00</span>
              </div>
              <div className="flex justify-between items-center text-sm py-2">
                <span className="text-on-surface-variant">Profile Health</span>
                <span className="flex items-center gap-1 text-secondary font-bold">
                  <span className="material-symbols-outlined text-xs">bolt</span>
                  Strong
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <footer className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-outline-variant/10">
        <div className="flex items-center gap-4">
          <button className="px-8 py-3 text-primary font-bold hover:bg-surface-container-low transition-colors rounded-lg outline-none">
            Save as Draft
          </button>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button className="w-full md:w-auto px-12 py-4 bg-gradient-to-br from-primary to-primary-light text-white font-bold rounded-lg shadow-lg active:scale-95 duration-200 outline-none">
            Go Live Now
          </button>
        </div>
      </footer>
    </>
  );
}
