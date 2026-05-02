import AnimatedSection from './AnimatedSection';
import { Building2, FlaskConical, Layers } from 'lucide-react';

const nodes = [
  {
    icon: Building2,
    title: 'Q BISBIT Society',
    subtitle: 'Community Layer',
    desc: 'The base of everything. A vibrant community of builders, dreamers, and doers. Events, workshops, mentorship, and culture.',
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.15)',
  },
  {
    icon: Layers,
    title: 'Q BISBIT Studio',
    subtitle: 'Product Layer',
    desc: 'Where ideas become products. Teams collaborate on real client projects and internal SaaS products under a startup framework.',
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.15)',
  },
  {
    icon: FlaskConical,
    title: 'Q BISBIT Labs',
    subtitle: 'Company Layer',
    desc: 'The frontier. Top performers from Studio form independent companies with real equity, vesting schedules, and investor-ready decks.',
    color: '#0ea5e9',
    glow: 'rgba(14,165,233,0.15)',
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-40" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[140px]" style={{ background: 'rgba(14,165,233,0.04)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <AnimatedSection delay={0}>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-sky-400 mb-4">
              The Ecosystem
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Three Layers.{' '}
              <span className="text-sky-400">One System.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Q BISBIT is structured as an interconnected ecosystem — each layer
              feeds into the next, creating a clear path from community to company.
            </p>
          </AnimatedSection>
        </div>

        {/* Flow diagram */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-0">
          {nodes.map((node, i) => (
            <div key={node.title} className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
              <AnimatedSection delay={0.1 * (i + 1)} className="w-full lg:w-72 xl:w-80">
                <div
                  className="relative group p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-default hover:scale-[1.02]"
                  style={{
                    background: `linear-gradient(135deg, ${node.glow}, rgba(0,0,0,0))`,
                    borderColor: 'rgba(255,255,255,0.08)',
                  }}
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{ background: node.glow }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                      style={{ background: `${node.glow}` }}
                    >
                      <node.icon size={22} style={{ color: node.color }} />
                    </div>

                    {/* Step number */}
                    <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: node.color }}>
                      Layer {String(i + 1).padStart(2, '0')}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {node.title}
                    </h3>
                    <div className="text-xs text-gray-500 font-medium mb-3">
                      {node.subtitle}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Connector arrow */}
              {i < nodes.length - 1 && (
                <AnimatedSection delay={0.1 * (i + 1) + 0.15} className="flex items-center justify-center my-4 lg:my-0 lg:mx-4">
                  <div className="flex flex-col lg:flex-row items-center gap-1 text-sky-500/50">
                    {/* Vertical on mobile, horizontal on desktop */}
                    <div className="hidden lg:block w-12 h-px bg-gradient-to-r from-sky-500/50 to-sky-500/20" />
                    <div className="lg:hidden h-8 w-px bg-gradient-to-b from-sky-500/50 to-sky-500/20" />
                    <svg className="hidden lg:block" width="8" height="12" viewBox="0 0 8 12" fill="none">
                      <path d="M1 1L7 6L1 11" stroke="rgba(14,165,233,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className="lg:hidden" width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1L6 7L11 1" stroke="rgba(14,165,233,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </AnimatedSection>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
