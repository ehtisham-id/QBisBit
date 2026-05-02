import AnimatedSection from './AnimatedSection';

const splits = [
  {
    label: 'Founding Team',
    percentage: 40,
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.2)',
    desc: 'Core founders who ideate, build, and lead the company from inception.',
  },
  {
    label: 'Q BISBIT Org',
    percentage: 30,
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.2)',
    desc: 'Organization stake that funds the ecosystem, mentorship, and shared infrastructure.',
  },
  {
    label: 'Future Investors',
    percentage: 30,
    color: '#818cf8',
    glow: 'rgba(129,140,248,0.2)',
    desc: 'Reserved for angel investors, grants, and venture capital as the company scales.',
  },
];

const vestingTerms = [
  { label: 'Vesting Period', value: '4 Years' },
  { label: 'Cliff Period', value: '1 Year' },
  { label: 'Vesting Schedule', value: 'Monthly' },
  { label: 'Structure', value: 'Standard Equity' },
];

export default function EquityModel() {
  return (
    <section id="equity" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-20" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-64 rounded-full blur-[100px]" style={{ background: 'rgba(14,165,233,0.04)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-18">
          <AnimatedSection delay={0}>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-sky-400 mb-4">
              Equity Model
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Transparent.{' '}
              <span className="text-sky-400">Fair. Real.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Q BISBIT companies operate with a Silicon Valley-standard equity
              model. You build it, you own it.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Equity split visual */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-6">Equity Distribution</h3>
              {splits.map((split) => (
                <div key={split.label} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-white">{split.label}</span>
                    <span className="text-2xl font-black" style={{ color: split.color }}>
                      {split.percentage}%
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-3 rounded-full mb-2" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${split.percentage}%`,
                        background: `linear-gradient(90deg, ${split.color}, ${split.color}80)`,
                        boxShadow: `0 0 12px ${split.glow}`,
                      }}
                    />
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{split.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Vesting terms */}
          <AnimatedSection delay={0.3}>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-6">Vesting Structure</h3>

              {/* Vesting grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {vestingTerms.map((term) => (
                  <div
                    key={term.label}
                    className="p-4 sm:p-5 rounded-2xl border text-center"
                    style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
                  >
                    <div className="text-xl sm:text-2xl font-black text-sky-400 mb-1">{term.value}</div>
                    <div className="text-xs text-gray-500">{term.label}</div>
                  </div>
                ))}
              </div>

              {/* Summary box */}
              <div
                className="p-5 sm:p-6 rounded-2xl border"
                style={{ background: 'rgba(14,165,233,0.06)', borderColor: 'rgba(14,165,233,0.15)' }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sky-400 text-sm font-bold">★</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Founder-Standard Terms</p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Our equity structure mirrors Silicon Valley norms — 4-year
                      vesting with a 1-year cliff ensures commitment from all
                      parties while protecting long-term incentives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual equity donut info */}
              <div
                className="p-5 rounded-2xl border"
                style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
              >
                <p className="text-gray-500 text-xs leading-relaxed">
                  <span className="text-white font-semibold">Cliff Explained:</span>{' '}
                  Members must complete 1 year before any equity vests. After the
                  cliff, equity vests monthly over the remaining 3 years — keeping
                  teams aligned and motivated for the long haul.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
