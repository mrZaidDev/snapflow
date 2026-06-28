import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testemonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}