import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { skillLevels } from '../data/content';
import SkillCard from '../components/SkillCard';

const AGE_MIN = 50;
const AGE_MAX = 95;

function getAgeMessage(age) {
  if (age <= 62) return { text: "You've watched technology transform the world — now let's make it work for you!", emoji: '🌟' };
  if (age <= 72) return { text: "Every day is a great day to learn something new. Let's explore together!", emoji: '🌻' };
  if (age <= 82) return { text: "Wisdom and curiosity — you've got both. We'll take it one step at a time!", emoji: '🎯' };
  return { text: "It's never too late to learn. We'll keep it clear, calm, and simple.", emoji: '💛' };
}

function getSuggestedLevel(age) {
  if (age <= 62) return 'confident';
  if (age <= 72) return 'intermediate';
  return 'beginner';
}

const features = [
  { icon: '🎯', text: 'Learn at your own pace' },
  { icon: '📖', text: 'Simple, jargon-free lessons' },
  { icon: '🔒', text: 'Safe & judgment-free' },
  { icon: '✅', text: 'Completely free, always' },
];

export default function SkillSelect({ selectedLevel, onSetLevel }) {
  const navigate = useNavigate();
  const [age, setAge] = useState(68);
  const [highlightSuggested, setHighlightSuggested] = useState(true);

  const suggestedLevel = getSuggestedLevel(age);
  const { text: ageMessage, emoji } = getAgeMessage(age);
  const pct = ((age - AGE_MIN) / (AGE_MAX - AGE_MIN)) * 100;

  function handleSelect(levelId) {
    onSetLevel(levelId);
    navigate('/topics');
  }

  function handleAgeChange(e) {
    setAge(Number(e.target.value));
    setHighlightSuggested(true);
  }

  return (
    <div className="min-h-[85vh] flex flex-col">

      {/* MOBILE (unchanged single-column) */}
      <div className="md:hidden flex flex-col items-center justify-center flex-1 py-8">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-black text-navy mb-4 tracking-tight animate-fade-in-up">SUSU</h1>
          <div className="w-24 h-1.5 bg-sunshine mx-auto mb-6 animate-fade-in-up delay-75" />
          <p className="text-xl text-slate max-w-sm mx-auto leading-relaxed font-bold animate-fade-in-up delay-150">
            Learn technology at your own pace, one step at a time.
          </p>
        </div>

        <div className="w-full max-w-sm bg-white border-4 border-navy p-6 mb-6 shadow-[6px_6px_0px_0px_#FAC206] animate-fade-in-up delay-225">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-black text-navy uppercase tracking-tight">How old are you?</h2>
            <span className="text-2xl font-black text-navy">{age >= AGE_MAX ? '95+' : age}</span>
          </div>
          <input type="range" min={AGE_MIN} max={AGE_MAX} value={age} onChange={handleAgeChange}
            className="age-slider w-full mb-4" style={{ '--progress': `${pct}%` }}
            aria-label={`Your age: ${age}`} />
          <div className="flex justify-between text-xs text-slate font-black mb-4">
            <span>50</span><span>65</span><span>80</span><span>95+</span>
          </div>
          <div className="bg-cream border-4 border-navy px-4 py-3 text-center">
            <span className="text-2xl">{emoji}</span>
            <p className="text-sm text-navy font-bold mt-1 leading-snug">{ageMessage}</p>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white border-4 border-navy p-6 shadow-[8px_8px_0px_0px_#FAC206] animate-fade-in-up delay-300">
          <h2 className="text-xl font-black text-navy mb-1 uppercase tracking-tight text-center">Where are you on your tech journey?</h2>
          <p className="text-xs text-slate text-center font-bold uppercase tracking-wider mb-6">Pick your level to get started</p>
          <div className="space-y-4">
            {skillLevels.map(level => (
              <div key={level.id} className="relative">
                {highlightSuggested && suggestedLevel === level.id && (
                  <div className="absolute -top-2 -right-2 z-10 bg-sunshine text-ink text-xs font-black uppercase px-2 py-0.5 border-2 border-navy">Suggested</div>
                )}
                <SkillCard level={level} isSelected={selectedLevel === level.id} onSelect={handleSelect} />
              </div>
            ))}
          </div>
          <div className="mt-6 pt-5 border-t-4 border-cream">
            <p className="text-xs text-slate text-center font-bold uppercase tracking-wider">Don't worry — you can always change your level later</p>
          </div>
        </div>
      </div>

      {/* DESKTOP / IPAD (split screen) */}
      <div className="hidden md:flex flex-1 min-h-[85vh] -mx-8 lg:-mx-12 -my-8 md:-my-10">

        {/* Left: Navy hero panel */}
        <div className="relative w-[42%] lg:w-[40%] bg-navy flex flex-col justify-between p-10 lg:p-14 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-[0.06]"
            style={{ background: 'radial-gradient(circle, #FAC206, transparent)', transform: 'translate(30%,-30%)' }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-[0.06]"
            style={{ background: 'radial-gradient(circle, #16C0FF, transparent)', transform: 'translate(-40%,40%)' }} />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 48px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 48px)' }} />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-12 animate-fade-in">
              <img src="/logo.jpg" alt="SUSU logo" className="h-14 w-14 object-cover border-4 border-sunshine flex-shrink-0" />
              <div>
                <div className="text-xs font-black text-sunshine uppercase tracking-widest">Tech Literacy by TAA</div>
                <div className="text-xs font-bold text-white/50 uppercase tracking-wider mt-0.5">Shrewsbury, MA</div>
              </div>
            </div>
            <h1 className="font-black text-white tracking-tighter leading-none mb-6 animate-fade-in-up delay-75"
              style={{ fontSize: 'clamp(4.5rem, 9vw, 8rem)' }}>SUSU</h1>
            <div className="w-20 h-1.5 bg-sunshine mb-6 animate-fade-in-up delay-150" />
            <p className="text-lg lg:text-xl text-white/75 font-bold leading-relaxed max-w-xs animate-fade-in-up delay-225">
              Learn technology at your own pace — clear, simple, and completely free.
            </p>
          </div>

          <div className="relative z-10 space-y-3 my-10">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${300 + i * 80}ms` }}>
                <div className="flex-shrink-0 w-10 h-10 bg-white/10 border border-white/20 flex items-center justify-center text-xl">{f.icon}</div>
                <span className="text-sm font-black text-white/90 uppercase tracking-wide">{f.text}</span>
              </div>
            ))}
          </div>

          <div className="relative z-10 animate-fade-in delay-600">
            <p className="text-xs text-white/35 font-bold uppercase tracking-wider leading-relaxed">
              A free project by{' '}
              <a href="https://www.techawarenessassociation.org" target="_blank" rel="noopener noreferrer"
                className="text-sunshine/60 hover:text-sunshine transition-colors underline">
                Tech Awareness Association
              </a>
            </p>
          </div>
        </div>

        {/* Right: Cream form panel */}
        <div className="flex-1 bg-cream flex flex-col justify-center px-10 lg:px-16 xl:px-20 py-10 overflow-y-auto">

          {/* Age Slider */}
          <div className="mb-10 animate-slide-in-right delay-150">
            <p className="text-xs font-black text-slate uppercase tracking-widest mb-5 flex items-center gap-3">
              <span className="w-6 h-6 bg-navy text-white text-xs font-black inline-flex items-center justify-center flex-shrink-0">1</span>
              Tell us about yourself
            </p>
            <div className="bg-white border-4 border-navy shadow-[8px_8px_0px_0px_#FAC206] p-8">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="text-xs font-black text-slate uppercase tracking-wider mb-2">My age</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-black text-navy leading-none" style={{ fontSize: '5.5rem' }}>{age}</span>
                    {age >= AGE_MAX && <span className="text-3xl font-black text-slate self-end mb-3">+</span>}
                  </div>
                </div>
                <div className="text-right pb-2">
                  <div className="text-5xl mb-1 animate-float">{emoji}</div>
                  <div className="text-xs font-black text-slate uppercase tracking-wider">years young</div>
                </div>
              </div>
              <input type="range" min={AGE_MIN} max={AGE_MAX} value={age} onChange={handleAgeChange}
                className="age-slider w-full mb-3" style={{ '--progress': `${pct}%` }}
                aria-label={`Your age: ${age >= AGE_MAX ? '95+' : age}`} />
              <div className="flex justify-between text-xs text-slate font-black px-1 mb-6">
                <span>50</span><span>60</span><span>70</span><span>80</span><span>90+</span>
              </div>
              <div className="border-l-8 border-sunshine bg-[#FFFDF0] px-5 py-4">
                <p className="text-base font-bold text-navy leading-relaxed">{ageMessage}</p>
              </div>
            </div>
          </div>

          {/* Skill Level */}
          <div className="animate-slide-in-right delay-300">
            <p className="text-xs font-black text-slate uppercase tracking-widest mb-5 flex items-center gap-3">
              <span className="w-6 h-6 bg-navy text-white text-xs font-black inline-flex items-center justify-center flex-shrink-0">2</span>
              Pick your starting level
            </p>
            {highlightSuggested && (
              <div className="mb-5 px-5 py-3 bg-sunshine/25 border-4 border-sunshine text-sm font-bold text-navy animate-scale-in">
                Based on your age, we suggest <strong className="font-black">{skillLevels.find(l => l.id === suggestedLevel)?.displayName}</strong> — but you know yourself best!
              </div>
            )}
            <div className="space-y-4">
              {skillLevels.map((level, i) => (
                <div key={level.id} className="relative animate-fade-in-up" style={{ animationDelay: `${420 + i * 90}ms` }}>
                  {highlightSuggested && suggestedLevel === level.id && (
                    <div className="absolute -top-2.5 left-4 z-10 bg-sunshine text-ink text-xs font-black uppercase px-3 py-0.5 border-2 border-navy tracking-wider">✓ Suggested for you</div>
                  )}
                  <SkillCard level={level} isSelected={selectedLevel === level.id}
                    onSelect={id => { setHighlightSuggested(false); handleSelect(id); }} />
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-slate text-center font-bold uppercase tracking-wider">
              Don't worry — you can change your level any time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
