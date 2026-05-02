import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Code2, TrendingUp, Briefcase, Calendar } from 'lucide-react';

const departments = [
  {
    id: 'tech',
    icon: Code2,
    title: 'Tech Wing',
    tagline: 'Engineering the Future',
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.1)',
    border: 'rgba(56,189,248,0.2)',
    roles: ['Frontend Developers', 'Backend Engineers', 'Mobile Developers', 'DevOps & Cloud', 'UI/UX Designers', 'AI/ML Engineers'],
    desc: 'The technical backbone of Q BISBIT. Engineers who build real products — from MVPs to scalable SaaS platforms. Work with modern stacks: React, Next.js, Node.js, Python, and more.',
  },
  {
    id: 'growth',
    icon: TrendingUp,
    title: 'Growth Wing',
    tagline: 'Scale What We Build',
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.1)',
    border: 'rgba(6,182,212,0.2)',
    roles: ['Marketing Strategists', 'Content Creators', 'SEO Specialists', 'Social Media Managers', 'Brand Designers', 'Community Managers'],
    desc: 'Growth is what turns a product into a company. The Growth Wing handles marketing, branding, content, and community — ensuring what we build actually reaches the world.',
  },
  {
    id: 'business',
    icon: Briefcase,
    title: 'Business Wing',
    tagline: 'Monetize & Strategize',
    color: '#818cf8',
    glow: 'rgba(129,140,248,0.1)',
    border: 'rgba(129,140,248,0.2)',
    roles: ['Business Analysts', 'Sales Representatives', 'Client Relations', 'Finance & Operations', 'Product Managers', 'Strategy Leads'],
    desc: 'Every great tech company needs a strong business core. The Business Wing handles client acquisition, revenue strategy, operations, and ensures Q BISBIT is sustainable at scale.',
  },
  {
    id: 'events',
    icon: Calendar,
    title: 'Events Wing',
    tagline: 'Build the Culture',
    color: '#f472b6',
    glow: 'rgba(244,114,182,0.1)',
    border: 'rgba(244,114,182,0.2)',
    roles: ['Event Coordinators', 'Hackathon Organizers', 'Speaker Curators', 'Logistics Team', 'Workshop Facilitators', 'Media & Documentation'],
    desc: 'Culture eats strategy for breakfast. The Events Wing runs hackathons, tech talks, workshops, and networking events — building the energy and community that makes Q BISBIT magnetic.',
  },
];

export default function Departments() {
  const [activeId, setActiveId] = useState('tech');
  const active = departments.find(d => d.id === activeId) ?? departments[0];

  return (
    <section id="departments" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[120px]" style={{ background: 'rgba(14,165,233,0.04)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <AnimatedSection delay={0}>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-sky-400 mb-4">
              Departments
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Four Wings.{' '}
              <span className="text-sky-400">One Mission.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Every member finds their place in the ecosystem. Choose your wing
              and start building.
            </p>
          </AnimatedSection>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Tab selector */}
          <AnimatedSection delay={0.2} className="flex flex-row lg:flex-col gap-3 lg:w-64 xl:w-72 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveId(dept.id)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl border text-left transition-all duration-200 flex-shrink-0 lg:flex-shrink whitespace-nowrap lg:whitespace-normal"
                style={{
                  background: activeId === dept.id ? dept.glow : 'rgba(255,255,255,0.02)',
                  borderColor: activeId === dept.id ? dept.border : 'rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: activeId === dept.id ? dept.glow : 'rgba(255,255,255,0.05)' }}
                >
                  <dept.icon size={15} style={{ color: activeId === dept.id ? dept.color : '#6b7280' }} />
                </div>
                <span
                  className="font-semibold text-sm"
                  style={{ color: activeId === dept.id ? '#fff' : '#6b7280' }}
                >
                  {dept.title}
                </span>
              </button>
            ))}
          </AnimatedSection>

          {/* Active department detail */}
          <div className="flex-1">
            <AnimatedSection key={activeId} delay={0}>
              <div
                className="p-6 sm:p-8 rounded-3xl border h-full"
                style={{
                  background: `linear-gradient(135deg, ${active.glow}, rgba(0,0,0,0.3))`,
                  borderColor: active.border,
                }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: active.glow }}
                  >
                    <active.icon size={26} style={{ color: active.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">{active.title}</h3>
                    <p className="text-sm font-semibold mt-0.5" style={{ color: active.color }}>
                      {active.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                  {active.desc}
                </p>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-600 mb-3">Roles & Positions</p>
                  <div className="flex flex-wrap gap-2">
                    {active.roles.map((role) => (
                      <span
                        key={role}
                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                        style={{ background: active.glow, borderColor: active.border, color: active.color }}
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
