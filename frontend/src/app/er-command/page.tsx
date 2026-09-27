'use client';

import React, { useState } from 'react';
import { ShieldAlert, Clock, Bed, User, CheckCircle2 } from 'lucide-react';

interface AmbulanceUnit {
  id: string;
  patient: string;
  eta: string;
  condition: string;
  triage: 'Red' | 'Yellow' | 'Green';
  hr: number;
  spo2: string;
  notes: string;
  status: 'In Transit' | 'Bay Reserved';
}

export default function ERCommandPage() {
  const [ambulances, setAmbulances] = useState<AmbulanceUnit[]>([
    {
      id: "AMB-DEL-04",
      patient: "Rajesh Kumar (45M)",
      eta: "7 mins",
      condition: "Acute Chest Pain / Tachycardia",
      triage: "Red",
      hr: 112,
      spo2: "92%",
      notes: "Oxygen therapy initiated by paramedic. ABDM ID linked.",
      status: "In Transit"
    },
    {
      id: "AMB-DEL-12",
      patient: "Priya Sharma (32F)",
      eta: "14 mins",
      condition: "Fracture / Moderate Trauma",
      triage: "Yellow",
      hr: 88,
      spo2: "98%",
      notes: "Vitals stable. Splint applied.",
      status: "In Transit"
    }
  ]);

  const reserveBay = (id: string) => {
    setAmbulances(prev =>
      prev.map(unit =>
        unit.id === id ? { ...unit, status: 'Bay Reserved' } : unit
      )
    );
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header Banner */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-900 border border-slate-800 p-4 rounded-xl gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <ShieldAlert className="text-red-500" /> ER Command Center — Metro General Hospital
          </h1>
          <p className="text-xs text-slate-400 mt-1">Live Pre-Arrival Inbound Triage Queue & Bed Allocation</p>
        </div>
        <div className="flex gap-4 text-xs font-semibold">
          <div className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
            Trauma Bays Available: <span className="text-emerald-400 font-bold">3 / 8</span>
          </div>
          <div className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
            ICU Beds: <span className="text-amber-400 font-bold">2 / 5</span>
          </div>
        </div>
      </header>

      {/* Incoming Ambulance Cards */}
      <div className="space-y-4">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
          Inbound Ambulance Units
        </h2>

        {ambulances.map((unit) => (
          <div
            key={unit.id}
            className="bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all p-5 rounded-xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"
          >
            {/* Unit & Patient Details */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-blue-400 text-lg">{unit.id}</span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${
                  unit.triage === 'Red' 
                    ? 'bg-red-950 text-red-400 border-red-800' 
                    : 'bg-yellow-950 text-yellow-400 border-yellow-800'
                }`}>
                  Triage {unit.triage}
                </span>
                {unit.status === 'Bay Reserved' && (
                  <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center gap-1">
                    <CheckCircle2 size={12} /> Trauma Bay 02 Reserved
                  </span>
                )}
              </div>
              <p className="text-sm font-medium text-slate-200 flex items-center gap-2">
                <User size={16} className="text-slate-400" /> {unit.patient}
              </p>
              <p className="text-xs text-slate-400 font-mono bg-slate-950 p-2 rounded border border-slate-800/80">
                AI Scribe Note: {unit.notes}
              </p>
            </div>

            {/* Live Vitals Snapshot */}
            <div className="flex gap-6 text-sm bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div>
                <span className="text-xs text-slate-500 block">Live HR</span>
                <span className="font-bold text-emerald-400">{unit.hr} <span className="text-xs font-normal">BPM</span></span>
              </div>
              <div className="border-l border-slate-800 pl-4">
                <span className="text-xs text-slate-500 block">SpO2</span>
                <span className="font-bold text-blue-400">{unit.spo2}</span>
              </div>
              <div className="border-l border-slate-800 pl-4">
                <span className="text-xs text-slate-500 block">ETA</span>
                <span className="font-bold text-amber-400 flex items-center gap-1">
                  <Clock size={14} /> {unit.eta}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex sm:flex-row flex-col gap-2 w-full lg:w-auto">
              {unit.status === 'In Transit' ? (
                <button
                  onClick={() => reserveBay(unit.id)}
                  className="bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <Bed size={16} /> Reserve ICU Trauma Bay
                </button>
              ) : (
                <button
                  disabled
                  className="bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-bold px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 cursor-default"
                >
                  <CheckCircle2 size={16} /> Prepared for Arrival
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}