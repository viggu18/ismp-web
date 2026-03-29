import React from 'react';
import { TrendingUp, ArrowUp, Camera, Zap, BarChart2, SquarePen } from 'lucide-react';

export default function InfluencerDashboardPage() {
  return (
    <div className="p-12 space-y-12">
      {/* Welcome Header & Quick Summary */}
      <section className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-2xl">
          <span className="font-label uppercase tracking-widest text-xs font-bold text-secondary mb-3 block">Perspective &amp; Growth</span>
          <h1 className="text-5xl font-extrabold tracking-tighter text-on-surface leading-tight">
            Welcome back, <br/>Sasha Vantage
          </h1>
          <p className="mt-4 text-on-surface-variant text-lg max-w-lg">
            Your editorial reach grew by 12% this week. You have 3 campaigns awaiting draft approval and 2 new partnership requests.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary min-w-[180px]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Active Campaigns</p>
            <p className="text-3xl font-extrabold text-primary">08</p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-secondary min-w-[180px]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Pending Actions</p>
            <p className="text-3xl font-extrabold text-secondary">03</p>
          </div>
        </div>
      </section>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-12 gap-8">
        {/* Earnings Overview Card */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-on-surface">Earnings Overview</h3>
              <p className="text-sm text-slate-500">Revenue performance last 30 days</p>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg">
              <span className="text-sm font-bold text-primary">$12,450.00</span>
              <TrendingUp size={14} className="text-secondary" />
            </div>
          </div>
          {/* Bar Chart */}
          <div className="h-64 w-full relative mt-4 flex items-end justify-between px-2">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
              <div className="border-t border-slate-300 w-full"></div>
              <div className="border-t border-slate-300 w-full"></div>
              <div className="border-t border-slate-300 w-full"></div>
              <div className="border-t border-slate-300 w-full"></div>
            </div>
            {[40, 55, 45, 75, 60, 85, 70, 95, 65, 50].map((h, i) => (
              <div key={i} className={`w-8 rounded-t-sm transition-all hover:opacity-80 ${i === 7 ? 'bg-primary shadow-lg shadow-primary/20' : 'bg-primary/10 hover:bg-primary/30'}`} style={{ height: `${h}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
            <span>Day 01</span>
            <span>Day 10</span>
            <span>Day 20</span>
            <span>Day 30</span>
          </div>
        </div>

        {/* Quick Stats Bento Box */}
        <div className="col-span-12 lg:col-span-4 grid grid-cols-1 gap-6">
          <div className="bg-gradient-to-br from-primary to-primary-light p-8 rounded-xl text-white relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">Instagram Reach</p>
              <h4 className="text-4xl font-extrabold tracking-tighter">1.2M</h4>
              <div className="mt-4 flex items-center gap-2 text-xs font-medium bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-md">
                <ArrowUp size={14} />
                8.4% this month
              </div>
            </div>
            <Camera size={120} className="absolute -bottom-4 -right-4 opacity-10 group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="bg-secondary p-8 rounded-xl text-white relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">Engagement Rate</p>
              <h4 className="text-4xl font-extrabold tracking-tighter">4.82%</h4>
              <div className="mt-4 flex items-center gap-2 text-xs font-medium bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-md">
                <Zap size={14} />
                Top 5% in Niche
              </div>
            </div>
            <BarChart2 size={120} className="absolute -bottom-4 -right-4 opacity-10 group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>

        {/* Active Campaigns Section */}
        <div className="col-span-12 lg:col-span-9 space-y-6">
          <div className="flex justify-between items-end">
            <h3 className="text-2xl font-bold tracking-tight text-on-surface">Active Campaigns</h3>
            <a className="text-primary font-bold text-sm hover:underline" href="#">View All Campaigns</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { brand: 'Luxe Fragrances', abbr: 'LUXE', name: "Spring Editorial '24", status: 'Negotiating', statusClass: 'bg-primary-soft text-primary', progress: 33 },
              { brand: 'Modern Home', abbr: 'MDRN', name: 'Minimalist Living Series', status: 'Draft Submitted', statusClass: 'bg-surface-container-high text-on-surface-variant', progress: 66 },
            ].map((c, i) => (
              <div key={i} className="bg-surface-container-lowest p-6 rounded-xl border border-slate-100/50 hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-primary italic text-sm">{c.abbr}</div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{c.brand}</p>
                      <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{c.name}</h4>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${c.statusClass}`}>{c.status}</span>
                </div>
                <div className="space-y-4">
                  <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full transition-all" style={{ width: `${c.progress}%` }}></div>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                    <span>Contract</span>
                    <span>Production</span>
                    <span>Launch</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Messages Sidebar */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-surface-container-low rounded-xl p-8 sticky top-24">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-on-surface">Recent Messages</h3>
              <button className="text-primary outline-none"><SquarePen size={18} /></button>
            </div>
            <div className="space-y-6">
              {[
                { name: 'Marcus @ Nike', time: '2m', preview: 'The latest assets are ready for review...', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChz1X-6gynCf7a3gluACbJ-K4FH-w9je8F388ps2d_SqzSeVDEcSRIeWT1tIRlRHwmuqWUrG40EFiLpvlRIZUPf3AxKT8wNKUpeLHLmRAoVaoMfjGiZ-tlPVUiIAegyal54Yu5vBc3ewPRcMgKxkVII57ai2f60yRs2BOALIFI2gilt_EayAiSrRRjXVhC1xHL9wvWeSy74lAoDVB_7cjUrvZypT3rUfIDX8PbbyxVRdJ0SsvnAVDL1zIFviWA92OBnll7LYTug-uj' },
                { name: 'Elena Vance', time: '1h', preview: 'Loved the initial concept sketch!', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAWUMscnHQHz3RsoxdMQB0Cwr_qC6gxf78LF58eg5N2i3pRMovAlb5BaJjo5bq6H4ghncFgWy3IupqnQIjtw13vqtXwk-W9tmeeRVJz5ietH1sBvGMMovuVVWihelFLyjZqxgDa2bYJn4uSrOb0a9WgnDd8ZR4yqiDRF9QJGBjZyocsnW6wwEDMFqTCZxu5OaE18H3jVIFVl7-f3Aoy_9JFINPtDUBgPRuPVbdJQCGUo3l9K5E_-Jx-HSLBBDLYZp6QJ823oQAPlWN' },
              ].map((msg, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className="relative">
                    <img alt={msg.name} className="w-10 h-10 rounded-full object-cover" src={msg.src} />
                    {i === 0 && <span className="absolute bottom-0 right-0 w-3 h-3 bg-secondary border-2 border-white rounded-full"></span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <p className="font-bold text-sm truncate text-on-surface">{msg.name}</p>
                      <span className="text-[10px] text-slate-400">{msg.time}</span>
                    </div>
                    <p className="text-xs text-slate-500 truncate">{msg.preview}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-xs">A</div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <p className="font-bold text-sm truncate text-on-surface">Apple Music</p>
                    <span className="text-[10px] text-slate-400">5h</span>
                  </div>
                  <p className="text-xs text-slate-500 truncate">Contract signed. Let&apos;s start!</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-8 py-3 text-xs font-bold uppercase tracking-widest text-slate-400 border border-slate-200 rounded-lg hover:bg-white transition-colors">
              Open Messenger
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-12 border-t border-slate-100 flex justify-between items-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
        <div className="flex gap-8">
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-primary transition-colors" href="#">Brand Assets</a>
        </div>
        <p>© 2024 Vantage Core Editorial Platform</p>
      </footer>
    </div>
  );
}
