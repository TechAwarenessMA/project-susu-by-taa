import { useNavigate } from 'react-router-dom';
import { skillLevels } from '../data/content';
import SkillCard from '../components/SkillCard';

export default function SkillSelect({ selectedLevel, onSetLevel }) {
  const navigate = useNavigate();

  function handleSelect(levelId) {
    onSetLevel(levelId);
    navigate('/topics');
  }

  return (
    <div className="flex flex-col items-center min-h-[70vh] justify-center">
      {/* Hero title */}
      <div className="text-center mb-12 mt-4">
        <h1 className="text-6xl md:text-7xl font-black text-navy mb-4 tracking-tight">
          SUSU
        </h1>
        <div className="w-24 h-1.5 bg-sunshine mx-auto mb-6" />
        <p className="text-xl text-slate max-w-lg mx-auto leading-relaxed font-bold">
          Learn technology at your own pace, one step at a time.
        </p>
      </div>

      {/* Selection card */}
      <div className="w-full max-w-lg bg-white border-4 border-navy p-8 shadow-[8px_8px_0px_0px_#FAC206]">
        <h2 className="text-2xl font-black text-navy mb-2 uppercase tracking-tight text-center">
          Where are you on your tech journey?
        </h2>
        <p className="text-sm text-slate text-center font-bold uppercase tracking-wider mb-8">
          Pick your level to get started
        </p>

        <div className="space-y-4">
          {skillLevels.map(level => (
            <SkillCard
              key={level.id}
              level={level}
              isSelected={selectedLevel === level.id}
              onSelect={handleSelect}
            />
          ))}
        </div>

        <div className="mt-8 pt-6 border-t-4 border-cream">
          <p className="text-xs text-slate text-center font-bold uppercase tracking-wider">
            Don&apos;t worry — you can always change your level later
          </p>
        </div>
      </div>
    </div>
  );
}
