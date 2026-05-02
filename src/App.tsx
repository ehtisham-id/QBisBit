import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Ecosystem from "./components/Ecosystem";
import Departments from "./components/Departments";
import TalentPipeline from "./components/TalentPipeline";
import BusinessModel from "./components/BusinessModel";
import EquityModel from "./components/EquityModel";
import Team from "./components/Team";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import founderPhoto from './assets/shahzad-hussain.jpeg';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ecosystem />
        <Departments />
        <TalentPipeline />
        <BusinessModel />
        <EquityModel />
        <Team />

        <section id="founder" className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-80 rounded-full blur-[120px]"
              style={{ background: "rgba(14,165,233,0.08)" }}
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="rounded-3xl border border-white/10 overflow-hidden bg-white/5">
                <img
                  src={founderPhoto}
                  alt="Shahzad Hussain, Founder"
                  className="w-full h-full object-cover max-h-[540px]"
                />
              </div>
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-sky-400 mb-4">
                  Founder Spotlight
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                  Shahzad Hussain
                </h2>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4">
                  Shahzad Hussain leads Q BISBIT with a clear mission: transform
                  students into builders through real execution, not theory.
                </p>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  Under his leadership, the ecosystem combines product development,
                  business strategy, and community building to create founder-ready teams.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
