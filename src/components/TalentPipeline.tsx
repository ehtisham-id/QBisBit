import AnimatedSection from './AnimatedSection';
import { GraduationCap, BookOpen, CheckCircle, Users, Rocket } from 'lucide-react';

const steps = [
  {
    icon: GraduationCap,
    step: '01',
    title: 'Students',
    desc: 'Ambitious students from any discipline apply to join Q BISBIT. Passion for tech and building is all that\'s required.',
    color: '#38bdf8',
  },
  {
    icon: BookOpen,
    step: '02',
    title: 'Training',
    desc: 'Members go through structured training in their chosen wing — hands-on projects, workshops, and real mentorship.',
    color: '#06b6d4',
  },
  {
    icon: CheckCircle,
    step: '03',
    title: 'Selection',
    desc: 'Top performers are selected for advanced Studio projects based on output, collaboration, and initiative.',
    color: '#0ea5e9',
  },
  {
    icon: Users,
    step: '04',
    title: 'Teams',
    desc: 'Selected members form cross-functional product teams — engineers, designers, marketers, and business minds working together.',
    color: '#818cf8',
  },
  {
    icon: Rocket,
    step: '05',
    title: 'Company Formation',
    desc: 'High-performance teams graduate to Labs, forming real companies with equity allocation, legal structure, and investor access.',
    color: '#a78bfa',
  },
];

export default function TalentPipeline() {
  return (
    <section id="pipeline" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-30" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px]" style={{ background: 'rgba(129,140,248,0.05)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <AnimatedSection delay={0}>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-sky-400 mb-4">
              Talent Pipeline
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Your Path From{' '}
              <span className="text-sky-400">Student to Founder</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              A structured, transparent journey — every step is designed to push
              you closer to building and owning something real.
            </p>
          </AnimatedSection>
        </div>

        {/* Pipeline flow */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.3), rgba(167,139,250,0.3), transparent)' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <AnimatedSection key={step.step} delay={0.08 * i}>
                <div className="relative flex flex-col items-center text-center group cursor-default">
                  {/* Step number bubble */}
                  <div
                    className="relative z-10 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:-translate-y-1"
                    style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}
                  >
                    <step.icon size={22} style={{ color: step.color }} />
                  </div>

                  {/* Step label */}
                  <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: step.color }}>
                    Step {step.step}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
