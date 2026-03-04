import { glossary } from '../data/content';
import { Link } from 'react-router-dom';

export default function Glossary() {
  const letters = [...new Set(glossary.map(item => item.term[0].toUpperCase()))].sort();

  return (
    <div>
      <Link
        to="/topics"
        className="inline-flex items-center gap-2 text-navy text-lg font-black uppercase tracking-wider mb-6 hover:text-sky transition-colors"
      >
        &larr; Back
      </Link>

      <h1 className="text-4xl md:text-5xl font-black text-navy mb-2 tracking-tight">TECH GLOSSARY</h1>
      <p className="text-sm text-slate font-bold uppercase tracking-wider mb-8">
        Simple definitions for technology words used in this app
      </p>

      {/* Letter navigation */}
      <div className="flex flex-wrap gap-2 mb-8">
        {letters.map(letter => (
          <a
            key={letter}
            href={`#glossary-${letter}`}
            className="w-11 h-11 flex items-center justify-center bg-white border-4 border-navy text-navy font-black text-lg hover:bg-sunshine hover:-translate-y-0.5 transition-all"
          >
            {letter}
          </a>
        ))}
      </div>

      {/* Terms */}
      {letters.map(letter => {
        const terms = glossary.filter(item => item.term[0].toUpperCase() === letter);
        return (
          <div key={letter} id={`glossary-${letter}`} className="mb-8">
            <h2 className="text-2xl font-black text-navy border-b-4 border-sunshine pb-2 mb-4 uppercase">{letter}</h2>
            <dl className="space-y-3">
              {terms.map(item => (
                <div key={item.term} className="bg-white border-4 border-navy p-5 hover:shadow-[4px_4px_0px_0px_#FAC206] transition-all">
                  <dt className="text-lg font-black text-navy">{item.term}</dt>
                  <dd className="text-lg text-ink mt-1">{item.definition}</dd>
                </div>
              ))}
            </dl>
          </div>
        );
      })}
    </div>
  );
}
