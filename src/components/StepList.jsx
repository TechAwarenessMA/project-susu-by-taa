export default function StepList({ steps, completedSteps = [], onToggleStep }) {
  return (
    <ol className="relative space-y-4">
      {steps.map((step, i) => {
        const isComplete = completedSteps.includes(step.number);
        const isLast = i === steps.length - 1;
        return (
          <li key={step.number} className="lesson-step flex items-start gap-4 relative">
            {/* Connecting line */}
            {!isLast && (
              <div className="absolute left-6 top-14 w-1 bg-cream" style={{ height: 'calc(100% - 20px)' }} />
            )}
            {/* Step number */}
            <button
              onClick={() => onToggleStep?.(step.number)}
              className={`flex-shrink-0 w-12 h-12 flex items-center justify-center text-lg font-black transition-colors z-10 border-4 ${
                isComplete
                  ? 'bg-sky text-white border-navy'
                  : 'bg-sunshine text-ink border-navy'
              }`}
              aria-label={`Step ${step.number}${isComplete ? ' (completed)' : ''}`}
            >
              {isComplete ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10L8 14L16 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                step.number
              )}
            </button>
            {/* Step content */}
            <div className="flex-1 pt-2">
              <p className="text-lg text-ink leading-relaxed">{step.instruction}</p>
              {step.tip && (
                <p className="mt-2 text-base text-slate italic border-l-8 border-sunshine bg-[#FFFDF0] pl-4 py-2">
                  {step.tip}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
