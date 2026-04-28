import React from 'react';
import Link from 'next/link';
import { Search, Bell, Settings, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 z-40 h-16 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl flex justify-between items-center px-4 md:px-8 shadow-sm dark:shadow-none font-sans text-sm tracking-tight border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="flex items-center flex-1">
        <div className="flex items-center bg-slate-100/50 dark:bg-slate-800/50 rounded-full px-4 py-2 w-full max-w-md focus-within:ring-2 focus-within:ring-primary/20 transition-all">
          <Search size={18} className="text-slate-400 mr-2 flex-shrink-0" />
          <input className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none placeholder:text-slate-400" placeholder="Search influencers..." type="text" />
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4 ml-4">
        <Link href="/notifications" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors relative block">
          <Bell size={20} className="text-slate-600 dark:text-slate-300" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full ring-2 ring-white dark:ring-slate-900"></span>
        </Link>
        <Link href="/settings" className="hidden md:block p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <Settings size={20} className="text-slate-600 dark:text-slate-300" />
        </Link>
        <Link href="/profile" className="w-8 h-8 rounded-full overflow-hidden border-2 border-transparent hover:border-primary/50 transition-colors cursor-pointer block">
          <img alt="User Profile Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaXrCqLQPG-3uIG6V9-LjQG-LcTxKqO166d58xnjAsm1p3jZiAO9O0_9H4eAZgf9eQX9ULfUB-k89WmANkzyTNZKtH2D6F9bapjdiiAkt7ZhMGDIg8F4xN8yBd8Tt4105APmW8s7EQwnF9985sP8S-WktGBm0Xt4tDsE0sdcqQgK9tODvDCmVgadOy9WPLOkoBlHYrjXHnB4QrSHgzcXfEACrlsMF4KJDbQaB6j6-LJRuPssxr4tpul93eTTiUPG9a1G0GPPgekf8M" />
        </Link>
      </div>
    </header>
  );
}
