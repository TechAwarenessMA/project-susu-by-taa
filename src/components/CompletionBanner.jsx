export default function CompletionBanner({ isComplete, onMarkComplete, onUnmarkComplete }) {
  if (isComplete) {
    return (
      <div className="bg-white border-4 border-sky p-8 text-center shadow-[8px_8px_0px_0px_#16C0FF]">
        <h3 className="text-3xl font-black text-navy mb-2 uppercase tracking-tight">Complete!</h3>
        <p className="text-lg text-ink mb-6 font-bold">
          Great job completing this lesson. You&apos;re making wonderful progress!
        </p>
        <button
          onClick={onUnmarkComplete}
          className="px-8 py-4 border-4 border-navy text-navy font-black uppercase tracking-wider hover:bg-navy hover:text-white transition-colors min-h-12"
        >
          Undo
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border-4 border-navy p-8 text-center">
      <h3 className="text-2xl font-black text-navy mb-2 uppercase tracking-tight">Ready to finish?</h3>
      <p className="text-lg text-ink mb-6 font-bold">
        Once you feel confident with this lesson, mark it as complete!
      </p>
      <button
        onClick={onMarkComplete}
        className="bg-sunshine text-ink px-10 py-5 font-black text-lg uppercase tracking-wider border-4 border-navy hover:shadow-[4px_4px_0px_0px_#2C3E50] transition-all min-h-12"
      >
        Mark as Complete &rarr;
      </button>
    </div>
  );
}
