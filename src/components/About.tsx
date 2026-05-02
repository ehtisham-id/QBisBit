import AnimatedSection from './AnimatedSection';
import { Zap, Target, Users } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: 'Innovation First',
    desc: 'We build real products, tackle real problems, and iterate fast — just like the startups we aspire to become.',
  },
  {
    icon: Target,
    title: 'Mission-Driven',
    desc: 'Q BISBIT exists to close the gap between education and industry by creating a real-world tech environment inside campus.',
  },
  {
    icon: Users,
    title: 'Students → Founders',
    desc: 'Every member is on a journey. You come as a student, you leave as a builder — with equity, experience, and a real company behind you.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px]" style={{ background: 'rgba(14,165,233,0.04)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <AnimatedSection delay={0}>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-sky-400 mb-4">
                About Q BISBIT
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Where Students{' '}
                <span className="text-sky-400">Become</span>{' '}
                Founders
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6">
                Q BISBIT — Quaidians Builders of Innovation, Software &amp; Business
                in Tech — is a student-led tech ecosystem designed to transform
                ambitious students into real company founders.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
                We operate like a real startup studio: structured teams, real
                client projects, equity splits, and a clear pipeline from
                training to company formation. This isn't a club. This is your
                launchpad.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex items-center gap-3 p-4 rounded-2xl border" style={{ background: 'rgba(14,165,233,0.06)', borderColor: 'rgba(14,165,233,0.15)' }}>
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sky-400 text-lg font-black">Q</span>
                </div>
                <p className="text-sm text-gray-300 font-medium">
                  "Code Today. Lead Tomorrow." — The Q BISBIT Philosophy
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Pillars */}
          <div className="space-y-4">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={0.1 * (i + 1)} direction="right">
                <div
                  className="flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 group hover:border-sky-500/30 cursor-default"
                  style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/25 transition-colors duration-300">
                    <pillar.icon size={18} className="text-sky-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 text-sm sm:text-base">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
