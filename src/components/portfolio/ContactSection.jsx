import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Mail, Github, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !message) return;

    setSending(true);

    try {
      await emailjs.send(
        "service_q94e8cc",
        "template_m46wn9n",
        {
          email: email,
          message: message,
          name: email,
        },
        "WHFLVUVCsrxXIrvOi",
      );

      setSent(true);
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (error) {
      console.log("EMAIL ERROR:", error);
      console.log("STATUS:", error.status);
      console.log("TEXT:", error.text);

      alert(error.text || "Failed to send message");
    }

    setSending(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28" aria-label="Contact">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Get In Touch</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">Let's work together</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">Have a project in mind or just want to say hi? My inbox is always open. I'll get back to you as soon as I can.</p>
            <div className="space-y-4">
              <a href="mailto:kevinjabar07@gmail.com" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors group">
                <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                  <Mail size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                kevinjabar07@gmail.com
              </a>
              <a href="https://github.com/KevinJabar" target="_blank" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors group">
                <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                  <Github size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                github.com/KevinJabar
              </a>
              <a href="https://linkedin.com/in/kevin-jabar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors group">
                <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                  <Linkedin size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                linkedin.com/in/kevin-jabar
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm text-foreground mb-1.5 font-medium">
                  Your Email
                </label>
                <Input name="email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required className="h-10 rounded-lg border-border focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-foreground mb-1.5 font-medium">
                  Message
                </label>
                <Textarea
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  required
                  rows={4}
                  className="rounded-lg border-border resize-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                disabled={sending || sent}
                className="w-full h-10 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {sent ? (
                  <>
                    <Check size={15} /> Sent!
                  </>
                ) : sending ? (
                  "Sending..."
                ) : (
                  <>
                    {" "}
                    Send Message <ArrowRight size={15} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
