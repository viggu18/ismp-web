import React from 'react';
import { Calendar, ArrowRight, Venus, Mars } from 'lucide-react';

const contentCards = [
  { handle: '@style_maven', campaign: 'Luxe Summer Collection', reach: '142K', engage: '8.4%', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVUtqjv_vkLzuuiuB8Zai3Uq_rKFAZwdi7K2tM6aCd-3p3gpxXX_m7cZf9jKDnxCw3GTQ94J8N0NnQkqlxFW8X_SSgvO_t7u7GavH4ROesPHm7OgRjVDuZMBWPwZEYQl81REA5UZ5LQYZcCAGySu03SNUUO2LO_5fpgJ1INR-BxjzFHXlGazAf4rn-69IXYGcRWqg4Lq5eVFnueS0pIOUWuK71imVJ1pORpW75JnCrsscjxvChWM6xV1hLlxAAd73IzyW12EHC4JGo', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuooiV4fXSlnZnZ3BNZIFooUE9CUn8Yp5KQgq-JBs5J5ztUkGLYQs0lso4m4eAderlpWJcVJAWkaes7-mt_DOpfv5s90m2HnmveqoJdm3iYHpu3AnZJQSHD0kF2EJofE1r8ty-UjbLH3fitc4qRqe0ZAeJ5BXwbBISqCe967XtYPbBlPnzqjvZLDw37Spv7whziOTN1wibPr9X7b409293BbnWa8UT7uw3X_snacUClMXvBOXTWT1PoRXvJXN10xM35ioShDjTtVs0' },
  { handle: '@skincare_guru', campaign: 'Morning Rituals', reach: '98K', engage: '12.1%', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARgFLopYdb3h4ARXEn2eT-8UV6SewjmUghN0NvJFyKwaQzmabnkU23Ihrsss7KH60sOl16ItmhbcEZBER18bTFhw9KFYzYuFbg6YwX5-MnElR_SbuchFeWqtwwxKMwYq0-0pCNNSiVZxU_VACc1sAi-lRf4kZ681AXFHuQQwkOvDXKr0fGVK5rqmAWytQZ3nWvzrPN6_NJOdBaz2FoOWE_xsKOq9CPGUCg7tvHh0JZf92WnFydOxYqk0xQz5t4QNHyFy9iRLCosdO3', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZuf7A-pbb7F7q4mReCUEYUO5pyGyRg7_EgLEw_1FeBtnap2HDc8jY-UmxqNgbHkxtL2vKm-C3h-mpUN6BFGXlTwDqrzY7ac6uvyTpBKVj1f45oUykRveKDwPSgEgigo12BB4JLRmJ15E1wW2dZPCxX1LLvwTn9ujfsj236xH8HVZwbtGFcZCoBIwHDd9dnrknEHH1bPUKz8xrej1k-6KSD3_O3b6szvzt8cTB0qjvaF6WNtqLABAK84rSfeW23xzYZax0knLAlhMl' },
  { handle: '@tech_insider', campaign: 'Smart Home Series', reach: '215K', engage: '6.7%', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiV93SsLQ7S37cKmfp8ufDux8eEwJ7soQdRkVbQ4tQjNcYzz28ZW52mqeN00Zz5OpNBrhNPr5hc2P0F9Nsvan8uVDen5AYaRx9LXJ04d7f-hFWpz1TK5UrKvcPfQutcoXxGLy_oVkZhzjBqotmL5E9jEAb4J51470_ztl4uy-eOO9989ISyQRNyHZOufa2Op_P8WSCP5NxpqKp7RsEI13CW8kpmMjAKzQAVCQqx5aJ0_YjzoBeBDFeHUvcD8a4DvIRY3gUJjbUO27s', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIyypBNC8OfWUGnx9fXq3EFg1299hTGzJQiYDasiLm7ig4rfW8aPMqr5cjxSdAA7LBqnfCmuQ8JQmv4f3rj7IjOiB1moH8C90fxaPJd_8ASiwbT3s1NJjNOvtN4FxInLbErgk9iWUVGXZMHFjd2GazZmf8W3hVk-nrzEX4ZN6g4zDGL3jW3ZWfCjjYCaEXOzriy-rEhXlQ0VVsWi-YHZJAjwEcX7k9v7IzP6egti71qI9VYvIT0S5YlHtNUvWt-I0OARXN62xvBmWJ' },
  { handle: '@active_anna', campaign: 'Performance Wear Launch', reach: '189K', engage: '9.2%', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCMBr4lRI21US16H_VW9HciVkm-37i4RG7i9gtxBWYxw8DKA95dwHEbNOTtd0wK46TjRGe9ZPDS1wCpzOcW_yRF_4xvOISXzT_FO7jXCz6XHXV99-ZGtayax25wIbMxU55I89yhwsRX4xV5wSKMXZ0C6kBGjKMBZlnEs777k_WWvBhQK5AFoTAQhJhK00CLGJMkhimyYUXTm4PrMTB6Amksja9AP5_uEf31qOeiyu-1rDwNtkgih2D34XltY0fVV2vKQcc3yiKREii', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAwkdh_Nx7fuedzJNhdXbYKTXSSmvPrb4YtkbPrx0OS0s_aKXC2qCf5Vllnkj8ywNgds88iO4y2dMrP6NShxgHisIVvYclwZ2P0HR9HvjN_RXtawfM28g_X4tcuS0klpJNk_KSMx8UeCyXy5-UyD2dQDasCYr2kPjThlCDIU8bH0fu2wXDvg2fJpU1ygpN0LOEb0Oo022vcLdVyD56tbU0EhMFOIXIsTKLczwQWMm_1299YlX79gMVCP5O_KpRgR77VacmXUFb3UR9' },
];

export default function AnalyticsDashboardPage() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-12">
      {/* Page Header */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface">Campaign Analytics</h2>
          <p className="text-on-surface-variant mt-2 font-medium">Real-time performance metrics across all active channels.</p>
        </div>
        <div className="flex items-center gap-3 bg-surface-container-lowest p-1.5 rounded-xl shadow-sm border border-outline-variant/10">
          <button className="px-4 py-2 text-sm font-bold bg-primary text-white rounded-lg outline-none">Last 30 Days</button>
          <button className="px-4 py-2 text-sm font-semibold text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors outline-none">Quarterly</button>
          <div className="w-[1px] h-6 bg-outline-variant/30 mx-1"></div>
          <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-lg transition-colors outline-none">
            <Calendar size={18} />
          </button>
        </div>
      </section>

      {/* KPIs */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Reach', value: '2.4M', change: '+12.5%', changeClass: 'text-secondary bg-secondary-container/30', barColor: 'bg-primary', barWidth: 75 },
          { label: 'Avg. Engagement', value: '4.82%', change: '+3.2%', changeClass: 'text-secondary bg-secondary-container/30', barColor: 'bg-tertiary', barWidth: 60 },
          { label: 'Impressions', value: '8.9M', change: '-1.4%', changeClass: 'text-error bg-error-container/30', barColor: 'bg-secondary', barWidth: 85 },
          { label: 'Conversion Rate', value: '2.14%', change: '+0.8%', changeClass: 'text-secondary bg-secondary-container/30', barColor: 'bg-primary-light', barWidth: 45 },
        ].map((kpi, i) => (
          <div key={i} className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{kpi.label}</span>
              <span className={`font-bold text-xs px-2 py-0.5 rounded-full ${kpi.changeClass}`}>{kpi.change}</span>
            </div>
            <div className="text-3xl font-extrabold text-on-surface tracking-tight">{kpi.value}</div>
            <div className="mt-4 h-1 w-full bg-surface-container-low rounded-full overflow-hidden">
              <div className={`h-full ${kpi.barColor} rounded-full`} style={{ width: `${kpi.barWidth}%` }}></div>
            </div>
          </div>
        ))}
      </section>

      {/* Engagement Trends Chart */}
      <section className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-xl font-bold tracking-tight text-on-surface">Engagement Trends</h3>
          <div className="flex gap-4">
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-primary"></span><span className="text-xs font-semibold text-on-surface-variant">Video Posts</span></div>
            <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-secondary"></span><span className="text-xs font-semibold text-on-surface-variant">Static Images</span></div>
          </div>
        </div>
        <div className="h-[300px] w-full relative flex items-end gap-1">
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[...Array(4)].map((_, i) => <div key={i} className="border-t border-outline-variant/10 w-full"></div>)}
          </div>
          {[{ o: 40, i: 80 }, { o: 55, i: 75 }, { o: 75, i: 90 }, { o: 65, i: 85 }, { o: 90, i: 95 }, { o: 80, i: 70 }, { o: 60, i: 80 }].map((bar, i) => (
            <div key={i} className="flex-1 bg-primary/10 rounded-t-lg relative group" style={{ height: `${bar.o}%` }}>
              <div className="absolute inset-x-2 bottom-0 bg-primary rounded-t opacity-80 group-hover:opacity-100 transition-opacity" style={{ height: `${bar.i}%` }}></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-6 px-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
          <span>Week 01</span><span>Week 02</span><span>Week 03</span><span>Week 04</span>
        </div>
      </section>

      {/* Demographics */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Geography */}
        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
          <h3 className="text-lg font-bold mb-6 tracking-tight text-on-surface">Geography</h3>
          <div className="space-y-6">
            {[{ country: 'United States', pct: 42 }, { country: 'United Kingdom', pct: 18 }, { country: 'Germany', pct: 12 }, { country: 'Canada', pct: 9 }].map((geo, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm font-semibold text-on-surface"><span>{geo.country}</span><span>{geo.pct}%</span></div>
                <div className="h-2 w-full bg-surface-container-low rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${geo.pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Age Groups */}
        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
          <h3 className="text-lg font-bold mb-6 tracking-tight text-on-surface">Age Groups</h3>
          <div className="flex items-center justify-center h-48 relative">
            <div className="w-40 h-40 rounded-full border-[16px] border-primary flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-black text-primary">34%</div>
                <div className="text-[10px] uppercase font-bold text-on-surface-variant">25-34 yrs</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[{ label: '18-24: 28%', color: 'bg-primary' }, { label: '35-44: 21%', color: 'bg-primary-fixed-dim' }, { label: '45+: 17%', color: 'bg-surface-variant' }].map((ag, i) => (
              <div key={i} className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${ag.color}`}></span><span className="text-xs font-semibold text-on-surface">{ag.label}</span></div>
            ))}
          </div>
        </div>

        {/* Gender Split */}
        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
          <h3 className="text-lg font-bold mb-6 tracking-tight text-on-surface">Gender Split</h3>
          <div className="flex flex-col h-full justify-center space-y-8">
            {[
              { label: 'Female', pct: 64, Icon: Venus, iconBg: 'bg-secondary-container', iconColor: 'text-secondary', barColor: 'bg-secondary' },
              { label: 'Male', pct: 31, Icon: Mars, iconBg: 'bg-primary-fixed', iconColor: 'text-primary', barColor: 'bg-primary' },
            ].map(({ label, pct, Icon, iconBg, iconColor, barColor }, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center`}>
                  <Icon size={20} className={iconColor} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-sm font-bold text-on-surface">{label}</span>
                    <span className="text-xl font-black text-on-surface">{pct}%</span>
                  </div>
                  <div className="h-3 w-full bg-surface-container-low rounded-full overflow-hidden">
                    <div className={`h-full ${barColor}`} style={{ width: `${pct}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center text-[10px] font-bold text-on-surface-variant tracking-widest uppercase">Non-binary / Other: 5%</div>
          </div>
        </div>
      </section>

      {/* Top Performing Content */}
      <section className="space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-on-surface">Top Performing Content</h3>
            <p className="text-on-surface-variant font-medium mt-1">High-impact posts from the last campaign cycle.</p>
          </div>
          <button className="text-primary font-bold text-sm flex items-center gap-2 hover:underline outline-none">
            View All Gallery <ArrowRight size={14} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {contentCards.map((card, i) => (
            <div key={i} className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/10">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={card.campaign} src={card.img} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <button className="w-full py-2 bg-white/20 backdrop-blur-md text-white rounded-lg text-xs font-bold border border-white/30 outline-none">View Analysis</button>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-primary-soft p-0.5 overflow-hidden">
                    <img className="w-full h-full rounded-full object-cover" alt={card.handle} src={card.avatar} />
                  </div>
                  <div>
                    <p className="text-xs font-bold truncate text-on-surface">{card.handle}</p>
                    <p className="text-[10px] text-on-surface-variant">{card.campaign}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/10 pt-4">
                  <div><p className="text-[9px] uppercase font-bold text-on-surface-variant tracking-wider">Reach</p><p className="font-black text-lg text-on-surface">{card.reach}</p></div>
                  <div><p className="text-[9px] uppercase font-bold text-on-surface-variant tracking-wider">Engage</p><p className="font-black text-lg text-secondary">{card.engage}</p></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
