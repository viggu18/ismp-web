import React from 'react';
import Link from 'next/link';
import { Search, Bell, Settings } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 z-40 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex justify-between items-center px-8 shadow-sm dark:shadow-none font-manrope text-sm tracking-tight border-b border-slate-100/50">
      <div className="flex items-center gap-8">
        <div className="flex items-center bg-slate-100 dark:bg-slate-800/50 rounded-full px-4 py-2 w-80">
          <Search size={18} className="text-slate-400 mr-2 flex-shrink-0" />
          <input className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none" placeholder="Search influencers..." type="text" />
        </div>
        <div className="hidden lg:flex gap-6">
          <Link href="/discover" className="text-slate-500 hover:text-primary transition-colors">Marketplace</Link>
          <Link href="/campaigns" className="text-slate-500 hover:text-primary transition-colors">Campaigns</Link>
          <Link href="/messages" className="text-slate-500 hover:text-primary transition-colors">Messages</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition-colors relative">
          <Bell size={20} className="text-slate-600 dark:text-slate-300" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
        </button>
        <button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition-colors">
          <Settings size={20} className="text-slate-600 dark:text-slate-300" />
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200">
          <img alt="User Profile Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaXrCqLQPG-3uIG6V9-LjQG-LcTxKqO166d58xnjAsm1p3jZiAO9O0_9H4eAZgf9eQX9ULfUB-k89WmANkzyTNZKtH2D6F9bapjdiiAkt7ZhMGDIg8F4xN8yBd8Tt4105APmW8s7EQwnF9985sP8S-WktGBm0Xt4tDsE0sdcqQgK9tODvDCmVgadOy9WPLOkoBlHYrjXHnB4QrSHgzcXfEACrlsMF4KJDbQaB6j6-LJRuPssxr4tpul93eTTiUPG9a1G0GPPgekf8M" />
        </div>
      </div>
    </header>
  );
}
