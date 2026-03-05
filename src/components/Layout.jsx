import { NavLink, useLocation } from 'react-router-dom';
import { useTextSize } from '../hooks/useTextSize';
import { useHighContrast } from '../hooks/useHighContrast';

// ─── Icons ───────────────────────────────────────────────────
function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
function ProgressIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
function BookmarkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
    </svg>
  );
}
function AboutIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function GlossaryIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  );
}
function ContrastIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a10 10 0 010 20V2z" fill="currentColor" />
    </svg>
  );
}

// ─── Nav config ──────────────────────────────────────────────
const navItems = [
  { to: '/topics',    label: 'Home',     icon: HomeIcon },
  { to: '/progress',  label: 'Progress', icon: ProgressIcon },
  { to: '/bookmarks', label: 'Saved',    icon: BookmarkIcon },
  { to: '/search',    label: 'Search',   icon: SearchIcon },
  { to: '/glossary',  label: 'Glossary', icon: GlossaryIcon },
  { to: '/about',     label: 'About',    icon: AboutIcon },
];

// ─── Mobile nav items (4 max for bottom bar) ─────────────────
const mobileNavItems = [
  { to: '/topics',    label: 'Home',     icon: HomeIcon },
  { to: '/progress',  label: 'Progress', icon: ProgressIcon },
  { to: '/bookmarks', label: 'Saved',    icon: BookmarkIcon },
  { to: '/about',     label: 'About',    icon: AboutIcon },
];

export default function Layout({ children }) {
  const { enlarged, toggle: toggleTextSize } = useTextSize();
  const { highContrast, toggle: toggleHighContrast } = useHighContrast();
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-cream flex flex-col">

      {/* ── MOBILE TOP BAR (unchanged) ─────────────────────── */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b-4 border-navy no-print">
        <NavLink to="/" aria-label="SUSU Home" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="SUSU logo" className="h-10 w-10 object-cover border-2 border-navy" />
          <span className="text-xl font-black text-navy tracking-tight">SUSU</span>
        </NavLink>
        <div className="flex items-center gap-2">
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `flex items-center justify-center w-11 h-11 border-4 border-navy transition-colors ${
                isActive ? 'bg-sunshine text-ink' : 'text-navy bg-white hover:bg-navy hover:text-white'
              }`
            }
            aria-label="Search"
          >
            <SearchIcon />
          </NavLink>
          <button
            onClick={toggleHighContrast}
            className={`flex items-center justify-center w-11 h-11 border-4 border-navy transition-colors text-size-toggle ${
              highContrast ? 'bg-navy text-white' : 'text-navy bg-white hover:bg-navy hover:text-white'
            }`}
            aria-label={highContrast ? 'Turn off high contrast' : 'Turn on high contrast'}
          >
            <ContrastIcon />
          </button>
          <button
            onClick={toggleTextSize}
            className="px-3 py-2 border-4 border-navy text-navy font-black text-sm uppercase tracking-wider min-h-11 text-size-toggle hover:bg-navy hover:text-white transition-colors"
            aria-label={enlarged ? 'Use standard text size' : 'Use larger text size'}
          >
            {enlarged ? 'A' : 'A+'}
          </button>
        </div>
      </div>

      {/* ── DESKTOP SIDEBAR + CONTENT WRAPPER ──────────────── */}
      <div className="flex flex-1">

        {/* ── SIDEBAR (desktop / iPad only) ──────────────── */}
        {!isLandingPage && (
          <aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-60 lg:w-64 bg-navy border-r-4 border-black z-50 no-print animate-slide-in-left sidebar-scroll">

            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center gap-3 px-5 py-5 border-b-4 border-black hover:bg-black transition-colors"
              aria-label="SUSU Home"
            >
              <img
                src="/logo.jpg"
                alt="SUSU logo"
                className="h-11 w-11 object-cover border-2 border-sunshine flex-shrink-0"
              />
              <div>
                <div className="text-2xl font-black text-white tracking-tight leading-none">SUSU</div>
                <div className="text-xs text-sunshine font-black uppercase tracking-widest mt-0.5">by TAA</div>
              </div>
            </NavLink>

            {/* Nav Items */}
            <nav className="flex-1 py-4" aria-label="Main navigation">
              {navItems.map((item, i) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-5 py-3.5 text-sm font-black uppercase tracking-wider transition-all relative border-l-4 animate-fade-in ${
                      isActive
                        ? 'bg-sunshine text-ink border-sunshine pl-5'
                        : 'text-white border-transparent hover:bg-white/10 hover:border-sunshine/50 hover:pl-6'
                    }`
                  }
                  style={{ animationDelay: `${i * 60}ms` }}
                  aria-label={item.label}
                >
                  <item.icon />
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Divider */}
            <div className="mx-5 border-t-2 border-white/20 mb-4" />

            {/* Accessibility Toggles */}
            <div className="px-4 pb-4 space-y-2">
              <button
                onClick={toggleTextSize}
                className={`w-full flex items-center gap-3 px-4 py-3 border-4 border-white/30 font-black text-sm uppercase tracking-wider transition-all text-size-toggle ${
                  enlarged
                    ? 'bg-sunshine text-ink border-sunshine'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label={enlarged ? 'Use standard text size' : 'Use larger text size'}
              >
                <span className="text-lg leading-none font-black">{enlarged ? 'A' : 'A+'}</span>
                <span>{enlarged ? 'Standard Text' : 'Larger Text'}</span>
              </button>
              <button
                onClick={toggleHighContrast}
                className={`w-full flex items-center gap-3 px-4 py-3 border-4 border-white/30 font-black text-sm uppercase tracking-wider transition-all text-size-toggle ${
                  highContrast
                    ? 'bg-white text-navy border-white'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label={highContrast ? 'Turn off high contrast' : 'Turn on high contrast'}
              >
                <ContrastIcon />
                <span>{highContrast ? 'Normal Mode' : 'High Contrast'}</span>
              </button>
            </div>

            {/* Footer credit */}
            <div className="px-5 py-4 border-t-2 border-white/20">
              <p className="text-xs text-white/50 font-bold uppercase tracking-wider leading-relaxed">
                Free tool by<br />
                <a
                  href="https://www.techawarenessassociation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sunshine/80 hover:text-sunshine transition-colors"
                >
                  Tech Awareness Association
                </a>
                <br />Shrewsbury, MA
              </p>
            </div>
          </aside>
        )}

        {/* ── MAIN CONTENT ────────────────────────────────── */}
        <div className={`flex-1 flex flex-col min-h-screen ${!isLandingPage ? 'md:ml-60 lg:ml-64' : ''}`}>
          <main className={`flex-1 w-full mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-10 pb-28 md:pb-12 ${
            isLandingPage ? 'max-w-7xl' : 'max-w-5xl'
          }`}>
            {children}
          </main>

          {/* Footer — desktop only (mobile uses bottom nav) */}
          <footer className="hidden md:block bg-white border-t-4 border-navy py-6 px-8 no-print">
            <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-4">
              <p className="text-sm text-slate font-bold">
                Susu is a free tool by{' '}
                <a
                  href="https://www.techawarenessassociation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky underline font-black"
                >
                  Tech Awareness Association
                </a>
                , a student-founded nonprofit in Shrewsbury, MA.
              </p>
              <div className="flex items-center gap-4 text-xs font-black uppercase tracking-wider">
                <NavLink to="/glossary" className="text-navy hover:text-sky transition-colors">Glossary</NavLink>
                <NavLink to="/search"   className="text-navy hover:text-sky transition-colors">Search</NavLink>
                <NavLink to="/about"    className="text-navy hover:text-sky transition-colors">About</NavLink>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* ── MOBILE BOTTOM NAV (unchanged) ──────────────────── */}
      {!isLandingPage && (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-4 border-navy flex items-center justify-around py-2 z-50 bottom-nav no-print">
          {mobileNavItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 px-3 py-2 text-xs font-black uppercase tracking-wider transition-colors min-h-12 min-w-[56px] ${
                  isActive ? 'text-ink bg-sunshine border-t-4 border-navy -mt-1' : 'text-navy'
                }`
              }
            >
              <item.icon />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  );
}
