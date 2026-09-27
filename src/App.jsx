import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  GraduationCap,
  Briefcase,
  Award,
  Code2,
  FolderGit2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  personalInfo,
  education,
  skills,
  projects,
  internships,
  achievements,
} from "./data";

function LinkedinIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const totalSlides = 6;

const slidePhotos = [
  "/slide-0.png",
  "/slide-1.png",
  "/slide-2.png",
  "/slide-3.png",
  "/slide-4.png",
  "/slide-5.png",
];

const pageVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 280, damping: 30 },
      opacity: { duration: 0.3 },
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    transition: { duration: 0.2 },
  }),
};

const photoVariants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  exit: { opacity: 0, scale: 1.02, transition: { duration: 0.2, ease: "easeIn" } },
};

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [pageState, setPageState] = useState([0, 0]);

  useEffect(() => {
    if (location.state?.targetSlide !== undefined) {
      const slideIdx = location.state.targetSlide;
      setPageState([slideIdx, 1]);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const page = pageState[0];
  const direction = pageState[1];

  const paginate = (newDirection) => {
    const nextIndex = page + newDirection;
    if (nextIndex >= 0 && nextIndex < totalSlides) {
      setPageState([nextIndex, newDirection]);
    }
  };

  const currentPhoto = slidePhotos[page];

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    personalInfo.location
  )}`;

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background:
          "radial-gradient(circle at 82% 55%, #a81313 0%, #470606 32%, #140303 60%, #080808 90%)",
        backgroundColor: "#080808",
      }}
      className="h-screen w-screen overflow-hidden flex flex-col md:flex-row text-white selection:bg-[#e11d48] selection:text-white select-none relative"
    >
      {/* LEFT CONTENT AREA */}
      <div className="w-full md:w-[58%] h-[60vh] md:h-full relative overflow-hidden flex flex-col justify-between z-20 order-2 md:order-1">
        <div className="relative w-full h-full flex-1 overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full flex flex-col justify-center px-6 sm:px-12 md:pl-16 md:pr-4 lg:pl-20 lg:pr-6 pt-6 pb-28 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {/* SLIDE 0: Hero / About */}
              {page === 0 && (
                <div className="space-y-6 max-w-2xl w-full">
                  <div className="space-y-2">
                    <h1
                      style={{ fontFamily: "'Anton', sans-serif" }}
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-white leading-none"
                    >
                      {personalInfo.name}
                    </h1>
                    <p
                      style={{ fontFamily: "'Anton', sans-serif" }}
                      className="text-2xl sm:text-3xl uppercase tracking-wide text-[#f43f5e]"
                    >
                      {personalInfo.role}
                    </p>
                  </div>

                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                    {personalInfo.about}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2 text-xs sm:text-sm">
                    <a
                      href={personalInfo.email}
                      className="px-6 py-2.5 rounded-full bg-[#b91c1c] hover:bg-[#dc2626] text-white font-semibold shadow-lg shadow-red-950/60 transition duration-200 cursor-pointer"
                    >
                      Email Me
                    </a>

                    <a
                      href={personalInfo.phone}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition duration-200"
                    >
                      <Phone size={15} className="text-[#f43f5e]" />
                      <span>{personalInfo.phone.replace("tel:", "")}</span>
                    </a>

                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition duration-200"
                    >
                      <LinkedinIcon size={15} />
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition duration-200"
                    >
                      <MapPin size={15} className="text-[#f43f5e]" />
                      <span>{personalInfo.location}</span>
                    </a>
                  </div>
                </div>
              )}

              {/* SLIDE 1: Skills & Tech */}
              {page === 1 && (
                <div className="max-w-2xl w-full space-y-6">
                  <div className="border-b border-white/10 pb-3">
                    <h2
                      style={{ fontFamily: "'Anton', sans-serif" }}
                      className="text-4xl sm:text-5xl uppercase tracking-wider text-white"
                    >
                      Skills & Tech
                    </h2>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-widest text-[#f43f5e] font-bold">
                      Technical Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skills.technical.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3.5 py-1.5 bg-black/40 text-zinc-200 font-medium text-xs sm:text-sm rounded-lg border border-white/10 hover:border-[#f43f5e]/60 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs uppercase tracking-widest text-[#f43f5e] font-bold">
                      Core Strengths
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skills.soft.map((soft, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 text-zinc-400 text-xs sm:text-sm rounded-md border border-white/5"
                        >
                          {soft}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 2: Education */}
              {page === 2 && (
                <div className="max-w-2xl w-full space-y-5">
                  <div className="border-b border-white/10 pb-3">
                    <h2
                      style={{ fontFamily: "'Anton', sans-serif" }}
                      className="text-4xl sm:text-5xl uppercase tracking-wider text-white"
                    >
                      Education
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {education.map((edu, idx) => (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
                      >
                        <div className="flex flex-row items-center justify-between gap-3">
                          <h3 className="font-bold text-white text-base sm:text-lg">
                            {edu.degree}
                          </h3>
                          <span className="shrink-0 px-3 py-0.5 rounded-full bg-[#b91c1c]/25 border border-[#b91c1c]/40 text-[#fca5a5] text-xs font-semibold">
                            {edu.period} • {edu.score}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-normal">
                          {edu.institution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE 3: Internship Experience */}
              {page === 3 && (
                <div className="max-w-2xl w-full space-y-5">
                  <div className="border-b border-white/10 pb-3">
                    <h2
                      style={{ fontFamily: "'Anton', sans-serif" }}
                      className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-white whitespace-nowrap"
                    >
                      Internship Experience
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {internships.map((intern, idx) => (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#f43f5e]/40 transition duration-200"
                      >
                        <div className="flex flex-row items-center justify-between gap-3">
                          <h3 className="font-bold text-white text-base sm:text-lg truncate">
                            {intern.role}
                          </h3>
                          <span className="shrink-0 text-xs font-bold px-3 py-1 rounded-md bg-[#b91c1c]/30 text-[#fca5a5] border border-[#b91c1c]/40 whitespace-nowrap">
                            {intern.company}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed font-normal">
                          {intern.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE 4: Projects */}
              {page === 4 && (
                <div className="max-w-2xl w-full space-y-4">
                  <div className="border-b border-white/10 pb-2.5">
                    <h2
                      style={{ fontFamily: "'Anton', sans-serif" }}
                      className="text-4xl sm:text-5xl uppercase tracking-wider text-white"
                    >
                      Projects
                    </h2>
                  </div>

                  <div className="grid gap-3">
                    {projects.map((proj, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#f43f5e]/50 transition duration-200 group"
                      >
                        <div className="flex justify-between items-center gap-4">
                          <h3 className="font-bold text-white text-base sm:text-lg truncate">
                            {proj.title}
                          </h3>
                          <motion.button
                            onClick={() => navigate(proj.live)}
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="shrink-0 text-white transition p-2 cursor-pointer bg-[#b91c1c] hover:bg-[#dc2626] rounded-lg border border-[#ef4444]/60 flex items-center gap-1.5 text-xs font-semibold shadow-[0_0_15px_rgba(185,28,28,0.7)] group-hover:scale-105 duration-200"
                            aria-label="View Project Documentation"
                          >
                            <span>View Docs</span>
                            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </motion.button>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-400 my-1.5 leading-relaxed font-normal">
                          {proj.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {proj.tech.map((t, i) => (
                            <span
                              key={i}
                              className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-white/5 text-zinc-300 border border-white/5"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE 5: Achievements */}
              {page === 5 && (
                <div className="max-w-2xl w-full space-y-4">
                  <div className="border-b border-white/10 pb-2.5">
                    <h2
                      style={{ fontFamily: "'Anton', sans-serif" }}
                      className="text-4xl sm:text-5xl uppercase tracking-wider text-white"
                    >
                      Achievements
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {achievements.map((ach, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#f43f5e]/50 transition duration-200"
                      >
                        <span className="text-xs font-bold text-[#f43f5e] uppercase tracking-wider">
                          {ach.type}
                        </span>
                        <h3 className="font-bold text-sm sm:text-base text-white mt-0.5 leading-snug">
                          {ach.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                          {ach.venue}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOTTOM NAVIGATION WITH CLICK INDICATION */}
        <div className="absolute bottom-6 inset-x-0 px-6 sm:px-12 md:pl-16 md:pr-4 lg:pl-20 lg:pr-6 flex items-center justify-between z-30 pointer-events-none">
          <div className="relative flex items-center">
            {page > 0 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: [0.4, 1, 0.4], x: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -top-8 left-0 bg-[#b91c1c] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-lg whitespace-nowrap border border-red-400/50 flex items-center gap-1"
              >
                <span>Click to Navigate</span>
                <span className="text-xs">←</span>
              </motion.div>
            )}

            <button
              onClick={() => paginate(-1)}
              className={`p-3 rounded-full border border-white/15 bg-black/50 text-white shadow-xl flex items-center justify-center hover:bg-[#b91c1c] hover:border-[#b91c1c] transition-all duration-200 pointer-events-auto cursor-pointer active:scale-95 ${
                page === 0 ? "invisible pointer-events-none" : "visible"
              }`}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={18} />
            </button>
          </div>

          <div className="flex items-center gap-2 pointer-events-auto px-4 py-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-md shadow-xl">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (i !== page) {
                    setPageState([i, i > page ? 1 : -1]);
                  }
                }}
                className="cursor-pointer focus:outline-none"
                aria-label={`Go to slide ${i + 1}`}
              >
                <motion.div
                  animate={{
                    width: page === i ? 24 : 6,
                    backgroundColor: page === i ? "#b91c1c" : "rgba(255,255,255,0.25)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-2 rounded-full"
                />
              </button>
            ))}
          </div>

          <div className="relative flex items-center">
            {page < totalSlides - 1 && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: [0.4, 1, 0.4], x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -top-8 right-0 bg-[#b91c1c] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-lg whitespace-nowrap border border-red-400/50 flex items-center gap-1"
              >
                <span>Click to Navigate</span>
                <span className="text-xs">→</span>
              </motion.div>
            )}

            <button
              onClick={() => paginate(1)}
              className={`p-3 rounded-full border border-white/15 bg-black/50 text-white shadow-xl flex items-center justify-center hover:bg-[#b91c1c] hover:border-[#b91c1c] transition-all duration-200 pointer-events-auto cursor-pointer active:scale-95 ${
                page === totalSlides - 1 ? "invisible pointer-events-none" : "visible"
              }`}
              aria-label="Next Slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT PHOTO AREA */}
      <div className="w-full md:w-[42%] h-[40vh] md:h-full flex items-end justify-end shrink-0 relative overflow-hidden z-10 order-1 md:order-2">
        <div className="relative w-full h-[94%] md:h-[97%] flex items-end justify-end">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentPhoto}
              src={currentPhoto}
              alt={`${personalInfo.name} - slide ${page + 1}`}
              variants={photoVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/slide-0.png";
              }}
              className="h-full w-auto max-w-full object-contain object-right-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] select-none pointer-events-none"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}