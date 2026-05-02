import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeLoE-1-H10FFcfmNIWgMKAB5t0dYgcnq4QMv0GtjzcEu1pkg/viewform';

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="join" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[120px]" style={{ background: 'rgba(14,165,233,0.1)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full blur-[60px]" style={{ background: 'rgba(6,182,212,0.08)' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-center p-10 sm:p-16 lg:p-20 rounded-3xl border overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(0,0,0,0.8), rgba(6,182,212,0.06))',
              borderColor: 'rgba(14,165,233,0.2)',
            }}
          >
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.5), transparent)' }} />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.3), transparent)' }} />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium mb-8"
              style={{ background: 'rgba(14,165,233,0.1)', borderColor: 'rgba(14,165,233,0.25)', color: '#38bdf8' }}
            >
              <Sparkles size={14} />
              Applications Open
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight"
            >
              Join{' '}
              <span className="shimmer-text">Q BISBIT</span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Start your journey from student to builder. Apply now to become
              part of the ecosystem that turns ideas into companies.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-10 py-5 rounded-full bg-sky-500 hover:bg-sky-400 text-black font-bold text-lg transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ boxShadow: '0 0 60px rgba(14,165,233,0.4), 0 20px 40px rgba(14,165,233,0.2)' }}
              >
                Apply Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 text-xs text-gray-600"
            >
              Free to apply · No experience required · Opens in Google Form
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
