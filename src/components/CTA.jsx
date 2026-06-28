export default function CTA() {
  return (
    <section className="bg-black py-24 px-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Start writing smarter today.
        </h2>

        <p className="text-white/40 text-lg mb-10 leading-relaxed">
          Join 12,000+ writers who use Snapflow to create content faster, without sacrificing quality.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm hover:bg-white/90 transition">
            Get started for free
          </a>
          <a href="#pricing" className="w-full sm:w-auto border border-white/10 text-white/60 px-8 py-3.5 rounded-full text-sm hover:border-white/30 hover:text-white transition">
            See pricing →
          </a>
        </div>

        <p className="text-white/20 text-xs mt-8">
          No credit card required. Free plan available forever.
        </p>

      </div>
    </section>
  );
}