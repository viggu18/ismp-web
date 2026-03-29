import React from 'react';
import {
  Search, Edit, Video, MoreVertical, ZoomIn, FileEdit,
  Paperclip, Smile, Send, ClipboardList, ArrowRight,
  FolderOpen, ShieldCheck, FileText, Eye, Download
} from 'lucide-react';

const convCategories = [
  { icon: 'rocket', label: 'Campaigns' },
  { icon: 'briefcase', label: 'Brands', active: true },
  { icon: 'bell', label: 'System' },
  { icon: 'archive', label: 'Archived' },
];

export default function MessagesInboxPage() {
  return (
    <div className="h-[calc(100vh-64px)] grid grid-cols-12 overflow-hidden">
      {/* Nested Sidebar */}
      <aside className="col-span-1 bg-surface-container-low border-r border-outline-variant/10 flex flex-col p-2 gap-1 items-center py-4">
        {convCategories.map((item, i) => (
          <button key={i} className={`flex flex-col items-center gap-1 p-2 rounded-lg w-full transition-all text-center ${item.active ? 'bg-white shadow-sm text-primary' : 'text-slate-400 hover:bg-white/60'}`}>
            <span className="font-label uppercase tracking-wider text-[8px] font-bold">{item.label}</span>
          </button>
        ))}
        <div className="mt-auto">
          <button className="p-2 bg-gradient-to-br from-primary to-primary-light text-white rounded-lg transition-all active:scale-95 outline-none">
            <Edit size={16} />
          </button>
        </div>
      </aside>

      {/* Conversation List */}
      <section className="col-span-3 bg-surface-container-low border-r border-outline-variant/10 flex flex-col overflow-hidden">
        <div className="p-4 pb-2">
          <div className="relative group">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input className="w-full pl-10 pr-4 py-3 bg-white border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400 outline-none" placeholder="Search conversations..." type="text" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2 custom-scrollbar">
          {/* Active Conversation */}
          <div className="p-4 bg-white rounded-xl shadow-sm cursor-pointer border border-primary/10">
            <div className="flex gap-4">
              <div className="relative flex-shrink-0">
                <img className="w-12 h-12 rounded-xl object-cover" alt="Vantage Sportswear" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFc0BbHFTjo8URICFG_-wasVjmJWgza06fBBp2k_A_rMNpIBH5ZGhI6dkP37XgUfzVxxlpZaE5eNOE4cMHne6Ncz3gmmtCEgxOU_6w2f3tBtQGgCJu_HhQ10s5hSUPTdbYqpqCCqnFVcZox96i5gUXQKa7jp08H9WlJei4QnWgKsPrB1iUMwpfEudVWpoFUuiUlcF1TXpOUlJenIr_aSD_WDUs8PI21-GMwLZ0uuT5ThiV2Czh6ZVj8FgwLxh2ORURNdes7EDnuOZs" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-sm text-on-surface truncate">Vantage Sportswear</h3>
                  <span className="text-[10px] text-slate-400">2m ago</span>
                </div>
                <p className="text-xs text-slate-500 truncate mb-2">Great work on the last shoot! We&apos;ve sent an offer for...</p>
                <span className="inline-block px-2 py-0.5 bg-primary-soft text-primary text-[10px] font-bold rounded-full">Active Campaign</span>
              </div>
            </div>
          </div>

          {/* Inactive Conversations */}
          {[
            { name: 'Lumina Skincare', time: '1h ago', preview: 'Check out the new contract draft.', tag: 'New Offer', tagClass: 'bg-secondary/10 text-secondary', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMR7muKDLsAvDTgHe4rTpcrJMqxejl7Ef1Z2qi_BueLyc6l3iH35-eIIgeRdV88w_oDuTbEU_xFcFAow03-2lbYb_eQ2JGWeGLOTXSSMhsf6EeLfM_Xh5gjSQtb8_kUipETYOzL6BXfjlH83i__BITEqz-sdCDN-oLzSEWy-dzECbhp1bakOPiV5TeRjl8B9tL7NtyY0-V1HevVcM3sErIc_qajmQ5ezmaiNhVvHrVpRfQjSxV0bIACdjpo3pvhhpOVjpSD-hmTLTd' },
            { name: 'Nexa Creative', time: '4h ago', preview: 'Thanks for the update.', tag: 'General', tagClass: 'bg-surface-container-highest text-slate-500', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm6A_k6VbDEzfBK9bBxmY7uULxRUj9SyViH-dVW9wkWd9tVWZGix1tXHJCm0ten4WHKpfrCCB7VVACCGy9PSi2rr8JE6xSqfAf8cRDgmob7iDi_Sxphg74AxErdm14kHVn8ekGoOmrlap_ZnBNuLeS_Xbiz2PseDC1zQfXkvYiIfwBJNd11wIL36GVSA7WlvDnrb_RSBJf1P5hy7rLLw-KmyCqDgoK24NF4ihR58bH4-lOLYCWlGCJeNc36XEjzBSlX5FC7Dy5rCO0' },
          ].map((conv, i) => (
            <div key={i} className="p-4 hover:bg-white/60 rounded-xl cursor-pointer transition-all">
              <div className="flex gap-4">
                <img className="w-12 h-12 rounded-xl object-cover flex-shrink-0" alt={conv.name} src={conv.src} />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-sm text-on-surface truncate">{conv.name}</h3>
                    <span className="text-[10px] text-slate-400">{conv.time}</span>
                  </div>
                  <p className="text-xs text-slate-500 truncate mb-2">{conv.preview}</p>
                  <span className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded-full ${conv.tagClass}`}>{conv.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chat Thread */}
      <section className="col-span-8 flex overflow-hidden">
        <div className="flex-1 flex flex-col bg-white min-w-0">
          {/* Chat Header */}
          <div className="h-16 px-8 flex justify-between items-center border-b border-slate-50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 overflow-hidden">
                <img alt="Vantage Sportswear brand logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBypehrBXGNDl5Svw7YjrE0U_zLxX8Cj7mu8aBa06Rhtg27wrfIMIIrpweHCqbdaFap0shiW2L4DDxwRhCeJ-pL5oKbQl74R2KzMpGxPpksF-1brz2vnaetA3CRa9_pQUfGhh3qgj9Mo9dTVdwS6z1aIH37no6pwEScEe5JOPonqmA-YeC6ihsEnGMZOl1oe1iRR8m_AJigzk6jn8YVlw6QUXFcgo4aZdWs_kzanrJsaSwlOuN_iefBmY6pjmaRej_MVttWh7AEEDdb" />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight text-on-surface">Vantage Sportswear</h3>
                <p className="text-[10px] text-secondary font-bold uppercase tracking-widest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></span> Online
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 text-slate-400 hover:text-primary transition-colors outline-none"><Video size={20} /></button>
              <button className="p-2 text-slate-400 hover:text-primary transition-colors outline-none"><MoreVertical size={20} /></button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
            <div className="text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">Tuesday, October 24</span>
            </div>
            {/* Received */}
            <div className="flex gap-4 max-w-[80%]">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex-shrink-0 mt-1 overflow-hidden">
                <img alt="Brand" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGDL-_h67abdN8ADo-_WnX_ppa0RWCwfgyJM07BKX_etDjugMStWIUbbrYgzfEyYNXNxlt8iGiLTidwrg2FYH-l6pQdiQvuEyBUsnTrX4tGkDqNO43Lh4sF5Fk0Qom2ubqdEcGEpRgXBnVWAevChAWWX_1mhzPR6mvRlmzgR1teeQFSy9iRuifE5J-1yD2sXvG1nIY0WHTAiHrzIIPWrcPwxwP0lDmy_gbGEzkP2dprPf_9uoLzPSlqlua6ZAy1bNhnsdhqsLp5OK9" />
              </div>
              <div className="space-y-1">
                <div className="p-4 bg-slate-100 rounded-2xl rounded-tl-none text-sm text-on-surface">
                  Hello! We&apos;ve reviewed your content strategy for the Winter Collection. The moodboard looks fantastic.
                </div>
                <span className="text-[10px] text-slate-400 px-1">10:15 AM</span>
              </div>
            </div>

            {/* Sent */}
            <div className="flex flex-row-reverse gap-4 max-w-[80%] ml-auto">
              <div className="w-8 h-8 rounded-lg bg-primary-soft overflow-hidden flex-shrink-0 mt-1">
                <img alt="You" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-cQfN6_-06a7vnL2g_uIRkoRzrkIUFjN0Nw2piPVbZlHjd3eFL_hL2w882j3lDfKAD3mrkxBaJ7UUvrR5pz5tJMFC8huw5Yz_3dKnexsVPtbVw6oE03OrnjKZlv_qm9ywMZbJC82uEChsRQ-j9W6OxqQK8LaKcTANmFr3dQyRMAP_hR_yPZCbOnNtI75RtwnTQsmJHeo38jqxcJCeulc7ebje_PdyhHAIzA2pNW-gBVfw8qiX3Nwjf2Zl5ypzW7mOn_cjcjigngSq" />
              </div>
              <div className="space-y-2 items-end flex flex-col">
                <div className="p-4 bg-gradient-to-br from-primary to-primary-light text-white rounded-2xl rounded-tr-none text-sm shadow-md">
                  Glad you liked it! Here&apos;s a first draft of the main reel layout.
                </div>
                <div className="w-48 h-32 rounded-xl overflow-hidden shadow-sm relative group cursor-pointer">
                  <img className="w-full h-full object-cover" alt="Attachment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYtksh18eTgdUdudKACb_1qvzB-qGZSCljb2dvyPF6QR1-dhKgsI52BgfR8N8tJunB9AcF23N2PnfksnO5f1saynMLz0SaQSaStv8dgk7GRIO29hfkj4PfSnLFuEIBOkKFLHJXFkOghTucOvOzeoixTK5HmrPAywKmzS4I405_7cQKkPOU7WrX5PEEjVYuXsYlqSfvLTeNXBoGOdjYdzESCw0pp5rpur37Vp6gz2JVduQNI_sW1dkCJa80SXlTQFSvHOD-HLdX0SCn" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                    <ZoomIn size={20} className="text-white" />
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 px-1">10:22 AM</span>
              </div>
            </div>

            {/* System Card: Offer */}
            <div className="flex justify-center my-8">
              <div className="w-full max-w-md bg-surface-container-low p-6 rounded-2xl border-2 border-primary/10 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                  <FileEdit size={20} className="text-primary" />
                </div>
                <h4 className="font-bold text-sm mb-1 text-on-surface">New Campaign Offer Received</h4>
                <p className="text-xs text-slate-500 mb-6">Winter Lifestyle Series • $2,400.00 Fixed Fee</p>
                <div className="flex gap-3 w-full">
                  <button className="flex-1 py-2 text-xs font-bold text-slate-600 bg-white rounded-lg hover:bg-slate-50 transition-all outline-none">Review Contract</button>
                  <button className="flex-1 py-2 text-xs font-bold text-white bg-gradient-to-br from-primary to-primary-light rounded-lg shadow-lg active:scale-95 transition-all outline-none">Accept Offer</button>
                </div>
              </div>
            </div>
          </div>

          {/* Input Box */}
          <div className="p-6 pt-0">
            <div className="bg-surface-container-high rounded-2xl p-2 flex items-end gap-2">
              <div className="flex flex-col flex-1">
                <textarea className="w-full bg-transparent border-none focus:ring-0 text-sm resize-none py-3 px-4 max-h-32 min-h-[44px] outline-none" placeholder="Type your message..." rows={1}></textarea>
              </div>
              <div className="flex gap-1 pb-1 pr-1">
                <button className="p-2 text-slate-500 hover:text-primary transition-colors outline-none"><Paperclip size={18} /></button>
                <button className="p-2 text-slate-500 hover:text-primary transition-colors outline-none"><Smile size={18} /></button>
                <button className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light text-white rounded-xl flex items-center justify-center shadow-lg active:scale-90 transition-all outline-none">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Context Sidebar */}
        <div className="w-72 bg-slate-50 border-l border-slate-200/50 flex flex-col p-6 overflow-y-auto custom-scrollbar flex-shrink-0">
          <h3 className="font-label uppercase tracking-widest text-[10px] text-slate-400 mb-6">Campaign Context</h3>
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <ClipboardList size={14} />
                <span className="text-xs font-bold">Campaign Brief</span>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm space-y-2 border border-outline-variant/10">
                <h4 className="text-xs font-bold text-on-surface">Winter Lifestyle Series</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Focus on outdoor authenticity. High-contrast, cool tones with emphasis on the &apos;Aero-Shield&apos; jacket durability.</p>
                <button className="text-[10px] font-bold text-primary flex items-center gap-1 group outline-none">
                  View Full Brief <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <FolderOpen size={14} />
                <span className="text-xs font-bold">Shared Assets</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuBUs8bHCG4YfFEvTCVKLKT5LNAqtrMDGSKjmBPg-baTWnAyKMpFZMOLbsE9jPXH6AAFkFovMUa-oqSXCTVtOwdK7Qv6v2ikro43ZbHQyzHKsK2Su3WFfvk_oAj6_FOWefBUEev_Luvbd6JHRJE8QaocyymYqVxXfNZ9OM3trIK2HtV84Lw8GVL3AZToBQQshL6RiEGFf8AHspug58-f9pVUuSqdPz8Pv8i1aPy8hLjEyl_WjeTWZT81ZeoncCi4XgJNwLiPo8OWzHa0',
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuBmWU8KEfRyTIJ03GlYRjbPaVGOOQzsW7rN5B5N5kwAICKJQQzPdPWKojidJqjH2nOFOlfjNk-gpIrTxQlJy_xCytK6D5tGfx4L-ZH5Snc4sMMTvp7qzGC_dU_Tjv9MOap8rHdXlVxzeaUGRnTxMHw_z16JX4xbX7GXTSXYtqiIZooysxvEQB0lYs1jXaE76tIC5iEhmhRlHsVuuSAb_cAq_yS7E9tDtP09ljSbUkaGHsN4iKcDxctv_WQMBJYNIlHWVdFvZWY4ZBlC',
                ].map((src, i) => (
                  <div key={i} className="aspect-square bg-white rounded-lg p-1 shadow-sm relative group">
                    <img className="w-full h-full object-cover rounded-md" alt="Asset" src={src} />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-md">
                      <Download size={14} className="text-white" />
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-2 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 hover:bg-slate-100 transition-all outline-none">Manage All Assets</button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <ShieldCheck size={14} />
                <span className="text-xs font-bold">Agreement</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary/5 rounded-xl">
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-secondary" />
                  <div>
                    <p className="text-[10px] font-bold text-on-surface">Master_Agreement.pdf</p>
                    <p className="text-[9px] text-slate-400">Signed Oct 12, 2023</p>
                  </div>
                </div>
                <Eye size={16} className="text-slate-300" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
