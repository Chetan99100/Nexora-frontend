'use client';

import React from 'react';
import Link from 'next/link';
import { Activity, ShieldAlert, HeartPulse } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-slate-950 border-b border-slate-800 text-white px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Brand Logo & Name */}
      <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-wide hover:opacity-90 transition-opacity">
        <HeartPulse className="text-red-500 animate-pulse" size={28} />
        <span>Hospinet<span className="text-red-500">.AI</span></span>
      </Link>

      {/* Navigation Links to Core Views */}
      <div className="flex items-center gap-4 text-sm font-semibold">
        <Link 
          href="/" 
          className="px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
        >
          Public SOS
        </Link>
        <Link 
          href="/ambulance" 
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-amber-400 transition-colors"
        >
          <Activity size={16} /> Paramedic Unit
        </Link>
        <Link 
          href="/er-command" 
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-red-400 transition-colors"
        >
          <ShieldAlert size={16} /> ER Control
        </Link>
      </div>
    </nav>
  );
}