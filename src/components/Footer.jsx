const links = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy", "Terms", "Cookies"],
};

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="text-white text-xl font-bold tracking-tight">
              Snap<span className="text-white/30">flow</span>
            </a>
            <p className="text-white/30 text-sm mt-4 leading-relaxed">
              AI-powered writing for startups, creators, and marketers.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-white text-sm font-medium mb-4">{category}</p>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/30 text-sm hover:text-white transition">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">© 2025 Snapflow. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/20 text-xs hover:text-white/50 transition">Twitter</a>
            <a href="#" className="text-white/20 text-xs hover:text-white/50 transition">LinkedIn</a>
            <a href="#" className="text-white/20 text-xs hover:text-white/50 transition">GitHub</a>
          </div>
        </div>

      </div>
    </footer>
  );
}