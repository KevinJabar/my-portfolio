import { motion } from "framer-motion";

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "3", label: "Projects Delivered" },
  // { value: "98", label: "Lighthouse Score" },
  { value: "3+", label: "Happy Clients" },
];

const skills = ["React", "Laravel", "MySql", "Tailwind CSS", "Docker"];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted/40" aria-label="About">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">About Me</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-5">Passionate about building things that matter</h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>I'm a full-stack web developer who loves turning ideas into polished, user-friendly products. I care deeply about performance, accessibility, and clean code.</p>
              <p>With 7+ years of experience, I've worked with startups and enterprises alike — always bringing the same level of craft and attention to detail to every project.</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="font-mono text-xs px-3 py-1.5 rounded-full bg-white border border-border text-muted-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="p-5 rounded-2xl bg-white border border-border">
                <p className="text-3xl font-semibold text-foreground tracking-tight">{stat.value}</p>
                <p className="font-mono text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
