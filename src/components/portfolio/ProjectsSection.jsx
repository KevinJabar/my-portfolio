import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    year: "2026",
    title: "Personal Porfolio",
    description:
      "A modern and responsive personal portfolio website that showcases profile information, skills, projects, and contact details professionally. Built using React, Vite, and Tailwind CSS with a focus on performance, clean design, and interactive user experience.",
    stack: ["React", "TypeScript", "D3.js", "WebSocket", "PostgreSQL"],
    result: "40% faster decisions. 98 Lighthouse score.",
    image: "project-1.png",
  },
  {
    number: "02",
    year: "2024",
    title: "IR Information System",
    description:
      "Web-based document management system built with Laravel, featuring document organization, file storage, and automated Microsoft Office file generation. The system supports generating Word and Excel documents dynamically to improve workflow efficiency and document handling.",
    stack: ["Next.js", "Tailwind", "Stripe", "Prisma", "Redis"],
    result: "32% increase in conversion rate.",
    image: "project-2.png",
  },
  {
    number: "03",
    year: "2026",
    title: "E-Ticket Events",
    description:
      "Web-based e-ticket sales system for running events, designed to simplify ticket booking, participant registration, and payment processing. The platform provides digital ticket generation, event management, and a responsive user experience for both organizers and participants.",
    stack: ["React", "WebRTC", "Canvas API", "Node.js"],
    result: "Adopted by 12K+ teams. 99.97% uptime.",
    image: "project-3.png",
  },
];

export default function ProjectsSection() {
  return (
    <section id="work" className="py-20 md:py-28 bg-muted/40" aria-label="Projects">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Selected Work</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">Featured Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.number} · {project.year}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.stack.map((t) => (
                    <span key={t} className="font-mono text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-primary font-medium">{project.result}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
