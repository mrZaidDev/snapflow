const features = [
  {
    icon: "⚡",
    title: "Lightning fast output",
    description: "Generate a full blog post, email sequence, or landing page copy in under 10 seconds.",
  },
  {
    icon: "🎯",
    title: "Brand voice training",
    description: "Train Snapflow on your existing content so every output sounds exactly like you.",
  },
  {
    icon: "🌍",
    title: "50+ languages",
    description: "Write in English, Urdu, Spanish, French, and 47 more languages with native-level quality.",
  },
  {
    icon: "📋",
    title: "70+ content templates",
    description: "From cold emails to Twitter threads — pick a template and fill in the blanks.",
  },
  {
    icon: "🔒",
    title: "Private and secure",
    description: "Your content is never used to train other models. What you write stays yours.",
  },
  {
    icon: "🔗",
    title: "Integrations",
    description: "Connect with Notion, WordPress, Webflow, and more with one click.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-black py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-xl mb-16">
          <p className="text-white/30 text-sm uppercase tracking-widest mb-4">Features</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Everything you need to write at scale.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition">
              <div className="text-3xl mb-5">{feature.icon}</div>
              <h3 className="text-white font-semibold text-base mb-2">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}