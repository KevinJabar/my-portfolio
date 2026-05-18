import { motion } from "framer-motion";

const HERO_IMG = "https://media.base44.com/images/public/6a05105b0a2d01410ae1ca2e/33f337882_generated_cdb122db.png";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center" aria-label="Hero">
      <div className="max-w-5xl mx-auto px-6 w-full pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm text-muted-foreground">Available for new projects</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl font-semibold text-foreground leading-tight tracking-tight">
              Hi, I'm Kevin —<br />a <span className="text-primary">Web Developer</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="mt-5 text-base text-muted-foreground leading-relaxed max-w-md">
              I build fast, accessible, and beautiful web experiences. From design systems to full-stack apps — I care about every detail.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }} className="mt-8 flex items-center gap-3">
              <button
                onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                See My Work
              </button>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-5 py-2.5 rounded-lg text-sm font-medium border border-border text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Contact Me
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-10 flex flex-wrap gap-2">
              {["React", "Laravel", "MySql", "Docker", "Tailwind CSS"].map((t) => (
                <span key={t} className="font-mono text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border">
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <img src={HERO_IMG} alt="Abstract digital geometry" className="w-full object-cover aspect-[4/5]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
