const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Content Marketer, Growthly",
    body: "Snapflow cut my content production time in half. I used to spend 3 hours on a blog post — now it takes 30 minutes.",
    initials: "SM",
  },
  {
    name: "James Okafor",
    role: "Founder, LaunchStack",
    body: "We use Snapflow for all our product copy, emails, and social posts. It sounds exactly like us — not like a robot.",
    initials: "JO",
  },
  {
    name: "Priya Sharma",
    role: "Freelance Copywriter",
    body: "I was skeptical about AI writing tools but Snapflow is genuinely different. The output quality is miles ahead of anything else I have tried.",
    initials: "PS",
  },
  {
    name: "Tom Bergmann",
    role: "Marketing Lead, Finstack",
    body: "Our team of 4 replaced two freelance writers with Snapflow. The ROI was immediate.",
    initials: "TB",
  },
  {
    name: "Aisha Kamara",
    role: "Blogger and Creator",
    body: "I publish 5 articles a week now. Before Snapflow, 2 was my max. It has completely changed how I work.",
    initials: "AK",
  },
  {
    name: "Lucas Ferreira",
    role: "E-commerce Owner",
    body: "Product descriptions, ad copy, email campaigns — Snapflow handles all of it. My conversion rate went up 23%.",
    initials: "LF",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-xl mb-16">
          <p className="text-white/30 text-sm uppercase tracking-widest mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Loved by writers worldwide.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition flex flex-col gap-6">
              <p className="text-white/60 text-sm leading-relaxed">"{t.body}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-xs font-medium flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-white/30 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}