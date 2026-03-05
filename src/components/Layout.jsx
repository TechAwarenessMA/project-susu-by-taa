import { NavLink, useLocation } from 'react-router-dom';
import { useTextSize } from '../hooks/useTextSize';
import { useHighContrast } from '../hooks/useHighContrast';

const navItems = [
  { to: '/topics', label: 'Home', icon: HomeIcon },
  { to: '/progress', label: 'Progress', icon: ProgressIcon },
  { to: '/bookmarks', label: 'Saved', icon: BookmarkIcon },
  { to: '/about', label: 'About', icon: AboutIcon },
];

function HomeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function ProgressIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
    </svg>
  );
}

function AboutIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ContrastIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a10 10 0 010 20V2z" fill="currentColor" />
    </svg>
  );
}

export default function Layout({ children }) {
  const { enlarged, toggle: toggleTextSize } = useTextSize();
  const { highContrast, toggle: toggleHighContrast } = useHighContrast();
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Top nav — desktop */}
      <nav className="hidden md:flex items-center justify-between px-8 py-4 bg-white border-b-4 border-navy no-print">
        <NavLink to="/" aria-label="SUSU Home" className="flex items-center gap-3">
          <img src="/logo.jpg" alt="SUSU logo" className="h-12 w-12 object-cover border-2 border-navy" />
          <span className="text-2xl font-black text-navy tracking-tight">SUSU</span>
        </NavLink>
        <div className="flex items-center gap-2">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-2 px-5 py-3 font-black text-base uppercase tracking-wider transition-all min-h-12 border-4 ${
                  isActive
                    ? 'bg-sunshine text-ink border-navy shadow-[4px_4px_0px_0px_#2C3E50]'
                    : 'bg-white text-navy border-transparent hover:border-navy'
                }`
              }
            >
              <item.icon />
              {item.label}
            </NavLink>
          ))}
          {/* Search */}
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `flex items-center gap-2 px-5 py-3 font-black text-base uppercase tracking-wider transition-all min-h-12 border-4 ${
                isActive
                  ? 'bg-sunshine text-ink border-navy shadow-[4px_4px_0px_0px_#2C3E50]'
                  : 'bg-white text-navy border-transparent hover:border-navy'
              }`
            }
            aria-label="Search"
          >
            <SearchIcon />
            Search
          </NavLink>
          {/* High contrast toggle */}
          <button
            onClick={toggleHighContrast}
            className={`ml-1 px-4 py-3 border-4 border-navy font-black text-base uppercase tracking-wider transition-colors min-h-12 text-size-toggle ${
              highContrast ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-navy hover:text-white'
            }`}
            aria-label={highContrast ? 'Turn off high contrast' : 'Turn on high contrast'}
            title={highContrast ? 'High Contrast: ON' : 'High Contrast: OFF'}
          >
            <ContrastIcon />
          </button>
          {/* Text size toggle */}
          <button
            onClick={toggleTextSize}
            className="px-5 py-3 border-4 border-navy text-navy font-black text-base uppercase tracking-wider hover:bg-navy hover:text-white transition-colors min-h-12 text-size-toggle"
            aria-label={enlarged ? 'Use standard text size' : 'Use larger text size'}
          >
            {enlarged ? 'A' : 'A+'}
          </button>
        </div>
      </nav>

      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b-4 border-navy no-print">
        <NavLink to="/" aria-label="SUSU Home" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="SUSU logo" className="h-10 w-10 object-cover border-2 border-navy" />
          <span className="text-xl font-black text-navy tracking-tight">SUSU</span>
        </NavLink>
        <div className="flex items-center gap-2">
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `flex items-center justify-center w-12 h-12 border-4 border-navy transition-colors ${
                isActive ? 'bg-sunshine text-ink' : 'text-navy hover:bg-navy hover:text-white'
              }`
            }
            aria-label="Search"
          >
            <SearchIcon />
          </NavLink>
          <button
            onClick={toggleHighContrast}
            className={`flex items-center justify-center w-12 h-12 border-4 border-navy transition-colors text-size-toggle ${
              highContrast ? 'bg-navy text-white' : 'text-navy hover:bg-navy hover:text-white'
            }`}
            aria-label={highContrast ? 'Turn off high contrast' : 'Turn on high contrast'}
          >
            <ContrastIcon />
          </button>
          <button
            onClick={toggleTextSize}
            className="px-4 py-2 border-4 border-navy text-navy font-black text-sm uppercase tracking-wider min-h-12 text-size-toggle hover:bg-navy hover:text-white transition-colors"
            aria-label={enlarged ? 'Use standard text size' : 'Use larger text size'}
          >
            {enlarged ? 'A' : 'A+'}
          </button>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-10 pb-28 md:pb-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-4 border-navy py-8 px-4 text-center no-print">
        <p className="text-base text-slate max-w-2xl mx-auto font-bold">
          Susu is a free tool by{' '}
          <a href="https://www.techawarenessassociation.org" target="_blank" rel="noopener noreferrer" className="text-sky underline font-black">
            Tech Awareness Association
          </a>
          , a student-founded nonprofit in Shrewsbury, MA.
        </p>
        <div className="mt-4 flex items-center justify-center gap-6 text-sm font-black uppercase tracking-wider flex-wrap">
          <NavLink to="/glossary" className="text-navy hover:text-sky transition-colors">
            Glossary
          </NavLink>
          <span className="text-slate">|</span>
          <NavLink to="/search" className="text-navy hover:text-sky transition-colors">
            Search
          </NavLink>
          <span className="text-slate">|</span>
          <NavLink to="/about" className="text-navy hover:text-sky transition-colors">
            About
          </NavLink>
        </div>
        <p className="mt-3 text-xs text-slate font-bold uppercase tracking-wider">
          Need help?{' '}
          <a href="https://www.techawarenessassociation.org" target="_blank" rel="noopener noreferrer" className="text-sky underline">
            techawarenessassociation.org
          </a>
        </p>
      </footer>

      {/* Bottom nav — mobile */}
      {!isLandingPage && (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-4 border-navy flex items-center justify-around py-2 z-50 bottom-nav no-print">
          {navItems.map(item => (
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
