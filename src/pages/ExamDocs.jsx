import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X, ShieldCheck, Users, CheckCircle2, Video, Layers } from "lucide-react";

export default function ExamDocs() {
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
      category: "🔐 Authentication Portal",
      items: [
        { src: "/ems-login.png", type: "img", title: "Secure Unified Login Gateway", desc: "Centralized authentication portal providing role-based entry for Main Admins, Exam Centers, HODs and Faculty Staff.", fullWidth: true }
      ]
    },
    {
      category: "👑 EMS Main Admin Portal (System Control)",
      items: [
        { src: "/a1.png", type: "img", title: "Exam Center Administrator Management", desc: "Interface to register and manage authorized exam center administrators with secure credentials." },
        { src: "/a2.png", type: "img", title: "Academic Department Configuration", desc: "Configure and manage college departments (AI&DS, BME, CSE, ECE, IT, ME) with designated department codes." },
        { src: "/a3.png", type: "img", title: "Multi-Department HOD Assignment", desc: "Assign department heads with multi-department supervisory rights and secure administrative control keys." },
        { src: "/a4.png", type: "img", title: "Faculty & Staff Registry", desc: "Onboard faculty members, map them to respective departments and provision secure login passwords." },
        { src: "/a5.png", type: "img", title: "Exam Hall Setup & Capacity Matrix", desc: "Define examination halls with row and column grid dimensions, automatically computing total seating capacity.", fullWidth: true }
      ]
    },
    {
      category: "🏫 Exam Center Dashboard & Operations",
      items: [
        { src: "/e1.png", type: "img", title: "Exam Center Operational Dashboard", desc: "Centralized hub providing quick navigation for exam scheduling, hall allocation and circular dispatch." },
        { src: "/e2.mp4", type: "video", title: "Examination Scheduling & Filtering", desc: "Video demonstration showing administrators scheduling exams filtered by department, academic year and session (FN/AN)." },
        { src: "/e3.mp4", type: "video", title: "Circular Broadcast & Response History", desc: "Video walkthrough of broadcasting institutional notices and monitoring real-time reply logs from departments.", fullWidth: true }
      ]
    },
    {
      category: "🎓 Department HOD Dashboard",
      items: [
        { src: "/h.mp4", type: "video", title: "Department HOD Operations & Seating", desc: "Comprehensive video detailing HOD workflows: managing departmental staff, handling question papers and executing hall seating plans.", fullWidth: true }
      ]
    },
    {
      category: "👨‍🏫 Staff Invigilation Portal",
      items: [
        { src: "/s.mp4", type: "video", title: "Faculty Invigilation & Circular Portal", desc: "Video walkthrough illustrating how faculty members check assigned invigilation duties and reply to administrative circulars.", fullWidth: true }
      ]
    }
  ];

  const modules = [
    { title: "🔐 Unified System Login", desc: "A centralized authentication gateway ensuring strict role-based access security across all levels." },
    { title: "👑 Main Admin Suite", desc: "Complete governance over Exam Admins, academic departments, multi-dept HODs and hall matrices." },
    { title: "🏫 Exam Center Hub", desc: "Advanced scheduling engine supporting FN/AN sessions, department filters and circular broadcasts." },
    { title: "🏛️ Department HOD Portal", desc: "Departmental command center for managing faculty tasks, question papers and seating maps." },
    { title: "👨‍🏫 Faculty Workspace", desc: "Interactive portal for staff to view invigilation duties and submit circular acknowledgments." },
  ];

  const tags = ["React", "JavaScript", "Tailwind CSS", "Role-Based Security", "Workflow Automation", "Real-time Sync"];

  return (
    <div className="min-h-screen bg-[#070b19] text-slate-100 font-sans leading-relaxed selection:bg-indigo-500 selection:text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#0f172a] via-[#1e1b4b] to-[#0f172a] border-b border-slate-800 text-white px-5 pt-12 pb-20 text-center rounded-b-[40px] shadow-2xl">
        <div className="max-w-6xl mx-auto mb-6 flex justify-start">
          <button
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-indigo-600 text-slate-200 hover:text-white font-bold text-sm px-4 py-2.5 rounded-full border border-slate-700 transition-all duration-200 cursor-pointer shadow-lg"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </button>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
          Examination Management System (EMS)
        </h1>
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
          An enterprise-grade, role-based academic portal engineered to automate college examinations, manage department hierarchies, compute hall seating capacities and streamline circular communication.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto -mt-10 px-4 pb-20 space-y-8">

        {/* KEY HIGHLIGHTS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0f172a] border border-indigo-500/30 rounded-2xl p-7 shadow-xl relative overflow-hidden group hover:border-indigo-500/60 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-indigo-600/30 border border-indigo-500/40 text-indigo-400 shadow-inner">
                  <ShieldCheck size={24} className="stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-indigo-400 bg-indigo-950/80 border border-indigo-800/50 px-2.5 py-1 rounded-md">
                    Security Architecture
                  </span>
                  <h3 className="text-lg font-extrabold text-white mt-1">
                    Role-Based Access Control
                  </h3>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mt-3">
                Built with a secure multi-tier RBAC framework. Authentication initiates via a unified login portal, automatically routing users to their specific authorized workspaces:
              </p>
              <ul className="text-slate-300 text-xs sm:text-sm space-y-1.5 mt-3 list-disc list-inside text-left">
                <li><strong>Main Admin:</strong> Full control over system accounts and academic infrastructure.</li>
                <li><strong>Exam Center:</strong> Examination scheduling and institutional circular broadcasting.</li>
                <li><strong>HOD & Staff:</strong> Departmental task distribution and invigilation tracking.</li>
              </ul>
            </div>
            <div className="flex items-center gap-2 mt-5 text-xs font-bold text-indigo-300 bg-indigo-950/40 p-2.5 rounded-xl border border-indigo-900/50 justify-center">
              <CheckCircle2 size={16} className="text-indigo-400 shrink-0" />
              <span>Secure Session Encryption • Strict Data Isolation</span>
            </div>
          </div>

          <div className="bg-[#0f172a] border border-blue-500/30 rounded-2xl p-7 shadow-xl relative overflow-hidden group hover:border-blue-500/60 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-blue-600/30 border border-blue-500/40 text-blue-400 shadow-inner">
                  <Users size={24} className="stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-800/50 px-2.5 py-1 rounded-md">
                    Workflow Automation
                  </span>
                  <h3 className="text-lg font-extrabold text-white mt-1">
                    Automated Seating & Circular Sync
                  </h3>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mt-3">
                Streamlines academic examination logistics by eliminating paperwork through intelligent automation features:
              </p>
              <ul className="text-slate-300 text-xs sm:text-sm space-y-1.5 mt-3 list-disc list-inside text-left">
                <li><strong>Dynamic Hall Matrix:</strong> Computes seating capacities instantly using row and column grid metrics.</li>
                <li><strong>Circular Tracking:</strong> Real-time broadcast delivery with acknowledgment logs from departments.</li>
                <li><strong>Duty Coordination:</strong> Automated allocation of invigilation staff across examination halls.</li>
              </ul>
            </div>
            <div className="flex items-center gap-2 mt-5 text-xs font-bold text-blue-300 bg-blue-950/40 p-2.5 rounded-xl border border-blue-900/50 justify-center">
              <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
              <span>Automated Hall Matrix • Real-time Reply Tracking</span>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 shadow-xl text-center sm:text-left">
          <h2 className="text-xl font-bold text-indigo-400 mb-3 flex items-center gap-2 justify-center sm:justify-start">
            📌 Comprehensive Project Overview
          </h2>
          <p className="text-slate-300 text-[15px] mb-4 leading-relaxed">
            Managing university or college examinations involves coordinating multiple departments, invigilators, hall allotments and question paper confidentiality. The Examination Management System (EMS) offers a robust web architecture that centralizes these operations into streamlined digital pipelines. From initial administrator setup down to staff invigilation duties, every step is transparent, trackable and optimized for high-capacity academic institutions.
          </p>
          <div className="flex flex-wrap gap-2 pt-2 justify-center sm:justify-start">
            {tags.map((tag, i) => (
              <span key={i} className="bg-slate-800 text-indigo-300 text-xs font-semibold px-3.5 py-1.5 rounded-lg border border-slate-700">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Modules */}
        <section className="bg-[#0f172a] border border-slate-800 rounded-2xl p-8 shadow-xl">
          <h2 className="text-xl font-bold text-indigo-400 mb-5 flex items-center gap-2 justify-center sm:justify-start">
            ⚙️ Core Modules & Functional Architecture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {modules.map((m, i) => (
              <div key={i} className="bg-[#070b19] border border-slate-800 rounded-xl p-5 hover:border-indigo-500/40 transition-all text-center sm:text-left">
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
              <Layers size={20} className="text-indigo-400" />
              {sec.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sec.items.map((item, i) => (
                <div
                  key={i}
                  className={`bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-indigo-500/50 transition-all duration-200 cursor-pointer flex flex-col group text-center sm:text-left ${
                    item.fullWidth ? "md:col-span-2 max-w-2xl mx-auto w-full" : ""
                  }`}
                  onClick={() => setModalMedia(item)}
                >
                  <div className="w-full aspect-video bg-slate-950 overflow-hidden border-b border-slate-800 flex items-center justify-center relative">
                    {item.type === "video" ? (
                      <>
                        <video src={item.src} className="w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-300" autoPlay muted loop playsInline />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center backdrop-blur-[2px]">
                          <div className="bg-indigo-600 text-white p-3.5 rounded-full shadow-lg group-hover:bg-indigo-500 transition-colors">
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
  onClick={() => navigate(proj.live)}
  className="shrink-0 text-zinc-400 hover:text-white transition p-1 cursor-pointer"
  aria-label="View Project Documentation"
>
  <ArrowUpRight size={18} />
</button>
          <div className="max-w-5xl w-all max-h-[90vh] overflow-hidden rounded-2xl bg-black border border-slate-800 shadow-2xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
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
        Project Case Study • Examination Management System (EMS) • Designed for Academic Excellence
      </footer>
    </div>
  );
}