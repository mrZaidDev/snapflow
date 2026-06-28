export default function Hero() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto text-center">

        <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
          <span className="text-white/50 text-sm">AI-powered writing assistant</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          Write better content,{" "}
          <span className="text-white/30">10x faster</span>{" "}
          with AI.
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Snapflow helps startups, creators, and marketers generate
          high-quality content in seconds. No writer's block. No wasted hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#" className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm hover:bg-white/90 transition">
            Start writing for free
          </a>
          <a href="#howitworks" className="w-full sm:w-auto border border-white/10 text-white/60 px-8 py-3.5 rounded-full text-sm hover:border-white/30 hover:text-white transition">
            See how it works →
          </a>
        </div>

        <p className="text-white/30 text-sm mb-6">
          Trusted by 12,000+ writers and marketers worldwide
        </p>

        <div className="flex items-center justify-center gap-2">
          {["JK", "AM", "SR", "TL", "BO"].map((initials, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/60 text-xs font-medium">
              {initials}
            </div>
          ))}
          <span className="ml-2 text-white/30 text-sm">+12k users</span>
        </div>

        <div className="mt-16 border border-white/10 rounded-2xl bg-white/5 p-6 text-left">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
          </div>
          <div className="space-y-3">
            <div className="h-3 bg-white/10 rounded-full w-3/4"></div>
            <div className="h-3 bg-white/10 rounded-full w-full"></div>
            <div className="h-3 bg-white/10 rounded-full w-5/6"></div>
            <div className="h-3 bg-white/10 rounded-full w-2/3"></div>
            <div className="mt-4 h-8 bg-white/10 rounded-lg w-32"></div>
          </div>
        </div>

      </div>
    </section>
  );
}