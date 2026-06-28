const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "Perfect for trying Snapflow out.",
    features: ["5,000 words per month", "10 content templates", "1 user seat", "Email support"],
    cta: "Get started free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For creators and freelancers who write daily.",
    features: ["Unlimited words", "70+ content templates", "Brand voice training", "Priority support", "All integrations"],
    cta: "Start Pro trial",
    highlight: true,
  },
  {
    name: "Team",
    price: "$79",
    period: "per month",
    description: "For growing teams that need to move fast.",
    features: ["Everything in Pro", "5 user seats", "Team workspace", "Admin dashboard", "Dedicated support"],
    cta: "Start Team trial",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-black py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-xl mb-16">
          <p className="text-white/30 text-sm uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Simple pricing, no surprises.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div key={i} className={`rounded-2xl p-8 flex flex-col gap-6 border transition ${plan.highlight ? "bg-white text-black border-white" : "bg-transparent text-white border-white/10 hover:border-white/20"}`}>

              <div>
                <p className={`text-sm font-medium mb-1 ${plan.highlight ? "text-black/50" : "text-white/40"}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`text-sm mb-1 ${plan.highlight ? "text-black/50" : "text-white/40"}`}>/{plan.period}</span>
                </div>
                <p className={`text-sm mt-2 ${plan.highlight ? "text-black/50" : "text-white/40"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <svg className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? "text-black" : "text-white/40"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlight ? "text-black/80" : "text-white/60"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#" className={`text-center text-sm font-medium px-6 py-3 rounded-full transition ${plan.highlight ? "bg-black text-white hover:bg-black/80" : "border border-white/10 text-white hover:border-white/30"}`}>
                {plan.cta}
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}