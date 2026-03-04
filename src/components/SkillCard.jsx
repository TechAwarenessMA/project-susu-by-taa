export default function SkillCard({ level, isSelected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(level.id)}
      className={`w-full text-left p-5 transition-all duration-200 min-h-[100px] border-4 ${
        isSelected
          ? 'bg-[#FFFDF0] border-navy shadow-[4px_4px_0px_0px_#FAC206]'
          : 'bg-white border-navy hover:shadow-[4px_4px_0px_0px_#FAC206] hover:-translate-y-0.5'
      }`}
      style={{ borderLeftWidth: '8px', borderLeftColor: level.accentColor }}
      aria-pressed={isSelected}
      aria-label={`${level.displayName} — ${level.tagline}`}
    >
      <div className="relative">
        {isSelected && (
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-sunshine flex items-center justify-center border-2 border-navy" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M4 10L8 14L16 6" stroke="#181818" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
        <div className="flex items-start gap-4">
          <span className="text-[36px] leading-none" aria-hidden="true">{level.emoji}</span>
          <div className="flex-1">
            <h3 className="text-xl font-black text-navy tracking-tight">{level.displayName}</h3>
            <p className="text-sm text-slate font-bold uppercase tracking-wider mt-0.5">{level.tagline}</p>
            <p className="text-lg text-ink mt-2 leading-relaxed">{level.description}</p>
          </div>
        </div>
      </div>
    </button>
  );
}
