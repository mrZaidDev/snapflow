import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="/" className="text-white text-xl font-bold tracking-tight">
          Snap<span className="text-white/40">flow</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <li><a href="#howitworks" className="hover:text-white transition">How it works</a></li>
          <li><a href="#features" className="hover:text-white transition">Features</a></li>
          <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
          <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm text-white/60 hover:text-white transition">Log in</a>
          <a href="#" className="text-sm bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-white/90 transition">
            Get started free
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/60 hover:text-white transition">
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-6">
          <ul className="flex flex-col gap-4 text-sm text-white/60">
            <li><a href="#howitworks" onClick={() => setOpen(false)} className="hover:text-white transition">How it works</a></li>
            <li><a href="#features" onClick={() => setOpen(false)} className="hover:text-white transition">Features</a></li>
            <li><a href="#pricing" onClick={() => setOpen(false)} className="hover:text-white transition">Pricing</a></li>
            <li><a href="#testimonials" onClick={() => setOpen(false)} className="hover:text-white transition">Testimonials</a></li>
          </ul>
          <div className="flex flex-col gap-3">
            <a href="#" className="text-sm text-white/60 hover:text-white transition">Log in</a>
            <a href="#" className="text-sm bg-white text-black px-4 py-2 rounded-full font-medium text-center hover:bg-white/90 transition">
              Get started free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}