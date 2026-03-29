import React from 'react';
import {
  TrendingUp, Clock, ArrowUpRight, Star,
  Filter, Download, Wallet, Building2,
  FileText, BarChart3, AlertTriangle
} from 'lucide-react';

export default function FinancialReportsPage() {
  return (
    <div className="p-8 pb-20 max-w-screen-xl mx-auto">
      {/* Header */}
      <section className="mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Financial Reports</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl">A comprehensive overview of your digital equity, campaign settlements, and multi-platform revenue streams.</p>
      </section>

      {/* Summary Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Total Lifetime Earnings', value: '$142,850.00', sub: '+12% from last year', LucideIcon: TrendingUp, subColor: 'text-secondary', borderColor: 'border-primary' },
          { label: 'Pending Payouts', value: '$8,420.00', sub: 'Next settlement in 4 days', LucideIcon: Clock, subColor: 'text-on-surface-variant', borderColor: 'border-tertiary' },
          { label: 'Current Month Revenue', value: '$12,140.00', sub: '$2.4k more than July', LucideIcon: ArrowUpRight, subColor: 'text-secondary', borderColor: 'border-secondary' },
          { label: 'Average Deal Value', value: '$3,200.00', sub: 'Top 5% of creator niche', LucideIcon: Star, subColor: 'text-on-surface-variant', borderColor: 'border-primary-light' },
        ].map(({ label, value, sub, LucideIcon, subColor, borderColor }, i) => (
          <div key={i} className={`bg-surface-container-lowest p-6 rounded-xl shadow-sm border-l-4 ${borderColor}`}>
            <p className="text-xs uppercase tracking-widest text-outline mb-1 font-bold">{label}</p>
            <h3 className="text-3xl font-bold text-on-surface">{value}</h3>
            <div className={`mt-4 flex items-center text-sm font-semibold gap-1 ${subColor}`}>
              <LucideIcon size={14} />
              {sub}
            </div>
          </div>
        ))}
      </div>

      {/* Chart & Platform Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h4 className="text-xl font-bold text-on-surface">Revenue Growth</h4>
              <p className="text-sm text-on-surface-variant">Monthly earnings trajectory over 12 months</p>
            </div>
            <select className="bg-surface-container-low border-none rounded-lg text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none px-3 py-2">
              <option>Last 12 Months</option>
              <option>Last 6 Months</option>
            </select>
          </div>
          <div className="h-64 w-full flex items-end gap-2">
            {[40, 55, 45, 70, 65, 85, 75, 90, 80, 95, 88, 92].map((h, i) => (
              <div key={i} className={`flex-1 rounded-t-lg transition-all hover:opacity-80 ${i === 9 ? 'bg-primary' : 'bg-surface-container-highest hover:bg-primary/30'}`} style={{ height: `${h}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] text-outline uppercase tracking-widest font-bold">
            <span>Aug &apos;23</span><span>Dec &apos;23</span><span>Apr &apos;24</span><span>Aug &apos;24</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary-light text-white p-8 rounded-xl shadow-lg flex flex-col justify-between">
          <div>
            <h4 className="text-xl font-bold mb-1 text-white">Source Mix</h4>
            <p className="text-white/70 text-sm mb-8">Platform contribution breakdown</p>
            <div className="space-y-6">
              {[{ name: 'Instagram', pct: '45%', color: 'bg-white' }, { name: 'TikTok', pct: '32%', color: 'bg-white/50' }, { name: 'YouTube', pct: '23%', color: 'bg-blue-300' }].map((p, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${p.color}`}></div>
                    <span className="font-medium">{p.name}</span>
                  </div>
                  <span className="font-bold">{p.pct}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 p-4 bg-white/10 rounded-xl">
            <p className="text-xs opacity-80 mb-1 italic">Pro Tip</p>
            <p className="text-sm font-medium">Your YouTube revenue grew by 15% this quarter. Consider doubling down on long-form content.</p>
          </div>
        </div>
      </div>

      {/* Transaction History Table */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h4 className="text-2xl font-bold text-on-surface">Recent Settlements</h4>
          <div className="flex items-center gap-2">
            <button className="bg-surface-container-high px-4 py-2 rounded-lg text-sm font-medium hover:bg-surface-container-highest transition-colors flex items-center gap-2 outline-none">
              <Filter size={14} /> Filter
            </button>
            <button className="bg-surface-container-high px-4 py-2 rounded-lg text-sm font-medium hover:bg-surface-container-highest transition-colors flex items-center gap-2 outline-none">
              <Download size={14} /> Export CSV
            </button>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low">
                {['Campaign Name', 'Brand', 'Date', 'Status', 'Amount'].map((h, i) => (
                  <th key={i} className={`px-6 py-4 text-xs uppercase tracking-wider text-outline font-bold ${i === 4 ? 'text-right' : ''}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { name: 'Autumn Collection Launch', brand: 'Luxe Vogue', abbr: 'LV', date: 'Aug 24, 2024', status: 'Completed', statusClass: 'bg-secondary-container text-on-secondary-fixed-variant', amount: '$4,500.00' },
                { name: 'Summer Hydration Series', brand: 'AquaVita', abbr: 'AQ', date: 'Aug 20, 2024', status: 'Processing', statusClass: 'bg-tertiary-fixed text-on-tertiary-fixed-variant', amount: '$2,800.00' },
                { name: 'Tech Unboxing Reel', brand: 'Nexus Gear', abbr: 'NX', date: 'Aug 15, 2024', status: 'In Escrow', statusClass: 'bg-surface-container-highest text-on-surface-variant', amount: '$1,200.00' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-5 font-semibold text-on-surface">{row.name}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center font-bold text-xs text-primary">{row.abbr}</div>
                      <span className="font-medium text-on-surface">{row.brand}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-on-surface-variant text-sm">{row.date}</td>
                  <td className="px-6 py-5"><span className={`px-3 py-1 rounded-full text-xs font-bold ${row.statusClass}`}>{row.status}</span></td>
                  <td className="px-6 py-5 text-right font-bold text-on-surface">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Payout & Compliance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-surface-container-low p-8 rounded-xl border border-transparent hover:border-outline-variant/30 transition-all">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h4 className="text-xl font-bold text-on-surface">Payout Management</h4>
              <p className="text-sm text-on-surface-variant">Control your funds and withdrawal methods</p>
            </div>
            <Wallet size={32} className="text-primary" />
          </div>
          <div className="space-y-4 mb-8">
            <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between shadow-sm border border-outline-variant/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center">
                  <Building2 size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm text-on-surface">Chase Bank •••• 8821</p>
                  <p className="text-xs text-outline">Primary Payout Method</p>
                </div>
              </div>
              <button className="text-primary font-bold text-xs uppercase tracking-widest outline-none">Edit</button>
            </div>
            <button className="w-full py-4 border-2 border-dashed border-outline-variant rounded-xl text-outline text-sm font-bold hover:bg-surface-container-high transition-all outline-none">
              + Add New Payout Method
            </button>
          </div>
          <button className="w-full bg-gradient-to-br from-primary to-primary-light text-white py-4 rounded-xl font-bold text-lg shadow-md active:scale-[0.98] transition-all outline-none">
            Request Payout ($8,420.00)
          </button>
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between border border-outline-variant/10">
          <div>
            <h4 className="text-xl font-bold text-on-surface mb-2">Tax &amp; Compliance Center</h4>
            <p className="text-sm text-on-surface-variant mb-6">Stay ahead of fiscal requirements with automated reporting.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { LucideIcon: FileText, label: '1099-NEC', desc: 'Annual non-employee compensation report for 2023.', format: 'Download PDF' },
                { LucideIcon: BarChart3, label: 'Annual Summary', desc: 'Year-over-year earnings and deductible expenses.', format: 'Download XLSX' },
              ].map(({ LucideIcon, label, desc, format }, i) => (
                <div key={i} className="p-4 bg-surface-container-low rounded-xl group hover:bg-surface-container-high transition-all cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <LucideIcon size={18} className="text-secondary" />
                    <span className="font-bold text-sm text-on-surface">{label}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs text-primary font-bold">
                    <Download size={12} /> {format}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between p-4 bg-error-container/20 rounded-xl">
            <div className="flex items-center gap-3">
              <AlertTriangle size={18} className="text-error" />
              <p className="text-xs font-semibold text-on-error-container">W-9 Information expires in 12 days</p>
            </div>
            <button className="text-xs font-bold text-error uppercase tracking-widest underline outline-none">Update Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
