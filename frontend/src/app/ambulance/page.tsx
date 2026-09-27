'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Mic, MicOff, Navigation, AlertTriangle, Radio } from 'lucide-react';

export default function AmbulancePage() {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>(
    "Patient is a 45-year-old male experiencing acute chest pain. Vitals stable, oxygen therapy initiated."
  );
  const [vitals, setVitals] = useState({ heartRate: 88, spo2: 97, bp: "120/80" });

  // Simulate real-time streaming telemetry data
  useEffect(() => {
    const interval = setInterval(() => {
      setVitals({
        heartRate: 85 + Math.floor(Math.random() * 10),
        spo2: 96 + Math.floor(Math.random() * 3),
        bp: "122/82",
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setTranscript("Listening for paramedic voice notes...");
    } else {
      setTranscript("Patient exhibiting mild tachycardia. Transmitting audio log to ER command center.");
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Top Status Banner */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-900 border border-slate-800 p-4 rounded-xl gap-4">
        <div>
          <h1 className="text-xl font-bold text-red-500 flex items-center gap-2">
            <Activity className="animate-pulse" /> Hospinet Ambulance Unit #04
          </h1>
          <p className="text-xs text-slate-400 mt-1">Vehicle Node ID: HOSP-AMB-DEL-04 | LoRa/5G Dual Mesh Active</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1.5">
            <Radio size={14} className="animate-pulse" /> IoT Node Online
          </span>
          <span className="bg-red-950 text-red-400 border border-red-800 text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1.5">
            <AlertTriangle size={14} /> Priority Code Red
          </span>
        </div>
      </header>

      {/* Main Grid: Vitals & Ambient AI Scribe */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* IoT Telemetry Panel */}
        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-4">
          <h2 className="text-slate-400 font-semibold text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
            Live Patient Vitals (IoT Feed)
          </h2>
          <div className="space-y-3">
            <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 flex justify-between items-center">
              <div>
                <p className="text-xs text-slate-400">Heart Rate</p>
                <p className="text-2xl font-bold text-emerald-400">{vitals.heartRate} <span className="text-xs font-normal text-slate-400">BPM</span></p>
              </div>
              <Activity className="text-emerald-500/40" size={28} />
            </div>

            <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 flex justify-between items-center">
              <div>
                <p className="text-xs text-slate-400">Blood Oxygen (SpO2)</p>
                <p className="text-2xl font-bold text-blue-400">{vitals.spo2}%</p>
              </div>
              <div className="text-blue-500/40 text-xl font-bold">%</div>
            </div>

            <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 flex justify-between items-center">
              <div>
                <p className="text-xs text-slate-400">Blood Pressure</p>
                <p className="text-2xl font-bold text-amber-400">{vitals.bp} <span className="text-xs font-normal text-slate-400">mmHg</span></p>
              </div>
              <div className="text-amber-500/40 text-sm font-bold">SYS/DIA</div>
            </div>
          </div>
        </div>

        {/* Ambient Voice AI Panel */}
        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 lg:col-span-2 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-4">
              <h2 className="text-slate-400 font-semibold text-sm uppercase tracking-wider">
                Ambient AI Voice Scribe
              </h2>
              <button
                onClick={toggleRecording}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  isRecording 
                    ? 'bg-red-600 animate-pulse text-white' 
                    : 'bg-blue-600 hover:bg-blue-500 text-white'
                }`}
              >
                {isRecording ? <MicOff size={16} /> : <Mic size={16} />}
                {isRecording ? 'Stop & Send Transcription' : 'Start Hands-Free Recording'}
              </button>
            </div>

            <div className="bg-slate-950 p-4 rounded-lg min-h-[140px] border border-slate-800 text-slate-300 font-mono text-sm leading-relaxed">
              {transcript}
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-xs text-slate-500">Destination: Metro General ER (ETA 7 Mins)</span>
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg font-bold text-xs flex items-center gap-2 transition-colors">
              <Navigation size={16} /> Transmit Pre-Arrival Telemetry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}