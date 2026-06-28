const steps = [
  {
    number: "01",
    title: "Describe your content",
    description: "Tell Snapflow what you need — a blog post, ad copy, email, or social caption. Just a few words is enough.",
  },
  {
    number: "02",
    title: "AI generates a draft",
    description: "Our AI instantly produces a high-quality first draft tailored to your brand voice and audience.",
  },
  {
    number: "03",
    title: "Edit and publish",
    description: "Refine the output with our clean editor, then copy or export it wherever you need it.",
  },
];

export default function HowItWorks() {
  return (
    <section id="howitworks" className="bg-black py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-xl mb-16">
          <p className="text-white/30 text-sm uppercase tracking-widest mb-4">How it works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            From idea to published in 60 seconds.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition">
              <p className="text-white/20 text-4xl font-bold mb-6">{step.number}</p>
              <h3 className="text-white text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}