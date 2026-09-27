import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X, Cpu, Terminal, CheckCircle2, Video, Layers } from "lucide-react";

export default function LabDocs() {
  const [modalMedia, setModalMedia] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setModalMedia(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleBackToProjects = (e) => {
    e.preventDefault();
    navigate("/", { state: { targetSlide: 4 } });
  };

  const sections = [
    {
      category: "🔐 Unified Authentication Portal",
      items: [
        { src: "/l1.png", type: "img", title: "Secure Common Login Gateway", desc: "Unified secure authentication portal providing seamless, role-based entry for Incharge faculty, staff members and students.", fullWidth: true }
      ]
    },
    {
      category: "👑 Incharge Admin Portal",
      items: [
        { src: "/incharge.mp4", type: "video", title: "Incharge Faculty Management & Live Streams", desc: "Centralized control center for registering subject staff, overseeing active faculty members and monitoring live laboratory activity streams across all client terminals.", fullWidth: true }
      ]
    },
    {
      category: "👨‍🏫 Staff Dashboard & Enrollment",
      items: [
        { src: "/staff.mp4", type: "video", title: "Staff Student Enrollment & Session Tracking", desc: "Faculty interface showcasing enrolled student registers, student profile onboarding and real-time lab session logs with Excel export capabilities.", fullWidth: true }
      ]
    },
    {
      category: "💻 Standalone Client Terminal (.exe Application)",
      items: [
        { src: "/student.mp4", type: "video", title: "Student Terminal Session Lock & Task Logging", desc: "Native executable application deployed on client lab terminals, allowing students to authenticate workspaces, initialize sessions and log programming exercise timelines live.", fullWidth: true }
      ]
    }
  ];

  const modules = [
    { title: "🔐 Common Login Gateway", desc: "A unified authentication portal routing Incharge, Staff and Students securely." },
    { title: "👑 Incharge Dashboard", desc: "Oversees faculty registry, subject assignments and global laboratory stream analytics." },
    { title: "👨‍🏫 Staff Workspace", desc: "Manages student profile enrollments, attendance registers and Excel log generation." },
    { title: "💻 Standalone .exe Client", desc: "Compiled desktop application locking lab terminals and managing node session workflows." },
    { title: "📊 Real-Time Activity Logging", desc: "Live session tracking monitoring active programming timelines and milestone check-ins." },
  ];

  const tags = ["Desktop Application", ".exe Package", "Node Tracking", "Role-Based Access", "Excel Export"];

  return (
    <div className="min-h-screen bg-[#070b19] text-slate-100 font-sans leading-relaxed selection:bg-cyan-500 selection:text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#0f172a] via-[#082f49] to-[#0f172a] border-b border-slate-800 text-white px-5 pt-12 pb-20 text-center rounded-b-[40px] shadow-2xl">
        <div className="max-w-6xl mx-auto mb-6 flex justify-start">
          <button
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-cyan-600 text-slate-200 hover:text-white font-bold text-sm px-4 py-2.5 rounded-full border border-slate-700 transition-all duration-200 cursor-pointer shadow-lg"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </button>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
          Smart Digital Lab Register
        </h1>
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
          An offline-capable, desktop-packaged .exe application engineered to digitize laboratory register logs, authenticate shared node terminals across Incharge, Staff and Student roles and track live programming activity streams.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto -mt-10 px-4 pb-20 space-y-8">

        {/* KEY HIGHLIGHTS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0f172a] border border-cyan-500/30 rounded-2xl p-7 shadow-xl relative overflow-hidden group hover:border-cyan-500/60 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-cyan-600/30 border border-cyan-500/40 text-cyan-400 shadow-inner">
                  <Terminal size={24} className="stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-950/80 border border-cyan-800/50 px-2.5 py-1 rounded-md">
                    Standalone Desktop App
                  </span>
                  <h3 className="text-lg font-extrabold text-white mt-1">
                    Compiled .exe Client & Common Login
                  </h3>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mt-3">
                Built as a compiled **Standalone Executable (.exe)** utility deployed across physical lab terminals. It initiates via a secure common login gateway and locks node sessions dynamically for students.
              </p>
              <ul className="text-slate-300 text-xs sm:text-sm space-y-1.5 mt-3 list-disc list-inside text-left">
                <li><strong>Common Login Gateway:</strong> Single secure entry point for Incharge, Staff and Students.</li>
                <li><strong>Native Desktop Execution:</strong> Runs independently without requiring standard web browser overhead.</li>
              </ul>
            </div>
            <div className="flex items-center gap-2 mt-5 text-xs font-bold text-cyan-300 bg-cyan-950/40 p-2.5 rounded-xl border border-cyan-900/50 justify-center">
              <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
              <span>Native Executable Utility • Unified Login Portal</span>
            </div>
          </div>

          <div className="bg-[#0f172a] border border-blue-500/30 rounded-2xl p-7 shadow-xl relative overflow-hidden group hover:border-blue-500/60 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-blue-600/30 border border-blue-500/40 text-blue-400 shadow-inner">
                  <Cpu size={24} className="stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-800/50 px-2.5 py-1 rounded-md">
                    Multi-Role Workflows
                  </span>
                  <h3 className="text-lg font-extrabold text-white mt-1">
                    Incharge, Staff & Student Control
                  </h3>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mt-3">
                Provides segregated dashboards supporting complete administrative oversight across laboratory hierarchies:
              </p>
              <ul className="text-slate-300 text-xs sm:text-sm space-y-1.5 mt-3 list-disc list-inside text-left">
                <li><strong>Incharge Portal:</strong> Manages faculty staff registries and monitors global terminal logs.</li>
                <li><strong>Staff Portal:</strong> Handles student profile enrollments and Excel log exports.</li>
                <li><strong>Student Terminal:</strong> Active exercise logging and workspace node locking.</li>
              </ul>
            </div>
            <div className="flex items-center gap-2 mt-5 text-xs font-bold text-blue-300 bg-blue-950/40 p-2.5 rounded-xl border border-blue-900/50 justify-center">
              <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
              <span>Multi-Tier Dashboards • Live Activity Streams</span>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 shadow-xl text-center sm:text-left">
          <h2 className="text-xl font-bold text-cyan-400 mb-3 flex items-center gap-2 justify-center sm:justify-start">
            📌 Comprehensive Project Overview
          </h2>
          <p className="text-slate-300 text-[15px] mb-4 leading-relaxed">
            Traditional computer laboratories depend on manual logbooks to track student workstation allocation and experiment progression. The **Smart Digital Lab Register** modernizes this environment through a compiled desktop application (.exe) featuring a unified login screen. It synchronizes operations across Incharge administrators, faculty staff and student client nodes to deliver a fully digitized, paperless laboratory management experience.
          </p>
          <div className="flex flex-wrap gap-2 pt-2 justify-center sm:justify-start">
            {tags.map((tag, i) => (
              <span key={i} className="bg-slate-800 text-cyan-300 text-xs font-semibold px-3.5 py-1.5 rounded-lg border border-slate-700">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Modules */}
        <section className="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 shadow-xl">
          <h2 className="text-xl font-bold text-cyan-400 mb-5 flex items-center gap-2 justify-center sm:justify-start">
            ⚙️ Core Modules & System Workflows
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {modules.map((m, i) => (
              <div key={i} className="bg-[#070b19] border border-slate-800 rounded-xl p-5 hover:border-cyan-500/40 transition-all text-center sm:text-left">
                <h3 className="text-[15px] font-bold text-white mb-2">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Media Showcase By Category */}
        {sections.map((sec, idx) => (
          <div key={idx} className="space-y-5 pt-4">
            <h3 className="text-xl font-extrabold text-white border-b border-slate-800 pb-3 flex items-center gap-2 justify-center sm:justify-start">
              <Layers size={20} className="text-cyan-400" />
              {sec.category}
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {sec.items.map((item, i) => (
                <div
                  key={i}
                  className={`bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-cyan-500/50 transition-all duration-200 cursor-pointer flex flex-col group text-center sm:text-left ${
                    item.fullWidth ? "max-w-3xl mx-auto w-full" : ""
                  }`}
                  onClick={() => setModalMedia(item)}
                >
                  <div className="w-full aspect-video bg-slate-950 overflow-hidden border-b border-slate-800 flex items-center justify-center relative">
                    {item.type === "video" ? (
                      <>
                        <video src={item.src} className="w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-300" autoPlay muted loop playsInline />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center backdrop-blur-[2px]">
                          <div className="bg-cyan-600 text-white p-3.5 rounded-full shadow-lg group-hover:bg-cyan-500 transition-colors">
                            <Video size={24} />
                          </div>
                        </div>
                      </>
                    ) : (
                      <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <h4 className="text-base font-extrabold text-white mb-1.5">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* Modal Preview for Images & Videos */}
      {modalMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setModalMedia(null)}
        >
          <button
            onClick={() => setModalMedia(null)}
            className="absolute top-5 right-5 text-white bg-slate-800 hover:bg-slate-700 p-2.5 rounded-full cursor-pointer z-50 shadow-lg border border-slate-700"
          >
            <X size24 />
          </button>
          <div className="max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-2xl bg-black border border-slate-800 shadow-2xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {modalMedia.type === "video" ? (
              <video key={modalMedia.src} src={modalMedia.src} className="w-full max-h-[85vh] object-contain" controls autoPlay />
            ) : (
              <img src={modalMedia.src} alt="Enlarged preview" className="w-full max-h-[85vh] object-contain" />
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center py-10 text-xs text-slate-500 border-t border-slate-800 bg-[#050813]">
        Project Case Study • Smart Digital Lab Register (.exe Application) • Designed for Academic Excellence
      </footer>
    </div>
  );
}