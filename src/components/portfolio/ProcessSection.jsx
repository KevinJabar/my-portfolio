import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your goals, users, and constraints to define a clear strategic direction.",
  },
  {
    number: "02",
    title: "Design",
    description: "Crafting wireframes, prototypes, and visual designs that balance beauty with usability.",
  },
  {
    number: "03",
    title: "Build",
    description: "Writing clean, performant code that brings the design to life across all devices.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Deploying, testing, and iterating — ensuring everything works flawlessly in production.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28" aria-label="Process">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">How I Work</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">My Process</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-6 rounded-2xl border border-border bg-white">
              <span className="font-mono text-xs text-primary font-medium mb-4 block">{step.number}</span>
              <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
