import { motion } from "framer-motion";

export default function ProjectCard({ project, index, isReversed }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 items-center ${isReversed ? "lg:direction-rtl" : ""}`}
    >
      {/* Image */}
      <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
        <div className="group relative overflow-hidden rounded-2xl bg-muted">
          <img src={project.image} alt={project.title} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
        </div>
      </div>

      {/* Brief */}
      <div className={`lg:col-span-4 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
        <p className="font-mono text-xs text-muted-foreground mb-3">
          {project.number} — {project.year}
        </p>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tighter text-foreground mb-4">{project.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

        <div className="space-y-4">
          <div>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">Challenge</p>
            <p className="text-sm text-foreground/80">{project.challenge}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="font-mono text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">Result</p>
            <p className="text-sm text-primary font-medium">{project.result}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
