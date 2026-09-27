import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X, DollarSign, Zap, CheckCircle2 } from "lucide-react";

export default function TransportDocs() {
  const [modalImg, setModalImg] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setModalImg(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleBackToProjects = (e) => {
  e.preventDefault();
  navigate("/", { state: { targetSlide: 4 } });
};

  const screenshots = [
    { src: "/admin login page.png", title: "1. Admin Login", desc: "Admin secure portal access with clean institutional branding.", isMobile: false },
    { src: "/admin dashboard.png", title: "2. Control Center Dashboard", desc: "Main fleet, drivers and route operations hub.", isMobile: false },
    { src: "/admin routes mgmt.png", title: "3. Route Management", desc: "Create transit routes with start, end and multi-stop locations.", isMobile: false },
    { src: "/admin bus mgmt.png", title: "4. Bus Fleet Management", desc: "Register bus numbers and map them to designated routes.", isMobile: false },
    { src: "/admin drivers mgmt.png", title: "5. Driver Management", desc: "Maintain driver profiles, contact details and state license records.", isMobile: false },
    { src: "/admin duty allocation.png", title: "6. Duty Allocation", desc: "Schedule driver and vehicle pairings without timing overlaps.", isMobile: false },
    { src: "/admin monitor.png", title: "7. Live Bus Monitoring", desc: "Real-time location tracking, signal state and last-update times.", isMobile: false },
    { src: "/driver login.png", title: "8. Driver Login (Mobile App)", desc: "Simplified mobile web authentication interface for assigned drivers.", isMobile: true },
    { src: "/driver db.png", title: "9. Driver Dashboard & Trip View", desc: "Live mobile trip control panel allowing drivers to check in at route checkpoints.", isMobile: true },
    { src: "/student page.png", title: "10. Student Tracker Portal", desc: "Instant mobile-friendly bus search and live stop status portal for students.", isMobile: true },
  ];

  const modules = [
    { title: "🔐 User Authentication", desc: "Secure login system for Admin and Drivers using Firebase Auth." },
    { title: "🚌 Bus Management", desc: "Add new buses, manage vehicle numbers and assign them to active routes." },
    { title: "👨‍✈️ Driver Management", desc: "Maintain driver records including name, age, phone number and driving license." },
    { title: "📍 Route Management", desc: "Set starting points, destination points and intermediate stops." },
    { title: "📅 Duty Allocation", desc: "Assign available drivers and buses without overlapping schedules." },
    { title: "📡 Live Fleet Tracking", desc: "Live bus location updates from driver stops and student search interface." },
  ];

  const tags = ["HTML5", "CSS3", "JavaScript", "Firebase Auth", "Firestore DB", "Firebase Hosting"];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans leading-relaxed">
      {/* Header */}
      <header className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white px-5 pt-12 pb-20 text-center rounded-b-[36px] shadow-lg shadow-emerald-500/10">
        <div className="max-w-6xl mx-auto mb-6 flex justify-start">
          <button
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white text-white hover:text-emerald-700 font-bold text-sm px-4 py-2 rounded-full border border-white/30 transition-all duration-200 cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </button>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
          Transport Management System
        </h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-emerald-50 font-medium">
          A web-based fleet management and live tracking portal for educational institutions using Firebase.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto -mt-10 px-4 pb-16 space-y-6">

        {/* KEY HIGHLIGHTS: ZERO COST & TRIGGER MECHANISM */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300/80 rounded-2xl p-6 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-emerald-500 text-white shadow-md">
                <DollarSign size={22} className="stroke-[2.5]" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                  Cost Efficiency
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
                  100% Zero Hardware Cost
                </h3>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mt-2.5">
              Eliminates expensive on-board physical GPS tracking units, SIM card monthly rentals and fleet installation charges. Runs entirely over standard mobile browsers without any hardware investment.
            </p>
            <div className="flex items-center gap-2 mt-3 text-xs font-bold text-emerald-800">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>No GPS Devices Required • Zero Installation & Maintenance Cost</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300/80 rounded-2xl p-6 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-md">
                <Zap size={22} className="stroke-[2.5]" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-md">
                  Smart Execution
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
                  Driver-Triggered Mechanism
                </h3>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mt-2.5">
              Employs an intelligent event-driven trigger workflow. Drivers tap verified milestone buttons (e.g., <em>Reached Panruti</em>), which immediately triggers a reactive state update in the cloud database to update live status.
            </p>
            <div className="flex items-center gap-2 mt-3 text-xs font-bold text-blue-800">
              <CheckCircle2 size={16} className="text-blue-600" />
              <span>One-Tap Checkpoint Events • Sub-second Realtime Sync</span>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
          <h2 className="text-xl font-bold text-emerald-600 mb-3 flex items-center gap-2">
            📌 Project Overview
          </h2>
          <p className="text-slate-600 text-[15px] mb-4">
            Managing college buses, routes and drivers manually using paper registers or spreadsheets often leads to errors and delays. This web application provides a simple, centralized solution to monitor college fleet operations online in real-time.
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span key={i} className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Modules */}
        <section className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
          <h2 className="text-xl font-bold text-emerald-600 mb-4 flex items-center gap-2">
            ⚙️ Key Modules
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {modules.map((m, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <h3 className="text-[15px] font-bold text-slate-800 mb-1.5">{m.title}</h3>
                <p className="text-xs text-slate-500">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Working Flow */}
        <section className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
          <h2 className="text-xl font-bold text-emerald-600 mb-3 flex items-center gap-2">
            💡 How It Works
          </h2>
          <div className="space-y-3 text-slate-600 text-[15px]">
            <p>
              <strong className="text-slate-800">1. Admin Setup:</strong> The administrator creates transit routes, registers buses and adds drivers through the Control Center dashboard.
            </p>
            <p>
              <strong className="text-slate-800">2. Duty Allocation:</strong> Admin pairs a driver with a specific bus. The system automatically prevents assigning the same bus or driver to multiple conflicting routes.
            </p>
            <p>
              <strong className="text-slate-800">3. Driver Action & Trigger Mechanism:</strong> When the driver reaches a stop, they trigger the update via a simple tap on the Driver Cockpit. This eliminates background battery drain and expensive GPS dongles.
            </p>
            <p>
              <strong className="text-slate-800">4. Live Monitoring:</strong> The trigger instantly broadcasts the stop name and timestamp across Firestore, letting administrators and students track the fleet in real time.
            </p>
          </div>
        </section>

        {/* Gallery Heading */}
        <div className="text-center pt-8 pb-3">
          <h2 className="text-2xl font-bold text-slate-900">📸 Project Screenshots</h2>
          <p className="text-slate-500 text-sm mt-1">Click on any screenshot to view in full size</p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {screenshots.map((shot, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col"
              onClick={() => setModalImg(shot.src)}
            >
              {shot.isMobile ? (
                <div className="w-full bg-slate-900 py-6 px-4 flex items-center justify-center border-b border-slate-100">
                  <div className="w-[210px] sm:w-[240px] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-xl border-4 border-slate-800 flex items-center justify-center">
                    <img
                      src={shot.src}
                      alt={shot.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ) : (
                <div className="w-full aspect-video bg-slate-100 overflow-hidden border-b border-slate-100 flex items-center justify-center">
                  <img
                    src={shot.src}
                    alt={shot.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between">
                <h4 className="text-base font-extrabold text-slate-900 mb-1">{shot.title}</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{shot.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal Preview */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setModalImg(null)}
        >
          <button
  onClick={() => navigate(proj.live)}
  className="shrink-0 text-zinc-400 hover:text-white transition p-1 cursor-pointer"
  aria-label="View Project Documentation"
>
  <ArrowUpRight size={18} />
</button>
          <img
            src={modalImg}
            alt="Enlarged preview"
            className="max-w-[95%] max-h-[90vh] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Footer */}
      <footer className="text-center py-8 text-xs text-slate-500 border-t border-slate-200">
        Project Case Study • Web-Based Transport Management System
      </footer>
    </div>
  );
}