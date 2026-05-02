import AnimatedSection from './AnimatedSection';

const team = [
  {
    name: 'Shahzad Hussain Bakhtawar',
    role: 'Chief Executive Officer',
    short: 'CEO',
    desc: 'Visionary leader driving Q BISBIT\'s strategy, partnerships, and company formation at scale.',
    initials: 'SH',
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.12)',
    border: 'rgba(56,189,248,0.2)',
  },
  {
    name: 'Hashir Khan',
    role: 'President',
    short: 'President',
    desc: 'Oversees organizational operations, student engagement, and ecosystem growth across all wings.',
    initials: 'HK',
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.12)',
    border: 'rgba(6,182,212,0.2)',
  },
  {
    name: 'M. Ahtisham',
    role: 'Technical Director',
    short: 'CTO',
    desc: 'Leads the Tech Wing, sets engineering standards, and oversees all product development and architecture.',
    initials: 'MA',
    color: '#818cf8',
    glow: 'rgba(129,140,248,0.12)',
    border: 'rgba(129,140,248,0.2)',
  },
  {
    name: 'Mehwish Rahim',
    role: 'Growth Lead',
    short: 'Growth',
    desc: 'Drives marketing strategy, brand development, and community growth for Q BISBIT and its portfolio companies.',
    initials: 'MR',
    color: '#f472b6',
    glow: 'rgba(244,114,182,0.12)',
    border: 'rgba(244,114,182,0.2)',
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full blur-[100px]" style={{ background: 'rgba(129,140,248,0.05)' }} />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full blur-[100px]" style={{ background: 'rgba(14,165,233,0.04)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-18">
          <AnimatedSection delay={0}>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-sky-400 mb-4">
              Founding Team
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              The People{' '}
              <span className="text-sky-400">Behind the Vision</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              A founding team built on complementary skills, shared ambition,
              and a relentless drive to turn students into founders.
            </p>
          </AnimatedSection>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {team.map((member, i) => (
            <AnimatedSection key={member.name} delay={0.1 * i}>
              <div
                className="group p-6 rounded-3xl border transition-all duration-300 cursor-default hover:scale-[1.02] text-center"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.background = member.glow;
                  (e.currentTarget as HTMLDivElement).style.borderColor = member.border;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.02)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.06)';
                }}
              >
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black mx-auto mb-4 transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ background: member.glow, border: `1px solid ${member.border}`, color: member.color }}
                >
                  {member.initials}
                </div>

                {/* Role badge */}
                <div
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{ background: `${member.color}15`, color: member.color }}
                >
                  {member.short}
                </div>

                {/* Name */}
                <h3 className="text-sm sm:text-base font-bold text-white mb-1 leading-tight">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3 font-medium">{member.role}</p>

                {/* Divider */}
                <div className="w-8 h-px mx-auto mb-3" style={{ background: `${member.color}40` }} />

                {/* Description */}
                <p className="text-gray-500 text-xs leading-relaxed">{member.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
