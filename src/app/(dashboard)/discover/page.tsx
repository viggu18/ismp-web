import React from 'react';

export default function DiscoverPage() {
  return (
    <div className="pt-8 px-8 pb-12 max-w-7xl mx-auto">
      {/* Hero Header Section (Intentional Asymmetry) */}
      <section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <span className="text-sm uppercase tracking-widest text-primary font-bold mb-3 block">Discover Talent</span>
          <h2 className="text-5xl font-extrabold tracking-tighter text-on-surface leading-tight">
            Curation Over <br />
            <span className="text-slate-400">Competition.</span>
          </h2>
          <p className="mt-6 text-lg text-on-surface-variant leading-relaxed opacity-80">
            Connect with 24,000+ premium creators vetted for authenticity and editorial alignment. Filter by niche, reach, and performance metrics.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-6 py-3 bg-surface-container-high rounded-xl font-bold text-sm hover:bg-surface-container-highest transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">tune</span>
            All Filters
          </button>
          <button className="px-6 py-3 bg-secondary text-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            Quick Match
          </button>
        </div>
      </section>

      {/* Filter Chips Section */}
      <section className="mb-8 flex flex-wrap gap-3">
        <div className="px-5 py-2 bg-primary text-white rounded-full text-sm font-semibold cursor-pointer">All Categories</div>
        <div className="px-5 py-2 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer">Lifestyle</div>
        <div className="px-5 py-2 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer">Tech & Gadgets</div>
        <div className="px-5 py-2 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer">Luxury Travel</div>
        <div className="px-5 py-2 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer">High Fashion</div>
        <div className="px-5 py-2 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer">Wellness</div>
        <button className="ml-auto text-primary font-bold text-sm flex items-center gap-1">
          Reset
          <span className="material-symbols-outlined text-sm">restart_alt</span>
        </button>
      </section>

      {/* Influencer Discovery Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col">
          <div className="aspect-[4/5] relative overflow-hidden">
            <img alt="Influencer Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPx80hWAvAQ5as9fl0o4jzVNdRrSjKRxnEnZf-7OwsoCAa_ckhKOyfNFPGwuqxEndXBm_2GxUSPKOq6BcoHdUc6GqvPX6DOoVDKP6_RGIXRRtsAJoPCs0HWtCXLswQj-wrtRiwxZ4oJEnJ5JFRkH4lWdjFes6MCE7926lqjOjXyHRpdqoP3XFttnZWAdq7szYdeYJ4NHg4IN5S06BuU1b4nPQYFuguSCGxnfH8F_dXg6DJZcAZ_YGMPO5bbt-OCT13C-xvjXTCTDfe" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider rounded-full text-slate-900">Lifestyle</span>
              <span className="px-3 py-1 bg-primary/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider rounded-full text-white">Elite</span>
            </div>
            <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full flex items-center justify-center text-white transition-colors">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-on-surface">Amara Vance</h3>
                <p className="text-sm text-slate-500">@amarav_creative</p>
              </div>
              <div className="flex items-center gap-1 bg-primary-soft/30 px-2 py-1 rounded text-primary font-bold text-xs">
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                4.9
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-surface-container-low p-3 rounded-lg">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Followers</p>
                <p className="text-base font-black text-primary">242K</p>
              </div>
              <div className="bg-surface-container-low p-3 rounded-lg">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Eng. Rate</p>
                <p className="text-base font-black text-success">4.2%</p>
              </div>
            </div>
            <div className="mt-auto flex gap-2">
              <button className="flex-1 py-3 bg-primary text-white text-xs font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all">Invite to Campaign</button>
              <button className="px-3 py-3 bg-surface-container-high text-on-surface text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors">
                <span className="material-symbols-outlined text-lg">visibility</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col">
          <div className="aspect-[4/5] relative overflow-hidden">
            <img alt="Influencer Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCykNRghjlQyeddqI0NcLlJBVVWTL6XS-fNJhPQ72a3nu2SLesmQIR57J_57NBlA17djL9ddIGJu4gVmu9g8DUu5QorbG9B0okb8R0YvKQFE8TNCIXUdMp4igvAUF7jx2qZdAGj2HoYQOEW2dBllTv5tEfkiafFCsQZZDL1D1XFqCzHJqSer_T6z5zJOfu_f6p3xJGWJ9Z4nYVxDeFF_ddVo9bkfrvfsTD5BB-555g_D_2X79iI9Wbm6cUil7t_s7dX2BuVg8P-r0Ys" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider rounded-full text-slate-900">Travel</span>
            </div>
            <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full flex items-center justify-center text-white transition-colors">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-on-surface">Julian Rossi</h3>
                <p className="text-sm text-slate-500">@jrossi_adventures</p>
              </div>
              <div className="flex items-center gap-1 bg-primary-soft/30 px-2 py-1 rounded text-primary font-bold text-xs">
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                4.8
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-surface-container-low p-3 rounded-lg">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Followers</p>
                <p className="text-base font-black text-primary">1.2M</p>
              </div>
              <div className="bg-surface-container-low p-3 rounded-lg">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Eng. Rate</p>
                <p className="text-base font-black text-success">2.8%</p>
              </div>
            </div>
            <div className="mt-auto flex gap-2">
              <button className="flex-1 py-3 bg-primary text-white text-xs font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all">Invite to Campaign</button>
              <button className="px-3 py-3 bg-surface-container-high text-on-surface text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors">
                <span className="material-symbols-outlined text-lg">visibility</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col">
          <div className="aspect-[4/5] relative overflow-hidden">
            <img alt="Influencer Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGDFcxFQc6Ga1RKrmTXGUp-siiLfHld_iF226xF5kiMc905_6eLURHr1ks8JG7SPpUOrw2WpPH--6y_OZ0oBq8lxoK3ecaKqxNK_BPaeqdc_k08IMv5LO9kEfPZArCRiuzpFxhGj74-YVdbDINMYKCo6YBAXQavX4fqjGd4rOpbS3anYlNy4_L7o7aPrFQBWXBjlv1qvpXao6MT6mX1lVDM_tvsLywbLYqMu-D_GBGZa4ZvXG86ZVHbYbLpz0onqi4SauM-pfBq9X4" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider rounded-full text-slate-900">Tech</span>
            </div>
            <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full flex items-center justify-center text-white transition-colors">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-on-surface">Lana Kim</h3>
                <p className="text-sm text-slate-500">@tech_with_lana</p>
              </div>
              <div className="flex items-center gap-1 bg-primary-soft/30 px-2 py-1 rounded text-primary font-bold text-xs">
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                5.0
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-surface-container-low p-3 rounded-lg">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Followers</p>
                <p className="text-base font-black text-primary">85K</p>
              </div>
              <div className="bg-surface-container-low p-3 rounded-lg">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Eng. Rate</p>
                <p className="text-base font-black text-success">7.1%</p>
              </div>
            </div>
            <div className="mt-auto flex gap-2">
              <button className="flex-1 py-3 bg-primary text-white text-xs font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all">Invite to Campaign</button>
              <button className="px-3 py-3 bg-surface-container-high text-on-surface text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors">
                <span className="material-symbols-outlined text-lg">visibility</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col">
          <div className="aspect-[4/5] relative overflow-hidden">
            <img alt="Influencer Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCsfwiVENNJxtkVFNwZGwvG8gFMVHir05q6FNXH0MP6fMlnwYvEKQQ2h-a2FMBN6W_Iw9S_uDKahTtOwQQAJOcvhCSxV5eAkHs8d6vx1r0smgMnZ3vAo-6cxijQ1uD7aDgek-J5Yl2_WaZyZIG5tDlImWZjOtrKe-P96kXAiPi7TB4ssx_JLuBuw_L_gpIB2t95cHTu1mxpqbmIGTNuwnsyvyHz48xL-XqZ-cvrBt8FshNW6YQ_-ZMU_DjSMmN_E9Iepqc8xTI2cBZ" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider rounded-full text-slate-900">Fashion</span>
            </div>
            <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full flex items-center justify-center text-white transition-colors">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-on-surface">Elena S.</h3>
                <p className="text-sm text-slate-500">@elena_editorial</p>
              </div>
              <div className="flex items-center gap-1 bg-primary-soft/30 px-2 py-1 rounded text-primary font-bold text-xs">
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                4.7
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-surface-container-low p-3 rounded-lg">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Followers</p>
                <p className="text-base font-black text-primary">512K</p>
              </div>
              <div className="bg-surface-container-low p-3 rounded-lg">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">Eng. Rate</p>
                <p className="text-base font-black text-success">3.5%</p>
              </div>
            </div>
            <div className="mt-auto flex gap-2">
              <button className="flex-1 py-3 bg-primary text-white text-xs font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all">Invite to Campaign</button>
              <button className="px-3 py-3 bg-surface-container-high text-on-surface text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors">
                <span className="material-symbols-outlined text-lg">visibility</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Insight Bento Grid */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-gradient-to-br from-primary to-primaryLight text-white p-8 rounded-2xl flex flex-col justify-between min-h-[300px] relative overflow-hidden shadow-lg">
          <div className="relative z-10">
            <h4 className="text-3xl font-black tracking-tighter mb-4">Campaign Optimization</h4>
            <p className="max-w-md opacity-80 text-lg leading-relaxed">Our AI analyzes creator history to predict campaign ROI. Review high-match creators that align perfectly with your brand's editorial tone.</p>
          </div>
          <div className="relative z-10 flex items-center gap-4">
            <button className="px-8 py-3 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-colors">View Match Reports</button>
            <span className="text-sm font-semibold opacity-70">Updated 2m ago</span>
          </div>
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg font-bold text-on-surface">Shortlist</h4>
            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">12 Active</span>
          </div>
          <div className="flex-1 space-y-4 custom-scrollbar overflow-y-auto max-h-48 pr-2">
            {[
              { name: 'Amara Vance', status: 'Ready to invite', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmhy6ZJP1J0V_oPj3BxjCCep7CwSZSrbh6HLNWy_y_xNFr_bnB3XJ6Xpqt1iBQvV57cRC_ZnVK9XOq_rbFGj5v5QSENadExXnwcagkCsGAlYfm3qYl2jc1tCphkJoKGX2n2WoxZbXanS76Kea03LStaQRQAdITr5FrYLyhl8QaSA97UNhnwHTzY1i2r9Gqmjs_a5swv0g6se9bXOufVdOgP_u-I9plTuIks6I3cmN2PObCM4_QsGSeRAd2jiNMj0-YyqASKvQHdS2Y' },
              { name: 'Marcus Thorne', status: 'Ready to invite', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX3JVs7ml6l4exKoxFUedOCmu4iuIJERPlZNIKOk5mWE7Nq94hj4Ektgc71QCI2tDecoNMcveUvoGdh7AM72IBgWCeyQoU__wTOHi0xlmZn_dw8Fkv1jGBgmpZGoPHs8uVpQvV5kzrOO5AAX9H-AD34rBKvns29Fp9A5swKZv3l2_grJJXHj6_Q5TlXzXEG6aryGWX1ZXlooAWSKm-iRBmQerVtMleZjuRAjQV1Vv3pylzMk3jRluKpQX-zko9sWH0-3HA4XOjPZ1e' },
              { name: 'Sarah Jenkins', status: 'Ready to invite', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxlsR9Nk6Xa9DF5P940dIlTnw8GokCWQdM_02xsN-tBUVThQt8UxsfMwyuNPPLF_LpLiRLHVIl1uCQmFAb8Cuflikx-tQ8nvxAEF2l4NrMNTh2-yEBHIkkHkOkdcNAO9JyOBBgpEdsMYRb2UnkoEXYem9CP3jskVU53WtWD8-MlYxIyxLITHEBkYqdJrKRPFLYhxPHlo63NAZIPGKlFPiTUv8x5YQI17C-QH7YxccGWutc__2RqOHLqaLXqikwJROCDrQKP0uZoxz1' }
            ].map((shortlist, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                  <img alt={shortlist.name} className="w-full h-full object-cover" src={shortlist.img} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold leading-none">{shortlist.name}</p>
                  <p className="text-[10px] text-slate-400">{shortlist.status}</p>
                </div>
                <span className="material-symbols-outlined text-slate-300 cursor-pointer">close</span>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-3 bg-surface-container-high text-on-surface font-bold text-xs rounded-xl hover:bg-surface-container-highest transition-colors">Bulk Action</button>
        </div>
      </section>
    </div>
  );
}
