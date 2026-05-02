export default function Footer() {
  return (
    <footer className="relative border-t py-12 sm:py-16" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2.5 justify-center md:justify-start mb-3">
              <img src="/Q_BISBIT LOGO.png" alt="Q BISBIT logo" className="w-9 h-9 rounded-lg object-cover shadow-lg shadow-sky-500/30" />
              <span className="font-bold text-white text-base tracking-tight">Q BISBIT</span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs">
              From students to founders.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Quaidians Builders of Innovation, Software &amp; Business in Tech
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              { label: 'About', href: '#about' },
              { label: 'Ecosystem', href: '#ecosystem' },
              { label: 'Departments', href: '#departments' },
              { label: 'Pipeline', href: '#pipeline' },
              { label: 'Team', href: '#team' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-300 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">Contact</p>
            <a
              href="mailto:qbisbit@gmail.com"
              className="text-sm text-sky-400 hover:text-sky-300 transition-colors duration-200 font-medium"
            >
              qbisbit@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
          <p className="text-xs text-gray-700">
            © {new Date().getFullYear()} Q BISBIT. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            Build. Innovate. Scale.
          </p>
        </div>
      </div>
    </footer>
  );
}
