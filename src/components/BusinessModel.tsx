import AnimatedSection from './AnimatedSection';
import { Globe, Smartphone, Settings, Package, BookOpen } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Custom websites, landing pages, web apps, and enterprise platforms built with modern stacks.',
    tags: ['React', 'Next.js', 'Tailwind'],
    color: '#38bdf8',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile applications for iOS and Android markets.',
    tags: ['React Native', 'Flutter', 'Swift'],
    color: '#06b6d4',
  },
  {
    icon: Settings,
    title: 'Software Services',
    desc: 'Custom software solutions, automation, integrations, and backend systems for businesses.',
    tags: ['APIs', 'Automation', 'Cloud'],
    color: '#0ea5e9',
  },
  {
    icon: Package,
    title: 'SaaS Products',
    desc: 'Internally built SaaS products designed to solve real market problems and generate recurring revenue.',
    tags: ['B2B', 'B2C', 'Subscription'],
    color: '#818cf8',
  },
  {
    icon: BookOpen,
    title: 'Training Programs',
    desc: 'Structured bootcamps and training programs for students and professionals entering tech.',
    tags: ['Bootcamps', 'Workshops', 'Mentorship'],
    color: '#a78bfa',
  },
];

export default function BusinessModel() {
  return (
    <section id="business" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full blur-[120px]" style={{ background: 'rgba(14,165,233,0.04)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-18">
          <AnimatedSection delay={0}>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-sky-400 mb-4">
              Business Model
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              How Q BISBIT{' '}
              <span className="text-sky-400">Generates Value</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Five revenue streams — all operated by student talent under
              professional management, creating a self-sustaining growth engine.
            </p>
          </AnimatedSection>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={0.08 * i}>
              <div
                className="group p-6 rounded-2xl border transition-all duration-300 cursor-default hover:scale-[1.02] h-full"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${service.color}30`;
                  (e.currentTarget as HTMLDivElement).style.background = `${service.color}08`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.02)';
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${service.color}15` }}
                >
                  <service.icon size={20} style={{ color: service.color }} />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{ background: `${service.color}10`, color: service.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Summary card */}
          <AnimatedSection delay={0.4}>
            <div
              className="p-6 rounded-2xl border flex flex-col justify-center sm:col-span-2 lg:col-span-1"
              style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(6,182,212,0.05))', borderColor: 'rgba(14,165,233,0.2)' }}
            >
              <div className="text-4xl font-black text-sky-400 mb-2">5+</div>
              <div className="text-white font-bold text-lg mb-2">Revenue Streams</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Multiple income sources ensure Q BISBIT remains sustainable,
                fundable, and capable of reinvesting in student growth.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
