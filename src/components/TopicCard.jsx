import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';

export default function TopicCard({ topic, lessonCount, progress }) {
  const hasStarted = progress > 0;
  const isComplete = progress === 100;

  return (
    <div className="bg-white border-4 border-navy hover:shadow-[6px_6px_0px_0px_#FAC206] transition-all hover:-translate-y-0.5">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <span className="text-[44px] leading-none" aria-hidden="true">{topic.emoji}</span>
          <div className="flex-1">
            <h3 className="text-xl font-black text-navy tracking-tight">{topic.title}</h3>
            <p className="text-sm text-slate font-bold uppercase tracking-wider mt-1">
              {lessonCount} lesson{lessonCount !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-slate font-bold uppercase tracking-wider">{progress}% complete</span>
            {isComplete && (
              <span className="px-3 py-1 bg-sky text-white text-xs font-black uppercase tracking-wider border-2 border-navy">
                Done
              </span>
            )}
          </div>
          <ProgressBar percent={progress} />
        </div>
        <Link
          to={`/topics/${topic.id}`}
          className="block w-full bg-sunshine text-ink text-center px-6 py-4 text-lg font-black uppercase tracking-wider border-4 border-navy hover:shadow-[4px_4px_0px_0px_#2C3E50] transition-all min-h-12"
        >
          {isComplete ? 'Review' : hasStarted ? 'Continue' : 'Start'} &rarr;
        </Link>
      </div>
    </div>
  );
}
