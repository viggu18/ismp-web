import React from 'react';

export default function AccountSetupStep() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Editorial Value Proposition */}
        <div className="lg:col-span-7">
          <span className="font-label text-secondary uppercase tracking-[0.2em] text-xs font-bold block mb-4">Step 01 — Identity</span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-on-surface tracking-tight leading-[1.1] mb-8">
            Join the <span className="text-primary italic">Elite</span> Creator Network.
          </h1>

          <div className="space-y-8 relative">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 flex-shrink-0 bg-secondary-container rounded-xl flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface mb-1">Curated Marketplace</h3>
                <p className="text-on-surface-variant text-md leading-relaxed">Connect with high-tier brands specifically looking for professional editorial talent.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 flex-shrink-0 bg-primary-soft rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface mb-1">Advanced Analytics</h3>
                <p className="text-on-surface-variant text-md leading-relaxed">Deep-dive into your audience insights with our proprietary data engine.</p>
              </div>
            </div>
          </div>

          {/* Influencer Overlap Visual (Editorial Element) */}
          <div className="mt-16 relative hidden lg:block">
            <div className="absolute -top-12 -left-6 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl rotate-[-3deg] z-10">
              <img className="w-full h-full object-cover" alt="Professional Influencer Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV9KAJAXuZZPiq5pd_X0rQ78G9byV6yoAL_ShW_VZCVBEiBHvgT_XrbzIa0yb_gxMYbzRkO4Fn0cFF8LomyMFf3iUg1tA0uDFpPDfsD8dDTcJ0oaLtcmj6ATwUZ5Da7HVpadRGUMDzSVt-nsXR2kqEaQantbA3MOYNHP2SfmeChr9gnKfzLM3J3-ELgZEY1lXesYtMbUwl9jWIIpwh_bJhRYPuQuQ9Xj6fQ3rs1gbY2B0ETgYe-xhMg0dDEyihToaFhNOOeh2I-jKg" />
            </div>
            <div className="ml-40 w-80 h-48 bg-surface-container-low rounded-2xl p-8 flex flex-col justify-center border-l-4 border-primary">
              <p className="text-primary font-headline italic text-lg mb-2">&quot;The only platform that treats content like art.&quot;</p>
              <span className="font-label uppercase tracking-widest text-[10px] text-slate-500">— Sophia Chen, Lifestyle Lead</span>
            </div>
          </div>
        </div>

        {/* Right Column: Focused Registration Card */}
        <div className="lg:col-span-5">
          <div className="bg-surface-container-lowest rounded-[2rem] p-8 lg:p-10 shadow-sm border border-outline-variant/15 relative">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-on-surface">Secure Your Entry</h2>
              <p className="text-on-surface-variant text-sm mt-2">Enter your credentials to begin your professional journey.</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 ml-1">Email or Phone Number</label>
                <div className="relative group">
                  <input className="w-full px-5 py-4 bg-surface-container-high rounded-xl text-on-surface placeholder:text-outline border-none outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-200" placeholder="name@domain.com or +1 (555) 000" type="text" />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-outline">
                    <span className="material-symbols-outlined">contact_mail</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 px-1">
                <input className="mt-1 rounded text-primary focus:ring-primary h-4 w-4" id="terms" type="checkbox" />
                <label className="text-xs text-on-surface-variant leading-relaxed" htmlFor="terms">
                  I agree to the <span className="text-primary font-semibold">Privacy Policy</span> and <span className="text-primary font-semibold">Editorial Guidelines</span> of the network.
                </label>
              </div>

              <button className="bg-gradient-to-br from-primary to-primary-light w-full py-5 rounded-xl text-white font-bold text-lg shadow-lg shadow-primary/20 active:scale-95 duration-200 flex items-center justify-center gap-3" type="button">
                Initialize Account
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-outline-variant/10 flex flex-col items-center gap-4">
              <p className="text-[10px] font-label uppercase tracking-[0.2em] text-outline">or authenticate with</p>
              <div className="flex gap-4 w-full">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-colors text-on-surface text-sm font-semibold">
                  <span className="material-symbols-outlined text-lg">account_circle</span>
                  Google
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-colors text-on-surface text-sm font-semibold">
                  <span className="material-symbols-outlined text-lg">id_card</span>
                  Apple
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Metadata */}
          <div className="mt-8 flex justify-center gap-8 px-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Enterprise Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
              <span className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Encrypted Data</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
