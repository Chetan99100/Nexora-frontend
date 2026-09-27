'use client';

import React from 'react';
import Link from 'next/link';
import { 
  HeartPulse, 
  Activity, 
  ShieldAlert, 
  Zap, 
  Radio, 
  Clock, 
  ArrowRight, 
  Database,
  Cpu
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      {/* Hero Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto text-center space-y-8">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-red-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          AIoT Emergency Healthcare & Triage Network
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Eliminating <span className="text-red-500">Golden Hour</span> Delays with Real-Time Intelligence
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto font-normal leading-relaxed">
            Hospinet connects in-transit ambulances, emergency rooms, and patient vital sensors into a unified, low-latency command center powered by ambient AI.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/ambulance"
            className="flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-amber-500/10"
          >
            <Activity size={18} /> Launch Paramedic Dashboard <ArrowRight size={16} />
          </Link>
          <Link
            href="/er-command"
            className="flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-red-400 border border-slate-800 font-bold text-sm rounded-xl transition-all"
          >
            <ShieldAlert size={18} /> Open ER Command Center
          </Link>
        </div>
      </section>

      {/* Feature / Value Proposition Cards */}
      <section className="px-6 py-12 max-w-6xl mx-auto w-full">
        <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-widest text-center mb-8">
          Core AIoT Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl space-y-3">
            <div className="p-3 bg-red-950/50 border border-red-900/30 rounded-xl w-fit text-red-400">
              <Radio size={24} />
            </div>
            <h3 className="font-bold text-lg text-slate-100">Live IoT Telemetry</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Continuous streaming of SpO2, heart rate, and blood pressure from transit nodes directly to receiving trauma teams.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl space-y-3">
            <div className="p-3 bg-blue-950/50 border border-blue-900/30 rounded-xl w-fit text-blue-400">
              <Cpu size={24} />
            </div>
            <h3 className="font-bold text-lg text-slate-100">Ambient AI Voice Scribe</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hands-free voice transcription converts paramedic field notes into structured medical logs automatically in real time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl space-y-3">
            <div className="p-3 bg-emerald-950/50 border border-emerald-900/30 rounded-xl w-fit text-emerald-400">
              <Clock size={24} />
            </div>
            <h3 className="font-bold text-lg text-slate-100">Pre-Arrival Triage</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              ER control centers receive pre-arrival risk scoring to pre-allocate ICU trauma bays before the ambulance arrives.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-6 text-center text-xs text-slate-500">
        Hospinet AIoT Emergency Logistics Network &bull; Live Production Deployment
      </footer>
    </div>
  );
}