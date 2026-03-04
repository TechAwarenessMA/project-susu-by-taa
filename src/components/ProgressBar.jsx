export default function ProgressBar({ percent }) {
  return (
    <div className="w-full bg-cream h-3 border-2 border-navy" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} aria-label={`${percent}% complete`}>
      <div
        className="bg-sky h-full transition-all duration-500 ease-out"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
