import React from 'react';

export default function SocialsStep() {
  return (
    <>
      {/* Header Section */}
      <header className="mb-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-bold tracking-wider uppercase">Step 04</span>
          <span className="h-px w-12 bg-outline-variant/30"></span>
          <span className="text-sm text-outline font-medium">Identity &amp; Reach</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
          Connect Your <span className="text-primary italic">Digital Influence</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
          Sync your accounts to unlock automated reporting, verify your audience demographics, and receive premium campaign invitations based on real-time data.
        </p>
      </header>

      {/* Bento Grid Social Selection */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
        {/* Instagram (Connected State) */}
        <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-lowest p-8 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 border border-outline-variant/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex gap-6 items-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-3xl">camera_alt</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-on-surface mb-1">Instagram</h3>
                <p className="text-sm text-on-surface-variant">Profile: <span className="font-semibold text-primary">@elenajoy_studio</span></p>
                <div className="flex gap-4 mt-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-outline">Followers</span>
                    <span className="text-sm font-bold">142K</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-outline">Engagement</span>
                    <span className="text-sm font-bold">4.2%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-secondary/10 px-4 py-2 rounded-full">
              <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="text-secondary text-xs font-bold uppercase tracking-wider">Connected</span>
            </div>
          </div>
        </div>

        {/* Security Trust Module */}
        <div className="md:col-span-4 bg-gradient-to-br from-primary to-primary-light text-white p-8 rounded-xl flex flex-col justify-between shadow-sm">
          <span className="material-symbols-outlined text-3xl mb-4">lock</span>
          <div>
            <h4 className="text-lg font-bold mb-2">Vault Security</h4>
            <p className="text-sm text-white/80 leading-snug">We use encrypted API handshakes. We never see or store your social passwords.</p>
          </div>
        </div>

        {/* TikTok */}
        <div className="md:col-span-4 bg-surface-container-low p-8 rounded-xl transition-all duration-300 hover:bg-surface-container-high border border-transparent hover:border-outline-variant/30 text-center md:text-left">
          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white mb-6 mx-auto md:mx-0">
            <span className="material-symbols-outlined">music_note</span>
          </div>
          <h3 className="text-lg font-bold mb-2 text-on-surface">TikTok</h3>
          <p className="text-sm text-on-surface-variant mb-6">Connect for viral content tracking and short-form video metrics.</p>
          <button className="w-full py-3 px-4 rounded-lg bg-surface-container-lowest text-primary font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/5 transition-all outline-none">
            Connect <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* YouTube */}
        <div className="md:col-span-4 bg-surface-container-low p-8 rounded-xl transition-all duration-300 hover:bg-surface-container-high border border-transparent hover:border-outline-variant/30 text-center md:text-left">
          <div className="w-12 h-12 bg-[#FF0000] rounded-lg flex items-center justify-center text-white mb-6 mx-auto md:mx-0">
            <span className="material-symbols-outlined">play_circle</span>
          </div>
          <h3 className="text-lg font-bold mb-2 text-on-surface">YouTube</h3>
          <p className="text-sm text-on-surface-variant mb-6">Sync long-form data and audience retention statistics.</p>
          <button className="w-full py-3 px-4 rounded-lg bg-surface-container-lowest text-primary font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/5 transition-all outline-none">
            Connect <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* Twitter / X */}
        <div className="md:col-span-4 bg-surface-container-low p-8 rounded-xl transition-all duration-300 hover:bg-surface-container-high border border-transparent hover:border-outline-variant/30 text-center md:text-left">
          <div className="w-12 h-12 bg-[#0F1419] rounded-lg flex items-center justify-center text-white mb-6 mx-auto md:mx-0">
            <span className="material-symbols-outlined">close</span>
          </div>
          <h3 className="text-lg font-bold mb-2 text-on-surface">Twitter / X</h3>
          <p className="text-sm text-on-surface-variant mb-6">Verify your real-time authority and textual engagement.</p>
          <button className="w-full py-3 px-4 rounded-lg bg-surface-container-lowest text-primary font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/5 transition-all outline-none">
            Connect <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Transparency Card */}
      <div className="bg-surface-container-lowest p-1 border-0 rounded-2xl overflow-hidden shadow-sm shadow-blue-900/5 mb-12">
        <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-8 rounded-2xl gap-8 border border-outline-variant/10">
          <div className="relative w-24 h-24 flex-shrink-0">
            <img className="w-full h-full object-cover rounded-xl grayscale opacity-50" alt="Data Analytics" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd7hXfTwGZFuv8OqtoiKnvV9wCAW3cE42tdSPHTxLsrcgI1ogCFLsYJK70uQxGcgqqovaegt9N8dLiILcAmZVF89KF1NH5PgQFp3bqKm_N1JHLMYEHaJcRVeChkRAJ2ZnJHZU1ptCUv-6CeXWq3AFu8Id7OHtAHC6lpHsJCyYTE37zmeAgLKGbO5lrBvSqQMLWCWPzUORgn4CPoU6BnYrONzCLCnBXJYL0FIVaEkO6EVNEqyGLYTD1JOgWaUiCi4hfjrw1MXWEMSKN" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-4xl">monitoring</span>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-on-surface mb-2">Why we need this data</h4>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Connecting your social accounts allows our proprietary AI to generate <span className="text-on-surface font-semibold">Editorial Quality Scores</span>. Brands look for consistency, authentic engagement, and audience alignment. You maintain full control over which stats are visible on your public portfolio.
            </p>
          </div>
          <div className="flex flex-col gap-3 min-w-[160px] mx-auto md:mx-0">
            <div className="flex items-center gap-2 text-xs font-bold text-secondary">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span> Verified Reach
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-secondary">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span> Auto-Reporting
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-secondary">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span> Priority Access
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Actions */}
      <footer className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-outline-variant/10">
        <button className="flex items-center gap-2 text-outline hover:text-on-surface font-semibold transition-colors order-2 sm:order-1 outline-none">
          <span className="material-symbols-outlined">keyboard_backspace</span>
          Back to Profile
        </button>
        <div className="flex gap-4 w-full sm:w-auto order-1 sm:order-2">
          <button className="flex-1 sm:flex-none px-8 py-4 bg-surface-container-high text-on-surface-variant font-bold rounded-xl hover:bg-surface-container-highest transition-colors outline-none">
            Skip for now
          </button>
          <button className="flex-1 sm:flex-none px-12 py-4 bg-gradient-to-br from-primary to-primary-light text-white font-extrabold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all outline-none">
            Complete Connection
          </button>
        </div>
      </footer>
    </>
  );
}
