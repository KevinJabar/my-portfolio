import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-sm font-semibold text-foreground tracking-tight focus:outline-none focus:ring-2 focus:ring-primary rounded">
          Kevin Jabar
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button key={link.label} onClick={() => handleClick(link.href)} className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none">
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#contact")}
            className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Hire Me
          </button>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-1.5 text-foreground rounded focus:outline-none focus:ring-2 focus:ring-primary">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-b border-border overflow-hidden">
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button key={link.label} onClick={() => handleClick(link.href)} className="text-left text-base text-foreground focus:outline-none">
                  {link.label}
                </button>
              ))}
              <button onClick={() => handleClick("#contact")} className="mt-1 text-sm font-medium bg-primary text-primary-foreground px-4 py-2.5 rounded-lg w-fit focus:outline-none">
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
