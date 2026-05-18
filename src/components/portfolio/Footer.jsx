export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Kevin Jabar. All rights reserved.</p>
        <div className="flex items-center gap-5">
          {["GitHub", "LinkedIn", "Twitter"].map((link) => (
            <a key={link} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
