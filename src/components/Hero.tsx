import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeLoE-1-H10FFcfmNIWgMKAB5t0dYgcnq4QMv0GtjzcEu1pkg/viewform';

interface FadeItemProps {
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

function FadeUp({ delay = 0, children, className = '' }: FadeItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] glow-pulse" style={{ background: 'rgba(14,165,233,0.08)' }} />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ background: 'rgba(6,182,212,0.06)' }} />
        <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full blur-[80px]" style={{ background: 'rgba(37,99,235,0.06)' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 sm:py-40">
        {/* Badge */}
        <FadeUp delay={0}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs sm:text-sm font-medium mb-8" style={{ background: 'rgba(14,165,233,0.1)', borderColor: 'rgba(14,165,233,0.2)', color: '#38bdf8' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Quaidians Builders of Innovation, Software &amp; Business in Tech
          </div>
        </FadeUp>

        {/* Main heading */}
        <FadeUp delay={0.1}>
          <div className="mb-6 flex justify-center">
            <img src="/Q_BISBIT LOGO.png" alt="Q BISBIT logo" className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-2xl shadow-sky-500/25" />
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-none">
            <span className="shimmer-text">Q BISBIT</span>
          </h1>
        </FadeUp>

        {/* Tagline */}
        <FadeUp delay={0.2}>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/90 mb-4">
            Build. Innovate. Scale.
          </p>
        </FadeUp>

        {/* Description */}
        <FadeUp delay={0.3}>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            A student-powered tech ecosystem where builders, developers, and
            founders come together to launch real products, build real companies,
            and create real impact.
          </p>
        </FadeUp>

        {/* CTA Buttons */}
        <FadeUp delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-400 text-black font-bold text-base transition-all duration-200 shadow-xl hover:scale-105 active:scale-95"
              style={{ boxShadow: '0 0 40px rgba(14,165,233,0.3)' }}
            >
              Join Q BISBIT
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#ecosystem"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border font-semibold text-base transition-all duration-200"
              style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(14,165,233,0.4)';
                (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.15)';
                (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)';
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              }}
            >
              Explore Ecosystem
            </a>
          </div>
        </FadeUp>

        {/* Stats */}
        <FadeUp delay={0.55}>
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { value: '3', label: 'Core Pillars' },
              { value: '4+', label: 'Departments' },
              { value: '∞', label: 'Potential' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-sky-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-24 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="text-gray-600 animate-bounce" />
      </motion.div>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 border-t" style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.05)' }}>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-bold text-base transition-all duration-200 active:scale-95"
        >
          Join Q BISBIT
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
