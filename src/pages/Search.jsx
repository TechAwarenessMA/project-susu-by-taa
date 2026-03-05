import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { lessons, topics, glossary } from '../data/content';

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function highlight(text, query) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-sunshine px-0.5">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function Search() {
  const [query, setQuery] = useState('');

  const topicMap = useMemo(() => {
    const map = {};
    topics.forEach(t => { map[t.id] = t; });
    return map;
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return { lessons: [], glossary: [] };

    const matchedLessons = lessons.filter(l => {
      const topic = topicMap[l.topicId];
      return (
        l.title.toLowerCase().includes(q) ||
        (topic && topic.title.toLowerCase().includes(q)) ||
        l.whyItMatters?.toLowerCase().includes(q)
      );
    });

    const matchedGlossary = glossary.filter(g =>
      g.term.toLowerCase().includes(q) ||
      g.definition.toLowerCase().includes(q)
    );

    return { lessons: matchedLessons, glossary: matchedGlossary };
  }, [query, topicMap]);

  const totalResults = results.lessons.length + results.glossary.length;
  const hasQuery = query.trim().length >= 2;

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-black text-navy tracking-tight mb-2">Search</h1>
      <p className="text-lg text-slate font-bold mb-8">Find lessons and glossary terms</p>

      {/* Search input */}
      <div className="relative mb-8">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Type to search…"
          className="w-full pl-12 pr-4 py-4 border-4 border-navy bg-white text-ink font-bold text-lg placeholder:text-slate focus:outline-none focus:border-sky"
          autoFocus
          aria-label="Search lessons and glossary"
        />
      </div>

      {hasQuery && (
        <p className="text-sm font-black text-slate uppercase tracking-wider mb-6">
          {totalResults === 0 ? 'No results found' : `${totalResults} result${totalResults !== 1 ? 's' : ''} for "${query.trim()}"`}
        </p>
      )}

      {/* Lesson results */}
      {results.lessons.length > 0 && (
        <div className="mb-8">
          <h2 className="text-base font-black text-navy uppercase tracking-wider mb-4 border-b-4 border-navy pb-2">
            Lessons ({results.lessons.length})
          </h2>
          <div className="space-y-3">
            {results.lessons.map(lesson => {
              const topic = topicMap[lesson.topicId];
              return (
                <Link
                  key={lesson.id}
                  to={`/lessons/${lesson.id}`}
                  className="block bg-white border-4 border-navy p-4 hover:shadow-[6px_6px_0px_0px_#FAC206] transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    {topic && (
                      <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">
                        {topic.emoji}
                      </span>
                    )}
                    <div>
                      <p className="font-black text-ink text-base leading-tight">
                        {highlight(lesson.title, query.trim())}
                      </p>
                      {topic && (
                        <p className="text-sm text-slate font-bold mt-1">
                          {highlight(topic.title, query.trim())}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Glossary results */}
      {results.glossary.length > 0 && (
        <div className="mb-8">
          <h2 className="text-base font-black text-navy uppercase tracking-wider mb-4 border-b-4 border-navy pb-2">
            Glossary ({results.glossary.length})
          </h2>
          <div className="space-y-3">
            {results.glossary.map(item => (
              <Link
                key={item.term}
                to="/glossary"
                className="block bg-white border-4 border-navy p-4 hover:shadow-[6px_6px_0px_0px_#16C0FF] transition-shadow"
              >
                <p className="font-black text-ink text-base">
                  {highlight(item.term, query.trim())}
                </p>
                <p className="text-sm text-slate font-bold mt-1 leading-snug">
                  {highlight(item.definition, query.trim())}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {hasQuery && totalResults === 0 && (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-xl font-black text-navy mb-2">No results found</p>
          <p className="text-lg text-slate font-bold">Try different words, or browse the{' '}
            <Link to="/glossary" className="text-sky underline">Glossary</Link>
          </p>
        </div>
      )}

      {/* Prompt when empty */}
      {!hasQuery && (
        <div className="text-center py-16 text-slate">
          <div className="text-5xl mb-4">🔎</div>
          <p className="text-xl font-black">Start typing to search</p>
          <p className="text-lg font-bold mt-2">Search across all lessons and glossary terms</p>
        </div>
      )}
    </div>
  );
}
