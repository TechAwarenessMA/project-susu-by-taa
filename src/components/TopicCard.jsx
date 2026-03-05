import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';

export default function TopicCard({ topic, lessonCount, progress }) {
  const hasStarted = progress > 0;
  const isComplete = progress === 100;

  return (
    <div className={`bg-white border-4 border-navy transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#FAC206] group ${
      isComplete ? 'shadow-[4px_4px_0px_0px_#16C0FF]' : 'shadow-[4px_4px_0px_0px_#2C3E50]'
    }`}>
      <div className="p-5 md:p-6">
        {/* Emoji + title */}
        <div className="flex items-start gap-3 mb-4">
          <span className="text-[40px] md:text-[44px] leading-none flex-shrink-0 group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
            {topic.emoji}
          </span>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-black text-navy tracking-tight leading-tight">{topic.title}</h3>
            <p className="text-xs md:text-sm text-slate font-bold uppercase tracking-wider mt-1">
              {lessonCount} lesson{lessonCount !== 1 ? 's' : ''}
            </p>
          </div>
          {isComplete && (
            <div className="flex-shrink-0 w-8 h-8 bg-sky border-2 border-navy flex items-center justify-center" aria-label="Completed">
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10L8 14L16 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-slate font-bold uppercase tracking-wider">{progress}% complete</span>
            {hasStarted && !isComplete && (
              <span className="text-xs font-black text-sky uppercase tracking-wider">In Progress</span>
            )}
          </div>
          <ProgressBar percent={progress} />
        </div>

        {/* CTA */}
        <Link
          to={`/topics/${topic.id}`}
          className={`block w-full text-center px-5 py-3 md:py-4 text-sm md:text-base font-black uppercase tracking-wider border-4 border-navy transition-all min-h-12 ${
            isComplete
              ? 'bg-sky text-white hover:bg-navy'
              : hasStarted
              ? 'bg-sunshine text-ink hover:shadow-[4px_4px_0px_0px_#2C3E50]'
              : 'bg-white text-navy hover:bg-sunshine'
          }`}
        >
          {isComplete ? '✓ Review' : hasStarted ? 'Continue →' : 'Start →'}
        </Link>
      </div>
    </div>
  );
}
